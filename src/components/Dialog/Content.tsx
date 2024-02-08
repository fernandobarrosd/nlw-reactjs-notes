import { Content as DialogContent, DialogContentProps } from "@radix-ui/react-dialog";

export function Content({ ...props } : Omit<DialogContentProps, "className">) {
    return (
        <DialogContent className="fixed md:left-1/2 md:top-1/2
        md:-translate-x-1/2 md:-translate-y-1/2
        font-inter p-5 md:rounded-md gap-5 flex flex-col
        inset-0 md:inset-auto
        overflow-auto
      bg-slate-700 max-w-full w-full h-full
      md:max-w-[640px] md:h-[600px]" {...props}/>
    );
}