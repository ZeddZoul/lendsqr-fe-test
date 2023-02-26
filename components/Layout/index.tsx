import s from "./index.module.scss"
import { PropsWithChildren } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={s.Layout}>
      <Header />
      <main>
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
