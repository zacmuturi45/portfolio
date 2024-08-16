"use client"

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Transition from "@/components/Transition";
import { arrowdown, hero, insta, js, linkedin, slideUp, whatsapp } from "../../public/images/exports";
import { useEffect, useRef } from "react";
import { inView, motion, useInView } from "framer-motion";
import gsap from "gsap";
import GsapMagnetic from "@/components/gsapMagnetic";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const description = "Helping brands stand out in the digital era. Together we will set the new status quo. No nonsense. Always on the cutting edge."
  const textRef = useRef(null);
  const isInView = useInView(textRef)
  const circle = useRef(null)
  // const buttRef = useRef(null)
  // const jsRef = useRef(null)
  // const instaRef = useRef(null)
  // const whatsRef = useRef(null)
  // const inRef = useRef(null)

  // useEffect(() => {
  //   const xTo = gsap.quickTo(buttRef.current, "x", {duration: 1.2, ease: "elastic.out(1, 0.3)"})
  //   const yTo = gsap.quickTo(buttRef.current, "y", {duration: 1.2, ease: "elastic.out(1, 0.3)"})

  //   const mouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const { width, height, left, top } = buttRef.current.getBoundingClientRect();
  //     const x = clientX - (left + width / 2);
  //     const y = clientY - (top + height /2);
  //     xTo(x)
  //     yTo(y)
  //   }

  //   const mouseLeft = (e) => {
  //     xTo(0)
  //     yTo(0)
  //   } 

  //   buttRef.current.addEventListener("mousemove", mouseMove)
  //   buttRef.current.addEventListener("mouseleave", mouseLeft)

  //   return () => {
  //     buttRef.current.removeEventListener("mousemove", mouseMove)
  //     buttRef.current.removeEventListener("mouseleave", mouseLeft)
  //   }
  // }, [])

  const mouseEnter = (e) => {
    gsap.to(circle.current, { top: "-25%", width: "150%", duration: 0.4 })
  }

  const mouseLeave = (e) => {
    gsap.to(circle.current, { top: "-150%", width: "125%", duration: 0.4 })
    gsap.to(circle.current, { top: "100%", width: "100%", duration: 0, delay: 0.5 })
  }


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition>
        <div className={styles.body}>
          <div className="body-main">
            {/* <Image src={hero} width={100} height={100} className="hero-image" alt="hero-image" /> */}
            <div className="body-container">
              <div className="body-text">
                <div style={{ marginBottom: "3rem" }}><Image src={arrowdown} width={40} height={40} alt="arrow" /></div>
                <div className="body-text-p">
                  <p>Full Stack <br /> Web Developer</p>
                </div>
              </div>

            </div>
          </div>

          <div className="hero" ref={textRef}>
            <div className="description">
              <div className="description-body">
                <p>
                  {
                    description.split(" ").map((word, index) => {
                      return <span className="mask"><motion.span custom={index} key={index} variants={slideUp}
                        initial="initial" animate={isInView ? "open" : "closed"}
                      >{word}</motion.span></span>
                    })
                  }
                </p>

                <motion.p
                  variants={inView}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </motion.p>
              </div>

              <GsapMagnetic>
                <div className="about-me" onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}><p>Learn more</p><div ref={circle} className="circle"></div></div>
              </GsapMagnetic>

            </div>
          </div>

          <div className="socials">
            <GsapMagnetic><Image src={js} width={27} height={27} alt="instagram" /></GsapMagnetic>
            <GsapMagnetic><Image src={insta} width={27} height={27} alt="instagram" /></GsapMagnetic>
            <GsapMagnetic><Image src={whatsapp} width={25} height={25} alt="whatsapp" /></GsapMagnetic>
            <GsapMagnetic><Image src={linkedin} width={25} height={25} alt="linkedin" /></GsapMagnetic>
          </div>
        </div>
      </Transition>
    </>
  );
}
