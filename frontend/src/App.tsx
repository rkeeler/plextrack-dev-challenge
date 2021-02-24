import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './header';
import { HomePage } from './home';
import { MoviesPage } from './movies';
import { CharactersPage } from './characters';

function App() {
  return (
    <Router>
      <Layout>
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Header />
        </Layout.Header>

        <Layout.Content style={{ marginTop: 64 }}>
          <Switch>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/characters">
              <CharactersPage />
            </Route>
            <Route path="">
              <HomePage />
            </Route>
          </Switch>
        </Layout.Content>
      </Layout>
    </Router>
  );
}

export default App;
