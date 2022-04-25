import React from 'react'
import { GlobalState, useStateMachine } from 'little-state-machine'
import cn from 'classnames'

const changeTheme = (state: GlobalState, payload: { type: number; pointerPos: number }) => {
  return { ...state, theme: payload }
}

const ThemeSwitcher = () => {
  const btnClass = 'w-5 h-5'
  const labelClass = `flex items-center justify-center text-xs`

  const { state, actions } = useStateMachine({ changeTheme })
  const { theme } = state

  const selectTheme = (type: number) => (e: React.MouseEvent) => {
    const { offsetLeft } = e.target as HTMLButtonElement
    actions.changeTheme({ type, pointerPos: offsetLeft })
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
        <div
          className={cn(
            'relative overflow-hidden rounded-full flex items-center',
            theme.type == 1
              ? 'bg-theme1-keypad'
              : theme.type == 2
              ? 'bg-theme2-keypad'
              : 'bg-theme3-screen'
          )}
        >
          <div
            className={cn(
              btnClass,
              'absolute rounded-full bg-theme1-keys-red top-1/2 left-0 -translate-y-1/2 cursor-pointer transition-transform',
              theme.type == 1
                ? 'bg-theme1-keys-red'
                : theme.type == 2
                ? 'bg-theme2-keys-orange'
                : 'bg-theme2-keys-cyan'
            )}
            style={{
              transform: `translate(${theme.pointerPos}px,-50%) scale(0.6)`,
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
