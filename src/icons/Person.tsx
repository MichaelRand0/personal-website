import React from 'react'

interface Props extends React.ComponentProps<'svg'> {}

function Person(props: Props) {
  const { width = 40, height = 40, fill = 'white' } = props
  return (
    <svg
      height={height}
      width={width}
      version='1.1'
      id='_x32_'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 512 512'
      xmlSpace='preserve'
      fill={fill}
    >
      <g>
        <path
          className='st0'
          d='M364.032,355.035c-3.862-1.446-8.072-3.436-12.35-5.794l-71.57,98.935l-5.09-64.814h-38.033l-5.091,64.814
		l-71.569-98.935c-4.408,2.466-8.656,4.487-12.361,5.794c-37.478,13.193-129.549,51.136-123.607,122.21
		C25.787,494.301,119.582,512,256.006,512c136.413,0,230.208-17.699,231.634-34.755
		C493.583,406.102,401.273,368.961,364.032,355.035z'
        />
        <path
          className='st0'
          d='M171.501,208.271c5.21,29.516,13.966,55.554,25.494,68.38c0,15.382,0,26.604,0,35.587
		c0,0.902-0.158,1.852-0.416,2.833l40.41,19.462v28.545h38.033v-28.545l40.39-19.452c-0.258-0.981-0.416-1.932-0.416-2.843
		c0-8.983,0-20.205,0-35.587c11.548-12.826,20.304-38.864,25.514-68.38c12.143-4.338,19.096-11.281,27.762-41.658
		c9.231-32.358-13.876-31.258-13.876-31.258c18.69-61.873-5.922-120.022-47.124-115.753c-28.426-49.73-123.627,11.36-153.48,7.102
		c0,17.055,7.112,29.842,7.112,29.842c-10.379,19.69-6.378,58.951-3.446,78.809c-1.704-0.03-22.602,0.188-13.728,31.258
		C152.405,196.99,159.338,203.934,171.501,208.271z'
        />
      </g>
    </svg>
  )
}

export default Person
