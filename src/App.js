import "./App.css";
import react from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Registration";
import AddForm from "./Components/Form";
import Movielist from "./Components/Movies";
import MoviesDetails from "./Components/MoviesDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path={"/Movies"} exact component={Movielist} />
          <Route path={"/Form"} exact component={AddForm} />
          <Route path={"/movie/:id"} exact component={MoviesDetails} />
          <Route path={"/Registration"} exact component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
