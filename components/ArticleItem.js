import React from "react";
import style from "../styles/ArticleList.module.css";
import Link from "next/link";

function ArticleItem({ ariticle }) {
  return (
    <>
      <Link href="/article/[id]" as={`article/${ariticle.id}`}>
        <a className={style.card}>
          <h3>{ariticle.title}</h3>
          <p>{ariticle.body}</p>
        </a>
      </Link>
    </>
  );
}

export default ArticleItem;
