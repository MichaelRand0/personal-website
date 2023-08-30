import React, { MouseEventHandler, useState } from "react"

interface Props extends React.ComponentProps<'div'> {
  clickEvent: Function
}

const ButtonBurger = (props: Props) => {
  const {clickEvent, className} = props
  const [open, setOpen] = useState(false)
  const handler = () => {
    setOpen(!open)
    clickEvent()
  }
  return (
    <button onClick={handler} className={`relative w-[35px] flex flex-col ${className}`}>
      <span className={`transition w-full bg-[white] h-[3px] mb-2 ${open ? '-rotate-45 translate-y-[11px]' : ''}`}></span>
      <span className={`transition-all w-1/2 bg-[white] h-[3px] mb-2 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`transition w-full bg-[white] h-[3px] ${open ? 'rotate-45 -translate-y-3' : ''}`}></span>
    </button>
  )
}

export default ButtonBurger
