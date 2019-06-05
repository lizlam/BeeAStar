import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import User from "./User";
import List from "./List";
import Star from "./Star";
import Footer from "./Footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" />
      <Header />
      <User />
      <Star />
      <List />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
