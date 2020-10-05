import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NotFound from './components/notFound/NotFound';
import AdminAdd from './components/adminAdd/AdminAdd';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import YourEvents from './components/YourEvents/YourEvents';
import Admin from './components/Admin/Admin';

export const userContext = createContext();
export const eventContext = createContext();

function App() {
    const [user,setUser] = useState({
      name: '',
      email: '',
      error: '',
      userExist: false
  });
  const [eventId,setEventId] = useState('');
  return (
    <userContext.Provider value={[user,setUser]}>
      <eventContext.Provider value={[eventId,setEventId]}>
        <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRouter path="/yourevents">
              <YourEvents/>
            </PrivateRouter>
            <PrivateRouter path="/register">
              <Register></Register>
            </PrivateRouter>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/Admin">
              <Admin/>
            </Route>
            <Route path="/adminadd">
              <AdminAdd/>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>   
      </eventContext.Provider>   
    </userContext.Provider>
  );
}

export default App;
