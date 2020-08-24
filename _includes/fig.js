import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import figstyle from '../styles/fig.module.css'

if (typeof window !== "undefined") {
  var test = window.innerWidth / 7.5;
}

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 12 + test}px,${y / 13}px,0)`
const trans2 = (x, y) => `translate3d(${x / 10 + test}px,${y / 10}px,0)`
const trans3 = (x, y) => `translate3d(${x / 8 + test}px,${y / 7}px,0)`
const trans4 = (x, y) => `translate3d(${x / 10 + test}px,${y / 10}px,0)`
const trans5 = (x, y) => `translate3d(${x / 10 - test}px,${y / 10}px,0)`

export default function Card() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className={figstyle.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className={figstyle.fig1} style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className={figstyle.fig2} style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className={figstyle.fig5} style={{ transform: props.xy.interpolate(trans4) }} />
      <animated.div className={figstyle.fig3} style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className={figstyle.fig4} style={{ transform: props.xy.interpolate(trans4) }} />
      <animated.a href="#" className={figstyle.logo} style={{ transform: props.xy.interpolate(trans5) }} />
    </div>
  )
}
