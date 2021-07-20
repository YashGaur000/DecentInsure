import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ClaimsPage from './Pages/ClaimsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VotingPage from './Pages/VotingPage';
import Profile from "./Pages/Profile";
import MakeClaim from './Pages/MakeClaim';
import { Box } from "@chakra-ui/react";
import CustomRoute from './utils/CustomRoute';
import { useState } from "react";
import BecomeMember from './Pages/BecomeMember';

function App() {

  const [ isMember, setIsMember ] = useState(true);

  return (
    <>
      <Router>
        <Header />
        <Box pt="60px">
          <Switch>
            <Route exact path="/become-a-member">
              <BecomeMember />
            </Route>
            <CustomRoute isMember={isMember} exact path="/">
              <ClaimsPage />
            </CustomRoute>
            <CustomRoute isMember={isMember} exact path="/voting">
              <VotingPage />
            </CustomRoute>
            <CustomRoute isMember={isMember} exact path="/profile">
              <Profile />
            </CustomRoute>
            <CustomRoute isMember={isMember} exact path="/makeclaim">
              <MakeClaim />
            </CustomRoute>
          </Switch>
        </Box>
        
      </Router>
    </>
  );
}

export default App;
