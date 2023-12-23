import React from 'react'
import StarsSVG from '../StarsSVG'
import ProgressUISVG from '../ProgressUISVG'
import GoofyArrowSVG from '../GoofyArrowSVG'
import CloudSVG from '../CloudSVG'
import ArrowSVG from '../ArrowSVG'
import CodingSVG from '../CodingSVG'
import Image from 'next/image'

const CreativeCircle = () => {
  return (
    <>
      <div className="flex max-xl:w-full max-xl:mt-[110px] mt-0 w-3/5 items-center justify-center relative">
        <div className="absolute h-20 w-20 bottom-0 right-0 flex justify-center items-center rounded-full bg-purple-400">
          <StarsSVG />
        </div>
        <div className="border-2 border-yellow-400 rounded-full h-96 w-96 relative">
          <Image
            src={'/profile.jpg'}
            fill
            style={{ objectFit: 'cover' }}
            alt="profile-img"
            sizes="100%"
            priority
            className="rounded-full"
          />
          <div className="absolute">
            <CodingSVG />
          </div>
          <div className="absolute top-[250px] left-[-100px]">
            <ProgressUISVG />
          </div>
          <div className="absolute top-[150px] left-[-80px] rotate-[85deg]">
            <ArrowSVG />
          </div>
          <div className="absolute top-[-100px] right-[-150px]">
            <CloudSVG />
          </div>
          <div className="absolute right-[-125px] rotate-[150deg] top-[35px]">
            <GoofyArrowSVG />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreativeCircle
