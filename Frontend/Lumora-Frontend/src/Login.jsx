import "./login.css";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "./GlobalContext";

function Login() {
  const {userId, setUserId, isLoggedIn, setIsLoggedIn} = useGlobal();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [usernameVal, setUsernameVal ] = useState("");
  const [passwordVal, setPasswordVal ] = useState("");

  async function sendData(un, pw) {
    const response = await fetch("https://localhost:7225/api/login/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: un,
        password: pw
      })
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }
    const result = await response.json();
    console.log(result);
    setData(result);
    return result
  }

    const handleClick = async (e) => {
      e.preventDefault();
      const result = await sendData(usernameVal, passwordVal)
      if(result.userId != -1){
        navigate('/dashboard')
      }
      setUserId(result.userId)
      setIsLoggedIn(result.loggedIn)
    }

    const handleUsernameChange = (e) => {
      setUsernameVal(e.target.value)
    }

    const handlePasswordChange = (e) => {
      setPasswordVal(e.target.value)
    }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <form>
          <input
            type="text"
            placeholder="Username"
            value={usernameVal}
            onChange={handleUsernameChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={passwordVal}
            onChange={handlePasswordChange}
          />

          <button type="submit" onClick={handleClick}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;