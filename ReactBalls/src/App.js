import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import Game from "./Containers/Game/Game";
import Rules from "../src/Components/Rules/Rules";
import { Route, Switch } from "react-router-dom";
import History from "../src/Containers/History/History";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/rules" component={Rules} />
            <Route path="/history" component={History} />
            <Route path="/" exact component={Game} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
