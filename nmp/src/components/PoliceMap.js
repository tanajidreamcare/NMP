import React from 'react'
import Image from 'next/image'

const PoliceMap = () => {
  const citiMap = [
    { map : "/map1.png", title : "NAVI MUMBAI POLICE COMMISSIONARATE MAP" },
    { map : "/map2.png", title : "NAVI MUMBAI ZONE 1 MAP" },
    { map : "/map3.png", title : "NAVI MUMBAI ZONE 2 MAP" }
  ]
  return (
    <div className="h-auto bg-blue-950">
      <div>
        <div className=''>
          <h1 className='text-5xl font-extrabold leading-9 text-center text-white pt-52'>
            Navi Mumbai Police Map
          </h1>
        </div>
        <div className='flex pb-10 mt-10 justify-evenly'>
        {citiMap.map((mumbai) => (
        <div className='w-96 '>
          
        <div>
          <Image
            src={mumbai.map}
            width={370}
            height={538}
            className='bg-white '
          />
        </div>
        <div className='mt-5 text-xl font-bold leading-7 text-center text-white'>
          <h1 >
          {mumbai.title}
          </h1>
        </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default PoliceMap;