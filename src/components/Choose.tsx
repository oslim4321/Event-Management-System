import React from 'react'

const Choose = () => {
  return (
      <div className='w-full md:h-[90vh] h-[100vh] bg-light '>
          
          <h1 className='text-center font-canv text-3xl'>Why Choose EventHorizon</h1>

          <div className="flex flex-col md:flex-row container w-full border justify-around mx-auto items-center space-y-4 md:space-y-0 md:space-x-4">
  <div className="w-full md:w-80 p-4">
    <div className="bg-white rounded-lg shadow-lg">
      <img
        src="/story.jpg"
        alt="Expertise 1"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">Expertise </h2>
        <p className="text-gray-700 mt-2 text-center">
          Our team brings a wealth of experience and expertise to the table. We've successfully orchestrated a wide range of events, from intimate gatherings to large-scale extravaganzas.
        </p>
      </div>
    </div>
  </div>

  <div className="w-full md:w-80 p-4">
    <div className="bg-white rounded-lg shadow-lg">
      <img
        src="/story.jpg"
        alt="Expertise 2"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">Attention to Detail</h2>
        <p className="text-gray-700 mt-2 text-center">
        Our team brings a wealth of experience and expertise to the table. We've successfully orchestrated a wide range of events, from intimate gatherings to large-scale extravaganzas.
        </p>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Choose