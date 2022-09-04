import React, { useEffect, useState } from 'react';
import './Banner.css';
import Lottie from 'react-lottie';
import developer from './../../../Assets/SvgAnimations/developer.json';
import { motion, useAnimation } from 'framer-motion';
import { bannerRightVariant } from '../../../Animations/Animations';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: developer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [viewDiv, setViewDiv] = useState(false);

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    }
    if (!inView) {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <section ref={ref} className="container px-6 mx-auto relative">
      <div className="flex flex-col lg:flex-row pt-8 md:pt-16 lg:pt-20 px-6 lg:justify-between">
          <h2 className="mb-4 text-4xl text-left tracking-tight font-extrabold  text-dark dark:text-white sm:leading-none">
            Web Application
            <span className="text-indigo-600 dark:text-indigo-500"> Developer</span>
          </h2>
          <p className="mt-3 text-left text-3xl dark:text-white text-dark sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
            A passionate individual who always thrive to work on end to end
            products which develop sustainable and scalable social and technical
            systems to create impact. I’m currently learning JavaScript more
            advance
          </p>
          <div className="flex flex-col">
            <div className="social-links my-8 lg:my-4">
              <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100074182476935"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://github.com/Bibiwei-Pere"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://twitter.com/Bibiwei_Pere?t=iJwy0PkZtx_YolGtuoVoxw&s=09"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="https://t.me/Bibiwei_Pere"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a
                rel="noreferrer"
                className="dark:text-white dark:bg-slate-700"
                target="_blank"
                href="mailto:bibiweijnr@gmail.com"
              >
                <i className="fa-brands fa-envelope"></i>
              </a>
            </div>
            <button className="rounded w-24 bg-indigo-700 hover:bg-indigo-800 py-2 px-4 text-white">
              <a
                rel="noreferrer"
                target={'_blank'}
                href="https://drive.google.com/file/d/1ZBioCcrhS1JKp-6Azu61jH2RSeBtu_bB/view?usp=sharing"
              >
                Resume
              </a>
            </button>
          </div>
        <motion.div
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={bannerRightVariant}
          className="lg:w-1/3 md:w-3/4 md:mx-auto"
        >
          <Lottie options={defaultOptions} height={'70%'} width={'100%'} />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
