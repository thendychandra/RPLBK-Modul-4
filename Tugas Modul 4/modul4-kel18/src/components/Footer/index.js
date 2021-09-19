import { useState } from "react";
export default function Footer(props) {
  const { author, image, image2, quotes, tema } = props;

  const [src, setSrc] = useState(image2);
  const [name, setName] = useState("Lab Rekayasa Perangkat Lunak");
  const [position, setPosition] = useState("1");
  
  const changeSlider = () => {
    setSrc(position === "2" ? image : image2);
    setName(
      position === "2" ? author : "Lab Rekayasa Perangkat Lunak"
    );
    setPosition(position === "1" ? "2" : "1");
  }
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center shadow-md " +
          tema +
          " pb-6"
        }
        style={{ height: "200px" }}
      >
        <h3 className="pt-4 pb-3 font-bold text-xl text-black">{quotes}</h3>
        <div className="flex flex-row">
          <button
            className="btn"
            style={{
              padding: "10px",
              margin: "15px",
            }}
            onClick={changeSlider}
          >
            &#10094;
          </button>
          <div className="flex flex-col">
            <img className="w-20 h-30 mx-auto mb-1" src={src} alt="logo"></img>
            <p
              className="text-black"
              style={{
                width: "230px",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              - {name} -
            </p>
          </div>
          <button
            className="btn"
            style={{
              padding: "10px",
              margin: "15px",
            }}
            onClick={changeSlider}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
}
