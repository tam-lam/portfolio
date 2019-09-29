import React, { Component } from "react";
import * as Constants from "../../constants/constants";

class TypedText extends Component {
  state = {};
  componentDidMount() {
    let typed = "";
    const element = document.querySelector(".typity");
    var lastPun = "";
    function startType(pun, index) {
      if (index < pun.length) {
        typed += pun.charAt(index);
        element.innerHTML = typed;
        index++;
        setTimeout(function() {
          startType(pun, index);
        }, 50);
      } else {
        setTimeout(function() {
          element.classList.add("highlight");
        }, 1000);

        setTimeout(function() {
          element.classList.remove("highlight");
          typed = "";
          element.innerHTML = typed;
          lastPun = pun;
          startType(getRandomPun(lastPun), 0);
        }, 2000);
      }
    }

    function getRandomPun(lastPun) {
      const puns = Constants.TYPED_TEXT;
      var index = Math.floor(Math.random() * puns.length);
      while (puns[index] === lastPun) {
        index = Math.floor(Math.random() * puns.length);
      }
      return puns[index];
    }

    startType(getRandomPun(lastPun), 0);
  }
  render() {
    return (
      <React.Fragment>
        <span className="typity"></span>
      </React.Fragment>
    );
  }
}

export default TypedText;
