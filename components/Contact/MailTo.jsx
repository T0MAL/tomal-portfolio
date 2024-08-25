'use client'
import { IoMdMail } from "react-icons/io";
const MailTo = () => {
  return (
    <button onClick={() => window.location = 'mailto:tit.tomal@gmail.com'} className="felx items-center text-gray-600 hover:text-black">
        
        <div className="flex items-center">
        <IoMdMail className="mr-2" />
        tit.tomal@gmail.com
        </div>
        
        </button>
  )
}

export default MailTo