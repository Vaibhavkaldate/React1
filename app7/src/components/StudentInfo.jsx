import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../stores/Store";  



export default function StudentInfo() {
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

 
  const setName = useStore((state) => state.setName);
  const setEmail = useStore((state) => state.setEmail);
  const setAddress = useStore((state) => state.setAddress);
  const setGenderStore = useStore((state) => state.setGender);
  const setLanguagesStore = useStore((state) => state.setLanguages);

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

  
    setName(name);
    setEmail(email);
    setAddress(address);
    setGenderStore(gender);
    setLanguagesStore(languages);
    
    navigate("marks");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input type="text" ref={nameRef} placeholder="Enter Name" />
        <input type="email" ref={emailRef} placeholder="Enter Email" />
        <input type="text" ref={addressRef} placeholder="Enter Address" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span>Gender:</span>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleGenderChange}
          />
          Female
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span>Languages:</span>
        <label>
          <input
            type="checkbox"
            value="Hindi"
            onChange={handleLanguageChange}
          />
          Hindi
        </label>
        <label>
          <input
            type="checkbox"
            value="Marathi"
            onChange={handleLanguageChange}
          />
          Marathi
        </label>
        <label>
          <input
            type="checkbox"
            value="English"
            onChange={handleLanguageChange}
          />
          English
        </label>
      </div>
      <input type="button" value="Next" onClick={handleClick} />
    </div>
  );
}
