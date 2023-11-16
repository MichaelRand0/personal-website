import React from 'react'

interface Props extends React.ComponentProps<'textarea'> {
    error?: string
    classNameContainer?: string
    registerData: any
}

const TextareaBrand = (props: Props) => {
    const {placeholder, className, classNameContainer, rows, error, registerData} = props
  return (
    <div className={classNameContainer}>
        <textarea rows={rows} className={`text-[white] text-lg placeholder:text-greyDark bg-bgBlack border-b outline-none border-b-greyLight pb-[8px] focus:placeholder:text-[white] focus:text-[white] focus:border-b-[white] transition-all ${className}`} placeholder={placeholder} {...registerData} />
        <span className={`text-xs text-brand ml-2 block ${error ? 'opacity-100' : 'opacity-0'}`}>{error}</span>
    </div>
  )
}

export default TextareaBrand