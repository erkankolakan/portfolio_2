"use client"
import React from 'react'
import Image from 'next/image'
import profilePhoto from './image/erkan2.jpg'
import { BsGithub,BsLinkedin} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from "framer-motion";
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeComp from './components/ThemeComp'
import RadialChart from './components/RadialChart'




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




const page = () => {
  return (
    <>
    <div className='h-[100vh]'>    
      <div>
        <div className='absolute top-10 right-10'>
          <ThemeComp/>
        </div>
        <div className='flex justify-center items-center py-4   flex-col  gap-4' >
          <Image alt='erkan_resim' src={profilePhoto} className='rounded-full darkl:border-white border-gray-400 border-4 max-sm:w-[10rem] w-[13rem]' />
          <div className='slogan sloganrenk  max-sm:text-xl text-3xl'>Erkan KOLAKAN</div>
          {/* text-gray-800 dark:text-white üsteki erkan kolakan ait değerler rgb isteezsen bunları kullanabilirsin */}
          <hr className='w-[95%] '/>
        </div>

        <motion.div className='flex flex-col gap-24'
        variants={container}
        initial="hidden"
        animate="visible"
        >

          <div className='flex justify-center items-center gap-4 respo-header '>
           <Link className='h-full' href="https://github.com/erkankolakan"  target="_blank" rel="noopener noreferrer"  > 
           <motion.div  className='px-8 h-[3.5rem] max-sm:w-[10rem]  gradient-div dark:bg-white bg-gray-400 text-white dark:text-gray-800 rounded-xl '
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
                <BsGithub size={"40px"}/>
              </div>
            </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/erkan-kolakan-03138b1a3/"  target="_blank" rel="noopener noreferrer">
            <motion.div className='px-8 h-[3.5rem] gradient-div  dark:bg-white bg-gray-400 text-white dark:text-gray-800 rounded-xl '
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
                <BsLinkedin size={"35px"}/>
              </div>
            </motion.div>
            </Link>
              <Link href="mailto:erkankolakan@gmail.com"  target="_blank" rel="noopener noreferrer">
            <motion.div className=' px-8 h-[3.5rem] gradient-div  dark:bg-white bg-gray-400 text-white dark:text-gray-800 rounded-xl'
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
                <AiOutlineMail size={"40px"}/>
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
      <div className='flex mt-12 flex-col w-full  justify-center items-center '>
      <div className='flex flex-wrap max-w-[1200px] justify-center items-center gap-12  respo'>   

      <motion.div className=' relative flex justify-center items-center'>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >HTML</div>
            <div className='slogan2 flex justify-center items-center'>100%</div>
          </div>
        <RadialChart
          progress={100}
          color="#3c71d0"
        />
    </motion.div>

        <div className=' relative flex justify-center items-center'>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >CSS</div>
            <div className='slogan2 flex justify-center items-center'>90%</div>
          </div>
          <RadialChart
          progress={90}
          color="#3c71d0"
        />
      </div>

      <div className=' relative flex justify-center items-center'>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >Tailwindcss</div>
            <div className='slogan2 flex justify-center items-center'>90%</div>
          </div>
          <RadialChart
          progress={90}
          color="#3c71d0"
        />
    </div>
      <div className=' relative flex justify-center items-center '>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >JavaScript</div>
            <div className='slogan2 flex justify-center items-center'>70%</div>
          </div>
          <RadialChart
          progress={70}
          color="#3c71d0"
          writeText="selam bebek"
        />
    </div>

      <div className=' relative flex justify-center items-center'>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >React</div>
            <div className='slogan2 flex justify-center items-center'>70%</div>
          </div>
          <RadialChart
          progress={70}
          color="#3c71d0"
        />

      </div>


      <div className=' relative flex justify-center items-center'>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >Next.js</div>
            <div className='slogan2 flex justify-center items-center'>70%</div>
          </div>
        
          <RadialChart
          progress={70}
          color="#3c71d0"
        />
      </div>


      <div className=' relative flex justify-center items-center'>
          <div className='absolute ortalama '>
            <div className='slogan2 text-xl flex justify-center items-center' >Three.js</div>
            <div className='slogan2 flex justify-center items-center'>50%</div>
          </div>
        
          <RadialChart
          progress={50}
          color="#3c71d0"
        />
      </div>

      </div>
    </div>

    </div>
    </>
    
  )
}

export default page






