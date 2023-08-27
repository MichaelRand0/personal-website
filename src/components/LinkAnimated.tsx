import React, { useState } from "react"

interface Props {
  From: () => React.JSX.Element,
  To: () => React.JSX.Element
}

const LinkAnimated = (props: Props) => {
  const {From, To} = props
  const [isActive, setIsActive] = useState(false)
  return (
    <a onMouseLeave={() => setIsActive(false)} onMouseEnter={() => setIsActive(true)} className="group w-fit relative text-base font-bold text-greyStrong h-[25px] block overflow-hidden transition hover:group" href="#">
      <div className="transform group-hover:translate-y-40 ease-in-out duration-500 transition-transform">
        <From />
      </div>
      <div className="transform group-hover:-translate-y-6 ease-in-out duration-500 transition-transform">
        <To />
      </div>
    </a>
  )
}

export default LinkAnimated
