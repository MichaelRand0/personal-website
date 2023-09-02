import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const Container = (props: Props) => {
  const {children, className} = props
  return (
    <div className={`px-5 sm:px-8 md:px-[50px] relative ${className}`}>
      {children}
    </div>
  )
}

export default Container