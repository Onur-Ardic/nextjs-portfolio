"use client"
import { setTheme } from "@/lib/features/themeSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



const ThemeButton = () => {
    const dispatch = useDispatch()
    const [theme, setOnTheme] = useState("light")
    dispatch(setTheme(theme))

    const setThemeValue = () => {
        setTheme(theme === "light" ? "dark" : "light")
        setOnTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div className="fixed right-10 top-20 z-10">
            <button className="theme-button bg-amber-200 z-10 p-3  rounded-full" onClick={setThemeValue}>
                {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
        </div>
    )
}

export default ThemeButton