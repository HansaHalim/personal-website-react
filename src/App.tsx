import React from "react";
import "./App.css";
import Home from "./sections/Home";
import Blog from "./sections/Blog";
import Netflix from "./sections/Blog/Contents/Netflix";
import HowBlog from "./sections/Blog/Contents/HowBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/netflix-blog" exact component={() => <Netflix />} />
          <Route path="/how-blog" exact component={() => <HowBlog />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
