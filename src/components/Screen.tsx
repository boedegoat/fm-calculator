import { useStateMachine } from 'little-state-machine'
import cn from 'classnames'

const Screen = () => {
  const { state } = useStateMachine()
  const { calculator, theme } = state

  const screen = calculator.result || calculator.secondValue || calculator.firstValue

  return (
    <div
      className={cn(
        'flex justify-end text-4xl p-5 rounded-xl',
        theme.type == 1
          ? 'bg-theme1-screen'
          : theme.type == 2
          ? 'bg-theme2-screen'
          : 'bg-theme3-screen'
      )}
    >
      <span className='truncate'>{screen}</span>
    </div>
  )
}

export default Screen
