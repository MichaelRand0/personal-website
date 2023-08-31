import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const Container = (props: Props) => {
  const {children, className} = props
  return (
    <div className={`px-8 sm:p-[50px] relative ${className}`}>
      {children}
    </div>
  )
}

export default Container