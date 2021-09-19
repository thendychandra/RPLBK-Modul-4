import { useState } from "react";
export default function Quotes(props) {
  const { header, header_desc, image, tema } = props;

  const [txt, setTxt] = useState("hidden");
  const [txtBtn, setBtn] = useState("btn btn-success");

  const showList = () => {
    setTxt("text-center text-gray-700 font-normal");
    setBtn("hidden");
  };

  return (
    <div className="C" style={{marginTop:"-10vh"}}>
      <div
        className={"flex items-center justify-center "+tema}
        style={{ height: "110vh" }}
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          <span className="block">{header}</span>
          <img className="mx-auto mt-7 mb-7" src={image} alt="logo"></img>
          <span className="block text-indigo-400">Modul 4</span>
          <span className="block text-indigo-400 mb-10">REACT HOOKS</span>
          <p className={txt}>{header_desc}</p>
          <button
            className={txtBtn}
            style={{
              padding: "10px",
              marginTop: "70px",
            }}
            onClick={showList}
          >
            Cek Kelompok !
          </button>
        </h2>
      </div>
    </div>
  );
}
