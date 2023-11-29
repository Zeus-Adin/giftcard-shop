const Footer = ({scrollToRef, handleScrollToRef}) => {

    return (
        <footer>
            <div className="content">
                <div className="footer1">
                    <div className="col-span-2 mb-10 md:mb-0">
                        <a className="flex justify-center md:justify-start" href="/">
                            <span className="span1">
                                <span className="span2">
                                    <img style={{ height: '10rem', width: '15rem' }} className="img1" alt="" aria-hidden="true" src="/logo.png" />
                                </span>
                                <img alt="" src="/logo.png" decoding="async" data-nimg="intrinsic" className="img2" />
                                <noscript>
                                    <img alt="" srcSet="vectors/logo.svg 1x, vectors/logo.svg 2x" src="/logo.png" decoding="async" data-nimg="intrinsic" className="img2" loading="lazy" />
                                </noscript>
                            </span>
                        </a>
                        <p className="mt-[2.9375rem] text-deepPurple text-lg text-center md:text-left max-w-xs mx-auto md:mx-0">
                            MaximusHub is a giftcard trading platform available on Web, coming soon on Android &amp; IOS.</p>
                        <div className="logos"><a className="" target="_blank" href="https://instagram.com/myridima">
                            <span className="span1">
                                <span className="span2">
                                    <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e" />
                                </span>
                                <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="img2" />
                                <noscript>
                                    <img alt="" srcSet="vectors/ig-logo.svg 1x, vectors/ig-logo.svg 2x" src="vectors/ig-logo.svg" decoding="async" data-nimg="intrinsic" className="img2" loading="lazy" />
                                </noscript>
                            </span>
                        </a>
                            <a target="_blank" href="https://twitter.com/myridima">
                                <span className="span1">
                                    <span className="span2">
                                        <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2748%27/%3e" />
                                    </span>
                                    <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" className="img2" />
                                    <noscript>
                                        <img alt="" srcSet="vectors/twitter-logo.svg 1x, vectors/twitter-logo.svg 2x" src="vectors/twitter-logo.svg" decoding="async" data-nimg="intrinsic" className="img2" loading="lazy" />
                                    </noscript>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="bottom-navs">
                        <h1>Company</h1><a href="about">About</a><a href="blogs">Blog</a>
                    </div>
                    <div className="bottom-navs">
                        <h1>Product</h1><a href="#" onClick={handleScrollToRef}>Why MaximusHub</a><a href="download">Download</a><a
                            href="faq">FAQs</a>
                    </div>
                    <div className="bottom-navs">
                        <h1>Legal</h1><a href="terms">Terms &amp; Conditions</a><a href="privacy">Privacy Policy</a><a
                            href="aml">AML Policy</a>
                    </div>
                    <div className="bottom-navs">
                        <h1>Help</h1>
                        <a href="contact">Contact</a>
                        <a href="cdn-cgi/l/email-protection.html#1b737e776b5b766269727f72767a35787476" target="_blank" rel="noreferrer">
                            <span className="__cf_email__" data-cfemail="f39b969f83b39e8a819a979a9e92dd909c9e">[email&#160;protected]</span>
                        </a>
                        <p className="mt-8"></p>
                    </div>
                </div>
                <div className="footer2">
                    <div className="copy">
                        <p></p><span>© 2022 MaximusHub. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;