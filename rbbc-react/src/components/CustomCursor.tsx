import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [isClicked, setIsClicked] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80)
    }
    const onDown = () => { setIsClicked(true); setTimeout(() => setIsClicked(false), 200) }
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setIsHovering(!!(t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button')))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseover', onOver)
    }
  }, [visible])

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null
  }

  const size = isHovering ? 44 : 28

  return (
    <>
      <div
        className={`custom-cursor ${isClicked ? 'clicked' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
          transition: `transform 0.15s ease, opacity 0.3s ease, width 0.2s ease, height 0.2s ease`,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: follower.x,
          top: follower.y,
          opacity: visible ? 0.8 : 0,
        }}
      />
    </>
  )
}

export default CustomCursor
