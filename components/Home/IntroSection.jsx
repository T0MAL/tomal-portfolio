import { MdOutlineCloudDownload } from "react-icons/md";

const IntroSection = () => {
  return (
    <div className='py-4 md:py-20 pl-10 md:pl-28 flex flex-col'>
      <p className='text-[#457B9D] font-bold'>
        Hi Everyone, I am
      </p>
      <p className='text-4xl font-bold'>
        Md. Tahmid Islam Tomal
      </p>
      <p className='pt-2'>
      Currently pursuing a B.Sc in Computer Science and Engineering (CSE) from Bangladesh University of Engineering and Technology (BUET). Additionally, working at the well-known Panjeree Publications as part of the R&D team, building AI solutions, including developing applications leveraging Large Language Models (LLMs) to enhance their capabilities.      </p>
      <a
        href="https://drive.google.com/uc?export=download&id=18yXFwnyz7aENLoaAiH2zEjZ4IP-cIBwB"
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