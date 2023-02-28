import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Home = () => {
  
  const router = useRouter();
  useEffect(() => {
    router.push("/signin");
  });
};

export default Home;
