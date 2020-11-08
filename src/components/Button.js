import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  // static contextType = LanguageContext; //sets up contextType property - hooks up context object to class component
  //adds property to the class Button - could also be Button.contextType etc just before export

  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  //contexttype not needed when using consumer component
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";

    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
//Consumer always has one argument/child to it - always a function - auto caleld by consumer - called with whatever current value in pipe
//use Consumer over context when want to get info out of multiple diff context objects inside single component
//When using second contextWrapper - need to put everything else in the fucntion within it
export default Button;
