import Footer from '../footer';

const Rates = ({ scrollToRef, handleScrollToRef }) => {

    return (
        <main>
            <section class="Rates">
                <h1 class="text-5xl md:text-[6rem] font-bold text-deepPurple text-center"> Gift Card Rate Calculator</h1>
                <p class="subtitle">Our gift card rate calculator helps you easily find the best deals on gift cards. Get cool
                    returns and save time with this handy tool.</p>
            </section>
            <div class="Rates__details">
                <div class="minimize"><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div>
                <div class="header">
                    <h3>Know the current value of your Gift Card</h3>
                    <div class="button"><button class="false">Sell Rate</button><button class="active">Buy Rate</button></div>
                </div>
                <div class="content">
                    <div class="content__left"><label for="country">
                        <h4>Country</h4>
                        <select name="country" id="country">
                            <option hidden="">Select Country</option>
                            <option value="NG">Nigeria</option>
                            <option value="US">United States</option>
                            <option value="AU">Australia</option>
                            <option value="BE">Belgium</option>
                            <option value="BR">Brazil</option>
                            <option value="CA">Canada</option>
                            <option value="CN">China</option>
                            <option value="CY">Cyprus</option>
                            <option value="EG">Egypt</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GR">Greece</option>
                            <option value="HK">Hong Kong</option>
                            <option value="IN">India</option>
                            <option value="IE">Ireland</option>
                            <option value="IT">Italy</option>
                            <option value="KE">Kenya</option>
                            <option value="LB">Lebanon</option>
                            <option value="MX">Mexico</option>
                            <option value="NL">Netherlands</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="QA">Qatar</option>
                            <option value="RU">Russia</option>
                            <option value="RW">Rwanda</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="SG">Singapore</option>
                            <option value="ZA">South Africa</option>
                            <option value="ES">Spain</option>
                            <option value="TH">Thailand</option>
                            <option value="TR">Turkey</option>
                            <option value="UG">Uganda</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                        </select>
                    </label><label for="giftCardCategory">
                            <h4>Gift Card Category</h4><select name="giftCardCategory" id="giftCardCategory">
                                <option hidden="">Select Gift Card Catogory</option>
                            </select>
                        </label><label for="amount">
                            <h4>Select Amount</h4><select name="amount" id="amount">
                                <option hidden="">Select Amount</option>
                            </select>
                        </label></div>
                    <div class="content__right">
                        <div class="top">
                            <p>How much you would get</p>
                            <h1>₦<span>0</span></h1>
                            <p>Current Rate</p>
                            <h1><span>0</span></h1>
                        </div>
                        <div class="bottom">
                            <h5>Coming soon on.</h5>
                            <div class="logos"><a target="_blank" href="https://play.google.com/store/apps/details?id=com.app.ridima">
                                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2797.32%27%20height=%2744.17%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} />
                                    </span>
                                    <img alt="" srcset="/vectors/w-android.svg 1x, /vectors/w-android.svg 2x"
                                        src="/vectors/w-android.svg" decoding="async" data-nimg="intrinsic"
                                        style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                </span>
                            </a>
                                <a target="_blank" href="https://apps.apple.com/us/app/ridima-sell-gift-cards/id6444587833">
                                    <span
                                        style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                                        <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2797.32%27%20height=%2744.17%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} />
                                        </span>
                                        <img alt="" srcset="/vectors/w-ios.svg 1x, /vectors/w-ios.svg 2x" src="/vectors/w-ios.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />
        </main>
    )
}

export default Rates;