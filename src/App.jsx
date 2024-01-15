import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [users, setUsers] = useState([]);

  async function getData() {
    const fetchData = await fetch("users.json");

    const datajson = await fetchData.json();

    setUsers(datajson);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <input type="text" className="inp"/> <button className="but">Search</button>
      </div>
      <div className="divCont">
        {users &&
          users.map((user) => (
            <Cards
              img={user.avatar}
              nombre={user.name}
              roles={user.role}
              correo={user.email}
            />
          ))}
      </div>
    </>
  );
}

export default App;
