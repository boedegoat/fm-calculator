import Top from './components/Top'
import Screen from './components/Screen'
import Keypad from './components/Keypad'
import { useStateMachine } from 'little-state-machine'
import cn from 'classnames'

const App = () => {
  const { state } = useStateMachine()
  const { theme } = state

  return (
    <main
      className={cn(
        'h-screen bg-theme1-main',
        theme.type == 1 ? 'bg-theme1-main' : theme.type == 2 ? 'bg-theme2-main' : 'bg-theme3-main'
      )}
    >
      <div className='p-5 py-8 flex flex-col h-full max-w-md mx-auto'>
        <Top />
        <div className='mt-10 h-full flex flex-col'>
          <Screen />
          <Keypad />
        </div>
      </div>
    </main>
  )
}

export default App
