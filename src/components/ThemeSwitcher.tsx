import React, { useEffect, useRef } from 'react'
import { GlobalState, useStateMachine } from 'little-state-machine'
import cn from 'classnames'
import { userInDarkMode } from '../main'

const changeTheme = (
  state: GlobalState,
  payload: { type: number; pointerPos: number; userTheme?: boolean }
): GlobalState => {
  return { ...state, theme: { ...state.theme, ...payload } }
}

const ThemeSwitcher = () => {
  const buttonsRef = useRef<HTMLDivElement>(null)
  const { state, actions } = useStateMachine({ changeTheme })
  const { theme } = state

  const updateTheme = () => {
    if (theme.userTheme) return
    const { current: buttons } = buttonsRef
    const themeType = userInDarkMode ? 1 : 2
    const btn = ([...buttons!.childNodes] as HTMLButtonElement[]).find((btn) => {
      return Number(btn.dataset.theme!) == themeType
    })!
    actions.changeTheme({ ...theme, type: themeType, pointerPos: btn.offsetLeft })
  }

  useEffect(() => {
    updateTheme()
  }, [])

  const selectTheme = (e: React.MouseEvent) => {
    const { offsetLeft, dataset } = e.target as HTMLButtonElement
    const themeType = Number(dataset.theme)
    actions.changeTheme({ type: themeType, pointerPos: offsetLeft, userTheme: true })
  }

  const btnClass = 'w-5 h-5'
  const labelClass = `flex items-center justify-center text-xs`

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
          ref={buttonsRef}
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
          <button
            aria-label='theme 1'
            className={btnClass}
            data-theme={1}
            onClick={selectTheme}
          ></button>
          <button
            aria-label='theme 2'
            className={btnClass}
            data-theme={2}
            onClick={selectTheme}
          ></button>
          <button
            aria-label='theme 3'
            className={btnClass}
            data-theme={3}
            onClick={selectTheme}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher
