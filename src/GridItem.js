import React from 'react';
import {Button} from "react-bootstrap";

function GridItem({ title, author, price, image = 'data:image/png;base64,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' }) {
  return (
    <div className="grid-item card border-0">
      <h4 className="card-title" style={{ height: 80 }}>{title}</h4>
      <p className="card-text">Автор: {author}</p>
      <img src={image} alt={image} className="card-img-top" style={{ maxWidth: '100%', objectFit: 'contain', height: 450 }} />
      <p className="card-text" style={{marginLeft: 70}}>Цена: {price}</p>
              <Button variant="primary">Купить</Button>
    </div>
  );
}

export default GridItem;
