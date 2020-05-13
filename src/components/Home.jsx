import React from "react";
import { Card } from "semantic-ui-react";
import "../App.css";

export default function Home () {
  return (
    <div className='main-card'>
    <Card fluid>
    <Card.Content>
      <Card.Header><h1>Star Wars</h1></Card.Header>
      <Card.Meta>Universe</Card.Meta>
      <Card.Description>
      <p className='main-text'>
        Star Wars is an American epic space-opera media franchise created by
        George Lucas, which began with the eponymous 1977 film and quickly
        became a worldwide pop-culture phenomenon. The franchise has been
        expanded into various films and other media, including television
        series, video games, novels, comic books, theme park attractions, and
        themed areas, comprising an all-encompassing fictional universe.[b] The
        franchise holds a Guinness World Records title for the "Most successful
        film merchandising franchise". In 2020, the total value of the Star
        Wars franchise was estimated at US$70 billion, and it is currently the
        fifth-highest-grossing media franchise of all time. The original film,
        retroactively subtitled Episode IV: A New Hope, was followed by the
        sequels Episode V: The Empire Strikes Back 1980 and Episode VI: Return
        of the Jedi 1983, forming the original Star Wars trilogy. A prequel
        trilogy was later released, consisting of Episode I: The Phantom Menace
        1999, Episode II: Attack of the Clones 2002, and Episode III:
        Revenge of the Sith 2005. In 2012, Lucas sold his production company
        to Disney, relinquishing his ownership of the franchise. The
        subsequently produced sequel trilogy consists of Episode VII: The Force
        Awakens 2015, Episode VIII: The Last Jedi 2017, and Episode IX: The
        Rise of Skywalker 2019. Together, the three trilogies form what has
        been referred to as the "Skywalker saga". All nine films were nominated
        for Academy Awards with wins going to the first two released and were
        commercially successful. Together with the theatrical spin-off films
        Rogue One 2016 and Solo: A Star Wars Story 2018, the combined box
        office revenue of the films equates to over US$10 billion,[3] and it is
        currently the second-highest-grossing film franchise.
      </p>
      </Card.Description>
    </Card.Content>
  </Card>
    </div>
  );
}
