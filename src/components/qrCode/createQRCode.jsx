// import { Button } from "react-bootstrap";
// // import { QRCodeCanvas } from "qrcode.react";
// import React, { useRef, useEffect } from "react";
// import makePdfData from "../CreatePdf/data";
// import rasm from "./logo512.png";

// function CreateQRCode({ id }) {
//   const url = `https://172.16.1.35/shartnomalar/${id}`;
//   const canvas = <QRCodeCanvas value={url} />;
//   const canvasImg = useRef();

//   let dataImg;

//   function createPdf() {
//     makePdfData([], dataImg, 1);
//   }
//   useEffect(() => {
//     {
//       dataImg = canvasImg.current?.children[0].toDataURL("image/png");
//       console.log(dataImg);
//     }
//   }, []);

//   return (
//     <>
//       <div style={{ display: "none" }} ref={canvasImg}>
//         {canvas}
//       </div>{" "}
//       <Button variant="ligt" className="border" onClick={createPdf}>
//         <i className="bi text-danger bi-file-earmark-pdf-fill"></i>
//       </Button>
//     </>
//   );
// }

// export default CreateQRCode;
