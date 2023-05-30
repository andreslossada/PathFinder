import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { TextField } from "@mui/material";
import { useStore } from "../store/zustand";
import { QUESTIONS } from "../utils/prompts";
import { processMessageToChatGPT } from "../utils/service";
import { INITIAL_MESSAGES } from "../utils/prompts";
import { useNavigate } from "react-router-dom";

function SwipeableTextMobileStepper() {
  const navigate = useNavigate();
  const answers = useStore((state) => state.answers);

  const searchIsDisabled = answers.length < 1;

  const setResults = useStore((state) => state.setResults);
  const setShowResults = useStore((state) => state.setShowResults);
  const setLoading = useStore((state) => state.setLoading);
  const setAnswers = useStore((state) => state.setAnswers);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = QUESTIONS.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleAnswerChange = (index, answer, question) => {
    const newAnswers = [...answers];
    newAnswers[index] = {
      question: question.label,
      answer,
    };
    setAnswers(newAnswers);
  };

  const handleClick = () => {
    navigate("/careers");
    setAnswers([]);
    const answersAndQuestions = answers.map((answer) => {
      return `${answer?.question ?? ""} ${answer?.answer ?? ""}`;
    });

    if (answersAndQuestions.length === 0) {
      return;
    }

    if (answersAndQuestions.length >= 1) {
      setLoading(true);
      setShowResults(true);
      processMessageToChatGPT(answersAndQuestions.join(), INITIAL_MESSAGES)
        .then((res) => {
          setResults(JSON.parse(res));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    }
  };

  return (
    <Box className="flex justify-center flex-col  " component="main">
      <Box
        sx={{
          flexGrow: 1,
          mx: "auto",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        className="shadow-2xl w-[90vw] lg:w-[50vw] relative"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "50px",
            pl: "20px",
            color: "#333333",
          }}
        >
          <Typography
            component={"h2"}
            sx={{
              opacity: 1,
              fontWeight: "bold",
            }}
            className="text-blue-700"
          >
            {QUESTIONS[activeStep].label}
          </Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className="bg-gray-100 "
        >
          {QUESTIONS.map((question, index) => (
            <Paper key={question.label} className="">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: "block",
                    padding: "10px",
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    helperText={`${answers[index]?.answer?.length ?? 0}/200`}
                    multiline
                    // rows={4}
                    fullWidth
                    inputProps={{ maxLength: 200 }}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                    }}
                    onChange={(event) =>
                      handleAnswerChange(index, event.target.value, question)
                    }
                  />
                </Box>
              ) : null}
            </Paper>
          ))}
        </SwipeableViews>

        <MobileStepper
          sx={{
            backgroundColor: "white",
            height: "50px",
            "& .MuiMobileStepper-dotActive": {
              // backgroundColor: "text-red-500",
            },
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{
                textTransform: "none",
                marginBottom: "20px",
                color: "#9333ea",
              }}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              sx={{
                textTransform: "none",
                marginBottom: "20px",
                color: "#3F9860",
              }}
              // size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>

      <button
        className={`shadow__btn py-2 px-4 mx-auto mt-10 ${
          searchIsDisabled ? "opacity-50" : ""
        } text-lg font-medium text-indigo-100 rounded-xl hover:text-white tracking-widest`}
        onClick={handleClick}
        disabled={searchIsDisabled}
      >
        Search
      </button>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
