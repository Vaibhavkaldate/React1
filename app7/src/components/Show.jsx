import useStore from "./store";  

export default function Show() {


  const obj = useStore((state) => state);

  return (
    <div>
      <h2>Student Details</h2>
      <table border="1" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td>{obj.address}</td>
            <td>{obj.gender}</td>
            <td>{obj.languages.join(", ")}</td>
          </tr>
        </tbody>
      </table>

      <h2>Marks</h2>
      <table border="1" >
        <thead>
          <tr>
            <th>Subject 1</th>
            <th>Subject 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{obj.subject1}</td>
            <td>{obj.subject2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
