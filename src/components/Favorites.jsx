import React, { useState } from "react";
import { Card, Grid, Button } from "semantic-ui-react";

export default function Favorites({ sendPeople, sendPlanets, dataRemove }) {
  const [category, setCategory] = useState("people");

  const favPlanets = sendPlanets.map((e) => {
    return (
      <div key={e.name}>
        <Card
          link
          header={e.name}
          meta={"Climate: " + e.climate}
          description={"Terrain: " + e.terrain}
        />
        <Button
          animated="fade"
          className="favorites"
          inverted
          color="blue"
          onClick={() => dataRemove(e, "planet")}
        >
          <Button.Content visible>Remove from favorites</Button.Content>
          <Button.Content hidden>Remove this favorite?</Button.Content>
        </Button>
      </div>
    );
  });

  const favPeople = sendPeople.map((e) => {
    return (
      <div key={e.name}>
        <Card
          link
          header={e.name}
          meta={"Born: " + e.birth_year}
          description={"Mass: " + e.mass + " Kilos"}
        />
        <Button
          animated="fade"
          className="favorites"
          inverted
          color="vk"
          onClick={() => dataRemove(e, "people")}
        >
          <Button.Content visible>Remove from favorites</Button.Content>
          <Button.Content hidden>Remove this favorite?</Button.Content>
        </Button>
      </div>
    );
  });

  return (
    <div>
      <h1 className='fav-h1'>Favorites</h1>
      <ul className="choose">
        <li className="people">
          <Button inverted color='vk' onClick={() => setCategory("people")}>Peoples</Button>
        </li>
        <li>
          <Button inverted color='vk' onClick={() => setCategory("planet")}>Planets</Button>
        </li>
      </ul>
      <Grid className="list" columns={2}>
        {category === "people" ? favPeople : favPlanets}
      </Grid>
    </div>
  );
}
