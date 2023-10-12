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
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      <a href="/">
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          Meet Rohit
        </h2>
      </a>
      <div className="absolute flex flex-col right-[2%] w-[100px] align-middle justify-center">
        <a href="https://doc-00-10-docs.googleusercontent.com/docs/securesc/44i50ufc3691rnnkuuv96q9mgtnuo7kv/grhb5sehgeu3fgnup0n3bkuu6cr0hlge/1697128200000/07863138130098879928/07863138130098879928/1bI4fAcs3gfPj24gJfLi9VlV5GZWdrXBM?e=download&ax=AA75yW7oZhZVtFNz7hHBoB2Q2AMxf5eYd97Cfb8aBQ0cflv3Hzf4agsNXt4q3BwM-JS36LA0ped2P_KYYWcH-SBR9a1kvYWgDMbVNabK9r8VsZCMgTBfc2I7Zm6lK1cfUrz-wgltbU57q4b_b_fZhWLOs08HdFfCPOBvOL6PJRNz9LzarupeUmOeu0BqS8caWgheYuBiVFkF1zcCDaKY4LXuxWWvYo5tp9rng7nfBCRhjbFJ-ohQfeawfiHqcOPOqsoKA4SiiyBP_IgKy3F1Gq9jV-c19l2lG-ak8dMm72k1ucLWNBXuoTeJ3I4nUyZQ9Zt77QDCxWwBnOY7-wXjpykbdbZAwotX_gJm-m-bFXZ7PdR85kbLk94hzvjNeI-FnyD-Y0AbGeYWNjePJnMe97pvCUIAAVouQwOotqEh_Jb0noL9GTZJAqGAI0XFhxDmsBFUxA69S0suAixF9akHNcB1q1FQnFP5BS4wu4ff5hjxNo0P406xmva2Qfyt8izkWhtqFJjEgasNYVMVaKpA6OEo_f1JDmMcVJpWNDBdmcf5VVKKZHQg-ZYJp9jCbWHvtHxt8vLSzcp097gnr2_EJqg61bv482JIWGdkymaYYTgwKr-QOTYrAjrL-tOIzfLB6aHIvIiEpzZI-A1DhzxHFeUn3PsOUYQFyYc_TXbBRs9f6mZtmmFwG45iHbgYFcrUy2fjXtQYajjmKUr2a-kCLI7O6E7oVSxYlUEHUnh1cQ12zEQBIS2kQKEf6OLNNt44NHRSH2JNgupnGdMWjgZLea518XBoPfNdZmJYx49U-QF2_gnENOAc9w9krc7Ar80bBbMPsAk_yUQisopdNsN4zlHoJPyTmguQDKqRCDV1_I-RGKLYQd7fZ9nwBtuj9rE7Y3Usidy0c9n8qsb8BH0en3kpi2uRs499kdsdKumj&uuid=5a21ef61-33e1-403c-b3ff-570fd5b86eed&authuser=0&nonce=qnivhehsfmn0a&user=07863138130098879928&hash=oj713sujcggbuf01jikf0ld16vecr3sc">
          <h3 className="font-extrabold text-[16px] leading-[24px] text-white">
            Resume
          </h3>
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
