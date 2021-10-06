import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [windowScroll, setWindowScroll] = useState(
        {
            height: undefined
        }
    )
    useEffect(() => {
        const handleWindowScroll = () => setWindowScroll(
            { height: window.scrollY }
        )
        handleWindowScroll()
        window.addEventListener("scroll", handleWindowScroll);
        return () => window.removeEventListener("scroll", handleWindowScroll);
    }, [])
    return windowScroll
}