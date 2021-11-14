import React from "react";
import style from "../styles/ArticleList.module.css";
import ArticleItem from "./ArticleItem";
function AritclesList({ ariticles }) {
  return (
    <div className={style.grid}>
      {ariticles.map((ariticle) => (
        <ArticleItem key={ariticle.id} ariticle={ariticle} />
      ))}
    </div>
  );
}

export default AritclesList;
