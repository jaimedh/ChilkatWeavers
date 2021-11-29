import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import EditProfile from "./components/EditProfile/EditProfile";

import Profile from "./components/Profile/Profile";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
 <Route 
          path="/"
          exact
       
          render={(routerProps) => (
            <HomePage {...routerProps} />       
)}
/> 
        
          <Route
            path="/signup"
            exact
            render={(routerProps) => (
              <SignUp {...routerProps} />       
  )}
          />
           <Route
            path="/:id/edit"
            exact
            render={(routerProps) => (
              <EditProfile {...routerProps} />       
  )}
          />
          <Route
            path="/:id/profile"
            exact
            render={(routerProps) => (
              <Profile {...routerProps} />       
  )}
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
