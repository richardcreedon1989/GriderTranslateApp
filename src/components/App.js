import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = {
    language: "english",
  };

  //arrow function as callback method passing off to something else in application ( Grider)
  onLanguageChange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
//Wrap the component you want to pass the info too in the Provider Wrap
//value is a set prop name
//Each new component of context.Provider is a new instance so new pipe of info

export default App;
