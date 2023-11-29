import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import { Fab } from '@mui/material';
import styled from 'styled-components';
import Footer from '../footer';

const Home = ({ scrollToRef, handleScrollToRef }) => {
    const CustomFab = styled(Fab)(({ }) => ({
        backgroundColor: '#7464e3',
        color: '#f4d434',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#7464e3'
        },
    }))
    const CustomAdbIcon = styled(AdbIcon)(({ }) => ({

    }))
    const CustomAppleIcon = styled(AppleIcon)(({ }) => ({

    }))
    return (
        <div className="Home">
            <section className="hero">
                <h3>Convert your Giftcards to <span> instant cash.</span>
                </h3>
                <p>MaximusHub gives you the power to sell your gift cards for instant naira. Enjoy high rates, get airtime, pay
                    bills, all in one place.</p>
                <div className="app-logos">
                    {/* <h2 className="text-center text-rBlue font-bold text-4xl mb-[2.375rem] headerflexed">Coming soon on</h2> */}
                    <a target="" href="#">
                        <span className="span1">
                            <span className="span2" >
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27196%27%20height=%2786%27/%3e" />
                            </span>
                            <img className="img2" alt="" srcSet="vectors/d-android.svg 1x, vectors/d-android.svg 2x" src="vectors/d-android.svg" decoding="async" data-nimg="intrinsic" />
                        </span>
                    </a>
                    <a target="" href="#" >
                        <span className="span1">
                            <span className="span2">
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27196%27%20height=%2786%27/%3e" />
                            </span>
                            <img className="img2" alt="" srcSet="vectors/d-ios.svg 1x, vectors/d-ios.svg 2x" src="vectors/d-ios.svg" decoding="async" data-nimg="intrinsic" />
                        </span>
                    </a>
                </div>
            </section >

            <section className="section-phone">
                <div className="phone-box">
                    <img src="gif/LEFT_PHONE.gif" alt="phone" loading="eager" className="left-phone" />
                    <img src="gif/RIGHT_PHONE.gif" loading="eager" alt="phone" className="right-phone" />
                </div>
                <h2 className="text-center text-rBlue font-bold text-4xl mb-[2.375rem]">As seen on:</h2>
                <div className="w-[80%] mb-10">
                    <div className="FeatureLogos">
                        <a target="_blank" href="">
                            <span className="span1">
                                <span className="span2">
                                    <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2746%27/%3e" />
                                </span>
                                <img alt="" srcSet="_next/punch-1.png 1x?url=%2Fimages%2Fpunch.png&amp;w=128&amp;q=75 1x, _next/punch.png 2xe?url=%2Fimages%2Fpunch.png&amp;w=256&amp;q=75 2x" src="_next/punch.png?url=%2Fimages%2Fpunch.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span>
                        </a>
                        <a target="_blank" href="https://www.naijaloaded.com.ng/general/how-to-sell-gift-cards-and-pay-bills-on-ridima-trading-platform">
                            <span className="span1">
                                <span className="span2">
                                    <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2746%27/%3e" />
                                </span>
                                <img alt="" srcSet="_next/nja-1.png 1x?url=%2Fimages%2Fnja.png&amp;w=128&amp;q=75 1x, _next/nja.png 2xe?url=%2Fimages%2Fnja.png&amp;w=256&amp;q=75 2x" src="_next/nja.png?url=%2Fimages%2Fnja.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span></a><a
                                target="_blank" href="">
                            <span className="span1">
                                <span className="span2">
                                    <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2746%27/%3e" />
                                </span>
                                <img alt="" srcSet="_next/legit-1.png 1x?url=%2Fimages%2Flegit.png&amp;w=128&amp;q=75 1x, _next/legit.png 2xe?url=%2Fimages%2Flegit.png&amp;w=256&amp;q=75 2x" src="_next/legit.png?url=%2Fimages%2Flegit.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span>
                        </a>
                        <a target="_blank" href="https://www.premiumtimesng.com/promoted/568114-10-hot-gift-cards-with-high-rates-on-ridima-platform-today.html">
                            <span className="span1"><span className="span2">
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2746%27/%3e" />
                            </span>
                                <img alt="" srcSet="_next/times-1.png 1x?url=%2Fimages%2Ftimes.png&amp;w=128&amp;q=75 1x, _next/times.png 2xe?url=%2Fimages%2Ftimes.png&amp;w=256&amp;q=75 2x" src="_next/times.png?url=%2Fimages%2Ftimes.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span>
                        </a>
                        <a target="_blank" href="https://techcabal.com/2022/11/28/ridima-best-gift-card-trading-and-bill-payments-platform-2023/">
                            <span className="span1">
                                <span className="span2">
                                    <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%2746%27/%3e" />
                                </span>
                                <img alt="" srcSet="_next/techcabal-1.png 1x?url=%2Fimages%2Ftechcabal.png&amp;w=128&amp;q=75 1x, _next/techcabal.png 2xe?url=%2Fimages%2Ftechcabal.png&amp;w=256&amp;q=75 2x" src="_next/techcabal.png?url=%2Fimages%2Ftechcabal.png&amp;w=256&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="new-sell">
                <section className="left">
                    <span className="span1">
                        <span className="span2">
                            <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27878%27/%3e" />
                        </span>
                        <img alt="phone" srcSet="_next/sell-phone-1.png 1x?url=%2Fwebp%2Fsell-phone.webp&amp;w=640&amp;q=75 1x, _next/sell-phone.png 2xe?url=%2Fwebp%2Fsell-phone.webp&amp;w=1080&amp;q=75 2x" src="_next/sell-phone.png?url=%2Fwebp%2Fsell-phone.webp&amp;w=1080&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                    </span>
                    <div className="buy-wrap">
                        <h2>Buy your Preferred Giftcards easily</h2>
                        <p>With access to multiple options, you can also buy your desired Giftcard brand. </p>
                        <div className="flex items-center gap-1 border border-white h-[5.125rem] rounded-[3.125rem] pl-9 pr-[1.25rem] w-[19.5rem]">
                            <span className="whitespace-nowrap">Coming soon on</span>
                            <span className="flex-grow"></span>
                            <CustomFab href='#'>
                                <CustomAdbIcon fontSize='large' />
                            </CustomFab>
                            <CustomFab href="#" >
                                <CustomAppleIcon fontSize='large' />
                            </CustomFab>
                        </div>
                    </div>
                    <span className="span1">
                        <span className="span2">
                            <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27518%27%20height=%271048%27/%3e" />

                        </span>
                        <img alt="" srcSet="_next/amazon-phone-1.png 1x?url=%2Fwebp%2Famazon-phone.webp&amp;w=640&amp;q=75 1x, _next/amazon-phone.png 2xe?url=%2Fwebp%2Famazon-phone.webp&amp;w=1080&amp;q=75 2x" src="_next/amazon-phone.png?url=%2Fwebp%2Famazon-phone.webp&amp;w=1080&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                    </span>
                    <div className="buy-wrap">
                        <h2>Buy airtime and pay bills</h2>
                        <p>Buy, pay and top up your subscriptions smoothly, you can save up to 2% with every bill payment made
                            using MaximusHub. </p>
                        <div
                            className="flex items-center gap-1 border border-white h-[5.125rem] rounded-[3.125rem] pl-9 pr-[1.25rem] w-[19.5rem]">
                            <span className="whitespace-nowrap">Coming soon on</span>
                            <span className="flex-grow"></span>
                            <CustomFab href="#" >
                                <CustomAdbIcon fontSize='large' />
                            </CustomFab>
                            <CustomFab href="#" >
                                <CustomAppleIcon fontSize='large' />
                            </CustomFab>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <span className="span1">
                            <span className="span2">
                                <img
                                    className="img1"
                                    alt="" aria-hidden="true"
                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27911%27%20height=%27983%27/%3e" />
                            </span>
                            <img alt="" srcSet="_next/bill-phone-1.png 1x?url=%2Fwebp%2Fbill-phone.webp&amp;w=1080&amp;q=75 1x, _next/bill-phone.png 2xe?url=%2Fwebp%2Fbill-phone.webp&amp;w=1920&amp;q=75 2x" src="_next/bill-phone.png?url=%2Fwebp%2Fbill-phone.webp&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                        </span>
                    </div>
                </section>

                <section className="right">
                    <div className="card">
                        <div className="buy-wrap">
                            <h2>Sell your Giftcards for Cash Instantly</h2>
                            <p>MaximusHub is simply the best app to sell gift cards at high rates. We provide you with quick trade
                                confirmations and payouts. </p>
                            <div className="flex items-center gap-1 border border-white h-[5.125rem] rounded-[3.125rem] pl-9 pr-[1.25rem] w-[19.5rem]">
                                <span className="whitespace-nowrap">Coming soon on</span>
                                <span className="flex-grow"></span>
                                <CustomFab href="#" >
                                    <CustomAdbIcon fontSize='large' />
                                </CustomFab>
                                <CustomFab href="#" >
                                    <CustomAppleIcon fontSize='large' />
                                </CustomFab>
                            </div>
                        </div>
                        <div className="buy-phone">
                            <span className="span1"><span className="span2">
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27468%27%20height=%27947%27/%3e" />
                            </span>
                                <img alt="" srcSet="_next/phone2-1.png 1x?url=%2Fwebp%2Fphone2.webp&amp;w=640&amp;q=75 1x, _next/phone2.png 2xe?url=%2Fwebp%2Fphone2.webp&amp;w=1080&amp;q=75 2x" src="_next/phone2.png?url=%2Fwebp%2Fphone2.webp&amp;w=1080&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span>
                        </div>
                    </div>
                    <div className="card mt-12">
                        <div className="buy-wrap">
                            <h2>Get access to Virtual Dollar Cards</h2>
                            <p>Your MaximusHub account gives you a virtual account and debit card to carry out external transactions
                                seamlessly </p>
                            <div
                                className="flex items-center gap-1 border border-white h-[5.125rem] rounded-[3.125rem] pl-9 pr-[1.25rem] w-[19.5rem]">
                                <span className="whitespace-nowrap">Coming soon on</span>
                                <span className="flex-grow"></span>
                                <CustomFab href="#" >
                                    <CustomAdbIcon fontSize='large' />
                                </CustomFab>
                                <CustomFab href="#" >
                                    <CustomAppleIcon fontSize='large' />
                                </CustomFab>
                            </div>
                        </div>
                        <div className="buy-phone">
                            <span className="span1">
                                <span className="span2">
                                    <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27743%27%20height=%271288%27/%3e" />
                                </span>
                                <img alt="" srcSet="_next/visa-phone-1.png 1x?url=%2Fwebp%2Fvisa-phone.webp&amp;w=750&amp;q=75 1x, _next/visa-phone.png 2xe?url=%2Fwebp%2Fvisa-phone.webp&amp;w=1920&amp;q=75 2x" src="_next/visa-phone.png?url=%2Fwebp%2Fvisa-phone.webp&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                            </span>
                        </div>
                    </div>
                    <div className="block lg:hidden ">
                        <span className="span1">
                            <span className="span2">
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27911%27%20height=%27983%27/%3e" />
                            </span>
                            <img alt="" srcSet="_next/bill-phone-1.png 1x?url=%2Fwebp%2Fbill-phone.webp&amp;w=1080&amp;q=75 1x, _next/bill-phone.png 2xe?url=%2Fwebp%2Fbill-phone.webp&amp;w=1920&amp;q=75 2x" src="_next/bill-phone.png?url=%2Fwebp%2Fbill-phone.webp&amp;w=1920&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                        </span>
                    </div>
                </section>
            </section>

            <section className="why" id="whyRidima" ref={scrollToRef}>
                <h1>Why MaximusHub?</h1>
                <p>Here’s why people choose MaximusHub over other apps.</p>
                <div className="features">
                    <div className="order-2 lg:order-1">
                        <div className="feature">
                            <h3>Easy to setup</h3>
                            <h6>Download our app, create an account and start trading immediately, that’s it.</h6>
                        </div>
                        <div className="feature">
                            <h3>Safe &amp; Secure</h3>
                            <h6>MaximusHub is backed by the highest level of internet security.</h6>
                        </div>
                        <div className="feature">
                            <h3>High Rates</h3>
                            <h6>We offer market-leading rates and facilitate instant payments all day, everyday.</h6>
                        </div>
                    </div>
                    <div className=" px-[3.9rem] lg:px-0 w-full order-1 lg:order-2 mb-[3.3rem] lg:mb-0">
                        <span className="span1">
                            <span className="span2">
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27436%27%20height=%27850%27/%3e" />
                            </span>
                            <img alt="" srcSet="/img/why.png 1x?url=%2Fwebp%2Fwhy.webp&amp;w=640&amp;q=75 1x, /img/why.png 2xe?url=%2Fwebp%2Fwhy.webp&amp;w=1080&amp;q=75 2x" src="/img/why.png?url=%2Fwebp%2Fwhy.webp&amp;w=1080&amp;q=75" decoding="async" data-nimg="intrinsic" className="img2" />
                        </span>
                    </div>
                    <div className="order-3">
                        <div className="feature">
                            <h3>Fast Transactions</h3>
                            <h6>We make sure to provide quick trade confirmations and instant payments.</h6>
                        </div>
                        <div className="feature">
                            <h3>Customer Support</h3>
                            <h6>There’s always someone ready to attend to you and make you smile.</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="download-section">
                <h1>Coming soon on</h1>
                <div className="flex gap-4 items-center mt-8 app-logos justify-center">
                    <a target="" href="#">
                        <span className="span1">
                            <span className="span2" >
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27196%27%20height=%2786%27/%3e" />
                            </span>
                            <img className="img2" alt="" srcSet="vectors/d-android.svg 1x, vectors/d-android.svg 2x" src="vectors/d-android.svg" decoding="async" data-nimg="intrinsic" />
                        </span>
                    </a>
                    <a target="" href="#" >
                        <span className="span1">
                            <span className="span2">
                                <img className="img1" alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27196%27%20height=%2786%27/%3e" />
                            </span>
                            <img className="img2" alt="" srcSet="vectors/d-ios.svg 1x, vectors/d-ios.svg 2x" src="vectors/d-ios.svg" decoding="async" data-nimg="intrinsic" />
                        </span>
                    </a>
                </div>
            </section>
            <Footer scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />
        </div >
    )
}

export default Home;