import * as React from 'react';
import { Menu } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import Search from './Search';

export default function Header() {
  const location = useLocation();

  // translate between the url path and the menu item ids
  let selectedKey;
  if (location.pathname.startsWith('/movies')) {
    selectedKey = 'movies';
  } else if (location.pathname.startsWith('/characters')) {
    selectedKey = 'characters';
  } else {
    selectedKey = 'home';
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        alt="star wars logo"
        src="/star-wars-logo.png"
        style={{ height: 40, marginRight: 12 }}
      />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        selectedKeys={[selectedKey]}
      >
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="movies">
          <Link to="/movies">Movies</Link>
        </Menu.Item>
        <Menu.Item key="characters">
          <Link to="/characters">Characters</Link>
        </Menu.Item>
      </Menu>

      <div style={{ flex: '1 1 auto' }} />

      <Search />
    </div>
  );
}
