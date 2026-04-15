"use client";

import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  CertificateContainer,
  CertificateText,
  CertificateLabel,
  CertificateWrapper,
  CertificateTitle,
} from "./CertificateStyle";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import QRCode from "react-qr-code";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";

interface CertificateModalProps {
  handleClose: () => void;
  handleConfirm?: (rejectReason: any) => Promise<void> | void;
  body?: any;
  loader?: boolean;
  maxWidth?: any;
  data?: any;
}

const CertificateView = ({ handleClose, data }: CertificateModalProps) => {
  const theme = useTheme();
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down("md"));

  const { serialNo, weight, metalType, purity, manufactureYear, batchNo, sku } =
    data;
  const qrValue = `${process.env.NEXT_PUBLIC_QR_REDIRECT_URL}/${encodeURIComponent(
    serialNo?.toUpperCase()
  )}`;

  const certificateDetails = [
    { label: "Serial Number", value: serialNo?.toUpperCase() },
    { label: "Weight", value: `${weight?.toUpperCase()}` },
    { label: "Metal", value: metalType },
    { label: "Fineness", value: purity },
    { label: "Year of Production", value: manufactureYear?.toString() },
    { label: "Batch Number", value: batchNo },
    { label: "Certified Assayer", value: "-" },
  ];

  return (
    <>
      <Dialog
        fullWidth
        open
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: isTabletOrBelow ? "100%" : "auto",
            maxWidth: isTabletOrBelow ? "100%" : "80%",
            margin: 0,
            height: isTabletOrBelow ? "100%" : "auto",
            borderRadius: isTabletOrBelow ? 0 : "8px",
          },
        }}
      >
        <DialogContent
          sx={{ padding: 0, background: "#1C1C1C", position: "relative" }}
        >
          {/* Close Button */}
          <IconButton
            style={{ color: "white", position: "absolute" }}
            size="small"
            onClick={handleClose}
            className="absolute top-0 right-0"
          >
            <CloseIcon fontSize="medium" />
          </IconButton>

          <CertificateContainer p={{ xs: 3, md: 4 }}>
            <CertificateWrapper>
              {/* Header */}
              <Box
                p={{ xs: 2, md: 4 }}
                sx={{
                  background: "#1E1E1E",
                  py: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/assets/wagagai-logo-new.png"
                  alt="Logo"
                  width={500}
                  height={500}
                  style={{ marginBottom: 20, width: 140, height: "auto" }}
                />
                {/* <div> */}
                <CertificateTitle sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "#D4A017",
                  textAlign: "center",
                }}>
                  CERTIFICATE OF AUTHENTICITY
                </CertificateTitle>
                {/* </div> */}
                {/* <div>
                  <CertificateTitle variant="body1" sx={{ color: "#D4A017" }}>
                    CERTIFICATE
                  </CertificateTitle>
                </div> */}
              </Box>

              {/* Certificate Details */}
              <Box p={{ xs: 2, md: 2 }}>
                <p className="text-center text-xl mb-5">This certificate confirms that the metal
                  described below has been assayed and
                  certified.</p>
                <Box sx={{
                  borderTop: "1px solid",
                  borderBottom: "1px solid",
                }}>
                  {[
                    { label: "METAL", value: metalType?.toUpperCase() },
                    { label: "PURITY", value: purity },
                    { label: "GROSS WEIGHT", value: weight },
                    { label: "SERIAL NUMBER", value: serialNo },
                  ].map((item, index) => (
                    <Grid container key={index}>
                      {/* Left column */}
                      <Grid
                        size={{ xs: 6 }}
                        sx={{
                          borderRight: "1px solid",
                          px: 2,
                          py: 1,
                        }}
                      >
                        <Typography sx={{ opacity: 0.7 }}>
                          {item.label}
                        </Typography>
                      </Grid>

                      {/* Right column */}
                      <Grid size={{ xs: 6 }} sx={{ px: 2, py: 1 }}>
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.value}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Box>

                {/* ---------- SIGNATURE (Updated) ---------- */}
                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    width: "100%",
                    // mt: 4,
                    // mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "80px", sm: "80px" }, // 👈 Adjust size if needed
                      height: "auto",
                    }}
                  >
                    <Image
                      src={"/assets/wagagai-signature-a.png"}
                      alt="signature"
                      width={1000}
                      height={1000}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box> */}

                {/* Position under signature */}
                {/* <Typography
                  variant="body2"
                  // align="center"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Position: Certified Assayer
                </Typography> */}

                {/* Download PDF Button */}
                <Box sx={{ mt: 2, mb: 1, display: "flex", justifyContent: "center" }}>
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}/certificate/${encodeURIComponent(serialNo)}/pdf`}
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 3,
                        py: 1,
                        border: "1px solid #D4A017",
                        borderRadius: "6px",
                        color: "#D4A017",
                        cursor: "pointer",
                        "&:hover": { background: "rgba(212, 160, 23, 0.1)" },
                        transition: "background 0.2s",
                      }}
                    >
                      <DownloadIcon fontSize="small" />
                      <Typography sx={{ fontSize: "13px", fontWeight: 600 }}>
                        Download Certificate
                      </Typography>
                    </Box>
                  </a>
                </Box>

                {/* ---------- Footer: Text + QR ---------- */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                  gap={1}
                  sx={{
                    paddingBottom: "10px"
                  }}
                >
                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ mb: 1, opacity: 0.7 }}>
                      Certified Assayer:
                    </Typography>

                    <Box sx={{ width: 145 }}>
                      <Image
                        src="/assets/wagagai-signature.jpg"
                        alt="Certified Assayer Signature"
                        width={600}
                        height={200}
                        style={{ width: "100%", height: "auto", filter: "invert(1)", mixBlendMode: "screen" }}
                      />
                    </Box>
                  </Box>

                  <QRCode value={qrValue} size={120} bgColor="#1C1C1C" // white background
                    fgColor="#ffffff" // black QR code
                    style={{
                      // padding: "8px",
                      background: "#1C1C1C",
                      borderRadius: "8px",
                    }} />
                </Stack>
                {/* <p className="text-center text-xl mb-0!">ISO Certification: ISO 9001, 14001, 45001</p> */}
              </Box>
            </CertificateWrapper>
          </CertificateContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CertificateView;
