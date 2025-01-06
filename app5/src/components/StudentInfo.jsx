import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function StudentInfo() {
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleLanguageChange(event) {
    const value = event.target.value;
    setLanguages((prev) =>
      event.target.checked ? [...prev, value] : prev.filter((lang) => lang !== value)
    );
  }

  function handleClick() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    dispatch({ type: "SETNAME", name });
    dispatch({ type: "SETEMAIL", email });
    dispatch({ type: "SETADDRESS", address });
    dispatch({ type: "SETGENDER", gender });
    dispatch({ type: "SETLANGUAGES", languages });
    navigate("marks");
  }

  return (
    <div>
      <input type="text" ref={nameRef} placeholder="Enter Name" />
      <br />
      <input type="email" ref={emailRef} placeholder="Enter Email" />
      <br />
      <input type="text" ref={addressRef} placeholder="Enter Address" />
      <br />
      <div>
        Gender:
        <label>
          <input type="radio"name="gender"value="Male" onChange={handleGenderChange}/> Male
        </label>
        <label>
          <input type="radio"name="gender"value="Female" onChange={handleGenderChange} />Female
        </label>
      </div>
      <br />
      <div>
        Languages:
        <label>
          <input type="checkbox"  value="Hindi"  onChange={handleLanguageChange}/>Hindi
        </label>
        <label>
          <input type="checkbox" value="Marathi"  onChange={handleLanguageChange} /> Marathi
        </label>
        <label>
          <input type="checkbox" value="English"  onChange={handleLanguageChange} />English
        </label>
      </div>
      <br />
      <input type="button" value="Next" onClick={handleClick} />
    </div>
  );
}
