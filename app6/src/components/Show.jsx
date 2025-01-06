import useCountStore from "../store/CountStore";
export default function Show () {
    const i=useCountStore((obj)=>obj.count)
    const inr=useCountStore((obj)=>obj.increaseCount)
    function handleClick(){
        inr({value:10})
    }
    return(
        <div>
            <p>
                <input type="button" value="Increment" onClick={handleClick} />
                <br />
                Count is {i}
            </p>
        </div>
    )
    
}