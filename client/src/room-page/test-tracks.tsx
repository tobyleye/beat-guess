import { Box } from "@chakra-ui/react";

const tracks = [
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Ojuelegba",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5N47dnIfPuGH8kIHpf8gZK",
        },
        href: "https://api.spotify.com/v1/artists/5N47dnIfPuGH8kIHpf8gZK",
        id: "5N47dnIfPuGH8kIHpf8gZK",
        name: "Duncan Mighty",
        type: "artist",
        uri: "spotify:artist:5N47dnIfPuGH8kIHpf8gZK",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/85e6860a579febffec4ce19456b62604112485b6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Obianuju",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ef84bf1ddde412e0d7ca0231",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ef84bf1ddde412e0d7ca0231",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ef84bf1ddde412e0d7ca0231",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Baby Na Yoka",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e8f13c9cac22baffe6f45696",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e8f13c9cac22baffe6f45696",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e8f13c9cac22baffe6f45696",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Ifunanya",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e9ec5319b3e6f25318c15d97",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e9ec5319b3e6f25318c15d97",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e9ec5319b3e6f25318c15d97",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0AJdNiFdUdmiU2TNg5fSzH",
        },
        href: "https://api.spotify.com/v1/artists/0AJdNiFdUdmiU2TNg5fSzH",
        id: "0AJdNiFdUdmiU2TNg5fSzH",
        name: "9ice",
        type: "artist",
        uri: "spotify:artist:0AJdNiFdUdmiU2TNg5fSzH",
      },
    ],
    preview_url: null,
    name: "Gongo Aso",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27370a3ddc1f224e54f33c90f77",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0270a3ddc1f224e54f33c90f77",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485170a3ddc1f224e54f33c90f77",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1sSt1DqqqFLkPwfrqafVyn",
        },
        href: "https://api.spotify.com/v1/artists/1sSt1DqqqFLkPwfrqafVyn",
        id: "1sSt1DqqqFLkPwfrqafVyn",
        name: "Ice Prince",
        type: "artist",
        uri: "spotify:artist:1sSt1DqqqFLkPwfrqafVyn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/094nOQ29vLC8FjZ3PhnM2u",
        },
        href: "https://api.spotify.com/v1/artists/094nOQ29vLC8FjZ3PhnM2u",
        id: "094nOQ29vLC8FjZ3PhnM2u",
        name: "Brymo",
        type: "artist",
        uri: "spotify:artist:094nOQ29vLC8FjZ3PhnM2u",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/be20ed8ee3c72f614034d419f5f6cb002575f9ee?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Oleku (feat. Brymo)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b00f0c7365af1c3ccebe9d4d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b00f0c7365af1c3ccebe9d4d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b00f0c7365af1c3ccebe9d4d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2535ea179c03e152e353547af7f69b1a7b6f94b6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Remember - Yori Yori Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a824471703e6a62ceec0c5a9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a824471703e6a62ceec0c5a9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a824471703e6a62ceec0c5a9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/094nOQ29vLC8FjZ3PhnM2u",
        },
        href: "https://api.spotify.com/v1/artists/094nOQ29vLC8FjZ3PhnM2u",
        id: "094nOQ29vLC8FjZ3PhnM2u",
        name: "Brymo",
        type: "artist",
        uri: "spotify:artist:094nOQ29vLC8FjZ3PhnM2u",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/679f62054cdf186ded656f1d5c06da08bcb90f06?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Good Morning",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c537130876f908c95974031b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c537130876f908c95974031b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c537130876f908c95974031b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Don't Dull",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Dami Duro",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f32af97205272065d071576f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f32af97205272065d071576f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f32af97205272065d071576f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/094nOQ29vLC8FjZ3PhnM2u",
        },
        href: "https://api.spotify.com/v1/artists/094nOQ29vLC8FjZ3PhnM2u",
        id: "094nOQ29vLC8FjZ3PhnM2u",
        name: "Brymo",
        type: "artist",
        uri: "spotify:artist:094nOQ29vLC8FjZ3PhnM2u",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/800fae2ada9ec4422b65022b0ed9d56996e5ab79?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ara",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c537130876f908c95974031b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c537130876f908c95974031b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c537130876f908c95974031b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3WzoYG00RDcrAD5ZPAUmPy",
        },
        href: "https://api.spotify.com/v1/artists/3WzoYG00RDcrAD5ZPAUmPy",
        id: "3WzoYG00RDcrAD5ZPAUmPy",
        name: "Styl-Plus",
        type: "artist",
        uri: "spotify:artist:3WzoYG00RDcrAD5ZPAUmPy",
      },
    ],
    preview_url: null,
    name: "Imagine That",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273277710492d6bd928564806a0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02277710492d6bd928564806a0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851277710492d6bd928564806a0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/26b342c07e7d7e0e09587a4d1928b935e9269cc8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Laye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733731a90c6439be037a3cf656",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023731a90c6439be037a3cf656",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513731a90c6439be037a3cf656",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/81bc88ff143ed014694cd9bd6f789ae407240ecb?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Melo Melo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27344a55478ddc497eca42b4f9e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0244a55478ddc497eca42b4f9e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485144a55478ddc497eca42b4f9e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url: null,
    name: "Yes/No",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fbc01a791d00acdd01e9ce6b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fbc01a791d00acdd01e9ce6b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fbc01a791d00acdd01e9ce6b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/343166e5534ed25978aa082f3eb9e7730d8ca522?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Eminado (feat. Don Jazzy)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f666b0467a467dcd97dd1d07",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f666b0467a467dcd97dd1d07",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f666b0467a467dcd97dd1d07",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Do Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273344915ef6b71cd3c611a19dc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02344915ef6b71cd3c611a19dc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851344915ef6b71cd3c611a19dc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Tease Me / Bad Guys",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "No Lele",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a4879370d983b057f814f27f9a32ccff0f46621d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gobe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27309156c2bdb0e87ccfeef923f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0209156c2bdb0e87ccfeef923f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485109156c2bdb0e87ccfeef923f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5RCdjio4ASMQ8CFaSuAl6C",
        },
        href: "https://api.spotify.com/v1/artists/5RCdjio4ASMQ8CFaSuAl6C",
        id: "5RCdjio4ASMQ8CFaSuAl6C",
        name: "D'banj",
        type: "artist",
        uri: "spotify:artist:5RCdjio4ASMQ8CFaSuAl6C",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7eb7de70140900b6b56a0b49c3af2108fea52f0d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fall in Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737e06372d9c9c9e466a9756cf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027e06372d9c9c9e466a9756cf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517e06372d9c9c9e466a9756cf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Duro",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b6e14037d5adec35dbb75e55",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b6e14037d5adec35dbb75e55",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b6e14037d5adec35dbb75e55",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6kgrtA0dlnVpWB6zjpXrRb",
        },
        href: "https://api.spotify.com/v1/artists/6kgrtA0dlnVpWB6zjpXrRb",
        id: "6kgrtA0dlnVpWB6zjpXrRb",
        name: "Femi Kuti",
        type: "artist",
        uri: "spotify:artist:6kgrtA0dlnVpWB6zjpXrRb",
      },
    ],
    preview_url: null,
    name: "Jaiye Jaiye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5CG9X521RDFWCuAhlo6QoR",
        },
        href: "https://api.spotify.com/v1/artists/5CG9X521RDFWCuAhlo6QoR",
        id: "5CG9X521RDFWCuAhlo6QoR",
        name: "Fela Kuti",
        type: "artist",
        uri: "spotify:artist:5CG9X521RDFWCuAhlo6QoR",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/cadd0f176e75d87f48aac181d67eeb450bc64b0a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Let's Start",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fd9d672d930fb00ec7263149",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fd9d672d930fb00ec7263149",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fd9d672d930fb00ec7263149",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5CG9X521RDFWCuAhlo6QoR",
        },
        href: "https://api.spotify.com/v1/artists/5CG9X521RDFWCuAhlo6QoR",
        id: "5CG9X521RDFWCuAhlo6QoR",
        name: "Fela Kuti",
        type: "artist",
        uri: "spotify:artist:5CG9X521RDFWCuAhlo6QoR",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/16e2e07512708c120d25484435d938a3d60c0040?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Water No Get Enemy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27331de7fe135ec45049a8df578",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0231de7fe135ec45049a8df578",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485131de7fe135ec45049a8df578",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url: null,
    name: "Caro",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "No One Like U",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e9ec5319b3e6f25318c15d97",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e9ec5319b3e6f25318c15d97",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e9ec5319b3e6f25318c15d97",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e57876534797873cf08e0d1352b2477bae9b6057?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Aye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730f7996b0d461901ff60b42c8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020f7996b0d461901ff60b42c8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510f7996b0d461901ff60b42c8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/83c7c01ab2fa7dcead25e721516f83f41a92180d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mama",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27399287f3d1428c4d30445737f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0299287f3d1428c4d30445737f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485199287f3d1428c4d30445737f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Pakurumo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5JWBXFlYkBy3n2oN1To790",
        },
        href: "https://api.spotify.com/v1/artists/5JWBXFlYkBy3n2oN1To790",
        id: "5JWBXFlYkBy3n2oN1To790",
        name: "Mavins",
        type: "artist",
        uri: "spotify:artist:5JWBXFlYkBy3n2oN1To790",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1A1IEvjX2MyuMXDDsSW8sD",
        },
        href: "https://api.spotify.com/v1/artists/1A1IEvjX2MyuMXDDsSW8sD",
        id: "1A1IEvjX2MyuMXDDsSW8sD",
        name: "Dr SID",
        type: "artist",
        uri: "spotify:artist:1A1IEvjX2MyuMXDDsSW8sD",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5mUNACNQZaugrWFIjtRWdA",
        },
        href: "https://api.spotify.com/v1/artists/5mUNACNQZaugrWFIjtRWdA",
        id: "5mUNACNQZaugrWFIjtRWdA",
        name: "Dr Sid Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:5mUNACNQZaugrWFIjtRWdA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6NPhzQsQKDigbNjJInGdCd",
        },
        href: "https://api.spotify.com/v1/artists/6NPhzQsQKDigbNjJInGdCd",
        id: "6NPhzQsQKDigbNjJInGdCd",
        name: "Di'Ja",
        type: "artist",
        uri: "spotify:artist:6NPhzQsQKDigbNjJInGdCd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2TwUVWFJs4LD0lOBbJXnNa",
        },
        href: "https://api.spotify.com/v1/artists/2TwUVWFJs4LD0lOBbJXnNa",
        id: "2TwUVWFJs4LD0lOBbJXnNa",
        name: "Korede Bello",
        type: "artist",
        uri: "spotify:artist:2TwUVWFJs4LD0lOBbJXnNa",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6rqqLENUG5H57UnYuLOUbU",
        },
        href: "https://api.spotify.com/v1/artists/6rqqLENUG5H57UnYuLOUbU",
        id: "6rqqLENUG5H57UnYuLOUbU",
        name: "D'Prince",
        type: "artist",
        uri: "spotify:artist:6rqqLENUG5H57UnYuLOUbU",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/25859bea51232fb55c5112e5c3945c8fa5a82083?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Dorobucci (feat. Don Jazzy, Dr Sid, Dr Sid Tiwa Savage, Reekado Banks, Di'ja, Korede Bello & D'prince)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734d6cc9846f2348912bcad15e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024d6cc9846f2348912bcad15e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514d6cc9846f2348912bcad15e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fce06753b3b21dc1e18718e1bb8dcb3eac78b398?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bobo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27344a55478ddc497eca42b4f9e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0244a55478ddc497eca42b4f9e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485144a55478ddc497eca42b4f9e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/64oW4P0vsDhlorOxZKQi6a",
        },
        href: "https://api.spotify.com/v1/artists/64oW4P0vsDhlorOxZKQi6a",
        id: "64oW4P0vsDhlorOxZKQi6a",
        name: "DJ Tunez",
        type: "artist",
        uri: "spotify:artist:64oW4P0vsDhlorOxZKQi6a",
      },
    ],
    preview_url: null,
    name: "Iskaba",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b8e791ba5f20769bb0e1a0ed",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b8e791ba5f20769bb0e1a0ed",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b8e791ba5f20769bb0e1a0ed",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0AJdNiFdUdmiU2TNg5fSzH",
        },
        href: "https://api.spotify.com/v1/artists/0AJdNiFdUdmiU2TNg5fSzH",
        id: "0AJdNiFdUdmiU2TNg5fSzH",
        name: "9ice",
        type: "artist",
        uri: "spotify:artist:0AJdNiFdUdmiU2TNg5fSzH",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2n4DcAtRMvfyRX3ljeC8Kp",
        },
        href: "https://api.spotify.com/v1/artists/2n4DcAtRMvfyRX3ljeC8Kp",
        id: "2n4DcAtRMvfyRX3ljeC8Kp",
        name: "2Baba",
        type: "artist",
        uri: "spotify:artist:2n4DcAtRMvfyRX3ljeC8Kp",
      },
    ],
    preview_url: null,
    name: "street Credibility (feat. 2baba)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27386d5d3b32efe3f27c45a6c72",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0286d5d3b32efe3f27c45a6c72",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485186d5d3b32efe3f27c45a6c72",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/64oW4P0vsDhlorOxZKQi6a",
        },
        href: "https://api.spotify.com/v1/artists/64oW4P0vsDhlorOxZKQi6a",
        id: "64oW4P0vsDhlorOxZKQi6a",
        name: "DJ Tunez",
        type: "artist",
        uri: "spotify:artist:64oW4P0vsDhlorOxZKQi6a",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4on7a4BKixLl1rSlEcaY8Y",
        },
        href: "https://api.spotify.com/v1/artists/4on7a4BKixLl1rSlEcaY8Y",
        id: "4on7a4BKixLl1rSlEcaY8Y",
        name: "Blaq Jerzee",
        type: "artist",
        uri: "spotify:artist:4on7a4BKixLl1rSlEcaY8Y",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/366595f30796a15afe03b3719bf6e391e2d49e83?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "GBESE",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d6d92ddb1a397790a6e37215",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d6d92ddb1a397790a6e37215",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d6d92ddb1a397790a6e37215",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fe1f61e64815872ed6cc9bdd13b2a95625fb4a29?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fever",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732e74362b470526cda9f124eb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022e74362b470526cda9f124eb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512e74362b470526cda9f124eb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/75243ce8223c92914b50600740ef95852ade0278?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "KANA",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fe5f143b2f5551a29acc7928",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fe5f143b2f5551a29acc7928",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fe5f143b2f5551a29acc7928",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6w2IGYYbcQENdjdjU2IFo4",
        },
        href: "https://api.spotify.com/v1/artists/6w2IGYYbcQENdjdjU2IFo4",
        id: "6w2IGYYbcQENdjdjU2IFo4",
        name: "StarBoy",
        type: "artist",
        uri: "spotify:artist:6w2IGYYbcQENdjdjU2IFo4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/11b21KVATwG7LgLPiD3a1A",
        },
        href: "https://api.spotify.com/v1/artists/11b21KVATwG7LgLPiD3a1A",
        id: "11b21KVATwG7LgLPiD3a1A",
        name: "Ceeza Milli",
        type: "artist",
        uri: "spotify:artist:11b21KVATwG7LgLPiD3a1A",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7zd8O0lGS5sHftyvnhtWD1",
        },
        href: "https://api.spotify.com/v1/artists/7zd8O0lGS5sHftyvnhtWD1",
        id: "7zd8O0lGS5sHftyvnhtWD1",
        name: "Spotless",
        type: "artist",
        uri: "spotify:artist:7zd8O0lGS5sHftyvnhtWD1",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6h3iqdnfBKV2jRhUJz0oto",
        },
        href: "https://api.spotify.com/v1/artists/6h3iqdnfBKV2jRhUJz0oto",
        id: "6h3iqdnfBKV2jRhUJz0oto",
        name: "Terri",
        type: "artist",
        uri: "spotify:artist:6h3iqdnfBKV2jRhUJz0oto",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/78bd27070df252fffc11f57e4f4eb64bbd5946f2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Soco (feat. Wizkid, Ceeza Milli, Spotless & Terri)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27378666f5f8696c188ac93a76e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0278666f5f8696c188ac93a76e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485178666f5f8696c188ac93a76e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6LRZTXWP7Ytxujepqoq21m",
        },
        href: "https://api.spotify.com/v1/artists/6LRZTXWP7Ytxujepqoq21m",
        id: "6LRZTXWP7Ytxujepqoq21m",
        name: "Dagrin",
        type: "artist",
        uri: "spotify:artist:6LRZTXWP7Ytxujepqoq21m",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fd192d82d464d9b97a9a4416fa2336b8310979d9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Kondo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27386857017120eea73ae5332f2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0286857017120eea73ae5332f2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485186857017120eea73ae5332f2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/81c4d0cb33c5ef11a0cf1d3e2ec93ada4b4d80ba?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "The Money",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736122f9aac98abfe21d7a2576",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026122f9aac98abfe21d7a2576",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516122f9aac98abfe21d7a2576",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "Mad over You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c9ea476f7d7dfcad72ae9594",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c9ea476f7d7dfcad72ae9594",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c9ea476f7d7dfcad72ae9594",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "The Matter (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733f090b682466027827986ccf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023f090b682466027827986ccf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513f090b682466027827986ccf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5ecA37waug3nQ8hqfz6IlT",
        },
        href: "https://api.spotify.com/v1/artists/5ecA37waug3nQ8hqfz6IlT",
        id: "5ecA37waug3nQ8hqfz6IlT",
        name: "Krizbeatz",
        type: "artist",
        uri: "spotify:artist:5ecA37waug3nQ8hqfz6IlT",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/39271553219c2957fd572c42b144d8c889ee988b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Erima",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e956588408c0256da7da525e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e956588408c0256da7da525e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e956588408c0256da7da525e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7f7439016fb2a0e1b8e9a37cc47b919c6fd84403?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Pana",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a5093f7df2351c53b361a6c3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a5093f7df2351c53b361a6c3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a5093f7df2351c53b361a6c3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/317b3612d49e3b34ff8a1417576640fa2d05e234?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Buga (Lo Lo Lo)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733b820e00addd0c78e6542dc3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023b820e00addd0c78e6542dc3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513b820e00addd0c78e6542dc3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Yawa",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27369b1615c29da72a238b1d207",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0269b1615c29da72a238b1d207",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485169b1615c29da72a238b1d207",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b861240b287b45ed8f30b2145ee5fe659f82d819?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Woju",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733731a90c6439be037a3cf656",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023731a90c6439be037a3cf656",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513731a90c6439be037a3cf656",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/01e6b5867a05cd6a46b73c52cf998a55e42a0826?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Woju (Remix) [feat. Davido & Tiwa Savage]",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27303101bce9e33f18711f0c667",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0203101bce9e33f18711f0c667",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485103101bce9e33f18711f0c667",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/28303515c66f8499e15ba601fabb6198825448d2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Eleko",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b75f6b9a3e9b3b61a7d154fe",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b75f6b9a3e9b3b61a7d154fe",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b75f6b9a3e9b3b61a7d154fe",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url: null,
    name: "Sade",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dcb0bd257976d8870cdb5afd",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dcb0bd257976d8870cdb5afd",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dcb0bd257976d8870cdb5afd",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/91251182fc3de35b968509892d258dbb8f87d66c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Yeba",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273df831a49692a667a35664430",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02df831a49692a667a35664430",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851df831a49692a667a35664430",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url: null,
    name: "Happy Day",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b1bb2959c26e42b70560ea06",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b1bb2959c26e42b70560ea06",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b1bb2959c26e42b70560ea06",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/47fErV0VDIx6PmuhtWGTYu",
        },
        href: "https://api.spotify.com/v1/artists/47fErV0VDIx6PmuhtWGTYu",
        id: "47fErV0VDIx6PmuhtWGTYu",
        name: "Dremo",
        type: "artist",
        uri: "spotify:artist:47fErV0VDIx6PmuhtWGTYu",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bdf4084520f877b2920bae082a8310b310637e3d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "KPA",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737f9b8e00f6d2b92d33739539",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027f9b8e00f6d2b92d33739539",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517f9b8e00f6d2b92d33739539",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
    ],
    preview_url: null,
    name: "Collabo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5067fe70d3d7d5c29f2b350",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5067fe70d3d7d5c29f2b350",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5067fe70d3d7d5c29f2b350",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url: null,
    name: "Girlie 'O' Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27394ae5cc48baf210d5232c391",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0294ae5cc48baf210d5232c391",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485194ae5cc48baf210d5232c391",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6w2IGYYbcQENdjdjU2IFo4",
        },
        href: "https://api.spotify.com/v1/artists/6w2IGYYbcQENdjdjU2IFo4",
        id: "6w2IGYYbcQENdjdjU2IFo4",
        name: "StarBoy",
        type: "artist",
        uri: "spotify:artist:6w2IGYYbcQENdjdjU2IFo4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5N47dnIfPuGH8kIHpf8gZK",
        },
        href: "https://api.spotify.com/v1/artists/5N47dnIfPuGH8kIHpf8gZK",
        id: "5N47dnIfPuGH8kIHpf8gZK",
        name: "Duncan Mighty",
        type: "artist",
        uri: "spotify:artist:5N47dnIfPuGH8kIHpf8gZK",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/741a3061391fced4fd16ace2b38b4295d0d9b42d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fake Love (feat. Duncan Mighty & WizKid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734cfcc7a80d7a8da378f968b0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024cfcc7a80d7a8da378f968b0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514cfcc7a80d7a8da378f968b0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7862eca15eda972e07dfaa9e8beadda2130a6c98?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "If",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a68c76f7f490858fb19e040bed86de3ec1c4280c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "One Of A Kind",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c03e4f4f80efc972675f428d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c03e4f4f80efc972675f428d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c03e4f4f80efc972675f428d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0UTB1G0o8HmhiXoDem8vK7",
        },
        href: "https://api.spotify.com/v1/artists/0UTB1G0o8HmhiXoDem8vK7",
        id: "0UTB1G0o8HmhiXoDem8vK7",
        name: "Lola Rae feat. Iyanya",
        type: "artist",
        uri: "spotify:artist:0UTB1G0o8HmhiXoDem8vK7",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1dfaec55990d2d9782eedb95f5c04a6e5fae648e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fi Mi Le (Leave Me Alone)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734689895efd8902dd7b7f88cc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024689895efd8902dd7b7f88cc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514689895efd8902dd7b7f88cc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Kukere",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737b91601eb545c0018e6632a0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027b91601eb545c0018e6632a0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517b91601eb545c0018e6632a0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Ikwokrikwo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5f7059351b48acba59bbbe9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5f7059351b48acba59bbbe9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5f7059351b48acba59bbbe9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "African Lady",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739a5570e79db1106c022fee1e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029a5570e79db1106c022fee1e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519a5570e79db1106c022fee1e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1gYmEeYiOwY6iJVTjLR1Fq",
        },
        href: "https://api.spotify.com/v1/artists/1gYmEeYiOwY6iJVTjLR1Fq",
        id: "1gYmEeYiOwY6iJVTjLR1Fq",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1gYmEeYiOwY6iJVTjLR1Fq",
      },
    ],
    preview_url: null,
    name: "Wake Up",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273363204632e1249ea549d1175",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02363204632e1249ea549d1175",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851363204632e1249ea549d1175",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Personally - Bonus",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5067fe70d3d7d5c29f2b350",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5067fe70d3d7d5c29f2b350",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5067fe70d3d7d5c29f2b350",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/4e54277ec93d7a578291357e8777cc8940b5ed7e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736840e87d0809f65014309322",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026840e87d0809f65014309322",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516840e87d0809f65014309322",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b733c5e55fb8ff961f0804a88f72d9a52100a17a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Like Dat",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732559463ac6f3719b9280f4f7",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022559463ac6f3719b9280f4f7",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512559463ac6f3719b9280f4f7",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Show You the Money",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3jByrxQcxQjkdU442RKEZF",
        },
        href: "https://api.spotify.com/v1/artists/3jByrxQcxQjkdU442RKEZF",
        id: "3jByrxQcxQjkdU442RKEZF",
        name: "Selebobo",
        type: "artist",
        uri: "spotify:artist:3jByrxQcxQjkdU442RKEZF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Waka Waka",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736fbd51a30cebd201e3d84163",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026fbd51a30cebd201e3d84163",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516fbd51a30cebd201e3d84163",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/12BjfR9LIzpDecdcMGvu7f",
        },
        href: "https://api.spotify.com/v1/artists/12BjfR9LIzpDecdcMGvu7f",
        id: "12BjfR9LIzpDecdcMGvu7f",
        name: "Cuppy",
        type: "artist",
        uri: "spotify:artist:12BjfR9LIzpDecdcMGvu7f",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1105fae860abb96d10ccd808eb2dae787aa908c0?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Green Light",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733b948cd965f8f98cdf742f34",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023b948cd965f8f98cdf742f34",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513b948cd965f8f98cdf742f34",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7KiINhQdLAupkwvJ0EelGG",
        },
        href: "https://api.spotify.com/v1/artists/7KiINhQdLAupkwvJ0EelGG",
        id: "7KiINhQdLAupkwvJ0EelGG",
        name: "KCee",
        type: "artist",
        uri: "spotify:artist:7KiINhQdLAupkwvJ0EelGG",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Pullover (feat. Wiz Kid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b7b7ecfdcc6d6885511f04d5",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b7b7ecfdcc6d6885511f04d5",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b7b7ecfdcc6d6885511f04d5",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3hflm7FUsWEKbI0fRnaW20",
        },
        href: "https://api.spotify.com/v1/artists/3hflm7FUsWEKbI0fRnaW20",
        id: "3hflm7FUsWEKbI0fRnaW20",
        name: "HarrySong",
        type: "artist",
        uri: "spotify:artist:3hflm7FUsWEKbI0fRnaW20",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7KiINhQdLAupkwvJ0EelGG",
        },
        href: "https://api.spotify.com/v1/artists/7KiINhQdLAupkwvJ0EelGG",
        id: "7KiINhQdLAupkwvJ0EelGG",
        name: "KCee",
        type: "artist",
        uri: "spotify:artist:7KiINhQdLAupkwvJ0EelGG",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6voVBz1bN1mWZCLpNZGqzD",
        },
        href: "https://api.spotify.com/v1/artists/6voVBz1bN1mWZCLpNZGqzD",
        id: "6voVBz1bN1mWZCLpNZGqzD",
        name: "Orezi",
        type: "artist",
        uri: "spotify:artist:6voVBz1bN1mWZCLpNZGqzD",
      },
    ],
    preview_url: null,
    name: "Reggae Blues",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27334eb3cb2c81b7f1f33dab135",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0234eb3cb2c81b7f1f33dab135",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485134eb3cb2c81b7f1f33dab135",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5RCdjio4ASMQ8CFaSuAl6C",
        },
        href: "https://api.spotify.com/v1/artists/5RCdjio4ASMQ8CFaSuAl6C",
        id: "5RCdjio4ASMQ8CFaSuAl6C",
        name: "D'banj",
        type: "artist",
        uri: "spotify:artist:5RCdjio4ASMQ8CFaSuAl6C",
      },
    ],
    preview_url: null,
    name: "Oliver Twist",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e24b918b47405f7e5b15608f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e24b918b47405f7e5b15608f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e24b918b47405f7e5b15608f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
    ],
    preview_url: null,
    name: "Johnny",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273147eb1cc1ad2aecd4d408acf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02147eb1cc1ad2aecd4d408acf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851147eb1cc1ad2aecd4d408acf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1ixqGowpDM21RwyJmJ7hpv",
        },
        href: "https://api.spotify.com/v1/artists/1ixqGowpDM21RwyJmJ7hpv",
        id: "1ixqGowpDM21RwyJmJ7hpv",
        name: "Skales",
        type: "artist",
        uri: "spotify:artist:1ixqGowpDM21RwyJmJ7hpv",
      },
    ],
    preview_url: null,
    name: "Shake Body",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f10cb67b64a7b19c4bf8ef32",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f10cb67b64a7b19c4bf8ef32",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f10cb67b64a7b19c4bf8ef32",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Bye Bye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273514d64fbb10712a2eb2b28f6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02514d64fbb10712a2eb2b28f6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851514d64fbb10712a2eb2b28f6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Skelewu",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f32af97205272065d071576f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f32af97205272065d071576f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f32af97205272065d071576f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5zqRdlPXeCIuxgaPimSKXj",
        },
        href: "https://api.spotify.com/v1/artists/5zqRdlPXeCIuxgaPimSKXj",
        id: "5zqRdlPXeCIuxgaPimSKXj",
        name: "Ycee",
        type: "artist",
        uri: "spotify:artist:5zqRdlPXeCIuxgaPimSKXj",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Juice (feat. Maleek Berry)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737235213b2f505206cafdaf6b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027235213b2f505206cafdaf6b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517235213b2f505206cafdaf6b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ukrG1BmfEiuo0KDj8YTTS",
        },
        href: "https://api.spotify.com/v1/artists/3ukrG1BmfEiuo0KDj8YTTS",
        id: "3ukrG1BmfEiuo0KDj8YTTS",
        name: "Teni",
        type: "artist",
        uri: "spotify:artist:3ukrG1BmfEiuo0KDj8YTTS",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7ad6a7d2d5a98a153eec04f81f0aa5100227f471?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Case",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273589a79b8ec66cfdb216071d4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02589a79b8ec66cfdb216071d4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851589a79b8ec66cfdb216071d4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ukrG1BmfEiuo0KDj8YTTS",
        },
        href: "https://api.spotify.com/v1/artists/3ukrG1BmfEiuo0KDj8YTTS",
        id: "3ukrG1BmfEiuo0KDj8YTTS",
        name: "Teni",
        type: "artist",
        uri: "spotify:artist:3ukrG1BmfEiuo0KDj8YTTS",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b9ab3760d98c03a4fe5fdec6c67628b395e08a38?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Askamaya",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27367b60dc3f8b0eb2152704733",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0267b60dc3f8b0eb2152704733",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485167b60dc3f8b0eb2152704733",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/06a80ba65c87c4cb66ba53645c8c352bf177e6fe?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Anybody",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3Wu4rnX6UKAMtTlUL2IAj4",
        },
        href: "https://api.spotify.com/v1/artists/3Wu4rnX6UKAMtTlUL2IAj4",
        id: "3Wu4rnX6UKAMtTlUL2IAj4",
        name: "Chidinma",
        type: "artist",
        uri: "spotify:artist:3Wu4rnX6UKAMtTlUL2IAj4",
      },
    ],
    preview_url: null,
    name: "Ololufe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273363204632e1249ea549d1175",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02363204632e1249ea549d1175",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851363204632e1249ea549d1175",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Le Kwa Ukwu",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ef782eeb8fb77335aa9b14b1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ef782eeb8fb77335aa9b14b1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ef782eeb8fb77335aa9b14b1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2TwUVWFJs4LD0lOBbJXnNa",
        },
        href: "https://api.spotify.com/v1/artists/2TwUVWFJs4LD0lOBbJXnNa",
        id: "2TwUVWFJs4LD0lOBbJXnNa",
        name: "Korede Bello",
        type: "artist",
        uri: "spotify:artist:2TwUVWFJs4LD0lOBbJXnNa",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/933519509a14bb7ea4929fe07e21ee5f196cdf96?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Romantic (feat. Tiwa Savage)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27384b5849c29870c045be261d4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0284b5849c29870c045be261d4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485184b5849c29870c045be261d4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a097a0e4dbcbc76f2fd7a4198b6e505585e08ff2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "All Over",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b51deb8e609034ad942b804c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b51deb8e609034ad942b804c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b51deb8e609034ad942b804c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/71f39f0168740806864a6c48ea991289f716e1d4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ginger (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fde850f788b03f950ba68ba4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fde850f788b03f950ba68ba4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fde850f788b03f950ba68ba4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Jogodo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273826da3e28d3e5ee18c7605b1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02826da3e28d3e5ee18c7605b1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851826da3e28d3e5ee18c7605b1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/83543b6fa401f01d3cf9b65fa5691c9163c3f1e1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Without My Heart (feat. Don Jazzy)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f666b0467a467dcd97dd1d07",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f666b0467a467dcd97dd1d07",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f666b0467a467dcd97dd1d07",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1ad2fdb74795c6c7d3cc60bbc6008bb02a8e3155?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Che Che",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Nwa Baby - Ashawo Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273479c13f1999164adf6b4a7fc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02479c13f1999164adf6b4a7fc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851479c13f1999164adf6b4a7fc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4sTEU2JiINQTDhMCanVyCO",
        },
        href: "https://api.spotify.com/v1/artists/4sTEU2JiINQTDhMCanVyCO",
        id: "4sTEU2JiINQTDhMCanVyCO",
        name: "Mr Real",
        type: "artist",
        uri: "spotify:artist:4sTEU2JiINQTDhMCanVyCO",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1ehQuWiGUch5doyxXLkdRz",
        },
        href: "https://api.spotify.com/v1/artists/1ehQuWiGUch5doyxXLkdRz",
        id: "1ehQuWiGUch5doyxXLkdRz",
        name: "Obadice",
        type: "artist",
        uri: "spotify:artist:1ehQuWiGUch5doyxXLkdRz",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0ArqRD7tW8ZRr4AHKRGcb0",
        },
        href: "https://api.spotify.com/v1/artists/0ArqRD7tW8ZRr4AHKRGcb0",
        id: "0ArqRD7tW8ZRr4AHKRGcb0",
        name: "Idowest",
        type: "artist",
        uri: "spotify:artist:0ArqRD7tW8ZRr4AHKRGcb0",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e043b76b0b3eb1e426c9df0138a1bebfbbf1f6b9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Legbegbe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273574e97ee24a68519d52a2bc6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02574e97ee24a68519d52a2bc6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851574e97ee24a68519d52a2bc6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ukrG1BmfEiuo0KDj8YTTS",
        },
        href: "https://api.spotify.com/v1/artists/3ukrG1BmfEiuo0KDj8YTTS",
        id: "3ukrG1BmfEiuo0KDj8YTTS",
        name: "Teni",
        type: "artist",
        uri: "spotify:artist:3ukrG1BmfEiuo0KDj8YTTS",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/593fb5e4b87e25b83d45063e177cc3619355fd6e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Billionaire",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273af05bb02bb505ef9a3d3cfd4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02af05bb02bb505ef9a3d3cfd4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851af05bb02bb505ef9a3d3cfd4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
    ],
    preview_url: null,
    name: "Gbese",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273af89f8c4f78d669f6a1a1146",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02af89f8c4f78d669f6a1a1146",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851af89f8c4f78d669f6a1a1146",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Bpku7CkLZ3Bv9AR03MX9B",
        },
        href: "https://api.spotify.com/v1/artists/0Bpku7CkLZ3Bv9AR03MX9B",
        id: "0Bpku7CkLZ3Bv9AR03MX9B",
        name: "MC Galaxy",
        type: "artist",
        uri: "spotify:artist:0Bpku7CkLZ3Bv9AR03MX9B",
      },
    ],
    preview_url: null,
    name: "Sekem",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b80b12fc2d1a7861b9ef9916",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b80b12fc2d1a7861b9ef9916",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b80b12fc2d1a7861b9ef9916",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6qMGjGD3lmDJtzALZ8uS2z",
        },
        href: "https://api.spotify.com/v1/artists/6qMGjGD3lmDJtzALZ8uS2z",
        id: "6qMGjGD3lmDJtzALZ8uS2z",
        name: "Dotman",
        type: "artist",
        uri: "spotify:artist:6qMGjGD3lmDJtzALZ8uS2z",
      },
    ],
    preview_url: null,
    name: "Akube",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736357805d15b2cb4123065ee7",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026357805d15b2cb4123065ee7",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516357805d15b2cb4123065ee7",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4Ns55iOSe1Im2WU2e1Eym0",
        },
        href: "https://api.spotify.com/v1/artists/4Ns55iOSe1Im2WU2e1Eym0",
        id: "4Ns55iOSe1Im2WU2e1Eym0",
        name: "Simi",
        type: "artist",
        uri: "spotify:artist:4Ns55iOSe1Im2WU2e1Eym0",
      },
    ],
    preview_url: null,
    name: "Joromi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273bb1c9f717b8ff1ed656137ca",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02bb1c9f717b8ff1ed656137ca",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851bb1c9f717b8ff1ed656137ca",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ukrG1BmfEiuo0KDj8YTTS",
        },
        href: "https://api.spotify.com/v1/artists/3ukrG1BmfEiuo0KDj8YTTS",
        id: "3ukrG1BmfEiuo0KDj8YTTS",
        name: "Teni",
        type: "artist",
        uri: "spotify:artist:3ukrG1BmfEiuo0KDj8YTTS",
      },
    ],
    preview_url: null,
    name: "Uyo Meyo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737310f0a08dedc57d21a99eaa",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027310f0a08dedc57d21a99eaa",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517310f0a08dedc57d21a99eaa",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f791765e68bd1328f01e371e36565bb83fa2c5aa?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Rora",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f7169c595b97a8a8a649925f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f7169c595b97a8a8a649925f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f7169c595b97a8a8a649925f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0MhOwPj45dpyuqe8pxKXoc",
        },
        href: "https://api.spotify.com/v1/artists/0MhOwPj45dpyuqe8pxKXoc",
        id: "0MhOwPj45dpyuqe8pxKXoc",
        name: "Olu Maintain",
        type: "artist",
        uri: "spotify:artist:0MhOwPj45dpyuqe8pxKXoc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2e4b9iduStu3q1SFPl0w8R",
        },
        href: "https://api.spotify.com/v1/artists/2e4b9iduStu3q1SFPl0w8R",
        id: "2e4b9iduStu3q1SFPl0w8R",
        name: "LKT",
        type: "artist",
        uri: "spotify:artist:2e4b9iduStu3q1SFPl0w8R",
      },
    ],
    preview_url: null,
    name: "Yahoozee Reloaded (feat. Lkt)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27320926bd3d62957d4bedfb749",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0220926bd3d62957d4bedfb749",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485120926bd3d62957d4bedfb749",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url: null,
    name: "Science Student",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b741ab98a68cd8c90b087b93",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b741ab98a68cd8c90b087b93",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b741ab98a68cd8c90b087b93",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2TwUVWFJs4LD0lOBbJXnNa",
        },
        href: "https://api.spotify.com/v1/artists/2TwUVWFJs4LD0lOBbJXnNa",
        id: "2TwUVWFJs4LD0lOBbJXnNa",
        name: "Korede Bello",
        type: "artist",
        uri: "spotify:artist:2TwUVWFJs4LD0lOBbJXnNa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/4abf75bb0d9ba25a2965e950e39145922e7b77e1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Do Like That",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732a5f4da82b6033bd94cedfd9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022a5f4da82b6033bd94cedfd9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512a5f4da82b6033bd94cedfd9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7ahfCquNK3ReYc2UHhugs5",
        },
        href: "https://api.spotify.com/v1/artists/7ahfCquNK3ReYc2UHhugs5",
        id: "7ahfCquNK3ReYc2UHhugs5",
        name: "May D",
        type: "artist",
        uri: "spotify:artist:7ahfCquNK3ReYc2UHhugs5",
      },
    ],
    preview_url: null,
    name: "Gat Me High",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e59718c3a7c807773469825e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e59718c3a7c807773469825e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e59718c3a7c807773469825e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5N47dnIfPuGH8kIHpf8gZK",
        },
        href: "https://api.spotify.com/v1/artists/5N47dnIfPuGH8kIHpf8gZK",
        id: "5N47dnIfPuGH8kIHpf8gZK",
        name: "Duncan Mighty",
        type: "artist",
        uri: "spotify:artist:5N47dnIfPuGH8kIHpf8gZK",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/166a32956ec56336f0708284989ccd8ddc027adb?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Lova Lova (feat. Duncan Mighty)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e89b7c16ae93282f6344aa09",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e89b7c16ae93282f6344aa09",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e89b7c16ae93282f6344aa09",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3213f12a85e52eb33de7480d69540cbf799d489f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "My Woman, My Everything (feat. Wandecoal)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738f85d641f448a53d3184729f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028f85d641f448a53d3184729f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518f85d641f448a53d3184729f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/72Z2AhMKpxZjLNnPMyinUE",
        },
        href: "https://api.spotify.com/v1/artists/72Z2AhMKpxZjLNnPMyinUE",
        id: "72Z2AhMKpxZjLNnPMyinUE",
        name: "Skiibii",
        type: "artist",
        uri: "spotify:artist:72Z2AhMKpxZjLNnPMyinUE",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/83f3ff87a7e0826a3a3bdeb5669ae9c93e59d6e7?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sensima",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739f560bc9bb1b2c48c0e1cef9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029f560bc9bb1b2c48c0e1cef9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519f560bc9bb1b2c48c0e1cef9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1IvWInh6O2l37hbd2Wr2WN",
        },
        href: "https://api.spotify.com/v1/artists/1IvWInh6O2l37hbd2Wr2WN",
        id: "1IvWInh6O2l37hbd2Wr2WN",
        name: "Juola",
        type: "artist",
        uri: "spotify:artist:1IvWInh6O2l37hbd2Wr2WN",
      },
    ],
    preview_url: null,
    name: "Confirm",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27375eca1d4eb7e560beb8cb509",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0275eca1d4eb7e560beb8cb509",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485175eca1d4eb7e560beb8cb509",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url: null,
    name: "Wo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b741ab98a68cd8c90b087b93",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b741ab98a68cd8c90b087b93",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b741ab98a68cd8c90b087b93",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3cAisWS37sGCCtRgWfvrod",
        },
        href: "https://api.spotify.com/v1/artists/3cAisWS37sGCCtRgWfvrod",
        id: "3cAisWS37sGCCtRgWfvrod",
        name: "Diamond Platnumz",
        type: "artist",
        uri: "spotify:artist:3cAisWS37sGCCtRgWfvrod",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1b5fa8ea0a73d2b5be5deace54fb937639d2b451?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Love You Die (feat. Diamond Platnumz)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734e29473b366966a7c71315bc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024e29473b366966a7c71315bc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514e29473b366966a7c71315bc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Bank Alert",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273344915ef6b71cd3c611a19dc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02344915ef6b71cd3c611a19dc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851344915ef6b71cd3c611a19dc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Rotate",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739a5570e79db1106c022fee1e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029a5570e79db1106c022fee1e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519a5570e79db1106c022fee1e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5jfQBS0O6dR6axaz0BGMgs",
        },
        href: "https://api.spotify.com/v1/artists/5jfQBS0O6dR6axaz0BGMgs",
        id: "5jfQBS0O6dR6axaz0BGMgs",
        name: "Chinko Ekun",
        type: "artist",
        uri: "spotify:artist:5jfQBS0O6dR6axaz0BGMgs",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4mSWNal2Ixxf1zrXSTLoep",
        },
        href: "https://api.spotify.com/v1/artists/4mSWNal2Ixxf1zrXSTLoep",
        id: "4mSWNal2Ixxf1zrXSTLoep",
        name: "Zlatan",
        type: "artist",
        uri: "spotify:artist:4mSWNal2Ixxf1zrXSTLoep",
      },
    ],
    preview_url: null,
    name: "Able God",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273239cb7f6147270e6a962cdc9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02239cb7f6147270e6a962cdc9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851239cb7f6147270e6a962cdc9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4mSWNal2Ixxf1zrXSTLoep",
        },
        href: "https://api.spotify.com/v1/artists/4mSWNal2Ixxf1zrXSTLoep",
        id: "4mSWNal2Ixxf1zrXSTLoep",
        name: "Zlatan",
        type: "artist",
        uri: "spotify:artist:4mSWNal2Ixxf1zrXSTLoep",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/22168ec84b7b164cba19e9317a6a40ef3607be49?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Killin Dem",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27364b3d39f61a713b55a56d252",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0264b3d39f61a713b55a56d252",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485164b3d39f61a713b55a56d252",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5f0438862f10d7ceb0b69056d878fa6e0f52f4c8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Motigbana",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734eb06ba76d299200787f3784",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024eb06ba76d299200787f3784",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514eb06ba76d299200787f3784",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8fe8e8d40eb7c2f3ff29adf4a5b80879682ddef8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "On the Low",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0WgwOS7j1CB5tIRa4QM50K",
        },
        href: "https://api.spotify.com/v1/artists/0WgwOS7j1CB5tIRa4QM50K",
        id: "0WgwOS7j1CB5tIRa4QM50K",
        name: "Seyi Shay",
        type: "artist",
        uri: "spotify:artist:0WgwOS7j1CB5tIRa4QM50K",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5GAs1aP7xhclWRfGZCXHHm",
        },
        href: "https://api.spotify.com/v1/artists/5GAs1aP7xhclWRfGZCXHHm",
        id: "5GAs1aP7xhclWRfGZCXHHm",
        name: "Pato Ranking",
        type: "artist",
        uri: "spotify:artist:5GAs1aP7xhclWRfGZCXHHm",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1xCR4iDc0Ix7Y0qcLzbtLM",
        },
        href: "https://api.spotify.com/v1/artists/1xCR4iDc0Ix7Y0qcLzbtLM",
        id: "1xCR4iDc0Ix7Y0qcLzbtLM",
        name: "Shadrach Adeboye",
        type: "artist",
        uri: "spotify:artist:1xCR4iDc0Ix7Y0qcLzbtLM",
      },
    ],
    preview_url: null,
    name: "Murda",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273983d820ef19a52ec1a8a1e01",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02983d820ef19a52ec1a8a1e01",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851983d820ef19a52ec1a8a1e01",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6NPhzQsQKDigbNjJInGdCd",
        },
        href: "https://api.spotify.com/v1/artists/6NPhzQsQKDigbNjJInGdCd",
        id: "6NPhzQsQKDigbNjJInGdCd",
        name: "Di'Ja",
        type: "artist",
        uri: "spotify:artist:6NPhzQsQKDigbNjJInGdCd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c4b9586c2e5447b9057f9cce47a2f7d3f4d4b352?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Awww",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735c65ed11944e04565265a89c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025c65ed11944e04565265a89c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515c65ed11944e04565265a89c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6h3iqdnfBKV2jRhUJz0oto",
        },
        href: "https://api.spotify.com/v1/artists/6h3iqdnfBKV2jRhUJz0oto",
        id: "6h3iqdnfBKV2jRhUJz0oto",
        name: "Terri",
        type: "artist",
        uri: "spotify:artist:6h3iqdnfBKV2jRhUJz0oto",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/79fe4bbf3e2843c920e127a30badd8fe0809baaa?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bia",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733bdc2e232f396c6f613c2f6c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023bdc2e232f396c6f613c2f6c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513bdc2e232f396c6f613c2f6c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "ENERGY",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c102b190c331efdb3b5ec0d6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c102b190c331efdb3b5ec0d6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c102b190c331efdb3b5ec0d6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "For Life",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733ce542fe1c2e826ab16991bc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023ce542fe1c2e826ab16991bc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513ce542fe1c2e826ab16991bc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bc2b9ada9829db75991a0fb0bf080631fb8d4b71?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Suh Different",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a34e235777cf286f3a8cc5c1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a34e235777cf286f3a8cc5c1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a34e235777cf286f3a8cc5c1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Ada Ada",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a79846e815e8c6560b0bbf36",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a79846e815e8c6560b0bbf36",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a79846e815e8c6560b0bbf36",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Shake",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a79846e815e8c6560b0bbf36",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a79846e815e8c6560b0bbf36",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a79846e815e8c6560b0bbf36",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4Ns55iOSe1Im2WU2e1Eym0",
        },
        href: "https://api.spotify.com/v1/artists/4Ns55iOSe1Im2WU2e1Eym0",
        id: "4Ns55iOSe1Im2WU2e1Eym0",
        name: "Simi",
        type: "artist",
        uri: "spotify:artist:4Ns55iOSe1Im2WU2e1Eym0",
      },
    ],
    preview_url: null,
    name: "Duduke",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732e4947d25058390c9669f587",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022e4947d25058390c9669f587",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512e4947d25058390c9669f587",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6KyHXlcKqJM6jasFLUiOWK",
        },
        href: "https://api.spotify.com/v1/artists/6KyHXlcKqJM6jasFLUiOWK",
        id: "6KyHXlcKqJM6jasFLUiOWK",
        name: "Bigiano",
        type: "artist",
        uri: "spotify:artist:6KyHXlcKqJM6jasFLUiOWK",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/719de2ed545b406a42caa135ac237ebb15131c06?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Shayo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c569397747e9b18c8c006106",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c569397747e9b18c8c006106",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c569397747e9b18c8c006106",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/36M1Z5OPFotaTTKNjSIuAX",
        },
        href: "https://api.spotify.com/v1/artists/36M1Z5OPFotaTTKNjSIuAX",
        id: "36M1Z5OPFotaTTKNjSIuAX",
        name: "Viktoh",
        type: "artist",
        uri: "spotify:artist:36M1Z5OPFotaTTKNjSIuAX",
      },
    ],
    preview_url: null,
    name: "Skibi Dat",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27308947ad99769851ab9d3c84d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0208947ad99769851ab9d3c84d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485108947ad99769851ab9d3c84d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1MUPBuckdoveSDQgvkm9jC",
        },
        href: "https://api.spotify.com/v1/artists/1MUPBuckdoveSDQgvkm9jC",
        id: "1MUPBuckdoveSDQgvkm9jC",
        name: "YBNL MaFia Family",
        type: "artist",
        uri: "spotify:artist:1MUPBuckdoveSDQgvkm9jC",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4fCdQD5D2T7BRESZrYaCFu",
        },
        href: "https://api.spotify.com/v1/artists/4fCdQD5D2T7BRESZrYaCFu",
        id: "4fCdQD5D2T7BRESZrYaCFu",
        name: "Fireboy",
        type: "artist",
        uri: "spotify:artist:4fCdQD5D2T7BRESZrYaCFu",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ea31d7f3b8d76616f6b4bd950c610ef3d5be2bb9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jealous (feat. Fire Boy)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27315c409c553fe6ba3989975e0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0215c409c553fe6ba3989975e0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485115c409c553fe6ba3989975e0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5fOppW3chS7Mz6MAoFaN7J",
        },
        href: "https://api.spotify.com/v1/artists/5fOppW3chS7Mz6MAoFaN7J",
        id: "5fOppW3chS7Mz6MAoFaN7J",
        name: "Spellz",
        type: "artist",
        uri: "spotify:artist:5fOppW3chS7Mz6MAoFaN7J",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/600f9af6caa7e0454dd6309c0dcaa90388b473f0?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ma Lo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27368649cf4e438a7db0333dc40",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0268649cf4e438a7db0333dc40",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485168649cf4e438a7db0333dc40",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2TwUVWFJs4LD0lOBbJXnNa",
        },
        href: "https://api.spotify.com/v1/artists/2TwUVWFJs4LD0lOBbJXnNa",
        id: "2TwUVWFJs4LD0lOBbJXnNa",
        name: "Korede Bello",
        type: "artist",
        uri: "spotify:artist:2TwUVWFJs4LD0lOBbJXnNa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/cc64f9dc44c44020a4baab68ebb64c633f5de5b6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Godwin",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2731d3a3bcc20dd0e69a8d59b03",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e021d3a3bcc20dd0e69a8d59b03",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048511d3a3bcc20dd0e69a8d59b03",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bd4c15d77688e767aacac9b57ab65fbdcb8b13c9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fall",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c7edc433128dc4fa1853e94e61b7cdd0629c9714?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Joro",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27385adb4ee5878b60cbb592f6d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0285adb4ee5878b60cbb592f6d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485185adb4ee5878b60cbb592f6d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/61ab45a567feb8b316ba906830e39cd0d3200171?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Flashy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e70a67bbf1c946c7828cd822",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e70a67bbf1c946c7828cd822",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e70a67bbf1c946c7828cd822",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/74e256907c5de1ce6e48eb3deec14aeef0a458d0?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ghetto Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e9ae9abdd33ca709e44302c3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e9ae9abdd33ca709e44302c3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e9ae9abdd33ca709e44302c3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/731711091d53f0564ee0dd535421413989a46507?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mama",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url: null,
    name: "Madu",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738ea6974adfcdf154e4e7a93b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028ea6974adfcdf154e4e7a93b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518ea6974adfcdf154e4e7a93b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "Emotions",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f5960e4942e31bb9d8b3326d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f5960e4942e31bb9d8b3326d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f5960e4942e31bb9d8b3326d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Baby Daddy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e258cdc03f373eaf662a979c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e258cdc03f373eaf662a979c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e258cdc03f373eaf662a979c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/4bec531fa40abb576facf39f1aaf73e42cbe395b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Run Away",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730c691caae05d7a53d42f75ea",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020c691caae05d7a53d42f75ea",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510c691caae05d7a53d42f75ea",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/46pWGuE3dSwY3bMMXGBvVS",
        },
        href: "https://api.spotify.com/v1/artists/46pWGuE3dSwY3bMMXGBvVS",
        id: "46pWGuE3dSwY3bMMXGBvVS",
        name: "Rema",
        type: "artist",
        uri: "spotify:artist:46pWGuE3dSwY3bMMXGBvVS",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/55734438508642c275373aca870410b3e9a514a4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Dumebi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27381c04ab39b75f83ee9849a08",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0281c04ab39b75f83ee9849a08",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485181c04ab39b75f83ee9849a08",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5ywjxFhmhHGQBsK3DundNf",
        },
        href: "https://api.spotify.com/v1/artists/5ywjxFhmhHGQBsK3DundNf",
        id: "5ywjxFhmhHGQBsK3DundNf",
        name: "Peruzzi",
        type: "artist",
        uri: "spotify:artist:5ywjxFhmhHGQBsK3DundNf",
      },
    ],
    preview_url: null,
    name: "Majesty",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273392a1e0d6b0b8646fd837e42",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02392a1e0d6b0b8646fd837e42",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851392a1e0d6b0b8646fd837e42",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2n4DcAtRMvfyRX3ljeC8Kp",
        },
        href: "https://api.spotify.com/v1/artists/2n4DcAtRMvfyRX3ljeC8Kp",
        id: "2n4DcAtRMvfyRX3ljeC8Kp",
        name: "2Baba",
        type: "artist",
        uri: "spotify:artist:2n4DcAtRMvfyRX3ljeC8Kp",
      },
    ],
    preview_url: null,
    name: "African Queen",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27345e214235db0d721125d3393",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0245e214235db0d721125d3393",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485145e214235db0d721125d3393",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7ae382261e4236458a387051d97fcacf8d4aef8c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Pour Me Water",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27348004ee2ff25f167e84f968b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0248004ee2ff25f167e84f968b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485148004ee2ff25f167e84f968b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
    ],
    preview_url: null,
    name: "Crazy Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27375a0987a7830d6605d043cca",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0275a0987a7830d6605d043cca",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485175a0987a7830d6605d043cca",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/58f10792b131b10fa9eb71d817e74467079c9b4c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "African Giant",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Sisi Maria",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27388aa5a2a9bcf7802e0f7e69f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0288aa5a2a9bcf7802e0f7e69f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485188aa5a2a9bcf7802e0f7e69f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/dd076d5ba731e8ea32c92042b0e87a778eb93f88?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Dangote",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6gGH04KywUUbUWc6tmXTpM",
        },
        href: "https://api.spotify.com/v1/artists/6gGH04KywUUbUWc6tmXTpM",
        id: "6gGH04KywUUbUWc6tmXTpM",
        name: "B-RED",
        type: "artist",
        uri: "spotify:artist:6gGH04KywUUbUWc6tmXTpM",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a29c09481635f0014e49f6e100b4c2ec6ed38e05?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fall for You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f82f16da2434b53395a04c4d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f82f16da2434b53395a04c4d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f82f16da2434b53395a04c4d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/6731ba8450ee7e9f94ce521821fa6746d52f4eaa?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Soke",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737e09ba6174aec9958461aa44",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027e09ba6174aec9958461aa44",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517e09ba6174aec9958461aa44",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "On Top Your Matter",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url: null,
    name: "Bum Bum",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27313af10a0d6646eba182ebb42",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0213af10a0d6646eba182ebb42",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485113af10a0d6646eba182ebb42",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Shekini",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5067fe70d3d7d5c29f2b350",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5067fe70d3d7d5c29f2b350",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5067fe70d3d7d5c29f2b350",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1XavfPKBpNjkOfxHINlMHF",
        },
        href: "https://api.spotify.com/v1/artists/1XavfPKBpNjkOfxHINlMHF",
        id: "1XavfPKBpNjkOfxHINlMHF",
        name: "Joeboy",
        type: "artist",
        uri: "spotify:artist:1XavfPKBpNjkOfxHINlMHF",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/740e74896239d0e35c6e2609673cff901f5bc892?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Beginning",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27360fb04fa3d1df3761da084cb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0260fb04fa3d1df3761da084cb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485160fb04fa3d1df3761da084cb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url: null,
    name: "Tonight",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733f52e3fbd244b477661d5618",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023f52e3fbd244b477661d5618",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513f52e3fbd244b477661d5618",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Kontrol",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273236d71da80d1c9423be790d5",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02236d71da80d1c9423be790d5",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851236d71da80d1c9423be790d5",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url: null,
    name: "True",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732922ffbab27dbb31ae5e090f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022922ffbab27dbb31ae5e090f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512922ffbab27dbb31ae5e090f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6pOz4M7D8ENqfLSFvciEuV",
        },
        href: "https://api.spotify.com/v1/artists/6pOz4M7D8ENqfLSFvciEuV",
        id: "6pOz4M7D8ENqfLSFvciEuV",
        name: "Nonso Amadi",
        type: "artist",
        uri: "spotify:artist:6pOz4M7D8ENqfLSFvciEuV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/43bb6cfab0b5e4b05e896665a5de76ea7cfc7422?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Tonight",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a71488445f0af2c0eb6b2c7e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a71488445f0af2c0eb6b2c7e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a71488445f0af2c0eb6b2c7e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Bank Alert",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738acab8ae13e7225974e45669",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028acab8ae13e7225974e45669",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518acab8ae13e7225974e45669",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6w2IGYYbcQENdjdjU2IFo4",
        },
        href: "https://api.spotify.com/v1/artists/6w2IGYYbcQENdjdjU2IFo4",
        id: "6w2IGYYbcQENdjdjU2IFo4",
        name: "StarBoy",
        type: "artist",
        uri: "spotify:artist:6w2IGYYbcQENdjdjU2IFo4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/64oW4P0vsDhlorOxZKQi6a",
        },
        href: "https://api.spotify.com/v1/artists/64oW4P0vsDhlorOxZKQi6a",
        id: "64oW4P0vsDhlorOxZKQi6a",
        name: "DJ Tunez",
        type: "artist",
        uri: "spotify:artist:64oW4P0vsDhlorOxZKQi6a",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2d814f5740e961e2e82bb29f045758dff5741a0a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Cover Me (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b591226670a8cb4a4cecc3cb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b591226670a8cb4a4cecc3cb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b591226670a8cb4a4cecc3cb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6w2IGYYbcQENdjdjU2IFo4",
        },
        href: "https://api.spotify.com/v1/artists/6w2IGYYbcQENdjdjU2IFo4",
        id: "6w2IGYYbcQENdjdjU2IFo4",
        name: "StarBoy",
        type: "artist",
        uri: "spotify:artist:6w2IGYYbcQENdjdjU2IFo4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4on7a4BKixLl1rSlEcaY8Y",
        },
        href: "https://api.spotify.com/v1/artists/4on7a4BKixLl1rSlEcaY8Y",
        id: "4on7a4BKixLl1rSlEcaY8Y",
        name: "Blaq Jerzee",
        type: "artist",
        uri: "spotify:artist:4on7a4BKixLl1rSlEcaY8Y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2b07becb6d55c651eecf687a914a1bfb6aec0091?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Blow (feat. Blaq Jerzee & Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b591226670a8cb4a4cecc3cb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b591226670a8cb4a4cecc3cb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b591226670a8cb4a4cecc3cb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6w2IGYYbcQENdjdjU2IFo4",
        },
        href: "https://api.spotify.com/v1/artists/6w2IGYYbcQENdjdjU2IFo4",
        id: "6w2IGYYbcQENdjdjU2IFo4",
        name: "StarBoy",
        type: "artist",
        uri: "spotify:artist:6w2IGYYbcQENdjdjU2IFo4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4on7a4BKixLl1rSlEcaY8Y",
        },
        href: "https://api.spotify.com/v1/artists/4on7a4BKixLl1rSlEcaY8Y",
        id: "4on7a4BKixLl1rSlEcaY8Y",
        name: "Blaq Jerzee",
        type: "artist",
        uri: "spotify:artist:4on7a4BKixLl1rSlEcaY8Y",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e41e467f7345b5f7e6654ebfa3b95e343af526cf?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Thankful (feat. Wizkid & Blaq Jerzee)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b591226670a8cb4a4cecc3cb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b591226670a8cb4a4cecc3cb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b591226670a8cb4a4cecc3cb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01DTVE3KmoPogPZaOvMqO8",
        },
        href: "https://api.spotify.com/v1/artists/01DTVE3KmoPogPZaOvMqO8",
        id: "01DTVE3KmoPogPZaOvMqO8",
        name: "Sarkodie",
        type: "artist",
        uri: "spotify:artist:01DTVE3KmoPogPZaOvMqO8",
      },
    ],
    preview_url: null,
    name: "Kojo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738ea6974adfcdf154e4e7a93b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028ea6974adfcdf154e4e7a93b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518ea6974adfcdf154e4e7a93b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0lEUtJddtvvDlxtEmF9j0m",
        },
        href: "https://api.spotify.com/v1/artists/0lEUtJddtvvDlxtEmF9j0m",
        id: "0lEUtJddtvvDlxtEmF9j0m",
        name: "Masterkraft",
        type: "artist",
        uri: "spotify:artist:0lEUtJddtvvDlxtEmF9j0m",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01DTVE3KmoPogPZaOvMqO8",
        },
        href: "https://api.spotify.com/v1/artists/01DTVE3KmoPogPZaOvMqO8",
        id: "01DTVE3KmoPogPZaOvMqO8",
        name: "Sarkodie",
        type: "artist",
        uri: "spotify:artist:01DTVE3KmoPogPZaOvMqO8",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ba51c5154b66292af1d88025c7d69ff92f17e6ed?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "FInally",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a632f33665eb1d7c3b451f2d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a632f33665eb1d7c3b451f2d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a632f33665eb1d7c3b451f2d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/4f6cf1a346c7296f3e069532e250ee7723e72e7d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gbona",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "4 Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fd56005fe0ebc79aea42bb38",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fd56005fe0ebc79aea42bb38",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fd56005fe0ebc79aea42bb38",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0dIKXNriGyVYvw6Cw2jko5",
        },
        href: "https://api.spotify.com/v1/artists/0dIKXNriGyVYvw6Cw2jko5",
        id: "0dIKXNriGyVYvw6Cw2jko5",
        name: "Fiokee",
        type: "artist",
        uri: "spotify:artist:0dIKXNriGyVYvw6Cw2jko5",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ade3bca2d6d9beb79bb7e9b91e5127042843e589?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Like (feat. Tiwa Savage & Fiokee)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730dce3d7a8b12e31282a5fb0f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020dce3d7a8b12e31282a5fb0f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510dce3d7a8b12e31282a5fb0f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fff5c1e161d543d1558d0c83c4d3c79e3ce97be1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Assurance",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/66f025eda8cccf52eaebd9bf4c872d613e3fd2dc?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Rock Your Body",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736840e87d0809f65014309322",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026840e87d0809f65014309322",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516840e87d0809f65014309322",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "In My Bed",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/41MWgwfjzWDupE1i0OUghd",
        },
        href: "https://api.spotify.com/v1/artists/41MWgwfjzWDupE1i0OUghd",
        id: "41MWgwfjzWDupE1i0OUghd",
        name: "Praiz",
        type: "artist",
        uri: "spotify:artist:41MWgwfjzWDupE1i0OUghd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c05deb1454a942628aacaf01aa5a1b52da02965e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sisi (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736024df4d4b47bf5dd7ea526a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026024df4d4b47bf5dd7ea526a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516024df4d4b47bf5dd7ea526a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6eYjM3EJ2ux62CjigGQIiU",
        },
        href: "https://api.spotify.com/v1/artists/6eYjM3EJ2ux62CjigGQIiU",
        id: "6eYjM3EJ2ux62CjigGQIiU",
        name: "DJ Xclusive",
        type: "artist",
        uri: "spotify:artist:6eYjM3EJ2ux62CjigGQIiU",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8955bfa5b61dcf7f63c8a1b8285372cfc3803e78?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jeje",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ae5d02e286d664cb64b6fd54",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ae5d02e286d664cb64b6fd54",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ae5d02e286d664cb64b6fd54",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/18wUkq9ZzqAVgDfxnYhLTl",
        },
        href: "https://api.spotify.com/v1/artists/18wUkq9ZzqAVgDfxnYhLTl",
        id: "18wUkq9ZzqAVgDfxnYhLTl",
        name: "LeriQ",
        type: "artist",
        uri: "spotify:artist:18wUkq9ZzqAVgDfxnYhLTl",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Say You Love Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273459674767c8a14b3f5a6e4e9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02459674767c8a14b3f5a6e4e9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851459674767c8a14b3f5a6e4e9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d982cd859c19a8dc0dd16993cf90a635201a4c46?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bankulize",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ccbe09fb778a68cabad55709",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ccbe09fb778a68cabad55709",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ccbe09fb778a68cabad55709",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Gallardo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273faae04741a6253f2a7982893",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02faae04741a6253f2a7982893",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851faae04741a6253f2a7982893",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Bend Down Pause",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27344439ec17fa55829118fefaa",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0244439ec17fa55829118fefaa",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485144439ec17fa55829118fefaa",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1b18806585613d83aa12b18c433fb9138bacd2be?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Rara",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c192b15660e1b2e10c7bc904",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c192b15660e1b2e10c7bc904",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c192b15660e1b2e10c7bc904",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Applaudise",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c68afeb04b8faf5ca0aa31ef",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c68afeb04b8faf5ca0aa31ef",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c68afeb04b8faf5ca0aa31ef",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5JWBXFlYkBy3n2oN1To790",
        },
        href: "https://api.spotify.com/v1/artists/5JWBXFlYkBy3n2oN1To790",
        id: "5JWBXFlYkBy3n2oN1To790",
        name: "Mavins",
        type: "artist",
        uri: "spotify:artist:5JWBXFlYkBy3n2oN1To790",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6NPhzQsQKDigbNjJInGdCd",
        },
        href: "https://api.spotify.com/v1/artists/6NPhzQsQKDigbNjJInGdCd",
        id: "6NPhzQsQKDigbNjJInGdCd",
        name: "Di'Ja",
        type: "artist",
        uri: "spotify:artist:6NPhzQsQKDigbNjJInGdCd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2TwUVWFJs4LD0lOBbJXnNa",
        },
        href: "https://api.spotify.com/v1/artists/2TwUVWFJs4LD0lOBbJXnNa",
        id: "2TwUVWFJs4LD0lOBbJXnNa",
        name: "Korede Bello",
        type: "artist",
        uri: "spotify:artist:2TwUVWFJs4LD0lOBbJXnNa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a89b78eb435c949c9730eb1146edb349a88ddb28?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Adaobi (feat. Don Jazzy, Di'ja, Reekado Banks & Korede Bello)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27376b230f411ed2d33f3bc2c46",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0276b230f411ed2d33f3bc2c46",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485176b230f411ed2d33f3bc2c46",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/91f986b20b2c5a61c46b7ebab860c59552b5e667?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Final (Baba Nla)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734213d8756d72f4fbf5a93d56",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024213d8756d72f4fbf5a93d56",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514213d8756d72f4fbf5a93d56",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3hflm7FUsWEKbI0fRnaW20",
        },
        href: "https://api.spotify.com/v1/artists/3hflm7FUsWEKbI0fRnaW20",
        id: "3hflm7FUsWEKbI0fRnaW20",
        name: "HarrySong",
        type: "artist",
        uri: "spotify:artist:3hflm7FUsWEKbI0fRnaW20",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7KiINhQdLAupkwvJ0EelGG",
        },
        href: "https://api.spotify.com/v1/artists/7KiINhQdLAupkwvJ0EelGG",
        id: "7KiINhQdLAupkwvJ0EelGG",
        name: "KCee",
        type: "artist",
        uri: "spotify:artist:7KiINhQdLAupkwvJ0EelGG",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6voVBz1bN1mWZCLpNZGqzD",
        },
        href: "https://api.spotify.com/v1/artists/6voVBz1bN1mWZCLpNZGqzD",
        id: "6voVBz1bN1mWZCLpNZGqzD",
        name: "Orezi",
        type: "artist",
        uri: "spotify:artist:6voVBz1bN1mWZCLpNZGqzD",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Reggae Blues (feat. Olamide, Kcee, Orezi & Iyanya)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738e5c7cd2d5fdf218a142ad2a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028e5c7cd2d5fdf218a142ad2a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518e5c7cd2d5fdf218a142ad2a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7KiINhQdLAupkwvJ0EelGG",
        },
        href: "https://api.spotify.com/v1/artists/7KiINhQdLAupkwvJ0EelGG",
        id: "7KiINhQdLAupkwvJ0EelGG",
        name: "KCee",
        type: "artist",
        uri: "spotify:artist:7KiINhQdLAupkwvJ0EelGG",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a62f86ca33de6ec1b0053e9bb14f64babf3b1c1b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Limpopo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e3f6f5f245aaca01c32b1c1e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e3f6f5f245aaca01c32b1c1e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e3f6f5f245aaca01c32b1c1e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1sSt1DqqqFLkPwfrqafVyn",
        },
        href: "https://api.spotify.com/v1/artists/1sSt1DqqqFLkPwfrqafVyn",
        id: "1sSt1DqqqFLkPwfrqafVyn",
        name: "Ice Prince",
        type: "artist",
        uri: "spotify:artist:1sSt1DqqqFLkPwfrqafVyn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5jW1p6bav4DYihIHewKBCq",
        },
        href: "https://api.spotify.com/v1/artists/5jW1p6bav4DYihIHewKBCq",
        id: "5jW1p6bav4DYihIHewKBCq",
        name: "Yung L",
        type: "artist",
        uri: "spotify:artist:5jW1p6bav4DYihIHewKBCq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8c612e406d32fa197157b92cd4c2e88d63151e92?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gimme Dat (feat. Burna Boy, Yung L & Olamide)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dc01b001dbd6d0f8eaae0257",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dc01b001dbd6d0f8eaae0257",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dc01b001dbd6d0f8eaae0257",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Love You (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273214847a177e613f428bb1e82",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02214847a177e613f428bb1e82",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851214847a177e613f428bb1e82",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/79RUmaL1H0vxMwNKPFOAmg",
        },
        href: "https://api.spotify.com/v1/artists/79RUmaL1H0vxMwNKPFOAmg",
        id: "79RUmaL1H0vxMwNKPFOAmg",
        name: "Rayce",
        type: "artist",
        uri: "spotify:artist:79RUmaL1H0vxMwNKPFOAmg",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7159a22a4675d8ded91b46376a03efdc1b56ed39?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jack Sparrow",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27343339d13728b4b7ae589167e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0243339d13728b4b7ae589167e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485143339d13728b4b7ae589167e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3Rrufax6fPS07pcfwEzsYA",
        },
        href: "https://api.spotify.com/v1/artists/3Rrufax6fPS07pcfwEzsYA",
        id: "3Rrufax6fPS07pcfwEzsYA",
        name: "Falz feat. Poe and Yemi Alade",
        type: "artist",
        uri: "spotify:artist:3Rrufax6fPS07pcfwEzsYA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2s187JqHC9kipPLBLWXubl",
        },
        href: "https://api.spotify.com/v1/artists/2s187JqHC9kipPLBLWXubl",
        id: "2s187JqHC9kipPLBLWXubl",
        name: "Falz",
        type: "artist",
        uri: "spotify:artist:2s187JqHC9kipPLBLWXubl",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6R0kYkDkzOQyDiQUdedQyZ",
        },
        href: "https://api.spotify.com/v1/artists/6R0kYkDkzOQyDiQUdedQyZ",
        id: "6R0kYkDkzOQyDiQUdedQyZ",
        name: "Poe",
        type: "artist",
        uri: "spotify:artist:6R0kYkDkzOQyDiQUdedQyZ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5b33bdcdba3c384d54043e05dc53bc09cff75b1e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Marry Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dc249736ae78c668099a8fb8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dc249736ae78c668099a8fb8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dc249736ae78c668099a8fb8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7ef645d88017b7d8cf7e7af11a3da61acc517798?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Girlie O",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2731efb8439fe98c8342900e945",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e021efb8439fe98c8342900e945",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048511efb8439fe98c8342900e945",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d8cddcc714d60a8e167ebdbf32c2c55313264c27?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Standing Ovation (feat. Olamide)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ee14017a881da896ae570026",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ee14017a881da896ae570026",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ee14017a881da896ae570026",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Ada Ada",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5f7059351b48acba59bbbe9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5f7059351b48acba59bbbe9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5f7059351b48acba59bbbe9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url: null,
    name: "Low Key",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fbc01a791d00acdd01e9ce6b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fbc01a791d00acdd01e9ce6b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fbc01a791d00acdd01e9ce6b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5CG9X521RDFWCuAhlo6QoR",
        },
        href: "https://api.spotify.com/v1/artists/5CG9X521RDFWCuAhlo6QoR",
        id: "5CG9X521RDFWCuAhlo6QoR",
        name: "Fela Kuti",
        type: "artist",
        uri: "spotify:artist:5CG9X521RDFWCuAhlo6QoR",
      },
    ],
    preview_url: null,
    name: "Shakara",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738f82a5c1d701d71ba554e220",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028f82a5c1d701d71ba554e220",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518f82a5c1d701d71ba554e220",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/75VKfyoBlkmrJFDqo1o2VY",
        },
        href: "https://api.spotify.com/v1/artists/75VKfyoBlkmrJFDqo1o2VY",
        id: "75VKfyoBlkmrJFDqo1o2VY",
        name: "Fireboy DML",
        type: "artist",
        uri: "spotify:artist:75VKfyoBlkmrJFDqo1o2VY",
      },
    ],
    preview_url: null,
    name: "Scatter",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27385f5d090ebbc4c70fd08bdf0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0285f5d090ebbc4c70fd08bdf0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485185f5d090ebbc4c70fd08bdf0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7KiINhQdLAupkwvJ0EelGG",
        },
        href: "https://api.spotify.com/v1/artists/7KiINhQdLAupkwvJ0EelGG",
        id: "7KiINhQdLAupkwvJ0EelGG",
        name: "KCee",
        type: "artist",
        uri: "spotify:artist:7KiINhQdLAupkwvJ0EelGG",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8759509a14a4272c230416f4585e1326ba1f9924?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Psycho",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27306dfd298d6f891eba7a99959",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0206dfd298d6f891eba7a99959",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485106dfd298d6f891eba7a99959",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f5cfa694d39405569acac57cd6ead3975eb0ecf2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Yori Yori",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d329108f0fc6299be40652b6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d329108f0fc6299be40652b6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d329108f0fc6299be40652b6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1d3f7562955a8c839417564baf2f693d44b2c054?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Of Lagos",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737990c951628c0da020e88adf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027990c951628c0da020e88adf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517990c951628c0da020e88adf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/12BjfR9LIzpDecdcMGvu7f",
        },
        href: "https://api.spotify.com/v1/artists/12BjfR9LIzpDecdcMGvu7f",
        id: "12BjfR9LIzpDecdcMGvu7f",
        name: "Cuppy",
        type: "artist",
        uri: "spotify:artist:12BjfR9LIzpDecdcMGvu7f",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url: null,
    name: "Currency",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735c33f52b0d2a47a2255cb578",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025c33f52b0d2a47a2255cb578",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515c33f52b0d2a47a2255cb578",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0kDxVZAXElGfID8nm3CLQo",
        },
        href: "https://api.spotify.com/v1/artists/0kDxVZAXElGfID8nm3CLQo",
        id: "0kDxVZAXElGfID8nm3CLQo",
        name: "Wale Kwame",
        type: "artist",
        uri: "spotify:artist:0kDxVZAXElGfID8nm3CLQo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/52iM1kP5BpnLypZ0VtrpyY",
        },
        href: "https://api.spotify.com/v1/artists/52iM1kP5BpnLypZ0VtrpyY",
        id: "52iM1kP5BpnLypZ0VtrpyY",
        name: "Kwesi Arthur",
        type: "artist",
        uri: "spotify:artist:52iM1kP5BpnLypZ0VtrpyY",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1247AZNYLxb33DmPibFLZZ",
        },
        href: "https://api.spotify.com/v1/artists/1247AZNYLxb33DmPibFLZZ",
        id: "1247AZNYLxb33DmPibFLZZ",
        name: "Shizzi",
        type: "artist",
        uri: "spotify:artist:1247AZNYLxb33DmPibFLZZ",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f4ac7c3f9a9862a52de98320a511a73a9a33b4a6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "All over You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ed59ec91c560a7378ecc495b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ed59ec91c560a7378ecc495b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ed59ec91c560a7378ecc495b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c30bb7ea3acad05aa7a0f33b9c8a3d53caebe2d5?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Up To Something",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735a84f814ccd64d769b98a542",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025a84f814ccd64d769b98a542",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515a84f814ccd64d769b98a542",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/408vMm7y1227ASq7GmWygZ",
        },
        href: "https://api.spotify.com/v1/artists/408vMm7y1227ASq7GmWygZ",
        id: "408vMm7y1227ASq7GmWygZ",
        name: "Sarz",
        type: "artist",
        uri: "spotify:artist:408vMm7y1227ASq7GmWygZ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5x2vmU3Hj2Y66luW7c7vIn",
        },
        href: "https://api.spotify.com/v1/artists/5x2vmU3Hj2Y66luW7c7vIn",
        id: "5x2vmU3Hj2Y66luW7c7vIn",
        name: "WurlD",
        type: "artist",
        uri: "spotify:artist:5x2vmU3Hj2Y66luW7c7vIn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/86ae6453b5ae2edaeb20add19de71b085a4e70b6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "TROBUL",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f136a493b9adc3a997306a70",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f136a493b9adc3a997306a70",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f136a493b9adc3a997306a70",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5zqRdlPXeCIuxgaPimSKXj",
        },
        href: "https://api.spotify.com/v1/artists/5zqRdlPXeCIuxgaPimSKXj",
        id: "5zqRdlPXeCIuxgaPimSKXj",
        name: "Ycee",
        type: "artist",
        uri: "spotify:artist:5zqRdlPXeCIuxgaPimSKXj",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e2383c0eaca8307df6b73b1e1acf95d28e2a44ac?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Dakun",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737658a3447d2f07edc2259737",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027658a3447d2f07edc2259737",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517658a3447d2f07edc2259737",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5zqRdlPXeCIuxgaPimSKXj",
        },
        href: "https://api.spotify.com/v1/artists/5zqRdlPXeCIuxgaPimSKXj",
        id: "5zqRdlPXeCIuxgaPimSKXj",
        name: "Ycee",
        type: "artist",
        uri: "spotify:artist:5zqRdlPXeCIuxgaPimSKXj",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/38fdc22e79fe7ce2ada1c1d1c2036d904355bffe?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wahala Dey",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737658a3447d2f07edc2259737",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027658a3447d2f07edc2259737",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517658a3447d2f07edc2259737",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4Ns55iOSe1Im2WU2e1Eym0",
        },
        href: "https://api.spotify.com/v1/artists/4Ns55iOSe1Im2WU2e1Eym0",
        id: "4Ns55iOSe1Im2WU2e1Eym0",
        name: "Simi",
        type: "artist",
        uri: "spotify:artist:4Ns55iOSe1Im2WU2e1Eym0",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url: null,
    name: "Jericho",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273402ad782b520a5d9ea779faf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02402ad782b520a5d9ea779faf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851402ad782b520a5d9ea779faf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7GUayRAp1ClL94DXIwMmD4",
        },
        href: "https://api.spotify.com/v1/artists/7GUayRAp1ClL94DXIwMmD4",
        id: "7GUayRAp1ClL94DXIwMmD4",
        name: "Mystro",
        type: "artist",
        uri: "spotify:artist:7GUayRAp1ClL94DXIwMmD4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8cb0307c24fc1da44535f3d1b4c347072108ba71?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Immediately",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736c2967ce428ccf6a87cb0733",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026c2967ce428ccf6a87cb0733",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516c2967ce428ccf6a87cb0733",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e6276803ccfee57d41f79d5a1966a039b07942c8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "If E Happen For Lagos",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fe3157ffb04473e3c4b4f5d9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fe3157ffb04473e3c4b4f5d9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fe3157ffb04473e3c4b4f5d9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/62DmErcU7dqZbJaDqwsqzR",
        },
        href: "https://api.spotify.com/v1/artists/62DmErcU7dqZbJaDqwsqzR",
        id: "62DmErcU7dqZbJaDqwsqzR",
        name: "Popcaan",
        type: "artist",
        uri: "spotify:artist:62DmErcU7dqZbJaDqwsqzR",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/4a01ef2eefce2f2c3531660aadccab6b9f9efd75?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Risky",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1Nuq9WJb01OoR56vu02bhX",
        },
        href: "https://api.spotify.com/v1/artists/1Nuq9WJb01OoR56vu02bhX",
        id: "1Nuq9WJb01OoR56vu02bhX",
        name: "Solidstar",
        type: "artist",
        uri: "spotify:artist:1Nuq9WJb01OoR56vu02bhX",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a1a258e81a8bc5c2893dbd56dd12490de48603a9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Eleganza",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a8fa01213098aaa436e37af2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a8fa01213098aaa436e37af2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a8fa01213098aaa436e37af2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "International Badman Killa",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736174aa98d55548adf564e235",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026174aa98d55548adf564e235",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516174aa98d55548adf564e235",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6QwPmy9hs9alo36XJ5pwsW",
        },
        href: "https://api.spotify.com/v1/artists/6QwPmy9hs9alo36XJ5pwsW",
        id: "6QwPmy9hs9alo36XJ5pwsW",
        name: "Small Doctor",
        type: "artist",
        uri: "spotify:artist:6QwPmy9hs9alo36XJ5pwsW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/356ff53de70fca9bb57fd0b30d3d7c363520c740?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Penalty",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738ce5bd7efa89ddf997fca628",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028ce5bd7efa89ddf997fca628",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518ce5bd7efa89ddf997fca628",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "This Kind Luv",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273de61c5e142856c9cd7ed1998",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02de61c5e142856c9cd7ed1998",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851de61c5e142856c9cd7ed1998",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/de9ec0b0926533215f1bee725321cc522d930e01?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Diana",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27351541fca39aca4a68110a6a0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0251541fca39aca4a68110a6a0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485151541fca39aca4a68110a6a0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Only One",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732de49caecb58c9896e673935",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022de49caecb58c9896e673935",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512de49caecb58c9896e673935",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2a75816d95de21841284c29da60b059618548a80?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bobo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Wiz Party (Bonus Freestyle Leak)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5eWt7HdpWwlidAEBcNtqWQ",
        },
        href: "https://api.spotify.com/v1/artists/5eWt7HdpWwlidAEBcNtqWQ",
        id: "5eWt7HdpWwlidAEBcNtqWQ",
        name: "Mut4y",
        type: "artist",
        uri: "spotify:artist:5eWt7HdpWwlidAEBcNtqWQ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f966d18798dd03c5c92477c77874a76331ea75ca?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Manya",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2731c27284655a7f4efb54824cf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e021c27284655a7f4efb54824cf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048511c27284655a7f4efb54824cf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2ZMAFkHTvgCbtBumdkNDQA",
        },
        href: "https://api.spotify.com/v1/artists/2ZMAFkHTvgCbtBumdkNDQA",
        id: "2ZMAFkHTvgCbtBumdkNDQA",
        name: "Terry G",
        type: "artist",
        uri: "spotify:artist:2ZMAFkHTvgCbtBumdkNDQA",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/747aabb6b6883d1dd6893539b484f1122f5bb702?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Malonogede",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ad2940b1ef7cb8590e1a7e30",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ad2940b1ef7cb8590e1a7e30",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ad2940b1ef7cb8590e1a7e30",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/558uzgSBJfpF1KZEh6AbqW",
        },
        href: "https://api.spotify.com/v1/artists/558uzgSBJfpF1KZEh6AbqW",
        id: "558uzgSBJfpF1KZEh6AbqW",
        name: "DJ Shabsy",
        type: "artist",
        uri: "spotify:artist:558uzgSBJfpF1KZEh6AbqW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6avAjE4sdNno81rGmQRpuN",
        },
        href: "https://api.spotify.com/v1/artists/6avAjE4sdNno81rGmQRpuN",
        id: "6avAjE4sdNno81rGmQRpuN",
        name: "Sugarboy",
        type: "artist",
        uri: "spotify:artist:6avAjE4sdNno81rGmQRpuN",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/9b6f938e05d096ca83086467542b6f5acbc78be3?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Raba (feat. Kiss Daniel & Sugarboy)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739b7a0e128a4e4f784d87fcee",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029b7a0e128a4e4f784d87fcee",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519b7a0e128a4e4f784d87fcee",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d70981675fe6b999868375b6141dd47da0b7abcf?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Picture Perfect",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27313c40d09756d267c10dab09c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0213c40d09756d267c10dab09c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485113c40d09756d267c10dab09c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Short Skirt",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734171b4e72f748c3a118db0bb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024171b4e72f748c3a118db0bb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514171b4e72f748c3a118db0bb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/47RjncLoPKJwJD9vsIkP0a",
        },
        href: "https://api.spotify.com/v1/artists/47RjncLoPKJwJD9vsIkP0a",
        id: "47RjncLoPKJwJD9vsIkP0a",
        name: "Lynxxx",
        type: "artist",
        uri: "spotify:artist:47RjncLoPKJwJD9vsIkP0a",
      },
    ],
    preview_url: null,
    name: "Fine Lady",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f07c9dbe7e012fddc4bf3daa",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f07c9dbe7e012fddc4bf3daa",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f07c9dbe7e012fddc4bf3daa",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "One Life (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273cca95792d0273d2c6c5286b9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02cca95792d0273d2c6c5286b9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851cca95792d0273d2c6c5286b9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "No One Like You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f91b0cb2e6a379ec9000665d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f91b0cb2e6a379ec9000665d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f91b0cb2e6a379ec9000665d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6tQtOQ4n79HirQBsYgLg5t",
        },
        href: "https://api.spotify.com/v1/artists/6tQtOQ4n79HirQBsYgLg5t",
        id: "6tQtOQ4n79HirQBsYgLg5t",
        name: "WizKid",
        type: "artist",
        uri: "spotify:artist:6tQtOQ4n79HirQBsYgLg5t",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/75f33ef96d80eccedd5902c75b8e19baf8b7b6c1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Good Time (Remix)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366fc364c4239654425b211d4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266fc364c4239654425b211d4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166fc364c4239654425b211d4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DmouQfvRZ2y9auxK3DjuI",
        },
        href: "https://api.spotify.com/v1/artists/6DmouQfvRZ2y9auxK3DjuI",
        id: "6DmouQfvRZ2y9auxK3DjuI",
        name: "DMW",
        type: "artist",
        uri: "spotify:artist:6DmouQfvRZ2y9auxK3DjuI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5ywjxFhmhHGQBsK3DundNf",
        },
        href: "https://api.spotify.com/v1/artists/5ywjxFhmhHGQBsK3DundNf",
        id: "5ywjxFhmhHGQBsK3DundNf",
        name: "Peruzzi",
        type: "artist",
        uri: "spotify:artist:5ywjxFhmhHGQBsK3DundNf",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1sCxnr0nRf5TADGH5CX3lr",
        },
        href: "https://api.spotify.com/v1/artists/1sCxnr0nRf5TADGH5CX3lr",
        id: "1sCxnr0nRf5TADGH5CX3lr",
        name: "Yonda",
        type: "artist",
        uri: "spotify:artist:1sCxnr0nRf5TADGH5CX3lr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7dwz9sc3IA4HzfKMZM6cQc",
        },
        href: "https://api.spotify.com/v1/artists/7dwz9sc3IA4HzfKMZM6cQc",
        id: "7dwz9sc3IA4HzfKMZM6cQc",
        name: "FreshVDM",
        type: "artist",
        uri: "spotify:artist:7dwz9sc3IA4HzfKMZM6cQc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fd0ba65ae847fd4b20bb01fe5da2d256322c6c04?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Aje",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27309e2deac7cc37e142a0fc2af",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0209e2deac7cc37e142a0fc2af",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485109e2deac7cc37e142a0fc2af",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url: null,
    name: "Another Level",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c0341a65dc9ee2484ff71ff3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c0341a65dc9ee2484ff71ff3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c0341a65dc9ee2484ff71ff3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/85cc5e5c9b6f8793418b1985d935db1bb85b047c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Tiwa's Vibe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273eda96bc6961f65c0a48b265b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02eda96bc6961f65c0a48b265b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851eda96bc6961f65c0a48b265b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/44dcabf61d50c7f66d1ffb5a1924ea92ef6b3566?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bom Bom",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ad2940b1ef7cb8590e1a7e30",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ad2940b1ef7cb8590e1a7e30",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ad2940b1ef7cb8590e1a7e30",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DmouQfvRZ2y9auxK3DjuI",
        },
        href: "https://api.spotify.com/v1/artists/6DmouQfvRZ2y9auxK3DjuI",
        id: "6DmouQfvRZ2y9auxK3DjuI",
        name: "DMW",
        type: "artist",
        uri: "spotify:artist:6DmouQfvRZ2y9auxK3DjuI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/47fErV0VDIx6PmuhtWGTYu",
        },
        href: "https://api.spotify.com/v1/artists/47fErV0VDIx6PmuhtWGTYu",
        id: "47fErV0VDIx6PmuhtWGTYu",
        name: "Dremo",
        type: "artist",
        uri: "spotify:artist:47fErV0VDIx6PmuhtWGTYu",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5ywjxFhmhHGQBsK3DundNf",
        },
        href: "https://api.spotify.com/v1/artists/5ywjxFhmhHGQBsK3DundNf",
        id: "5ywjxFhmhHGQBsK3DundNf",
        name: "Peruzzi",
        type: "artist",
        uri: "spotify:artist:5ywjxFhmhHGQBsK3DundNf",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/03a91fabbbbb44b2008380df2db0fe7e87c4d62a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mind",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739ab4644d13faf8fe17e55d17",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029ab4644d13faf8fe17e55d17",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519ab4644d13faf8fe17e55d17",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/634b1f88f17948605a2d0f59a45e229fe57261e9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wonder Woman",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273881bd335db89fedcbada01f3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02881bd335db89fedcbada01f3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851881bd335db89fedcbada01f3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fa84edc6e30d75b67acec944985d0dd6099d7c5e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ekuro",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739c68a7ac66261b6c72dcdfee",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029c68a7ac66261b6c72dcdfee",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519c68a7ac66261b6c72dcdfee",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/69S8nrijE7Lyfac3X8iv8M",
        },
        href: "https://api.spotify.com/v1/artists/69S8nrijE7Lyfac3X8iv8M",
        id: "69S8nrijE7Lyfac3X8iv8M",
        name: "Legendury Beatz",
        type: "artist",
        uri: "spotify:artist:69S8nrijE7Lyfac3X8iv8M",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/76fe501cd56088b5d99cfbf6f19f88b7e632f8c3?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Love Can Do (feat. Maleek Berry)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c182679ef6325214444f1ba4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c182679ef6325214444f1ba4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c182679ef6325214444f1ba4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f7b7e1bd2c3b2c9a35095a9be029d7cbe05f074c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "I Can't Kill Myself",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273664f620d7358fd87cd0facaf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02664f620d7358fd87cd0facaf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851664f620d7358fd87cd0facaf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0WgwOS7j1CB5tIRa4QM50K",
        },
        href: "https://api.spotify.com/v1/artists/0WgwOS7j1CB5tIRa4QM50K",
        id: "0WgwOS7j1CB5tIRa4QM50K",
        name: "Seyi Shay",
        type: "artist",
        uri: "spotify:artist:0WgwOS7j1CB5tIRa4QM50K",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "Gimme Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732e6057dccc209cc106116485",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022e6057dccc209cc106116485",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512e6057dccc209cc106116485",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Golibe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273363204632e1249ea549d1175",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02363204632e1249ea549d1175",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851363204632e1249ea549d1175",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DmouQfvRZ2y9auxK3DjuI",
        },
        href: "https://api.spotify.com/v1/artists/6DmouQfvRZ2y9auxK3DjuI",
        id: "6DmouQfvRZ2y9auxK3DjuI",
        name: "DMW",
        type: "artist",
        uri: "spotify:artist:6DmouQfvRZ2y9auxK3DjuI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5N47dnIfPuGH8kIHpf8gZK",
        },
        href: "https://api.spotify.com/v1/artists/5N47dnIfPuGH8kIHpf8gZK",
        id: "5N47dnIfPuGH8kIHpf8gZK",
        name: "Duncan Mighty",
        type: "artist",
        uri: "spotify:artist:5N47dnIfPuGH8kIHpf8gZK",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Ijrcr7x3JUfy29iFVFSZ9",
        },
        href: "https://api.spotify.com/v1/artists/0Ijrcr7x3JUfy29iFVFSZ9",
        id: "0Ijrcr7x3JUfy29iFVFSZ9",
        name: "Fresh VDM",
        type: "artist",
        uri: "spotify:artist:0Ijrcr7x3JUfy29iFVFSZ9",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5ywjxFhmhHGQBsK3DundNf",
        },
        href: "https://api.spotify.com/v1/artists/5ywjxFhmhHGQBsK3DundNf",
        id: "5ywjxFhmhHGQBsK3DundNf",
        name: "Peruzzi",
        type: "artist",
        uri: "spotify:artist:5ywjxFhmhHGQBsK3DundNf",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/df0604aa1f975b4777232a919fff6fbde792e4e1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Aza",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273128e9944ffe2e80bf3f0742b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02128e9944ffe2e80bf3f0742b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851128e9944ffe2e80bf3f0742b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0OmDoCHY1LWyOXgULsjEPX",
        },
        href: "https://api.spotify.com/v1/artists/0OmDoCHY1LWyOXgULsjEPX",
        id: "0OmDoCHY1LWyOXgULsjEPX",
        name: "Rick Ro$$",
        type: "artist",
        uri: "spotify:artist:0OmDoCHY1LWyOXgULsjEPX",
      },
    ],
    preview_url: null,
    name: "Beautiful Onyinye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dae04b1530d02dc859aa1d0a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dae04b1530d02dc859aa1d0a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dae04b1530d02dc859aa1d0a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Love My Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/04Hrgux8cIaNJKUAX7WwJN",
        },
        href: "https://api.spotify.com/v1/artists/04Hrgux8cIaNJKUAX7WwJN",
        id: "04Hrgux8cIaNJKUAX7WwJN",
        name: "Mafikizolo",
        type: "artist",
        uri: "spotify:artist:04Hrgux8cIaNJKUAX7WwJN",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fe4fe485eb912b7cbeaa5285fc32272c9ada7769?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Tchelete (Good Life)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736d5d2c911a39610eccb78fca",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026d5d2c911a39610eccb78fca",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516d5d2c911a39610eccb78fca",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "One Ticket",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738ea6974adfcdf154e4e7a93b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028ea6974adfcdf154e4e7a93b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518ea6974adfcdf154e4e7a93b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/01c5e21ba3f4baf87f4cb80f5a750eda93599aaa?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sugarcane",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27368649cf4e438a7db0333dc40",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0268649cf4e438a7db0333dc40",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485168649cf4e438a7db0333dc40",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fe95ed3df9da21e0d87f5f7a7d79823ee03fdf86?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sexy Ladies",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ad2940b1ef7cb8590e1a7e30",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ad2940b1ef7cb8590e1a7e30",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ad2940b1ef7cb8590e1a7e30",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "On You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732a9dd89dba15955113a697da",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022a9dd89dba15955113a697da",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512a9dd89dba15955113a697da",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b1212839f03e4df1fd3bff4d51f13943b2f5f7d1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wavy Level",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ffd3db4a5436c555816b7e5d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ffd3db4a5436c555816b7e5d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ffd3db4a5436c555816b7e5d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DmouQfvRZ2y9auxK3DjuI",
        },
        href: "https://api.spotify.com/v1/artists/6DmouQfvRZ2y9auxK3DjuI",
        id: "6DmouQfvRZ2y9auxK3DjuI",
        name: "DMW",
        type: "artist",
        uri: "spotify:artist:6DmouQfvRZ2y9auxK3DjuI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4mSWNal2Ixxf1zrXSTLoep",
        },
        href: "https://api.spotify.com/v1/artists/4mSWNal2Ixxf1zrXSTLoep",
        id: "4mSWNal2Ixxf1zrXSTLoep",
        name: "Zlatan",
        type: "artist",
        uri: "spotify:artist:4mSWNal2Ixxf1zrXSTLoep",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/99311b5fb7fe611c2f95e1ca25e29a09497fba80?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bum Bum",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ac1d579b4847b71509195abd",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ac1d579b4847b71509195abd",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ac1d579b4847b71509195abd",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/64oW4P0vsDhlorOxZKQi6a",
        },
        href: "https://api.spotify.com/v1/artists/64oW4P0vsDhlorOxZKQi6a",
        id: "64oW4P0vsDhlorOxZKQi6a",
        name: "DJ Tunez",
        type: "artist",
        uri: "spotify:artist:64oW4P0vsDhlorOxZKQi6a",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/acfe5f097eee61be93ce2919760958e53bef20ad?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Turn Up",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738f2e3624a2cb3e22754ceab8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028f2e3624a2cb3e22754ceab8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518f2e3624a2cb3e22754ceab8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1S28Xg1Txe8qgxku1sFrbh",
        },
        href: "https://api.spotify.com/v1/artists/1S28Xg1Txe8qgxku1sFrbh",
        id: "1S28Xg1Txe8qgxku1sFrbh",
        name: "Dj Consequence",
        type: "artist",
        uri: "spotify:artist:1S28Xg1Txe8qgxku1sFrbh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7GUayRAp1ClL94DXIwMmD4",
        },
        href: "https://api.spotify.com/v1/artists/7GUayRAp1ClL94DXIwMmD4",
        id: "7GUayRAp1ClL94DXIwMmD4",
        name: "Mystro",
        type: "artist",
        uri: "spotify:artist:7GUayRAp1ClL94DXIwMmD4",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/370d357069394d8b7147844ff89f78adbe05d988?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Do Like This",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273279a6978cbb249c6f4514615",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02279a6978cbb249c6f4514615",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851279a6978cbb249c6f4514615",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url: null,
    name: "Oyi - Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273bf7cf5415e6f877e2dbaa1c9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02bf7cf5415e6f877e2dbaa1c9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851bf7cf5415e6f877e2dbaa1c9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e1c404252defdc8a24aade5fedf0d1a1f91d36dc?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fantasy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Feel Me (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273bc3b028cb3f28cae636e58ed",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02bc3b028cb3f28cae636e58ed",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851bc3b028cb3f28cae636e58ed",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b87244d2f3a9e6f05731e757063826858b956972?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Labalaba",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733f68ed252c0fcf9431fcd95f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023f68ed252c0fcf9431fcd95f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513f68ed252c0fcf9431fcd95f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/57277e1b5b561e2ae47029d360988138f73d6969?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Panana",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273761dfff15fc13c3c7db56fa0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02761dfff15fc13c3c7db56fa0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851761dfff15fc13c3c7db56fa0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/debb7bd6e115f52777e8b216cb4e64f542964993?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Redemption",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d9d9bacd43f36f1c9eaf8cbf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d9d9bacd43f36f1c9eaf8cbf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d9d9bacd43f36f1c9eaf8cbf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/36gl2NBJNRaQakdS4fTKGW",
        },
        href: "https://api.spotify.com/v1/artists/36gl2NBJNRaQakdS4fTKGW",
        id: "36gl2NBJNRaQakdS4fTKGW",
        name: "Ajebutter22",
        type: "artist",
        uri: "spotify:artist:36gl2NBJNRaQakdS4fTKGW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4qYpTEJThZ8FC8KzyFrSWW",
        },
        href: "https://api.spotify.com/v1/artists/4qYpTEJThZ8FC8KzyFrSWW",
        id: "4qYpTEJThZ8FC8KzyFrSWW",
        name: "Boj",
        type: "artist",
        uri: "spotify:artist:4qYpTEJThZ8FC8KzyFrSWW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/9655eadaf25cc70866b11c47f4f7db8c6fc818ef?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Taxi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27398eea33da038afaa9f00f471",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0298eea33da038afaa9f00f471",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485198eea33da038afaa9f00f471",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0mMqD2uqwvCjFvlzo6ayGi",
        },
        href: "https://api.spotify.com/v1/artists/0mMqD2uqwvCjFvlzo6ayGi",
        id: "0mMqD2uqwvCjFvlzo6ayGi",
        name: "DJ Maphorisa",
        type: "artist",
        uri: "spotify:artist:0mMqD2uqwvCjFvlzo6ayGi",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3Y4R3beJgTc14iwsKbAV7r",
        },
        href: "https://api.spotify.com/v1/artists/3Y4R3beJgTc14iwsKbAV7r",
        id: "3Y4R3beJgTc14iwsKbAV7r",
        name: "DJ Buckz",
        type: "artist",
        uri: "spotify:artist:3Y4R3beJgTc14iwsKbAV7r",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/198a80e075c9507e0f04dd2cd2eae60428deb7a2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Soweto Baby (feat. Wizkid & DJ Buckz)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d3b26b14c22f3e849da24888",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d3b26b14c22f3e849da24888",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d3b26b14c22f3e849da24888",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "E No Easy Ft. J.Martins",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2731fb72295e26efbb757d93fc9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e021fb72295e26efbb757d93fc9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048511fb72295e26efbb757d93fc9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2O0Ex0DrE8pEEw5WZoBF49",
        },
        href: "https://api.spotify.com/v1/artists/2O0Ex0DrE8pEEw5WZoBF49",
        id: "2O0Ex0DrE8pEEw5WZoBF49",
        name: "Lola Rae",
        type: "artist",
        uri: "spotify:artist:2O0Ex0DrE8pEEw5WZoBF49",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Biko!",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a7b6bac78a7d531d5fcbed42",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a7b6bac78a7d531d5fcbed42",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a7b6bac78a7d531d5fcbed42",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "For You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736230d28ea434c5f7067ebf82",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026230d28ea434c5f7067ebf82",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516230d28ea434c5f7067ebf82",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Yur Luv",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273105b1651c447ecd9d7741148",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02105b1651c447ecd9d7741148",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851105b1651c447ecd9d7741148",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3cac7bdf3dca8a398bc588c717a0c8b250804b45?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Problem",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735c75797e9bb33c316acd50a4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025c75797e9bb33c316acd50a4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515c75797e9bb33c316acd50a4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Lost In The World",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fa00e1068b63f6fefc4644e6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fa00e1068b63f6fefc4644e6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fa00e1068b63f6fefc4644e6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Own It",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27388aa5a2a9bcf7802e0f7e69f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0288aa5a2a9bcf7802e0f7e69f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485188aa5a2a9bcf7802e0f7e69f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3bbf3772e1d084ae8fd09b4f903938a17b535096?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gwara Gwara (Baddest Version)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f253926fe97e54e893e1332a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f253926fe97e54e893e1332a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f253926fe97e54e893e1332a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1a9ef52636ac54c8380fe1aebb256d03ff901f86?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Nobody",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27313c40d09756d267c10dab09c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0213c40d09756d267c10dab09c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485113c40d09756d267c10dab09c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Bend It",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dcbfa654fba59f645fd58f71",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dcbfa654fba59f645fd58f71",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dcbfa654fba59f645fd58f71",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2f953889ccf010739ecec6bf8e7af2c84e9663aa?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "My Darlin",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ee14017a881da896ae570026",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ee14017a881da896ae570026",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ee14017a881da896ae570026",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/97dfcb4f8a48bbc00602b96375b0153b6e4359b2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jombo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733731a90c6439be037a3cf656",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023731a90c6439be037a3cf656",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513731a90c6439be037a3cf656",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/6aa57f2d3d35c4023784cabecef0a9a969b9be5a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Available",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d969a7ee1042c0fe4584ddbc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d969a7ee1042c0fe4584ddbc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d969a7ee1042c0fe4584ddbc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/74Y6MnMlbZgza4vtu5pXFg",
        },
        href: "https://api.spotify.com/v1/artists/74Y6MnMlbZgza4vtu5pXFg",
        id: "74Y6MnMlbZgza4vtu5pXFg",
        name: "SK",
        type: "artist",
        uri: "spotify:artist:74Y6MnMlbZgza4vtu5pXFg",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5050ecfb05610583a4bccfa6fc665ca3660b55bd?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ose",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fd6ea2b318f123a0da982f90",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fd6ea2b318f123a0da982f90",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fd6ea2b318f123a0da982f90",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3Wu4rnX6UKAMtTlUL2IAj4",
        },
        href: "https://api.spotify.com/v1/artists/3Wu4rnX6UKAMtTlUL2IAj4",
        id: "3Wu4rnX6UKAMtTlUL2IAj4",
        name: "Chidinma",
        type: "artist",
        uri: "spotify:artist:3Wu4rnX6UKAMtTlUL2IAj4",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/006c1b0eb79f9f3420d9155511f89bd8a588f670?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fall in Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27306aa7f38096bd42c2073aabb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0206aa7f38096bd42c2073aabb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485106aa7f38096bd42c2073aabb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Dance for Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b974ba98670ae02f6c4e1e5f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b974ba98670ae02f6c4e1e5f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b974ba98670ae02f6c4e1e5f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/18b32d236e4a6194968c0d36c5f35f12b1f5f151?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Feelings",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c25369468e8250571612741f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c25369468e8250571612741f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c25369468e8250571612741f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2s187JqHC9kipPLBLWXubl",
        },
        href: "https://api.spotify.com/v1/artists/2s187JqHC9kipPLBLWXubl",
        id: "2s187JqHC9kipPLBLWXubl",
        name: "Falz",
        type: "artist",
        uri: "spotify:artist:2s187JqHC9kipPLBLWXubl",
      },
    ],
    preview_url: null,
    name: "Single & Searching",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2731143c3ca03b3358e2e26af6e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e021143c3ca03b3358e2e26af6e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048511143c3ca03b3358e2e26af6e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
    ],
    preview_url: null,
    name: "How I Feel",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fa7174520448c25fdd8701bb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fa7174520448c25fdd8701bb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fa7174520448c25fdd8701bb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/36M1Z5OPFotaTTKNjSIuAX",
        },
        href: "https://api.spotify.com/v1/artists/36M1Z5OPFotaTTKNjSIuAX",
        id: "36M1Z5OPFotaTTKNjSIuAX",
        name: "Viktoh",
        type: "artist",
        uri: "spotify:artist:36M1Z5OPFotaTTKNjSIuAX",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/0d7144531425694c30e9a1b2a259b13ba898f948?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Skibi Dat",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733ee38e21b7f7495ff36f8491",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023ee38e21b7f7495ff36f8491",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513ee38e21b7f7495ff36f8491",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8d642a3705a0c82a9a3a68484f58e1e34695531f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Kele Kele",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f666b0467a467dcd97dd1d07",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f666b0467a467dcd97dd1d07",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f666b0467a467dcd97dd1d07",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ea05c4d481408a4734eb1029915aea91106f06a1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wanted",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f666b0467a467dcd97dd1d07",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f666b0467a467dcd97dd1d07",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f666b0467a467dcd97dd1d07",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Mummy Mi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Kind Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0WgwOS7j1CB5tIRa4QM50K",
        },
        href: "https://api.spotify.com/v1/artists/0WgwOS7j1CB5tIRa4QM50K",
        id: "0WgwOS7j1CB5tIRa4QM50K",
        name: "Seyi Shay",
        type: "artist",
        uri: "spotify:artist:0WgwOS7j1CB5tIRa4QM50K",
      },
    ],
    preview_url: null,
    name: "In Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV",
        },
        href: "https://api.spotify.com/v1/artists/0z4gvV4rjIZ9wHck67ucSV",
        id: "0z4gvV4rjIZ9wHck67ucSV",
        name: "Akon",
        type: "artist",
        uri: "spotify:artist:0z4gvV4rjIZ9wHck67ucSV",
      },
    ],
    preview_url: null,
    name: "For You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url: null,
    name: "Dutty Whyne",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Ki Lo Fe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Omalicha",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
    ],
    preview_url: null,
    name: "Bombay",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4pduw76xrwPWHvDPDxHI7C",
        },
        href: "https://api.spotify.com/v1/artists/4pduw76xrwPWHvDPDxHI7C",
        id: "4pduw76xrwPWHvDPDxHI7C",
        name: "Yemisax",
        type: "artist",
        uri: "spotify:artist:4pduw76xrwPWHvDPDxHI7C",
      },
    ],
    preview_url: null,
    name: "One Question",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Celebrate",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/67nwj3Y5sZQLl72VNUHEYE",
        },
        href: "https://api.spotify.com/v1/artists/67nwj3Y5sZQLl72VNUHEYE",
        id: "67nwj3Y5sZQLl72VNUHEYE",
        name: "Wale",
        type: "artist",
        uri: "spotify:artist:67nwj3Y5sZQLl72VNUHEYE",
      },
    ],
    preview_url: null,
    name: "Murder",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Joy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736ab931c7f2d0be44324e7b75",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026ab931c7f2d0be44324e7b75",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516ab931c7f2d0be44324e7b75",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Say My Name",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Scatter the Floor",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url: null,
    name: "Slow Whine",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Gidi Girl",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Oluwa Lo Ni",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1ixqGowpDM21RwyJmJ7hpv",
        },
        href: "https://api.spotify.com/v1/artists/1ixqGowpDM21RwyJmJ7hpv",
        id: "1ixqGowpDM21RwyJmJ7hpv",
        name: "Skales",
        type: "artist",
        uri: "spotify:artist:1ixqGowpDM21RwyJmJ7hpv",
      },
    ],
    preview_url: null,
    name: "Eme Boyz",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "What You Wanna Do",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "For Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Holla At Your Boy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6rqqLENUG5H57UnYuLOUbU",
        },
        href: "https://api.spotify.com/v1/artists/6rqqLENUG5H57UnYuLOUbU",
        id: "6rqqLENUG5H57UnYuLOUbU",
        name: "D'Prince",
        type: "artist",
        uri: "spotify:artist:6rqqLENUG5H57UnYuLOUbU",
      },
    ],
    preview_url: null,
    name: "Wad Up",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Shout Out",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d5aaaf1b63e98a4164321759",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d5aaaf1b63e98a4164321759",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d5aaaf1b63e98a4164321759",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01DTVE3KmoPogPZaOvMqO8",
        },
        href: "https://api.spotify.com/v1/artists/01DTVE3KmoPogPZaOvMqO8",
        id: "01DTVE3KmoPogPZaOvMqO8",
        name: "Sarkodie",
        type: "artist",
        uri: "spotify:artist:01DTVE3KmoPogPZaOvMqO8",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/932949a0418c1e2bc46e01e1daba8d7f7b8367e2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Oluwa Ni",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735c75797e9bb33c316acd50a4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025c75797e9bb33c316acd50a4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515c75797e9bb33c316acd50a4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01O5KKdCaOntFo7150qGqB",
        },
        href: "https://api.spotify.com/v1/artists/01O5KKdCaOntFo7150qGqB",
        id: "01O5KKdCaOntFo7150qGqB",
        name: "DaVido",
        type: "artist",
        uri: "spotify:artist:01O5KKdCaOntFo7150qGqB",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bbef7b566729772b3c45adebee5542a87f001246?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gallardo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736e75b8559616b87b78fea919",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026e75b8559616b87b78fea919",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516e75b8559616b87b78fea919",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Sexy Rosey",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273363204632e1249ea549d1175",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02363204632e1249ea549d1175",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851363204632e1249ea549d1175",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5fb97fbd13bb566e4392cf68e5caa5ecc62f91b8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "I Concur",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273216778b78462a531a1d2268e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02216778b78462a531a1d2268e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851216778b78462a531a1d2268e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b4beb88c564373e428a0aecd01e70c738d86e01b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Don't Stop",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27344a55478ddc497eca42b4f9e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0244a55478ddc497eca42b4f9e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485144a55478ddc497eca42b4f9e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/0a058192eb91f024b52a886ea1d446ee896bbffc?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wonma!",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27378d3e866d4bfa66b5154a92c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0278d3e866d4bfa66b5154a92c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485178d3e866d4bfa66b5154a92c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url: null,
    name: "Woske",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b741ab98a68cd8c90b087b93",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b741ab98a68cd8c90b087b93",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b741ab98a68cd8c90b087b93",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f3ad15b535919879fce960d925c47f6dee82e055?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wo!!",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735d2bd11398ee8d07900b6107",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025d2bd11398ee8d07900b6107",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515d2bd11398ee8d07900b6107",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f5d542c071f48a1408f5df3e0afa373c341912e4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Criteria",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735abfe906b8e4e42ca1fea352",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025abfe906b8e4e42ca1fea352",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515abfe906b8e4e42ca1fea352",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Mama",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732e399f975df5ef1f4d958b85",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022e399f975df5ef1f4d958b85",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512e399f975df5ef1f4d958b85",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6qMGjGD3lmDJtzALZ8uS2z",
        },
        href: "https://api.spotify.com/v1/artists/6qMGjGD3lmDJtzALZ8uS2z",
        id: "6qMGjGD3lmDJtzALZ8uS2z",
        name: "Dotman",
        type: "artist",
        uri: "spotify:artist:6qMGjGD3lmDJtzALZ8uS2z",
      },
    ],
    preview_url: null,
    name: "My Woman",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b4c27c45bc8f872904e76a29",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b4c27c45bc8f872904e76a29",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b4c27c45bc8f872904e76a29",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
    ],
    preview_url: null,
    name: "Oh My Gosh",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739496d2c24807ebe511e511bc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029496d2c24807ebe511e511bc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519496d2c24807ebe511e511bc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Testimony - Bonus",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5067fe70d3d7d5c29f2b350",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5067fe70d3d7d5c29f2b350",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5067fe70d3d7d5c29f2b350",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Biko",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c171d0235903af2ba8a0ce41",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c171d0235903af2ba8a0ce41",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c171d0235903af2ba8a0ce41",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3hisQT4sa8NR0vqzDDg6gq",
        },
        href: "https://api.spotify.com/v1/artists/3hisQT4sa8NR0vqzDDg6gq",
        id: "3hisQT4sa8NR0vqzDDg6gq",
        name: "Kas",
        type: "artist",
        uri: "spotify:artist:3hisQT4sa8NR0vqzDDg6gq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/9df89b705ffa7b9255289fe552557db5842de5d6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fi Mi Le",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27301e0a03135a911d3e00cc7b3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0201e0a03135a911d3e00cc7b3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485101e0a03135a911d3e00cc7b3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url: null,
    name: "No Do",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738ea6974adfcdf154e4e7a93b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028ea6974adfcdf154e4e7a93b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518ea6974adfcdf154e4e7a93b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b7129b9d14bed82254f7f85e53b9c45412bfd9f2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "No Time (feat. P Square)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d329108f0fc6299be40652b6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d329108f0fc6299be40652b6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d329108f0fc6299be40652b6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0lVH4ReyYkoPMxFDzCQSgO",
        },
        href: "https://api.spotify.com/v1/artists/0lVH4ReyYkoPMxFDzCQSgO",
        id: "0lVH4ReyYkoPMxFDzCQSgO",
        name: "Fekky",
        type: "artist",
        uri: "spotify:artist:0lVH4ReyYkoPMxFDzCQSgO",
      },
    ],
    preview_url: null,
    name: "Unleash",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273faae04741a6253f2a7982893",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02faae04741a6253f2a7982893",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851faae04741a6253f2a7982893",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a34b4c903027d012c12d2831867f5e6bd51e441f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gbefun",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273761dfff15fc13c3c7db56fa0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02761dfff15fc13c3c7db56fa0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851761dfff15fc13c3c7db56fa0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3WzoYG00RDcrAD5ZPAUmPy",
        },
        href: "https://api.spotify.com/v1/artists/3WzoYG00RDcrAD5ZPAUmPy",
        id: "3WzoYG00RDcrAD5ZPAUmPy",
        name: "Styl-Plus",
        type: "artist",
        uri: "spotify:artist:3WzoYG00RDcrAD5ZPAUmPy",
      },
    ],
    preview_url: null,
    name: "Olufunmi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273277710492d6bd928564806a0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02277710492d6bd928564806a0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851277710492d6bd928564806a0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6pOz4M7D8ENqfLSFvciEuV",
        },
        href: "https://api.spotify.com/v1/artists/6pOz4M7D8ENqfLSFvciEuV",
        id: "6pOz4M7D8ENqfLSFvciEuV",
        name: "Nonso Amadi",
        type: "artist",
        uri: "spotify:artist:6pOz4M7D8ENqfLSFvciEuV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/401050c1fda0877b87ef4feb48670149e12c4c20?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "No Crime",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739ae551d11dbe11380cdb62c9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029ae551d11dbe11380cdb62c9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519ae551d11dbe11380cdb62c9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "Skeletun",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27322f2cf81e62b184a6ee7865c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0222f2cf81e62b184a6ee7865c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485122f2cf81e62b184a6ee7865c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c2eec958ad65d501491005072f1fd642f51bcef0?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Company",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url: null,
    name: "Mama",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273930821ca848bf9d12589660e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02930821ca848bf9d12589660e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851930821ca848bf9d12589660e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f46e7a14b1bccc45b249f5f64bdc45b9e71e2019?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fall",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27394b9333e05b5803a87044bd6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0294b9333e05b5803a87044bd6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485194b9333e05b5803a87044bd6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/eed4ba772cacd52adc30a2977f1f843b5628c648?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "FIA",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273581d53ca8fb30e8f54f2c6c9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02581d53ca8fb30e8f54f2c6c9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851581d53ca8fb30e8f54f2c6c9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url: null,
    name: "Goose Bumps",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736174aa98d55548adf564e235",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026174aa98d55548adf564e235",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516174aa98d55548adf564e235",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5a3kizlLAxR0P6qZEti8T8",
        },
        href: "https://api.spotify.com/v1/artists/5a3kizlLAxR0P6qZEti8T8",
        id: "5a3kizlLAxR0P6qZEti8T8",
        name: "DarkoVibes",
        type: "artist",
        uri: "spotify:artist:5a3kizlLAxR0P6qZEti8T8",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7kK5badbqOjd8WlT2XWMeM",
        },
        href: "https://api.spotify.com/v1/artists/7kK5badbqOjd8WlT2XWMeM",
        id: "7kK5badbqOjd8WlT2XWMeM",
        name: "Bella Shmurda",
        type: "artist",
        uri: "spotify:artist:7kK5badbqOjd8WlT2XWMeM",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d23bf61075afe8396cb71d6a2fadecdfeec6e71a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Body Riddim",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e167f01feb19aa11a978b52c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e167f01feb19aa11a978b52c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e167f01feb19aa11a978b52c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5958b884a14f79f7846bcabf5146275cb9bf131c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Koni Baje",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736840e87d0809f65014309322",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026840e87d0809f65014309322",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516840e87d0809f65014309322",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2n4DcAtRMvfyRX3ljeC8Kp",
        },
        href: "https://api.spotify.com/v1/artists/2n4DcAtRMvfyRX3ljeC8Kp",
        id: "2n4DcAtRMvfyRX3ljeC8Kp",
        name: "2Baba",
        type: "artist",
        uri: "spotify:artist:2n4DcAtRMvfyRX3ljeC8Kp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/cf053792630fd35e654b06c8ca011702ca92c236?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Opo (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273df38cc836ca8e5c31cc21bca",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02df38cc836ca8e5c31cc21bca",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851df38cc836ca8e5c31cc21bca",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0XnH3M78JKVEjutHn1146c",
        },
        href: "https://api.spotify.com/v1/artists/0XnH3M78JKVEjutHn1146c",
        id: "0XnH3M78JKVEjutHn1146c",
        name: "Yaadman fka Yung L",
        type: "artist",
        uri: "spotify:artist:0XnH3M78JKVEjutHn1146c",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7837926ba0593808981d12a57a8ca96efd8af529?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Eve Bounce - Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b69bd726fa5be4236e635ae8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b69bd726fa5be4236e635ae8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b69bd726fa5be4236e635ae8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Fever",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a8d3d102d5430a2cab7128f2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a8d3d102d5430a2cab7128f2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a8d3d102d5430a2cab7128f2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6h3iqdnfBKV2jRhUJz0oto",
        },
        href: "https://api.spotify.com/v1/artists/6h3iqdnfBKV2jRhUJz0oto",
        id: "6h3iqdnfBKV2jRhUJz0oto",
        name: "Terri",
        type: "artist",
        uri: "spotify:artist:6h3iqdnfBKV2jRhUJz0oto",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/938788ddb0f72de4b2fa35a3d5f69e0b319f5b0c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Kill Man",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d3aed5548b55173faf9a9440",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d3aed5548b55173faf9a9440",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d3aed5548b55173faf9a9440",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/219ae65a563623a7334da861b7b960616ef361e7?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Naughty Girl",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27370d87cb717db12a2f85b8dc5",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0270d87cb717db12a2f85b8dc5",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485170d87cb717db12a2f85b8dc5",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3jByrxQcxQjkdU442RKEZF",
        },
        href: "https://api.spotify.com/v1/artists/3jByrxQcxQjkdU442RKEZF",
        id: "3jByrxQcxQjkdU442RKEZF",
        name: "Selebobo",
        type: "artist",
        uri: "spotify:artist:3jByrxQcxQjkdU442RKEZF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url: null,
    name: "OVA",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d9407e67406f9a118e5f93a7",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d9407e67406f9a118e5f93a7",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d9407e67406f9a118e5f93a7",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url: null,
    name: "Mr Oreo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c68afeb04b8faf5ca0aa31ef",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c68afeb04b8faf5ca0aa31ef",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c68afeb04b8faf5ca0aa31ef",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/30N9JY1VoDikz8Czs2TKtT",
        },
        href: "https://api.spotify.com/v1/artists/30N9JY1VoDikz8Czs2TKtT",
        id: "30N9JY1VoDikz8Czs2TKtT",
        name: "Jesse Jagz",
        type: "artist",
        uri: "spotify:artist:30N9JY1VoDikz8Czs2TKtT",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url: null,
    name: "Bad Girl",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e10764533b0a6458975b0b69",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e10764533b0a6458975b0b69",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e10764533b0a6458975b0b69",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/291516606a63fe88c150c33cae2b77becc073df7?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Girl (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273288482ead6aa5e02263edbce",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02288482ead6aa5e02263edbce",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851288482ead6aa5e02263edbce",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2s187JqHC9kipPLBLWXubl",
        },
        href: "https://api.spotify.com/v1/artists/2s187JqHC9kipPLBLWXubl",
        id: "2s187JqHC9kipPLBLWXubl",
        name: "Falz",
        type: "artist",
        uri: "spotify:artist:2s187JqHC9kipPLBLWXubl",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/0a90513248adf57782a695a36e3310e101ed3532?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jeje",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f723ec4f41a6380eea972cc7",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f723ec4f41a6380eea972cc7",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f723ec4f41a6380eea972cc7",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ed7af985202111327228dd6d6b7d08286600b5b8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Chop Kiss",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27378e209516c08cebd662619d6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0278e209516c08cebd662619d6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485178e209516c08cebd662619d6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s",
        },
        href: "https://api.spotify.com/v1/artists/2IK173RXLiCSQ8fhDlAb3s",
        id: "2IK173RXLiCSQ8fhDlAb3s",
        name: "Adekunle Gold",
        type: "artist",
        uri: "spotify:artist:2IK173RXLiCSQ8fhDlAb3s",
      },
    ],
    preview_url: null,
    name: "Something Different",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734169ddd81ff51075abab4ac1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024169ddd81ff51075abab4ac1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514169ddd81ff51075abab4ac1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b3991b20fe9f51c945e317d1a8009420f637dba0?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Matter (feat. Tiwa Savage)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27364e59ba8129ddf22cc254111",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0264e59ba8129ddf22cc254111",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485164e59ba8129ddf22cc254111",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5yOvAmpIR7hVxiS6Ls5DPO",
        },
        href: "https://api.spotify.com/v1/artists/5yOvAmpIR7hVxiS6Ls5DPO",
        id: "5yOvAmpIR7hVxiS6Ls5DPO",
        name: "Omah Lay",
        type: "artist",
        uri: "spotify:artist:5yOvAmpIR7hVxiS6Ls5DPO",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5ada91fcffa018ef3c96ffee98a7f56a00d84349?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Infinity (feat. Omah Lay)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27387d20b9a27d5e14d74b5cb77",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0287d20b9a27d5e14d74b5cb77",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485187d20b9a27d5e14d74b5cb77",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s",
        },
        href: "https://api.spotify.com/v1/artists/2IK173RXLiCSQ8fhDlAb3s",
        id: "2IK173RXLiCSQ8fhDlAb3s",
        name: "Adekunle Gold",
        type: "artist",
        uri: "spotify:artist:2IK173RXLiCSQ8fhDlAb3s",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/030cd74bf16fe848eb5ff1b7b981a7377dfa55ad?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Kelegbe Megbe (Know your level)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d2f1f200b2150a37feb8e3a9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d2f1f200b2150a37feb8e3a9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d2f1f200b2150a37feb8e3a9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0rMCvFPIvdoBmgdcVADKQE",
        },
        href: "https://api.spotify.com/v1/artists/0rMCvFPIvdoBmgdcVADKQE",
        id: "0rMCvFPIvdoBmgdcVADKQE",
        name: "Olakira",
        type: "artist",
        uri: "spotify:artist:0rMCvFPIvdoBmgdcVADKQE",
      },
    ],
    preview_url: null,
    name: "In My Maserati",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273107a4a3327b651fb3867a694",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02107a4a3327b651fb3867a694",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851107a4a3327b651fb3867a694",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/390ad038ab48e942c7a1400db590cf300973d8e8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Odogwu",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273acc4c5bddf4e22c6e1dc65ab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02acc4c5bddf4e22c6e1dc65ab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851acc4c5bddf4e22c6e1dc65ab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/99c66282a1a74b4f81d5911b0b4b9409a8b965c9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "20 10 20",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b428f19d153849d5baaa7320",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b428f19d153849d5baaa7320",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b428f19d153849d5baaa7320",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s",
        },
        href: "https://api.spotify.com/v1/artists/2IK173RXLiCSQ8fhDlAb3s",
        id: "2IK173RXLiCSQ8fhDlAb3s",
        name: "Adekunle Gold",
        type: "artist",
        uri: "spotify:artist:2IK173RXLiCSQ8fhDlAb3s",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b6b1ca7b5ef22dd64dab981df48ef35bfdf1efb9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Before You Wake Up",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273076c17a3e95aad3f53ad028c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02076c17a3e95aad3f53ad028c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851076c17a3e95aad3f53ad028c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/0bf810be3e300822f29695c6e0622db988b09762?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Nwa Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27378ac9ee48972ca75ae9941bf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0278ac9ee48972ca75ae9941bf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485178ac9ee48972ca75ae9941bf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fff5c1e161d543d1558d0c83c4d3c79e3ce97be1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Assurance",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d9ee96488855cf4685c79533",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d9ee96488855cf4685c79533",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d9ee96488855cf4685c79533",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Ifeoma",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5067fe70d3d7d5c29f2b350",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5067fe70d3d7d5c29f2b350",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5067fe70d3d7d5c29f2b350",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d9c9d40e4cf436fa0618b01e0647183cd675d4f6?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jasi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27390b5f83bdafa9574ebd4e59d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0290b5f83bdafa9574ebd4e59d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485190b5f83bdafa9574ebd4e59d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Pon My Mind",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d40dff2e46394cf3327bec6b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d40dff2e46394cf3327bec6b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d40dff2e46394cf3327bec6b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1Nuq9WJb01OoR56vu02bhX",
        },
        href: "https://api.spotify.com/v1/artists/1Nuq9WJb01OoR56vu02bhX",
        id: "1Nuq9WJb01OoR56vu02bhX",
        name: "Solidstar",
        type: "artist",
        uri: "spotify:artist:1Nuq9WJb01OoR56vu02bhX",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1jluLAiBpHzUX4DlOxOfU3",
        },
        href: "https://api.spotify.com/v1/artists/1jluLAiBpHzUX4DlOxOfU3",
        id: "1jluLAiBpHzUX4DlOxOfU3",
        name: "2Face",
        type: "artist",
        uri: "spotify:artist:1jluLAiBpHzUX4DlOxOfU3",
      },
    ],
    preview_url: null,
    name: "Nwa Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273198b797496ea8715601e0460",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02198b797496ea8715601e0460",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851198b797496ea8715601e0460",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/5cbabce96bb222f725284b0026684191b7b490bf?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Kiss Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b78d7743fb2a9770aea4719e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b78d7743fb2a9770aea4719e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b78d7743fb2a9770aea4719e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Kom Kom",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738580baca17ccf72138600fec",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028580baca17ccf72138600fec",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518580baca17ccf72138600fec",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2a4de6f59f250787dd05c8158d2bf190e2b5eb14?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Posh",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Black Is Beautiful",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5f7059351b48acba59bbbe9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5f7059351b48acba59bbbe9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5f7059351b48acba59bbbe9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5eWt7HdpWwlidAEBcNtqWQ",
        },
        href: "https://api.spotify.com/v1/artists/5eWt7HdpWwlidAEBcNtqWQ",
        id: "5eWt7HdpWwlidAEBcNtqWQ",
        name: "Mut4y",
        type: "artist",
        uri: "spotify:artist:5eWt7HdpWwlidAEBcNtqWQ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/11b21KVATwG7LgLPiD3a1A",
        },
        href: "https://api.spotify.com/v1/artists/11b21KVATwG7LgLPiD3a1A",
        id: "11b21KVATwG7LgLPiD3a1A",
        name: "Ceeza Milli",
        type: "artist",
        uri: "spotify:artist:11b21KVATwG7LgLPiD3a1A",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bcc974235c6602470c9277d3c1d355e7925d6a63?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Commando (feat. Wizkid & Ceeza Milli)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732022f52ab193b35d418fc31c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022022f52ab193b35d418fc31c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512022f52ab193b35d418fc31c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url: null,
    name: "49-99",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730ba516dadb6e388bdd4dcbfb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020ba516dadb6e388bdd4dcbfb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510ba516dadb6e388bdd4dcbfb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/72bbc23d70ae4a847ba3cd475b1eb4c7e4150906?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Love Me, Love Me, Love Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f666b0467a467dcd97dd1d07",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f666b0467a467dcd97dd1d07",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f666b0467a467dcd97dd1d07",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/da70b34d946606411b51caa0f931e9acff5649e4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Olorun Mi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f666b0467a467dcd97dd1d07",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f666b0467a467dcd97dd1d07",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f666b0467a467dcd97dd1d07",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Amorawa - Bonus Track",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273da7eb53e2fe58022102f8a61",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02da7eb53e2fe58022102f8a61",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851da7eb53e2fe58022102f8a61",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0OMSLorUnoVqtEqfXw0Ejz",
        },
        href: "https://api.spotify.com/v1/artists/0OMSLorUnoVqtEqfXw0Ejz",
        id: "0OMSLorUnoVqtEqfXw0Ejz",
        name: "MidnightCrew",
        type: "artist",
        uri: "spotify:artist:0OMSLorUnoVqtEqfXw0Ejz",
      },
    ],
    preview_url: null,
    name: "Igwe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734c184e14e3febfe703216afe",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024c184e14e3febfe703216afe",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514c184e14e3febfe703216afe",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/25bf121285812531e9ff4d329eba3fa9f983a546?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "First of All",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273140cc352534b935b7af05af0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02140cc352534b935b7af05af0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851140cc352534b935b7af05af0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7tmpexALmQ8dt4wqdkMPZo",
        },
        href: "https://api.spotify.com/v1/artists/7tmpexALmQ8dt4wqdkMPZo",
        id: "7tmpexALmQ8dt4wqdkMPZo",
        name: "Wande Coal Ft D'Banj",
        type: "artist",
        uri: "spotify:artist:7tmpexALmQ8dt4wqdkMPZo",
      },
    ],
    preview_url: null,
    name: "You Bad",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27362432402f346fcc31d1d71d1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0262432402f346fcc31d1d71d1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485162432402f346fcc31d1d71d1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Personally",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273344915ef6b71cd3c611a19dc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02344915ef6b71cd3c611a19dc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851344915ef6b71cd3c611a19dc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5RCdjio4ASMQ8CFaSuAl6C",
        },
        href: "https://api.spotify.com/v1/artists/5RCdjio4ASMQ8CFaSuAl6C",
        id: "5RCdjio4ASMQ8CFaSuAl6C",
        name: "D'banj",
        type: "artist",
        uri: "spotify:artist:5RCdjio4ASMQ8CFaSuAl6C",
      },
    ],
    preview_url: null,
    name: "Mo Gbono Feli Feli",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738b6b5fbe72b014168619a757",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028b6b5fbe72b014168619a757",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518b6b5fbe72b014168619a757",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV",
        },
        href: "https://api.spotify.com/v1/artists/0z4gvV4rjIZ9wHck67ucSV",
        id: "0z4gvV4rjIZ9wHck67ucSV",
        name: "Akon",
        type: "artist",
        uri: "spotify:artist:0z4gvV4rjIZ9wHck67ucSV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7ahfCquNK3ReYc2UHhugs5",
        },
        href: "https://api.spotify.com/v1/artists/7ahfCquNK3ReYc2UHhugs5",
        id: "7ahfCquNK3ReYc2UHhugs5",
        name: "May D",
        type: "artist",
        uri: "spotify:artist:7ahfCquNK3ReYc2UHhugs5",
      },
    ],
    preview_url: null,
    name: "Chop My Money - Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b1f67afe4423d2bf879f681b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b1f67afe4423d2bf879f681b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b1f67afe4423d2bf879f681b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "No One Like You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273344915ef6b71cd3c611a19dc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02344915ef6b71cd3c611a19dc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851344915ef6b71cd3c611a19dc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Bumper To Bumper",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739a5570e79db1106c022fee1e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029a5570e79db1106c022fee1e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519a5570e79db1106c022fee1e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Ololufe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f9ad1a174824c11b9acc6335",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f9ad1a174824c11b9acc6335",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f9ad1a174824c11b9acc6335",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5zqRdlPXeCIuxgaPimSKXj",
        },
        href: "https://api.spotify.com/v1/artists/5zqRdlPXeCIuxgaPimSKXj",
        id: "5zqRdlPXeCIuxgaPimSKXj",
        name: "Ycee",
        type: "artist",
        uri: "spotify:artist:5zqRdlPXeCIuxgaPimSKXj",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2s187JqHC9kipPLBLWXubl",
        },
        href: "https://api.spotify.com/v1/artists/2s187JqHC9kipPLBLWXubl",
        id: "2s187JqHC9kipPLBLWXubl",
        name: "Falz",
        type: "artist",
        uri: "spotify:artist:2s187JqHC9kipPLBLWXubl",
      },
    ],
    preview_url: null,
    name: "Bubbly (feat. Falz)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d0e815876e1bb737fb7509bc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d0e815876e1bb737fb7509bc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d0e815876e1bb737fb7509bc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3cAisWS37sGCCtRgWfvrod",
        },
        href: "https://api.spotify.com/v1/artists/3cAisWS37sGCCtRgWfvrod",
        id: "3cAisWS37sGCCtRgWfvrod",
        name: "Diamond Platnumz",
        type: "artist",
        uri: "spotify:artist:3cAisWS37sGCCtRgWfvrod",
      },
    ],
    preview_url: null,
    name: "Time To Party",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b7030625b18c30b435672c32",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b7030625b18c30b435672c32",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b7030625b18c30b435672c32",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1MUPBuckdoveSDQgvkm9jC",
        },
        href: "https://api.spotify.com/v1/artists/1MUPBuckdoveSDQgvkm9jC",
        id: "1MUPBuckdoveSDQgvkm9jC",
        name: "YBNL MaFia Family",
        type: "artist",
        uri: "spotify:artist:1MUPBuckdoveSDQgvkm9jC",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7nEYJ01WxrTl3kAklzEC61",
        },
        href: "https://api.spotify.com/v1/artists/7nEYJ01WxrTl3kAklzEC61",
        id: "7nEYJ01WxrTl3kAklzEC61",
        name: "DJ Enimoney",
        type: "artist",
        uri: "spotify:artist:7nEYJ01WxrTl3kAklzEC61",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7Axhe9JQi7mAxWt8TCnNZR",
        },
        href: "https://api.spotify.com/v1/artists/7Axhe9JQi7mAxWt8TCnNZR",
        id: "7Axhe9JQi7mAxWt8TCnNZR",
        name: "Lk Kuddy",
        type: "artist",
        uri: "spotify:artist:7Axhe9JQi7mAxWt8TCnNZR",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1LKo6ZA3RNvKtLa6zDu32S",
        },
        href: "https://api.spotify.com/v1/artists/1LKo6ZA3RNvKtLa6zDu32S",
        id: "1LKo6ZA3RNvKtLa6zDu32S",
        name: "Kranium",
        type: "artist",
        uri: "spotify:artist:1LKo6ZA3RNvKtLa6zDu32S",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/dd82bcab07898114eac04dfa90845fea964f2840?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Send Her Money (feat. DJ Enimoney, LK Kuddy, Kizz Daniel, Olamide & Kranium)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27315c409c553fe6ba3989975e0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0215c409c553fe6ba3989975e0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485115c409c553fe6ba3989975e0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s",
        },
        href: "https://api.spotify.com/v1/artists/2IK173RXLiCSQ8fhDlAb3s",
        id: "2IK173RXLiCSQ8fhDlAb3s",
        name: "Adekunle Gold",
        type: "artist",
        uri: "spotify:artist:2IK173RXLiCSQ8fhDlAb3s",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4Ns55iOSe1Im2WU2e1Eym0",
        },
        href: "https://api.spotify.com/v1/artists/4Ns55iOSe1Im2WU2e1Eym0",
        id: "4Ns55iOSe1Im2WU2e1Eym0",
        name: "Simi",
        type: "artist",
        uri: "spotify:artist:4Ns55iOSe1Im2WU2e1Eym0",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/0e5498707de9f173b9558ab21d4544a472926681?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Promise",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734dda597cb87a3369adf610f4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024dda597cb87a3369adf610f4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514dda597cb87a3369adf610f4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/17GIXjvOEUNx9lEIzF398O",
        },
        href: "https://api.spotify.com/v1/artists/17GIXjvOEUNx9lEIzF398O",
        id: "17GIXjvOEUNx9lEIzF398O",
        name: "VVIP",
        type: "artist",
        uri: "spotify:artist:17GIXjvOEUNx9lEIzF398O",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2f11a0d1c1913284445dfddfe1aa8237a67afc2f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Alhaji - Red Gold Green",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27391e401322ee3f08afdb3d073",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0291e401322ee3f08afdb3d073",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485191e401322ee3f08afdb3d073",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/33a5eff9e8b0555b624f43b9eb8b917eada9c22b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sign Si - Baddest Riddim",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738d5b1d71cc85405638f6c9b2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028d5b1d71cc85405638f6c9b2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518d5b1d71cc85405638f6c9b2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4Ns55iOSe1Im2WU2e1Eym0",
        },
        href: "https://api.spotify.com/v1/artists/4Ns55iOSe1Im2WU2e1Eym0",
        id: "4Ns55iOSe1Im2WU2e1Eym0",
        name: "Simi",
        type: "artist",
        uri: "spotify:artist:4Ns55iOSe1Im2WU2e1Eym0",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ddf3451de8f42869eb0ddf24312ef85a39e9d7a2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Maga 2 Mugu (feat. Simi)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b57948c74d971e17a5f66030",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b57948c74d971e17a5f66030",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b57948c74d971e17a5f66030",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/09f668aa06bab4d78b3e097549e1d9f6ea7796cb?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Lenge Lenge",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27343649fb02d8982bbd492fe73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0243649fb02d8982bbd492fe73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485143649fb02d8982bbd492fe73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5RCdjio4ASMQ8CFaSuAl6C",
        },
        href: "https://api.spotify.com/v1/artists/5RCdjio4ASMQ8CFaSuAl6C",
        id: "5RCdjio4ASMQ8CFaSuAl6C",
        name: "D'banj",
        type: "artist",
        uri: "spotify:artist:5RCdjio4ASMQ8CFaSuAl6C",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/40aejR4JaMbNbuROxAJUPY",
        },
        href: "https://api.spotify.com/v1/artists/40aejR4JaMbNbuROxAJUPY",
        id: "40aejR4JaMbNbuROxAJUPY",
        name: "Slimcase",
        type: "artist",
        uri: "spotify:artist:40aejR4JaMbNbuROxAJUPY",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c2846231f470d36e2fbbaca6d34929413ab05e27?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mo Cover Eh",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730051224cde69326236282b77",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020051224cde69326236282b77",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510051224cde69326236282b77",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/37e93e66c227678ff40df4711afed8cc287cc420?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Same Girl",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273761dfff15fc13c3c7db56fa0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02761dfff15fc13c3c7db56fa0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851761dfff15fc13c3c7db56fa0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1A1IEvjX2MyuMXDDsSW8sD",
        },
        href: "https://api.spotify.com/v1/artists/1A1IEvjX2MyuMXDDsSW8sD",
        id: "1A1IEvjX2MyuMXDDsSW8sD",
        name: "Dr SID",
        type: "artist",
        uri: "spotify:artist:1A1IEvjX2MyuMXDDsSW8sD",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/9ef5960999ab221a18594b2ad5a52ad4a1149b50?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Kabiyesi",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732066914132ffbf326d0d56d4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022066914132ffbf326d0d56d4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512066914132ffbf326d0d56d4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Betty Butter",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739d3df6476d4ac557a4d0968e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029d3df6476d4ac557a4d0968e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519d3df6476d4ac557a4d0968e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6eYjM3EJ2ux62CjigGQIiU",
        },
        href: "https://api.spotify.com/v1/artists/6eYjM3EJ2ux62CjigGQIiU",
        id: "6eYjM3EJ2ux62CjigGQIiU",
        name: "DJ Xclusive",
        type: "artist",
        uri: "spotify:artist:6eYjM3EJ2ux62CjigGQIiU",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5N47dnIfPuGH8kIHpf8gZK",
        },
        href: "https://api.spotify.com/v1/artists/5N47dnIfPuGH8kIHpf8gZK",
        id: "5N47dnIfPuGH8kIHpf8gZK",
        name: "Duncan Mighty",
        type: "artist",
        uri: "spotify:artist:5N47dnIfPuGH8kIHpf8gZK",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e094da9de0a57fbed466bf7501df46c6d996425a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gimme Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ecfd7935e67c13c5da08d731",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ecfd7935e67c13c5da08d731",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ecfd7935e67c13c5da08d731",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0iqznAW9pzZ7KOjx8aCMWo",
        },
        href: "https://api.spotify.com/v1/artists/0iqznAW9pzZ7KOjx8aCMWo",
        id: "0iqznAW9pzZ7KOjx8aCMWo",
        name: "Tay Iwar",
        type: "artist",
        uri: "spotify:artist:0iqznAW9pzZ7KOjx8aCMWo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4Vy5zJKJyo57iOki2YrTaP",
        },
        href: "https://api.spotify.com/v1/artists/4Vy5zJKJyo57iOki2YrTaP",
        id: "4Vy5zJKJyo57iOki2YrTaP",
        name: "Suté",
        type: "artist",
        uri: "spotify:artist:4Vy5zJKJyo57iOki2YrTaP",
      },
    ],
    preview_url: null,
    name: "Elysium",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fdfa5d91995349e1cdf6d308",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fdfa5d91995349e1cdf6d308",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fdfa5d91995349e1cdf6d308",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0iqznAW9pzZ7KOjx8aCMWo",
        },
        href: "https://api.spotify.com/v1/artists/0iqznAW9pzZ7KOjx8aCMWo",
        id: "0iqznAW9pzZ7KOjx8aCMWo",
        name: "Tay Iwar",
        type: "artist",
        uri: "spotify:artist:0iqznAW9pzZ7KOjx8aCMWo",
      },
    ],
    preview_url: null,
    name: "Optimum Esse",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fdfa5d91995349e1cdf6d308",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fdfa5d91995349e1cdf6d308",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fdfa5d91995349e1cdf6d308",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/64oW4P0vsDhlorOxZKQi6a",
        },
        href: "https://api.spotify.com/v1/artists/64oW4P0vsDhlorOxZKQi6a",
        id: "64oW4P0vsDhlorOxZKQi6a",
        name: "DJ Tunez",
        type: "artist",
        uri: "spotify:artist:64oW4P0vsDhlorOxZKQi6a",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a0c4dabe3c3e549d1bcade1501bfb6db8d918595?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Cool Me Down (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27336eb501e7707f1c64f557344",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0236eb501e7707f1c64f557344",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485136eb501e7707f1c64f557344",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2p1fiYHYiXz9qi0JJyxBzN",
        },
        href: "https://api.spotify.com/v1/artists/2p1fiYHYiXz9qi0JJyxBzN",
        id: "2p1fiYHYiXz9qi0JJyxBzN",
        name: "Skepta",
        type: "artist",
        uri: "spotify:artist:2p1fiYHYiXz9qi0JJyxBzN",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f9f4ddbe4044af518caa9a129d4768ceb7a2c01d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Energy (Stay Far Away)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735595a4c733f6db29d4b90cb5",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025595a4c733f6db29d4b90cb5",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515595a4c733f6db29d4b90cb5",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Gimme Life",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273560c80eb14bb2a240b148458",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02560c80eb14bb2a240b148458",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851560c80eb14bb2a240b148458",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b4f32733ac33366e33fb799acb7e58f9561a8771?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Heaven (Susu's Song)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27308404c312b29276b722340fa",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0208404c312b29276b722340fa",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485108404c312b29276b722340fa",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/06fdbabfa4ede93992917baa1c0d78377d8f904e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Made for U",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27308404c312b29276b722340fa",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0208404c312b29276b722340fa",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485108404c312b29276b722340fa",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8a22eeb3f65799f1da73822ef5358e48891bdaa9?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Blessing Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2732a75d6594e3aa558fd751ea4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e022a75d6594e3aa558fd751ea4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048512a75d6594e3aa558fd751ea4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4f8vvLN5Rt3WszqOqVR9e9",
        },
        href: "https://api.spotify.com/v1/artists/4f8vvLN5Rt3WszqOqVR9e9",
        id: "4f8vvLN5Rt3WszqOqVR9e9",
        name: "Johnny Drille",
        type: "artist",
        uri: "spotify:artist:4f8vvLN5Rt3WszqOqVR9e9",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/478f1360bacaf33e9657d378252d630ec402cd87?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Count On You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27396c759af9f21299f57fe037f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0296c759af9f21299f57fe037f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485196c759af9f21299f57fe037f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1c61yiH4iYE7cHtjAYSUu3",
        },
        href: "https://api.spotify.com/v1/artists/1c61yiH4iYE7cHtjAYSUu3",
        id: "1c61yiH4iYE7cHtjAYSUu3",
        name: "Banky W.",
        type: "artist",
        uri: "spotify:artist:1c61yiH4iYE7cHtjAYSUu3",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3Wu4rnX6UKAMtTlUL2IAj4",
        },
        href: "https://api.spotify.com/v1/artists/3Wu4rnX6UKAMtTlUL2IAj4",
        id: "3Wu4rnX6UKAMtTlUL2IAj4",
        name: "Chidinma",
        type: "artist",
        uri: "spotify:artist:3Wu4rnX6UKAMtTlUL2IAj4",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2129a11cc5f174ece2df4b6e56c07b0b020fc45c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "All I Want Is You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27398127eeb637a2936a360247e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0298127eeb637a2936a360247e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485198127eeb637a2936a360247e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/281f819b56a83d89fbfbdad9279266a4ec86414d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mama",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2733731a90c6439be037a3cf656",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e023731a90c6439be037a3cf656",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048513731a90c6439be037a3cf656",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4f2Osmfrp1z54Y2d7Nf8vf",
        },
        href: "https://api.spotify.com/v1/artists/4f2Osmfrp1z54Y2d7Nf8vf",
        id: "4f2Osmfrp1z54Y2d7Nf8vf",
        name: "Philkeyz",
        type: "artist",
        uri: "spotify:artist:4f2Osmfrp1z54Y2d7Nf8vf",
      },
    ],
    preview_url: null,
    name: "Nesesari",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738ea6974adfcdf154e4e7a93b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028ea6974adfcdf154e4e7a93b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518ea6974adfcdf154e4e7a93b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7015a1318dc7c973313aebb709d2742ad1c45581?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Owo Ni Koko",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2734fe7f06abda03a49c1d9b66c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e024fe7f06abda03a49c1d9b66c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048514fe7f06abda03a49c1d9b66c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6qMGjGD3lmDJtzALZ8uS2z",
        },
        href: "https://api.spotify.com/v1/artists/6qMGjGD3lmDJtzALZ8uS2z",
        id: "6qMGjGD3lmDJtzALZ8uS2z",
        name: "Dotman",
        type: "artist",
        uri: "spotify:artist:6qMGjGD3lmDJtzALZ8uS2z",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/881dbfdd971fdb2f1c438e2a33c444931a6bbb32?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Afro Girl",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e3af50d329ebc48e97a83b5e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e3af50d329ebc48e97a83b5e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e3af50d329ebc48e97a83b5e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2NtQA3PY9chI8l65ejZLTP",
        },
        href: "https://api.spotify.com/v1/artists/2NtQA3PY9chI8l65ejZLTP",
        id: "2NtQA3PY9chI8l65ejZLTP",
        name: "SPINALL",
        type: "artist",
        uri: "spotify:artist:2NtQA3PY9chI8l65ejZLTP",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Olowo (feat. Davido & Wande Coal)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730a42e0a2b87296b125cf6dac",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020a42e0a2b87296b125cf6dac",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510a42e0a2b87296b125cf6dac",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c47616fd93eaf952c220fc2055b3ce2a9830f7f7?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Call My Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ac02f2f59f8ee0fd74a6bc72",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ac02f2f59f8ee0fd74a6bc72",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ac02f2f59f8ee0fd74a6bc72",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6lNEt5LSOQRUFl43OnnHUL",
        },
        href: "https://api.spotify.com/v1/artists/6lNEt5LSOQRUFl43OnnHUL",
        id: "6lNEt5LSOQRUFl43OnnHUL",
        name: "L.A.X",
        type: "artist",
        uri: "spotify:artist:6lNEt5LSOQRUFl43OnnHUL",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/dd09e968bb5a09742668809e93971e7626225954?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Nobody",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d9205d6671c7fa44dad590f2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d9205d6671c7fa44dad590f2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d9205d6671c7fa44dad590f2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2TwUVWFJs4LD0lOBbJXnNa",
        },
        href: "https://api.spotify.com/v1/artists/2TwUVWFJs4LD0lOBbJXnNa",
        id: "2TwUVWFJs4LD0lOBbJXnNa",
        name: "Korede Bello",
        type: "artist",
        uri: "spotify:artist:2TwUVWFJs4LD0lOBbJXnNa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1d1237b91d0b65d88d017f135d491953fe900d2f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mungo Park",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27333b0da6898b91e3be856570d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0233b0da6898b91e3be856570d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485133b0da6898b91e3be856570d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7fKO99ryLDo8VocdtVvwZW",
        },
        href: "https://api.spotify.com/v1/artists/7fKO99ryLDo8VocdtVvwZW",
        id: "7fKO99ryLDo8VocdtVvwZW",
        name: "Yemi Alade",
        type: "artist",
        uri: "spotify:artist:7fKO99ryLDo8VocdtVvwZW",
      },
    ],
    preview_url: null,
    name: "Johnny",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a470fea74e81480e98733d9c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a470fea74e81480e98733d9c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a470fea74e81480e98733d9c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1Nuq9WJb01OoR56vu02bhX",
        },
        href: "https://api.spotify.com/v1/artists/1Nuq9WJb01OoR56vu02bhX",
        id: "1Nuq9WJb01OoR56vu02bhX",
        name: "Solidstar",
        type: "artist",
        uri: "spotify:artist:1Nuq9WJb01OoR56vu02bhX",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/abe45ebd0a8e6c18297d3369525e55bbc353bbf8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Yarinya",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739dd0f63997310ea1e502ca17",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029dd0f63997310ea1e502ca17",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519dd0f63997310ea1e502ca17",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1hNaHKp2Za5YdOAG0WnRbc",
        },
        href: "https://api.spotify.com/v1/artists/1hNaHKp2Za5YdOAG0WnRbc",
        id: "1hNaHKp2Za5YdOAG0WnRbc",
        name: "Tiwa Savage",
        type: "artist",
        uri: "spotify:artist:1hNaHKp2Za5YdOAG0WnRbc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0qfFZU0MyOgRZyZL39YVGF",
        },
        href: "https://api.spotify.com/v1/artists/0qfFZU0MyOgRZyZL39YVGF",
        id: "0qfFZU0MyOgRZyZL39YVGF",
        name: "Young John",
        type: "artist",
        uri: "spotify:artist:0qfFZU0MyOgRZyZL39YVGF",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/df3d71d571cd1bfa27b377d9b93cd9a9eb611450?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ello Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f50dbe9be8900d30ea535e19",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f50dbe9be8900d30ea535e19",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f50dbe9be8900d30ea535e19",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Gbon Gbon",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27391cbb111a6b7f028521f2a30",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0291cbb111a6b7f028521f2a30",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485191cbb111a6b7f028521f2a30",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/6dd2ea9b09d7167c4415cb7560a864c99b346c60?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bombay (feat. Wizkid)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27390fc19256d9aab6e07ab84cb",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0290fc19256d9aab6e07ab84cb",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485190fc19256d9aab6e07ab84cb",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6J5O4svAiMxfVAisbPhA5a",
        },
        href: "https://api.spotify.com/v1/artists/6J5O4svAiMxfVAisbPhA5a",
        id: "6J5O4svAiMxfVAisbPhA5a",
        name: "Sean Tizzle",
        type: "artist",
        uri: "spotify:artist:6J5O4svAiMxfVAisbPhA5a",
      },
    ],
    preview_url: null,
    name: "Kilogbe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f3792a31015545b5811a175c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f3792a31015545b5811a175c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f3792a31015545b5811a175c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url: null,
    name: "Turn Up",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fe4d360191c86525a433a2b8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fe4d360191c86525a433a2b8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fe4d360191c86525a433a2b8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
    ],
    preview_url: null,
    name: "Fada Fada (Ghetto Gospel)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c0c0e7188bf177f9ed7c472b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c0c0e7188bf177f9ed7c472b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c0c0e7188bf177f9ed7c472b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
    ],
    preview_url: null,
    name: "Is It Because I Love You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273caa6c43d2bb80cb466893c8a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02caa6c43d2bb80cb466893c8a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851caa6c43d2bb80cb466893c8a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
    ],
    preview_url: null,
    name: "Connect",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739035a7bbd6304e3f2393ddd0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029035a7bbd6304e3f2393ddd0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519035a7bbd6304e3f2393ddd0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/25vOIhcuPIsHcpW8h7sOW0",
        },
        href: "https://api.spotify.com/v1/artists/25vOIhcuPIsHcpW8h7sOW0",
        id: "25vOIhcuPIsHcpW8h7sOW0",
        name: "Lasgiidi",
        type: "artist",
        uri: "spotify:artist:25vOIhcuPIsHcpW8h7sOW0",
      },
    ],
    preview_url: null,
    name: "Who You Epp?",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2731a274f6c95ed194852cc0a27",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e021a274f6c95ed194852cc0a27",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048511a274f6c95ed194852cc0a27",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url: null,
    name: "Bum Bum",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fee4b1e14da391d6eab4bfba",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fee4b1e14da391d6eab4bfba",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fee4b1e14da391d6eab4bfba",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01ukVEa5Q8UkHjqgiFZsIW",
        },
        href: "https://api.spotify.com/v1/artists/01ukVEa5Q8UkHjqgiFZsIW",
        id: "01ukVEa5Q8UkHjqgiFZsIW",
        name: "Oritse Femi",
        type: "artist",
        uri: "spotify:artist:01ukVEa5Q8UkHjqgiFZsIW",
      },
    ],
    preview_url: null,
    name: "Igbeyawo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273799dfcc0f56d86b55e131040",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02799dfcc0f56d86b55e131040",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851799dfcc0f56d86b55e131040",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5RCdjio4ASMQ8CFaSuAl6C",
        },
        href: "https://api.spotify.com/v1/artists/5RCdjio4ASMQ8CFaSuAl6C",
        id: "5RCdjio4ASMQ8CFaSuAl6C",
        name: "D'banj",
        type: "artist",
        uri: "spotify:artist:5RCdjio4ASMQ8CFaSuAl6C",
      },
    ],
    preview_url: null,
    name: "Oliver Twist",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ad43a74cb2624168e3f6e1b0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ad43a74cb2624168e3f6e1b0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ad43a74cb2624168e3f6e1b0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6RahM0jgg8wG78l0LmFTu6",
        },
        href: "https://api.spotify.com/v1/artists/6RahM0jgg8wG78l0LmFTu6",
        id: "6RahM0jgg8wG78l0LmFTu6",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6RahM0jgg8wG78l0LmFTu6",
      },
    ],
    preview_url: null,
    name: "Panya (feat. Tekno)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27398327e8eaad6ea57cc021769",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0298327e8eaad6ea57cc021769",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485198327e8eaad6ea57cc021769",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url: null,
    name: "Onyeoma",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27338d5522421b93a3ff5399887",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0238d5522421b93a3ff5399887",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485138d5522421b93a3ff5399887",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/58zp98y2prJO5wC7vXFfHi",
        },
        href: "https://api.spotify.com/v1/artists/58zp98y2prJO5wC7vXFfHi",
        id: "58zp98y2prJO5wC7vXFfHi",
        name: "Rescort",
        type: "artist",
        uri: "spotify:artist:58zp98y2prJO5wC7vXFfHi",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4mSWNal2Ixxf1zrXSTLoep",
        },
        href: "https://api.spotify.com/v1/artists/4mSWNal2Ixxf1zrXSTLoep",
        id: "4mSWNal2Ixxf1zrXSTLoep",
        name: "Zlatan",
        type: "artist",
        uri: "spotify:artist:4mSWNal2Ixxf1zrXSTLoep",
      },
    ],
    preview_url: null,
    name: "Credit Alert",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f644ee9022ce07902e779ff1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f644ee9022ce07902e779ff1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f644ee9022ce07902e779ff1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x",
        },
        href: "https://api.spotify.com/v1/artists/3zaDigUwjHvjOkSn0NDf9x",
        id: "3zaDigUwjHvjOkSn0NDf9x",
        name: "Bnxn",
        type: "artist",
        uri: "spotify:artist:3zaDigUwjHvjOkSn0NDf9x",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4mSWNal2Ixxf1zrXSTLoep",
        },
        href: "https://api.spotify.com/v1/artists/4mSWNal2Ixxf1zrXSTLoep",
        id: "4mSWNal2Ixxf1zrXSTLoep",
        name: "Zlatan",
        type: "artist",
        uri: "spotify:artist:4mSWNal2Ixxf1zrXSTLoep",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b4ed55a3999bffb85d74833b1fecc6bf7e1b73f5?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Spiritual",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f293a5d3e1d0554bb30e9f2b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f293a5d3e1d0554bb30e9f2b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f293a5d3e1d0554bb30e9f2b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2nR9FjLTz90sFqGrhYdzXE",
        },
        href: "https://api.spotify.com/v1/artists/2nR9FjLTz90sFqGrhYdzXE",
        id: "2nR9FjLTz90sFqGrhYdzXE",
        name: "T-Classic",
        type: "artist",
        uri: "spotify:artist:2nR9FjLTz90sFqGrhYdzXE",
      },
    ],
    preview_url: null,
    name: "Nobody Fine Pass You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27322fdfdd353b1dd16d18a448f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0222fdfdd353b1dd16d18a448f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485122fdfdd353b1dd16d18a448f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/62s0EsXQNJEwy8fKZ386VU",
        },
        href: "https://api.spotify.com/v1/artists/62s0EsXQNJEwy8fKZ386VU",
        id: "62s0EsXQNJEwy8fKZ386VU",
        name: "Larry Gaaga",
        type: "artist",
        uri: "spotify:artist:62s0EsXQNJEwy8fKZ386VU",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Doe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ea3b86d64155cdc3a7c54091",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ea3b86d64155cdc3a7c54091",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ea3b86d64155cdc3a7c54091",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3WzoYG00RDcrAD5ZPAUmPy",
        },
        href: "https://api.spotify.com/v1/artists/3WzoYG00RDcrAD5ZPAUmPy",
        id: "3WzoYG00RDcrAD5ZPAUmPy",
        name: "Styl-Plus",
        type: "artist",
        uri: "spotify:artist:3WzoYG00RDcrAD5ZPAUmPy",
      },
    ],
    preview_url: null,
    name: "Call My Name",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273277710492d6bd928564806a0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02277710492d6bd928564806a0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851277710492d6bd928564806a0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
    ],
    preview_url: null,
    name: "Shoki Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2735e1c82537756b27e36c35599",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e025e1c82537756b27e36c35599",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048515e1c82537756b27e36c35599",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Shake",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273cb0bcfbbe9a6c810ee75f8ee",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02cb0bcfbbe9a6c810ee75f8ee",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851cb0bcfbbe9a6c810ee75f8ee",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5RCdjio4ASMQ8CFaSuAl6C",
        },
        href: "https://api.spotify.com/v1/artists/5RCdjio4ASMQ8CFaSuAl6C",
        id: "5RCdjio4ASMQ8CFaSuAl6C",
        name: "D'banj",
        type: "artist",
        uri: "spotify:artist:5RCdjio4ASMQ8CFaSuAl6C",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d35f948d333aaf15a01a1fc5f4ab607c3c63ad71?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mo Gbono Feli Feli",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737e06372d9c9c9e466a9756cf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027e06372d9c9c9e466a9756cf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517e06372d9c9c9e466a9756cf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1mv2wpvQuSlXzk0CSNO3yc",
        },
        href: "https://api.spotify.com/v1/artists/1mv2wpvQuSlXzk0CSNO3yc",
        id: "1mv2wpvQuSlXzk0CSNO3yc",
        name: "MayD",
        type: "artist",
        uri: "spotify:artist:1mv2wpvQuSlXzk0CSNO3yc",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/2313b4c8ac1fb519810fa553c87c391dd322f7c5?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ile Ijo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fe68ecde0751645f9edff6a3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fe68ecde0751645f9edff6a3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fe68ecde0751645f9edff6a3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1sSt1DqqqFLkPwfrqafVyn",
        },
        href: "https://api.spotify.com/v1/artists/1sSt1DqqqFLkPwfrqafVyn",
        id: "1sSt1DqqqFLkPwfrqafVyn",
        name: "Ice Prince",
        type: "artist",
        uri: "spotify:artist:1sSt1DqqqFLkPwfrqafVyn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/64c65276fad0e5ba8625eb49ec1fb8d274dd37d5?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Aboki",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738bf0e549512bd1c198e7dac0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028bf0e549512bd1c198e7dac0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518bf0e549512bd1c198e7dac0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1A1IEvjX2MyuMXDDsSW8sD",
        },
        href: "https://api.spotify.com/v1/artists/1A1IEvjX2MyuMXDDsSW8sD",
        id: "1A1IEvjX2MyuMXDDsSW8sD",
        name: "Dr SID",
        type: "artist",
        uri: "spotify:artist:1A1IEvjX2MyuMXDDsSW8sD",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/343d3947d91571d9574b94cbfaabddb990a3adac?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Over The Moon Ft. K-Switch",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27338da19d872f1bd271ba684c3",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0238da19d872f1bd271ba684c3",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485138da19d872f1bd271ba684c3",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2n4DcAtRMvfyRX3ljeC8Kp",
        },
        href: "https://api.spotify.com/v1/artists/2n4DcAtRMvfyRX3ljeC8Kp",
        id: "2n4DcAtRMvfyRX3ljeC8Kp",
        name: "2Baba",
        type: "artist",
        uri: "spotify:artist:2n4DcAtRMvfyRX3ljeC8Kp",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38wGnQ9uC7XyV0TFHaEiO4",
        },
        href: "https://api.spotify.com/v1/artists/38wGnQ9uC7XyV0TFHaEiO4",
        id: "38wGnQ9uC7XyV0TFHaEiO4",
        name: "VIP",
        type: "artist",
        uri: "spotify:artist:38wGnQ9uC7XyV0TFHaEiO4",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/14e794e35863105b04ddb1b8682527df2beaea8f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "See Me So",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dcfe0155cf56647b69ee83be",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dcfe0155cf56647b69ee83be",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dcfe0155cf56647b69ee83be",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Bizzy Body",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f1418e839b6a629790f22f85",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f1418e839b6a629790f22f85",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f1418e839b6a629790f22f85",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Who Born The Maga",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739a5570e79db1106c022fee1e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029a5570e79db1106c022fee1e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519a5570e79db1106c022fee1e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5wJBdwIAg6nZoCaWbFhc1r",
        },
        href: "https://api.spotify.com/v1/artists/5wJBdwIAg6nZoCaWbFhc1r",
        id: "5wJBdwIAg6nZoCaWbFhc1r",
        name: "Naeto C",
        type: "artist",
        uri: "spotify:artist:5wJBdwIAg6nZoCaWbFhc1r",
      },
    ],
    preview_url: null,
    name: "5 and 6",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27330e1bc882786b06ee882b994",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0230e1bc882786b06ee882b994",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485130e1bc882786b06ee882b994",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5wJBdwIAg6nZoCaWbFhc1r",
        },
        href: "https://api.spotify.com/v1/artists/5wJBdwIAg6nZoCaWbFhc1r",
        id: "5wJBdwIAg6nZoCaWbFhc1r",
        name: "Naeto C",
        type: "artist",
        uri: "spotify:artist:5wJBdwIAg6nZoCaWbFhc1r",
      },
    ],
    preview_url: null,
    name: "Ten over Ten",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27330e1bc882786b06ee882b994",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0230e1bc882786b06ee882b994",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485130e1bc882786b06ee882b994",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0AJdNiFdUdmiU2TNg5fSzH",
        },
        href: "https://api.spotify.com/v1/artists/0AJdNiFdUdmiU2TNg5fSzH",
        id: "0AJdNiFdUdmiU2TNg5fSzH",
        name: "9ice",
        type: "artist",
        uri: "spotify:artist:0AJdNiFdUdmiU2TNg5fSzH",
      },
    ],
    preview_url: null,
    name: "Gbamu-Gbamu",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ae75f0b5806e6b8849864cda",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ae75f0b5806e6b8849864cda",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ae75f0b5806e6b8849864cda",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/55Q9iFoAZojfxnIvg6lDb2",
        },
        href: "https://api.spotify.com/v1/artists/55Q9iFoAZojfxnIvg6lDb2",
        id: "55Q9iFoAZojfxnIvg6lDb2",
        name: "Uhuru",
        type: "artist",
        uri: "spotify:artist:55Q9iFoAZojfxnIvg6lDb2",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3Y4R3beJgTc14iwsKbAV7r",
        },
        href: "https://api.spotify.com/v1/artists/3Y4R3beJgTc14iwsKbAV7r",
        id: "3Y4R3beJgTc14iwsKbAV7r",
        name: "DJ Buckz",
        type: "artist",
        uri: "spotify:artist:3Y4R3beJgTc14iwsKbAV7r",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/cd88529e219d0a698712c85680174d8b619d0496?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "The Sound",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273abd2e82035cf0224a056224c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02abd2e82035cf0224a056224c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851abd2e82035cf0224a056224c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3jByrxQcxQjkdU442RKEZF",
        },
        href: "https://api.spotify.com/v1/artists/3jByrxQcxQjkdU442RKEZF",
        id: "3jByrxQcxQjkdU442RKEZF",
        name: "Selebobo",
        type: "artist",
        uri: "spotify:artist:3jByrxQcxQjkdU442RKEZF",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/78478dda37ce03e5d20ef56f86fd4358fdad1748?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Joana",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f31d8f9ef61cdbc32119036e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f31d8f9ef61cdbc32119036e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f31d8f9ef61cdbc32119036e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s",
        },
        href: "https://api.spotify.com/v1/artists/2IK173RXLiCSQ8fhDlAb3s",
        id: "2IK173RXLiCSQ8fhDlAb3s",
        name: "Adekunle Gold",
        type: "artist",
        uri: "spotify:artist:2IK173RXLiCSQ8fhDlAb3s",
      },
    ],
    preview_url: null,
    name: "Pick Up",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273bd2ebcfae7fe75a28b6e19bc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02bd2ebcfae7fe75a28b6e19bc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851bd2ebcfae7fe75a28b6e19bc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5zqRdlPXeCIuxgaPimSKXj",
        },
        href: "https://api.spotify.com/v1/artists/5zqRdlPXeCIuxgaPimSKXj",
        id: "5zqRdlPXeCIuxgaPimSKXj",
        name: "Ycee",
        type: "artist",
        uri: "spotify:artist:5zqRdlPXeCIuxgaPimSKXj",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/8e405158f19afe756a8fca07be34d3c916f4955e?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Omo Alhaji",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27325b8efc14999f48a407bcb30",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0225b8efc14999f48a407bcb30",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485125b8efc14999f48a407bcb30",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e507cb7aebef33a4f8166d056fba5165e1466b42?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sample You - Remix",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d18409a12ad5e1f10ca2621d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d18409a12ad5e1f10ca2621d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d18409a12ad5e1f10ca2621d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4DWVHNUG04lB1nYDbQmjLm",
        },
        href: "https://api.spotify.com/v1/artists/4DWVHNUG04lB1nYDbQmjLm",
        id: "4DWVHNUG04lB1nYDbQmjLm",
        name: "J. Martins",
        type: "artist",
        uri: "spotify:artist:4DWVHNUG04lB1nYDbQmjLm",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0ipkUaXENFuJxWcCFfXXQ8",
        },
        href: "https://api.spotify.com/v1/artists/0ipkUaXENFuJxWcCFfXXQ8",
        id: "0ipkUaXENFuJxWcCFfXXQ8",
        name: "DJ Arafat",
        type: "artist",
        uri: "spotify:artist:0ipkUaXENFuJxWcCFfXXQ8",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3029f348c821133e6bf91c74dce118941cba985a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Touching Body",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d0dec9f9b3b12be0d1d9281b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d0dec9f9b3b12be0d1d9281b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d0dec9f9b3b12be0d1d9281b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3d8dcf99f9782c067e4ccc5759496e3a26e9561c?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ballerz",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27308c82fa1bd231bc75456f27d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0208c82fa1bd231bc75456f27d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485108c82fa1bd231bc75456f27d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0lEUtJddtvvDlxtEmF9j0m",
        },
        href: "https://api.spotify.com/v1/artists/0lEUtJddtvvDlxtEmF9j0m",
        id: "0lEUtJddtvvDlxtEmF9j0m",
        name: "Masterkraft",
        type: "artist",
        uri: "spotify:artist:0lEUtJddtvvDlxtEmF9j0m",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ede8773fb4153bf4dd3464a6fd00f9b0db08aeab?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Odoo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27367374b50eca9daea01321427",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0267374b50eca9daea01321427",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485167374b50eca9daea01321427",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3ZUn6LYxdmmPYQqBhFWI3h",
        },
        href: "https://api.spotify.com/v1/artists/3ZUn6LYxdmmPYQqBhFWI3h",
        id: "3ZUn6LYxdmmPYQqBhFWI3h",
        name: "Iyanya",
        type: "artist",
        uri: "spotify:artist:3ZUn6LYxdmmPYQqBhFWI3h",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fa95f3ff291e6e8c72dfdbb4c0f7d1630c4d20f2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mr. Oreo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738fd22cddcd1129f54e809b82",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028fd22cddcd1129f54e809b82",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518fd22cddcd1129f54e809b82",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Chop My Money (I Don't Care) [feat. Mayd]",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27373109f0d0447baf22734e9e0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0273109f0d0447baf22734e9e0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485173109f0d0447baf22734e9e0",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/015c626fda411c96c3c80c152253326b90d546ae?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "True",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273569180a5f981cbd43dbe4eb7",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02569180a5f981cbd43dbe4eb7",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851569180a5f981cbd43dbe4eb7",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/7ec44217f66f235f99b441779043dc5df9357c15?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Chop Am",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2736bc65483aa734f45bb4084d1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e026bc65483aa734f45bb4084d1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048516bc65483aa734f45bb4084d1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url: null,
    name: "Baby Hello",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273da7eb53e2fe58022102f8a61",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02da7eb53e2fe58022102f8a61",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851da7eb53e2fe58022102f8a61",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3L4ZO0ZaSe1qeucpQK8tBR",
        },
        href: "https://api.spotify.com/v1/artists/3L4ZO0ZaSe1qeucpQK8tBR",
        id: "3L4ZO0ZaSe1qeucpQK8tBR",
        name: "DJ Neptune",
        type: "artist",
        uri: "spotify:artist:3L4ZO0ZaSe1qeucpQK8tBR",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5IccCciXwIjKPROLcD1Qao",
        },
        href: "https://api.spotify.com/v1/artists/5IccCciXwIjKPROLcD1Qao",
        id: "5IccCciXwIjKPROLcD1Qao",
        name: "C4 Pedro",
        type: "artist",
        uri: "spotify:artist:5IccCciXwIjKPROLcD1Qao",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c87a10c0e8bed0659cc92b1212d202017b046875?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Mia Mia (Bonus Track)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273972316adec6b97be15f3121e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02972316adec6b97be15f3121e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851972316adec6b97be15f3121e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6yd6lB5T20BZjUVkSlwojA",
        },
        href: "https://api.spotify.com/v1/artists/6yd6lB5T20BZjUVkSlwojA",
        id: "6yd6lB5T20BZjUVkSlwojA",
        name: "Bracket",
        type: "artist",
        uri: "spotify:artist:6yd6lB5T20BZjUVkSlwojA",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/79cnUHfO275AWiVSHR2lKh",
        },
        href: "https://api.spotify.com/v1/artists/79cnUHfO275AWiVSHR2lKh",
        id: "79cnUHfO275AWiVSHR2lKh",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:79cnUHfO275AWiVSHR2lKh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/4053648d271042a4f1c2a583c18f43bb9ab504c8?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Panya (feat. Tekno)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27353caf889859ad3bf3db60226",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0253caf889859ad3bf3db60226",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485153caf889859ad3bf3db60226",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/12b5b9c54a8bf1051d01ea9bc74ce45a5e99e783?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Fada Fada",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273da69352f8801a1c4a43f406a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02da69352f8801a1c4a43f406a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851da69352f8801a1c4a43f406a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url: null,
    name: "Ukwu",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27313af10a0d6646eba182ebb42",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0213af10a0d6646eba182ebb42",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485113af10a0d6646eba182ebb42",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url: null,
    name: "Dem Mama",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27313af10a0d6646eba182ebb42",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0213af10a0d6646eba182ebb42",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485113af10a0d6646eba182ebb42",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7gEgjd9W1P1iAD9FbubrqC",
        },
        href: "https://api.spotify.com/v1/artists/7gEgjd9W1P1iAD9FbubrqC",
        id: "7gEgjd9W1P1iAD9FbubrqC",
        name: "Timaya",
        type: "artist",
        uri: "spotify:artist:7gEgjd9W1P1iAD9FbubrqC",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a76f5bddc1dbbaf31ebe1c3612c5d5e0373b9f9f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sanko",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27378ed9b4b7819c24641d12e17",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0278ed9b4b7819c24641d12e17",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485178ed9b4b7819c24641d12e17",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2IK173RXLiCSQ8fhDlAb3s",
        },
        href: "https://api.spotify.com/v1/artists/2IK173RXLiCSQ8fhDlAb3s",
        id: "2IK173RXLiCSQ8fhDlAb3s",
        name: "Adekunle Gold",
        type: "artist",
        uri: "spotify:artist:2IK173RXLiCSQ8fhDlAb3s",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1X6cBGnXpEpN7CmflLKmLV",
        },
        href: "https://api.spotify.com/v1/artists/1X6cBGnXpEpN7CmflLKmLV",
        id: "1X6cBGnXpEpN7CmflLKmLV",
        name: "Kizz Daniel",
        type: "artist",
        uri: "spotify:artist:1X6cBGnXpEpN7CmflLKmLV",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/414888f4c0cb532c863c55301312d6c009f0dd17?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jore",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ae4a030dce8b92ee0c5095c8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ae4a030dce8b92ee0c5095c8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ae4a030dce8b92ee0c5095c8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/62s0EsXQNJEwy8fKZ386VU",
        },
        href: "https://api.spotify.com/v1/artists/62s0EsXQNJEwy8fKZ386VU",
        id: "62s0EsXQNJEwy8fKZ386VU",
        name: "Larry Gaaga",
        type: "artist",
        uri: "spotify:artist:62s0EsXQNJEwy8fKZ386VU",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/54OhlMlNRTktBpU6v4JqNK",
        },
        href: "https://api.spotify.com/v1/artists/54OhlMlNRTktBpU6v4JqNK",
        id: "54OhlMlNRTktBpU6v4JqNK",
        name: "Theresa Onuorah",
        type: "artist",
        uri: "spotify:artist:54OhlMlNRTktBpU6v4JqNK",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6acbdy69rtlv8m9EW31MYl",
        },
        href: "https://api.spotify.com/v1/artists/6acbdy69rtlv8m9EW31MYl",
        id: "6acbdy69rtlv8m9EW31MYl",
        name: "Phyno",
        type: "artist",
        uri: "spotify:artist:6acbdy69rtlv8m9EW31MYl",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c822d57baae44e547d3a4a408d344747048a4dcf?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Egedege (feat. Theresa Onuorah, Flavour & Phyno)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27395057b96181b1526cc72317d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0295057b96181b1526cc72317d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485195057b96181b1526cc72317d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IflU2YrY5Cyw7YoBICosV",
        },
        href: "https://api.spotify.com/v1/artists/6IflU2YrY5Cyw7YoBICosV",
        id: "6IflU2YrY5Cyw7YoBICosV",
        name: "Fally Ipupa",
        type: "artist",
        uri: "spotify:artist:6IflU2YrY5Cyw7YoBICosV",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5VhJOBcoFgOmRQ92nc5ro1",
        },
        href: "https://api.spotify.com/v1/artists/5VhJOBcoFgOmRQ92nc5ro1",
        id: "5VhJOBcoFgOmRQ92nc5ro1",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:5VhJOBcoFgOmRQ92nc5ro1",
      },
    ],
    preview_url: null,
    name: "Berna",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27319787db7d36341d0eba1cf33",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0219787db7d36341d0eba1cf33",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485119787db7d36341d0eba1cf33",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Baby Oku",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5f7059351b48acba59bbbe9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5f7059351b48acba59bbbe9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5f7059351b48acba59bbbe9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Looking Nyash",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27319787db7d36341d0eba1cf33",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0219787db7d36341d0eba1cf33",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485119787db7d36341d0eba1cf33",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6RZYvOZjLPCbBqbMpzf2li",
        },
        href: "https://api.spotify.com/v1/artists/6RZYvOZjLPCbBqbMpzf2li",
        id: "6RZYvOZjLPCbBqbMpzf2li",
        name: "Klever Jay",
        type: "artist",
        uri: "spotify:artist:6RZYvOZjLPCbBqbMpzf2li",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3c3e8c7442eb3c88b26f60dee3ee850d54032e75?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "KoniKoni Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27323e6ad106a311faca9defd6e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0223e6ad106a311faca9defd6e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485123e6ad106a311faca9defd6e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1BCva52wjhXRHz6pQxq9Rd",
        },
        href: "https://api.spotify.com/v1/artists/1BCva52wjhXRHz6pQxq9Rd",
        id: "1BCva52wjhXRHz6pQxq9Rd",
        name: "2kriss",
        type: "artist",
        uri: "spotify:artist:1BCva52wjhXRHz6pQxq9Rd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/e13854ee897265c5176b892ec994d446726895e4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Koni Koni Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2739a2ba65efedca10b9cea49d4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e029a2ba65efedca10b9cea49d4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048519a2ba65efedca10b9cea49d4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Jaiye",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e8f13c9cac22baffe6f45696",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e8f13c9cac22baffe6f45696",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e8f13c9cac22baffe6f45696",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Oyi (I Dey Catch Cold)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b083514bb0a91fe13be7facf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b083514bb0a91fe13be7facf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b083514bb0a91fe13be7facf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5x3IBKleImE4G6uwDcGZek",
        },
        href: "https://api.spotify.com/v1/artists/5x3IBKleImE4G6uwDcGZek",
        id: "5x3IBKleImE4G6uwDcGZek",
        name: "Jay Dey",
        type: "artist",
        uri: "spotify:artist:5x3IBKleImE4G6uwDcGZek",
      },
    ],
    preview_url: null,
    name: "My Woman Is Gone",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b083514bb0a91fe13be7facf",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b083514bb0a91fe13be7facf",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b083514bb0a91fe13be7facf",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Ashawo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738379b3a8fac20f324df52d9b",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028379b3a8fac20f324df52d9b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518379b3a8fac20f324df52d9b",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/38XiDu0kK3Z5jdHUDqBzNT",
        },
        href: "https://api.spotify.com/v1/artists/38XiDu0kK3Z5jdHUDqBzNT",
        id: "38XiDu0kK3Z5jdHUDqBzNT",
        name: "Lil Kesh",
        type: "artist",
        uri: "spotify:artist:38XiDu0kK3Z5jdHUDqBzNT",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url: null,
    name: "Shoki",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273668042654b5af4a9b13f2411",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02668042654b5af4a9b13f2411",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851668042654b5af4a9b13f2411",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4ovtyvs7j1jSmwhkBGHqSr",
        },
        href: "https://api.spotify.com/v1/artists/4ovtyvs7j1jSmwhkBGHqSr",
        id: "4ovtyvs7j1jSmwhkBGHqSr",
        name: "Olamide",
        type: "artist",
        uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/428dbdcbe52f48a14b4080eb19da0e6b60e807b4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Matters Arising",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ffb68a58cedd9e219a5e54de",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ffb68a58cedd9e219a5e54de",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ffb68a58cedd9e219a5e54de",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
    ],
    preview_url: null,
    name: "Shake",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e5f7059351b48acba59bbbe9",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e5f7059351b48acba59bbbe9",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e5f7059351b48acba59bbbe9",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01DTVE3KmoPogPZaOvMqO8",
        },
        href: "https://api.spotify.com/v1/artists/01DTVE3KmoPogPZaOvMqO8",
        id: "01DTVE3KmoPogPZaOvMqO8",
        name: "Sarkodie",
        type: "artist",
        uri: "spotify:artist:01DTVE3KmoPogPZaOvMqO8",
      },
    ],
    preview_url: null,
    name: "No Kissing Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273de61c5e142856c9cd7ed1998",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02de61c5e142856c9cd7ed1998",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851de61c5e142856c9cd7ed1998",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Alingo - Bonus",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dd5ab06427fcc4f6ed14b1ae",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dd5ab06427fcc4f6ed14b1ae",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dd5ab06427fcc4f6ed14b1ae",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/42IUN9kTPdUdI1kre6L7Wk",
        },
        href: "https://api.spotify.com/v1/artists/42IUN9kTPdUdI1kre6L7Wk",
        id: "42IUN9kTPdUdI1kre6L7Wk",
        name: "P-Square",
        type: "artist",
        uri: "spotify:artist:42IUN9kTPdUdI1kre6L7Wk",
      },
    ],
    preview_url: null,
    name: "Personally - Bonus",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273dd5ab06427fcc4f6ed14b1ae",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02dd5ab06427fcc4f6ed14b1ae",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851dd5ab06427fcc4f6ed14b1ae",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3CiFyk1IEct9LLWMPK7y8b",
        },
        href: "https://api.spotify.com/v1/artists/3CiFyk1IEct9LLWMPK7y8b",
        id: "3CiFyk1IEct9LLWMPK7y8b",
        name: "Sarkodie",
        type: "artist",
        uri: "spotify:artist:3CiFyk1IEct9LLWMPK7y8b",
      },
    ],
    preview_url: null,
    name: "Sake of Love",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e8f13c9cac22baffe6f45696",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e8f13c9cac22baffe6f45696",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e8f13c9cac22baffe6f45696",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5zqRdlPXeCIuxgaPimSKXj",
        },
        href: "https://api.spotify.com/v1/artists/5zqRdlPXeCIuxgaPimSKXj",
        id: "5zqRdlPXeCIuxgaPimSKXj",
        name: "Ycee",
        type: "artist",
        uri: "spotify:artist:5zqRdlPXeCIuxgaPimSKXj",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url: null,
    name: "Juice (feat. Maleek Berry)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d0e815876e1bb737fb7509bc",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d0e815876e1bb737fb7509bc",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d0e815876e1bb737fb7509bc",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0oKNR4ahj1CPnK2kQmbOfo",
        },
        href: "https://api.spotify.com/v1/artists/0oKNR4ahj1CPnK2kQmbOfo",
        id: "0oKNR4ahj1CPnK2kQmbOfo",
        name: "Flavour",
        type: "artist",
        uri: "spotify:artist:0oKNR4ahj1CPnK2kQmbOfo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3cAisWS37sGCCtRgWfvrod",
        },
        href: "https://api.spotify.com/v1/artists/3cAisWS37sGCCtRgWfvrod",
        id: "3cAisWS37sGCCtRgWfvrod",
        name: "Diamond Platnumz",
        type: "artist",
        uri: "spotify:artist:3cAisWS37sGCCtRgWfvrod",
      },
    ],
    preview_url: null,
    name: "Time to Party",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ec2ddc6f80111d9b893572b6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ec2ddc6f80111d9b893572b6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ec2ddc6f80111d9b893572b6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3bxZkzk0PLHcetO9o4oxXn",
        },
        href: "https://api.spotify.com/v1/artists/3bxZkzk0PLHcetO9o4oxXn",
        id: "3bxZkzk0PLHcetO9o4oxXn",
        name: "Reekado Banks",
        type: "artist",
        uri: "spotify:artist:3bxZkzk0PLHcetO9o4oxXn",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ac4e285db17191a43712ec9081a4ddaff613ae0b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Put In Pressure",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d892c6381d6f3a383bf4a937",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d892c6381d6f3a383bf4a937",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d892c6381d6f3a383bf4a937",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6a3lxcgxT39DZWG9QmqQer",
        },
        href: "https://api.spotify.com/v1/artists/6a3lxcgxT39DZWG9QmqQer",
        id: "6a3lxcgxT39DZWG9QmqQer",
        name: "Sunny Neji",
        type: "artist",
        uri: "spotify:artist:6a3lxcgxT39DZWG9QmqQer",
      },
    ],
    preview_url: null,
    name: "Oruka",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f4e7142d4d692f328b6efce1",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f4e7142d4d692f328b6efce1",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f4e7142d4d692f328b6efce1",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5CG9X521RDFWCuAhlo6QoR",
        },
        href: "https://api.spotify.com/v1/artists/5CG9X521RDFWCuAhlo6QoR",
        id: "5CG9X521RDFWCuAhlo6QoR",
        name: "Fela Kuti",
        type: "artist",
        uri: "spotify:artist:5CG9X521RDFWCuAhlo6QoR",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/56a7c53263f30f106055698b1f4f343bd7d54cbe?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Zombie",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e9be858dd835ca69419a389f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e9be858dd835ca69419a389f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e9be858dd835ca69419a389f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1A1IEvjX2MyuMXDDsSW8sD",
        },
        href: "https://api.spotify.com/v1/artists/1A1IEvjX2MyuMXDDsSW8sD",
        id: "1A1IEvjX2MyuMXDDsSW8sD",
        name: "Dr SID",
        type: "artist",
        uri: "spotify:artist:1A1IEvjX2MyuMXDDsSW8sD",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3orxvFDFViCLknRO2O2m8a",
        },
        href: "https://api.spotify.com/v1/artists/3orxvFDFViCLknRO2O2m8a",
        id: "3orxvFDFViCLknRO2O2m8a",
        name: "Don Jazzy",
        type: "artist",
        uri: "spotify:artist:3orxvFDFViCLknRO2O2m8a",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/63996ad4d65eea754935602a8733e9bbed3bd70f?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Surulere (feat. Don Jazzy)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273c24962afb324a9eeeb059c0d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02c24962afb324a9eeeb059c0d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851c24962afb324a9eeeb059c0d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2GOqGFrbvtO7nRZzsc5gEK",
        },
        href: "https://api.spotify.com/v1/artists/2GOqGFrbvtO7nRZzsc5gEK",
        id: "2GOqGFrbvtO7nRZzsc5gEK",
        name: "Chuddy K",
        type: "artist",
        uri: "spotify:artist:2GOqGFrbvtO7nRZzsc5gEK",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/49f2d971ce1e32563cdcd8d814219487c259124a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Gaga Crazy",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273afd86737acbb65948f8433e2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02afd86737acbb65948f8433e2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851afd86737acbb65948f8433e2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3kTUr1CJjfkESn31Xk6tij",
        },
        href: "https://api.spotify.com/v1/artists/3kTUr1CJjfkESn31Xk6tij",
        id: "3kTUr1CJjfkESn31Xk6tij",
        name: "Mo' Hits All Stars",
        type: "artist",
        uri: "spotify:artist:3kTUr1CJjfkESn31Xk6tij",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d896d4de411970096780a8ae900e5a92f1dc6012?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Bootycall",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27333aa9af1f32d9c3acaba42ff",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0233aa9af1f32d9c3acaba42ff",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485133aa9af1f32d9c3acaba42ff",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ea0a31a1717e65c2bff89d0e14fb81bf3ec82a6d?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ololufe",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273d731f8b48596a99f69006c3d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02d731f8b48596a99f69006c3d",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851d731f8b48596a99f69006c3d",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/6f8a0433b73f5e2aa8174b263e10216096c1f057?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Soke",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f0bda658ecd931b6d6c9d915",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f0bda658ecd931b6d6c9d915",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f0bda658ecd931b6d6c9d915",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ca223d76150b1e42d9f71ef0602137667d9489b4?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Wetin Man Go Do",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
    ],
    preview_url: null,
    name: "Leg Over",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27318da3976b5b8fabf31bc67e2",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0218da3976b5b8fabf31bc67e2",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485118da3976b5b8fabf31bc67e2",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6IhG3Yxm3UW98jhyBvrIut",
        },
        href: "https://api.spotify.com/v1/artists/6IhG3Yxm3UW98jhyBvrIut",
        id: "6IhG3Yxm3UW98jhyBvrIut",
        name: "Tekno",
        type: "artist",
        uri: "spotify:artist:6IhG3Yxm3UW98jhyBvrIut",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/13fd6dfc08b7e2113f8557f2e9206cc3b73052a1?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Short Skirt",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273ea0646b1e7a4e5d5732d8c87",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02ea0646b1e7a4e5d5732d8c87",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851ea0646b1e7a4e5d5732d8c87",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/0305f81401ac0dbd75625de7efee183fd3e26280?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Daddy Yo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27313c40d09756d267c10dab09c",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0213c40d09756d267c10dab09c",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485113c40d09756d267c10dab09c",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/9bd5a5a2a51b29a3f1555b77b5fd48b41411fa56?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "1 Milli",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1sCxnr0nRf5TADGH5CX3lr",
        },
        href: "https://api.spotify.com/v1/artists/1sCxnr0nRf5TADGH5CX3lr",
        id: "1sCxnr0nRf5TADGH5CX3lr",
        name: "Yonda",
        type: "artist",
        uri: "spotify:artist:1sCxnr0nRf5TADGH5CX3lr",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/a994eb64f47240c86eca3d060fbee3f6dd9880eb?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Animashaun (feat. Yonda)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/daa749ac6cf76454246060d2802086af608e5a35?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sope",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/01DTVE3KmoPogPZaOvMqO8",
        },
        href: "https://api.spotify.com/v1/artists/01DTVE3KmoPogPZaOvMqO8",
        id: "01DTVE3KmoPogPZaOvMqO8",
        name: "Sarkodie",
        type: "artist",
        uri: "spotify:artist:01DTVE3KmoPogPZaOvMqO8",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ac1e89dc3b222122a5aae40aec188789d5e1dc79?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Jonze Me",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27374a5a8db3d63c56b91f97f73",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0274a5a8db3d63c56b91f97f73",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485174a5a8db3d63c56b91f97f73",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DmouQfvRZ2y9auxK3DjuI",
        },
        href: "https://api.spotify.com/v1/artists/6DmouQfvRZ2y9auxK3DjuI",
        id: "6DmouQfvRZ2y9auxK3DjuI",
        name: "DMW",
        type: "artist",
        uri: "spotify:artist:6DmouQfvRZ2y9auxK3DjuI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/47fErV0VDIx6PmuhtWGTYu",
        },
        href: "https://api.spotify.com/v1/artists/47fErV0VDIx6PmuhtWGTYu",
        id: "47fErV0VDIx6PmuhtWGTYu",
        name: "Dremo",
        type: "artist",
        uri: "spotify:artist:47fErV0VDIx6PmuhtWGTYu",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3DNCUaKdMZcMVJIS7yTskd",
        },
        href: "https://api.spotify.com/v1/artists/3DNCUaKdMZcMVJIS7yTskd",
        id: "3DNCUaKdMZcMVJIS7yTskd",
        name: "Mayorkun",
        type: "artist",
        uri: "spotify:artist:3DNCUaKdMZcMVJIS7yTskd",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5ywjxFhmhHGQBsK3DundNf",
        },
        href: "https://api.spotify.com/v1/artists/5ywjxFhmhHGQBsK3DundNf",
        id: "5ywjxFhmhHGQBsK3DundNf",
        name: "Peruzzi",
        type: "artist",
        uri: "spotify:artist:5ywjxFhmhHGQBsK3DundNf",
      },
    ],
    preview_url: null,
    name: "Mind",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273af055c09db9172e463dda4b4",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02af055c09db9172e463dda4b4",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851af055c09db9172e463dda4b4",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6mMtnxEQkYoY5FfJIQ9Rhb",
        },
        href: "https://api.spotify.com/v1/artists/6mMtnxEQkYoY5FfJIQ9Rhb",
        id: "6mMtnxEQkYoY5FfJIQ9Rhb",
        name: "Runtown",
        type: "artist",
        uri: "spotify:artist:6mMtnxEQkYoY5FfJIQ9Rhb",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bfe6089b75532ebb9faadb7b510e953f8a9e5f11?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "For Life",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273b756d65e08bc4b1967dc509a",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02b756d65e08bc4b1967dc509a",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851b756d65e08bc4b1967dc509a",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/007166c94f3e0fcb4d9af361d0b1f92087f98033?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Rotate",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738c6781f76175e8209d2ca4a8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028c6781f76175e8209d2ca4a8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518c6781f76175e8209d2ca4a8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4TAoP0f9OuWZUesao43xUW",
        },
        href: "https://api.spotify.com/v1/artists/4TAoP0f9OuWZUesao43xUW",
        id: "4TAoP0f9OuWZUesao43xUW",
        name: "Mr Eazi",
        type: "artist",
        uri: "spotify:artist:4TAoP0f9OuWZUesao43xUW",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/c1793653dd4a9edf395f30024e004f22df8945bd?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Sample You",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273a58c7b283f77aa86fcbc8461",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02a58c7b283f77aa86fcbc8461",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851a58c7b283f77aa86fcbc8461",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1fYVmAFB7sC7eDoF3mJXla",
        },
        href: "https://api.spotify.com/v1/artists/1fYVmAFB7sC7eDoF3mJXla",
        id: "1fYVmAFB7sC7eDoF3mJXla",
        name: "Wande Coal",
        type: "artist",
        uri: "spotify:artist:1fYVmAFB7sC7eDoF3mJXla",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/b129853b1bfadadab97026f9f1db474d85b3688a?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Amorawa",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738c6781f76175e8209d2ca4a8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028c6781f76175e8209d2ca4a8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518c6781f76175e8209d2ca4a8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/520qA5VGL9iI0SbmEnTVNg",
        },
        href: "https://api.spotify.com/v1/artists/520qA5VGL9iI0SbmEnTVNg",
        id: "520qA5VGL9iI0SbmEnTVNg",
        name: "Maleek Berry",
        type: "artist",
        uri: "spotify:artist:520qA5VGL9iI0SbmEnTVNg",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/da76b67371855b83100f7343c7f9dfd5ac1ada8b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Somebody Falling",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273bbe245d72c69ac85da1f1b21",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02bbe245d72c69ac85da1f1b21",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851bbe245d72c69ac85da1f1b21",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1U82ia6FPmz01SybDM72r9",
        },
        href: "https://api.spotify.com/v1/artists/1U82ia6FPmz01SybDM72r9",
        id: "1U82ia6FPmz01SybDM72r9",
        name: "DJ Unbeetable",
        type: "artist",
        uri: "spotify:artist:1U82ia6FPmz01SybDM72r9",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2Z4SIKdYcugWq0fyvPpA7w",
        },
        href: "https://api.spotify.com/v1/artists/2Z4SIKdYcugWq0fyvPpA7w",
        id: "2Z4SIKdYcugWq0fyvPpA7w",
        name: "Sona",
        type: "artist",
        uri: "spotify:artist:2Z4SIKdYcugWq0fyvPpA7w",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/bd7f245b5021d3d25497e819d34164953a446847?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "My Dear (feat. Sona)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273aba55ee71486ce5dfa764924",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02aba55ee71486ce5dfa764924",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851aba55ee71486ce5dfa764924",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2hKQc001G7ggs3ZyxMdkGq",
        },
        href: "https://api.spotify.com/v1/artists/2hKQc001G7ggs3ZyxMdkGq",
        id: "2hKQc001G7ggs3ZyxMdkGq",
        name: "Patoranking",
        type: "artist",
        uri: "spotify:artist:2hKQc001G7ggs3ZyxMdkGq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp",
        },
        href: "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        id: "3tVQdUvClmAT7URs9V3rsp",
        name: "Wizkid",
        type: "artist",
        uri: "spotify:artist:3tVQdUvClmAT7URs9V3rsp",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/1940fc31c8c3279291d3423d8472a08c5dd10ec2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "This Kind Luv",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2730eef59a6096ed7be10d91d3e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e020eef59a6096ed7be10d91d3e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048510eef59a6096ed7be10d91d3e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4mSWNal2Ixxf1zrXSTLoep",
        },
        href: "https://api.spotify.com/v1/artists/4mSWNal2Ixxf1zrXSTLoep",
        id: "4mSWNal2Ixxf1zrXSTLoep",
        name: "Zlatan",
        type: "artist",
        uri: "spotify:artist:4mSWNal2Ixxf1zrXSTLoep",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/26596c4a95e494635d6b67267bd277ee94872dfe?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Killin Dem (feat. Zlatan)",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/481afb9cc86e17f2716ac328c22a3b13f2d00c07?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Omo",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
        },
        href: "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
        id: "3wcj11K77LjEY1PkEazffa",
        name: "Burna Boy",
        type: "artist",
        uri: "spotify:artist:3wcj11K77LjEY1PkEazffa",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/9f18f23d0b4943c057a1839d67e549d43c3437b2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Collateral Damage",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27366f158d5ef990cca0f678dab",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0266f158d5ef990cca0f678dab",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485166f158d5ef990cca0f678dab",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/ea8a8bff007ceaeb342c54cabd5c0b2ecab940ff?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Green Light Riddim",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273073398181f451cdd4b31b4d8",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02073398181f451cdd4b31b4d8",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851073398181f451cdd4b31b4d8",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Y3agQaa6g2r0YmHPOO9rh",
        },
        href: "https://api.spotify.com/v1/artists/0Y3agQaa6g2r0YmHPOO9rh",
        id: "0Y3agQaa6g2r0YmHPOO9rh",
        name: "Davido",
        type: "artist",
        uri: "spotify:artist:0Y3agQaa6g2r0YmHPOO9rh",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/3cc89d18c23e9a8cfdc21e09ebbba89e315e6be2?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "FEM",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273fc0ebeeca62a0a4af6119b0e",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02fc0ebeeca62a0a4af6119b0e",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851fc0ebeeca62a0a4af6119b0e",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5CG9X521RDFWCuAhlo6QoR",
        },
        href: "https://api.spotify.com/v1/artists/5CG9X521RDFWCuAhlo6QoR",
        id: "5CG9X521RDFWCuAhlo6QoR",
        name: "Fela Kuti",
        type: "artist",
        uri: "spotify:artist:5CG9X521RDFWCuAhlo6QoR",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5lhLOXDLaw0yjEXd6xTasV",
        },
        href: "https://api.spotify.com/v1/artists/5lhLOXDLaw0yjEXd6xTasV",
        id: "5lhLOXDLaw0yjEXd6xTasV",
        name: "Afrika 70",
        type: "artist",
        uri: "spotify:artist:5lhLOXDLaw0yjEXd6xTasV",
      },
    ],
    preview_url: null,
    name: "Lady",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2738f82a5c1d701d71ba554e220",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e028f82a5c1d701d71ba554e220",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048518f82a5c1d701d71ba554e220",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4G4MrV1YIxHLGXRlhrIPmC",
        },
        href: "https://api.spotify.com/v1/artists/4G4MrV1YIxHLGXRlhrIPmC",
        id: "4G4MrV1YIxHLGXRlhrIPmC",
        name: "Dwin, The Stoic",
        type: "artist",
        uri: "spotify:artist:4G4MrV1YIxHLGXRlhrIPmC",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/fc815a67a0118434467ec102c7f05da74e781db5?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Stay the Night",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273e419c42129fdc524ffb25fd6",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02e419c42129fdc524ffb25fd6",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851e419c42129fdc524ffb25fd6",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2LE8mP1xv4ZOZ9vJ9JKfOe",
        },
        href: "https://api.spotify.com/v1/artists/2LE8mP1xv4ZOZ9vJ9JKfOe",
        id: "2LE8mP1xv4ZOZ9vJ9JKfOe",
        name: "Adewale Ayuba",
        type: "artist",
        uri: "spotify:artist:2LE8mP1xv4ZOZ9vJ9JKfOe",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/f3c4147352a08a8129c7ca78ea22e922b6680f9b?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Ijo Fuji A",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b273f69a40eaa24cc95f76b4892f",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e02f69a40eaa24cc95f76b4892f",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d00004851f69a40eaa24cc95f76b4892f",
        width: 64,
      },
    ],
  },
  {
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1XavfPKBpNjkOfxHINlMHF",
        },
        href: "https://api.spotify.com/v1/artists/1XavfPKBpNjkOfxHINlMHF",
        id: "1XavfPKBpNjkOfxHINlMHF",
        name: "Joeboy",
        type: "artist",
        uri: "spotify:artist:1XavfPKBpNjkOfxHINlMHF",
      },
    ],
    preview_url:
      "https://p.scdn.co/mp3-preview/d7398c267cc64a7b82c279458d05227a9c0747ff?cid=1304f0b3e24d4302add7b20fb048a64a",
    name: "Baby",
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27336f25ed3134b78ca8d6874a7",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e0236f25ed3134b78ca8d6874a7",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d0000485136f25ed3134b78ca8d6874a7",
        width: 64,
      },
    ],
  },
];

export default function TestTrackSelector({
  onSelect,
}: {
  onSelect: (url: string) => void;
}) {
  return (
    <Box>
      {tracks
        .filter((t) => !!t.preview_url)
        .slice(0, 8)
        .map((track, index) => (
          <Box key={index}>
            <button onClick={() => onSelect(track.preview_url!)}>
              {track.name}
            </button>
          </Box>
        ))}
    </Box>
  );
}
