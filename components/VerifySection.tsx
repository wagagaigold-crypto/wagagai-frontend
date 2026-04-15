"use client";
import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import CertificateView from "./CertificateView";

const validationSchema = Yup.object({
  serialNoStart: Yup.string().required("Serial Number is Required"),
});

const initialValues = {
  serialNoStart: "",
};

const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const VerifySection = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<any>(null);
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
  const [certificateModal, setCertificateModal] = useState<boolean>(false);
  const [certificateData, setCertificateData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null); // State to store API error

  useEffect(() => {
    if (recaptchaToken && formValues) {
      // If reCAPTCHA token is verified, proceed with API call
      submitFormWithRecaptchaToken(formValues, recaptchaToken);
    }
  }, [recaptchaToken, formValues]);

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
      setShowRecaptcha(false);
    }
  };

  const handleSubmit = (values: any) => {
    if (!sitekey) {
      // No reCAPTCHA site key configured — skip reCAPTCHA
      submitFormWithRecaptchaToken(values, "no-recaptcha");
    } else if (!recaptchaToken) {
      // Show reCAPTCHA if not yet verified and store form values
      setShowRecaptcha(true);
      setFormValues(values); // Save form values to use after reCAPTCHA is verified
    } else {
      // Proceed with API submission if reCAPTCHA is already verified
      submitFormWithRecaptchaToken(values, recaptchaToken);
    }
  };

  const handleModalClose = (resetForm: any) => {
    setCertificateModal(false);
    setCertificateData(null);
    resetForm({ values: { serialNoStart: "" } });
  };

  const submitFormWithRecaptchaToken = async (values: any, token: string) => {
    setLoading(true);
    values.recaptchaToken = token;

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/certificate/${values.serialNoStart}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data.data;
        setCertificateData(data);
        setCertificateModal(true);
      } else {
        setApiError("Failed to verify certificate.");
      }
    } catch (error: any) {
      if (error?.status === 429) {
        setApiError("Rate limit exceeded. Try again later.");
      } else {
        setApiError(
          error.response?.data?.message ||
            "An error occurred while verifying the certificate."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        className="relative flex items-center justify-center min-h-[calc(100vh-70px)]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/verify-bg.jpg')" }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl text-center mx-auto px-4">
          {/* Logo or Title */}
          <div className="w-full">
            <Image
              src={"/wagagai-logo-transparent.png"}
              alt="Wagagai Logo"
              width={500}
              height={500}
              className={`h-24 w-auto mx-auto mix-blend-screen`}
            />
          </div>

          {/* Input + Button */}
          {/* <div className="flex items-center mt-10 border-1 border-white p-1 rounded-md overflow-hidden shadow-lg"> */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, resetForm, handleChange, values }) => {
              return (
                <>
                  <Form>
                    <div className="flex items-center justify-between mt-10 mb-5 border-1 border-white p-1 rounded-md overflow-hidden shadow-lg">
                      <div className="flex-1">
                        <input
                          type="text"
                          name="serialNoStart"
                          value={values.serialNoStart}
                          placeholder="Enter Serial Number to verify"
                          className="w-full verify-font px-4 py-3 outline-none text-gray-200 placeholder-gray-400 bg-white/10 backdrop-blur"
                          onChange={(e) => {
                            handleChange(e);
                            setApiError("");
                          }}
                        />
                      </div>

                      {!showRecaptcha && (
                        <button
                          className="bg-[#D4A017] cursor-pointer verify-button hover:bg-orange-400 text-white px-6 py-3 font-semibold"
                          type="submit"
                        >
                          {loading ? "Verifying..." : "Verify"}
                        </button>
                      )}
                    </div>

                    {errors.serialNoStart && touched.serialNoStart && (
                      <p className="text-red-500 mt-1 text-sm">
                        {errors.serialNoStart}
                      </p>
                    )}
                    {apiError && (
                      <p className="text-red-500 mt-1 text-md">{apiError}</p>
                    )}

                    {showRecaptcha && (
                      <ReCAPTCHA
                        style={{ display: "inline-block" }}
                        ref={recaptchaRef}
                        sitekey={sitekey ? sitekey.toString() : ""}
                        onChange={handleRecaptchaChange}
                      />
                    )}
                  </Form>
                  {certificateModal && certificateData && (
                  <CertificateView
                    handleClose={() => handleModalClose(resetForm)}
                    data={certificateData}
                  />
                )}
                </>
              );
            }}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default VerifySection;
