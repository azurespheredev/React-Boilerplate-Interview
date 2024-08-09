import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProgressBar from "./ProgressBar";

const Part2Component: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);
  const [currentBar, setCurrentBar] = useState<number>(0);

  const addProgressBar = (): void => {
    setBars((prevBars) => [...prevBars, 0]);
  };

  const updateProgress = (index: number): void => {
    const progressInterval = setInterval(() => {
      setBars((prevBars) => {
        const newBars = [...prevBars];
        newBars[index] += 1;

        if (newBars[index] >= 100) {
          clearInterval(progressInterval);
          if (index < newBars.length - 1) {
            setCurrentBar(index + 1);
          }
        }
        return newBars;
      });
    }, 10);
  };

  useEffect(() => {
    if (bars.length > 0 && bars[currentBar] === 0) {
      updateProgress(currentBar);
    }
  }, [currentBar, bars]);

  return (
    <Box>
      <Typography variant="h4">{"Part Two"}</Typography>

      <Button
        variant="contained"
        className="my-4"
        onClick={addProgressBar}
      >
        {"Add Bar"}
      </Button>

      {bars.map((progress: number, index: number) => (
        <Box key={index} className="flex flex-col items-center w-full mb-4">
          <ProgressBar progress={progress} />
        </Box>
      ))}
    </Box>
  );
}

export default Part2Component;