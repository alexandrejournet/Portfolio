// components/Topbar.js
"use client";
import Link from 'next/link';
import './topbar.scss';
import {useTheme} from "next-themes";
import {useEffect, useRef, useState} from "react";
import {LuLinkedin, LuMoon, LuSun} from "react-icons/lu";
import {ImGithub} from "react-icons/im";
import ThemeChanger from "@/app/components/change-theme/ThemeChanger";

const Topbar = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(() => {
    }, []);

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    // Detect clicks outside the drawer to close it
    useEffect(() => {

        setMounted(true);
        const handleClickOutside = (event: Event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
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

    if(!mounted) return null;

    return (
        <nav className="topbar">
            <div className="topbar-container">
                <button className="burger-button" onClick={toggleDrawer}>
                ☰
            </button>
                {/* Links aligned to the right */}
                <ul className="menu">
                    <li><Link href={"#about-me"}>A propos de moi</Link></li>
                    <li><Link href={"#technos"}>Technologies</Link></li>
                    <li><Link href={"#experiences"}>Expériences</Link></li>
                    <li><Link href={"#projects"}>Projets</Link></li>
                </ul>

                {/* Buttons for GitHub, LinkedIn, and Theme Change */}
                <div className="topbar-buttons">
                    <ImGithub />
                    <LuLinkedin />
                    <ThemeChanger />
                </div>

                {/* Drawer (for mobile) */}
                <div ref={drawerRef} className={`drawer ${drawerOpen ? 'open' : ''}`}>
                    <ul className="drawer-menu">
                        <li><Link href={"#about-me"} onClick={closeDrawer}>A propos de moi</Link></li>
                        <li><Link href={"#technos"} onClick={closeDrawer}>Technologies</Link></li>
                        <li><Link href={"#experiences"} onClick={closeDrawer}>Expériences</Link></li>
                        <li><Link href={"#projects"} onClick={closeDrawer}>Projets</Link></li>
                    </ul>
                    <div className="drawer-buttons">
                        <ImGithub />
                        <LuLinkedin />
                        {resolvedTheme === 'dark' ?
                        <LuSun onClick={toggleTheme}/>
                        : <LuMoon onClick={toggleTheme}/>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;