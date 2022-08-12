import { Grow, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  url: string;
  title: string;
};
/**
 * 画像とテキストをいい感じに表示する
 * @returns
 */
const Viewer = ({ url, title }: Props) => {
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  useEffect(() => {
    setIsLoadingImage(true);

    return () => {
      setIsLoadingImage(false);
    };
  }, [url, title]);
  console.log(isLoadingImage);

  return (
    <Grow in={isLoadingImage}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            margin: "auto calc(50% - 50vw) ",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={url}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              backgroundColor: "rbga(0,0,0,0.5)",
              margin: "0 auto",
            }}
          />
          <Typography
            position={"absolute"}
            color={"white"}
            fontSize={"2em"}
            fontWeight={"bolder"}
            maxWidth={"100%"}
            top={"50%"}
            left={"50%"}
            sx={{
              transform: "translate(-50%, -50%)",
              "-ms-transform": "translate(-50%, -50%)",
              "-webkit-transform": "translate(-50%, -50%)",
              backgroundColor: "rgba(0,0,0,0.8)",
            }}
            p={"16px"}
          >
            {title}
          </Typography>
        </div>
      </div>
    </Grow>
  );
};

export default Viewer;
