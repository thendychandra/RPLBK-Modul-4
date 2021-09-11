import { useState } from "react";
import "./State.css";

export default function Index() {
  const contoh = useState(false);
  console.log("[state]", contoh);

  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const countUp = () => setCount(count + 1);
  const countDown = () => setCount(count - 1);

  return (
    <div className="container">
      {show && (
        <>
          <div className="titleWrapper">
            <p className="title">input with useState</p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                placeholder="name"
                size="50"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="password"
                size="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </>
      )}
      <button className="Button" onClick={() => setShow(!show)}>
        {show ? "hide" : "show"}
      </button>
      <div style={{ marginBlock: 30 }} />
      <p className="title">Counter with useState</p>
      <p className="countValue">{count}</p>
      <div className="btnWrapper">
        <button className="Button" onClick={countUp}>
          Up
        </button>
        <button className="Button" onClick={countDown}>
          Down
        </button>
      </div>
    </div>
  );
}
