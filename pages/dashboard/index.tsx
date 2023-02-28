import { useState } from "react";
import Pagination from "@/components/Pagination";
import drop from "@/public/icons/drop.svg";
import s from "./index.module.scss";
import UserTable from "@/components/UserTable";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import l1 from "@/public/icons/stat_users.svg"
import l2 from "@/public/icons/stat-savings.svg"
import l3 from "@/public/icons/stat_loans.svg"
import l4 from "@/public/icons/stat_active_users.svg"

export const getServerSideProps: GetServerSideProps = async () => {
  const APIRoute =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/";
  try {
    const res = await fetch(APIRoute);
    const users = await res.json();    
    return {
      props: { users },
    };
  } catch (error) {
    
    return {
      props: { error: "Oops, could not load the resource at this time, please check your internet connection and try again later"  },
    };
  }
};
interface DATA {
  users: {
    
  }[],
  error: string
}[];
const Dashboard = ({users, error}: DATA) => {  
  const [currentPage, setCurrentPage] = useState(1);
  const [UsersPerPage] = useState(10);
  const [Error] = useState(error);
  const idOfLastUser: number = currentPage * UsersPerPage;
  const idOfFirstUser: number = idOfLastUser - UsersPerPage;
  const displayedUsers: {}[] = users?.slice(idOfFirstUser, idOfLastUser);
  const paginate = (number: number) => setCurrentPage(number);
  return (
    <div className={s.table_container}>
      <div className={s.stats}>
        <h1>Users</h1>
        <div>
          <div className={s.card}>
            <Image src={l1} alt="" />
            <h3>USERS</h3>
            <h2>2,453</h2>
          </div>
          <div className={s.card}>
            <Image src={l2} alt="" />
            <h3>ACTIVE USERS</h3>
            <h2>2,453</h2>
          </div>
          <div className={s.card}>
            <Image src={l3} alt="" />
            <h3>USERS WITH LOANS</h3>
            <h2>12,453</h2>
          </div>
          <div className={s.card}>
            <Image src={l4} alt="" />
            <h3>USERS WITH SAVINGS</h3>
            <h2>102,453</h2>
          </div>
        </div>
      </div>
      {Error ?
        (
          <p
            style={{
              textAlign: "center",
              padding: "5% 10%",
              fontSize: "18px",
              color: "",
              fontFamily: "work sans",
              maxWidth: "800px",
              margin: "auto"
            }}
          >
            {Error}
          </p>
        )
       : (
        <>
          <table className={s.dashboard}>
            <thead>
              <tr className={s.tableheader}>
                <th>
                  organisation <Image src={drop} alt="V" />
                </th>
                <th>
                  username <Image src={drop} alt="V" />
                </th>
                <th>
                  email <Image src={drop} alt="V" />
                </th>
                <th>
                  phone number <Image src={drop} alt="V" />
                </th>
                <th>
                  date joined <Image src={drop} alt="V" />
                </th>
                <th>
                  status <Image src={drop} alt="V" />
                </th>
              </tr>
            </thead>
            <tbody>
              <UserTable users={displayedUsers} Error={Error} />
            </tbody>
          </table>
          <Pagination
            usersPerPage={UsersPerPage}
            totalUsers={users?.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};
Dashboard.pageLayout = Layout
export default Dashboard;
