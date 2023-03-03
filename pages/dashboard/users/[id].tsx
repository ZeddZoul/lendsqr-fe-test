import Layout from "@/components/Layout";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "./[id].module.scss";
interface User {
  user: {
    id: string;
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    accountBalance: string;
    accountNumber: string;
    profile: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      avatar: string;
      gender: string;
      bvn: string;
      address: string;
      currency: string;
    };
    guarantor: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      gender: string;
      address: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    education: {
      level: string;
      employmentStatus: string;
      sector: string;
      duration: string;
      officeEmail: string;
      monthlyIncome: string[];
      loanRepayment: string;
    };
  };
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const APIRoute = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
  try {
    const res = await fetch(APIRoute);
    const user = await res.json();

    return {
      props: { user },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: {},
      },
    };
  }
};

const Userpage = ({ user }: User) => {
  const {
    profile,
    accountNumber,
    socials,
    education,
    accountBalance,
    createdAt,
    lastActiveDate,
    email,
    phoneNumber,
    orgName,
    guarantor,
  } = user;

  let balFormatter = new Intl.NumberFormat(["en-NG", "en-US"], {
    style: "currency",
    currency: profile?.currency,
  });

  return (
    <div className={s.UserDetails}>
      <Link href="../">
        <span>&larr;</span>
        <span>Back to Users</span>
      </Link>
      <div className={s.header}>
        <h2>User Details</h2>

        <span>
          <p>Blacklist User</p>
          <p>Activate User</p>
        </span>
      </div>

      <div className={s.Profile}>
        
        <div className={s.details}>
          <div>
            <Image src={profile?.avatar} width={100} height={100} alt="" />
            <span>
              <h3>
                {profile?.firstName} {profile?.lastName}
              </h3>
              <p>{profile?.bvn}</p>
            </span>
          </div>
        
          <div>
            <p>User&apos;s tier</p>
            <p>***</p>
          </div>
      
          <div>
            <h3>{balFormatter.format(parseInt(accountBalance) * 1000)}</h3>
            <p>{accountNumber} / providus bank</p>
          </div>
        </div>
        <div className={s.nav}>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>Apps and System</p>
        </div>
      </div>

      <main>
        <div className={s.Information}>
          <h2>Personal Information</h2>
          <div>
            {" "}
            <span>
              <p>full name</p>
              <h3>
                {" "}
                {profile?.firstName} {profile?.lastName}
              </h3>
            </span>
            <span>
              <p>Phone number</p>
              <h3> {phoneNumber}</h3>
            </span>
            <span>
              <p>email address</p>
              <h3> {email}</h3>
            </span>
            <span>
              <p>bvn</p>
              <h3> {profile?.bvn}</h3>
            </span>
            <span>
              <p>gender</p>
              <h3> {profile?.gender}</h3>
            </span>
            <span>
              <p>Marital status</p>
              <h3> Single</h3>
            </span>
            <span>
              <p>children</p>
              <h3> None</h3>
            </span>
            <span>
              <p>Type of residence</p>
              <h3> Parents&apos; apartment</h3>
            </span>
          </div>
        </div>
       
        <div className={s.Education}>
          <h2>Education and Employment</h2>
          <div>
            <span>
              <p> level of education</p>
              <h3>{education.level}</h3>
            </span>
            <span>
              <p>Employment status</p>
              <h3>{education.employmentStatus}</h3>
            </span>
            <span>
              <p>sector of employment</p>
              <h3> {education.sector} </h3>
            </span>
            <span>
              <p>Duration of employment</p>
              <h3> {education.duration} </h3>
            </span>
            <span>
              <p>office email</p>
              <h3> {education.officeEmail} </h3>
            </span>
            <span>
              <p>monthly income</p>
              <h3>
                {balFormatter.format(
                  parseInt(education.monthlyIncome[1]) * 1000
                )}{" "}
                -{" "}
                {balFormatter.format(
                  parseInt(education.monthlyIncome[0]) * 1000
                )}
              </h3>
            </span>
            <span>
              <p> loan repayment</p>
              <h3>
                {" "}
                {balFormatter.format(
                  parseInt(education.loanRepayment) * 1000
                )}{" "}
              </h3>
            </span>
          </div>
        </div>
        
        <div className={s.Socials}>
          <h2>socials</h2>
          <div>
            <span>
              <p>twitter</p>
              <h3>{socials.twitter}</h3>
            </span>
            <span>
              <p>facebook</p>
              <h3>{socials.facebook}</h3>
            </span>
            <span>
              <p>instagram</p>
              <h3>{socials.instagram}</h3>
            </span>
          </div>
        </div>
        
        <div className={s.Guarantor}>
          <h2>Guarantor</h2>
          <div>
            <span>
              <p>Full Name</p>
              <h3>
                {guarantor.firstName} {guarantor.lastName}
              </h3>
            </span>
            <span>
              <p> Gender</p>
              <h3>{guarantor.gender}</h3>
            </span>
            <span>
              <p>Phone Number</p>
              <h3>{guarantor.phoneNumber}</h3>
            </span>
            <span>
              <p> Home Address</p>
              <h3>{guarantor.address}</h3>
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
Userpage.pageLayout = Layout;
export default Userpage;
