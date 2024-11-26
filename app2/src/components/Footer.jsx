import { useContext } from "react";
import { MyContext } from "./context";

export function Footer(){
    const c1=useContext(MyContext)
    return(
    <div>
        Hello This is footer !!! {c1.msg}
    </div>)
}