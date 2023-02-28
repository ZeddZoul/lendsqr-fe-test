import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import s from "./index.module.scss";
import blacklist from "@/public/icons/blacklist.svg";
import eye from "@/public/icons/eye_view.svg";
import active from "@/public/icons/active.svg";
import React from "react";
interface TableProps {
  Error: string;
  users: {}[];
}

const UserTable = ({ users }: TableProps) => {
  const myref = useRef<any>();
  const [mount, setMount] = useState(false);
  const [show, setShow] = useState("");
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
      {users?.map((user: any) => {
        const status = mount && randomStatus();
        return (
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
              <span>{new Date(user.createdAt).toDateString()}</span>
            </td>

            <td ref={myref} className={s[`${status}`]} data-label="status">
              <span>{status}</span>
            </td>

            <td className={s.options} data-label="More Options">
              <button
                onClick={() => {
                  const tab = document.getElementById(`tab${user.id}`);
                  const others = document.querySelectorAll(`div[data-div]`)
                  console.log(tab);
                  if (tab && tab.style.display == "block") {
                    others.forEach((one:any) => one.style.display = "none")
                    tab.style.display = "none";
                  } else {
                    others.forEach((one:any) => one.style.display = "none")
                    tab!.style.display = "block";
                  }
                }}
              >
                &#8942;
              </button>
              <div data-div="div" style={{display: "none"}} id={`tab${user.id}`}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <Image src={eye} alt="" />
                  View details{" "}
                </Link>
                <p>
                  <Image src={blacklist} alt="" />
                  Blacklist user{" "}
                </p>
                <p>
                  <Image src={active} alt="" /> Activate user{" "}
                </p>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default UserTable;
