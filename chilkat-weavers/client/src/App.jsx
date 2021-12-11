import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./components/SignUp/SignUp";
import EditProfile from "./components/EditProfile/EditProfile";
import AddingPhotos from "./components/AddingPhotos/AddingPhotos";
import Profile from "./components/Profile/Profile";
import Weavers from "./components/Weavers/Weavers";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Login />
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
            path="/:id/addphotos"       
            render={(routerProps) => (
              <AddingPhotos {...routerProps} />
            )}
          />
          <Route
            path="/:id/edit"           
            render={(routerProps) => (
              <EditProfile {...routerProps} />
            )}
          />
          {/* <Route
            path="/:id/profile"
            render={(routerProps) => (
              <Profile {...routerProps} />
            )}
          /> */}
           <Route
            path="/weavers"
            exact
            render={(routerProps) => (
              <Weavers {...routerProps} />
            )}
          />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
