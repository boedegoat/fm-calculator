import React, { useState } from 'react'

const ThemeSwitcher = () => {
  const btnClass = 'w-5 h-5'
  const labelClass = `flex items-center justify-center text-xs`

  const [theme, setTheme] = useState(1)
  const [pointerPos, setPointerPos] = useState(0)

  const selectTheme = (theme: number) => (e: React.MouseEvent) => {
    const { offsetLeft } = e.target as HTMLButtonElement
    setTheme(theme)
    setPointerPos(offsetLeft)
  }

  return (
    <div className='flex items-end'>
      <span className='text-sm leading-none tracking-widest mr-5'>THEME</span>
      <div>
        <div className='flex items-center justify-between px-2'>
          <span className={labelClass}>1</span>
          <span className={labelClass}>2</span>
          <span className={labelClass}>3</span>
        </div>
        <div className='relative bg-theme1-keypad overflow-hidden rounded-full flex items-center'>
          <div
            className={`${btnClass} absolute rounded-full bg-theme1-keys-red top-1/2 left-0 -translate-y-1/2 cursor-pointer transition-transform`}
            style={{
              transform: `translate(${pointerPos}px,-50%) scale(0.6)`,
            }}
          ></div>
          <button className={btnClass} onClick={selectTheme(1)}></button>
          <button className={btnClass} onClick={selectTheme(2)}></button>
          <button className={btnClass} onClick={selectTheme(3)}></button>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher
