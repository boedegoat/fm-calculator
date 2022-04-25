import ThemeSwitcher from './ThemeSwitcher'

const Top = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='text-3xl tracking-wide'>calc</h1>
      <ThemeSwitcher />
    </header>
  )
}

export default Top
