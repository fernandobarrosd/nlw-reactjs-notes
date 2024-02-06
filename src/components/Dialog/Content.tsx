import { Content as DialogContent, DialogContentProps } from "@radix-ui/react-dialog";

export function Content({ ...props } : Omit<DialogContentProps, "className">) {
    return (
        <DialogContent className="absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        font-inter p-5 rounded-md gap-5 flex flex-col
      bg-slate-700 max-w-[640px] w-full h-[600px]" {...props}/>
    );
}