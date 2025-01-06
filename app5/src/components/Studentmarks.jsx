import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function StudentMarks() {
  const subject1Ref = useRef();
  const subject2Ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    const subject1 = subject1Ref.current.value;
    const subject2 = subject2Ref.current.value;
    dispatch({ type: 'SETSUBJECT1', subject1 });
    dispatch({ type: 'SETSUBJECT2', subject2 });
    navigate("/show");
  }

  return (
    <div>
      
      <input type="text" ref={subject1Ref} placeholder=" Subject 1 Marks" />
     
      <br />
      <input type="text" ref={subject2Ref} placeholder=" Subject 2 Marks" />
      <br />
      <input type="button" value="Finish" onClick={handleClick} />
    </div>
  );
}
