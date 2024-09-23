import { useTheme } from 'next-themes'
import {LuMoon, LuSun, LuSunMoon} from "react-icons/lu";
import {useEffect, useRef, useState} from "react";
import './theme-changer.scss';

const ThemeChanger = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const currentIcon = () => {
        switch (resolvedTheme) {
            case 'system':
                return <LuSunMoon onClick={toggleDrawer} />
            case 'light':
                return <LuMoon onClick={toggleDrawer} />
            case 'dark':
                return <LuSun onClick={toggleDrawer} />
            default:
                return null
        }
    }

    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    // Handle click outside to close the drawer
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                closeDrawer();
            }
        };

        if (drawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [drawerOpen]);

    const toggleTheme = (theme: string) => {
        setTheme(theme);
        closeDrawer();
    }

    return (
        <div className={"theme-changer-container"}>
            {
                currentIcon()
            }

            <div ref={drawerRef} className={`theme-change ${drawerOpen ? 'open' : ''}`}>
                <div className="theme-change-icons">
                    <span onClick={() => toggleTheme('system')}><LuSunMoon /> Auto</span>
                    <span onClick={() => toggleTheme('light')}><LuSun /> Light</span>
                    <span onClick={() => toggleTheme('dark')}><LuMoon /> Dark </span>
                </div>
            </div>
        </div>
    )
}

export default ThemeChanger;