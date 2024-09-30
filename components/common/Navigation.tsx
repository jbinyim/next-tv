"use client";
import styles from "../../styles/common/navigation.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (path === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.navLeft}>
        <h1 onClick={handleLogoClick}>
          NEXT <span>T</span>V
        </h1>
        <ul>
          <li className={(path === "/" && styles.navChose) || ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={(path === "/movies" && styles.navChose) || ""}>
            <Link href="/movies">Movie</Link>
          </li>
          <li className={(path === "/tv" && styles.navChose) || ""}>
            <Link href="/tv">TV</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <p>검색</p>
      </div>
    </div>
  );
};

export default Navigation;
