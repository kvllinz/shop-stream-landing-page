import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './core/themes';
import history from './utils/history';
import Home from './containers/Home';

const App =()=> {
  return (
<ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route path='/health'>
          <p>I am healthy!</p>
        </Route>
        <Route path= '/' exact component={Home} />
      </Switch>
    </Router>
</ThemeProvider>
  );
}

export default App;
