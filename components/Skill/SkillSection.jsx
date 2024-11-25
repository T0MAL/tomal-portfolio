import Skills from './Skills'
import SkillSlider from './SkillSlider'

const SkillSection = () => {
  return (
    <section id="skill" className='md:py-20 py-4 bg-primary-color flex flex-col gap-4  md:gap-10'>
        <p className='text-center font-bold text-xl text-[#457B9D] '>
        Skills
        </p>
        <div>
            {/* <SkillSlider/> */}
            <Skills/>
        </div>
        
    </section>
  )
}

export default SkillSection

