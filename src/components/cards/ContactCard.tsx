import Address from '$icons/Address'
import Email from '$icons/Email'
import Person from '$icons/Person'
import Phone from '$icons/Phone'
import React from 'react'

interface Props extends React.ComponentProps<'div'> {
  title: string
  text: string
  imgName: 'phone' | 'email' | 'address' | 'person'
}

const ContactCard = (props: Props) => {
  const { imgName, title, text, className } = props
  return (
    <div className={`flex p-8 border-greyLight border items-center flex-col bg-bgBlack ${className}`}>
      <div className='w-[36px] h-[36px] mb-5'>
        {imgName === 'phone' ? <Phone fill='#4bffa5' /> : ''}
        {imgName === 'email' ? <Email fill='#4bffa5' /> : ''}
        {imgName === 'address' ? <Address fill='#4bffa5' /> : ''}
        {imgName === 'person' ? <Person fill='#4bffa5' /> : ''}
      </div>
      <h4 className='mb-4 text-[white] text-base text-center'>{title}</h4>
      <span className='text-grey text-base text-center'>{text}</span>
    </div>
  )
}

export default ContactCard
