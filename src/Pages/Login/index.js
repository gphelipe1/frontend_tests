import Card from '../../Components/Card/index'
import HeaderLogin from '../../Components/HeaderLogin/index'
import './index.css'
import Background from "../../Assets/home_bubblesRS.png"

function Login() {
  return (
    <div className="login-container ">
      <HeaderLogin/>
      <img src={Background} className="Background-image"/>
      <div className = "login">
          <Card />
      </div>
    </div>
  );
}

export default Login;