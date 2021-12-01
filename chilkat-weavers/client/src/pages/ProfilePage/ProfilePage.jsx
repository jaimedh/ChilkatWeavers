import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import SignUp from "../../components/SignUp/SignUp";
import EditProfile from "../../components/EditProfile/EditProfile";
import AddingPhotos from "../../components/AddingPhotos/AddingPhotos";
import Profile from "../../components/Profile/Profile";

class ProfilePage extends Component {

    render(){
    return (
        <Router>
              <div className="profilepage">
       
        <Switch>
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
      <Route
        path="/:id/profile"
        render={(routerProps) => (
          <Profile {...routerProps} />
        )}
        />
        </Switch>
      </div>
    </Router>
    );

        }
}
export default ProfilePage;