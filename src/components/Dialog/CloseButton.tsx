import { Close as DialogClose } from "@radix-ui/react-dialog";
import closeIcon from "../../assets/close-icon.svg";

type CloseButtonProps = {
    onClick?: () => void
}

export function CloseButton({ onClick } : CloseButtonProps) {
   return (
    <DialogClose className="absolute top-0 right-0 p-1.5 bg-slate-800
    text-slate-400 hover:text-slate-100"
    onClick={onClick}>
        <img src={closeIcon} alt="Dialog Close Icon"
        className="size-5"/>
    </DialogClose>
   );
}