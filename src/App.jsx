import React,{useState} from 'react';
import Nav from './components/nav'
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container} from 'semantic-ui-react';
import Home from './components/Home';
import Explore from './components/Explore';
import Favorites from './components/Favorites';

const peopleStorage = []
const planetStorage = []

function App() {

  const [favoritePeople, setFavoritePeople] = useState([])
  const [favoritePlanets, setFavoritePlanets] = useState([])
    

    function setToFavoriteList (element, addObject) {
       
        if (addObject === 'people') {

          if (peopleStorage.some((el) => el.name === element.name)) {
          } else {
            let store = []
            store = [...store, element] 
            peopleStorage.push(...store)
            setFavoritePeople([...peopleStorage]) 
          }
        } else {
          console.log('here')
          if (planetStorage.some((el) => el.name === element.name)) {
          } else {
            let store = []
            store = [...store, element] 
            planetStorage.push(...store) 
            setFavoritePlanets([...planetStorage])
          }
        }
      }

      function removeFromFavorite (element, addObject) {
        if (addObject === 'people') {
          const indexPeople = peopleStorage.indexOf(element)
          if (indexPeople > -1) {
            peopleStorage.splice(indexPeople, 1)
          }
          setFavoritePeople([...peopleStorage])
        } else {
          const indexPlanets = planetStorage.indexOf(element)
          if (indexPlanets > -1) {
            planetStorage.splice(indexPlanets, 1)
          }
          setFavoritePlanets([...planetStorage])
        }
      }

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Container>
          {
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/explore'>
                <Explore callbackData={(element, addObject) => setToFavoriteList(element, addObject)}/>
              </Route>
              <Route exact path='/favorites'>
                <Favorites 
                dataRemove={(element, addObject) => removeFromFavorite(element, addObject)}
                sendPeople={favoritePeople}
                sendPlanets={favoritePlanets}
                />
              </Route>
            </Switch>
          }
        </Container>

      </Router>
    </div>
  );
  }
export default App;
