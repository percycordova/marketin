import React from 'react'
import banner from '../../assets/banner.gif'
const Banner = () => {
  return (
    <div className="mt-20 mb-10">
      <img src={banner} alt="" style={{height:"450px"}} className="w-full object-cover"/>
    </div>
  )
}

export default Banner
