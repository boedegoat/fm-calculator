import cn from 'classnames'
import { keys } from '../data'

export interface KeyProps {
  label: number | string
  color: 'standard' | 'mark' | 'red'
  span?: boolean
}

const Keypad = () => {
  return (
    <div className='mt-5 flex-grow bg-theme1-keypad rounded-xl p-5 grid grid-cols-4 grid-rows-5 gap-4'>
      {keys.map((key, idx) => (
        <Key key={idx} {...key} />
      ))}
    </div>
  )
}

export default Keypad

const Key = ({ label, color, span }: KeyProps) => {
  return (
    <button
      className={cn(
        'rounded-md text-2xl leading-[0] border-b-4 active:translate-y-[2px] active:border-b-0',
        getKeyColor(color),
        span ? 'col-span-2' : ''
      )}
    >
      {label}
    </button>
  )
}

const getKeyColor = (type: string) => {
  let keyColor

  switch (type) {
    case 'standard':
      keyColor = 'bg-theme1-keys-light border-b-theme1-keys-light-shadow text-theme1-text'
      break
    case 'mark':
      keyColor = 'bg-theme1-keys-blue border-b-theme1-keys-blue-shadow text-white'
      break
    case 'red':
      keyColor = 'bg-theme1-keys-red border-b-theme1-keys-red-shadow text-white'
      break
  }

  return keyColor
}
