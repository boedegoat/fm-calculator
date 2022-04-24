import 'little-state-machine'

declare module 'little-state-machine' {
  interface GlobalState {
    theme: { type: number; pointerPos: number }
    calculator: {
      firstValue: string
      operator: string
      secondValue: string
      result: string
    }
  }
}
