"use client";
import { styled, Typography, Box } from "@mui/material";

const CertificateContainer = styled(Box)({
  background: "#1C1C1C",
  color: "#E5E5E5",
  maxWidth: "594px",
  minWidth: "280px",
  margin: "10px auto",
});

const CertificateWrapper = styled(Box)({
  border: "6px solid #D4A017",
  borderRadius: "8px",
});

const CertificateLabel = styled(Typography)({
  fontSize: "16px",
  fontWeight: "700",
  color: "#E5E5E5",
});

const CertificateTitle = styled(Typography)({
  fontSize: "32px",
  fontWeight: "bold",
  color: "#D4A017",
});

const CertificateText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#E5E5E5",
  wordWrap: "break-word",
  whiteSpace: "normal",
});

export {
  CertificateContainer,
  CertificateLabel,
  CertificateText,
  CertificateWrapper,
  CertificateTitle,
};
