import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const Container = (props: Props) => {
  const {children} = props
  return (
    <div className='p-[50px] relative'>
      {children}
    </div>
  )
}

export default Container