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
        <div>
          <Link to="/signup">
            <button>회원가입하기</button>
          </Link>
          <button onClick={handleLogin}>로그인하기</button>
        </div>
      ) : (
        ""
      )}

      <Switch>
        <Route path="/signup">
          <SignUp handleSignUp={handleSignUp}></SignUp>
        </Route>
      </Switch>
    </div>
  );
}

export default Login;
