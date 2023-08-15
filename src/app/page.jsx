"use client"
import React from 'react'
import Image from 'next/image'
import profilePhoto from './image/erkan.jpg'
import { BsGithub, BsInstagram,BsLinkedin,BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from "framer-motion";
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  ApexChart from './components/ApexChart'
import ThemeComp from './components/ThemeComp'

const chartData1 = [100]; 
const chartData2 = [90]; 
const chartData3 = [90]; 
const chartData4 = [75]; 
const chartData5 = [75]; 
const chartData6 = [50]; 
const chartData7 = [75]; 


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};



const kopyala = () => {
  const numaram = "05415678985"
  navigator.clipboard.writeText(numaram)
  .then(() => {
    toast('Telefon numarası kopyalandı!');
  })

}



const page = () => {
  return (
    <>
    <div className='h-[100vh]'>    
      <div>
        <div className='absolute top-10 right-10'>
          <ThemeComp/>
        </div>
        <div className='flex justify-center items-center py-4   flex-col  gap-4 ' >
          <Image className='rounded-full darkl:border-white border-gray-400 border-4 w-48  ' src={profilePhoto}/>
          <div className='text-gray-600 dark:text-white  text-gray-700 text-3xl text-white'>Erkan KOLAKAN</div>
          <hr className='w-[95%]'/>
        </div>

        <motion.div className='flex flex-col gap-24'
        variants={container}
        initial="hidden"
        animate="visible"
        >

          <div className='flex justify-center items-center gap-4 respo-header '>
           <Link className='h-full' href="https://github.com/erkankolakan"  target="_blank" rel="noopener noreferrer"  > 
           <motion.div  className='w-[10rem] h-[3.5rem] gradient-div dark:bg-white bg-gray-400 text-white dark:text-gray-800 rounded-xl '
            variants={item}
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className=' flex h-full justify-center items-center items-center gap-2 text-2xl font-bold cursor-pointer'>
                <BsGithub size={"40px"}/> Git Hub
              </div>
            </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/erkan-kolakan-03138b1a3/"  target="_blank" rel="noopener noreferrer">
            <motion.div className='w-[10rem] h-[3.5rem] gradient-div  dark:bg-white bg-gray-400 text-white dark:text-gray-800 rounded-xl '
            variants={item}
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center gap-2   text-2xl font-bold cursor-pointer'>
                <BsLinkedin size={"35px"}/> Linkedin
              </div>
            </motion.div>
            </Link>
              <Link href="mailto:erkankolakan@gmail.com"  target="_blank" rel="noopener noreferrer">
            <motion.div className='w-[10rem] h-[3.5rem] gradient-div  dark:bg-white bg-gray-400 text-white dark:text-gray-800 rounded-xl'
            variants={item}
            whileHover={{
              scale:1.05,
            }}
            whileTap={{ scale: 1 }}
            transition={{
              type:"spring",
              damping:"30",
              stiffness:900,
              duration:0.5
            }}
            >
              <div className='flex h-full justify-center items-center items-center  gap-2 text-2xl font-bold cursor-pointer'>
                <AiOutlineMail size={"40px"}/> E-Mail
              </div>
            </motion.div>
            </Link> 
          </div>



        </motion.div> 
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='flex mt-12 flex-col w-full justify-center items-center '>
      <div className='flex max-w-[90rem] justify-center items-center respo flex-wrap ' >
        <ApexChart  title="HTML" seriesData={chartData1} />
        <ApexChart title="CSS" seriesData={chartData2} />
        <ApexChart title="tailwindcss" seriesData={chartData3} />
        <ApexChart title="JavaScript" seriesData={chartData4} />
        <ApexChart title="React" seriesData={chartData5} /> 
        <ApexChart title="ThreeJS" seriesData={chartData6} />
        <ApexChart title="Next.js" seriesData={chartData7} />
      </div>
    </div>

    </div>
    </>
    
  )
}

export default page
