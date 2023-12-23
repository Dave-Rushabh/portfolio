import CreativeCircle from './CreativeCircle'
import Intro from './Intro'

const HeroSection = () => {
  return (
    <>
      <div className="section-container bg-[#333533] h-[85vh] max-h-[800px]">
        <div className="h-full flex max-xl:flex-col flex-row max-xl:items-center gap-8">
          <Intro />
          <CreativeCircle />
        </div>
      </div>
    </>
  )
}

export default HeroSection
