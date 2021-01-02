const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors({ // cors 설정을 하지 않아서 콘솔창에 에러가 뜨고 JSON 형식으로 데이터를 받아오지 못함
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

const data = [
    {
      id: 1,  
      image: '',
      title: "또덩",
      text:
        "이렇고 저렇고나ㅓㄹㄴ이ㅏ러ㅣㄹ나링리ㅏ니;ㅇㄴ;ㅣㄹ미;ㅁㅇ멜때내나ㅏㅣ타ㅣ",
      category: "기타",
      publisher: "야호일보",
    },
    {
      id: 2,
      image: '',
      title: "누가 하희라? 하희라·최수종 딸, 엄마 꼭닮은 미모 시선집중1",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: "연예",
      publisher: "중앙일보",
    },
    {
      id: 3,
      image: '',
      title: "누가 하희라? 하희라·최수종 딸, 엄마 꼭닮은 미모 시선집중2",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: "연예",
      publisher: "중앙일보",
    },
    {
      id: 4,
      image: '',
      title: "누가 하희라? 하희라·최수종 딸, 엄마 꼭닮은 미모 시선집중3",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: "연예",
      publisher: "중앙일보",
    },
    {
        id: 5,
      image: '',
      title: "여기도 연예",
      text:
        "뭘 봐",
      category: "연예",
      publisher: "중앙일보",
    },
    {
        id: 6,
      image: '',
      title: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ id: 6 하희라·최수종 딸, 엄마 꼭닮은 미모 시선집중",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: "연예",
      publisher: "중앙일보",
    },
    {
        id: 7,
      image: '',
      title: "코로나 관련 늬우스",
      text:
        "오늘 확진자가.....",
      category: "사회",
      publisher: "중앙일보",
    },
    {
        id: 8,
      image: '',
      title: "스포츠 늬우스 하희라·최수종 딸, 엄마 꼭닮은 미모 시선집중 1",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: "스포츠",
      publisher: "소정일보",
    },
    {
        id: 9,
      image: '',
      title: "스포츠 늬우스2",
      text:
        "배우 하희라가 가족 여행에서 찍. 배우 최수종이 아내인 배우 하희라를 똑 닮은 딸 윤서 양을 공개해 화제를 모으고 있다. 최수종은 24일 자신의 SNS에 “가족사진 촬영...",
      category: "스포츠",
      publisher: "소정일보",
    },
    {
        id: 10,
      image: '',
      title: "코로나 관련 늬우스 1",
      text:
        "오늘 확진자가.....",
      category: "사회",
      publisher: "중앙일보",
    },
  ];

app.get('/', (req, res) => {
    res.status(200);
    res.send({ data: data });
});

app.listen(4000, () => {
    console.log('4000 start');
});