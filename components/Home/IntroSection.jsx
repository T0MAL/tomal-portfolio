import { MdOutlineCloudDownload } from "react-icons/md";

const IntroSection = () => {
  return (
    <div className='py-4 md:py-20 pl-28 flex flex-col'>
      <p className='text-[#457B9D]'>
        Hi Everyone, I am
      </p>
      <p className='text-4xl font-bold'>
        Md. Tahmid Islam Tomal
      </p>
      <p className='pt-2'>
        Currently doing my B.Sc in Computer Science and Engineering(CSE) form Bangladesh University of Engineering and Teachnology(BUET) and working as a part-time software developer at ICMsoft, a software farm in Bangladesh. 
      </p>
      <a
        href="https://drive.google.com/uc?export=download&id=1MT5M92DUJKFFVBFHHfIGbYcgi1Ni7yjv"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mt-6 px-10 inline-block bg-[#457B9D] text-white py-2  rounded hover:shadow-2xl"
      >
        <div className="flex gap-2 items-center">
          <p>Download CV</p>
          <MdOutlineCloudDownload />
        </div>
        
      </a>
    </div>
  )
}

export default IntroSection