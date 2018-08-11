import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <section class="lanaguage-app-page-content">
      <div class="language-app-flex-container">
        <section class="language-app-sidebar" id="Menu">
          <div onclick="closeMenu();" id="close-menu-button">
            X
        </div>
          <text>
            <br />
            脱盲
        </text>
          <div class="language-app-sidebar-option">
            <a href="" class="language-app-sidebar-link" id="language-app-link-default">
              Click 1
          </a>
          </div>
          <div class="language-app-sidebar-option">
            <a href="" class="language-app-sidebar-link" id="language-app-link-default">
              Click 2
          </a>
          </div>
        </section>
        <nav class="language-app-flex-item" id="Content">
          <button onclick="openMenu();" id="open-menu-button">
            ☰
          </button> 脱盲 - TuoMang
          <div class="language-app-content-container">
            <div class="language-app-content-item">
              <h class="content-header">
                Text Source
              </h>
              <p class="content-paragraph">
                the text from the source
              </p>
              <p class="content-paragraph">
                pinyin
              </p>
              <input class="user-input" id="user-translation" placeholder="Enter your translation here..." />
            </div>
            <div class="language-app-content-item">
              <button class="content-button">
                Option1
              </button>
              <button class="content-button">
                Option2
              </button>
              <button class="content-button">
                Option3
              </button>
              <br />
              <h class="content-header">
                Subsection Header
              </h>
              <p class="content-paragraph">
                content
              </p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
