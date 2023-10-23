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

const steps = [
  {
    label: "SECURITY",
    description: `Profesional dan Berpengalaman Mengawasi tamu, Mengatur kendaraan, Keamanan kegiatan-kegiatan dinas maupun diluar jam dinas di lingkungan kerja, mengecek pintu-pintu setelah jam kerja, memperlajari penggunaan alat pemadam kebakaran, dan tugas penting lainnya sewaktu-waktu di perlukan.`,
  },
  {
    label: "CLEANING SERVICE",
    description:
      "Profesional dan Berpengalaman Mendukung pemenuhan kebutuhan pelayanan lingkungan kerja, mendukung kebersihan semua area lingkungan kerja sebelum dan sesudah jam kerja, memelihara tanaman yang berada di area lingkungan kerja, memperlajari penggunaan alat pemadam kebakaran, dan tugas penting lainnya sewasktu-waktu di perlukan.",
  },
  {
    label: "SECURITY",
    description: `Kami menyediakan tenaga kerja keamanan / security untuk berbagai bidang kebutuhan, seperti: kantor, pabrik, mall, event-event / pameran, instansi dan lain sebagainya.`,
  },
  {
    label: "CLEANING SERVICE",
    description:
      "Menyediakan layanan jasa kebersihan/cleaning service untuk kantor, rumah sakit, poliklinik, bank/ATM, sekolah, kampus, mall, supermarket, dsb. Layanan kami didukung oleh tenaga kebersihan terlatih dan berpengalaman di bidang jasa kebersihan.",
  },
];

export default function ListOfCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "#D9D9D9", width: "100%", justifyContent: "center", marginTop: "1vh",paddingBottom:"20vh" }}>
      <div id="service"></div>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20vh", width: "100%" }}>
        <Typography sx={{ fontSize: 30, fontWeight: "900", color: "red" }}>{"PELAYANAN YANG KAMI TAWARKAN"}</Typography>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box sx={{ backgroundColor: "white", maxWidth: 400, flexGrow: 1, marginTop: "1vh" }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              pl: 2,
              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <Typography sx={{ fontSize: "25px", fontWeight: "900", color: "white" }}>{steps[activeStep].label}</Typography>
          </Paper>
          <Container sx={{ display: "flex", height: 255, width: 370, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
            <Typography>{steps[activeStep].description}</Typography>
          </Container>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                <Typography sx={{ fontSize: "17px", fontWeight: "700", color: "white" }}>Next</Typography>
                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                <Typography sx={{ fontSize: "17px", fontWeight: "700", color: "white" }}>Back</Typography>
              </Button>
            }
            sx={{ backgroundColor: "red" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
