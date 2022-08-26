import CreatePdf from "./Createpdf";

export default function makePdfData(data) {
  const pdfArray = [];
  const date = new Date();
  const months = [
    "yanvar",
    "yevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  pdfArray.push({
    right: ` “${
      date.getDate().length === 0 ? "0" + date.getDate() : date.getDate()
    }”-${months[date.getMonth()]} ${date.getFullYear()} yil`,
    left: "Samarqand shaxri",
    name: "header",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "O’zbekiston Respublikasi Vazirlar Maxkamasining 2009  yil 18 dekabr  “Tibbiyot xodimlarini malakasini oshirish va ularni qayta tayyorlash tartibi to’g’risida”gi 319-sonli qarori.",
    align: "left",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "O’zbekiston Respublikasi Sog’likni saqlash vazirligining 2009 yil 31 dekabr “Oliy hamshiralik ishi, o’rta tibbiyot va dorishunos xodimlarini malakasini oshirish va ularni qayta tayyorlash tartibi” to’grisidagi 390-sonli, 2010 yil 30 noyabr “Respublika O’rta tibbiyot va dorishunos xodimlarining malakasini oshirish va ularni qayta tayyorlash Respublika markazi xamda uning viloyatlardagi  xududiy bulinmalari faoliyatini  muvofiqlashtirish to’g’risida”gi 330-sonli, 2015 yil 24 avgust “O’rta tibbiyot va dorishunos xodimlarni malakasini oshirish va ixtisoslashtirishdan o’tkazish to’g’risida”gi 336-sonli buyruklari asosida ish yurituvchi O’rta tibbiyot va farmasevt xodimlarini malakasini oshirish va ularni ixtisoslashtirish Respublika markazi Samarqand filiali direktori X.X.Egamov bir tomondan (keyingi urinlarda “bajaruvchi” deb ataladi) va ikkinchi tomondan (tinglovchi “buyurtmachi” deb ataladi).",
    weight: "normal",
  });
  CreatePdf(...pdfArray);
}
