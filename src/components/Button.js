import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext; //sets up contextType property - hooks up context object to class component
  //adds property to the class Button - could also be Button.contextType etc just before export
  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary"> {text} </button>;
  }
}

export default Button;
