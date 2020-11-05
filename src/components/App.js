import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = {
    language: "english",
  };

  //arrow function as callback method passing off to something else in application (Grider)
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
        <UserCreate />
      </div>
    );
  }
}

export default App;
