
const useMobile = () => {
  const getMobileDetect = (userAgent: NavigatorID["userAgent"]) => {
    const isAndroid = () => Boolean(userAgent.match(/Android/i))
    const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
    const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
    const isMobile = Boolean(isAndroid() || isIos() || isOpera())
    return isMobile
  }

  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent
  const isMobile = getMobileDetect(userAgent)

  return {
    isMobile,
  }
}

export default useMobile
