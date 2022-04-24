import { useStateMachine } from 'little-state-machine'

const Screen = () => {
  const { state } = useStateMachine()
  const { calculator } = state

  const screen = calculator.result || calculator.secondValue || calculator.firstValue

  return (
    <div className='bg-theme1-screen flex justify-end text-4xl p-5 rounded-xl'>
      <span className='truncate'>{screen}</span>
    </div>
  )
}

export default Screen
