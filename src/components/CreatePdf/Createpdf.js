import jsPDF from "jspdf";
import "jspdf-autotable";
// import gerb from "../../img/gerb.png";
import { font, fontBold } from "./font";
function CreatePdf(...data) {
  const callAddFont = function () {
    this.addFileToVFS("times new roman bold-normal.ttf", fontBold);
    this.addFont("times new roman bold-normal.ttf", "times new roman", "bold");
    this.addFileToVFS("times new roman-normal.ttf", font);
    this.addFont("times new roman-normal.ttf", "times new roman", "normal");
  };

  jsPDF.API.events.push(["addFonts", callAddFont]);

  const doc = new jsPDF("p", "pt", "a4").setProperties({
    title: "Shartnoma",
  });

  let pageHeight = doc.internal.pageSize.height,
    pageWidth = doc.internal.pageSize.getWidth(),
    lineHeight = 1.5,
    margin = 28.34,
    maxLineWidth = pageWidth - margin * 2,
    fontSize = 12,
    oneLineHeight = fontSize * lineHeight;

  doc.setFont("times new roman");
  let verticalOffset = oneLineHeight;
  verticalOffset += oneLineHeight;

  var textLinesHeader = doc
    .setFont("times new roman", "bold")
    .setFontSize(fontSize)
    .splitTextToSize(
      `Respublika o’rta tibbiyot va farmasevt xodimlar malakasini oshirish va ularni ixtisoslashtirish markazi Samarqand filiali`,
      (2 * maxLineWidth) / 3
    );

  doc.text(textLinesHeader, pageWidth / 2, verticalOffset, "center");
  verticalOffset +=
    textLinesHeader.length * fontSize * lineHeight + oneLineHeight;
  // doc
  //   .setLineWidth(0.5)
  //   .line(margin, verticalOffset - 18, pageWidth - margin, verticalOffset - 18);
  // doc
  //   .setLineWidth(1)
  //   .line(
  //     margin,
  //     verticalOffset - 18 + 1.5,
  //     pageWidth - margin,
  //     verticalOffset - 18 + 1.5
  //   );

  data.forEach((item) => {
    if (verticalOffset >= pageHeight) {
      doc.addPage();
      verticalOffset = oneLineHeight; // Restart height position
    }
    if (item.name === "header") {
      header(item);
    }

    if (item.name === "text") {
      addText(item);
    }

    if (item.name === "table") {
      drawTable(item.data);
    }
  });

  function header(texts) {
    doc.text(texts.left, margin, verticalOffset, "left");
    // doc.text(texts.center, pageWidth / 2, verticalOffset, "center");
    doc.text(texts.right, pageWidth - margin, verticalOffset, "right");
    verticalOffset += oneLineHeight;
  }

  function addText(text) {
    var textLines = doc
      .setFont("times new roman", text.weight)
      .setFontSize(fontSize)
      .splitTextToSize(
        text.text,
        text.width ? maxLineWidth / text.width : maxLineWidth
      );

    const Xaxis = text.align === "center" ? pageWidth / 2 : margin;
    console.log(text.align ? text.align : "justify");
    doc.internal.write(0, "Tw");
    doc.text(textLines, Xaxis, verticalOffset, {
      maxWidth: maxLineWidth,
      align: "justify",
    });

    verticalOffset += textLines.length * fontSize * lineHeight;
  }

  function drawTable(tableData) {
    const contData = tableData.map((item, index) => [
      index + 1,
      item.td2,
      item.td3,
      item.td4,
    ]);

    const headers = [["№", "F.I.SH", "Kursi", "Guruhi"]];

    const content = {
      startY: verticalOffset - 10,
      theme: "plain",
      head: headers,
      body: contData,
      font: "times new roman",
      margin: 0,
      rowPageBreak: "avoid",
      bodyStyles: {
        lineColor: [0, 0, 0],
        lineWidth: 0.001,
        font: "times new roman",
      },
      headStyles: {
        lineColor: [0, 0, 0],
        lineWidth: 0.001,
        font: "times new roman",
      },
    };

    doc.autoTable(content);
    verticalOffset = doc.lastAutoTable.finalY + oneLineHeight;
  }

  // console.log(doc.internal.pageSize);
  doc.save();
}

export default CreatePdf;
