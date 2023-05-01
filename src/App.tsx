import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808/54881128032875.5628e85cddaa7.jpg"
          alt="Logotype"
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://img3.goodfon.ru/original/1152x864/8/69/priroda-gory-kamni-les.jpg" />
        </div>
        <div>
          ava+description
          <img src="https://mir-s3-cdn-cf.behance.net/user/276/72bf191180636107.63ccd92aa95c0.png" />
        </div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
