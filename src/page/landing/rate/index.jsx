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

            <div class="Rates__display">
                <h1>Gift Cards With High Rates</h1>
                <p>These are some of the top gift cards to sell at the highest rates in Nigeria today</p>
                <div class="content">
                    <header>
                        <h4>Gift Card Category</h4>
                        <h4>Country</h4>
                        <h4>Sub-Category</h4>
                        <h4>Naira Rate</h4>
                    </header>
                    <div class="body">
                        <div class="row">
                            <h5>Steam</h5>
                            <h5>United Kingdom (GBP)</h5>
                            <h5>(£10 - £500)</h5>
                            <h5>₦ 930</h5>
                        </div>
                        <div class="row">
                            <h5>Macy's</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $400)</h5>
                            <h5>₦ 890</h5>
                        </div>
                        <div class="row">
                            <h5>American Express</h5>
                            <h5>United States(USD)</h5>
                            <h5>($400 - $500)</h5>
                            <h5>₦ 880</h5>
                        </div>
                        <div class="row">
                            <h5>Footlocker</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $500)</h5>
                            <h5>₦ 870</h5>
                        </div>
                        <div class="row">
                            <h5>Razer Gold</h5>
                            <h5>United States(USD)</h5>
                            <h5>($10 - $500)</h5>
                            <h5>₦ 870</h5>
                        </div>
                        <div class="row">
                            <h5>Nike</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $500)</h5>
                            <h5>₦ 860</h5>
                        </div>
                        <div class="row">
                            <h5>American Express</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $299)</h5>
                            <h5>₦ 860</h5>
                        </div>
                        <div class="row">
                            <h5>Apple iTunes</h5>
                            <h5>United States(USD)</h5>
                            <h5>($250, $300, $350, $400, $450)</h5>
                            <h5>₦ 850</h5>
                        </div>
                        <div class="row">
                            <h5>Apple iTunes</h5>
                            <h5>United States(USD)</h5>
                            <h5>($50, $100, $150, $200)</h5>
                            <h5>₦ 840</h5>
                        </div>
                        <div class="row">
                            <h5>Nordstrom</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $500)</h5>
                            <h5>₦ 840</h5>
                        </div>
                        <div class="row">
                            <h5>Google Play</h5>
                            <h5>Europe (EUR)</h5>
                            <h5>(€15 - €500)</h5>
                            <h5>₦ 810</h5>
                        </div>
                        <div class="row">
                            <h5>Steam</h5>
                            <h5>Europe (EUR)</h5>
                            <h5>(€10 - €500)</h5>
                            <h5>₦ 800</h5>
                        </div>
                        <div class="row">
                            <h5>Google Play</h5>
                            <h5>United States(USD)</h5>
                            <h5>($15 - $500)</h5>
                            <h5>₦ 780</h5>
                        </div>
                        <div class="row">
                            <h5>Sephora</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $500)</h5>
                            <h5>₦ 770</h5>
                        </div>
                        <div class="row">
                            <h5>Ebay</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $500)</h5>
                            <h5>₦ 750</h5>
                        </div>
                        <div class="row">
                            <h5>Steam</h5>
                            <h5>United States(USD)</h5>
                            <h5>($10 - $500)</h5>
                            <h5>₦ 740</h5>
                        </div>
                        <div class="row">
                            <h5>Amazon</h5>
                            <h5>United States(USD)</h5>
                            <h5>($50 - $100)</h5>
                            <h5>₦ 710</h5>
                        </div>
                        <div class="row">
                            <h5>Visa</h5>
                            <h5>United States(USD)</h5>
                            <h5>($300 - $500)</h5>
                            <h5>₦ 710</h5>
                        </div>
                        <div class="row">
                            <h5>Visa</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $299)</h5>
                            <h5>₦ 620</h5>
                        </div>
                        <div class="row">
                            <h5>Walmart Visa</h5>
                            <h5>United States(USD)</h5>
                            <h5>($100 - $299)</h5>
                            <h5>₦ 500</h5>
                        </div>
                        <div class="row">
                            <h5>Roblox</h5>
                            <h5>United States(USD)</h5>
                            <h5>($25 - $100)</h5>
                            <h5>₦ 180</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Rates__section-about">
                <h1>ABOUT GIFT CARD RATES</h1>
                <p>You are probably looking for where you can sell your gift cards at the highest rates because you want to maximize profit and get the most value for your money.<br />
                    MaximusHub is know to be the best app to sell your gift cards at the highest rate instantly for Naira. We offer competitive rates and a hassle-free process for selling gift
                    cards. Additionally, MaximusHub has a reputation for being reliable and trustworthy, which ensures that customers                    can trust us to provide fair and transparent service.
                </p>
                <h1>Gift Card Rate Calculator</h1>
                <p>With the help of Ridima’s Rate Calculator, you can instantly see the price at which you can sell your gift card. You can quickly see the price you will sell your $100 Steam gift card for cash or the price you will sell your $100 or $50 Google Play gift card for cash.<br />
                    Historically, the card with the highest rates has always been Razer Gold gift cards.<br />
                    To check the best rates with our calculator, simply select the gift card brand, choose the country, select the type and the range of your card and then type the value of your gift card and the total value you’ll get will appear.
                </p>
                <h1>Other Country Cards</h1>
                <p>
                    “How much is a €100 Steam card in Naira today” or “How much is a £100 Steam card in Naira today” is a question
                    you probably asked but look no further as you can see today’s rate in the Gift Card Rate table above.
                </p>
                <h1>Is MaximusHub Legit For Selling At High Rates?</h1>
                <p>MaximusHub is completely trustworthy and reliable if you want to sell your Google Play, Steam, Amazon or Apple iTunes gift cards at high rates. We have a thousands of clients who trust us with their gift cards and money. To get started, simply download our mobile app HERE
                    <a href="#" target="_blank" rel="noopener noreferrer">&nbsp;link</a></p>
            </div>

            <Footer scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />
        </main>
    )
}

export default Rates;