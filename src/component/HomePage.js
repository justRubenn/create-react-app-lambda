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
import { Stack, Grid } from "@mui/material";
import bg from "./logo/bg.jpg";
import outsourcing from "./logo/outsourcing.jpg";

const pages = ["Home", "Service", "CONTACT & SUPPORT"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function HomePage() {
  const header = "TENTANG KAMI";
  let about =
    "PT JOEL PUTRI MITRA LESTARI adalah penyedia sumber daya manusia yang dibutuhkan oleh perusahaan atau klien untuk menjalin kerjasama dengan pihak yang membutuhkan tenaga kerja agar terlaksana suatu pekerjaan yang di inginkan.";
  let paragraph2 = "Kami menyediakan jasa tenaga kerja, khususnya di bidang: security, cleaning service, serta berbagai jenis pekerjaan bidang jasa lainnya.";
  let companyName = "PT JOEL PUTRI MITRA LESTARI";

  let companyMission = [
    "Memberikan Pelayanan Yang Terbaik Dan Sangat Memuaskan",
    "Membangun hubungan yang erat dengan pelanggan kami dengan memberikan layanan yang terpercaya dan responsif.",
    "Menciptakan lingkungan kerja yang sejahtera bagi tenaga kerja kami dengan memberikan kesempatan berkembang dan mengembangkan keterampilan.",
    "Memberikan kesejahteraan bagi karyawan",
    "Meningkatkan kualitas SDM sehingga mampu memberikan kepuasan bagi user",
  ];
  return (
    <div>
      <Stack sx={{ marginTop: "1vh", display: "flex", alignItems: "center", justifyContent: "center", direction: "row", backgroundColor: "transparent" }}>
        <Box sx={{ width: "100%", display: "flex", justifySelf: "center" }}>
          <img src={outsourcing} width={"100%"} height="500vh" />
        </Box>
        <Box sx={{ backgroundColor: "#D9D9D9", height: "100%", width: "100%" }}>
          <div id="HomePage"></div>
          <Box sx={{ display: "flex", flexDirection: "row", minHeight: "40vh", alignItems: "center" }}>
            <Container sx={{ justifyContent: "center", display: "flex", flexDirection: "column" }}>
              <Container>
                <Typography sx={{ fontSize: "1em", color: "#F72B2B" }}>{header}</Typography>
              </Container>
              <Container>
                <Typography sx={{ fontSize: "1.5em", color: "#F72B2B" }}>{companyName}</Typography>
              </Container>
            </Container>
            <Container sx={{ justifyContent: "center" }}>
              <Typography>{about}</Typography>
              <Typography sx={{ marginTop: "3vh" }}>{paragraph2}</Typography>
            </Container>
          </Box>
        </Box>

        <Box sx={{ maxHeight: "2px", width: "100%", backgroundColor: "white" }}> . </Box>

        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", backgroundColor: "#D9D9D9" }}>
          <Box sx={{ display: "flex", width: "100%", minHeight: "20vh", justifyContent: "center", marginTop: "5vh" }}>
            <Typography sx={{ fontSize: "2em", marginTop: "8vh", color: "#F72B2B" }}>{"Kami Lebih Baik Karena ?"}</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%", height: "80vh", marginTop: "5vh" }}>
            <Box sx={{ display: "flex", width: "50%", height: "80vh", justifyContent: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" sx={{ fontWeight: "900" }} align="center">
                  {"OUR VISION"}
                </Typography>
                <Container sx={{ maxWidth: "70%" }}>
                  <dl>
                    <dt>
                      <p>{"Mewujudkan PT JOEL PUTRI MITRA LESTARI Menjadi penyedia jasa tenaga kerja yang professional dan handal"}</p>
                    </dt>
                  </dl>
                </Container>
              </Box>
            </Box>
            <Box sx={{ display: "flex", width: "50%", height: "80vh", justifyContent: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" sx={{ fontWeight: "900" }} align="center">
                  {"OUR MISSION"}
                </Typography>
                <Container sx={{ maxWidth: "70%" }}>
                  {companyMission.map((item) => (
                    <ul>
                      <li>{item}</li>
                    </ul>
                  ))}
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
export default HomePage;
