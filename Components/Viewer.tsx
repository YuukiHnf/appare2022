import { Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
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
    setTimeout(() => {
      setIsLoadingImage(true);
    }, 1000);
    return () => {
      setIsLoadingImage(false);
    };
  }, [url, title]);

  return (
    <Grow in={isLoadingImage} {...(isLoadingImage ? { timeout: 1000 } : {})}>
      <div
        style={{
          width: "100%",
          height: "100vh",
          alignItems: "center",
          display: "flex",
        }}
      >
        {isLoadingImage && (
          <>
            <Typography
              position={"absolute"}
              color={"white"}
              fontSize={"14px"}
              fontWeight={"bolder"}
              maxWidth={"100%"}
              width={"90%"}
              top={"30%"}
              left={"50%"}
              sx={{
                transform: "translate(-50%, -50%)",
                "-ms-transform": "translate(-50%, -50%)",
                "-webkit-transform": "translate(-50%, -50%)",
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: 3,
                fontSize: "18px",
              }}
              p={"12px"}
            >
              {title.split("\n").map((line, key) => (
                <span key={key}>
                  {line}
                  <br />
                </span>
              ))}
            </Typography>
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
            </div>
          </>
        )}
      </div>
    </Grow>
  );
};

export default Viewer;
