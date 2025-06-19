import './App.css'
import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  //const [count, setCount] = useState(0)
  const [themeMode, setThemeMode] = useState('light');

 const lighttheme = () => {
    setThemeMode('light');
  }

  const darktheme = () => {
    setThemeMode('dark');
  }

  // actual change of theme
        useEffect(() => {
        document.querySelector('html').classList.remove('dark', 'light')
        document.querySelector('html').classList.add(themeMode)
         },[themeMode])


  return (
    <ThemeProvider value={{
        themeMode,
        darktheme,
        lighttheme,
    }}>
       <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
       {/* <h1 className='p-4 bg-pink-600 px-5'>I'm the Champion V.G.B 👑</h1> */}
    </ThemeProvider>
  )
}
export default App