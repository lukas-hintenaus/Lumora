import "./login.css";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [usernameVal, setUsernameVal ] = useState("");
  const [passwordVal, setPasswordVal ] = useState("");

  let ok = true;

  async function sendData(un, pw) {
    const response = await fetch("https://localhost:7225/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: un,
        Password: pw
      })
    });

    if (!response.ok) {
      ok = false;
      throw new Error("Login failed!");
    }
    const result = await response.json();
    console.log(result)
    console.log("Token stored: ",result.accesstoken);
    console.log("Refresh Token stored: ", result.refreshToken)
    localStorage.setItem("accesstoken", result.accesstoken);
    localStorage.setItem("refreshtoken", result.refreshToken)
    setData(result);
    return result
  }

    const handleClick = async (e) => {
      e.preventDefault();
      const result = await sendData(usernameVal, passwordVal)
      if(ok){
        localStorage.setItem("username", usernameVal)
        navigate('/dashboard')
      }
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