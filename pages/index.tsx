import Header from "$modules/header/Header"
import dynamic from "next/dynamic"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Header />
      <AnimatedCursor
        innerSize={26}
        outerSize={26}
        color="75, 255, 165"
        outerAlpha={0.3}
        innerScale={0}
        innerStyle={{
          display: 'none',
          backgroundColor: '#4bffa599'
        }}
        outerScale={3}
        showSystemCursor={true}
        trailingSpeed={6}
        clickables={[
          "a",
          "select",
          "textarea",
          "button",
        ]}
      />
    </main>
  )
}
