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
        theme.type == 1
          ? 'bg-theme1-main text-white'
          : theme.type == 2
          ? 'bg-theme2-main text-theme2-text'
          : 'bg-theme3-main text-theme3-text-yellow'
      )}
    >
      <div className='p-5 py-8 flex flex-col h-full max-w-md mx-auto'>
        <Top />
        <div className='mt-10 h-full max-h-[600px] flex flex-col'>
          <Screen />
          <Keypad />
        </div>
        <footer className='text-center mt-auto pt-5'>
          Made with <span className='text-theme1-keys-red'>❤</span> by{' '}
          <a
            href='https://www.frontendmentor.io/profile/boedegoat'
            target='_blank'
            rel='noopener noreferer'
          >
            boedegoat
          </a>
        </footer>
      </div>
    </main>
  )
}

export default App
