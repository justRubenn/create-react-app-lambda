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
  let about = "PT JOEL PUTRI MITRA LESTARI adalah penyedia sumber daya manusia yang dibutuhkan oleh perusahaan atau klien untuk menjalin kerjasama dengan pihak yang membutuhkan tenaga kerja agar terlaksana suatu pekerjaan yang di inginkan.";
  let paragraph2 = "Kami menyediakan jasa tenaga kerja, khususnya di bidang: security, cleaning service, serta berbagai jenis pekerjaan bidang jasa lainnya.";
  let companyName = "PT JOEL PUTRI MITRA LESTARI"
  return (
    <div>
      <Stack sx={{ marginTop: "1vh", display: "flex", alignItems: "center", justifyContent: "center", direction: "row", backgroundColor: "transparent" }} >
        <Container sx={{ width: "80%", display: "flex", justifySelf: "center" }}>
          <Grid container spacing={30} columns={17} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={5} sx={{ display: "flex", alignItems: "center" }}>
              <Stack sx={{ display: "flex", direction: "row" }}>
                <Button href="#service" color="success" sx={{ borderRadius: "10%" }}>
                  <Typography variant="h3" fontWeight={700} color="white" align={"center"}>
                    {"Layanan Kami"}
                  </Typography>
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={10}>
              <img src={outsourcing} width={"100%"} />
            </Grid>
          </Grid>
        </Container>

        <Box height={"20vh"}></Box>


          <Stack sx={{ display: "flex", direction: "column", width: "80%", alignItems: "center", justifyContent: "center", backgroundColor: "grey" }}>
            <div id="service">
              <Grid container maxWidth={"xl"} columns={18} sx={{ display: "flex", alignItems: "flex-start", padding: "5 0px" }}>
                <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
                  <Stack>
                    <Typography variant="h5" color="Red" fontWeight={700}>
                      {"TENTANG KAMI"}
                    </Typography>
                    <Typography variant="h4" color="white" fontSize={30} fontWeight={700} sx={{ marginTop: "1vh" }}>
                      {companyName}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={10} sx={{ display: "flex" }}>
                  <Typography textAlign={"justify"} variant="h6" justifyContent={""} align={""} color="white">
                    {about} {paragraph2}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Stack>
        <Box sx={{ height: "10vh" }} />
      </Stack>
    </div>
  );
}
export default HomePage;
