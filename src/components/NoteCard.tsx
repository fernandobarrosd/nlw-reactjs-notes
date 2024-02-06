import * as ReactDialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Dialog } from "./Dialog";

type NoteProps = React.PropsWithChildren<{
    note: {
      createdDate: Date
      content: string
    }
}>

function NoteCardContent({ children, note: { createdDate, content } } : NoteProps) {
  return (
    <>
       <span className="font-medium text-sm text-slate-300">
        { formatDistanceToNow(createdDate, { locale: ptBR, addSuffix: true })
        .replace(/^[a-z]/, e => e.toUpperCase())}
      </span>
      <p className="font-medium text-xs text-slate-400 leading-6">
        { content }
      </p>
      { children }
    </>
  );
}

export function NoteCard({ note: { createdDate, content }  } : NoteProps) {
    return (
        <ReactDialog.Root>
          <ReactDialog.Trigger className="bg-slate-800 relative rounded-md p-5 
            overflow-hidden gap-3 cursor-pointer
            flex flex-col
            text-left outline-none
            hover:ring-2 hover:ring-slate-600
            focus-visible:ring-2 focus-visible:ring-lime-400">
              <NoteCardContent note={{ createdDate, content }}>
                <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t
                from-black/60 to-black/0 pointer-events-none"/>
              </NoteCardContent>
              
            </ReactDialog.Trigger>
            <ReactDialog.Portal>
              <Dialog.Overlay/>
              <Dialog.Content>
                <NoteCardContent note={{ createdDate, content }}>
                  <Dialog.CloseButton/>
                  <button className="bg-slate-800 text-slate-300 absolute w-full 
                  left-[0] right-[0] bottom-0 px-16 py-4 text-xs group">
                    Deseja 
                    <span 
                    className="text-red-400
                    group-hover:underline
                    ml-2">
                      Apagar essa conta
                    </span>
                  </button>
                  
                </NoteCardContent>
              </Dialog.Content>
            </ReactDialog.Portal>
        </ReactDialog.Root>
        
    );
}