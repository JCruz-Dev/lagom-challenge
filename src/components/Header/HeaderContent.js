import React from "react";
import { Header } from "./Header";

export const HeaderContent = () => {
  return (
    <div className="space-content header__content">
      <Header />
      <div className="header__title__container">
        <h1 className="header__content__title animation-fade-up">
          Digital products lovingly made with a human touch.
        </h1>
      </div>
    </div>
  );
};
