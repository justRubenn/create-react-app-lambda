import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import mylogo from "./logo/logo.png";
import { Stack } from "@mui/material";

function Services() {
  return (
    <div>
      <Container disableGutters sx={{ backgroundColor: "#282C34"}} >
        <Typography variant="h1" color="white">
          Ini Services
        </Typography>
      </Container>
    </div>
  );
}
export default Services;
