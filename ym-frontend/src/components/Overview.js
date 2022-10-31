import { BiBookAlt } from 'react-icons/bi'
import { RiDraftLine } from 'react-icons/ri'
import { useOutletContext } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { ActivityChart } from './ActivityChart'

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Overview = () => {
  const [adminDetails, setAdminDetails] = useOutletContext()

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="w-5/6 py-10 border border-black/50 overflow-auto">
      <h2 className='font-bold border-b-2 px-4 mb-5 sm:px-8 border-b-black/50  uppercase'>Overview</h2>
      <h3 className='px-4 sm:px-8 font-sans text-white/70'>
        Welcome <span className='text-secondary font-bold'>{adminDetails.username}</span>!
      </h3>
      <motion.div className='flex gap-3 my-6 px-4 sm:px-8'
        ref={ref}
        variants={boxVariant}
        initial='hidden'
        animate={control}
      >
        <div className='w-1/2 sm:w-4/12 shadow-md shadow-white/30 p-3 ring-1 ring-black/20 flex flex-col justify-between rounded-lg bg-gradient-to-l from-[#bfeb99] to-[#ffb702]'>
          <h4 className='text-primary font-bold border-b border-b-secondary/50'>Books Count</h4>
          <h1 className='text-white flex justify-between items-center'>
            <span className='text-black'>2</span>
            <BiBookAlt />
          </h1>
        </div>
        <div className='w-1/2 sm:w-4/12 shadow-md shadow-white/30 p-3 ring-1 ring-black/20 flex flex-col justify-between rounded-lg bg-gradient-to-l from-[#f66d75] to-[#5cf70d]'>
          <h4 className='text-primary font-bold border-b border-b-secondary/50'>
            Chapters Count
          </h4>
          <h1 className='text-white flex justify-between items-center'>
            <span className='text-black'>10</span>
            <RiDraftLine />
          </h1>
        </div>
      </motion.div>
      <motion.div
        className='mx-auto px-4 sm:mx-8 border-t-2 border-black/50 rounded-lg py-2 bg-gradient-to-r from-[#eeaeca] to-[#94bbe9] text-center'
        ref={ref}
        variants={boxVariant}
        initial='hidden'
        animate={control}
      >
        <h4 className='text-primary my-4 border-b-2 border-black'>Your Content Creation Timeline</h4>
        <ActivityChart />
      </motion.div>
    </section>
  )
}

export default Overview