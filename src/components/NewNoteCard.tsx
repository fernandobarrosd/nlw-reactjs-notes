import * as ReactDialog from "@radix-ui/react-dialog";
import arrowUpRightIcon from "../assets/arrow-up-right.svg";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Dialog } from "./Dialog";


export function NewNoteCard() {
  const [ onBoardingIsVisible, setOnBoardingIsVisible ] = useState(true);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleChange({ target : { value } }: ChangeEvent<HTMLTextAreaElement>) {
    if (!value.length) setOnBoardingIsVisible(true);
  }

  function handleSaveNote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(textAreaRef.current?.value);
  }

  function handleStartEditor() {
    setOnBoardingIsVisible(false);
  }

  function handleCloseDialog() {
    setOnBoardingIsVisible(true);
  }

    return (
        <ReactDialog.Root>
          <ReactDialog.Trigger className="bg-slate-700 relative rounded-md p-5 gap-3
          flex flex-col
          text-left outline-none
          hover:ring-2 hover:ring-slate-600
          focus-visible:ring-2 focus-visible:ring-lime-400">
            <button className="bg-slate-800 absolute right-[0] p-1.5 top-[0]">
              <img src={arrowUpRightIcon} alt="Arrow Up Right Icon"/>
            </button>
            
            <span className="font-medium text-sm text-slate-200">
              Adicionar nota
            </span>
            <p className="font-medium text-xs text-slate-400 leading-6">
              Grave uma nota em áudio que será convertida para texto 
              automaticamente.
            </p>
          </ReactDialog.Trigger>
          <ReactDialog.Portal>
              <Dialog.Overlay/>
              <Dialog.Content>
                <Dialog.CloseButton onClick={handleCloseDialog}/>
                <form className="flex-1 flex flex-col gap-3"
                onSubmit={handleSaveNote}>
                  <span className="text-sm/[14px] font-medium text-slate-200">
                    Adicionar uma nota
                  </span>
                  { onBoardingIsVisible ? (
                    <>
                      <p className="text-sm text-slate-400 flex gap-2">
                        Começe  
                        <button className="font-medium text-lime-400">
                            Gravando uma nota
                        </button>
                        em áudio ou se preferir
                        <button className="font-medium text-lime-400"
                        onClick={handleStartEditor}>
                          Utilize apenas texto
                        </button>
                      </p>
                      
                    </>
                ) : (
                  <textarea 
                    autoFocus
                    onChange={handleChange}
                    ref={textAreaRef}
                    className="bg-transparent 
                    text-sm text-slate-400 resize-none outline-none
                    flex-1 pb-9"/>
                  
                )}
                <ReactDialog.Close className="bg-lime-400 text-lime-950
                absolute w-full left-[0] right-[0] bottom-0
                hover:bg-lime-500
                px-16 py-4 text-sm/[14px] font-semibold">
                    Salvar nota
                </ReactDialog.Close>
                </form>
              </Dialog.Content>
            </ReactDialog.Portal>
        </ReactDialog.Root>
    );
}