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
      url: "/TopImage.JPG",
      title: "Hello ノリ兄!!",
    },
    {
      url: "/Hako.JPG",
      title: "【あだ名】\n20代目の「ノリのお兄さん」です。",
    },
    {
      url: "/enginar.jpg",
      title:
        "【所属】\n情エレの大学院に所属しながら、開発事業をやったり北海道内のMaaSの会社で働いてます。",
    },
    {
      url: "/akabira.PNG",
      title:
        "【縁での１番の思い出】\n一年生の最初の合宿でやったち○げファイヤです。\n怖さと日和たくない気持ちを肌で感じ、縁で何やっても大丈夫だと知りました。\n（写真は赤平火まつりの様子です）",
    },
    {
      url: "/Shiga.jpg",
      title:
        "【あッぱれへの意気込み】\nあッぱれは思い出がいっぱいです。\n２年目（2019）は、\n「集大成だ！ワクワク！」\nという気持ちと、\n「次の代に焦る嫌な気持ち」\nが混ざってすごかったです（語彙力）。",
    },
    {
      url: "/NorthFamily.jpg",
      title:
        "さらに、「北の家族」としても滋賀で踊りました。\nたくさんのOBらと踊り、呑みまくったことも相まって気持ちが溢れた思い出があります。",
    },
    {
      url: "/collection.jpg",
      title:
        "10年以上の縁と滋賀の歴史が詰まった19年のお祭りは楽しかったし、\n同時にそれを超えていけるのかみたいな不安がありました。",
    },
    {
      url: "/Shiga2.jpg",
      title:
        "でも、だからこそ来年の滋賀はこの日の滋賀を超えるすごいチームで帰ってきたい！と思っていました。",
    },
    {
      url: "/yoshikawa.JPG",
      title:
        "しかしながら、2020年はコロナの影響で中止になってしまいました。\n12月から吉川さんとあッぱれの計画を立ててたのもありショックでしたね。\nそれでも吉川さんたちが暖かく迎えてくださり、今も楽しく飲み会ができている状態です。",
    },
    {
      url: "/final.jpg",
      title:
        "なので、今回の滋賀は全力で思いっきり伏線を回収しに行きたいです。\nもちろん現役ではないものの、自分ができることは全部して、悔いのないようにします!",
    },
    {
      url: "/goodbye.JPG",
      title: "また滋賀で会いましょう!",
    },
  ]);

  const index = page ? Number(page) : 0;

  return (
    <>
      <Viewer
        url={messages[index].url}
        title={messages[index].title}
        isLast={messages.length - 1 === index}
      />
      <Chip
        label="次へ"
        deleteIcon={<NavigateNextRoundedIcon />}
        onDelete={() => {
          router.push(
            `/?page=${index === messages.length - 1 ? index : index + 1}`
          );
        }}
        onClick={() => {
          router.push(
            `/?page=${index === messages.length - 1 ? index : index + 1}`
          );
        }}
        color={"primary"}
        disabled={index >= messages.length - 1}
        sx={{ position: "absolute", right: "16px", bottom: "40px" }}
      />
      <Chip
        label="前へ"
        icon={<KeyboardArrowLeftRoundedIcon />}
        onClick={() => {
          router.push(`/?page=${index === 0 ? 0 : index - 1}`);
        }}
        disabled={index === 0}
        color={"primary"}
        sx={{ position: "absolute", left: "16px", bottom: "40px" }}
      />
    </>
  );
};

export default Home;
