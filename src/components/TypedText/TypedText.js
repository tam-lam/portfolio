import React, { Component } from "react";
class TypedText extends Component {
  state = {};
  componentDidMount() {
    let typed = "";
    const element = document.querySelector(".typity");
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
          startType(getRandomPun(), 0);
        }, 2000);
      }
    }

    function getRandomPun() {
      const puns = [
        "Grad student",
        "Developer",
        "Program builder",
        "Code craftsman"
      ];
      const index = Math.floor(Math.random() * puns.length);

      return puns[index];
    }

    startType(getRandomPun(), 0);
  }
  render() {
    return (
      <React.Fragment>
        <span class="typity"></span>
      </React.Fragment>
    );
  }
}

export default TypedText;
