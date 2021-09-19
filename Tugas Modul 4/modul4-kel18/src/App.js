import { useContext, createContext, useState } from "react";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Gambar from "./assets/images/logo.png";
import Logo from "./assets/images/undip.png";

const header = "Selamat Datang di Praktikum RPLBK";
const header_desc = "Berikut daftar peserta dan kelompok masing-masing";
const footer = "Praktikum RPLBK 2021";

const themes = {
  light: {
    background: "bg-blue-300",
    main: "bg-blue-100",
  },
  dark: {
    background: "bg-indigo-700",
    main: "bg-indigo-500",
  },
};

const ThemeContext = createContext();

export default function App() {
  const [valueTheme, setValueTheme] = useState(themes.light);

  const theme = () => {
    setValueTheme(valueTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={valueTheme}>
        <button
          className={
            valueTheme === themes.light
              ? "btn btn-secondary"
              : "btn btn-light"
          }
          style={{
            position: "sticky",
            width: "50px",
            height: "50px",
            left: "100%",
            top: "20px",
            zIndex: "10",
            marginRight: "20px",
            textAlign: "center",
          }}
          onClick={theme}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="20px"
            fill="currentColor"
            class="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
          </svg>
        </button>
        <HeaderView />
        <MainView />
        <FooterView />
      </ThemeContext.Provider>
    </>
  );
}

function HeaderView() {
  const theme = useContext(ThemeContext);
  return (
    <Header header={header} header_desc={header_desc} image={Gambar} tema={theme.background}/>
  );
}

function MainView() {
  const theme = useContext(ThemeContext);
  return (
    <Main
      tema={theme.main}
    />
  );
}

function FooterView() {
  const theme = useContext(ThemeContext);
  return (
    <Footer
      author="Universitas Diponegoro"
      image={Logo}
      image2={Gambar}
      quotes={footer}
      tema={theme.background}
    />
  );
}
