module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
  theme: {
    colors: {
      theme1: {
        main: 'hsl(222, 26%, 31%)',
        keypad: 'hsl(223, 31%, 20%)',
        screen: 'hsl(224, 36%, 15%)',
        keys: {
          blue: 'hsl(225, 21%, 49%)',
          'blue-shadow': 'hsl(224, 28%, 35%)',
          red: 'hsl(6, 63%, 50%)',
          'red-shadow': 'hsl(6, 70%, 34%)',
          light: 'hsl(30, 25%, 89%)',
          'light-shadow': 'hsl(28, 16%, 65%)',
        },
        text: 'hsl(221, 14%, 31%)',
      },
      theme2: {
        main: 'hsl(0, 0%, 90%)',
        keypad: 'hsl(0, 5%, 81%)',
        screen: 'hsl(0, 0%, 93%)',
        keys: {
          cyan: 'hsl(185, 42%, 37%)',
          'cyan-shadow': 'hsl(185, 58%, 25%)',
          orange: 'hsl(25, 98%, 40%)',
          'orange-shadow': 'hsl(25, 99%, 27%)',
          light: 'hsl(45, 7%, 89%)',
          'light-shadow': 'hsl(35, 11%, 61%)',
        },
        text: 'hsl(60, 10%, 19%)',
      },
      theme3: {
        main: 'hsl(268, 75%, 9%)',
        screen: 'hsl(268, 71%, 12%)',
        keys: {
          violet: 'hsl(281, 89%, 26%)',
          'violet-shadow': 'hsl(285, 91%, 52%)',
          cyan: 'hsl(176, 100%, 44%)',
          'cyan-shadow': 'hsl(177, 92%, 70%)',
          dark: 'hsl(268, 47%, 21%)',
          'dark-shadow': 'hsl(290, 70%, 36%)',
        },
        text: {
          yellow: 'hsl(52, 100%, 62%)',
          dark: 'hsl(198, 20%, 13%)',
        },
      },
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}
