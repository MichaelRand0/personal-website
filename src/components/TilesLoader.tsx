
interface Props extends React.ComponentProps<'div'> {}

const TilesLoader = (props: Props) => {
  const {} = props
  return (
    <div className="absolute w-full h-full left-0 top-0 z-[100] fill-mode-forwards animate-hide delay-2800 overflow-hidden">
      <div className="animate-showDown absolute top-0 left-[50%] fill-mode-forwards duration-1500 bg-[white] w-[2px] z-[70] right-[50%] transition -translate-x-[50%]"></div>
      <div className="absolute top-0 flex left-0 w-full h-full z-[60]">
        <div className="w-1/5 h-full bg-greyStrong animate-scrollTop delay-2s fill-mode-forwards duration-500"></div>
        <div className="w-1/5 h-full bg-greyStrong animate-scrollBottom delay-2500 fill-mode-forwards duration-500"></div>
        <div className="w-1/5 h-full animate-scrollTop delay-1500 fill-mode-forwards bg-greyStrong duration-500"></div>
        <div className="w-1/5 h-full bg-greyStrong animate-scrollBottom delay-2s fill-mode-forwards duration-500"></div>
        <div className="w-1/5 h-full bg-greyStrong animate-scrollTop delay-2800 fill-mode-forwards duration-500"></div>
      </div>
    </div>
  )
}

export default TilesLoader