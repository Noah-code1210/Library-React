import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";

import { Link } from "react-router-dom";

import Rating from "./Rating";

import Price from "./Price";

const Book = ({ book }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="book">
      {loading && (
        <>
          <div className="book__img--skeleton"></div>

          <div className="skeleton book__title--skeleton"></div>

          <div className="skeleton book__rating--skeleton"></div>

          <div className="skeleton book__pricing--skeleton"></div>
        </>
      )}

      <div style={{ display: loading ? "none" : "block" }}>
        <Link to={`/books/${book.id}`}>
          <figure className="book__img--wrapper">
            <img
              src={book.url}
              alt=""
              className="book__img"
              onLoad={handleImageLoad}
            />
          </figure>
        </Link>

        <div className="book__title">
          <Link to={`/books/${book.id}`} className="book__title--link">
            {book.title}
          </Link>
        </div>
        <Rating rating={book.rating} />
        <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
      </div>
    </div>
  );
};

export default Book;
