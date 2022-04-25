import { useStateMachine } from 'little-state-machine'
import ThemeSwitcher from './ThemeSwitcher'
import cn from 'classnames'

const Top = () => {
  const { state } = useStateMachine()
  const { theme } = state

  return (
    <header
      className={cn(
        'flex justify-between items-center',
        theme.type == 1
          ? 'text-white'
          : theme.type == 2
          ? 'text-theme2-text'
          : 'text-theme3-text-yellow'
      )}
    >
      <h1 className='text-3xl tracking-wide'>calc</h1>
      <ThemeSwitcher />
    </header>
  )
}

export default Top
