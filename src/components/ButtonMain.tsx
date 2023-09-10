import React from "react"

interface Props extends React.ComponentProps<"button"> {}

const ButtonMain = (props: Props) => {
  const { children, className } = props
  return <button className={`py-2 px-4 border-2 text-brand border-brand hover:text-bgBlack hover:bg-brand transition ${className}`}>{children}</button>
}

export default ButtonMain
