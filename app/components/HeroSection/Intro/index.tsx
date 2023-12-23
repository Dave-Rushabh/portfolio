import { getGreetings } from '@/app/utils/getGreetings'
import TypeWriter from '../Typewriter'

const Intro = () => {
  return (
    <div className="flex flex-col max-xl:w-full w-2/5 max-xl:border-b-2 max-xl:border-r-0 border-b-0 border-r-2 border-purple-400 p-4 max-xl:pb-20">
      <TypeWriter strings={getGreetings} />
      <div className="text-white section-header">
        I&apos;m Rushabh Dave
        <span
          className="ml-2"
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation:
              'moveLeftToRight 2s linear infinite, moveRightToLeft 2s linear infinite',
          }}
        >
          👋🏻
        </span>
      </div>
      <div className="section-sub-heading text-white italic flex flex-col gap-8 mt-8">
        <div className="flex items-baseline gap-2">
          <div className="h-3 w-3 bg-white rounded-full"></div>
          <p className="break-words w-[90%]">
            Enthusiastic web developer with expertise in React, Next,
            JavaScript, and CSS.
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <div className="h-3 w-3 bg-white rounded-full"></div>
          <p className="break-words w-[90%]">
            Passionate about creating engaging and interactive frontend
            experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
