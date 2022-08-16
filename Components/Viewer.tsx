import { Grow, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  url: string;
  title: string;
  isLast?: boolean;
};
/**
 * 画像とテキストをいい感じに表示する
 * @returns
 */
const Viewer = ({ url, title, isLast = false }: Props) => {
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
    <>
      <div
        style={{
          margin: "auto calc(50% - 50vw) ",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      >
        <Image
          src={url}
          layout="fill"
          objectFit="contain"
          // style={{
          //   width: "100%",
          //   height: "auto",
          //   display: "block",
          //   backgroundColor: "rbga(0,0,0,0.5)",
          //   margin: "0 auto",
          // }}
        />
      </div>
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
              {isLast && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "calc(50% - 182px)",
                    display: "flex",
                    justifyContent: "center",
                    gap: "32px",
                    width: "364px",
                    flexDirection: "row",
                  }}
                >
                  <div>
                    <a href={"https://hci-lab.jp/personal_page/yukiabe/"}>
                      <Image src={"/port.png"} width="95px" height={"95px"} />
                    </a>
                  </div>
                  <div>
                    <a href={"https://twitter.com/YuukiHnf"}>
                      <Image
                        src={"/twitter.png"}
                        width="90px"
                        height={"90px"}
                      />
                    </a>
                  </div>
                  <div>
                    <a href={"https://www.instagram.com/yuukihnf/"}>
                      <Image
                        src={"/insta.png"}
                        width="100px"
                        height={"100px"}
                      />
                    </a>
                  </div>
                </div>
              )}
              {/* <div
              style={{
                margin: "auto calc(50% - 50vw) ",
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <Image
                src={url}
                layout="fill"
                objectFit="contain"
                // style={{
                //   width: "100%",
                //   height: "auto",
                //   display: "block",
                //   backgroundColor: "rbga(0,0,0,0.5)",
                //   margin: "0 auto",
                // }}
              />
            </div> */}
            </>
          )}
        </div>
      </Grow>
    </>
  );
};

export default Viewer;
