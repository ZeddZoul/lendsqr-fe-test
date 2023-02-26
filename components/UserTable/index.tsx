import { useEffect, useRef, useState } from "react";
import s from "./index.module.scss";
interface TableProps {
  Loading: boolean;
  users: {}[];
}

const UserTable = ({ Loading, users }: TableProps) => {

  const myref = useRef<any>();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);    
  }, []);
  const randomStatus = () => {
    const arr = ["Inactive", "Active", "Pending", "Blacklisted"];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const status = arr[randomIndex];
    return status;
  };

  return (
    <>
      {Loading ? (
        <h2>Loading. Please wait...</h2>
      ) : (
          users?.map((user: any) => {
            const status = mount && randomStatus() 
              
      
      return      (
          
              <tr className={s.Tablerow} key={user.id}>
                <td data-label="Organisation">
                  <span>{user.orgName}</span>
                </td>
                <td data-label="Username">
                  {" "}
                  <span>{user.userName}</span>
                </td>
                <td data-label="email">
                  {" "}
                  <span>{user.email}</span>
                </td>
                <td data-label="phone number">
                  <span> {user.phoneNumber}</span>
                </td>
                <td data-label="date joined">
                  <span>{user.createdAt}</span>
                </td>

                <td
                  ref={myref}
                  className={s[`${status}`]}
                  data-label="status"
                >
                  <span>{ status}</span>
                </td>

                <td className={s.options} data-label="More Options"></td>
              </tr>
            )
          })
      )}
    </>
  );
};

export default UserTable;
