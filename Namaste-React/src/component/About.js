import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponent from "./Profile";
import { Component } from "react";
import UserContext from "./utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //  console.log("Parent - constructor")
  }
 componentDidMount() {
    //Best place to make an API call
    //  console.log("Parent - componentDidMount")
  }
  render() {
    // console.log("Parent - render");
    return (
      <div>
        <h1> About Us Page</h1>
        <UserContext.Consumer>
        {(user) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
        </UserContext.Consumer>

        <p>
          This is the Namaste React Live Course Chepter 07- Finding the path 🚀
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 * Parent Constructor
 * Parent Render
 *      First Child - Constructor
 *      First Child - Render
 *     Second Child - Constructor
 *     Second Child - Render
 *
 *   DOM is upadate for children
 *
 *      First Child  - componentDidMount
 *      Second Child - componentDidMount
 *     Parent - componentDidMount
 */
