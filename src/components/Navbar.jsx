import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Navigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import LocalConvenienceStoreTwoToneIcon from "@mui/icons-material/LocalConvenienceStoreTwoTone";
import { useRecoilValue } from "recoil";
import {
  authState,
  totalAmountSelector,
  totalItemCountSelector,
} from "./Recoil/recoil";

export default function Navbar() {
  const totalItemCount = useRecoilValue(totalItemCountSelector);
  const totalAmount = useRecoilValue(totalAmountSelector);
  const isAuth = useRecoilValue(authState);
  // const navigate = useNavigate();
  function onlogout() {
    localStorage.setItem("Auth", "");
    window.location.reload();
  }
  function onlogin() {
    <Navigate to="/home" />;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <LocalConvenienceStoreTwoToneIcon sx={{ fontSize: 90 }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <b> MY SHOP </b>
            </Typography>
          </IconButton>

          {isAuth ? (
            <Box
              sx={{ display: "flex", alignItems: "center", ml: "auto", mr: 5 }}
            >
              <IconButton size="large" color="inherit">
                <Badge badgeContent={totalItemCount} color="error" showZero>
                  <ShoppingCartIcon sx={{ fontSize: 40 }} />
                </Badge>
              </IconButton>

              <Typography
                variant="h6"
                component="div"
                sx={{ color: "white", ml: 2, mr: 5 }}
              >
                Total: ${totalAmount}
              </Typography>

              <Button
                variant="outlined"
                onClick={onlogout}
                size="large"
                sx={{ color: "white", border: "1px solid white" }}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Box
              sx={{ display: "flex", alignItems: "center", ml: "auto", mr: 5 }}
            >
              <Button
                variant="outlined"
                onClick={onlogin}
                size="large"
                sx={{ color: "white", border: "1px solid white" }}
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
