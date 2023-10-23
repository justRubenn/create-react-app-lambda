import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Container } from "@mui/material";
import mylogo from "./logo/logo.png";
import wa from "./logo/whatsapppin.png"
import email from "./logo/emailpin.png"
import map from "./logo/locationpin.png"

const Footer = () => {
  let companyName = "PT JOEL PUTRI MITRA LESTARI";
  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%", height: "30vh", backgroundColor: "white" }}>
      <Container sx={{ display: "flex", width: "60%", backgroundColor: "white", alignItems: "center" }}>
        <img src={mylogo} alt="logo" loading="lazy" height={"35vw"} />
        <Typography sx={{ fontSize: "20px", fontWeight: "800", paddingX: "5vh" }}>{companyName}</Typography>
      </Container>
      <Box sx={{ display: "flex", flexDirection: "column", width: "40%", backgroundColor: "white", justifyContent: "center" }}>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "2vh" }}>
          <img src={wa} alt="waIcon" loading="lazy" height={"35vw"} />
          <Typography sx={{ fontWeight: "700", marginX: "1vw" }}>+628-2370-3844-34</Typography>
        </Container>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "2vh" }}>
          <img src={email} alt="waIcon" loading="lazy" height={"35vw"} />
          <Typography sx={{ fontWeight: "700", marginX: "1vw" }}>ptjp@yahoo.com</Typography>
        </Container>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "2vh" }}>
          <img src={map} alt="waIcon" loading="lazy" height={"35vw"} />
          <Typography sx={{ fontSize: "10px", fontWeight: "700", marginX: "1vw" }}>Jl.Dr.Ir.Bisuk Siahaan, Simpang Sigura-gura, Kec.Porsea, Kab.Toba Sumatera Utara</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
