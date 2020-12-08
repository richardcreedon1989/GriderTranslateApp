import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="flag us"
        />
        <i
          onClick={() => this.context.onLanguageChange("dutch")}
          className="flag nl"
          //onLanguageChange no longer on props but on context object as state not stored in App
        />
      </div>
    );
  }
}

export default LanguageSelector;
