import Image from 'next/image';
import React from 'react'
import s from "./index.module.scss"
import caret from "@/public/icons/rev-caret.svg"
import briefcase from "@/public/icons/briefcase.svg"
import Home from "@/public/icons/home.svg"
import Fees from "@/public/icons/Fees.svg"
import pricing from "@/public/icons/pricing.svg"
import logs from "@/public/icons/logs.svg"
import reports from "@/public/icons/reports.svg"
import preferences from "@/public/icons/preferences.svg"
import serviceAcc from "@/public/icons/service-acc.svg"
import settlement from "@/public/icons/settlement.svg"
import loans from "@/public/icons/loans.svg"
import karma from "@/public/icons/karma.svg"
import whitelist from "@/public/icons/whitelist.svg"
import transactions from "@/public/icons/transactions.svg"
import savingsPro from "@/public/icons/savings-product.svg"
import savings from "@/public/icons/savings.svg"
import loanrequests from "@/public/icons/loanrequests.svg"
import handshake from "@/public/icons/handshake.svg"
import guarantors from "@/public/icons/guarantors.svg"
import socials from "@/public/icons/socials.svg"
import services from "@/public/icons/services.svg"

const Sidebar = () => {
  return (
    <div className={s.Sidebar}>
      <strong>
        <Image src={briefcase} alt="" />
        Switch Organization <Image src={caret} alt="" />
      </strong>
      <br />
      <small>
        <Image src={Home} alt="" /> Dashboard
      </small>
      <br />
      <br />
      <h5>CUSTOMERS</h5>
      <ul>
        <li>
          <Image src={socials} alt="" />
          Users
        </li>
        <li>
          <Image src={guarantors} alt="" />
          Guarantors
        </li>
        <li>
          <Image src={loans} alt="" />
          Loans
        </li>
        <li>
          <Image src={handshake} alt="" />
          Decision Models
        </li>
        <li>
          <Image src={savings} alt="" />
          Savings
        </li>
        <li>
          <Image src={loanrequests} alt="" />
          Loan Requests
        </li>
        <li>
          <Image src={whitelist} alt="" />
          Whitelist
        </li>
        <li>
          <Image src={karma} alt="" />
          Karma
        </li>
      </ul>
      <h5>BUSINESSES</h5>
      <ul>
        <li>
          <Image src={briefcase} alt="" />
          Organisation
        </li>
        <li>
          <Image src={loans} alt="" />
          Loan Products
        </li>
        <li>
          <Image src={savingsPro} alt="" />
          Savings Products
        </li>
        <li>
          <Image src={Fees} alt="" />
          Fees and Charges
        </li>
        <li>
          <Image src={transactions} alt="" />
          Transactions
        </li>
        <li>
          <Image src={services} alt="" />
          Services
        </li>
        <li>
          <Image src={serviceAcc} alt="" />
          Service Account
        </li>
        <li>
          <Image src={settlement} alt="" />
          Settlements
        </li>
        <li>
          <Image src={reports} alt="" />
          Reports
        </li>
      </ul>
      <h5>SETTINGS</h5>
      <ul>
        <li>
          <Image src={preferences} alt="" />
          Preferences
        </li>
        <li>
          <Image src={pricing} alt="" />
          Fees and Pricing
        </li>
        <li>
          <Image src={logs} alt="" />
          Audit Logs
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
}

export default Sidebar