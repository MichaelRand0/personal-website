import React from "react"

interface Props extends React.ComponentProps<"button"> {}

const ButtonMain = (props: Props) => {
  const { children, className, disabled } = props
  return <button className={`py-2 px-4 border-2 disabled:opacity-50 disabled:hover:bg-[transparent] disabled:hover:text-brand text-brand border-brand hover:text-bgBlack hover:bg-brand transition ${className}`} disabled={disabled}>{children}</button>
}

export default ButtonMain
