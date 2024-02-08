/* eslint-disable quotes */
import { ChangeEvent, useContext, useState } from "react";
import logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { NewNoteCard } from "../components/NewNoteCard";
import { NoteCard } from "../components/NoteCard";
import { AppContext } from "../context/AppContext";


export function PageStarted() {
  const [ searchValue, setSearchValue ] = useState("");
  const { notes } = useContext(AppContext);

  function handleFilterNotes({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    setSearchValue(value);
  }
  const filteredNotes = searchValue ? notes.filter(
    note => note.content.toLowerCase().startsWith(searchValue.toLowerCase())) : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 font-inter px-5">
      <img src={logo} alt="NLW Logo"/>
      <form onSubmit={e => e.preventDefault()}>
        <Input type="text"
        required
        value={searchValue}
        onChange={handleFilterNotes}
        placeholder="Busque em suas notas..." />
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard/>
        { filteredNotes.map(note => (
          <NoteCard key={note.id} note={note}/>
        )) }
      </div>
    </div>
  );
}