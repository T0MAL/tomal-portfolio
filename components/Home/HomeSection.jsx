import React from 'react'
import ImageSection from './ImageSection'
import IntroSection from './IntroSection'

const HomeSection = () => {
  return (
    <section id="home" className="bg-primary-color">
      <div className="flex flex-col-reverse md:flex-row">
        <div className='w-full md:w-7/12'>
            <IntroSection />
        </div>
        <div className='w-full md:w-5/12'>
            <ImageSection />
        </div>
      </div>
    </section>
  )
}

export default HomeSection
