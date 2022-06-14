import React, { useState , useEffect } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({
  selected,
  areas,
  onActiveToggle,
  onPatch,
  onLimitCheck,
  hosts,
  setHosts
}) {
  const { firstName, active, imageUrl, gender, area } = selected;
  
  const [currentArea, setCurrentArea] = useState("");

  useEffect(() => {
    setCurrentArea(area)
  }, [area]);

  function sanitizeString(string) {
    const replaceUnderscore = string.replace("_", " ");
    const wordsArray = replaceUnderscore.split(" ");
    const capitalizeWords = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizeWords.join(" ");
  }

  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  // const [options] = useState([
  //   { key: "some_area", text: "Some Area", value: "some_area" },
  //   { key: "another_area", text: "Another Area", value: "another_area" },
  // ]);

  const options = areas.map((area) => {
    const sanitizeName = sanitizeString(area.name);
    return {
      key: area.name,
      text: sanitizeName,
      value: area.name
    }
  });

  function handleOptionChange(e, { value }) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    console.log(e, 'this is the event.')
    console.log(value, 'this is the value.')
    setCurrentArea(value)
    selected.area = value
    console.log(selected, 'this is the updated selected object.')
    onPatch(selected)
    const filteredList = hosts.filter((host) => host.id !== selected.id)
    filteredList.push(selected)
    const sortedList = filteredList.sort((a,b) => a.id - b.id)
    setHosts(sortedList)
    // if (onLimitCheck(value) === true ) {
    //   console.log('The value limit check returned true')
    // }
  };


  function handleRadioChange() {
    console.log("The radio button fired");
    onActiveToggle(selected)
  };

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | {gender === 'Male' ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={"Active"}
                checked={active === true}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={currentArea}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
