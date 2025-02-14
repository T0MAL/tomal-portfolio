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
        I am currently pursuing a B.Sc in Computer Science and Engineering at BUET, where I sharpen my skills in advanced technologies. I recently completed a 3-month part-time R&D role at the renowned Panjeree Publications, where I developed innovative AI solutions—including applications leveraging Large Language Models (LLMs) to drive intelligent automation.
      </p>
      <a
        href="https://drive.google.com/uc?export=download&id=1MsoXFZKvNXlVVy3UdKEOzvFbNiJUlX3V"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit mt-6 px-10 inline-block bg-[#457B9D] text-white py-2 rounded hover:shadow-2xl"
      >
        <div className="flex gap-2 items-center">
          <p>Download CV</p>
          <MdOutlineCloudDownload />
        </div>
      </a>
    </div>
  )
}

export default IntroSection;
