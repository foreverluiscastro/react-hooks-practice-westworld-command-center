import React from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from "./Headquarters";
import WestWorldMap from './WestworldMap';

function App() {
  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestWorldMap />
      <Headquarters />
    </Segment>
  );
}

export default App;
