import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import EditProfile from "./components/EditProfile/EditProfile";
import Map from "./components/Map/Map";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <switch>
          <Route 
          path="/"
          exact
          render={(routerProps) => (
            <Map {...routerProps} />       
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
            path="/edit"
            exact
            render={(routerProps) => (
              <EditProfile {...routerProps} />       
  )}
          />

        </switch>
      </div>
    </Router>
  );
}

export default App;
