export const data = [
  {
    id: 1,
    name: "Giffard Kennedy",
    email: "giffardkennedy@gmail.com",
    image: require("../images/giffard.png"),
    chats: [
      {
        date: new Date(2025, 6, 15),
        messages: [
          {
            isMe: false,
            message:
              "Halo, saya mendapat laporan dari pengguna, ada yang bisa saya bantu?",
            time: new Date(2025, 6, 15, 13, 30, 50),
          },
          {
            isMe: true,
            message:
              "Saya butuh bantuan mengenai pembuatan aplikasi ini, terutama di bagian design aplikasi",
            time: new Date(2025, 6, 15, 13, 31, 20),
          },
          {
            isMe: true,
            message: "Apakah anda bisa membantu?",
            time: new Date(2025, 6, 15, 13, 31, 50),
          },
        ],
      },
      {
        date: new Date(2025, 6, 17),
        messages: [
          {
            isMe: false,
            message:
              "Maaf membalas terlalu lama, boleh meminta rincian aplikasi nya?",
            time: new Date(2025, 6, 17, 7, 30, 20),
          },
          {
            isMe: false,
            message: "Bisa dikirimkan kesini yaa design aplikasinya",
            time: new Date(2025, 6, 17, 7, 30, 30),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Garland Allyn",
    email: "garlandallyn@gmail.com",
    image: require("../images/garland.png"),
    chats: [],
  },
  {
    id: 3,
    name: "Avice Rain",
    email: "avicerain@gmail.com",
    image: require("../images/avice.png"),
    chats: [],
  },
  {
    id: 4,
    name: "Deeann Ashton",
    email: "deeannashton@gmail.com",
    image: require("../images/deeann.png"),
    chats: [],
  },
  {
    id: 5,
    name: "Bethney Lizbeth",
    email: "bethneylizbeth@gmail.com",
    image: require("../images/bethney.png"),
    chats: [],
  },
];
