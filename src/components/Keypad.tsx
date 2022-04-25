import cn from 'classnames'
import { GlobalState, useStateMachine } from 'little-state-machine'
import { keys } from '../data'

export type KeyColor = 'standard' | 'mark' | 'red'
export interface KeyProps {
  label: number | string
  color: KeyColor
  action?: string
  span?: boolean
}

const Keypad = () => {
  const { state } = useStateMachine()
  const { theme } = state

  return (
    <div
      className={cn(
        'mt-5 h-full rounded-xl p-5 grid grid-cols-4 grid-rows-5 gap-4',
        theme.type == 1
          ? 'bg-theme1-keypad'
          : theme.type == 2
          ? 'bg-theme2-keypad'
          : 'bg-theme3-screen'
      )}
    >
      {keys.map((key, idx) => (
        <Key key={idx} {...key} />
      ))}
    </div>
  )
}

export default Keypad

const setResult = (state: GlobalState, payload: string): GlobalState => {
  return {
    ...state,
    calculator: {
      ...state.calculator,
      result: payload,
    },
  }
}

const setOperator = (state: GlobalState, payload: string): GlobalState => {
  return {
    ...state,
    calculator: {
      ...state.calculator,
      operator: payload,
    },
  }
}

const setFirstValue = (state: GlobalState, payload: string): GlobalState => {
  return {
    ...state,
    calculator: {
      ...state.calculator,
      firstValue: payload,
    },
  }
}

const setSecondValue = (state: GlobalState, payload: string): GlobalState => {
  return {
    ...state,
    calculator: {
      ...state.calculator,
      secondValue: payload,
    },
  }
}

const calculate = (num1: string, operator: string, num2: string) => {
  let leftNum = parseFloat(num1)
  let rightNum = parseFloat(num2)

  if (operator == '') {
    return leftNum.toString()
  }
  if (num2 == '') {
    rightNum = leftNum
  }
  if (operator === 'add') {
    return (leftNum + rightNum).toString()
  }
  if (operator === 'subtract') {
    return (leftNum - rightNum).toString()
  }
  if (operator === 'multiply') {
    return (leftNum * rightNum).toString()
  }
  if (operator === 'divide') {
    return (leftNum / rightNum).toString()
  }
}

const Key = ({ label, color, span, action }: KeyProps) => {
  const { state, actions } = useStateMachine({
    setResult,
    setOperator,
    setFirstValue,
    setSecondValue,
  })
  const { calculator, theme } = state

  const onKeyClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const { dataset, textContent: keyContent } = e.target as HTMLButtonElement
    const { action } = dataset

    if (action == 'number') {
      if (calculator.result) {
        actions.setFirstValue(calculator.secondValue)
        actions.setSecondValue(keyContent!)
        actions.setResult('')
        return
      }
      if (calculator.operator) {
        if (calculator.secondValue == '0') {
          actions.setSecondValue(keyContent!)
          return
        }
        actions.setSecondValue(calculator.secondValue + keyContent)
        return
      }
      if (calculator.firstValue == '0') {
        actions.setFirstValue(keyContent!)
        return
      }
      actions.setFirstValue(calculator.firstValue + keyContent)
    }

    if (action == 'decimal') {
      if (calculator.result) {
        actions.setFirstValue(calculator.secondValue)
        actions.setSecondValue('0.')
        actions.setResult('')
        return
      }
      if (!calculator.secondValue) {
        if (calculator.operator) {
          actions.setSecondValue('0.')
          return
        }
        if (calculator.firstValue.includes('.')) return
        actions.setFirstValue(calculator.firstValue + '.')
        return
      }
      if (calculator.secondValue.includes('.')) return
      actions.setSecondValue(calculator.secondValue + '.')
    }

    if (action == 'add' || action == 'subtract' || action == 'multiply' || action == 'divide') {
      actions.setResult('')
      if (calculator.operator) {
        if (calculator.secondValue && !calculator.result) {
          const result = calculate(
            calculator.firstValue,
            calculator.operator,
            calculator.secondValue
          )
          actions.setFirstValue(result)
        }
        actions.setSecondValue('')
        actions.setOperator(action)
        return
      }
      actions.setOperator(action)
    }

    if (action == 'calculate') {
      if (!calculator.operator) return
      const result = calculate(calculator.firstValue, calculator.operator, calculator.secondValue)
      actions.setResult(result)
      actions.setFirstValue(result)
    }

    if (action == 'delete') {
      if (!calculator.secondValue) {
        actions.setFirstValue(
          calculator.firstValue.slice(0, calculator.firstValue.length - 1) || '0'
        )
        return
      }
      actions.setSecondValue(
        calculator.secondValue.slice(0, calculator.secondValue.length - 1) || '0'
      )
    }

    if (action == 'reset') {
      actions.setFirstValue('0')
      actions.setOperator('')
      actions.setSecondValue('')
      actions.setResult('')
    }
  }

  return (
    <button
      className={cn(
        'rounded-md text-2xl leading-[0] border-b-4 active:translate-y-[2px] active:border-b-0',
        getKeyColor(color, theme),
        span ? 'col-span-2' : 'col-span-1',
        calculator.operator == action && !calculator.secondValue ? 'opacity-50' : 'opacity-100'
      )}
      data-action={action ?? 'number'}
      onClick={onKeyClick}
    >
      {label}
    </button>
  )
}

const getKeyColor = (color: KeyColor, theme: { type: number }) => {
  let keyColor

  switch (color) {
    case 'standard':
      keyColor =
        theme.type == 1
          ? 'bg-theme1-keys-light border-b-theme1-keys-light-shadow text-theme1-text'
          : theme.type == 2
          ? 'bg-theme2-keys-light border-b-theme2-keys-light-shadow text-theme2-text'
          : 'bg-theme3-keys-dark border-b-theme3-keys-dark-shadow text-theme3-text-yellow'
      break
    case 'mark':
      keyColor =
        theme.type == 1
          ? 'bg-theme1-keys-blue border-b-theme1-keys-blue-shadow text-white'
          : theme.type == 2
          ? 'bg-theme2-keys-cyan border-b-theme2-keys-cyan-shadow text-white'
          : 'bg-theme3-keys-violet border-b-theme3-keys-violet-shadow text-white'
      break
    case 'red':
      keyColor = 'bg-theme1-keys-red border-b-theme1-keys-red-shadow text-white'
      keyColor =
        theme.type == 1
          ? 'bg-theme1-keys-red border-b-theme1-keys-red-shadow text-white'
          : theme.type == 2
          ? 'bg-theme2-keys-orange border-b-theme2-keys-orange-shadow text-white'
          : 'bg-theme3-keys-cyan border-b-theme3-keys-cyan-shadow text-theme3-text-dark'
      break
  }

  return keyColor
}
