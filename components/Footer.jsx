'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
          Contact Me
        </h4>
        <a href='mailto:rohitkumar10701@gmail.com' target='_blank'>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]'
          >
            <img
              src='/fluent-send.png'
              alt='send'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>Message</span>
          </button>
        </a>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'></h4>
          <p className='font-normal text-[14px] text-white opacity-50'>
            Rohit Kumar @ 2023.
          </p>

          <div className='flex gap-4'>
            {socials.map((social) => (
              <a href={social.link} target='_blank'>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
