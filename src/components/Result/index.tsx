import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Translate } from "../../interfaces/interfaces";
import { motion } from "framer-motion";
import { exit } from "process";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "start",
    padding: 20,
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
  },
});
type StepType = "initial" | "result";

interface Props {
  translatedData: Translate | undefined;
  goBack: (step: StepType) => void;
}

const variants = {
  init: { transform: "translateX(300px)" },
  default: { transform: "translateX(0px)" },
  end: { transform: "translateX(-300px)" },
};

const Result: React.FC<Props> = ({ translatedData, goBack }) => {
  const styles = useStyles();

  if (translatedData === undefined) return null;

  const date = new Date(translatedData.written_on).toLocaleDateString();

  return (
    <motion.div variants={variants} initial="init" animate="default">
      <Box className={styles.root}>
        <Typography color="primary" variant="h4">
          {translatedData.word}
        </Typography>
        <Typography variant="body1">{translatedData.definition}</Typography>
        <Typography color="secondary" variant="body2">
          {translatedData.example}
        </Typography>
        <Typography variant="caption">
          By{" "}
          <Typography color="primary" variant="overline">
            {translatedData.author}
          </Typography>{" "}
          on {date}
        </Typography>
        <Button
          onClick={() => goBack("initial")}
          color="primary"
          variant="contained"
        >
          Back
        </Button>
      </Box>
    </motion.div>
  );
};

export default Result;
