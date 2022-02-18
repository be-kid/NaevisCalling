import { Link } from "react-router-dom";

function SignUp({ handleSignUp }) {
  return (
    <div>
      <Link to="/">
        <button onClick={handleSignUp}>Create æ</button>
      </Link>
    </div>
  );
}

export default SignUp;

// 회원가입 page
