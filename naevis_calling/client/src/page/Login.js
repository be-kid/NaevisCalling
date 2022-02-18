import { Link, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SignUp from "./SignUp";

function Login({ handleLogin }) {
  let location = useLocation();
  const handleSignUp = () => {
    handleLogin();
  };
  return (
    <div>
      {location.pathname === "/" ? (
        <div className="login">
          <Link to="/">
            <button onClick={handleLogin}>SYNK</button>
          </Link>
          <Link to="/signup">
            <button>Create æ</button>
          </Link>
        </div>
      ) : (
        ""
      )}

      <Switch>
        <Route exact path="/"></Route>
        <Route path="/signup">
          <SignUp handleSignUp={handleSignUp}></SignUp>
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
