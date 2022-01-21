import "./App.css";
import react from "react";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Components/Registration";
import AddForm from "./Components/Form";
import Movielist from "./Components/Movies";
import MoviesDetails from "./Components/MoviesDetails";
import Fav from "./Components/Favorites";
import UpcomingList from "./Components/Upcoming";
import {LanguageContext} from './context/LangContext'
function App() {
  const [lang,setLang] = useState('en')
  return (
    <LanguageContext.Provider value={{lang,setLang}}>
      <BrowserRouter>
        <Navbar />
        <div className="container my-5">
          <Switch>
            <Route path={"/"} exact component={Movielist} />
            <Route path={"/Movies"} exact component={Movielist} />
            <Route path={"/Form"} exact component={AddForm} />
            <Route path={"/Favorites"} exact component={Fav} />
            <Route path={"/Upcoming"} exact component={UpcomingList} />
            <Route path={"/movie/:id"} exact component={MoviesDetails} />
            <Route path={"/Registration"} exact component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

export default App;
