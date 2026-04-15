"use client";

import Certificate from "@/components/Certificate";
import { CircularProgress, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PageWrapper, TitleText } from "./style";

const ViewCertificatePage = ({ params }: { params: Promise<{ certificateId: string }> }) => {
  const unwrappedParams = React.use(params); // ✅ unwrap Promise
  const certificateId = unwrappedParams.certificateId;

  const [certificateData, setCertificateData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const verifyCertificate = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/certificate/${certificateId}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setCertificateData(response.data.data);
      } else {
        toast.error("Failed to verify certificate.");
      }
    } catch (error: any) {
      if (error?.status === 429) {
        toast.error("Too many requests. Please try again later.");
      } else {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while verifying the certificate."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyCertificate();
  }, [certificateId]); // ✅ safe now

  return (
    <PageWrapper>
      {loading ? (
        <CircularProgress />
      ) : certificateData ? (
        <Certificate
          serialNumber={certificateData.serialNo}
          weight={certificateData.weight}
          metal={certificateData.metalType}
          fineness={certificateData.purity}
          year={certificateData.manufactureYear.toString()}
          batchNumber={certificateData.batchNo}
          sku="-"
        />
      ) : (
        <Stack justifyContent="center" alignItems="center">
          <TitleText variant="body1" textAlign="center">
            No certificate data found. Please verify the certificate ID or try again later.
          </TitleText>
        </Stack>
      )}
    </PageWrapper>
  );
};

export default ViewCertificatePage;
