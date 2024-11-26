export const Show = ({ info }) => {
  console.log(info);
  return (
    <div>
      <ul>
        {/* <li>{info[0].name}</li>
            <li>{info[1].name}</li>
            <li>{info[2].name}</li> */}

        {/* {info.map((item)=><li key={item.id}>{item.name}</li>)} */}


        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {info.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                  </tr>);
              })}

            </tr>

          </tbody>

        </table>
      </ul>

    </div>

  );
};
