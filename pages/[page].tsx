import { Button, Chip } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Viewer from "../Components/Viewer";
import styles from "../styles/Home.module.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const [messages, setMessage] = useState([
    {
      url: "./TopImage.JPG",
      title: "Hello ノリ兄!!",
    },
    {
      url: "./Hako.JPG",
      title: "僕は\n「ノリのお兄さん」\nです。",
    },
    {
      url: "./",
      title: "text3",
    },
    {
      url: "https://source.unsplash.com/random",
      title: "text4",
    },
  ]);

  const index = page ? Number(page) : 0;

  return (
    <>
      <Viewer url={messages[index].url} title={messages[index].title} />
      <Chip
        label="次へ"
        deleteIcon={<NavigateNextRoundedIcon />}
        onDelete={() => {
          router.push(`/${index === messages.length - 1 ? index : index + 1}`);
        }}
        onClick={() => {
          router.push(`/${index === messages.length - 1 ? index : index + 1}`);
        }}
        color={"primary"}
        disabled={index >= messages.length - 1}
        sx={{ position: "absolute", right: "16px", bottom: "32px" }}
      />
      <Chip
        label="前へ"
        icon={<KeyboardArrowLeftRoundedIcon />}
        onClick={() => {
          router.push(`/${index === 0 ? 0 : index - 1}`);
        }}
        disabled={index === 0}
        color={"primary"}
        sx={{ position: "absolute", left: "16px", bottom: "32px" }}
      />
    </>
  );
};

export default Home;
