import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from './HostInfo';

function Details({
  selected,
  areas,
  onActiveToggle,
  onPatch,
  onLimitCheck,
  hosts,
  setHosts
}) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {!selected ? <Image size="medium" src={Images.westworldLogo} /> : <HostInfo selected={selected} areas={areas} onActiveToggle={onActiveToggle} onPatch={onPatch} onLimitCheck={onLimitCheck} hosts={hosts} setHosts={setHosts}/>}
    </Segment>
  );
}

export default Details;
