/**
 * @copyright 2024 deil
 * @license Apache-2.0
 */

import { ReactLenis } from 'lenis/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
import { useEffect } from "react";
**/

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
/**
    useEffect(() => {
        // Create and append the GTranslate wrapper div
        const wrapper = document.createElement('div');
        wrapper.className = 'gtranslate_wrapper';
        document.body.appendChild(wrapper);

        // Create and append the GTranslate settings script
        const settingsScript = document.createElement('script');
        settingsScript.textContent = `
            window.gtranslateSettings = {
                "default_language":"en",
                "detect_browser_language":true,
                "languages":["en","id"],
                "wrapper_selector":".gtranslate_wrapper",
                "flag_style":"3d",
                "alt_flags":{"en":"usa"}
            }
        `;
        document.body.appendChild(settingsScript);

        // Create and append the GTranslate float script
        const floatScript = document.createElement('script');
        floatScript.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
        floatScript.defer = true;
        document.body.appendChild(floatScript);

        // Cleanup function
        return () => {
            document.body.removeChild(wrapper);
            document.body.removeChild(settingsScript);
            document.body.removeChild(floatScript);
        };
    }, []); // Empty dependency array means this effect runs once on mount
**/
    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                    markers: false
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        });
    })

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
