import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { authState } from "./Recoil/recoil";
function Login() {
  const navigate = useNavigate();
  const setIsAuth = useSetRecoilState(authState);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const onLogin = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("Auth", token);
      setIsAuth(true);
      navigate("/home");
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
    }
  };
  //   username: 'kminchelle',
  // password: '0lelplR',

  return (
    <div>
      <div
        style={{ paddingTop: 250, display: "flex", justifyContent: "center" }}
      >
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{
            width: 500,
            height: 300,
            padding: 20,
            border: "3px solid #121212",
            boxShadow: "8px 16px 32px rgba(0, 0, 0, 0.2)",
            borderRadius: "0px",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
            Welcome, Login here
          </Typography>
          <TextField
            label="Username"
            fullWidth={true}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <TextField
            label="Password"
            fullWidth={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={onLogin}
              variant="contained"
              sx={{
                fontSize: 25,
                color: "white",
                border: "1px solid white",
                backgroundColor: "black",
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
