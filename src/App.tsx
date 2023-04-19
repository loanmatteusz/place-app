import GlobalStyles from './global/global'
import { ThemeProvider } from "styled-components"

import theme from "./global/theme"

import { Home } from "./pages/Home"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
