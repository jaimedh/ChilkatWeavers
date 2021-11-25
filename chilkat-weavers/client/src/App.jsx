import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";

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
              <SignUp {...routerProps} />
  )}
          />
        </switch>
      </div>
    </Router>
  );
}

export default App;
