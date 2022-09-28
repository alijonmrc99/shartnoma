import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import React from "react";

function CreateQRCode() {
  const canvas = <QRCodeCanvas value="https://github.com/zpao/qrcode.react" />;
  const dataImg = canvas.toDataURL("image/png");
  function createPdf() {
    const doc = new jsPDF("p", "pt", "a4").setProperties({
      title: "Shartnoma",
    });
    doc.addImage(dataImg, "PNG", 0, 0, 500, 500);
    doc.save("test.pdf");
  }
  return (
    <div>
      <div>{canvas}</div>
      <button onClick={createPdf}>olish</button>
    </div>
  );
}

export default CreateQRCode;
