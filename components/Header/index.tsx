import React from 'react'
import logo from "@/public/icons/logo.svg"
import dummy from "@/public/icons/favicon.svg";
import search from "@/public/icons/search.svg";
import bell from "@/public/icons/notification.svg";
import s from "./index.module.scss"
import Image from 'next/image';
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.left}>
        <p className={s.menu_btn}>&equiv;</p>
        <Image src={logo} alt="" priority/>
        <form action="" method="post">
          <input
            className={s.search}
            type="search"
            name="search"
            placeholder="Search for anything"
          />
          <button className={s.search}>
            <Image src={search} alt="" />
          </button>
        </form>
      </div>
      <div className={s.right}>
        <a href="https://google.com">Docs</a>
        <Image src={bell} alt="notifications" />
        <span>
          <Image src={dummy} alt="user__profile" />
          <p>Adedeji v</p>
        </span>
      </div>
    </div>
  );
}

export default Header