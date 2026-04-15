"use client";
import { Box, Button, styled, Typography } from "@mui/material";

const PageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: 2,
  backgroundColor: "#0A0A0A",
}));

const VerifyButtonWrapper = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  color: "#f1f1f1",
  height: "48px",
  minWidth: "150px",
  textTransform: "capitalize",
  borderRadius: "5px",
  background: "#D4A017",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "50.83px",
  textAlign: "left",
  color: "#f1f1f1",

  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));

export { PageWrapper, VerifyButtonWrapper, TitleText };