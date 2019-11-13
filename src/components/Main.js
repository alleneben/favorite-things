import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Switch>
        {/* All the routes and their component to render goes here as shown below */}
        <Route path="" component={""} />
        <Route
          path=""
          render={props => {
            return (
              { /* component goes here. { ...props can be passed to the component to get access 
                to the history, location and match as props }*/ }
            )
          }}
        />
        <Route />
      </Switch>
    </div>
  );
};

// withRouter will give us access to history, location
// and match as props to the component rendered according
// to the Route path so that it can redirect the user
// with for example this.props.history.push
export default withRouter(Main);
