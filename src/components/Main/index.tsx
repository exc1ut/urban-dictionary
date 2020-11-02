import React from "react";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
  },
});

interface Props {
  input: string;
  setText: (e: string) => void;
  handleRequest: (text: string) => void;
  error: string;
}

const variants = {
  start: { transform: "scale(0.3)" },
  end: { transform: "scale(1)" },
  leave: { transform: "scale(0.3)" },
};

const Main: React.FC<Props> = ({ input, setText, handleRequest, error }) => {
  const styles = useStyles();

  return (
    <motion.div variants={variants} initial="start" animate="end">
      <Box className={styles.root}>
        <Typography variant="h6">UrbanDictionary</Typography>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Typography color="error" variant="caption">
              {error}
            </Typography>
          </motion.div>
        )}

        <TextField
          value={input}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
          label="Type any word..."
        />
        <Button
          onClick={() => handleRequest(input)}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Box>
    </motion.div>
  );
};

export default Main;
