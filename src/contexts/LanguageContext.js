import React from "react";

const Context = React.createContext("english"); //pass in default value
// Capital C for context = NB

class LanguageStore extends React.Component {
  state = {
    language: "english",
  };

  onLanguageChange = (langauge) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
