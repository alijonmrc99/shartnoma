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
    data: [
      "Saydullayev Eldor Islmatulla o'g'li ",
      "“06” iyun 2022 ",
      "yildan ",
      "“06” avgust 2022 ",
      "yilgacha ",
      "Xamshiralik ishi ",
    ],
    text: "Saydullayev Eldor Islmatulla o'g'li “06” iyun 2022 yildan “06” Avgust 2022 yilgacha Xamshiralik ishi soxa buyicha Yo’llanma № __________ buyruk № __________",
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

  const newArr = pdfArray.concat([
    {
      name: "text",
      text: "3.Shartnomani amal qilish muddati.",
      align: "center",
      weight: "bold",
    },
    {
      name: "text",
      text: "3.1.Shartnoma taraflar tomonidan imzolangandan so’ng, qonuniy kuchga kiradi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "3.2.Mazkur shartnoma 2022 yil «____» _____________dan 2022 yil «____» ____________gacha amalda bo’ladi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "3.3.Tomonlar o’rtasidagi munosabatlar ular tomonidan mazkur shartnomaning barcha shartlari bajarilgan va hisob-kitob to’liq tugallangan taqdirda to’xtatiladi va shartnoma muddati tugashi tomonlar o’rtasidagi o’z majburiyatlardan ozod etmaydi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "4.Taraflarining javobgarligi.",
      align: "center",
      weight: "bold",
    },
    {
      name: "text",
      text: "4.1.O’qitish davomida shartnoma shartlaridagi muddatni buzganlik uchun aybdor taraf ikkinchi tarafga yetkazilgan zararni to’liq qoplaydi va 20% miqdorida jarima tulaydi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "4.2.Tavon to’lash taraflarni shartnoma bo’yicha o’z majburiyatlarini bajarishdan ozod qilmaydi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "4.3.Ushbu shartnoma, muddatidan oldin «Buyurtmachi» tomonidan bekor kilinganlik uchun shartnomani 1.2. bandidagi to’langan to’lov qaytarilmaydi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "4.4.Mazkur shartnomada nazarda tutilmagan taraflarning javobgarligi O’zbekiston Respublikasining amaldagi qonun hujjatlariga muvofik belgilanadi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "5.Nizolarni xal kilish.",
      align: "center",
      weight: "bold",
    },
    {
      name: "text",
      text: "5.1.Ushbu shartnoma yuzasidan taraflar o’rtasida kelib chikadigan nizo va ziddiyatlar taraflar o’rtasida  muzokaralar olib borish yo’li bilan hal etiladi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "5.2.Muzokaralar olib borish yo’li bilan nizoni hal etish imkoniyati bo’lmagan taqdirda nizo talabnoma bildirish tartibiga rioya kilinganidan keyin viloyat xujalik sudiga ko’rib chiqish uchun topshiriladi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "6.Fors-major va javobgarlikdan ozod etish.",
      align: "center",
      weight: "bold",
    },
    {
      name: "text",
      text: "6.1.Tomonlarning xoxish istagiga mutloqo bog’lik bo’lmagan hollarda (noqulay ob-havo sharoitlari, zilzila, suv toshkini, yong’in va boshka tabiiy ofatlar, fors-major) bajarilmagan yoki qisman bajarilmagan (to’lab berilmagan)ligi, shartnoma shartlarini ijro etish deb xisoblanmaydi va ushbu xolatda tomonlarni shartnomani bajarish muddati kelishilgan muddatga kechiktiriladi.",
      align: "justify",
      weight: "normal",
    },
    {
      name: "text",
      text: "7.Tomonlarning xuquqiy manzillari va bank xisoblari:",
      align: "center",
      weight: "bold",
    },
    {
      name: "text",
      text: "«Buyurtmachi»",
      align: "center",
      width: 5,
      weight: "bold",
    },
    {
      name: "text",
      text: "«Bajaruvchi»",
      width: 6,
      align: "justify",
      weight: "bold",
    },
    {
      name: "text",
      text: "F.I.O:  Kuvondikov Alijon Nabijonovich",
      align: "left",
      width: 2,
      weight: "normal",
    },
    {
      name: "text",
      text: "Respublika O’rta tibbiyot va farmasevt xodimlar malakasini oshirish va ularni ixtisoslashtirish  markazi Samarqand filiali",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "Adres: Samarqand Viloyati Payariq tumani",
      align: "left",
      width: 2,
      weight: "normal",
    },
    {
      name: "text",
      text: "Manzili: Samarqand sh.,M.Ulug’bek ko’chasi 72 uy",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "Pasport rakami: AB5767985",
      align: "left",
      width: 2,
      weight: "normal",
    },
    {
      name: "text",
      text: "Tel: (66) 233-68-42.",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "Telefon: 995953435",
      align: "left",
      width: 2,
      weight: "normal",
    },
    {
      name: "text",
      text: "Shx/r.400121860184017096200054001",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "STIR.202447583. OKONX.92200",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "Imzo ________________________________",
      align: "left",
      width: 2,
      weight: "normal",
    },

    {
      name: "text",
      text: "Moliya vazirligi g’aznachiligi Samarqand viloyati. Yagona g’azna xisob rakami: 23402000300100001010",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "STIR. 201122919.  MFO. 00014",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "Markaziy bank XKKM Toshkent shaxar Bosh boshqarmasi.",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "Direktor:____________________X.Egamov",
      align: "left",
      width: 3,
      weight: "normal",
    },
    {
      name: "text",
      text: "",
    },
    {
      name: "text",
      text: "Eslatma*: To’lov maqsadida o’quvchining F.I.Sh., shartnoma raqami, sanasi  va o’quv yo’nalishi to’liq va to’g’ri ko’rsatilishi kerak. (Bank tomonidan to’langan kvitansiya yoki to’lov topshiriqnomasi nusxasi o’quv markaziga topshirilishi kerak.)",
      align: "left",
      weight: "bold",
      style: "italic",
    },
    {
      name: "text",
      text: "",
    },
    {
      name: "text",
      text: "Eslatma**: Mahalliy davolash proflaktika muassasasi ma’muriyati o’qish muddati tugagandan so’ng, o’rta tibbiyot va farmasevt xodimini ishga joylashtirish ma’suliyatini o’z zimmasiga olmaydi.",
      align: "left",
      weight: "bold",
      style: "italic",
    },
  ]);

  // console.log(newArr);
  CreatePdf(...newArr);
}
