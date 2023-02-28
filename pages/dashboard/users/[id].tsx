import Layout from "@/components/Layout"
import { GetServerSideProps } from "next"
import {useRouter } from "next/router"
import s from "./[id].module.scss"

export const getServerSideProps: GetServerSideProps = async ({query}) => {
const {id} = query 
  const APIRoute =
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;
  try {
    const res = await fetch(APIRoute);
    const user = await res.json();
    console.log(user);
    
    return {
      props: { user },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
  return {
    props:{
    
    }
  }
};

const User = () => {
  
  return (
    <div className={s.UserDetails}>

    </div>
  )
}
User.pageLayout = Layout
export default User