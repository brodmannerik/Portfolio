import Header from './Header'
import Wrapper from './Wrapper'
import { HeaderTextProvider } from './hooks/useHeaderText'
import React from 'react/index'

function App() {
  return (
    <>
      <HeaderTextProvider>
        <Header />
        <div className="fixed inset-0 pointer-events-none fixed h-screen w-screen overflow-auto"></div>
        <Wrapper />
      </HeaderTextProvider>
    </>
  )
}

export default App
