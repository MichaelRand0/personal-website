import React, { useState } from "react"

interface Props extends React.ComponentProps<'a'> {
  From: () => React.JSX.Element,
  To: () => React.JSX.Element
}

const LinkAnimated = (props: Props) => {
  const {From, To, href, className} = props
  return (
    <a className={`group w-fit relative text-base font-bold text-grey h-[25px] block overflow-hidden transition hover:group ${className}`} href={href}>
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
