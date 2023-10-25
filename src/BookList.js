import React from 'react';
import GridItem from './GridItem';
import GridItemSmall from "./GridItemSmall";

function Card({children}) {

  return (
      <div className="row">{children}</div>
  );
}

function BookList() {
  const books = [
    { title: 'Путешествие в Элевсин', author: 'Виктор Пелевин', price:'300 р.', image: 'https://cv6.litres.ru/pub/c/cover_415/69586360.webp' },
    { title: 'TRANSHUMANISM INC. (Трансгуманизм Inc.)', price:'500 р.', author: 'Виктор Пелевин' },
    { title: 'Чапаев и Пустота', author: 'Виктор Пелевин', price:'800 р.', image: 'https://cv4.litres.ru/pub/c/cover_415/137941.webp' },
    { title: 'Тайные виды на гору Фудзи', author: 'Виктор Пелевин', price:'600 р.', image: 'https://cv1.litres.ru/pub/c/cover_415/37672212.webp' },
  ];

  return (
    <div className="container">
      <Card>
        {books.map((book) => (
          <div className="col-md-3">
            <GridItem {...book} />
            <br></br>
            <br></br>
            <br></br>
            <GridItemSmall {...book} />
          </div>
        ))}
        </Card>
    </div>
  );
}

export default BookList;