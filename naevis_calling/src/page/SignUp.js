import { Link } from "react-router-dom";

function SignUp({ handleSignUp }) {
  return (
    <div>
      <Link to="/">
        <button onClick={handleSignUp}>회원가입하기</button>
      </Link>
    </div>
  );
}

export default SignUp;
