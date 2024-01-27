import React from "react";
import styles from "./loginSignup.module.css";
import logo1 from "../images/logo1.png";
import Image from "next/image";
import google from "../images/Google.svg";
import apple from "../images/Apple.svg";
import Link from "next/link";
import logo3 from "../images/logo3.svg";
import mergedIcons from "../images/mergedIcons.svg";
import combined from "../images/combined.svg";

const LoginSignup = () => {
  return (
    <div className={styles.outter}>
      <div className={styles.left}>
        <div className={styles.left_inner}></div>
        <div className={styles.left_content}>
          <div className={styles.header}>
            <Image className={styles.logo} src={logo1} alt="logo" />
          </div>
          <div className={styles.content}>
            <span>BASE</span>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_icons}>
              <Image className={styles.icons} fill src={combined} alt="githu" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.header_toggle}>
          <div style={{ position: "relative", width: "6rem" }}>
            <Image fill src={logo3} alt="logo" />
          </div>
        </div>
        <div className={styles.right_content}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              marginBottom: "0.4rem",
            }}
          >
            Sign In
          </span>
          <span style={{ fontSize: "0.8rem", marginBottom: "1.5rem" }}>
            Sign in to your account
          </span>
          <div className={styles.option_div}>
            <div
              style={{
                width: "48%",
                position: "relative",
                height: "2rem",
                cursor: "pointer",
              }}
            >
              <Image src={google} fill alt="google" />
            </div>
            <div
              style={{
                width: "48%",
                position: "relative",
                height: "2rem",
                cursor: "pointer",
              }}
            >
              <Image src={apple} fill alt="apple" />
            </div>
          </div>
          <div className={styles.form}>
            <span>Email address</span>
            <input type="text" placeholder="Enter your email" />
            <span>Password</span>
            <input type="password" placeholder="Enter your password" />
            <span
              style={{
                color: "#346BD4",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </span>
            <Link
              style={{ display: "flex", width: "100%", textDecoration: "none" }}
              href="/upload"
            >
              <button>Sign In</button>
            </Link>
          </div>
          <span
            className={styles.bottom_txt}
            style={{ color: "#858585", alignSelf: "center", cursor: "pointer" }}
          >
            Don’t have an account?{" "}
            <span style={{ color: "#346BD4" }}>Register here</span>
          </span>
        </div>
        <div className={styles.bottom_icons}>
          <Image src={mergedIcons} alt="mergedIcons" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
