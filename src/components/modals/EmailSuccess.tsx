import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const EmailSuccess = (props: Props) => {
  return (
    <div className='flex items-center  flex-col justify-center'>
        <h2 className='text-3xl text-brand mb-10'>Ваше сообщение успешно отправлено!</h2>
        <p className='text-xl'>Я свяжусь с вами в ближайшее время =)</p>
    </div>
  )
}

export default EmailSuccess