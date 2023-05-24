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

function SwipeableTextMobileStepper() {
  const answers = useStore((state) => state.answers);
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
    const answersAndQuestions = answers.map((answer) => {
      return `${answer?.question ?? ""} ${answer?.answer ?? ""}`;
    });

    if (answersAndQuestions.length === 0) {
      return;
    }

    if (answersAndQuestions.length >= 1) {
      setLoading(true);
      setShowResults(true);
      processMessageToChatGPT(answersAndQuestions.join())
        .then((res) => {
          setResults(JSON.parse(res));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <Box className="flex justify-center flex-col">
      <Box
        sx={{
          width: "50vw",
          flexGrow: 1,
          mx: "auto",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        className="shadow-xl"
      >
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
            className="text-blue-500"
          >
            {QUESTIONS[activeStep].label}
          </Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className="bg-gray-100"
        >
          {QUESTIONS.map((question, index) => (
            <Paper key={question.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    display: "block",
                    height: "100%",
                    padding: "10px",
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    helperText={`${answers[index]?.answer?.length ?? 0}/200`}
                    multiline
                    rows={4}
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
              backgroundColor: "text-red-500",
            },
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{
                textTransform: "none",
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
        className="shadow__btn py-2 px-4 mx-auto mt-10 "
        onClick={handleClick}
      >
        Search
      </button>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
