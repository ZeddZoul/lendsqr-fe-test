import {FC} from "react";
import BannerImg from "@/public/sign-in.svg";
import logo from "@/public/icons/logo.svg";
import s from  "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
const SignIn: FC = () => {
  const router = useRouter();
  return (
    <>
      <Image className={s.logo} src={logo} alt="" />
      <div className={s.Signin}>
        <Image src={BannerImg} alt="" className={s.Signin_image} />

        <form className={s.Signin_form} action="" method="post">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>
          <div className={s.Signin_form_input_wrapper}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-placeholder="Password"
                required
              />{" "}
              <p>SHOW</p>
            </div>
            <h5>FORGOT PASSWORD?</h5>
            <button onClick={(e) => { e.preventDefault;  router.push("/dashboard")}}>LOG IN</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
