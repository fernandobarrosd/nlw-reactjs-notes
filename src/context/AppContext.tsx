import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

type AppContextProps = {
    pageIsStarted: boolean
    notes: Note[]
    saveNote(content: string) : void
    deleteNote(id: string) : void
    setPageIsStarted: Dispatch<SetStateAction<boolean>>
}

export type Note = {
    id: string
    createdDate: Date
    content: string
}
  

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children } : PropsWithChildren) {
    const [ pageIsStarted, setPageIsStarted] = useState(false);
    const [ notes, setNotes ] = useState<Note[]>(() => {
        const notesFromLocalStorage = localStorage.getItem("@notes-nlw/notes");
        
        if (notesFromLocalStorage) {
          return JSON.parse(notesFromLocalStorage);
        }
        return [];
      });

      function saveNote(content: string) {
        const newNote = {
          id: crypto.randomUUID(),
          createdDate: new Date(),
          content
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        const notesArray = [newNote, ...notes];
    
        localStorage.setItem("@notes-nlw/notes",  JSON.stringify(notesArray));
      }

      function deleteNote(id: string) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        const filteredNotes = notes.filter(note => note.id !== id);
        localStorage.setItem("@notes-nlw/notes",  JSON.stringify(filteredNotes));
      }
    return (
        <AppContext.Provider value={{
            pageIsStarted, setPageIsStarted,
            saveNote, deleteNote,
            notes

        }}>
            { children }
        </AppContext.Provider>
    );
}