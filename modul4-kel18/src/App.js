import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Usestate from "./Usestate/State";
import Useeffect from "./Useeffect/Effect";
import Usecontext from "./Usecontext/Context";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="title">
          <p>Kelompok XX</p>
        </div>
        <nav>
          <Link className="text" to="/">
            useState
          </Link>
          <Link className="text navtext2" to="/effect">
            useEffect
          </Link>
          <Link className="text" to="/context">
            useContext
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Usestate} />
        <Route path="/effect" component={Useeffect} />
        <Route path="/context" component={Usecontext} />
      </Switch>
    </BrowserRouter>
  );
}
