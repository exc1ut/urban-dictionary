/* chrome global */
import { LinearProgress } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Translate } from "./interfaces/interfaces";
import Main from "./components/Main";
import Result from "./components/Result";

declare const window: any;

type PageType = "initial" | "result";

const config = {
  headers: {
    "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "x-rapidapi-key": "16cc06d273msh853ced81c7d5682p18f488jsna1bdbc0556eb",
  },
};

export default function App(props: any) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Translate>();
  const [loading, setLoading] = useState<false | true>(false);
  const [page, setPage] = useState<PageType>("initial");
  const [error, setError] = useState("");

  async function handleRequest(text: string) {
    setLoading(true);
    try {
      const link = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${text}`;
      const { data } = await Axios.get(link, config);
      const translatedData = data.list[0];
      if (data.list.length <= 0) {
        throw Error("There are no any records for the copied word");
      }
      setResult(translatedData);
      setLoading(false);
      setPage("result");
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setTimeout(() => setError(""), 3000);
      console.log("All errors", err);
    }
  }
  useEffect(() => {
    if (props.text.length > 0) {
      handleRequest(props.text);
    }
  }, []);

  return (
    <>
      {loading && <LinearProgress />}
      {page === "initial" ? (
        <Main
          input={input}
          error={error}
          setText={setInput}
          handleRequest={handleRequest}
        />
      ) : (
        <Result translatedData={result} goBack={setPage} />
      )}
    </>
  );
}
