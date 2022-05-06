import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", id: 1 },
    { title: "the way of kings", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of ages", id: 4 },
  ]);

  const addBook = () => {
    setBooks((prev) => [...prev, { title: "new book", id: 5 }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
