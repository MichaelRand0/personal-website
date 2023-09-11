import { useModal } from "$hooks/modal"

interface Props extends React.ComponentProps<"div"> {}

const Modal = (props: Props) => {
  const { children } = props
  const { setCurrentModal } = useModal()
  return (
    <div
      onClick={() => setCurrentModal(null)}
      className="w-full h-full left-0 top-0 fixed flex items-center z-50 justify-center bg-blackTransparent"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-bgBlack max-w-6xl border rounded border-grey w-full sm:w-[90%] lg:w-[70%] p-5 md:p-10 relative max-h-[90%] md:h-auto overflow-auto"
      >
        <button
          onClick={() => setCurrentModal(null)}
          className="absolute right-8 top-5 w-[30px] h-[30px] group p-3"
        >
          <div className="w-[30px] h-[2px] bg-[white] group-hover:bg-brand rotate-45"></div>
          <div className="w-[30px] h-[2px] bg-[white] group-hover:bg-brand -translate-y-[2px] -rotate-45"></div>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
