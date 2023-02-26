import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import drop from "@/public/icons/drop.svg";
import s from "./index.module.scss";
import UserTable from "@/components/UserTable";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";

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
      props: {  },
    };
  }
};
interface DATA {
  users: {
    
  }[]
}[];
const Dashboard = ({users}: DATA) => {
  console.log(users);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [UsersPerPage] = useState(10);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {});
  const idOfLastUser: number = currentPage * UsersPerPage;
  const idOfFirstUser: number = idOfLastUser - UsersPerPage;
  const displayedUsers: {}[] = users?.slice(idOfFirstUser, idOfLastUser);
  const paginate = (number: number) => setCurrentPage(number);
  return (
    <div className={s.table_container}>
      {error ? (
        <>Resource failed to load</>
      ) : (
        <>
            {" "}
            <div className={s.stats}>
              
            </div>
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
              <UserTable users={displayedUsers} Loading={Loading} />
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
