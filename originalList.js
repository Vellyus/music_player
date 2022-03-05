const originalList =
  [
    {
      number: 0,
      artist: "Linkin Park",
      title: "Crawling",
      link: "https://www.youtube.com/watch?v=Gd9OhYroLN0",
    },

    {
      number: 1,
      artist: "Linkin Park",
      title: "Pushing Me Away",
      link: "https://www.youtube.com/watch?v=Ve1LNJEIKUE",
    },

    {
      number: 2,
      artist: "Linkin Park",
      title: "Papercut",
      link: "https://www.youtube.com/watch?v=vjVkXlxsO8Q",
    },

    {
      number: 3,
      artist: "Linkin Park",
      title: "One Step Closer",
      link: "https://www.youtube.com/watch?v=4qlCC1GOwFw",
    },

    {
      number: 4,
      artist: "Linkin Park",
      title: "With You",
      link: "https://www.youtube.com/watch?v=M8UTS2iFXOo",
    },

    {
      number: 5,
      artist: "Linkin Park",
      title: "Runaway",
      link: "https://www.youtube.com/watch?v=R95KftL2H1g",
    },

    {
      number: 6,
      artist: "Linkin Park",
      title: "By Msyelf",
      link: "https://www.youtube.com/watch?v=wWBp-nlGX1o",
    },

    {
      number: 7,
      artist: "Linkin Park",
      title: "In The End",
      link: "https://www.youtube.com/watch?v=eVTXPUF4Oz4",
    },

    {
      number: 8,
      artist: "Linkin Park",
      title: "A Place For My Head",
      link: "https://www.youtube.com/watch?v=3t2WkCudwfY",
    },

    {
      number: 9,
      artist: "Linkin Park",
      title: "Don't Stay",
      link: "https://www.youtube.com/watch?v=oWfGOVWrueo",
    },

    {
      number: 10,
      artist: "Linkin Park",
      title: "Lying From You",
      link: "https://www.youtube.com/watch?v=1V4FLUOlMks",
    },

    {
      number: 11,
      artist: "Linkin Park",
      title: "Easier To Run",
      link: "https://www.youtube.com/watch?v=U5zdmjVeQzE",
    },

    {
      number: 12,
      artist: "Linkin Park",
      title: "Faint",
      link: "https://www.youtube.com/watch?v=LYU-8IFcDPw",
    },

    {
      number: 13,
      artist: "Linkin Park",
      title: "Figure.09",
      link: "https://www.youtube.com/watch?v=LpC0SKU6O00",
    },

    {
      number: 14,
      artist: "Linkin Park",
      title: "From The inside",
      link: "https://www.youtube.com/watch?v=YLHpvjrFpe0",
    },

    {
      number: 15,
      artist: "Linkin Park",
      title: "Nobody's Listening",
      link: "https://www.youtube.com/watch?v=QJ87793QXes",
    },

    {
      number: 16,
      artist: "Linkin Park",
      title: "Numb",
      link: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    },

    {
      number: 17,
      artist: "Linkin Park",
      title: "QWERTY",
      link: "https://www.youtube.com/watch?v=-ksrXzoQbw8",
    },

    {
      number: 18,
      artist: "Linkin Park",
      title: "Given Up",
      link: "https://www.youtube.com/watch?v=0xyxtzD54rM",
    },

    {
      number: 19,
      artist: "Linkin Park",
      title: "Leave Out All The Rest",
      link: "https://www.youtube.com/watch?v=yZIummTz9mM",
    },

    {
      number: 20,
      artist: "Linkin Park",
      title: "Bleed It Out",
      link: "https://www.youtube.com/watch?v=OnuuYcqhzCE",
    },

    {
      number: 21,
      artist: "Linkin Park",
      title: "Shadow Of The Day",
      link: "https://www.youtube.com/watch?v=n1PCW0C1aiM",
    },

    {
      number: 22,
      artist: "Linkin Park",
      title: "What I've Done",
      link: "https://www.youtube.com/watch?v=8sgycukafqQ",
    },

    {
      number: 23,
      artist: "Linkin Park",
      title: "No More Sorrow",
      link: "https://www.youtube.com/watch?v=ZfCQu9xwSU0",
    },

    {
      number: 24,
      artist: "Linkin Park",
      title: "New Divide",
      link: "https://www.youtube.com/watch?v=ysSxxIqKNN0",
    },

    {
      number: 25,
      artist: "Linkin Park",
      title: "Not Alone",
      link: "https://www.youtube.com/watch?v=lrbL1s9qwBs",
    },

    {
      number: 26,
      artist: "Linkin Park",
      title: "Burning In The Skies",
      link: "https://www.youtube.com/watch?v=kh_YCSW5lPc",
    },

    {
      number: 27,
      artist: "Linkin Park",
      title: "When They Come For Me",
      link: "https://www.youtube.com/watch?v=2cC4LQV2tf8",
    },

    {
      number: 28,
      artist: "Linkin Park",
      title: "Robot Boy",
      link: "https://www.youtube.com/watch?v=G-bEnfTJR2A",
    },

    {
      number: 29,
      artist: "Linkin Park",
      title: "Waiting For The End",
      link: "https://www.youtube.com/watch?v=5qF_qbaWt3Q",
    },

    {
      number: 30,
      artist: "Linkin Park",
      title: "Blackout",
      link: "https://www.youtube.com/watch?v=FZyDiuzpHCg",
    },

    {
      number: 31,
      artist: "Linkin Park",
      title: "Wretches And Kings",
      link: "https://www.youtube.com/watch?v=er-TinIKvCw",
    },

    {
      number: 32,
      artist: "Linkin Park",
      title: "Iridescent",
      link: "https://www.youtube.com/watch?v=xLYiIBCN9ec",
    },

    {
      number: 33,
      artist: "Linkin Park",
      title: "The Catalyst",
      link: "https://www.youtube.com/watch?v=51iquRYKPbs",
    },

    {
      number: 34,
      artist: "Linkin Park",
      title: "The Messenger",
      link: "https://www.youtube.com/watch?v=KDOkMSf-F14",
    },

    {
      number: 35,
      artist: "Linkin Park",
      title: "Blackbirds",
      link: "https://www.youtube.com/watch?v=38qmr_mzkCQ",
    },

    {
      number: 36,
      artist: "Linkin Park",
      title: "Lost In The Echo",
      link: "https://www.youtube.com/watch?v=co4YpHTqmfQ",
    },

    {
      number: 37,
      artist: "Linkin Park",
      title: "In My Remains",
      link: "https://www.youtube.com/watch?v=QLFiuNdQrzI",
    },

    {
      number: 38,
      artist: "Linkin Park",
      title: "Burn It Down",
      link: "https://www.youtube.com/watch?v=dxytyRy-O1k",
    },

    {
      number: 39,
      artist: "Linkin Park",
      title: "Lies Greed Misery",
      link: "https://www.youtube.com/watch?v=9Dq9q6afIP8",
    },

    {
      number: 40,
      artist: "Linkin Park",
      title: "I'll Be Gone",
      link: "https://www.youtube.com/watch?v=Y1wM5ljye28",
    },

    {
      number: 41,
      artist: "Linkin Park",
      title: "Castle Of Glass",
      link: "https://www.youtube.com/watch?v=ScNNfyq3d_w",
    },

    {
      number: 42,
      artist: "Linkin Park",
      title: "Victimized",
      link: "https://www.youtube.com/watch?v=-6eUCOFXuxo",
    },

    {
      number: 43,
      artist: "Linkin Park",
      title: "Roads Untraveled",
      link: "https://www.youtube.com/watch?v=iFiNlLt8sJw",
    },

    {
      number: 44,
      artist: "Linkin Park",
      title: "Skin To Bone",
      link: "https://www.youtube.com/watch?v=NwK4mxK7c2w",
    },

    {
      number: 45,
      artist: "Linkin Park",
      title: "Until It Breaks",
      link: "https://www.youtube.com/watch?v=ZEQJm49_9OE",
    },

    {
      number: 46,
      artist: "Linkin Park",
      title: "Powerless",
      link: "https://www.youtube.com/watch?v=32BOmle7Z6w",
    },

    {
      number: 47,
      artist: "Linkin Park",
      title: "Guilty All The Same",
      link: "https://www.youtube.com/watch?v=cEaEdLQbAFM",
    },

    {
      number: 48,
      artist: "Linkin Park",
      title: "Until It's Gone",
      link: "https://www.youtube.com/watch?v=oM-XJD4J36U",
    },

    {
      number: 49,
      artist: "Linkin Park",
      title: "Final Masquerade",
      link: "https://www.youtube.com/watch?v=i8q8fFs3kTM",
    },

    {
      number: 50,
      artist: "Linkin Park",
      title: "Across The Line",
      link: "https://www.youtube.com/watch?v=71CvlYX1Bqc",
    },

    {
      number: 51,
      artist: "Linkin Park",
      title: "Headstrong (Trapt Cover)",
      link: "https://www.youtube.com/watch?v=LTAkXxRt5Ic&ab_channel=aleee18ify",
    },

    {
      number: 52,
      artist: "Ghost",
      title: "Square Hammer",
      link: "https://www.youtube.com/watch?v=VqoyKzgkqR4",
    },

    {
      number: 53,
      artist: "Ghost",
      title: "Infestissumam",
      link: "https://www.youtube.com/watch?v=a5mAxXU9-yU",
    },

    {
      number: 54,
      artist: "Ghost",
      title: "Per Aspera Ad Inferi",
      link: "https://www.youtube.com/watch?v=LStgyahX8Vc",
    },

    {
      number: 55,
      artist: "Ghost",
      title: "Secular Haze",
      link: "https://www.youtube.com/watch?v=vyQZ13jobIY",
    },

    {
      number: 56,
      artist: "Ghost",
      title: "Jigolo Har Migiddo",
      link: "https://www.youtube.com/watch?v=WKxkj4OaAq4",
    },

    {
      number: 57,
      artist: "Ghost",
      title: "Guleh/Zombie Queen",
      link: "https://www.youtube.com/watch?v=dQDaWoWwqdM",
    },

    {
      number: 58,
      artist: "Ghost",
      title: "Year Zero",
      link: "https://www.youtube.com/watch?v=gkBt7yLXyDk",
    },

    {
      number: 59,
      artist: "Ghost",
      title: "Body And Blood",
      link: "https://www.youtube.com/watch?v=S0UgjyL4d1g",
    },

    {
      number: 60,
      artist: "Ghost",
      title: "Idolatrine",
      link: "https://www.youtube.com/watch?v=5DU8TGhdN9w",
    },

    {
      number: 61,
      artist: "Ghost",
      title: "Depth Of Satan's Eyes",
      link: "https://www.youtube.com/watch?v=tKyJ_zXoXB4",
    },

    {
      number: 62,
      artist: "Ghost",
      title: "Monstrance Clock",
      link: "https://www.youtube.com/watch?v=KCkoIEbjbsM",
    },

    {
      number: 63,
      artist: "Ghost",
      title: "La Manta Mori",
      link: "https://www.youtube.com/watch?v=cPKZPQwFB04",
    },

    {
      number: 64,
      artist: "Ghost",
      title: "I'm A Marionette (ABBA Cover)",
      link: "https://www.youtube.com/watch?v=Ou5T1SeGhOo",
    },

    {
      number: 65,
      artist: "Ghost",
      title: "Spirit",
      link: "https://www.youtube.com/watch?v=DEwk1ZEnBWE",
    },

    {
      number: 66,
      artist: "Ghost",
      title: "From The Pinnacle To The Pit",
      link: "https://www.youtube.com/watch?v=6A-IoOEPbUs",
    },

    {
      number: 67,
      artist: "Ghost",
      title: "Cirice",
      link: "https://www.youtube.com/watch?v=-0Ao4t_fe0I",
    },

    {
      number: 68,
      artist: "Ghost",
      title: "Spoksonat",
      link: "https://www.youtube.com/watch?v=QachXlPSP_M",
    },

    {
      number: 69,
      artist: "Ghost",
      title: "He Is",
      link: "https://www.youtube.com/watch?v=7hMaHDTw-pI",
    },

    {
      number: 70,
      artist: "Ghost",
      title: "Mummy Dust",
      link: "https://www.youtube.com/watch?v=6NzD7zLww2A",
    },

    {
      number: 71,
      artist: "Ghost",
      title: "Majesty",
      link: "https://www.youtube.com/watch?v=qS5-QmkKzJQ",
    },

    {
      number: 72,
      artist: "Ghost",
      title: "Devil Church",
      link: "https://www.youtube.com/watch?v=rZdG1dUFtx0",
    },

    {
      number: 73,
      artist: "Ghost",
      title: "Absolution",
      link: "https://www.youtube.com/watch?v=PR2rm8aXp6s",
    },

    {
      number: 74,
      artist: "Ghost",
      title: "Deus In Absentia",
      link: "https://www.youtube.com/watch?v=1jp4sS7xfio",
    },

    {
      number: 75,
      artist: "Ghost",
      title: "Rats",
      link: "https://www.youtube.com/watch?v=C_ijc7A5oAc",
    },

    {
      number: 76,
      artist: "Ghost",
      title: "Faith",
      link: "https://www.youtube.com/watch?v=k72ytAFMCI0&ab_channel=Ghost",
    },

    {
      number: 77,
      artist: "Ghost",
      title: "See The Light",
      link: "https://www.youtube.com/watch?v=YNOLfVAv_28",
    },

    {
      number: 78,
      artist: "Ghost",
      title: "Miasma",
      link: "https://www.youtube.com/watch?v=5CWWukDu8qQ",
    },

    {
      number: 79,
      artist: "Ghost",
      title: "Dance Macabre",
      link: "https://www.youtube.com/watch?v=7Gr63DiEUxw",
    },

    {
      number: 80,
      artist: "Ghost",
      title: "Pro Memoria",
      link: "https://www.youtube.com/watch?v=leUKmlDGHiI",
    },

    {
      number: 81,
      artist: "Ghost",
      title: "Witch Image",
      link: "https://www.youtube.com/watch?v=tMwmEcKVgtM",
    },

    {
      number: 82,
      artist: "Ghost",
      title: "Helvetesfonster",
      link: "https://www.youtube.com/watch?v=tP_Tz35iob4",
    },

    {
      number: 83,
      artist: "Ghost",
      title: "Life Eternal",
      link: "https://www.youtube.com/watch?v=RL8Ct8dKmAk",
    },

    {
      number: 84,
      artist: "Ghost",
      title: "Deus Culpa",
      link: "https://www.youtube.com/watch?v=-vHe7MDTurQ",
    },

    {
      number: 85,
      artist: "Ghost",
      title: "Con Clavi Con Dio",
      link: "https://www.youtube.com/watch?v=nhuO03S4KmM",
    },

    {
      number: 86,
      artist: "Ghost",
      title: "Ritual",
      link: "https://www.youtube.com/watch?v=0PakoE1eBps",
    },

    {
      number: 87,
      artist: "Ghost",
      title: "Elizabeth",
      link: "https://www.youtube.com/watch?v=quyhwEH4dlo",
    },

    {
      number: 88,
      artist: "Ghost",
      title: "Stand By Him",
      link: "https://www.youtube.com/watch?v=J_uKtPdlfvA",
    },

    {
      number: 89,
      artist: "Ghost",
      title: "Satan Prayer",
      link: "https://www.youtube.com/watch?v=vjW4W9YsxZI",
    },

    {
      number: 90,
      artist: "Ghost",
      title: "Death Knell",
      link: "https://www.youtube.com/watch?v=qJy-hdKT5wM",
    },

    {
      number: 91,
      artist: "Ghost",
      title: "Prime Mover",
      link: "https://www.youtube.com/watch?v=hRkpgndVw8Y",
    },

    {
      number: 92,
      artist: "Ghost",
      title: "Genesis",
      link: "https://www.youtube.com/watch?v=4FwwZMaHsDs",
    },

    {
      number: 93,
      artist: "Helloween",
      title: "Starlight",
      link: "https://www.youtube.com/watch?v=rncmD8Y-NV0",
    },

    {
      number: 94,
      artist: "Helloween",
      title: "Murderer",
      link: "https://www.youtube.com/watch?v=yNsCdUok7lc",
    },

    {
      number: 95,
      artist: "Helloween",
      title: "Warrior",
      link: "https://www.youtube.com/watch?v=dumV-H-mZX4",
    },

    {
      number: 96,
      artist: "Helloween",
      title: "Victim Of Fate",
      link: "https://www.youtube.com/watch?v=ToWpMiN5a3Y",
    },

    {
      number: 97,
      artist: "Helloween",
      title: "Cry For Freedom",
      link: "https://www.youtube.com/watch?v=raacM4mEQ5c",
    },

    {
      number: 98,
      artist: "Helloween",
      title: "Ride The Sky",
      link: "https://www.youtube.com/watch?v=ug_JdOQDxwY",
    },

    {
      number: 99,
      artist: "Helloween",
      title: "Reptile",
      link: "https://www.youtube.com/watch?v=U2iMKZf6T-g&ab_channel=HelloweenWeb",
    },

    {
      number: 100,
      artist: "Helloween",
      title: "Guardians",
      link: "https://www.youtube.com/watch?v=9ofHhS-3zdQ&ab_channel=nnxzm",
    },

    {
      number: 101,
      artist: "Helloween",
      title: "Phantoms Of Death",
      link: "https://www.youtube.com/watch?v=Qbthekf4lms",
    },

    {
      number: 102,
      artist: "Helloween",
      title: "Metal Invaders",
      link: "https://www.youtube.com/watch?v=vcvWf4UrQO8",
    },

    {
      number: 103,
      artist: "Helloween",
      title: "Gorgar",
      link: "https://www.youtube.com/watch?v=V-11P0ZMMlM",
    },

    {
      number: 104,
      artist: "Helloween",
      title: "Heavy Metal",
      link: "https://www.youtube.com/watch?v=vZsLUuRzrqA",
    },

    {
      number: 105,
      artist: "Helloween",
      title: "How Many Tears",
      link: "https://www.youtube.com/watch?v=rOHEe2txc04",
    },

    {
      number: 106,
      artist: "Helloween",
      title: "I'm Alive",
      link: "https://www.youtube.com/watch?v=heZQVYvHPsc",
    },

    {
      number: 107,
      artist: "Helloween",
      title: "A Little Time",
      link: "https://www.youtube.com/watch?v=l_bJVVpSi7k",
    },

    {
      number: 108,
      artist: "Helloween",
      title: "Twilight Of The Gods",
      link: "https://www.youtube.com/watch?v=qd0MGxtfC3k",
    },

    {
      number: 109,
      artist: "Helloween",
      title: "A Tale That Wans't Right",
      link: "https://www.youtube.com/watch?v=MywB9sSVBcc",
    },

    {
      number: 110,
      artist: "Helloween",
      title: "Future World",
      link: "https://www.youtube.com/watch?v=_9h3jRaZyB4",
    },

    {
      number: 111,
      artist: "Helloween",
      title: "Follow The Sign",
      link: "https://www.youtube.com/watch?v=LCkUZBCop_A",
    },

    {
      number: 112,
      artist: "Helloween",
      title: "Eagle Fly Free",
      link: "https://www.youtube.com/watch?v=DOi-UoGDINE",
    },

    {
      number: 113,
      artist: "Helloween",
      title: "You Always Walk Alone",
      link: "https://www.youtube.com/watch?v=gw5xVoBlf8M",
    },

    {
      number: 114,
      artist: "Helloween",
      title: "Rise And Fall",
      link: "https://www.youtube.com/watch?v=UeR4231g4j4",
    },

    {
      number: 115,
      artist: "Helloween",
      title: "Dr. Stein",
      link: "https://www.youtube.com/watch?v=3FFTQRmsK0k",
    },

    {
      number: 116,
      artist: "Helloween",
      title: "We Got The Right",
      link: "https://www.youtube.com/watch?v=aX2FnHJ6KHs",
    },

    {
      number: 117,
      artist: "Helloween",
      title: "Save Us",
      link: "https://www.youtube.com/watch?v=jcrnTloyLPI",
    },

    {
      number: 118,
      artist: "Helloween",
      title: "March Of Time",
      link: "https://www.youtube.com/watch?v=3sQ5iaynO8k",
    },

    {
      number: 119,
      artist: "Helloween",
      title: "I Want Out",
      link: "https://www.youtube.com/watch?v=FjV8SHjHvHk",
    },

    {
      number: 120,
      artist: "Helloween",
      title: "Keeper Of The Seven Keys",
      link: "https://www.youtube.com/watch?v=ZUzpf3mMsxA",
    },

    {
      number: 121,
      artist: "Helloween",
      title: "We Burn",
      link: "https://www.youtube.com/watch?v=DUAyb995X7k",
    },

    {
      number: 122,
      artist: "Helloween",
      title: "Steel Tormentor",
      link: "https://www.youtube.com/watch?v=1Rce-Y6LKVo",
    },

    {
      number: 123,
      artist: "Helloween",
      title: "Wake Up The Mountain",
      link: "https://www.youtube.com/watch?v=3jEM4p_YNas",
    },

    {
      number: 124,
      artist: "Helloween",
      title: "Power",
      link: "https://www.youtube.com/watch?v=WmP4iTGY97Y",
    },

    {
      number: 125,
      artist: "Helloween",
      title: "Forever And One",
      link: "https://www.youtube.com/watch?v=-Dl6CLWLMzk",
    },

    {
      number: 126,
      artist: "Helloween",
      title: "Before The War",
      link: "https://www.youtube.com/watch?v=mSXIncNMlx8",
    },

    {
      number: 127,
      artist: "Helloween",
      title: "A Million To One",
      link: "https://www.youtube.com/watch?v=fV-30_4lzO8",
    },

    {
      number: 128,
      artist: "Helloween",
      title: "Anything My Mama Don't Like",
      link: "https://www.youtube.com/watch?v=1wZubwEOUm8",
    },

    {
      number: 129,
      artist: "Helloween",
      title: "Kings Will Be Kings",
      link: "https://www.youtube.com/watch?v=4YkB261IcXk",
    },

    {
      number: 130,
      artist: "Helloween",
      title: "Mission Motherland",
      link: "https://www.youtube.com/watch?v=lERodB5TlR0",
    },

    {
      number: 131,
      artist: "Helloween",
      title: "If I Knew",
      link: "https://www.youtube.com/watch?v=xQv1co6qQ-0",
    },

    {
      number: 132,
      artist: "Helloween",
      title: "The Time Of The Oath",
      link: "https://www.youtube.com/watch?v=cxhzm2x2_5g",
    },

    {
      number: 133,
      artist: "Helloween",
      title: "Mr. Torture",
      link: "https://www.youtube.com/watch?v=-ocvm63GCGE",
    },

    {
      number: 134,
      artist: "Helloween",
      title: "All Over The Nations",
      link: "https://www.youtube.com/watch?v=GDtH4NUrPB4",
    },

    {
      number: 135,
      artist: "Helloween",
      title: "Escalation 666",
      link: "https://www.youtube.com/watch?v=CKNzWO2qOpQ",
    },

    {
      number: 136,
      artist: "Helloween",
      title: "Mirror Mirror",
      link: "https://www.youtube.com/watch?v=AslgZ9fft8g",
    },

    {
      number: 137,
      artist: "Helloween",
      title: "If I Could Fly",
      link: "https://www.youtube.com/watch?v=23Cca-7UX-E",
    },

    {
      number: 138,
      artist: "Helloween",
      title: "Salvation",
      link: "https://www.youtube.com/watch?v=G1uKfkj5tl4",
    },

    {
      number: 139,
      artist: "Helloween",
      title: "The Departed",
      link: "https://www.youtube.com/watch?v=yhAEqelE0cA",
    },

    {
      number: 140,
      artist: "Helloween",
      title: "I Live For Your Pain",
      link: "https://www.youtube.com/watch?v=CxcqDYwhj9I",
    },

    {
      number: 141,
      artist: "Helloween",
      title: "We Damn The Night",
      link: "https://www.youtube.com/watch?v=ShXSKfcTzoU",
    },

    {
      number: 142,
      artist: "Helloween",
      title: "Immortal",
      link: "https://www.youtube.com/watch?v=0RqvhDi-Qnk",
    },

    {
      number: 143,
      artist: "Helloween",
      title: "The Dark Ride",
      link: "https://www.youtube.com/watch?v=PHJin6xn20Q",
    },

    {
      number: 144,
      artist: "Helloween",
      title: "Hell Was Made In Heaven",
      link: "https://www.youtube.com/watch?v=OjYpp0nOQBM",
    },

    {
      number: 145,
      artist: "Helloween",
      title: "The King For A 1000 Years",
      link: "https://www.youtube.com/watch?v=O5aIZv-Auxk",
    },

    {
      number: 146,
      artist: "Helloween",
      title: "The Invisible Man",
      link: "https://www.youtube.com/watch?v=CowAOr-vDOE",
    },

    {
      number: 147,
      artist: "Helloween",
      title: "Mrs. God",
      link: "https://www.youtube.com/watch?v=lC7wTz4A3kY",
    },

    {
      number: 148,
      artist: "Helloween",
      title: "Light The Universe",
      link: "https://www.youtube.com/watch?v=-qIHXR8jQr0",
    },

    {
      number: 149,
      artist: "Helloween",
      title: "Where The Sinners Go",
      link: "https://www.youtube.com/watch?v=GV3xqpzoMPs",
    },

    {
      number: 150,
      artist: "Helloween",
      title: "Nabataea",
      link: "https://www.youtube.com/watch?v=4PKNaVHi4Os",
    },

    {
      number: 151,
      artist: "Helloween",
      title: "World Of War",
      link: "https://www.youtube.com/watch?v=cQ358hCNCnI",
    },

    {
      number: 152,
      artist: "Helloween",
      title: "Live Now!",
      link: "https://www.youtube.com/watch?v=nN_MzG2coNs",
    },

    {
      number: 153,
      artist: "Helloween",
      title: "Far From The Stars",
      link: "https://www.youtube.com/watch?v=BmVnlD3ckqI",
    },

    {
      number: 154,
      artist: "Helloween",
      title: "Burning Sun",
      link: "https://www.youtube.com/watch?v=KjZTk8Lo9yA",
    },

    {
      number: 155,
      artist: "Helloween",
      title: "Waiting For The Thunder",
      link: "https://www.youtube.com/watch?v=57J_DgehlRE",
    },

    {
      number: 156,
      artist: "Helloween",
      title: "Hold Me In Your Arms",
      link: "https://www.youtube.com/watch?v=Y9PUC78Bin8",
    },

    {
      number: 157,
      artist: "Helloween",
      title: "Wanna Be God",
      link: "https://www.youtube.com/watch?v=WFCQoMh1HxE",
    },

    {
      number: 158,
      artist: "Helloween",
      title: "Straight Out Of Hell",
      link: "https://www.youtube.com/watch?v=RLGuFz-7-m4",
    },

    {
      number: 159,
      artist: "Helloween",
      title: "Asshole",
      link: "https://www.youtube.com/watch?v=3BNzmrlVOEc",
    },

    {
      number: 160,
      artist: "Helloween",
      title: "Years",
      link: "https://www.youtube.com/watch?v=RHVUAoiydFE",
    },

    {
      number: 161,
      artist: "Helloween",
      title: "Make Fire Catch The Fly",
      link: "https://www.youtube.com/watch?v=oWMAmPCRcvk",
    },

    {
      number: 162,
      artist: "Helloween",
      title: "Church Breaks Down",
      link: "https://www.youtube.com/watch?v=_T9BMmaR8T8",
    },

    {
      number: 163,
      artist: "Helloween",
      title: "Another Shot Of Life",
      link: "https://www.youtube.com/watch?v=RXbbJsyh-EY",
    },

    {
      number: 164,
      artist: "Helloween",
      title: "Not Eternity",
      link: "https://www.youtube.com/watch?v=RgLqwNrH1YQ",
    },

    {
      number: 165,
      artist: "Helloween",
      title: "My God Given Right",
      link: "https://www.youtube.com/watch?v=M7D7ynntNbg",
    },

    {
      number: 166,
      artist: "Slipknot",
      title: "Spit It Out",
      link: "https://www.youtube.com/watch?v=ZPUZwriSX4M",
    },

    {
      number: 167,
      artist: "Slipknot",
      title: "Wait And Bleed",
      link: "https://www.youtube.com/watch?v=B1zCN0YhW1s",
    },

    {
      number: 168,
      artist: "Slipknot",
      title: "Left Behind",
      link: "https://www.youtube.com/watch?v=D1jQKpse7Yw",
    },

    {
      number: 169,
      artist: "Slipknot",
      title: "My Plauge",
      link: "https://www.youtube.com/watch?v=4wgP2DKSIfg",
    },

    {
      number: 170,
      artist: "Slipknot",
      title: "People = Shit",
      link: "https://www.youtube.com/watch?v=qqK1FrO3BdM",
    },

    {
      number: 171,
      artist: "Slipknot",
      title: "The Heretic Anthem",
      link: "https://www.youtube.com/watch?v=26PRhCJtgPQ",
    },

    {
      number: 172,
      artist: "Slipknot",
      title: "Before I Forget",
      link: "https://www.youtube.com/watch?v=qw2LU1yS7aw",
    },

    {
      number: 173,
      artist: "Slipknot",
      title: "Duality",
      link: "https://www.youtube.com/watch?v=6fVE8kSM43I",
    },

    {
      number: 174,
      artist: "Slipknot",
      title: "The Blister Exists",
      link: "https://www.youtube.com/watch?v=4Rog8XY8oxg",
    },

    {
      number: 175,
      artist: "Slipknot",
      title: "Vermillion",
      link: "https://www.youtube.com/watch?v=xKcbYUwmmlE",
    },

    {
      number: 176,
      artist: "Slipknot",
      title: "The Nameless",
      link: "https://www.youtube.com/watch?v=crN0c7-FplA",
    },

    {
      number: 177,
      artist: "Slipknot",
      title: "All Hope Is Gone",
      link: "https://www.youtube.com/watch?v=Wn2w3j_xmbw",
    },

    {
      number: 178,
      artist: "Slipknot",
      title: "Dead Memories",
      link: "https://www.youtube.com/watch?v=9gsAz6S_zSw",
    },

    {
      number: 179,
      artist: "Slipknot",
      title: "Psychosocial",
      link: "https://www.youtube.com/watch?v=5abamRO41fE",
    },

    {
      number: 180,
      artist: "Slipknot",
      title: "Snuff",
      link: "https://www.youtube.com/watch?v=LXEKuttVRIo",
    },

    {
      number: 181,
      artist: "Slipknot",
      title: "Sulfur",
      link: "https://www.youtube.com/watch?v=PAAvNmoqDq0",
    },

    {
      number: 182,
      artist: "Slipknot",
      title: "Custer",
      link: "https://www.youtube.com/watch?v=FdBqOCS8LmM",
    },

    {
      number: 183,
      artist: "Slipknot",
      title: "Killpop",
      link: "https://www.youtube.com/watch?v=mhJh5_6MuCk",
    },

    {
      number: 184,
      artist: "Slipknot",
      title: "Skeptic",
      link: "https://www.youtube.com/watch?v=muSqlefHGVQ",
    },

    {
      number: 185,
      artist: "Slipknot",
      title: "The Devil In I",
      link: "https://www.youtube.com/watch?v=XEEasR7hVhA",
    },

    {
      number: 186,
      artist: "Slipknot",
      title: "The Negative One",
      link: "https://www.youtube.com/watch?v=VcnB8z0J80I&ab_channel=SlipknotSlipknotHivatalosel%C5%91ad%C3%B3icsatorna",
    },

    {
      number: 187,
      artist: "Slipknot",
      title: "The One That Kills The Least",
      link: "https://www.youtube.com/watch?v=YKOQIgBm8VI",
    },

    {
      number: 188,
      artist: "Slipknot",
      title: "All Out Life",
      link: "https://www.youtube.com/watch?v=wLoYIBEZEfw",
    },

    {
      number: 189,
      artist: "Slipknot",
      title: "Nero Forte",
      link: "https://www.youtube.com/watch?v=JGNqvH9ykfA",
    },

    {
      number: 190,
      artist: "Slipknot",
      title: "Solway Firth",
      link: "https://www.youtube.com/watch?v=V3ADK6gsDGg",
    },

    {
      number: 191,
      artist: "Slipknot",
      title: "Unsainted",
      link: "https://www.youtube.com/watch?v=VpATBBRajP8",
    },

    {
      number: 192,
      artist: "Rammstein",
      title: "America",
      link: "https://www.youtube.com/watch?v=Rr8ljRgcJNM",
    },

    {
      number: 193,
      artist: "Rammstein",
      title: "Asche Zu Asche",
      link: "https://www.youtube.com/watch?v=2DdcQxTHQHI",
    },

    {
      number: 194,
      artist: "Rammstein",
      title: "Ausländer",
      link: "https://www.youtube.com/watch?v=pat2c33sbog",
    },

    {
      number: 195,
      artist: "Rammstein",
      title: "Benzin",
      link: "https://www.youtube.com/watch?v=z0wK6s-6cbo",
    },

    {
      number: 196,
      artist: "Rammstein",
      title: "Deutschland",
      link: "https://www.youtube.com/watch?v=NeQM1c-XCDc",
    },

    {
      number: 197,
      artist: "Rammstein",
      title: "Du Riechts So Gut",
      link: "https://www.youtube.com/watch?v=1HDV1fmtIKE",
    },

    {
      number: 198,
      artist: "Rammstein",
      title: "Du Hast",
      link: "https://www.youtube.com/watch?v=W3q8Od5qJio",
    },

    {
      number: 199,
      artist: "Rammstein",
      title: "Engel",
      link: "https://www.youtube.com/watch?v=x2rQzv8OWEY",
    },

    {
      number: 200,
      artist: "Rammstein",
      title: "Feuer Frei!",
      link: "https://www.youtube.com/watch?v=ZkW-K5RQdzo",
    },

    {
      number: 201,
      artist: "Rammstein",
      title: "Haifisch",
      link: "https://www.youtube.com/watch?v=GukNjYQZW8s",
    },

    {
      number: 202,
      artist: "Rammstein",
      title: "Ich Tut Dir Weh",
      link: "https://www.youtube.com/watch?v=IxuEtL7gxoM",
    },

    {
      number: 203,
      artist: "Rammstein",
      title: "Ich Will",
      link: "https://www.youtube.com/watch?v=EOnSh3QlpbQ",
    },

    {
      number: 204,
      artist: "Rammstein",
      title: "Keine Lust",
      link: "https://www.youtube.com/watch?v=1M4ADcMn3dA",
    },

    {
      number: 205,
      artist: "Rammstein",
      title: "Links 2 3 4",
      link: "https://www.youtube.com/watch?v=Ph-CA_tu5KA",
    },

    {
      number: 206,
      artist: "Rammstein",
      title: "Mutter",
      link: "https://www.youtube.com/watch?v=gNdnVVHfseA",
    },

    {
      number: 207,
      artist: "Rammstein",
      title: "Mein Teil",
      link: "https://www.youtube.com/watch?v=PBvwcH4XX6U",
    },

    {
      number: 208,
      artist: "Rammstein",
      title: "Ohne Dich",
      link: "https://www.youtube.com/watch?v=LIPc1cfS-oQ",
    },

    {
      number: 209,
      artist: "Rammstein",
      title: "Rosenrot",
      link: "https://www.youtube.com/watch?v=af59U2BRRAU",
    },

    {
      number: 210,
      artist: "Rammstein",
      title: "Sonne",
      link: "https://www.youtube.com/watch?v=StZcUAPRRac",
    },

    {
      number: 211,
      artist: "Rammstein",
      title: "Reise Reise",
      link: "https://www.youtube.com/watch?v=uD-qFQQGVNo",
    },

    {
      number: 212,
      artist: "Rammstein",
      title: "Mein Herz Brennt",
      link: "https://www.youtube.com/watch?v=WXv31OmnKqQ",
    },

    {
      number: 213,
      artist: "Rammstein",
      title: "Moskau",
      link: "https://www.youtube.com/watch?v=NT714sj011w",
    },

    {
      number: 214,
      artist: "Rammstein",
      title: "Spring",
      link: "https://www.youtube.com/watch?v=zjxR4Uzjq8o",
    },

    {
      number: 215,
      artist: "Rammstein",
      title: "Mein Land",
      link: "https://www.youtube.com/watch?v=6iaxDxHUWP8",
    },

    {
      number: 216,
      artist: "Rammstein",
      title: "Rammlied",
      link: "https://www.youtube.com/watch?v=Q344Zgh_btE",
    },

    {
      number: 217,
      artist: "Art Of Dying",
      title: "You Don't Know Me",
      link: "https://www.youtube.com/watch?v=qoRaUt0hiJQ",
    },

    {
      number: 218,
      artist: "Manafest",
      title: "Wanna Know You",
      link: "https://www.youtube.com/watch?v=9rgmLe9CI3Q",
    },

    {
      number: 219,
      artist: "32 Leaves",
      title: "Waiting",
      link: "https://www.youtube.com/watch?v=9qPwsqea33c",
    },

    {
      number: 220,
      artist: "Union Of Nothing",
      title: "Point Of Defience",
      link: "https://www.youtube.com/watch?v=y9KFkKWtPd0",
    },

    {
      number: 221,
      artist: "Riverboat Gamblers",
      title: "True Crime",
      link: "https://www.youtube.com/watch?v=CXKpp5ZiFvQ",
    },

    {
      number: 222,
      artist: "The White Heat",
      title: "This Is My Life",
      link: "https://www.youtube.com/watch?v=NtYnhhz7kJM",
    },

    {
      number: 223,
      artist: "No Connection",
      title: "The Last Revolution",
      link: "https://www.youtube.com/watch?v=BE-9DQb6TMY",
    },

    {
      number: 224,
      artist: "Hypnogaja",
      title: "They Don't Care",
      link: "https://www.youtube.com/watch?v=9pDaw3aAkUk",
    },

    {
      number: 225,
      artist: "Opshop",
      title: "Nothing Can Wait",
      link: "https://www.youtube.com/watch?v=yT-JFM1DI3s",
    },

    {
      number: 226,
      artist: "Dead Poetic",
      title: "Narcotic",
      link: "https://www.youtube.com/watch?v=vfR0R2qdbBk",
    },

    {
      number: 227,
      artist: "The Sleeping",
      title: "Listen Close",
      link: "https://www.youtube.com/watch?v=K0Kx6pJ_bbg",
    },

    {
      number: 228,
      artist: "Luna Halo",
      title: "I'm Alright",
      link: "https://www.youtube.com/watch?v=wxJjDiDVVZ8",
    },

    {
      number: 229,
      artist: "A Static Lullaby",
      title: "Hang 'em High",
      link: "https://www.youtube.com/watch?v=zvvR6BtTSrk",
    },

    {
      number: 230,
      artist: "Kazzer",
      title: "Fueled By Adrenaline",
      link: "https://www.youtube.com/watch?v=u_tyMa5Wn-A",
    },

    {
      number: 231,
      artist: "No Connection",
      title: "Feed The Machine",
      link: "https://www.youtube.com/watch?v=_eXTaxeef64",
    },

    {
      number: 232,
      artist: "Supermercado",
      title: "Ditch Kitty",
      link: "https://www.youtube.com/watch?v=EzFTDKmskYg",
    },

    {
      number: 233,
      artist: "This Is Menace",
      title: "Cover Girl Monument",
      link: "https://www.youtube.com/watch?v=qHtw1ss2Tsk",
    },

    {
      number: 234,
      artist: "Everything At Once",
      title: "Boys on The Hill",
      link: "https://www.youtube.com/watch?v=CYmAO_8NCFk",
    },

    {
      number: 235,
      artist: "The Classic Crime",
      title: "Blisters & Coffee ",
      link: "https://www.youtube.com/watch?v=-NmIAsSM2EA",
    },

    {
      number: 236,
      artist: "Sasquatch",
      title: "Believe It",
      link: "https://www.youtube.com/watch?v=qaLaw78NL-Y",
    },

    {
      number: 237,
      artist: "Styles Of Beyond Superstars Remix",
      title: "Nine Thou",
      link: "https://www.youtube.com/watch?v=7NFebA3sTcg",
    },

    {
      number: 238,
      artist: "Hush",
      title: "Fired Up",
      link: "https://www.youtube.com/watch?v=ibWlBWMoIxU",
    },

    {
      number: 239,
      artist: "Celldweller",
      title: "Shapeshifter",
      link: "https://www.youtube.com/watch?v=y5N38h4AybQ",
    },

    {
      number: 240,
      artist: "Mastodon",
      title: "Blood And Thunder",
      link: "https://www.youtube.com/watch?v=TsdIO8RHMTc",
    },

    {
      number: 241,
      artist: "Avenged Sevenfold",
      title: "Blinded In Chains",
      link: "https://www.youtube.com/watch?v=EPpLVdbVXFI",
    },

    {
      number: 242,
      artist: "Static-X",
      title: "Skinnyman",
      link: "https://www.youtube.com/watch?v=cNTkez069QU",
    },

    {
      number: 243,
      artist: "Celldweller",
      title: "One Good Reason",
      link: "https://www.youtube.com/watch?v=njCFs7J7w-s",
    },

    {
      number: 244,
      artist: "Asking Alexandria",
      title: "The Death of Me",
      link: "https://www.youtube.com/watch?v=Xl1lS6B9pMc",
    },

    {
      number: 245,
      artist: "Asking Alexandria",
      title: "Alone In A Room",
      link: "https://www.youtube.com/watch?v=4cHb8AJDR5Y",
    },

    {
      number: 246,
      artist: "Asking Alexandria",
      title: "Moving On",
      link: "https://www.youtube.com/watch?v=i9lYwVm1NDg",
    },

    {
      number: 247,
      artist: "Asking Alexandria",
      title: "Where Did It Go",
      link: "https://www.youtube.com/watch?v=stMWdI49hLk",
    },

    {
      number: 248,
      artist: "Amaranthe",
      title: "Digital World",
      link: "https://www.youtube.com/watch?v=z6PYAkXO-bU",
    },

    {
      number: 249,
      artist: "Korn",
      title: "Love & Meth",
      link: "https://www.youtube.com/watch?v=851NxKsneFk",
    },

    {
      number: 250,
      artist: "Korn",
      title: "Alone i Break",
      link: "https://www.youtube.com/watch?v=V3GA2d-J2_A",
    },

    {
      number: 251,
      artist: "Korn",
      title: "Thoughtless",
      link: "https://www.youtube.com/watch?v=xVPvzX-AeSM",
    },

    {
      number: 252,
      artist: "Korn",
      title: "Freak On A Leash",
      link: "https://www.youtube.com/watch?v=jRGrNDV2mKc",
    },

    {
      number: 253,
      artist: "Korn",
      title: "Falling Away From Me",
      link: "https://www.youtube.com/watch?v=2s3iGpDqQpQ",
    },

    {
      number: 254,
      artist: "Korn",
      title: "Hater",
      link: "https://www.youtube.com/watch?v=Z4RKdpjvvj4",
    },

    {
      number: 255,
      artist: "Korn",
      title: "Get Up!",
      link: "https://www.youtube.com/watch?v=rZSh9zKeI-s",
    },

    {
      number: 256,
      artist: "Korn",
      title: "Let The Guilt Go",
      link: "https://www.youtube.com/watch?v=e5gjoTBkmfo",
    },

    {
      number: 257,
      artist: "Korn",
      title: "Evolution",
      link: "https://www.youtube.com/watch?v=m8fm3Z7jgWM",
    },

    {
      number: 258,
      artist: "Korn",
      title: "Spike In My Veins",
      link: "https://www.youtube.com/watch?v=gcACvjXuclA",
    },

    {
      number: 259,
      artist: "Korn",
      title: "Make Me Bad",
      link: "https://www.youtube.com/watch?v=ujEph5vFwmc",
    },

    {
      number: 260,
      artist: "Korn",
      title: "Insane",
      link: "https://www.youtube.com/watch?v=P-zb4C_k7Ek",
    },

    {
      number: 261,
      artist: "Korn",
      title: "Baby",
      link: "https://www.youtube.com/watch?v=T5A49sivIk4",
    },

    {
      number: 262,
      artist: "Korn",
      title: "Rotting In Vain",
      link: "https://www.youtube.com/watch?v=nq9j1qkj2Vc",
    },

    {
      number: 263,
      artist: "Korn",
      title: "Black Is The Soul",
      link: "https://www.youtube.com/watch?v=z0EY-vQXRwc",
    },

    {
      number: 264,
      artist: "Korn",
      title: "The Hating",
      link: "https://www.youtube.com/watch?v=JA6_CnYLpS4",
    },

    {
      number: 265,
      artist: "Korn",
      title: "A Different World",
      link: "https://www.youtube.com/watch?v=0zXDys_gwHk",
    },

    {
      number: 266,
      artist: "Korn",
      title: "Take Me",
      link: "https://www.youtube.com/watch?v=6zMiISKntcY",
    },

    {
      number: 267,
      artist: "Korn",
      title: "Everything Falls Apart",
      link: "https://www.youtube.com/watch?v=FVhPJZWV0uM",
    },

    {
      number: 268,
      artist: "Korn",
      title: "Die Yet Another Night",
      link: "https://www.youtube.com/watch?v=L6YhipScEl4",
    },

    {
      number: 269,
      artist: "Korn",
      title: "When You're Not There",
      link: "https://www.youtube.com/watch?v=dFYTPRoN-Kw",
    },

    {
      number: 270,
      artist: "Korn",
      title: "Next in Line",
      link: "https://www.youtube.com/watch?v=28HvfNtCVNk",
    },

    {
      number: 271,
      artist: "Korn",
      title: "Please Come For Me",
      link: "https://www.youtube.com/watch?v=IkAZmo0Qk78",
    },

    {
      number: 272,
      artist: "Korn",
      title: "Calling Me Too Soon",
      link: "https://www.youtube.com/watch?v=LNGq-2kHkyI",
    },

    {
      number: 273,
      artist: "Korn",
      title: "Out Of You",
      link: "https://www.youtube.com/watch?v=cJ-dedhQTKg",
    },

    {
      number: 274,
      artist: "Celldweller",
      title: "Frozen",
      link: "https://www.youtube.com/watch?v=aMimeO279YE",
    },

    {
      number: 275,
      artist: "Falling In Reverse",
      title: "Alone",
      link: "https://www.youtube.com/watch?v=zcbOfVKSMkA",
    },

    {
      number: 276,
      artist: "InnerPartySystem",
      title: "Don't Stop",
      link: "https://www.youtube.com/watch?v=ui1LGIkjLjk",
    },

    {
      number: 277,
      artist: "12 Stones",
      title: "Anthem Of The Underdog",
      link: "https://www.youtube.com/watch?v=a5sSwfF8PFA",
    },

    {
      number: 278,
      artist: "12 Stones",
      title: "Infected",
      link: "https://www.youtube.com/watch?v=T2nfwK4f4LE",
    },

    {
      number: 279,
      artist: "I Prevail",
      title: "Scars",
      link: "https://www.youtube.com/watch?v=tZzL4jI60p4",
    },

    {
      number: 280,
      artist: "Betzefer",
      title: "The Devil Went Down To The Holy Land",
      link: "https://www.youtube.com/watch?v=EfskK_MS_14",
    },

    {
      number: 281,
      artist: "Nothing More",
      title: "Go To War",
      link: "https://www.youtube.com/watch?v=b6CCcTClgYE",
    },

    {
      number: 282,
      artist: "Nothing More",
      title: "I'll Be Ok",
      link: "https://www.youtube.com/watch?v=T-dN4Yvec6c",
    },

    {
      number: 283,
      artist: "Arch Enemy",
      title: "The Eagle Flies Alone",
      link: "https://www.youtube.com/watch?v=mjF1rmSV1dM",
    },

    {
      number: 284,
      artist: "Arch Enemy",
      title: "The World Is Yours",
      link: "https://www.youtube.com/watch?v=lk2-bgwA0Ro",
    },

    {
      number: 285,
      artist: "Beyond Unbroken",
      title: "Overdose",
      link: "https://www.youtube.com/watch?v=3pMTRKHIZ-I",
    },

    {
      number: 286,
      artist: "Palaye Royale",
      title: "Mr. Doctor Man",
      link: "https://www.youtube.com/watch?v=nzM134EhSFQ",
    },

    {
      number: 287,
      artist: "Palaye Royale",
      title: "Don't Feel Quite Right",
      link: "https://www.youtube.com/watch?v=GVGtWngq3Yk",
    },

    {
      number: 288,
      artist: "Palaye Royale",
      title: "Lonely",
      link: "https://www.youtube.com/watch?v=f5Nc4kiBaIs",
    },

    {
      number: 289,
      artist: "Palaye Royale",
      title: "Little Bastards",
      link: "https://www.youtube.com/watch?v=KGXwPPTF_nI",
    },

    {
      number: 290,
      artist: "Bad Omens",
      title: "Glass Houses",
      link: "https://www.youtube.com/watch?v=08SWNL0e5Z4",
    },

    {
      number: 291,
      artist: "Bad Omens",
      title: "The Fountain",
      link: "https://www.youtube.com/watch?v=q9YYqRUY_DU",
    },

    {
      number: 292,
      artist: "Bad Omens",
      title: "Careful What You Wish For",
      link: "https://www.youtube.com/watch?v=abPWqIGMico",
    },

    {
      number: 293,
      artist: "Jonathan Davis",
      title: "What It Is",
      link: "https://www.youtube.com/watch?v=pSABKRTtJM8",
    },

    {
      number: 294,
      artist: "Jonathan Davis",
      title: "Basic Needs",
      link: "https://www.youtube.com/watch?v=pUt4kwtqS48",
    },

    {
      number: 295,
      artist: "Jonathan Davis",
      title: "Walk On By",
      link: "https://www.youtube.com/watch?v=ZmLwHanT1JE",
    },

    {
      number: 296,
      artist: "Jonathan Davis",
      title: "Final Days",
      link: "https://www.youtube.com/watch?v=uBcns7xIAH4",
    },

    {
      number: 297,
      artist: "EH!DE & Funk4Mation",
      title: "Osiris",
      link: "https://www.youtube.com/watch?v=BRXXE-6QynE",
    },

    {
      number: 298,
      artist: "Blue Stahli",
      title: "Ultranumb",
      link: "https://www.youtube.com/watch?v=6-2jNiVK86A",
    },

    {
      number: 299,
      artist: "Blue Stahli",
      title: "Retribution",
      link: "https://www.youtube.com/watch?v=IfO26vLqGr0",
    },

    {
      number: 300,
      artist: "Blue Stahli",
      title: "Lakes Of Flame",
      link: "https://www.youtube.com/watch?v=ZYTWqJLBGo8",
    },

    {
      number: 301,
      artist: "UnderOath",
      title: "Wake Me",
      link: "https://www.youtube.com/watch?v=UjJzrpIHUvo",
    },

    {
      number: 302,
      artist: "Motionless In White",
      title: "Voices",
      link: "https://www.youtube.com/watch?v=B3faYe5V4Sk",
    },

    {
      number: 303,
      artist: "Joan Jett & The Blackhearts",
      title: "I Hate Myself For Loving You",
      link: "https://www.youtube.com/watch?v=bpNw7jYkbVc",
    },

    {
      number: 304,
      artist: "In This Moment",
      title: "Joan Of Arc",
      link: "https://www.youtube.com/watch?v=nYdw-CAP9U8",
    },

    {
      number: 305,
      artist: "In This Moment",
      title: "Half God Half Devil",
      link: "https://www.youtube.com/watch?v=iwzaIEmaW0s",
    },

    {
      number: 306,
      artist: "In This Moment",
      title: "Withcing Hour",
      link: "https://www.youtube.com/watch?v=Vo7lareN1CM",
    },

    {
      number: 307,
      artist: "Egypt Central",
      title: "You Make Me Sick",
      link: "https://www.youtube.com/watch?v=eycOSzDJP2U",
    },

    {
      number: 308,
      artist: "Egypt Central",
      title: "Taking You Down",
      link: "https://www.youtube.com/watch?v=KZSmeqrtAsg",
    },

    {
      number: 309,
      artist: "Egypt Central",
      title: "Different",
      link: "https://www.youtube.com/watch?v=UL5QpKOUlp8",
    },

    {
      number: 310,
      artist: "Egypt Central",
      title: "Push Away",
      link: "https://www.youtube.com/watch?v=Mh1ggQuWCYU",
    },

    {
      number: 311,
      artist: "Ryan Horne",
      title: "Terrible Tommy",
      link: "https://www.youtube.com/watch?v=NaWG9koUY74",
    },

    {
      number: 312,
      artist: "Billie Eilish, Khalid",
      title: "Lovely",
      link: "https://www.youtube.com/watch?v=V1Pl8CzNzCw",
    },

    {
      number: 313,
      artist: "Billie Eilish",
      title: "Bellyache",
      link: "https://www.youtube.com/watch?v=gBRi6aZJGj4",
    },

    {
      number: 314,
      artist: "Apocalyptica feat. Sandra Nasic",
      title: "Path Vol II",
      link: "https://www.youtube.com/watch?v=tbODwqGZNTU",
    },

    {
      number: 315,
      artist: "Papa Roach",
      title: "Not Listening",
      link: "https://www.youtube.com/watch?v=gk2WGOIyI2g",
    },

    {
      number: 316,
      artist: "Papa Roach",
      title: "Kick In The Teeth",
      link: "https://www.youtube.com/watch?v=WTw5BGienrg",
    },

    {
      number: 317,
      artist: "Halsey",
      title: "Control",
      link: "https://www.youtube.com/watch?v=so8V5dAli-Q",
    },

    {
      number: 318,
      artist: "Sleeping With Sirens",
      title: "Heroine",
      link: "https://www.youtube.com/watch?v=-G1dkQHvNCQ",
    },

    {
      number: 319,
      artist: "Sleeping With Sirens",
      title: "Alone",
      link: "https://www.youtube.com/watch?v=dol_B35er_M",
    },

    {
      number: 320,
      artist: "Down For Whatever",
      title: "Let Me In",
      link: "https://www.youtube.com/watch?v=yu5zBoIrvZs",
    },

    {
      number: 321,
      artist: "The Pixies",
      title: "Where Is My Mind",
      link: "https://www.youtube.com/watch?v=N3oCS85HvpY",
    },

    {
      number: 322,
      artist: "The Pixies",
      title: "Gouge Away",
      link: "https://www.youtube.com/watch?v=FiUNDeuBbi8",
    },

    {
      number: 323,
      artist: "Dissolved Girl",
      title: "Massive Attack",
      link: "https://www.youtube.com/watch?v=6lcZ0redg1s",
    },

    {
      number: 324,
      artist: "Eric Clapton",
      title: "Cocaine",
      link: "https://www.youtube.com/watch?v=zVOuRQPPdoo",
    },

    {
      number: 325,
      artist: "Avantaisa",
      title: "Dying For An Angel",
      link: "https://www.youtube.com/watch?v=quH_vUCdy2o",
    },

    {
      number: 326,
      artist: "Avantaisa",
      title: "The Scarecrow",
      link: "https://www.youtube.com/watch?v=L-PkfKZAT6E",
    },

    {
      number: 327,
      artist: "Muse",
      title: "Uprising",
      link: "https://www.youtube.com/watch?v=w8KQmps-Sog",
    },

    {
      number: 328,
      artist: "Muse",
      title: "Knights Of Cydonia",
      link: "https://www.youtube.com/watch?v=G_sBOsh-vyI",
    },

    {
      number: 329,
      artist: "Muse",
      title: "Dead Inside",
      link: "https://www.youtube.com/watch?v=I5sJhSNUkwQ",
    },

    {
      number: 330,
      artist: "Muse",
      title: "Psycho",
      link: "https://www.youtube.com/watch?v=UqLRqzTp6Rk",
    },

    {
      number: 331,
      artist: "Des Rocs",
      title: "Maybe I",
      link: "https://www.youtube.com/watch?v=yHWDqRpqUgk",
    },

    {
      number: 332,
      artist: "Des Rocs",
      title: "Used To The Darkness",
      link: "https://www.youtube.com/watch?v=7MrRi-2nokM",
    },

    {
      number: 333,
      artist: "Godsmack",
      title: "I Stand Alone",
      link: "https://www.youtube.com/watch?v=OYjZK_6i37M",
    },

    {
      number: 334,
      artist: "Good Charlotte",
      title: "The Anthem",
      link: "https://www.youtube.com/watch?v=desJKYvdq9A",
    },

    {
      number: 335,
      artist: "Jinjer",
      title: "Pisces",
      link: "https://www.youtube.com/watch?v=SQNtGoM3FVU",
    },

    {
      number: 336,
      artist: "Kavinsky",
      title: "Nightcall",
      link: "https://www.youtube.com/watch?v=MV_3Dpw-BRY",
    },

    {
      number: 337,
      artist: "Skip The Use",
      title: "Nameless World",
      link: "https://www.youtube.com/watch?v=OHXf7wEpBPI",
    },

    {
      number: 338,
      artist: "Memphis May Fire",
      title: "Prove Me Right",
      link: "https://www.youtube.com/watch?v=_YEscK-H1t8",
    },

    {
      number: 339,
      artist: "Nine Inch Nails",
      title: "Dead Souls",
      link: "https://www.youtube.com/watch?v=WeAiRM1CVUY",
    },

    {
      number: 340,
      artist: "Nine Lashes",
      title: "Anthem Of The Lonely",
      link: "https://www.youtube.com/watch?v=kgS1zjvCPF4",
    },

    {
      number: 341,
      artist: "Nine Lashes",
      title: "Love Me Now",
      link: "https://www.youtube.com/watch?v=gMfzhOhxBkw",
    },

    {
      number: 342,
      artist: "Nine Lashes",
      title: "Break The World",
      link: "https://www.youtube.com/watch?v=PseenibjruQ",
    },

    {
      number: 343,
      artist: "Rob Zombie",
      title: "Dragula",
      link: "https://www.youtube.com/watch?v=EqQuihD0hoI",
    },

    {
      number: 344,
      artist: "The Unguided (Zardonic Remix)",
      title: "Phoenix Down",
      link: "https://www.youtube.com/watch?v=3SunWtjn9_I",
    },

    {
      number: 345,
      artist: "Like A Storm",
      title: "I Love The Way You Hate Me",
      link: "https://www.youtube.com/watch?v=5ibFP-Y7i1w",
    },

    {
      number: 346,
      artist: "Shinedown",
      title: "Enemies",
      link: "https://www.youtube.com/watch?v=3z9Kmla_ceA",
    },

    {
      number: 347,
      artist: "Shinedown",
      title: "Adrenaline",
      link: "https://www.youtube.com/watch?v=KtxhlDzBOXE",
    },

    {
      number: 348,
      artist: "Breaking Benjamin",
      title: "So Cold",
      link: "https://www.youtube.com/watch?v=fia3HCuZgYI",
    },

    {
      number: 349,
      artist: "Breaking Benjamin",
      title: "I Will Now Bow",
      link: "https://www.youtube.com/watch?v=7qrRzNidzIc",
    },

    {
      number: 350,
      artist: "Breaking Benjamin",
      title: "Blow Me Away",
      link: "https://www.youtube.com/watch?v=5yHuuBZgif0",
    },

    {
      number: 351,
      artist: "Breaking Benjamin",
      title: "The Diary Of Jane",
      link: "https://www.youtube.com/watch?v=DWaB4PXCwFU",
    },

    {
      number: 352,
      artist: "Breaking Benjamin",
      title: "Dance With The Devil",
      link: "https://www.youtube.com/watch?v=lMSkC2PGyTs",
    },

    {
      number: 353,
      artist: "Manowar",
      title: "The Sons Of Odin",
      link: "https://www.youtube.com/watch?v=PIrFQuC4C50",
    },

    {
      number: 354,
      artist: "Ennio Morricone",
      title: "El Indio Theme",
      link: "https://www.youtube.com/watch?v=9fEndGSMu_c",
    },

    {
      number: 355,
      artist: "Hans Zimmer, Patrik Pietschmann",
      title: "Davy Jones Theme",
      link: "https://www.youtube.com/watch?v=eGQUZ9FlUJ4",
    },

    {
      number: 356,
      artist: "Death Note",
      title: "Light's Theme",
      link: "https://www.youtube.com/watch?v=E3LeZNlI0Xg",
    },

    {
      number: 357,
      artist: "Sybreed",
      title: "Doomsday Party",
      link: "https://www.youtube.com/watch?v=0k-Le5Y7iNw",
    },

    {
      number: 358,
      artist: "Kaleida",
      title: "Think",
      link: "https://www.youtube.com/watch?v=1CurN2Fg-2E",
    },

    {
      number: 359,
      artist: "Ghost Cover",
      title: "Crucified",
      link: "https://www.youtube.com/watch?v=G01Hb-WM2Uw",
    },

    {
      number: 360,
      artist: "Gorillaz",
      title: "Dare",
      link: "https://www.youtube.com/watch?v=uAOR6ib95kQ",
    },

    {
      number: 361,
      artist: "Gorillaz",
      title: "Feel Good Inc.",
      link: "https://www.youtube.com/watch?v=HyHNuVaZJ-k",
    },

    {
      number: 362,
      artist: "Gorillaz",
      title: "Clint Eastwood",
      link: "https://www.youtube.com/watch?v=1V_xRb0x9aw",
    },

    {
      number: 363,
      artist: "Gorillaz",
      title: "On A Melancholy Hill",
      link: "https://www.youtube.com/watch?v=04mfKJWDSzI",
    },

    {
      number: 364,
      artist: "Gorillaz",
      title: "19-2000",
      link: "https://www.youtube.com/watch?v=WXR-bCF5dbM",
    },

    {
      number: 365,
      artist: "My Chemical Romance",
      title: "Welcome To The Black Parade",
      link: "https://www.youtube.com/watch?v=RRKJiM9Njr8",
    },

    {
      number: 366,
      artist: "System Of A Down",
      title: "Aerials",
      link: "https://www.youtube.com/watch?v=L-iepu3EtyE",
    },

    {
      number: 367,
      artist: "System Of A Down",
      title: "Chop Suey!",
      link: "https://www.youtube.com/watch?v=CSvFpBOe8eY",
    },

    {
      number: 368,
      artist: "System Of A Down",
      title: "Toxicity",
      link: "https://www.youtube.com/watch?v=iywaBOMvYLI",
    },

    {
      number: 369,
      artist: "System Of A Down",
      title: "B.Y.O.B.",
      link: "https://www.youtube.com/watch?v=zUzd9KyIDrM",
    },

    {
      number: 370,
      artist: "Limp Bizkit",
      title: "Nookie",
      link: "https://www.youtube.com/watch?v=JTMVOzPPtiw",
    },

    {
      number: 371,
      artist: "Limp Bizkit",
      title: "Look Around",
      link: "https://www.youtube.com/watch?v=o3UHMV3jrZk",
    },

    {
      number: 372,
      artist: "Limp Bizkit",
      title: "My Generation",
      link: "https://www.youtube.com/watch?v=RNT_uICTe9M",
    },

    {
      number: 373,
      artist: "Limp Bizkit",
      title: "Rollin'",
      link: "https://www.youtube.com/watch?v=RYnFIRc0k6E",
    },

    {
      number: 374,
      artist: "Limp Bizkit",
      title: "My Way",
      link: "https://www.youtube.com/watch?v=Dn8vzTsnPps",
    },

    {
      number: 375,
      artist: "Limp Bizkit",
      title: "Behind Blue Eyes",
      link: "https://www.youtube.com/watch?v=8IEQpfA528M",
    },

    {
      number: 376,
      artist: "Aurora",
      title: "The Seed",
      link: "https://www.youtube.com/watch?v=MUIIkBZVzTU",
    },

    {
      number: 377,
      artist: "Powerglove",
      title: "Hunters",
      link: "https://www.youtube.com/watch?v=c1CFd9-93Xs",
    },

    {
      number: 378,
      artist: "Treasure Planet",
      title: "I'm Still Here",
      link: "https://www.youtube.com/watch?v=X9Hrq9dzNSs",
    },

    {
      number: 379,
      artist: "Treasure Planet",
      title: "I'm Still Here Hun Version",
      link: "https://www.youtube.com/watch?v=WRnCLKNnW5U",
    },

    {
      number: 380,
      artist: "Dead By April",
      title: "What Can I Say",
      link: "https://www.youtube.com/watch?v=t8jksEqsnvk",
    },

    {
      number: 381,
      artist: "Dead By April",
      title: "Erased",
      link: "https://www.youtube.com/watch?v=EjGMLoj4PKc",
    },

    {
      number: 382,
      artist: "Dead By April",
      title: "Two Faced",
      link: "https://www.youtube.com/watch?v=idnHtXDgrDg",
    },

    {
      number: 383,
      artist: "Dead By April",
      title: "As A Butterly",
      link: "https://www.youtube.com/watch?v=XxoLRMkYN00",
    },

    {
      number: 384,
      artist: "Dead By April",
      title: "Losing You",
      link: "https://www.youtube.com/watch?v=4xFDmYl3l6w",
    },

    {
      number: 385,
      artist: "Dead By April",
      title: "Calling",
      link: "https://www.youtube.com/watch?v=9ycOIsMOTy8",
    },

    {
      number: 386,
      artist: "Dead By April",
      title: "Breaking Point",
      link: "https://www.youtube.com/watch?v=aBQi5mJcvNg",
    },

    {
      number: 387,
      artist: "Dead By April",
      title: "Beautiful Nightmare",
      link: "https://www.youtube.com/watch?v=_UZcA0uK7TI",
    },

    {
      number: 388,
      artist: "Dead By April",
      title: "Within My Heart",
      link: "https://www.youtube.com/watch?v=90vsilrPC4c",
    },

    {
      number: 389,
      artist: "Dead By April",
      title: "Warrior",
      link: "https://www.youtube.com/watch?v=YXFGz8wsg7U",
    },

    {
      number: 390,
      artist: "Dead By April",
      title: "Stronger",
      link: "https://www.youtube.com/watch?v=SPXdqwzH_x4",
    },

    {
      number: 391,
      artist: "Avenged Sevenfold",
      title: "A Little Piece Of Heaven",
      link: "https://www.youtube.com/watch?v=KVjBCT2Lc94",
    },

    {
      number: 392,
      artist: "Avenged Sevenfold",
      title: "Welcome To The Family",
      link: "https://www.youtube.com/watch?v=QLoNbArsQP0",
    },

    {
      number: 393,
      artist: "Avenged Sevenfold",
      title: "Almost Easy",
      link: "https://www.youtube.com/watch?v=Fi_GN1pHCVc",
    },

    {
      number: 394,
      artist: "Avenged Sevenfold",
      title: "Buried Alive",
      link: "https://www.youtube.com/watch?v=imwmmv9r1oE",
    },

    {
      number: 395,
      artist: "Avenged Sevenfold",
      title: "Hail To The King",
      link: "https://www.youtube.com/watch?v=DelhLppPSxY",
    },

    {
      number: 396,
      artist: "Avenged Sevenfold",
      title: "Nightmare",
      link: "https://www.youtube.com/watch?v=94bGzWyHbu0",
    },

    {
      number: 397,
      artist: "Avenged Sevenfold",
      title: "Scream",
      link: "https://www.youtube.com/watch?v=Hg7lIkZdTPk",
    },

    {
      number: 398,
      artist: "Avenged Sevenfold",
      title: "Sieze The Day",
      link: "https://www.youtube.com/watch?v=-B2yzG6Gj0A",
    },

    {
      number: 399,
      artist: "Avenged Sevenfold",
      title: "So Far Away",
      link: "https://www.youtube.com/watch?v=A7ry4cx6HfY",
    },

    {
      number: 400,
      artist: "Avenged Sevenfold",
      title: "Bat Country",
      link: "https://www.youtube.com/watch?v=IHS3qJdxefY",
    },

    {
      number: 401,
      artist: "Passive",
      title: "A Perfect Circle",
      link: "https://www.youtube.com/watch?v=oMe4kVNKvNk",
    },

    {
      number: 402,
      artist: "Amon Amarth",
      title: "Cry Of The Black Birds",
      link: "https://www.youtube.com/watch?v=6GKFnwanS1I",
    },

    {
      number: 403,
      artist: "Amon Amarth",
      title: "Father Of The Wolf",
      link: "https://www.youtube.com/watch?v=ITHRTb49A1s",
    },

    {
      number: 404,
      artist: "Arctic Monkeys",
      title: "Do I Wanna Know",
      link: "https://www.youtube.com/watch?v=bpOSxM0rNPM",
    },

    {
      number: 405,
      artist: "Atreyu",
      title: "Slow Burn",
      link: "https://www.youtube.com/watch?v=SHgeCifBHrs",
    },

    {

      number: 406,
      artist: "Blues Saraceno",
      title: "Evil Ways",
      link: "https://www.youtube.com/watch?v=7lzZ-tGKKzU",
    },

    {
      number: 407,
      artist: "Bring Me The Horizon",
      title: "Can You Feel My Heart",
      link: "https://www.youtube.com/watch?v=QJJYpsA5tv8",
    },

    {
      number: 408,
      artist: "Bring Me The Horizon",
      title: "Drown",
      link: "https://www.youtube.com/watch?v=TkV5709EG5M",
    },

    {
      number: 409,
      artist: "Bring Me The Horizon",
      title: "Follow You",
      link: "https://www.youtube.com/watch?v=-tVWt2RDsoM",
    },

    {
      number: 410,
      artist: "Bring Me The Horizon",
      title: "Go To Hell For Heaven's Sake",
      link: "https://www.youtube.com/watch?v=C7cczTyQ4iY",
    },

    {
      number: 411,
      artist: "Bring Me The Horizon",
      title: "Happy Song",
      link: "https://www.youtube.com/watch?v=GBRAnuT48qo",
    },

    {
      number: 412,
      artist: "Bring Me The Horizon",
      title: "Shadow Moses",
      link: "https://www.youtube.com/watch?v=-k9qDxyxS3s",
    },

    {
      number: 413,
      artist: "Bring Me The Horizon",
      title: "Sleepwalking",
      link: "https://www.youtube.com/watch?v=lir3dzYIhz0",
    },

    {
      number: 414,
      artist: "Bring Me The Horizon",
      title: "Throne",
      link: "https://www.youtube.com/watch?v=Ow_qI_F2ZJI",
    },

    {
      number: 415,
      artist: "Bring Me The Horizon",
      title: "Wonderful Life",
      link: "https://www.youtube.com/watch?v=4hoDwVy6IQ4",
    },

    {
      number: 416,
      artist: "Bring Me The Horizon",
      title: "What You Need",
      link: "https://www.youtube.com/watch?v=k48k3BUdcXQ",
    },

    {
      number: 417,
      artist: "Bullet For My Valentine",
      title: "4 Words",
      link: "https://www.youtube.com/watch?v=beUL4Gw5Tpw",
    },

    {
      number: 418,
      artist: "Bullet For My Valentine",
      title: "Bittersweet Memories",
      link: "https://www.youtube.com/watch?v=ENPk_Jk0AJg",
    },

    {
      number: 419,
      artist: "Bullet For My Valentine",
      title: "Hand Of Blood",
      link: "https://www.youtube.com/watch?v=c0SrxSMHDmE",
    },

    {
      number: 420,
      artist: "Bullet For My Valentine",
      title: "Hearts Burst Into Fire",
      link: "https://www.youtube.com/watch?v=0n3cUPTKnl0",
    },

    {
      number: 421,
      artist: "Bullet For My Valentine",
      title: "Pretty On The Outside",
      link: "https://www.youtube.com/watch?v=6vDQAaU6lJ4",
    },

    {
      number: 422,
      artist: "Bullet For My Valentine",
      title: "Scream Aim Fire",
      link: "https://www.youtube.com/watch?v=gqI-6xag8Mg",
    },

    {
      number: 423,
      artist: "Bullet For My Valentine",
      title: "Tears Don't Fall",
      link: "https://www.youtube.com/watch?v=9sTQ0QdkN3Q",
    },

    {
      number: 424,
      artist: "Bullet For My Valentine",
      title: "Tears Don't Fall 2",
      link: "https://www.youtube.com/watch?v=Lq7b4g2N8fk",
    },

    {
      number: 425,
      artist: "Bullet For My Valentine",
      title: "Waking The Demon",
      link: "https://www.youtube.com/watch?v=fHaVJIhTFK8",
    },

    {
      number: 426,
      artist: "Bullet For My Valentine",
      title: "Your Betrayal",
      link: "https://www.youtube.com/watch?v=IHgFJEJgUrg",
    },

    {
      number: 427,
      artist: "The Relentless",
      title: "Me Against The Devil",
      link: "https://www.youtube.com/watch?v=qHTmeyXzJ20",
    },

    {
      number: 428,
      artist: "The Relentless",
      title: "Let Him Burn",
      link: "https://www.youtube.com/watch?v=HimsT8l0Z2A",
    },

    {
      number: 429,
      artist: "The Relentless",
      title: "We Lose Control",
      link: "https://www.youtube.com/watch?v=CCox7bKPL_4",
    },

    {
      number: 430,
      artist: "The Relentless",
      title: "Cadence Of My Heart",
      link: "https://www.youtube.com/watch?v=yymH2UnvlN8",
    },

    {
      number: 431,
      artist: "The Relentless",
      title: "Hey Hey, My My",
      link: "https://www.youtube.com/watch?v=igtljcoD0BU",
    },

    {
      number: 432,
      artist: "The Relentless",
      title: "Forgive Me Mother",
      link: "https://www.youtube.com/watch?v=CxO5N_h7h4Y",
    },

    {
      number: 433,
      artist: "The Relentless",
      title: "Hell Is For Children",
      link: "https://www.youtube.com/watch?v=OSso3BIAUaI",
    },

    {
      number: 434,
      artist: "The Relentless",
      title: "Nights In White Satin",
      link: "https://www.youtube.com/watch?v=Rbd2AuLjeg4",
    },

    {
      number: 435,
      artist: "The Relentless",
      title: "Save A Prayer",
      link: "https://www.youtube.com/watch?v=1tSCwtRkk-c",
    },

    {
      number: 436,
      artist: "The Relentless",
      title: "Personal Jesus",
      link: "https://www.youtube.com/watch?v=1DBsusrTaEI",
    },

    {
      number: 437,
      artist: "In Flames",
      title: "Cloud Connected",
      link: "https://www.youtube.com/watch?v=B7iIS91fMAc",
    },

    {
      number: 438,
      artist: "In Flames",
      title: "Darker Times",
      link: "https://www.youtube.com/watch?v=tqU2XjaylNQ",
    },

    {
      number: 439,
      artist: "In Flames",
      title: "Deliver Us",
      link: "https://www.youtube.com/watch?v=Wr9LZ1hAFpQ",
    },

    {
      number: 440,
      artist: "In Flames",
      title: "Fear Is The Weakness",
      link: "https://www.youtube.com/watch?v=7uYIaM_wDE0",
    },

    {
      number: 441,
      artist: "In Flames",
      title: "Free Fall",
      link: "https://www.youtube.com/watch?v=nRaFURFWCoM",
    },

    {
      number: 442,
      artist: "In Flames",
      title: "My Sweet Shadow",
      link: "https://www.youtube.com/watch?v=7gOroLFHcF0",
    },

    {
      number: 443,
      artist: "In Flames",
      title: "Only For The Weak",
      link: "https://www.youtube.com/watch?v=fS5J_-3dJSQ",
    },

    {
      number: 444,
      artist: "In Flames",
      title: "Trigger",
      link: "https://www.youtube.com/watch?v=7AVNQ97whjQ",
    },

    {
      number: 445,
      artist: "In Flames",
      title: "Take This Life",
      link: "https://www.youtube.com/watch?v=hNhyMJ6Lszw",
    },

    {
      number: 446,
      artist: "In Flames",
      title: "I Am Above",
      link: "https://www.youtube.com/watch?v=4OkSsFsXLD8",
    },

    {
      number: 447,
      artist: "In Flames",
      title: "The Quiet Place",
      link: "https://www.youtube.com/watch?v=q9PL4Xy4wrk",
    },

    {
      number: 448,
      artist: "In Flames",
      title: "The End",
      link: "https://www.youtube.com/watch?v=yafxUluB6DA",
    },

    {
      number: 449,
      artist: "In Flames",
      title: "Crawl Through Knives",
      link: "https://www.youtube.com/watch?v=_NY3A2RIaUs",
    },

    {
      number: 450,
      artist: "In Flames",
      title: "Come Clarity",
      link: "https://www.youtube.com/watch?v=P0A8mxXysoE",
    },

    {
      number: 451,
      artist: "In Flames",
      title: "Wallflower",
      link: "https://www.youtube.com/watch?v=Nh10gL_GP_w",
    },

    {
      number: 452,
      artist: "In Flames",
      title: "The Truth",
      link: "https://www.youtube.com/watch?v=NF9kBttkaAQ",
    },

    {
      number: 453,
      artist: "In Flames",
      title: "The Chosen Pessimist",
      link: "https://www.youtube.com/watch?v=M7XR-dtexX0",
    },

    {
      number: 454,
      artist: "Deftones",
      title: "Change",
      link: "https://www.youtube.com/watch?v=ZL4MGwlZuAc",
    },

    {
      number: 455,
      artist: "Deftones",
      title: "Digital Bath",
      link: "https://www.youtube.com/watch?v=9tmPBuSpmfA",
    },

    {
      number: 456,
      artist: "Deftones",
      title: "Passenger",
      link: "https://www.youtube.com/watch?v=FROn3LtGFl0",
    },

    {
      number: 457,
      artist: "Deftones",
      title: "Sextape",
      link: "https://www.youtube.com/watch?v=f0pdwd0miqs",
    },

    {
      number: 458,
      artist: "Demon Hunter",
      title: "Dead Flowers",
      link: "https://www.youtube.com/watch?v=PmQ_pKPh8cU",
    },

    {
      number: 459,
      artist: "Demon Hunter",
      title: "I Will Fail You",
      link: "https://www.youtube.com/watch?v=n0l0YOHO5jg",
    },

    {
      number: 460,
      artist: "Demon Hunter",
      title: "The Last One Alive",
      link: "https://www.youtube.com/watch?v=HZyE9QApvEU",
    },

    {
      number: 461,
      artist: "DEUCE",
      title: "The One",
      link: "https://www.youtube.com/watch?v=99PvjovUYK0",
    },

    {
      number: 462,
      artist: "Disturbed",
      title: "Another Way To Die",
      link: "https://www.youtube.com/watch?v=HwELajFteTo",
    },

    {
      number: 463,
      artist: "Disturbed",
      title: "Decadence",
      link: "https://www.youtube.com/watch?v=sqLdyZBjZeo",
    },

    {
      number: 464,
      artist: "Disturbed",
      title: "Indestructible",
      link: "https://www.youtube.com/watch?v=aWxBrI0g1kE",
    },

    {
      number: 465,
      artist: "Disturbed",
      title: "Inside The Fire",
      link: "https://www.youtube.com/watch?v=rxujAPhxlo0",
    },

    {
      number: 466,
      artist: "Disturbed",
      title: "Land Of Confusion",
      link: "https://www.youtube.com/watch?v=YV4oYkIeGJc",
    },

    {
      number: 467,
      artist: "Disturbed",
      title: "Stricken",
      link: "https://www.youtube.com/watch?v=I77mjesUbkw",
    },

    {
      number: 468,
      artist: "Disturbed",
      title: "The Animal",
      link: "https://www.youtube.com/watch?v=dwxUgefMStM",
    },

    {
      number: 469,
      artist: "Disturbed",
      title: "What Are You Waiting For",
      link: "https://www.youtube.com/watch?v=Yvwo8f3SXKA",
    },

    {
      number: 470,
      artist: "Disturbed",
      title: "Immortalized",
      link: "https://www.youtube.com/watch?v=Auuqlcom6tM",
    },

    {
      number: 471,
      artist: "Disturbed",
      title: "Ten Thousand Fists",
      link: "https://www.youtube.com/watch?v=ZVinwOpllQk",
    },

    {
      number: 472,
      artist: "Disturbed",
      title: "Down With The Sickness",
      link: "https://www.youtube.com/watch?v=09LTT0xwdfw",
    },

    {
      number: 473,
      artist: "Dope",
      title: "Die Motherfucker Die",
      link: "https://www.youtube.com/watch?v=25DC6v8oPxo&ab_channel=Gravegirl94",
    },

    {
      number: 474,
      artist: "Dope",
      title: "Debonaire",
      link: "https://www.youtube.com/watch?v=YIiglIKcTYI",
    },

    {
      number: 475,
      artist: "Dope",
      title: "My Funeral",
      link: "https://www.youtube.com/watch?v=TUEWnM6nGPo",
    },

    {
      number: 476,
      artist: "Justin Cross",
      title: "Drink The Water",
      link: "https://www.youtube.com/watch?v=wXFK82TGh7c",
    },

    {
      number: 477,
      artist: "Drowning Pool",
      title: "Die For Nothing",
      link: "https://www.youtube.com/watch?v=wEPWbm3SGrE",
    },

    {
      number: 478,
      artist: "Drowning Pool",
      title: "Feel Like I Do",
      link: "https://www.youtube.com/watch?v=28HZKR1JSLM",
    },

    {
      number: 479,
      artist: "Drowning Pool",
      title: "Tear Away",
      link: "https://www.youtube.com/watch?v=gCSs5QggRUk",
    },

    {
      number: 480,
      artist: "Drowning Pool",
      title: "Bodies",
      link: "https://www.youtube.com/watch?v=04F4xlWSFh0",
    },

    {
      number: 481,
      artist: "Drowning Pool",
      title: "Step Up",
      link: "https://www.youtube.com/watch?v=Co5n2RVbWM0",
    },

    {
      number: 482,
      artist: "Egypt Central",
      title: "Over And Under",
      link: "https://www.youtube.com/watch?v=p2FZvPLWf_M",
    },

    {
      number: 483,
      artist: "Egypt Central",
      title: "White Rabbit",
      link: "https://www.youtube.com/watch?v=KCqjZIGKR0M",
    },

    {
      number: 484,
      artist: "Egypt Central",
      title: "The Way",
      link: "https://www.youtube.com/watch?v=NqSKWClyHrs",
    },

    {
      number: 485,
      artist: "Egypt Central",
      title: "Just Another Lie",
      link: "https://www.youtube.com/watch?v=aoSPEVHPAE8",
    },

    {
      number: 486,
      artist: "Egypt Central",
      title: "Ghost Town",
      link: "https://www.youtube.com/watch?v=21hBPopYjHU",
    },

    {
      number: 487,
      artist: "Escape The Fate",
      title: "My Apocalypse",
      link: "https://www.youtube.com/watch?v=jUcHKQ4G1vo",
    },

    {
      number: 488,
      artist: "Escape The Fate",
      title: "One For The Money",
      link: "https://www.youtube.com/watch?v=SNArTXVWZns",
    },

    {
      number: 489,
      artist: "Escape The Fate",
      title: "There's No Sympathy For The Dead",
      link: "https://www.youtube.com/watch?v=39w5dWQUEjk",
    },

    {
      number: 490,
      artist: "Escape The Fate",
      title: "This War Is Ours",
      link: "https://www.youtube.com/watch?v=5RS9EVwNrtg",
    },

    {
      number: 491,
      artist: "Five Finger Death Punch",
      title: "The Wrong Side Of Heaven",
      link: "https://www.youtube.com/watch?v=2Ay1V9uXI7c",
    },

    {
      number: 492,
      artist: "Five Finger Death Punch",
      title: "Inside Out",
      link: "https://www.youtube.com/watch?v=wwroUDmB6wI",
    },

    {
      number: 493,
      artist: "Flipsyde",
      title: "Someday",
      link: "https://www.youtube.com/watch?v=e5QEAI_O2IA",
    },

    {
      number: 494,
      artist: "Green Day",
      title: "Boulevard Of Broken Dreams",
      link: "https://www.youtube.com/watch?v=Soa3gO7tL-c",
    },

    {
      number: 495,
      artist: "Haste The Day",
      title: "The Minor Prophets",
      link: "https://www.youtube.com/watch?v=qBhkThLBVos",
    },

    {
      number: 496,
      artist: "Haste The Day",
      title: "Stitches",
      link: "https://www.youtube.com/watch?v=xMVq6jgh6EA",
    },

    {
      number: 497,
      artist: "Hollywood Undead",
      title: "Lion",
      link: "https://www.youtube.com/watch?v=QgFHL2R8m6s",
    },

    {
      number: 498,
      artist: "Hollywood Undead",
      title: "Levitate",
      link: "https://www.youtube.com/watch?v=806sukxpxOI",
    },

    {
      number: 499,
      artist: "Hollywood Undead",
      title: "Medicine",
      link: "https://www.youtube.com/watch?v=eGNSzKzaidg",
    },

    {
      number: 500,
      artist: "Hollywood Undead",
      title: "Undead",
      link: "https://www.youtube.com/watch?v=N8e6qnKFeWU",
    },

    {
      number: 501,
      artist: "Hollywood Undead",
      title: "Outside",
      link: "https://www.youtube.com/watch?v=BzZBtZVfDOg",
    },

    {
      number: 502,
      artist: "Hollywood Undead",
      title: "City",
      link: "https://www.youtube.com/watch?v=YQZX0ams8dc",
    },

    {
      number: 503,
      artist: "Hollywood Undead",
      title: "No.5",
      link: "https://www.youtube.com/watch?v=_hOm4yDo0-8",
    },

    {
      number: 504,
      artist: "Hollywood Undead",
      title: "We Are",
      link: "https://www.youtube.com/watch?v=ocXjr9nPnvg",
    },

    {
      number: 505,
      artist: "Thousand Foot Krutch",
      title: "E For Extinction",
      link: "https://www.youtube.com/watch?v=h9GEPqBssVk",
    },

    {
      number: 506,
      artist: "Thousand Foot Krutch",
      title: "Be Somebody",
      link: "https://www.youtube.com/watch?v=3L3R0o3PEyQ",
    },

    {
      number: 507,
      artist: "Thousand Foot Krutch",
      title: "I Get Wicked",
      link: "https://www.youtube.com/watch?v=t29rGc-wWYg",
    },

    {
      number: 508,
      artist: "Thousand Foot Krutch",
      title: "War Of Change",
      link: "https://www.youtube.com/watch?v=HdnTSXUWd3E",
    },

    {
      number: 509,
      artist: "Icon For Hire",
      title: "Make A Move",
      link: "https://www.youtube.com/watch?v=e_S9VvJM1PI",
    },

    {
      number: 510,
      artist: "Nickelback",
      title: "If Today Was Your Last Day",
      link: "https://www.youtube.com/watch?v=lrXIQQ8PeRs",
    },

    {
      number: 511,
      artist: "Nickelback",
      title: "Rockstar",
      link: "https://www.youtube.com/watch?v=DmeUuoxyt_E",
    },

    {
      number: 512,
      artist: "Nickelback",
      title: "How You Remind Me",
      link: "https://www.youtube.com/watch?v=Aiay8I5IPB8",
    },

    {
      number: 513,
      artist: "Nickelback",
      title: "Burn It To The Ground",
      link: "https://www.youtube.com/watch?v=q0HElo91a4s",
    },

    {
      number: 514,
      artist: "Ill Nino",
      title: "How Can I Live",
      link: "https://www.youtube.com/watch?v=rNH4IdCJZf8",
    },

    {
      number: 515,
      artist: "Ill Nino",
      title: "I Am Loco",
      link: "https://www.youtube.com/watch?v=QL9YRB4sgG4",
    },

    {
      number: 516,
      artist: "Ill Nino",
      title: "What Comes Around",
      link: "https://www.youtube.com/watch?v=OI-fWgyMXYA",
    },

    {
      number: 517,
      artist: "Ill Nino",
      title: "What You Deserve",
      link: "https://www.youtube.com/watch?v=PEv9knEqGcU",
    },

    {
      number: 518,
      artist: "Imagine Dragons",
      title: "Monster",
      link: "https://www.youtube.com/watch?v=hhSA9H9Iaqw",
    },

    {
      number: 519,
      artist: "Imagine Dragons",
      title: "Battle Cry",
      link: "https://www.youtube.com/watch?v=ZgB2qItM76g",
    },

    {
      number: 520,
      artist: "Imagine Dragons",
      title: "Warriors",
      link: "https://www.youtube.com/watch?v=fmI_Ndrxy14",
    },

    {
      number: 521,
      artist: "Imagine Dragons",
      title: "Demons",
      link: "https://www.youtube.com/watch?v=mWRsgZuwf_8",
    },

    {
      number: 522,
      artist: "Imagine Dragons",
      title: "Radioactive",
      link: "https://www.youtube.com/watch?v=ktvTqknDobU",
    },

    {
      number: 523,
      artist: "Karnivol",
      title: "Sleeping Satellite",
      link: "https://www.youtube.com/watch?v=cZLliumYrQ8",
    },

    {
      number: 524,
      artist: "Lacuna Coil",
      title: "Closer",
      link: "https://www.youtube.com/watch?v=b6gFJogLJ_g",
    },

    {
      number: 525,
      artist: "Lacuna Coil",
      title: "Enjoy The Silence",
      link: "https://www.youtube.com/watch?v=Lx58hXh4pVA",
    },

    {
      number: 526,
      artist: "Lacuna Coil",
      title: "Heaven's A Lie",
      link: "https://www.youtube.com/watch?v=4wfRHPsRGkk",
    },

    {
      number: 527,
      artist: "Lacuna Coil",
      title: "I Forgive",
      link: "https://www.youtube.com/watch?v=lyl4EinZsMY",
    },

    {
      number: 528,
      artist: "Lacuna Coil",
      title: "Spellbound",
      link: "https://www.youtube.com/watch?v=r_VS2B48c24",
    },

    {
      number: 529,
      artist: "Lacuna Coil",
      title: "The House Of Shame",
      link: "https://www.youtube.com/watch?v=1o1MoG-cz9Q",
    },

    {
      number: 530,
      artist: "Lacuna Coil",
      title: "Trip To The Darkness",
      link: "https://www.youtube.com/watch?v=VTT6picaCoQ",
    },

    {
      number: 531,
      artist: "Lacuna Coil",
      title: "Our Truth",
      link: "https://www.youtube.com/watch?v=SB9LXpO6yWo",
    },

    {
      number: 532,
      artist: "League Of Legends",
      title: "Get Jinxed",
      link: "https://www.youtube.com/watch?v=0nlJuwO0GDs",
    },

    {
      number: 533,
      artist: "League Of Legends",
      title: "The Curse Of The Sad Mummy",
      link: "https://www.youtube.com/watch?v=0AvWV6Mk374",
    },

    {
      number: 534,
      artist: "League Of Legends",
      title: "VI Login Music",
      link: "https://www.youtube.com/watch?v=18yK0G9hHts",
    },

    {
      number: 535,
      artist: "Pentakill",
      title: "Mortal Reminder",
      link: "https://www.youtube.com/watch?v=5-mT9D4fdgQ",
    },

    {
      number: 536,
      artist: "Marty Bags",
      title: "You're Not Me",
      link: "https://www.youtube.com/watch?v=VCBVMUT_pg0",
    },

    {
      number: 537,
      artist: "Leander",
      title: "Csak Te",
      link: "https://www.youtube.com/watch?v=VGYQQjGPo20",
    },

    {
      number: 538,
      artist: "Leander Rising",
      title: "Némán Állni",
      link: "https://www.youtube.com/watch?v=Kv-eQRkj4uk",
    },

    {
      number: 539,
      artist: "Lunatic Calm",
      title: "Leave You Far Behind",
      link: "https://www.youtube.com/watch?v=maP6q3D4Hf0",
    },

    {
      number: 540,
      artist: "Ennio Morricone",
      title: "The Ecstasy Of Gold",
      link: "https://www.youtube.com/watch?v=PYI09PMNazw",
    },

    {
      number: 541,
      artist: "Metallica",
      title: "The Day That Never Comes",
      link: "https://www.youtube.com/watch?v=YinYm4mbpvQ",
    },

    {

      number: 542,
      artist: "Metallica",
      title: "Creeping Death",
      link: "https://www.youtube.com/watch?v=1tMhtvkIh0E&list=PL37E807E4361D3453&index=2",
    },

    {

      number: 543,
      artist: "Metallica",
      title: "Fuel",
      link: "https://www.youtube.com/watch?v=5IdcV6eZVwI&list=PL37E807E4361D3453&index=3",
    },

    {

      number: 544,
      artist: "Metallica",
      title: "Harvester Of Sorrow",
      link: "https://www.youtube.com/watch?v=FY66IWfLbRA&list=PL37E807E4361D3453&index=8",
    },

    {

      number: 545,
      artist: "Metallica",
      title: "Frantic",
      link: "https://www.youtube.com/watch?v=7CndYMXLzkE&list=PL37E807E4361D3453&index=7",
    },

    {

      number: 546,
      artist: "Metallica",
      title: "The Unforgiven",
      link: "https://www.youtube.com/watch?v=lq93rB_DFeQ&list=PL37E807E4361D3453&index=16",
    },

    {

      number: 547,
      artist: "Metallica",
      title: "For Whom The Bell Tolls",
      link: "https://www.youtube.com/watch?v=XVe8RwLzUiA&list=PL37E807E4361D3453&index=1",
    },

    {

      number: 548,
      artist: "Metallica",
      title: "Orion",
      link: "https://www.youtube.com/watch?v=o40hT9PgQSY&list=PL37E807E4361D3453&index=12",
    },

    {

      number: 549,
      artist: "Metallica",
      title: "Master Of Puppets",
      link: "https://www.youtube.com/watch?v=Y-1sEcEz0sg&list=PL37E807E4361D3453&index=9",
    },

    {

      number: 550,
      artist: "Metallica",
      title: "Fade To Black",
      link: "https://www.youtube.com/watch?v=zartVit3rKc&list=PL37E807E4361D3453&index=6",
    },

    {

      number: 551,
      artist: "Metallica",
      title: "Battery",
      link: "https://www.youtube.com/watch?v=MnutLBuxyK0&list=PL37E807E4361D3453&index=4",
    },

    {

      number: 552,
      artist: "Metallica",
      title: "Sad But True",
      link: "https://www.youtube.com/watch?v=6GupBKHojHo&list=PL37E807E4361D3453&index=13",
    },

    {

      number: 553,
      artist: "Metallica",
      title: "Nothing Else Matters",
      link: "https://www.youtube.com/watch?v=3BZbygF_yUw&list=PL37E807E4361D3453&index=10",
    },

    {

      number: 554,
      artist: "Metallica",
      title: "One",
      link: "https://www.youtube.com/watch?v=otNotEj9QsA&list=PL37E807E4361D3453&index=11",
    },

    {

      number: 555,
      artist: "Metallica",
      title: "Enter Sandman",
      link: "https://www.youtube.com/watch?v=gmTJ8K883Ac&list=PL37E807E4361D3453&index=5",
    },

    {

      number: 556,
      artist: "Metallica",
      title: "Vulturus",
      link: "https://www.youtube.com/watch?v=wnWeUbPHrXI&list=PL37E807E4361D3453&index=15",
    },

    {

      number: 557,
      artist: "Metallica",
      title: "Seek & Destroy",
      link: "https://www.youtube.com/watch?v=4f0rivtxKOQ&list=PL37E807E4361D3453&index=14",
    },

    {
      number: 558,
      artist: "Metallica",
      title: "All Nightmare Along",
      link: "https://www.youtube.com/watch?v=EFqjDXy9s5A",
    },

    {
      number: 559,
      artist: "Metallica",
      title: "Die, Die My Darling",
      link: "https://www.youtube.com/watch?v=JoolQUDWq-k",
    },

    {
      number: 560,
      artist: "Metallica",
      title: "Hardwired",
      link: "https://www.youtube.com/watch?v=uhBHL3v4d3I",
    },

    {
      number: 561,
      artist: "Metallica",
      title: "I Disappear",
      link: "https://www.youtube.com/watch?v=ekZTW2r4vb4",
    },

    {
      number: 562,
      artist: "Metallica",
      title: "St. Anger",
      link: "https://www.youtube.com/watch?v=6ajl1ABdD8A",
    },

    {
      number: 563,
      artist: "Metallica",
      title: "Wherever I May Roam",
      link: "https://www.youtube.com/watch?v=S5TnPjOd_To",
    },

    {
      number: 564,
      artist: "Metallica",
      title: "Whiskey In The Jar",
      link: "https://www.youtube.com/watch?v=wsrvmNtWU4E",
    },

    {
      number: 565,
      artist: "Metallica",
      title: "So What",
      link: "https://www.youtube.com/watch?v=0XoyDqFy5pU",
    },

    {
      number: 566,
      artist: "Metallica",
      title: "Welcome Home",
      link: "https://www.youtube.com/watch?v=V6Dfo4zDduI",
    },

    {
      number: 567,
      artist: "Metallica",
      title: "The Memory Remains",
      link: "https://www.youtube.com/watch?v=RDN4awrpPQQ",
    },

    {
      number: 568,
      artist: "Mudvayne",
      title: "Forget To Remember",
      link: "https://www.youtube.com/watch?v=3ea_7J1hffs",
    },

    {
      number: 569,
      artist: "Mudvayne",
      title: "Not Falling",
      link: "https://www.youtube.com/watch?v=uhqRMzoyV4g",
    },

    {
      number: 570,
      artist: "WOW",
      title: "Invincible",
      link: "https://www.youtube.com/watch?v=EV46qFZrOzk",
    },

    {
      number: 571,
      artist: "WOW",
      title: "Arthas My Son",
      link: "https://www.youtube.com/watch?v=3m51oKG3BKA",
    },

    {
      number: 572,
      artist: "WOW",
      title: "I Am Murloc",
      link: "https://www.youtube.com/watch?v=uOpdyytB3OY",
    },

    {
      number: 573,
      artist: "Starset",
      title: "My Demons",
      link: "https://www.youtube.com/watch?v=LSvOTw8UH6s",
    },

    {
      number: 574,
      artist: "Starset",
      title: "Antigravity",
      link: "https://www.youtube.com/watch?v=W7qIlpV-uwo",
    },

    {
      number: 575,
      artist: "Starset",
      title: "Bringing It Down",
      link: "https://www.youtube.com/watch?v=MZcuRa8Z4fU",
    },

    {
      number: 576,
      artist: "Starset",
      title: "Carnivore",
      link: "https://www.youtube.com/watch?v=LAMiX5EEbFU",
    },

    {
      number: 577,
      artist: "Starset",
      title: "Dark On Me",
      link: "https://www.youtube.com/watch?v=yntDx4Y4baw",
    },

    {
      number: 578,
      artist: "Starset",
      title: "Die For You",
      link: "https://www.youtube.com/watch?v=WJxSNbAer9M",
    },

    {
      number: 579,
      artist: "Starset",
      title: "Down With The Fallen",
      link: "https://www.youtube.com/watch?v=tW_FkaXeSwc",
    },

    {
      number: 580,
      artist: "Starset",
      title: "Frequency",
      link: "https://www.youtube.com/watch?v=vA8-GGqwSDs",
    },

    {
      number: 581,
      artist: "Starset",
      title: "Gravity Of You",
      link: "https://www.youtube.com/watch?v=sV-6ROmgZys",
    },

    {
      number: 582,
      artist: "Starset",
      title: "It Has Begun",
      link: "https://www.youtube.com/watch?v=XZp3Mtn-YsI",
    },

    {
      number: 583,
      artist: "Starset",
      title: "Last To Fall",
      link: "https://www.youtube.com/watch?v=JyaH_DWY6TI",
    },

    {
      number: 584,
      artist: "Starset",
      title: "Let It Die",
      link: "https://www.youtube.com/watch?v=xJtBYAKBByk",
    },

    {
      number: 585,
      artist: "Starset",
      title: "Point Of No Return",
      link: "https://www.youtube.com/watch?v=_NTfbLtXTlw",
    },

    {
      number: 586,
      artist: "Starset",
      title: "Telescope",
      link: "https://www.youtube.com/watch?v=9vjewxPHq9I",
    },

    {
      number: 587,
      artist: "Starset",
      title: "The Future Is Now",
      link: "https://www.youtube.com/watch?v=fRsnxxbGJN8",
    },

    {
      number: 588,
      artist: "Starset",
      title: "Rise And Fall",
      link: "https://www.youtube.com/watch?v=QHgEwHVzu4s",
    },

    {
      number: 589,
      artist: "Nightwish",
      title: "She Is My Sin",
      link: "https://www.youtube.com/watch?v=3mtlDc072cE",
    },

    {
      number: 590,
      artist: "Nightwish",
      title: "Wishmaster",
      link: "https://www.youtube.com/watch?v=eJTlH521E6w",
    },

    {
      number: 591,
      artist: "Nightwish",
      title: "I Wish I Had An Angel",
      link: "https://www.youtube.com/watch?v=7aNW6LEmK5Y",
    },

    {
      number: 592,
      artist: "Nightwish",
      title: "Phantom Of The Opera",
      link: "https://www.youtube.com/watch?v=8VgLKXD-BoY",
    },

    {
      number: 593,
      artist: "Nightwish",
      title: "Amaranth",
      link: "https://www.youtube.com/watch?v=GdZn7k5rZLQ",
    },

    {
      number: 594,
      artist: "Nightwish",
      title: "Bye Bye Beautiful",
      link: "https://www.youtube.com/watch?v=hTdhXxxWREo",
    },

    {
      number: 595,
      artist: "Nightwish",
      title: "Ghost Love Score",
      link: "https://www.youtube.com/watch?v=JYjIlHWBAVo",
    },

    {
      number: 596,
      artist: "Nightwish",
      title: "High Hopes",
      link: "https://www.youtube.com/watch?v=4oEDnVeYYyM",
    },

    {
      number: 597,
      artist: "Nightwish",
      title: "The Islander",
      link: "https://www.youtube.com/watch?v=--tFFz44zvc",
    },

    {
      number: 598,
      artist: "Nightwish",
      title: "Nemo",
      link: "https://www.youtube.com/watch?v=kIBdpFJyFkc",
    },

    {
      number: 599,
      artist: "Nightwish",
      title: "Sleeping Sun",
      link: "https://www.youtube.com/watch?v=E_RRMRXJWxI",
    },

    {
      number: 600,
      artist: "Nirvana",
      title: "Smells Like Teen Spirit",
      link: "https://www.youtube.com/watch?v=hTWKbfoikeg",
    },

    {
      number: 601,
      artist: "Bon Jovi",
      title: "Livin' On A Prayer",
      link: "https://www.youtube.com/watch?v=lDK9QqIzhwk",
    },

    {
      number: 602,
      artist: "Bon Jovi",
      title: "You Give Love A Bad Name",
      link: "https://www.youtube.com/watch?v=KrZHPOeOxQQ",
    },

    {
      number: 603,
      artist: "Bon Jovi",
      title: "Have A Nice Day",
      link: "https://www.youtube.com/watch?v=uCg2BoKiuOM",
    },

    {
      number: 604,
      artist: "Bon Jovi",
      title: "It's My Life",
      link: "https://www.youtube.com/watch?v=vx2u5uUu3DE",
    },

    {
      number: 605,
      artist: "Bon Jovi",
      title: "Wanted Dead Or Alive",
      link: "https://www.youtube.com/watch?v=SRvCvsRp5ho",
    },

    {
      number: 606,
      artist: "Scorpions",
      title: "Rock You Like A Hurricane",
      link: "https://www.youtube.com/watch?v=CGfKi6kpdTQ",
    },

    {
      number: 607,
      artist: "Scorpions",
      title: "No One Like You",
      link: "https://www.youtube.com/watch?v=ZfNR98ajB1U",
    },

    {
      number: 608,
      artist: "Def Leppard",
      title: "Pour Some Sugar On Me",
      link: "https://www.youtube.com/watch?v=0UIB9Y4OFPs",
    },

    {
      number: 609,
      artist: "Guns N' Roses",
      title: "Paradise City",
      link: "https://www.youtube.com/watch?v=Rbm6GXllBiw",
    },

    {
      number: 610,
      artist: "Twisted Sister",
      title: "I Wanna Rock",
      link: "https://www.youtube.com/watch?v=F4LYes4fH4Y",
    },

    {
      number: 611,
      artist: "Ozzy Osbourne",
      title: "Let Me Hear You Scream",
      link: "https://www.youtube.com/watch?v=GRqpOhkdhTM",
    },

    {
      number: 612,
      artist: "Ozzy Osbourne",
      title: "I Don't Know",
      link: "https://www.youtube.com/watch?v=JNm6bucMPmY&ab_channel=OzzyOsbourne-Topic",
    },

    {
      number: 613,
      artist: "Iron Maiden",
      title: "Fear Of The Dark",
      link: "https://www.youtube.com/watch?v=p32b5nNq1zw",
    },

    {
      number: 614,
      artist: "Raubtier",
      title: "Achtung Panzer",
      link: "https://www.youtube.com/watch?v=7hvEIBDgWgI",
    },

    {
      number: 615,
      artist: "Sabaton",
      title: "White Death",
      link: "https://www.youtube.com/watch?v=s43yLMgXXOU",
    },

    {
      number: 616,
      artist: "Red",
      title: "Already Over",
      link: "https://www.youtube.com/watch?v=0SJPCdafnLo",
    },

    {
      number: 617,
      artist: "Red",
      title: "Breathe Into Me",
      link: "https://www.youtube.com/watch?v=6gcEyO-XqAw",
    },

    {
      number: 618,
      artist: "Rise Against",
      title: "Hero Of War",
      link: "https://www.youtube.com/watch?v=_DboMAghWcA",
    },

    {
      number: 619,
      artist: "Rise Against",
      title: "Prayer Of The Refugee",
      link: "https://www.youtube.com/watch?v=9-SQGOYOjxs",
    },

    {
      number: 620,
      artist: "Rise Against",
      title: "Savior",
      link: "https://www.youtube.com/watch?v=e8X3ACToii0",
    },

    {
      number: 621,
      artist: "Rise Against",
      title: "Ready To Fall",
      link: "https://www.youtube.com/watch?v=XN2FrUUq-zI",
    },

    {
      number: 622,
      artist: "Rise Against",
      title: "Make It Stop",
      link: "https://www.youtube.com/watch?v=XP4clbHc4Xg",
    },

    {
      number: 623,
      artist: "Sick Puppies",
      title: "You're Going Down",
      link: "https://www.youtube.com/watch?v=liW-kWFiXtQ",
    },

    {
      number: 624,
      artist: "Sick Puppies",
      title: "All The Same",
      link: "https://www.youtube.com/watch?v=cs72v-2zjsg",
    },

    {
      number: 625,
      artist: "Rise To Fall",
      title: "Admire The Clouds",
      link: "https://www.youtube.com/watch?v=gHn6rSUNL_c",
    },

    {
      number: 626,
      artist: "Rise To Fall",
      title: "Inner Scream",
      link: "https://www.youtube.com/watch?v=sklsManKNMc",
    },

    {
      number: 627,
      artist: "Rise To Fall",
      title: "Unknown Presence",
      link: "https://www.youtube.com/watch?v=KFCxuHcm2vI",
    },

    {
      number: 628,
      artist: "Soil",
      title: "Can You Heal Me",
      link: "https://www.youtube.com/watch?v=kpztV5QEDwI",
    },

    {
      number: 629,
      artist: "Soil",
      title: "Cross My Heart",
      link: "https://www.youtube.com/watch?v=vbPv_3BQFHs",
    },

    {
      number: 630,
      artist: "Soil",
      title: "Halo",
      link: "https://www.youtube.com/watch?v=RFc-2aNZ6VY",
    },

    {
      number: 631,
      artist: "Soil",
      title: "Obsession",
      link: "https://www.youtube.com/watch?v=VSw3r0BNrBw",
    },

    {
      number: 632,
      artist: "Soil",
      title: "Redefine",
      link: "https://www.youtube.com/watch?v=WkqJ8SvaDfc",
    },

    {
      number: 633,
      artist: "Soil",
      title: "Suffering",
      link: "https://www.youtube.com/watch?v=M4xOqWKZkDY",
    },

    {
      number: 634,
      artist: "Soil",
      title: "The Last Chance",
      link: "https://www.youtube.com/watch?v=qtcsRLUaYIA",
    },

    {
      number: 635,
      artist: "Soil",
      title: "Unreal",
      link: "https://www.youtube.com/watch?v=wdTl5R1YzaA",
    },

    {
      number: 636,
      artist: "Soilwork",
      title: "Distoration Sleep",
      link: "https://www.youtube.com/watch?v=m4kF43L1gFc",
    },

    {
      number: 637,
      artist: "Soilwork",
      title: "Rejection Role",
      link: "https://www.youtube.com/watch?v=VKZBFts4lPo",
    },

    {
      number: 638,
      artist: "SUM 41",
      title: "Over My Head",
      link: "https://www.youtube.com/watch?v=gY3l3AAxLZQ",
    },

    {
      number: 639,
      artist: "SUM 41",
      title: "Pieces",
      link: "https://www.youtube.com/watch?v=By7ctqcWxyM",
    },

    {
      number: 640,
      artist: "SUM 41",
      title: "The Hell Song",
      link: "https://www.youtube.com/watch?v=7pE8ReA5cn4",
    },

    {
      number: 641,
      artist: "SUM 41",
      title: "Fat Lip",
      link: "https://www.youtube.com/watch?v=CMX2lPum_pg",
    },

    {
      number: 642,
      artist: "SUM 41",
      title: "War",
      link: "https://www.youtube.com/watch?v=o5fuqdczxEE",
    },

    {
      number: 643,
      artist: "SUM 41",
      title: "Still Waiting",
      link: "https://www.youtube.com/watch?v=qO-mSLxih-c",
    },

    {
      number: 644,
      artist: "SUM 41",
      title: "Noots",
      link: "https://www.youtube.com/watch?v=xcCkpYB-81E",
    },

    {
      number: 645,
      artist: "The Cult",
      title: "Painted On My Heart",
      link: "https://www.youtube.com/watch?v=H3Vu-EeYq_w",
    },

    {
      number: 646,
      artist: "Theory Of A Deadman",
      title: "Angel",
      link: "https://www.youtube.com/watch?v=thfpVOAC-y0",
    },

    {
      number: 647,
      artist: "Theory Of A Deadman",
      title: "Bad Girlfriend",
      link: "https://www.youtube.com/watch?v=9YrWsmlJSiw",
    },

    {
      number: 648,
      artist: "Three Days Grace",
      title: "Animal I've Become",
      link: "https://www.youtube.com/watch?v=xqds0B_meys",
    },

    {
      number: 649,
      artist: "Three Days Grace",
      title: "Tell Me Why",
      link: "https://www.youtube.com/watch?v=c7Kzjg18-dM",
    },

    {
      number: 650,
      artist: "Three Days Grace",
      title: "The Mountain",
      link: "https://www.youtube.com/watch?v=XblV5A1PlDo",
    },

    {
      number: 651,
      artist: "Three Days Grace",
      title: "Right Left Wrong",
      link: "https://www.youtube.com/watch?v=tUDjU4ygVew",
    },

    {
      number: 652,
      artist: "Three Days Grace",
      title: "World So Cold",
      link: "https://www.youtube.com/watch?v=0DQimvlEpjY",
    },

    {
      number: 653,
      artist: "Three Days Grace",
      title: "Break",
      link: "https://www.youtube.com/watch?v=_4VCpTZye10",
    },

    {
      number: 654,
      artist: "Three Days Grace",
      title: "Car Crash",
      link: "https://www.youtube.com/watch?v=iOyMa3rJN8o",
    },

    {
      number: 655,
      artist: "Three Days Grace",
      title: "Fallen Angel",
      link: "https://www.youtube.com/watch?v=BXOH4H--OQY",
    },

    {
      number: 656,
      artist: "Three Days Grace",
      title: "Give Me A Reason",
      link: "https://www.youtube.com/watch?v=_tWBt_j2ayM",
    },

    {
      number: 657,
      artist: "Three Days Grace",
      title: "Gone Forever",
      link: "https://www.youtube.com/watch?v=BFNvNB_f8Kw",
    },

    {
      number: 658,
      artist: "Three Days Grace",
      title: "Home",
      link: "https://www.youtube.com/watch?v=7NQ8OCcQ3LA",
    },

    {
      number: 659,
      artist: "Three Days Grace",
      title: "Human Race",
      link: "https://www.youtube.com/watch?v=50WH8OpSTS4",
    },

    {
      number: 660,
      artist: "Three Days Grace",
      title: "I Am Machine",
      link: "https://www.youtube.com/watch?v=8Zx6RXGNISk",
    },

    {
      number: 661,
      artist: "Three Days Grace",
      title: "I Hate Everything About You",
      link: "https://www.youtube.com/watch?v=d8ekz_CSBVg",
    },

    {
      number: 662,
      artist: "Three Days Grace",
      title: "Landmine",
      link: "https://www.youtube.com/watch?v=t3_otTQrM_Q",
    },

    {
      number: 663,
      artist: "Three Days Grace",
      title: "Misery Loves My Company",
      link: "https://www.youtube.com/watch?v=QkSASi_eN_k",
    },

    {
      number: 664,
      artist: "Three Days Grace",
      title: "Never Too Late",
      link: "https://www.youtube.com/watch?v=lL2ZwXj1tXM",
    },

    {
      number: 665,
      artist: "Three Days Grace",
      title: "Nothing's Fair In Love And War",
      link: "https://www.youtube.com/watch?v=jNgq1s7Z1w4",
    },

    {
      number: 666,
      artist: "Three Days Grace",
      title: "One Too Many",
      link: "https://www.youtube.com/watch?v=9_aqAbN-1ck",
    },

    {
      number: 667,
      artist: "Three Days Grace",
      title: "Pain",
      link: "https://www.youtube.com/watch?v=Ud4HuAzHEUc",
    },

    {
      number: 668,
      artist: "Three Days Grace",
      title: "Painkiller",
      link: "https://www.youtube.com/watch?v=-U98qkjbYek",
    },

    {
      number: 669,
      artist: "Three Days Grace",
      title: "Riot",
      link: "https://www.youtube.com/watch?v=ixZDTiXiHsc",
    },

    {
      number: 670,
      artist: "Three Days Grace",
      title: "So What",
      link: "https://www.youtube.com/watch?v=0eA35x3zxgY",
    },

    {
      number: 671,
      artist: "Three Days Grace",
      title: "The Good Life",
      link: "https://www.youtube.com/watch?v=tzRk5EIHAoI",
    },

    {
      number: 672,
      artist: "Three Days Grace",
      title: "The High Road",
      link: "https://www.youtube.com/watch?v=Cvnk_DSUq3E",
    },

    {
      number: 673,
      artist: "Three Days Grace",
      title: "The Real You",
      link: "https://www.youtube.com/watch?v=qI_TvHh0xSc",
    },

    {
      number: 674,
      artist: "Three Days Grace",
      title: "Time Of Dying",
      link: "https://www.youtube.com/watch?v=pMDcYX2wRSg",
    },

    {
      number: 675,
      artist: "Three Days Grace",
      title: "I Don't Care",
      link: "https://www.youtube.com/watch?v=Bv0AmbzQEnM",
    },

    {
      number: 676,
      artist: "Three Days Grace",
      title: "Get Out Alive",
      link: "https://www.youtube.com/watch?v=miFhwa1_fwE",
    },

    {
      number: 677,
      artist: "Electrasy",
      title: "Cosmic Castaway",
      link: "https://www.youtube.com/watch?v=JKlMOblghiQ",
    },

    {
      number: 678,
      artist: "Powerman 5000",
      title: "The End Is Over",
      link: "https://www.youtube.com/watch?v=0aopIlxZ1KQ",
    },

    {
      number: 679,
      artist: "Lit",
      title: "Over My Head",
      link: "https://www.youtube.com/watch?v=oVxhOTtY9Vw",
    },

    {
      number: 680,
      artist: "The Urge",
      title: "It's My Turn To Fly",
      link: "https://www.youtube.com/watch?v=xcnF1ioaBr4",
    },

    {
      number: 681,
      artist: "Trapt",
      title: "Love Hate Relationship",
      link: "https://www.youtube.com/watch?v=_QacAwAiPHo",
    },

    {
      number: 682,
      artist: "Trivium",
      title: "Blind Leading The Blind",
      link: "https://www.youtube.com/watch?v=uVpU-OXrg1c",
    },

    {
      number: 683,
      artist: "Trivium",
      title: "Built To Fall",
      link: "https://www.youtube.com/watch?v=_XD2jKlCiK0",
    },

    {
      number: 684,
      artist: "Trivium",
      title: "Down From The Sky",
      link: "https://www.youtube.com/watch?v=EApnhO2OIrw",
    },

    {
      number: 685,
      artist: "Trivium",
      title: "In Waves",
      link: "https://www.youtube.com/watch?v=KxOhc-dfEDY",
    },

    {
      number: 686,
      artist: "Trivium",
      title: "Silence In The Snow",
      link: "https://www.youtube.com/watch?v=PcIlZ3luYHc",
    },

    {
      number: 687,
      artist: "Trivium",
      title: "Strife",
      link: "https://www.youtube.com/watch?v=IIvSXocE6YY",
    },

    {
      number: 688,
      artist: "Trivium",
      title: "Through Blood And Dirt And Bone",
      link: "https://www.youtube.com/watch?v=CDJkUjWJoAo",
    },

    {
      number: 689,
      artist: "Trivium",
      title: "Until The World Goes Cold",
      link: "https://www.youtube.com/watch?v=pm-xlwkQ_qc",
    },

    {
      number: 690,
      artist: "Trivium",
      title: "Watch The World Burn",
      link: "https://www.youtube.com/watch?v=gDfYxx_r0is",
    },

    {
      number: 691,
      artist: "Sonic Syndicate",
      title: "Turn It Up",
      link: "https://www.youtube.com/watch?v=Izwgb841-6I",
    },

    {
      number: 692,
      artist: "Sonic Syndicate",
      title: "Jack of Diamonds",
      link: "https://www.youtube.com/watch?v=gMke7YPquBg",
    },

    {
      number: 693,
      artist: "Andy Black",
      title: "21 Guns (cover)",
      link: "https://www.youtube.com/watch?v=AgOQ22nIV28",
    },

    {
      number: 694,
      artist: "Andy Black",
      title: "Ribcage",
      link: "https://www.youtube.com/watch?v=l8Bhlg16d8E",
    },

    {
      number: 695,
      artist: "Andy Black",
      title: "We Don't Have To Dance",
      link: "https://www.youtube.com/watch?v=8fEoWA9Vz3A",
    },

    {
      number: 696,
      artist: "Black Veil Brides",
      title: "Heart Of Fire",
      link: "https://www.youtube.com/watch?v=RZxhWqxwsBQ",
    },

    {
      number: 697,
      artist: "Eiffel 65",
      title: "Blue",
      link: "https://www.youtube.com/watch?v=68ugkg9RePc",
    },

    {
      number: 698,
      artist: "Fear Factory",
      title: "Cars",
      link: "https://www.youtube.com/watch?v=_Pa-95S7Hvg",
    },

    {
      number: 699,
      artist: "Moby",
      title: "Flower",
      link: "https://www.youtube.com/watch?v=6A2V9Bu80J4",
    },

    {
      number: 700,
      artist: "Mos Def ft. DJ Shadow",
      title: "Six Days",
      link: "https://www.youtube.com/watch?v=5JhKWFxLhKo",
    },

    {
      number: 701,
      artist: "Twenty One Pilots",
      title: "Chlorine",
      link: "https://www.youtube.com/watch?v=eJnQBXmZ7Ek",
    },

    {
      number: 702,
      artist: "Twenty One Pilots",
      title: "Car Radio",
      link: "https://www.youtube.com/watch?v=92XVwY54h5k",
    },

    {
      number: 703,
      artist: "Twenty One Pilots",
      title: "Heavydirtysoul",
      link: "https://www.youtube.com/watch?v=r_9Kf0D5BTs",
    },

    {
      number: 704,
      artist: "Skillet",
      title: "Monster",
      link: "https://www.youtube.com/watch?v=1mjlM_RnsVE",
    },

    {
      number: 705,
      artist: "Skillet",
      title: "Hero",
      link: "https://www.youtube.com/watch?v=uGcsIdGOuZY",
    },

    {
      number: 706,
      artist: "Skillet",
      title: "Awake And Alive",
      link: "https://www.youtube.com/watch?v=2aJUnltwsqs",
    },

    {
      number: 707,
      artist: "Skillet",
      title: "Feel Invincible",
      link: "https://www.youtube.com/watch?v=Qzw6A2WC5Qo",
    },

    {
      number: 708,
      artist: "Skillet",
      title: "Not Gonna Die",
      link: "https://www.youtube.com/watch?v=fgmpWkUcpjo",
    },

    {
      number: 709,
      artist: "Skillet",
      title: "Whispers In The Dark",
      link: "https://www.youtube.com/watch?v=ZRG5oOL5WO0",
    },

    {
      number: 710,
      artist: "Skillet",
      title: "Comatose",
      link: "https://www.youtube.com/watch?v=SbjKOI8VTY0",
    },

    {
      number: 711,
      artist: "Skillet",
      title: "Sick Of It",
      link: "https://www.youtube.com/watch?v=AHzU-9iozmo",
    },

    {
      number: 712,
      artist: "Bitches Brew",
      title: "Crosses",
      link: "https://www.youtube.com/watch?v=QBN-1Q0_Fiw",
    },

    {
      number: 713,
      artist: "The Pretty Reckless",
      title: "Make Me Wanna Die",
      link: "https://www.youtube.com/watch?v=txBfhpm1jI0",
    },

    {
      number: 714,
      artist: "The Pretty Reckless",
      title: "Heaven Knows",
      link: "https://www.youtube.com/watch?v=rHBxJCq99jA",
    },

    {
      number: 715,
      artist: "Circa Survive",
      title: "Child Of The Desert",
      link: "https://www.youtube.com/watch?v=ri3QahSZlus",
    },

    {
      number: 716,
      artist: "Dorothy",
      title: "Raise Hell",
      link: "https://www.youtube.com/watch?v=rmYyPcEQKU4",
    },

    {
      number: 717,
      artist: "Meg Myers",
      title: "Make A Shadow",
      link: "https://www.youtube.com/watch?v=J-z4sUKWd6Q",
    },

    {
      number: 718,
      artist: "Barns Courtney",
      title: "Fire",
      link: "https://www.youtube.com/watch?v=hLEoictM8p4",
    },

    {
      number: 719,
      artist: "Foreigner",
      title: "I Want To Know What Love Is",
      link: "https://www.youtube.com/watch?v=r3Pr1_v7hsw",
    },

    {
      number: 720,
      artist: "Draft Punk",
      title: "Castor",
      link: "https://www.youtube.com/watch?v=1Y7NhRRNEEE",
    },

    {
      number: 721,
      artist: "Journey",
      title: "Separate Ways",
      link: "https://www.youtube.com/watch?v=LatorN4P9aA",
    },

    {
      number: 722,
      artist: "Marilyn Manson",
      title: "Sweet Dreams",
      link: "https://www.youtube.com/watch?v=QUvVdTlA23w",
    },

    {
      number: 723,
      artist: "Marilyn Manson",
      title: "Killing Strangers",
      link: "https://www.youtube.com/watch?v=eNTjM3_0N80&ab_channel=ThePaleEmperordiscThePaleEmperordisc",
    },

    {
      number: 724,
      artist: "The Cab",
      title: "Angel With A Shotgun",
      link: "https://www.youtube.com/watch?v=rQKMLmXc0xo",
    },

    {
      number: 725,
      artist: "In Flames",
      title: "Where The Dead Ships Dwell",
      link: "https://www.youtube.com/watch?v=7614mSu4hbk",
    },

    {
      number: 726,
      artist: "Te Runaways",
      title: "Cherry Bomb",
      link: "https://www.youtube.com/watch?v=q9dvwVMsGn8",
    },

    {
      number: 727,
      artist: "Brad Fiedel",
      title: "Terminator 2 Theme",
      link: "https://www.youtube.com/watch?v=pVZ2NShfCE8",
    },

    {
      number: 728,
      artist: "The Cure",
      title: "Burn",
      link: "https://www.youtube.com/watch?v=mfTkL-ZHDCY",
    },

    {
      number: 729,
      artist: "Fresh Fabrik",
      title: "Drive My Hand",
      link: "https://www.youtube.com/watch?v=uopuOnDRlKY",
    },

    {
      number: 730,
      artist: "Fresh Fabrik",
      title: "Steeling The Sun",
      link: "https://www.youtube.com/watch?v=58ivrK0CY30",
    },

    {
      number: 731,
      artist: "Nightwish",
      title: "Ever Dream",
      link: "https://www.youtube.com/watch?v=wbHnhvgi7dM",
    },

    {
      number: 732,
      artist: "Five Finger Death Punch",
      title: "Wash It All Away",
      link: "https://www.youtube.com/watch?v=l9VFg44H2z8",
    },

    {
      number: 733,
      artist: "Billie Eilish",
      title: "Bad Guy",
      link: "https://www.youtube.com/watch?v=DyDfgMOUjCI",
    },

    {
      number: 734,
      artist: "Gorillaz",
      title: "Tomorrow Comes Today",
      link: "https://www.youtube.com/watch?v=PiNdcBg3xC8",
    },

    {
      number: 735,
      artist: "Blues Saraceno",
      title: "Grave Digger",
      link: "https://www.youtube.com/watch?v=so2s-NZVXZA",
    },

    {
      number: 736,
      artist: "Sonic Syndicate",
      title: "Only Inhuman",
      link: "https://www.youtube.com/watch?v=2-BEARhFsXk",
    },

    {
      number: 737,
      artist: "Danzig",
      title: "Mother",
      link: "https://www.youtube.com/watch?v=jesc3yvZSws",
    },

    {
      number: 738,
      artist: "Disturbed",
      title: "Asylum",
      link: "https://www.youtube.com/watch?v=1K9jBL2syJ8",
    },

    {
      number: 739,
      artist: "Rev Theory",
      title: "Hell Yeah",
      link: "https://www.youtube.com/watch?v=7LuSP4QaXiQ",
    },

    {
      number: 740,
      artist: "Meg Myers",
      title: "Desire",
      link: "https://www.youtube.com/watch?v=bR5u9jb0PJE",
    },

    {
      number: 741,
      artist: "Meg Myers",
      title: "Feather",
      link: "https://www.youtube.com/watch?v=mBN-0azz3X4",
    },

    {
      number: 742,
      artist: "Escape the Fate",
      title: "You're Insane",
      link: "https://www.youtube.com/watch?v=KAgHj2y_TDk",
    },

    {
      number: 743,
      artist: "Slipknot",
      title: "XIX",
      link: "https://www.youtube.com/watch?v=2fsGyFjoyR0",
    },

    {
      number: 744,
      artist: "Apey",
      title: "Personal Demon",
      link: "https://www.youtube.com/watch?v=u7YPm6859Ao",
    },

    {
      number: 745,
      artist: "Metallica",
      title: "Dyers Eve",
      link: "https://www.youtube.com/watch?v=v6kb5fvv6_A",
    },

    {
      number: 746,
      artist: "Palaye Royale",
      title: "Dying in A Hot Tub (Acoustic)",
      link: "https://www.youtube.com/watch?v=OGiEN__72c4",
    },

    {
      number: 747,
      artist: "Five Finger Death Punch",
      title: "The Pride",
      link: "https://www.youtube.com/watch?v=zuQGx1H1Qh8",
    },

    {
      number: 748,
      artist: "Alestorm",
      title: "Alestorm",
      link: "https://www.youtube.com/watch?v=hJ_eVIZkjZE",
    },

    {
      number: 749,
      artist: "Alestorm",
      title: "Drink",
      link: "https://www.youtube.com/watch?v=f55CqLc6IR0",
    },

    {
      number: 750,
      artist: "Alestorm",
      title: "Mexico",
      link: "https://www.youtube.com/watch?v=-r8jlHDBMsw",
    },

    {
      number: 751,
      artist: "Elefánt",
      title: "Hinta",
      link: "https://www.youtube.com/watch?v=tZMRdiSAHi8",
    },

    {
      number: 752,
      artist: "Elefánt",
      title: "Plüss",
      link: "https://www.youtube.com/watch?v=4yzJFyjK-54",
    },

    {
      number: 753,
      artist: "Blind Myself",
      title: "Tudod, hogy nincs bocsánat",
      link: "https://www.youtube.com/watch?v=8syxaoCfhkI",
    },

    {
      number: 754,
      artist: "Bring Me The Horizon",
      title: "True Friends",
      link: "https://www.youtube.com/watch?v=BpmJh2CjSIA",
    },

    {
      number: 755,
      artist: "ONE OK ROCK",
      title: "Answer Is Near",
      link: "https://www.youtube.com/watch?v=UlmhKXA77ro",
    },

    {
      number: 756,
      artist: "ONE OK ROCK",
      title: "The Beginning",
      link: "https://www.youtube.com/watch?v=Hh9yZWeTmVM",
    },

    {
      number: 757,
      artist: "Sonic Syndicate",
      title: "Aftermath",
      link: "https://www.youtube.com/watch?v=1SQ6YIPVJ_0",
    },

    {
      number: 758,
      artist: "Green Day",
      title: "Wake Me Up When September Ends",
      link: "https://www.youtube.com/watch?v=jVO8sUrs-Pw",
    },

    {
      number: 759,
      artist: "Sonic Syndicate",
      title: "Crowned In Despair",
      link: "https://www.youtube.com/watch?v=wW4PLkYmFr4",
    },

    {
      number: 760,
      artist: "Paddy And The Rats",
      title: "Castaway",
      link: "https://www.youtube.com/watch?v=6GcxdOmD9CM",
    },

    {
      number: 761,
      artist: "Thousand Foot Krutch",
      title: "Courtesy Call",
      link: "https://www.youtube.com/watch?v=ocpDEOXABWg",
    },

    {
      number: 762,
      artist: "Thousand Foot Krutch",
      title: "Let The Sparks Fly",
      link: "https://www.youtube.com/watch?v=uNeat23LU0M",
    },

    {
      number: 763,
      artist: "Norther",
      title: "Last Breath",
      link: "https://www.youtube.com/watch?v=khe-bIlNTb8",
    },

    {
      number: 764,
      artist: "Illnath",
      title: "And There Was Light",
      link: "https://www.youtube.com/watch?v=T1q9xD7of_Y",
    },

    {
      number: 765,
      artist: "Live",
      title: "I Alone",
      link: "https://www.youtube.com/watch?v=FNrQOUtXYOo&ab",
    },

    {
      number: 766,
      artist: "Snow Patrol",
      title: "Chasing Cars",
      link: "https://www.youtube.com/watch?v=GemKqzILV4w",
    },

    {
      number: 767,
      artist: "In Flames",
      title: "Stay With Me",
      link: "https://www.youtube.com/watch?v=__7K3FNiWeo",
    },

    {
      number: 768,
      artist: "SUPERDEATHFLAME ",
      title: "Never Forgotten Justice",
      link: "https://www.youtube.com/watch?v=QesN8EYwGQc&ab_channel=Superdeathflame-Topic",
    },

    {
      number: 769,
      artist: "Linkin Park",
      title: "Somewhere I Belong",
      link: "https://www.youtube.com/watch?v=zsCD5XCu6CM",
    },
    {
      number: 770,
      artist: "Eve To Adam",
      title: "Immortal",
      link: "https://www.youtube.com/watch?v=WTPJSMvFBig&ab_channel=EVETOADAM",
    },
    {
      number: 771,
      artist: "Deuce",
      title: "Look At Me Now",
      link: "https://www.youtube.com/watch?v=kudLWlkuh8Q&ab_channel=BetterNoiseMusic",
    },
    {
      number: 772,
      artist: "Citizen Soldier",
      title: "If These Scars Could Speak",
      link: "https://www.youtube.com/watch?v=hbtDPxKcijY&ab_channel=CitizenSoldier",
    },
    {
      number: 773,
      artist: "America",
      title: "A Horse With No Name",
      link: "https://www.youtube.com/watch?v=zSAJ0l4OBHM&ab_channel=badgarin",
    },
    {
      number: 774,
      artist: "Fail Emotions",
      title: "Reborn",
      link: "https://www.youtube.com/watch?v=jwwp_th7IxM&ab_channel=FailEmotions",
    },
    {
      number: 775,
      artist: "Art Of Dying",
      title: "Tear Down The Wall",
      link: "https://www.youtube.com/watch?v=BY6bFKIjhOA&ab_channel=BetterNoiseMusic",
    },
    {
      number: 776,
      artist: "Five Finger Death Punch",
      title: "You're Not My Kind",
      link: "https://www.youtube.com/watch?v=nEG2OCnNvoE&ab_channel=5FDPVEVO",
    },
    {
      number: 777,
      artist: "Three Days Grace",
      title: "The End Is Not The Answer",
      link: "https://www.youtube.com/watch?v=6gUcNoC_EAA&ab_channel=ThreeDaysGraceVEVO",
    },
    {
      number: 778,
      artist: "Bad Omens",
      title: "Exit Wounds",
      link: "https://www.youtube.com/watch?v=MaE5gEnZm_c&ab_channel=SumerianRecordsSumerianRecords",
    },
    {
      number: 779,
      artist: "Slipknot",
      title: "If Rain Is What You Want",
      link: "https://www.youtube.com/watch?v=RUV5-ZqQ4o0",
    },
    {
      number: 780,
      artist: "SUM 41",
      title: "Motivation",
      link: "https://www.youtube.com/watch?v=-12hfLSlu9s",
    },




  ]

const specialSongs = [
  {
    artist: "Linkin Park",
    title: "My December",  // dec 1 song
    link: "https://www.youtube.com/watch?v=9DCdCoQ49u8",
    month: 11,
    date: 1,
    message: "Winter is Coming... Oh wait, it's already here!"
  },

  {
    artist: "Linkin Park",
    title: "Valentine's Day",  // febr 14 song
    link: "https://www.youtube.com/watch?v=KAFOpywZbMM",
    month: 1,
    date: 14,
    message: "Happy Valentine's Day! :)"
  },

  {
    artist: "Hollywood Undead",
    title: "Christmas In Hollywood", // dec 25 song
    link: "https://www.youtube.com/watch?v=faFdOj-FQjc",
    month: 11,
    date: 25,
    message: "This is the only Christmas song I like.\nMerry Christmas!"
  },

  {
    artist: "Yugioh",
    title: "No Matter What", // febr 29 song
    link: "https://www.youtube.com/watch?v=h820qlMOi7c",
    month: 1,
    date: 29,
    message: "I really loved Yugioh when I was a kid."
  },

  {
    artist: "Napalm Death",
    title: "You Suffer", // apr 1 song
    link: "https://www.youtube.com/watch?v=ybGOT4d2Hs8",
    month: 3,
    date: 1,
    message: "\"That's a whole Song?\" :D"
  },

  {
    artist: "Linkin Park",
    title: "Breaking The Habit", // febr 26 song
    link: "https://www.youtube.com/watch?v=v2H4l9RpkwM",
    month: 1,
    date: 26,
    message: "Today is my birthday.\nAnd this is my favourite song."
  },

  {
    artist: "Helloween",
    title: "Halloween",  // okt 31 song
    link: "https://www.youtube.com/watch?v=dtPs1QrMI1I",
    month: 9,
    date: 31,
    message: "Happy Halloween!"
  }

]
