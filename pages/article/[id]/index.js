import React from "react";
import style from "../../../styles/ArticleList.module.css";
import Link from "next/link";
import Head from "next/head";

function article({ data }) {
  //   const router = useRouter();

  //   const { id } = router.query;

  return (
    <div className={style.grid}>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.title} />
      </Head>

      <h3>{data.title}</h3>
      <p>{data.body}</p>

      <br />

      <Link href="/">
        <a className={style.btn}>Go Back</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default article;
