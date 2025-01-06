import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../stores/Store";  


export default function StudentMarks() {
  const subject1Ref = useRef();
  const subject2Ref = useRef();
  const navigate = useNavigate();

 
  const setSubject1 = useStore((state) => state.setSubject1);
  const setSubject2 = useStore((state) => state.setSubject2);

  function handleClick() {
    const subject1 = subject1Ref.current.value;
    const subject2 = subject2Ref.current.value;

   
    setSubject1(subject1);
    setSubject2(subject2);

    
    navigate("/show");
  }

  return (
    <div >
      <div >
        <input
          type="text"
          ref={subject1Ref}
          placeholder="Enter Subject 1 Marks"
        />
        <input
          type="text"
          ref={subject2Ref}
          placeholder="Enter Subject 2 Marks"
        />
      </div>
      <input type="button" value="Finish" onClick={handleClick} />
    </div>
  );
}
