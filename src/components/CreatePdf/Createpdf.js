import jsPDF from "jspdf";
import "jspdf-autotable";
// import gerb from "../../img/gerb.png";
import { font, fontBold, fontItalic } from "./font";
function CreatePdf(...data) {
  const callAddFont = function () {
    this.addFileToVFS("times new roman bold-normal.ttf", fontBold);
    this.addFont("times new roman bold-normal.ttf", "times new roman", "bold");
    this.addFileToVFS("times new roman italic-italic.ttf", fontItalic);
    this.addFont(
      "times new roman italic-italic.ttf",
      "times new roman",
      "italic"
    );
    this.addFileToVFS("times new roman-normal.ttf", font);
    this.addFont("times new roman-normal.ttf", "times new roman", "normal");
  };

  jsPDF.API.events.push(["addFonts", callAddFont]);

  const doc = new jsPDF("p", "pt", "a4").setProperties({
    title: "Shartnoma",
  });

  let pageHeight = doc.internal.pageSize.height,
    pageWidth = doc.internal.pageSize.getWidth(),
    lineHeight = 1.2,
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
    if (verticalOffset >= pageHeight - 7 * oneLineHeight) {
      doc.addPage();
      verticalOffset = 3 * oneLineHeight; // Restart height position
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
    let endoOfXOfset = margin;
    if (text.data) {
      text.data.forEach((item, index) => {
        let beginOfXOfset = endoOfXOfset + doc.getTextWidth(" ");
        endoOfXOfset += doc.getTextWidth(item);
        if (index !== 2 && index !== 4)
          doc.line(beginOfXOfset, verticalOffset, endoOfXOfset, verticalOffset);
      });
    }

    var textLines = "";
    text.style
      ? (textLines = doc
          .setFont("times new roman", text.style)
          .setFontSize(fontSize)
          .splitTextToSize(
            text.text,
            text.width ? maxLineWidth / 2 : maxLineWidth
          ))
      : (textLines = doc
          .setFont("times new roman", text.weight)
          .setFontSize(fontSize)
          .splitTextToSize(
            text.text,
            text.width ? maxLineWidth / 2 : maxLineWidth
          ));

    let Xaxis = text.align === "center" ? pageWidth / 2 : margin;
    text.width === 5 && (Xaxis = maxLineWidth / 4);
    text.width === 6 && (Xaxis = (maxLineWidth * 3) / 4);
    text.width === 3 && (Xaxis = (maxLineWidth / 2) * 1.1);

    // underline texts

    doc.text(textLines, Xaxis, verticalOffset, {
      // maxWidth: maxLineWidth,
      align: text.align ? text.align : "justify",
    });

    text.width !== 5 &&
      text.width !== 2 &&
      (verticalOffset += textLines.length * fontSize * lineHeight);
  }

  function drawTable(tableData) {
    // console.log(tableData);
    // const contData = tableData?.map((item, index) => [
    //   index + 1,
    //   item.speciallize,
    //   item.interval,
    //   item.total,
    //   item.summa,
    // ]);

    const headers = [
      [
        "№",
        "Ta’lim yunalishi va mutaxassisligi",
        "Davomiyligi",
        "Tinglovchilar soni",
        "Umumiy summa",
      ],
    ];

    const content = {
      startY: verticalOffset - 10,
      theme: "plain",
      head: headers,
      body: tableData,
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
