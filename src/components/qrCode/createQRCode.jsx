import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import React, { useRef, useEffect } from "react";
import makePdfData from "../CreatePdf/data";
import rasm from "./logo512.png";

function CreateQRCode() {
  const canvas = (
    <QRCodeCanvas
      imageSettings={{
        excavate: true,
        src: rasm,
        width: "35",
        height: "35",
      }}
      value="https://github.com/"
    />
  );
  const canvasImg = useRef();

  let dataImg;

  function createPdf() {
    const doc = new jsPDF("p", "pt", "a4").setProperties({
      title: "Shartnoma",
    });
    doc.addImage(dataImg, "PNG", 50, 50, 50, 50);
    doc.save("test.pdf");
  }
  useEffect(() => {
    {
      dataImg = canvasImg.current?.children[0].toDataURL("image/png");
      console.log(dataImg);
    }
  }, []);
  return (
    <div>
      <div style={{ display: "none" }} ref={canvasImg}>
        {canvas}
      </div>
      <button onClick={createPdf}>olish</button>
    </div>
  );
}

export default CreateQRCode;
