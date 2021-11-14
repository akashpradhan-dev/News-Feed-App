import React from "react";
import styles from "../styles/nav.module.css";
import Link from "next/link";
function Nav() {
  return (
    <div>
      <ul className={styles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
