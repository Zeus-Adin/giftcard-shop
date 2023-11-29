import Home from "./home";
import Rates from "./rate";
import About from "./about";
import Faqs from "./faqs";
import Contact from "./contact";

import "./Landing.css"

const Landing = ({ scrollToRef, handleScrollToRef }) => {
    const path = window.location.pathname;
    return (
        <>
            {path === '/' && <Home scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />}
            {path === '/rates' && <Rates scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />}
            {path === '/about' && <About scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />}
            {path === '/faqs' && <Faqs scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />}
            {path === '/contact' && <Contact scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />}
        </>
    )
}

export default Landing;