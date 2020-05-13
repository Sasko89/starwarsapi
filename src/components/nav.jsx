import React,{useState} from 'react';
import {Menu, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom'


export default function Nav() {

  const [tab, setTab] = useState(['Star Wars API']);
  const { activeItem } = tab;
  const handleItemClick = (e, { name }) => setTab({ activeItem: name });
  
    return (
      <>
      <Segment inverted>
      <Menu inverted pointing secondary>
        <Link to='/'>
          <Menu.Item
          name='Star Wars API'
          active={activeItem === 'Star Wars API'}
          onClick={handleItemClick}
          />
        </Link>
        <Link to='/explore'>
          <Menu.Item
            name='Explore'
            active={activeItem === 'Explore'}
            onClick={handleItemClick}
          />
        </Link>
        <Link to='/favorites'>
          <Menu.Item
            name='Favorites'
            active={activeItem === 'Favorites'}
            onClick={handleItemClick}
          />
        </Link>
      </Menu>
    </Segment>
    </>
    )
}
