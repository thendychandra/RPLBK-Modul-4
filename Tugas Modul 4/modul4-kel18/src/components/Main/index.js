import CardList from "../CardList";
import { useState, useEffect } from "react";
const quotes = [
  {
    quote:
      "Start writing, no matter what. The water does not flow until the faucet is turned on.",
    author: "Louis L’Amour",
  },
  {
    quote:
      "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    author: "William Faulkner",
  },
  {
    quote: "The first draft is just you telling yourself the story.",
    author: "Terry Pratchett",
  },
  { quote: "Start before you’re ready.", author: "Steven Pressfield" },
  {
    quote:
      "You can’t wait for inspiration. You have to go after it with a club.",
    author: "Jack London",
  },
  {
    quote: "You can always edit a bad page. You can’t edit a blank page.",
    author: "Jodi Picoult",
  },
];

export default function App(props) {
  const { tema } = props;

  const [contacts, setContacts] = useState([]);
  const [card, setCard] = useState(false);
  const [src, setSrc] = useState("1");

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=" + src)
      .then((res) => res.json())
      .then((data) => {
        setContacts(data.data);
      })
      .catch(console.log);
  });

  const showList = () => {
    setCard(!card);
  };

  const changeList1 = () => {
    setSrc("1");
  };

  const changeList2 = () => {
    setSrc("2");
  };
  return (
    <>
      <div className={tema}>
        <button
          className="btn btn-primary"
          style={{
            width: "92vw",
            padding: "20px",
            margin: "3vw",
          }}
          onClick={showList}
        >
          {card ? "Hide" : "Show"} List!
        </button>
        {card && (
          <>
            <CardList contacts={contacts} quotes={quotes} isNameBold />
            <center>
              <span
                style={{
                  marginLeft: "-10px",
                }}
              >
                Page:{" "}
              </span>
              <button
                className="btn btn-primary"
                style={{
                  margin: "10px",
                }}
                onClick={changeList1}
              >
                1
              </button>
              <button
                className="btn btn-primary"
                style={{
                  margin: "10px",
                }}
                onClick={changeList2}
              >
                2
              </button>
            </center>
          </>
        )}
      </div>
    </>
  );
}
