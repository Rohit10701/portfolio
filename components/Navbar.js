'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion.js';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden" // Use single quotes here
    whileInView="show" // Use single quotes here
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <a href='/'>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          Meet Rohit
        </h2>
      </a>
      <div className="absolute flex flex-col right-[2%] w-[100px] align-middle justify-center">
        <a href="https://drive.usercontent.google.com/download?id=1cEszjlkt3vMt7aPlIdEeID-_4Efg3K00&export=download&authuser=0&confirm=t&uuid=9d638640-5fc1-44bd-888b-f6c1a81876db&at=APZUnTU0fkDo6GuUBEZzDZCX4BUw:1695724859287">
          <h3 className="font-extrabold text-[16px] leading-[24px] text-white">
            Resume
          </h3>
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
