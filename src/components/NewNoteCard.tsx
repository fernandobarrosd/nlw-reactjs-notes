import * as ReactDialog from "@radix-ui/react-dialog";
import arrowUpRightIcon from "../assets/arrow-up-right.svg";
import { ChangeEvent, useContext, useState } from "react";
import { Dialog } from "./Dialog";
import { AppContext } from "../context/AppContext";



let speechRecognition : SpeechRecognition | null = null;

export function NewNoteCard() {
  const { saveNote } = useContext(AppContext);
  const [ onBoardingIsVisible, setOnBoardingIsVisible ] = useState(true);
  const [ noteContent, setNoteContent ] = useState("");
  const [ isRecording, setIsRecording ] = useState(false);
  

  function handleChange({ target : { value } }: ChangeEvent<HTMLTextAreaElement>) {
    setNoteContent(value);
  }

  function handleSaveNote() {
    if (!noteContent) return;
    saveNote(noteContent);
    setNoteContent("");
    setOnBoardingIsVisible(true);
  }


  
  function handleStartEditor() {
    setOnBoardingIsVisible(false);
  }

  

  function isSpeechRecognitionAPIAvailable() {
    return window.SpeechRecognition || window.webkitSpeechRecognition;
  }


  function handleStartRecording() {
    if (!isSpeechRecognitionAPIAvailable()) {
      alert("Infelizmente o seu navegador não suporta a API de gravação de audio");
      return;
    }
    
    setOnBoardingIsVisible(false);
    setIsRecording(true);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    speechRecognition = new SpeechRecognition();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.addEventListener("result", ({ results }) => {
      const transcription = Array.from(results).reduce((text, result) => 
      `${text}${result[0].transcript}`, "");
      setNoteContent(transcription);
    });
    speechRecognition.start();

    
  }

  function handleStopRecording() {
    speechRecognition?.stop();
    setIsRecording(false);
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
                <Dialog.CloseButton/>
                <form className="flex-1 flex flex-col gap-3">
                  <span className="text-sm/[14px] font-medium text-slate-200">
                    Adicionar uma nota
                  </span>
                  { onBoardingIsVisible ? (
                    <>
                      <p className="text-sm text-slate-400 flex gap-2">
                        Começe  
                        <button 
                        className="font-medium text-lime-400"
                        type="button"
                        onClick={handleStartRecording}>
                            Gravando uma nota
                        </button>
                        em áudio ou se preferir
                        <button 
                        className="font-medium text-lime-400"
                        type="button"
                        onClick={handleStartEditor}>
                          Utilize apenas texto
                        </button>
                      </p>
                      
                    </>
                ) :(
                  <textarea
                    disabled={isRecording}
                    autoFocus
                    className="bg-transparent 
                    text-sm text-slate-400 resize-none outline-none
                    flex-1 pb-9"
                    onChange={handleChange}
                    value={noteContent}/>
                )}
                { isRecording ? (
                  <button className="bg-slate-800 text-slate-50
                  absolute w-full left-[0] right-[0] bottom-0
                  px-16 py-4 text-sm/[14px] font-semibold
                  flex justify-center gap-3 items-center
                  hover:text-slate-100"
                  type="button"
                  onClick={handleStopRecording}>
                      <div className="bg-red-500 size-3 rounded-full
                      animate-bounce"/>
                      <p>Gravando! (clique p/ interromper)</p>
                  </button>
                ) : (
                  <ReactDialog.Close className="bg-lime-400 text-lime-950
                absolute w-full left-[0] right-[0] bottom-0
                hover:bg-lime-500
                px-16 py-4 text-sm/[14px] font-semibold"
                type="button"
                onClick={handleSaveNote}>
                    Salvar nota
                </ReactDialog.Close>
                )}
                </form>
              </Dialog.Content>
            </ReactDialog.Portal>
        </ReactDialog.Root>
    );
}