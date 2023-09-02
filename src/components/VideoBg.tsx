import { useEffect, useRef } from "react"

interface Props extends React.ComponentProps<"video"> {}

const VideoBg = (props: Props) => {
  const { src } = props
  const videoRef = useRef<any>(null)

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef?.current?.play()
    }
  }, [videoRef])
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <video
        className="w-full h-full object-cover md:object-fit"
        ref={videoRef}
        controls={false}
        muted
        src={src}
        loop
      />
      <div className="bg-bgBlack opacity-40 absolute top-0 left-0 w-full h-full"></div>
    </div>
  )
}

export default VideoBg
