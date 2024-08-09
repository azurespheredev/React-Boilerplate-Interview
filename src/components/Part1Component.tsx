import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const Part1Component: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const startProgress = (): void => {
    setProgress(0);

    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      })
    }, 10);
  }

  return (
    <Box>
      <Typography variant="h4">{"Part One"}</Typography>

      <Button
        variant="contained"
        className="my-4"
        onClick={startProgress}
        disabled={progress > 0 && progress < 100}
      >
        {"Start Bar"}
      </Button>

      <ProgressBar progress={progress} />
      <div className="text-center text-sm text-gray-700 mt-2">Progress: {progress}%</div>
    </Box>
  );
};

export default Part1Component;