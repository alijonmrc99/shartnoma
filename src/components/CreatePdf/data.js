import CreatePdf from "./Createpdf";

export default function makePdfData(data) {
  const pdfArray = [];

  function makeDateFormat(date) {
    const newDate = date ? new Date(date) : new Date();
    return ` “${
      newDate.getDate().length === 0
        ? "0" + newDate.getDate()
        : newDate.getDate()
    }”-${months[newDate.getMonth()]} ${newDate.getFullYear()} yil`;
  }
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
    right: makeDateFormat(),
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
  pdfArray.push({
    name: "text",
    text: "Kuvondikov Alijon Nabijonovich “06” iyun 2022 yildan “06” Avgust 2022 yilgacha  Xamshiralik ishi soxa buyicha Yo’llanma № __________ buyruk № __________",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "1.Shartnoma mazmuni.",
    align: "center",
    weight: "bold",
  });
  pdfArray.push({
    name: "text",
    text: "1.1.Ushbu shartnoma buyicha “Bajaruvchi”, “Buyurtmachi”ning talabiga asosan, uning tibbiyotga oid malakalarini oshirish, qayta tayyorlash va kasbiy mahoratini oshirishini, barcha derektiv va me’yoriy xujjatlar bilan tanishtirish, zamonaviy tibbiy jixozlardan foydalanib sifatli mashg’ulotlar o’tkazish.",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "1.2.”Buyurtmachi”  O’zbekiston Respublikasi Sog’liqni saklash vazirligining 2010 yil 30 noyabrdagi 330-sonli buyrug’i bilan tasdiqlangan “pulli-shartnoma asosida ukitish preyskurantiga muvofik kuyidagi pul mablag’larini “Bajaruvchi”ga tulaydi. (Xukumat karorlari asosida oylik maoshlar oshib borganda kalkulyasiya uzgarishi mumkin).",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "table",
    data: [["", "Davolash ishi", 2, 1, "1339218.47"]],
  });
  pdfArray.push({
    name: "text",
    text: "Jami:_ :_Bir million uch yuz o’ttiz to’qqiz ming ikki yuz o’n sakkiz so’m 47 tiyin ",
    align: "justify",
    weight: "bold",
  });
  pdfArray.push({
    name: "text",
    text: "1.3.Mazkur shartnoma bo’yicha hisob-kitoblar 5 kun muddatda xujjatlar qabul qilingandan keyin to’liq to’lanadi.",
    align: "justify",
    weight: "bold",
  });
  pdfArray.push({
    name: "text",
    text: "2.Tomonlar majburiyati.",
    align: "center",
    weight: "bold",
  });
  pdfArray.push({
    name: "text",
    text: "2.1.”Bajaruvchining”majburiyatlari",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "* o’kuv jarayonini tashkil etishda shartnoma shartlari buyicha buyurtmachiga zamonaviy pedagogik-texnologiyalar asosida sifatli xizmat ko’rsatishni tashkil etish;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "* mutaxassisni O’zbekiston Respublikasi Sog’liqni saklash vazirligi tomonidan tasdiqlangan o’kuv rejasi va dasturlariga muvofik zamon talablari darajasida o’kitishni tashkillashtirish;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "* nazariy va amaliy mashgulotlarni tinglovchilar tomonidan o’zlashtirilish nazoratini olib borish va mashg’ulotlar so’ngida yakuniy nazoratlar kompyuter dasturlari, tinglovchilarni “Mustaqil ishlari” ximoyasi bilan o’tkaziladi;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "* yakuniy nazoratni muvaffakiyatli topshirgan tinglovchilarga malaka oshirganligi  (ixtisoslashtirish, qayta tayyorlash) xaqida belgilngan tartibda sertifikat (guvoxnoma) berish;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "2.2.”Buyurtmachi”ning majburiyatlari:",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "* xududiy bulimning ichki tartib qoidasiga qat’iy rioya qilish, xududiy bulinma yo’llanmasida kursatilgan muddat va tartibda xujjatlarni topshirish;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "* mashg’ulotlarga uz vaqtida qatnashish va tasdiqlangan sikl davomida darslarni sababsiz qoldirmaslik;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "2.3. Ushbu shartnomaning 1.2. va 1.3.-bandida ko’rsatilgan talablarni belgilangan tartibda amalga oshirish",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "2.4. O’qish davomida tinglovchi 3 kun (18 soat) davomida dars qoldirsa o’qishdan chetlashtiriladi, hamda to’langan pul mablag’i qaytarib berilmaydi;",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });
  pdfArray.push({
    name: "text",
    text: "",
    align: "justify",
    weight: "normal",
  });

  console.log(pdfArray);
  CreatePdf(...pdfArray);
}
