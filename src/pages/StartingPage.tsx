import { useContext, useEffect } from "react";
import logo from "../assets/logo-2.svg";
import { Loading } from "../components/Loading";
import { AppContext } from "../context/AppContext";

export function StartingPage() {
    const { pageIsStarted, setPageIsStarted } = useContext(AppContext);

    useEffect(() => {
        setTimeout(() => {
            setPageIsStarted(true);
        }, 2000);
    }, [setPageIsStarted]);

    return (
        <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
            <img 
            src={logo} 
            alt="NLW Logo"
            className="h-12"/>
            <Loading isVisible={!pageIsStarted}/>
        </div>
    );
}