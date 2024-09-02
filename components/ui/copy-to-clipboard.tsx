"use client";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "./Button";
import { DocumentCopy } from "iconsax-react";

const CopyToClipboard = () => {
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };
  return (
    <Button
      variant={"default"}
      size={"custom"}
      onClick={handleCopy("kouraybane809@gmail.com")}
      className="group transition-all overflow-hidden"
    >
      <p className="group-hover:blur-lg duration-300">Copy email</p>
      <DocumentCopy
        size="18"
        color="#fff"
        variant="Bold"
        className="absolute left-0 right-0 -bottom-16 group-hover:bottom-0 top-0 duration-300 opacity-0 group-hover:opacity-100 m-auto"
      />
    </Button>
  );
};

export default CopyToClipboard;
