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
    label: "MEMBERIKAN PELAYANAN TERBAIK",
    description: `Profesional dan Berpengalaman Mengawasi tamu, Mengatur kendaraan, Keamanan kegiatan-kegiatan dinas maupun diluar jam dinas di lingkungan kerja, mengecek pintu-pintu setelah jam kerja, memperlajari penggunaan alat pemadam kebakaran, dan tugas penting lainnya sewaktu-waktu di perlukan.`,
  },
  {
    label: "CLEANING SERVICE",
    description:
      "Profesional dan Berpengalaman Mendukung pemenuhan kebutuhan pelayanan lingkungan kerja, mendukung kebersihan semua area lingkungan kerja sebelum dan sesudah jam kerja, memelihara tanaman yang berada di area lingkungan kerja, memperlajari penggunaan alat pemadam kebakaran, dan tugas penting lainnya sewasktu-waktu di perlukan.",
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
    <Box sx={{ backgroundColor: "grey", maxWidth: 450, flexGrow: 1 }}>
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
          backgroundColor: "grey",
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Container sx={{ height: 255, width: 450, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Typography>{steps[activeStep].description}</Typography>
      </Container>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
        sx={{ backgroundColor: "grey" }}
      />
    </Box>
  );
}
