import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

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
        <div>
          Select a language
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          />
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}
//Wrap the component you want to pass the info too in the Provider Wrap
//value is a set prop name
export default App;
