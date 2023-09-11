interface Props extends React.ComponentProps<"div"> {}

const Modal = (props: Props) => {
  const { children } = props
  return (
    <div className="w-full h-full left-0 top-0 fixed flex items-center z-50 justify-center bg-blackTransparent">
      <div className="bg-bgBlack max-w-6xl border rounded border-grey w-full sm:w-[90%] lg:w-[70%] p-5 md:p-10">{children}</div>
    </div>
  )
}

export default Modal
