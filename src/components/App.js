import React from "react";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  //arrow function as callback method passing off to something else in application ( Grider)
  // onLanguageChange = (language) => {
  //   this.setState({ language: language });
  // };
  //removed callback as app no longer in charge of state as have separate store

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
//Wrap the component you want to pass the info too in the Provider Wrap
//value is a set prop name
//Each new component of context.Provider is a new instance so new pipe of info

export default App;
