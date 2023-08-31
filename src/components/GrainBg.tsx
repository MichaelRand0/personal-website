import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const GrainBg = (props: Props) => {
  const {className} = props
  return (
    <div className={`fixed w-screen h-screen ${className}`}>
      <div className='absolute w-full h-full z-20'></div>
      <div className={`w-full h-full left-0 top-0 md:animate-grain bg-dots z-10`}></div>
      <div className={`w-full h-full left-0 top-0 md:animate-grain bg-dots z-10`}></div>
    </div>
  )
}

export default GrainBg