import React, { useState , useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from "./Headquarters";
import WestWorldMap from './WestworldMap';


function App() {
  const [areas, setAreas] = useState([]); 
  const [hosts, setHosts] = useState([]); 
  const [selected, setSelected] = useState(null); 
  const Hosts = 'http://localhost:3001/hosts';
  const Areas = 'http://localhost:3001/areas';
  useEffect(()=>{
    fetch(Hosts)
    .then((r) => r.json())
    .then(hosts => setHosts(hosts));
    fetch(Areas)
    .then((r) => r.json())
    .then((areas) => setAreas(areas));
  },[])

  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestWorldMap areas={areas}/>
      <Headquarters />
    </Segment>
  );
}

export default App;
