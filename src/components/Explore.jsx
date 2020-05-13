import React, { useState, useEffect } from "react";
import { Card, Grid, Button, Search } from "semantic-ui-react";
import axios from "axios";
import "../App.css";

export default function Explore({ callbackData }) {
  useEffect(() => {
    getAllPeople(setPeople, peopleUrl);
    getAllPlanets(setPlanet, planetUrl);
  }, []);

  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [search, setSearch] = useState("");
  const peopleUrl = "https://swapi.dev/api/people/";
  const planetUrl = "https://swapi.dev/api/planets/";

  let planets = [];
  let peoples = [];

  // Get all peoples in api //

  function getAllPeople(setPeople, peopleUrl) {
    axios
      .get(peopleUrl)
      .then((res) => {
        peoples.push(...res.data.results);

        if (res.data.next !== null) {
          getAllPeople(setPeople, res.data.next);
        }

        setPeople([...peoples]);
      })
      .catch((err) => console.log("ERROR: " + err));
  }

  // Get all planets in api //

  function getAllPlanets(setPlanet, planetUrl) {
    axios
      .get(planetUrl)
      .then((res) => {
        planets.push(...res.data.results);

        if (res.data.next !== null) {
          getAllPlanets(setPlanet, res.data.next);
        }

        setPlanet([...planets]);
      })
      .catch((err) => console.log("ERROR: " + err));
  }

  const existingPlanets = planet
    .filter(
      (existing) =>
        existing.name.toLowerCase().match(search.toLowerCase()) ||
        existing.climate.toLowerCase().match(search.toLowerCase()) ||
        existing.terrain.toLowerCase().match(search.toLowerCase())
    )
    .map((my) => {
      return (
        <div key={my.name}>
          <Card
            link
            header={my.name}
            meta={"Climate: " + my.climate}
            description={"Terrain: " + my.terrain}
          />
          <Button
            animated="fade"
            className="favorites"
            inverted
            color="vk"
            onClick={() => callbackData(my, "planets")}
          >
            <Button.Content visible>Add to favorites</Button.Content>
            <Button.Content hidden>Add to favorites?</Button.Content>
          </Button>
        </div>
      );
    });

  const existingPeople = people
    .filter(
      (existing) =>
        existing.name.toLowerCase().match(search.toLowerCase()) ||
        existing.mass.toLowerCase().match(search.toLowerCase()) ||
        existing.birth_year.toLowerCase().match(search.toLowerCase())
    )
    .map((my) => {
      return (
        <div key={my.name}>
          <Card
            link
            header={my.name}
            meta={"Born: " + my.birth_year}
            description={"Mass: " + my.mass + " Kilos"}
          />
          <Button
            animated="fade"
            className="favorites"
            inverted
            color="vk"
            onClick={() => callbackData(my, "people")}
          >
            <Button.Content visible>Add to favorites</Button.Content>
            <Button.Content hidden>Add to favorites?</Button.Content>
          </Button>
        </div>
      );
    });
  return (
    <div>
      <Search className='search-box'
      value={search}
      onSearchChange={(e) => setSearch(e.target.value)}
      showNoResults={false}
      >

      </Search>
      <h2>Peoples</h2>
      <Grid className="list">{existingPeople}</Grid>
      <h2>Planets</h2>
      <Grid className="list">{existingPlanets}</Grid>
    </div>
  );
}


{/* <input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search..."
></input> */}