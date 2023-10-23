import logo from "./logo.svg";
import mylogo from "./component/logo/logo.png";
import "./App.css";
import ResponsiveAppBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import { Box, Container, Stack } from "@mui/material";
import Services from "./component/Services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ListOfCard from "./component/ListOfCard";
import Footer from "./component/Footer";

function App() {
  const page = 0;
  useEffect(() => {});
  return (
    <div>
      <Stack sx={{ display: "flex", direction: "column", alignItems: "center", justifyContent: "center" }}>
        {/*<BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="service" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

        <ResponsiveAppBar />
        <HomePage />
        <ListOfCard />
        <Footer/>

      </Stack>

      {/* <div id="service">
        <Services />
      </div> */}
    </div>
  );
}

export default App;
