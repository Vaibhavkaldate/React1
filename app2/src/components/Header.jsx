import { useContext } from "react";
import { MyContext } from "./context";

export function Header(){
    const c2=useContext(MyContext)
    return(
    <div>
        Hello This is header !!! {c2.msg}
    </div>)
}
