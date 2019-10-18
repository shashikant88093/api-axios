import React, { Component } from "react";
import Table from "./Table";
import Axios from "axios";

export class App extends Component {
  state = {
    Table: []
  };
  componentDidMount() {
    Axios.get("http://5da9a1bede10b40014f373be.mockapi.io/Api-table").then(
      response => {
        this.setState({ Table: response.data });
        
      }
    );
  }
  render() {
    return (
      <>
        <Table value={this.state.Table} />
      </>
    );
  }
}

export default App;
