import React from 'react'

interface Props extends React.ComponentProps<'input'> {
    error?: string
    classNameContainer?: string
    registerData: any
}

const InputBrand = (props: Props) => {
    const {placeholder, className, classNameContainer, type = 'text', error, registerData} = props
  return (
    <div className={classNameContainer}>
        <input type={type} className={`text-[white] text-lg placeholder:text-greyDark bg-bgBlack border-b outline-none border-b-greyLight pb-[8px] focus:placeholder:text-[white] focus:text-[white] focus:border-b-[white] transition-all ${className}`} placeholder={placeholder} {...registerData} />
        <div className={`text-xs text-brand mt-2 ml-2 block ${error ? 'opacity-100' : 'opacity-0'}`}>{error}</div>
    </div>
  )
}

export default InputBrand