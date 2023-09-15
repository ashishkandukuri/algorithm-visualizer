import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./style.css";

class TypeWriterC extends Component {
  render() {
    return (
      <div className="type display-4">
        <span class="badge badge-dark">
          <Typewriter
            options={{
              strings: ["Sieve of Eratosthenes", "Sorting Algorithms"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
    );
  }
}

export default TypeWriterC;
