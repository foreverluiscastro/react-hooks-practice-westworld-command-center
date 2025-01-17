import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import Headquarters from "./Headquarters";
import { Log } from "../services/Log";
import WestWorldMap from "./WestworldMap";

function App() {
  const [areas, setAreas] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [activateAll, setActivateAll] = useState(false);
  let date = new Date();
  let time = date.toLocaleTimeString();
  const [logs] = useState([{type: 'notify', msg: `[${time}] NOTIFY: Welcome to WestWorld.`}])
  const Hosts = "http://localhost:3001/hosts";
  const Areas = "http://localhost:3001/areas";
  useEffect(() => {
    fetch(Hosts)
      .then((r) => r.json())
      .then((hosts) => setHosts(hosts));
    fetch(Areas)
      .then((r) => r.json())
      .then((areas) => setAreas(areas));
  }, []);

  const activeHosts = hosts.filter((host) => host.active === true);
  const inactiveHosts = hosts.filter((host) => host.active === false);

  const handleSelect = (host) => {
    if (selected === host) {
      setSelected(null);
    } else {
      setSelected(host);
    }
  };

  const handlePatch = async (host) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(host),
    };
    const r = await fetch(Hosts + `/${host.id}`, configObj);
    const responseObj = await r.json();
    console.log(responseObj);
  };

  function generateLogs(log) {
    logs.unshift(log)
    return logs
  }

  const handleActiveToggle = (host) => {
    if (host.active === false) {
      generateLogs(Log.warn(`Activated ${host.firstName}`))
    } else {
      generateLogs(Log.warn(`Deactivated ${host.firstName}`))
    }
    const updatedHost = host;
    updatedHost.active = !host.active;
    const responseObj = handlePatch(updatedHost);
    const filteredList = hosts.filter((host) => host.id !== responseObj.id);
    filteredList.push(responseObj);
    const orderedList = filteredList.sort((a, b) => a.id - b.id);
    setHosts(orderedList);
  };

  const handleMassActivate = () => {
    if (activateAll === false) {
      // if activateAll is false, set it to true and mass activate
      setActivateAll(true);
      hosts.forEach((host) => {
        host.active = true;
        handlePatch(host);
      });
    } else {
      // else if it's true, set it to false and mass deactivate
      setActivateAll(false);
      hosts.forEach((host) => {
        host.active = false;
        handlePatch(host);
      });
    }
  };

  return (
    <Segment id="app">
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
      <WestWorldMap
        areas={areas}
        onSelect={handleSelect}
        activeHosts={activeHosts}
        selected={selected}
      />
      <Headquarters
        onSelect={handleSelect}
        inactiveHosts={inactiveHosts}
        selected={selected}
        areas={areas}
        onActiveToggle={handleActiveToggle}
        activateAll={activateAll}
        onMassActivate={handleMassActivate}
        onPatch={handlePatch}
        hosts={hosts}
        setHosts={setHosts}
        logs={logs}
        generateLogs={generateLogs}
      />
    </Segment>
  );
}

export default App;
