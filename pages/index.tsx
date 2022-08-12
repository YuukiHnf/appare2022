import { Button, Chip } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Viewer from "../Components/Viewer";
import styles from "../styles/Home.module.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { useState } from "react";

const Home: NextPage = () => {
  const [messages, setMessage] = useState([
    {
      url: "https://source.unsplash.com/random",
      title: "text1",
    },
    {
      url: "https://source.unsplash.com/random",
      title: "text2",
    },
    {
      url: "https://source.unsplash.com/random",
      title: "text3",
    },
    {
      url: "https://source.unsplash.com/random",
      title: "text4",
    },
  ]);

  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <>
      <Viewer url={messages[index].url} title={messages[index].title} />
      <Chip
        label="次へ"
        deleteIcon={<NavigateNextRoundedIcon />}
        onDelete={() => {
          setIndex((state) => state + 1);
        }}
        onClick={() => {
          setIndex((state) => state + 1);
        }}
        color={"primary"}
        disabled={index >= messages.length - 1}
        sx={{ position: "absolute", right: "16px", bottom: "16px" }}
      />
      <Chip
        label="前へ"
        icon={<KeyboardArrowLeftRoundedIcon />}
        onClick={() => {
          setIndex((state) => state - 1);
        }}
        disabled={index === 0}
        color={"primary"}
        sx={{ position: "absolute", left: "16px", bottom: "16px" }}
      />
    </>
  );
};

export default Home;
