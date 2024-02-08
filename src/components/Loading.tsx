type LoadingProps = {
    isVisible?: boolean
};

export function Loading({ isVisible = false } : LoadingProps) {
    if (isVisible) {
        return (
            <div className="size-8 rounded-[50%]
            border-solid border-slate-700 border-[4px]
            border-t-slate-200 animate-spin"/>
        );
    }
}