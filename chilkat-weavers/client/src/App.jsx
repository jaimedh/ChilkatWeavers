import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          {/* <Route
            path="/"
            exact
            render={(routerProps) => {
              <HomePage {...routerProps} />;
            }}
          /> */}
        </switch>
      </div>
    </Router>
  );
}

export default App;
