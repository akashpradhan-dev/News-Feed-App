import React from "react";
import style from "../styles/Layout.module.css";
function Header() {
  return (
    <>
      <h1>
        Today's Treading <span className={style.title}>News</span>
      </h1>
    </>
  );
}

export default Header;
