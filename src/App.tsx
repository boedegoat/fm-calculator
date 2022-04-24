import Top from './components/Top'
import Screen from './components/Screen'
import Keypad from './components/Keypad'

const App = () => {
  return (
    <main className='h-screen bg-theme1-main text-white'>
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
