import "./LoginPage.css";
import LoginForm from "../LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="LPageCont">
      <h1 className="headerLogin">Welcome Back!</h1>
      <div className="formContainer">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
