import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as React from "react";

import Mailchimp from "react-mailchimp-form";

export default function Home() {
  if (typeof window !== "undefined") {
    window.addEventListener("deviceorientation", handleOrientation, true);
  }

  function handleMouseMove(event) {
    const holographicElement = document.getElementById("grad1");
    const x = event.clientX;
    const width = document.documentElement.clientWidth;
    const value = x / width;
    console.log(event);
    const percentage = value / 2;
    holographicElement.setAttribute(
      "gradientTransform",
      `scale(2 2) translate(-${percentage} 0)`
    );
  }

  function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    var ballPos = (gamma / 90) * 100;

    const percentage = ballPos / 100;
    holographicElement.setAttribute(
      "gradientTransform",
      `scale(2 2) translate(${percentage} 0)`
    );
    //console.log(ballPos);
  }

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <Head>
        <title>Commmand</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Commmand" />
        <meta
          property="og:description"
          content="Powerful project management"
        />
        <meta
          property="og:image"
          content="https://commmand.entropylabs.xyz/og-image.png"
        />
        <meta
          property="og:url"
          content="https://commmand.entropylabs.xyz/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        <svg
          id="holographic"
          width="100"
          height="100"
          viewBox="0 0 80 71"
          fill="url(#grad1)"
          xmlns="http://www.w3.org/2000/svg"
          className="css-1pinpn6"
        >
          <defs>
            <linearGradient
              id="grad1"
              x1="-20%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientTransform="scale(2, 2)"
            >
              <stop
                offset="0%"
                stopColor="rgb(247, 252, 177)"
                stopOpacity="1"
              />
              <stop
                offset="33%"
                stopColor="rgb(255, 163, 182)"
                stopOpacity="1"
              />
              <stop
                offset="66%"
                stopColor="rgb(221, 169, 255)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="rgb(162,209,255)"
                stopOpacity="1"
              />
            </linearGradient>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M69.4762 57.0126C69.4762 56.4502 69.715 55.916 70.1212 55.5271C76.2726 49.6379 80 41.9285 80 33.4903C80 14.9941 62.0914 0 40 0C17.9086 0 0 14.9941 0 33.4903C0 51.9864 17.9086 66.9805 40 66.9805C44.6486 66.9805 49.1121 66.3166 53.2624 65.0958C53.6959 64.9683 54.1596 64.9826 54.5809 65.146L66.7533 69.8649C68.064 70.3731 69.4762 69.406 69.4762 68.0002V57.0126ZM29 42.5C29 41.3954 29.8954 40.5 31 40.5H49C50.1046 40.5 51 41.3954 51 42.5C51 43.6046 50.1046 44.5 49 44.5H31C29.8954 44.5 29 43.6046 29 42.5ZM20.0738 24.3127C19.1419 23.7197 17.9057 23.9944 17.3127 24.9262C16.7197 25.8581 16.9944 27.0943 17.9262 27.6873L26.2747 33L17.9262 38.3127C16.9944 38.9057 16.7197 40.1419 17.3127 41.0738C17.9057 42.0056 19.1419 42.2803 20.0738 41.6873L31.0738 34.6873C31.6506 34.3202 32 33.6838 32 33C32 32.3162 31.6506 31.6798 31.0738 31.3127L20.0738 24.3127Z"
            class="css-bio59o"
          ></path>
        </svg>
        <h1 className={styles.title}>Commmand</h1>

        <p className={styles.description}>Powerful project management</p>

        <Mailchimp
          action="https://evanaubrey.us17.list-manage.com/subscribe/post?u=a85901bf3bba319d537c6f2ac&amp;id=38d0ade230"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true,
            },
          ]}
          messages={{
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Join Waitlist",
          }}
          className="signupForm"
        />
      </main>

      <footer className={styles.footer}>
        Created by &nbsp;<a href="#">Entropy Labs</a>
      </footer>
    </div>
  );
}
