import { Switch } from "react-router-dom";
import { Home } from "../Page/Home/index";
import Login from "../Page/Login/index";
import Register from "../Page/Register";
import { Dashboard } from "../Page/Dashboard";
import { Route } from "./Routes";
import Groups from "../Pages/Groups";
import Goals from "../Page/Goals";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <Route isPrivate exact path="/dashboard" component={Dashboard} />

      <Route isPrivate exact path="/dashboard/groups" component={Groups} />

      <Route isPrivate exact path="/dashboard/goal" component={Goals} />
    </Switch>
  );
};
