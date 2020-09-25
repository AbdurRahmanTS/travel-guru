import React, { createContext, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './component/Booking/Booking';
import NotPound from './component/NotPound/NotPound';
import SignIn from './component/SignIn/SignIn';
import Search from './component/Search/Search';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedinUser, setLoggedinUser] = useState({
      isSignedIn: false,
      name: '',
      firstName: '',
      lastName: '',
      email:'',
      password: '',
      error: '',
      success: false,
  })
  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/booking/:tourName">
          <Booking />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <PrivateRoute path="/search/:tourName">
          <Search />
        </PrivateRoute>
        <Route path="*">
          <NotPound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
