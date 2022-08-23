import { useState, useEffect } from "react";
import "./WelcomePage.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";

export const WelcomePage = ({ book }) => {
  useEffect(() => {}, [book]);

  return (
    <section className="welcome-page-container">
      <h2>WELCOME</h2>
      <button onClick={() => window.location.reload()}>
        Generate New Random Book
      </button>

      <NavLink
        to={`/full-book/${book.id}`}
        key={book.id}
        style={{ textDecoration: "none" }}
      >
        <BookCard bookCardProp={book} />
      </NavLink>
    </section>
  );
};
