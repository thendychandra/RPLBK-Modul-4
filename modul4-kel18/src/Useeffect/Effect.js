import { useState, useEffect } from "react";

export default function Index() {
  const [show, setShow] = useState(false);
  const [valueInput, setValueInput] = useState({
    user: "",
    password: "",
  });
  const [data, setData] = useState([]);

  // dipanggil hanya sekali
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("[ini data]", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // dipanggil setiap ada perubahan
  useEffect(() => {
    console.log("[spam console]");
  });

  // dipanggil setiap nilai password berubah
  useEffect(() => {
    if (valueInput.password !== "") {
      alert(`component will update & value ${valueInput.password}`);
    }
  }, [valueInput.password]);

  // const inputHandler = (event, type) => {
  //   if (type === "user") {
  //     setValueInput({ ...valueInput, user: event.target.value });
  //   } else setValueInput({ ...valueInput, password: event.target.value });
  // };

  // lebih direkomendasikan
  const inputHandler = (event, type) => {
    if (type === "user") {
      setValueInput((prevState) => {
        return { ...prevState, user: event.target.value };
      });
    } else {
      setValueInput((prevState) => {
        return { ...prevState, password: event.target.value };
      });
    }
  };

  return (
    <div className="container">
      {show && (
        <>
          <div className="titleWrapper">
            <p className="title">useEffect</p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                placeholder="name"
                size="50"
                value={valueInput.user}
                onChange={(event) => inputHandler(event, "user")}
              />
            </div>
            <div>
              <input
                placeholder="password"
                size="50"
                value={valueInput.password}
                onChange={(event) => inputHandler(event, "password")}
              />
            </div>
          </div>
        </>
      )}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      <p className="title" style={{ marginTop: 40 }}>
        list Todo
      </p>
      <ol>
        {data.slice(0, 10).map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ol>
    </div>
  );
}
