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
import "./ResponsiveAppBar.css";
import mylogo from "./logo/logo.png";
import { Link, Stack } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const pages = [
  { page: "Home", path: "#HomePage" },
  { page: "Service", path: "#service" },
  { page: "CONTACT & SUPPORT", path: "#" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const companyName = "PT JOEL PUTRI MITRA LESTARI";
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (target) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: { xs: 1, md: 10 }, display: "flex" }} >
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} spacing={2} sx={{ maxHeight: "10px", display: "flex" }}>
              <img src={mylogo} alt="logo" loading="lazy" height={"30vw"} />
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                {companyName}
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"}>
              {pages.map((page) => (
                <Button key={page.page} href={page.path} onClick={handleCloseNavMenu} sx={{ my: 2, color: "black", display: "block" }}>
                  <Typography fontWeight={700} fontSize={"1.3em"}>{page.page} </Typography>
                </Button>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large"  aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="blcak">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
