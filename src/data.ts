import { KeyProps } from './components/Keypad'

export const keys: KeyProps[] = [
  { label: 7, color: 'standard' },
  { label: 8, color: 'standard' },
  { label: 9, color: 'standard' },
  { label: 'DEL', color: 'mark' },

  { label: 4, color: 'standard' },
  { label: 5, color: 'standard' },
  { label: 6, color: 'standard' },
  { label: '+', color: 'standard' },

  { label: 1, color: 'standard' },
  { label: 2, color: 'standard' },
  { label: 3, color: 'standard' },
  { label: '-', color: 'standard' },

  { label: '.', color: 'standard' },
  { label: 0, color: 'standard' },
  { label: '/', color: 'standard' },
  { label: 'x', color: 'standard' },

  { label: 'RESET', color: 'mark', span: true },
  { label: '=', color: 'red', span: true },
]
