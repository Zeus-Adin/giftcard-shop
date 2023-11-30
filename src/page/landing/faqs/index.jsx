import Footer from '../footer';

const Faqs = ({ scrollToRef, handleScrollToRef }) => {

    return (
        <main>

            <div class="content faq-cover" style={{ transform: 'translate(0px, 0px)', opacity: '1' }}>
                <section class="Faq">
                    <h1 class="text-5xl md:text-[6rem] font-bold text-deepPurple text-center"> Frequently Asked Questions</h1>
                    <p class="subtitle">Have questions? We’re here to help. </p>
                    <form action="">
                        <div class="w-full flex items-center bg-[#f6f6f6] px-[1.5625rem] py-[1.625rem] rounded-[3.125rem]">
                            <img src="/vectors/search-icon.svg" alt="" />
                            <input type="text" class="flex-grow outline-none bg-[#f6f6f6] px-[1.5625rem]" placeholder="Search" />
                        </div>
                    </form>
                    <div class="QnA">
                        <div class="single-QnA">
                            <div class=" flex items-center">
                                <h1 class="flex-grow">Why is my BVN needed ?</h1>
                                <img src="/vectors/add-circle.svg" alt="" class="cursor-pointer" />
                            </div>
                            <p class="hide">This is completely optional but to activate your virtual account you need to go through
                                the BVN verification process. You can still trade on the platform without your BVN</p>
                        </div>
                        <div class="single-QnA">
                            <div class=" flex items-center">
                                <h1 class="flex-grow">Can I withdraw to other bank accounts?</h1>
                                <img src="/vectors/add-circle.svg" alt="" class="cursor-pointer" />
                            </div>
                            <p class="hide">Yes you can, by linking your bank accounts to your ridima account you can withdraw
                                straight from your wallet</p>
                        </div>
                        <div class="single-QnA">
                            <div class=" flex items-center">
                                <h1 class="flex-grow">How to get a reversal for bill payment?</h1>
                                <img src="/vectors/add-circle.svg" alt="" class="cursor-pointer" />
                            </div>
                            <p class="hide">If you paid a bill using the platform and it’s still not reflecting you can file a
                                complaint with customer support for them to follow up with your transaction</p>
                        </div>
                        <div class="single-QnA">
                            <div class=" flex items-center">
                                <h1 class="flex-grow">How do I fund my wallet?</h1>
                                <img src="/vectors/add-circle.svg" alt="" class="cursor-pointer" />
                            </div>
                            <p class="hide">Funding your wallet is quite easy, Select the amount, use your virtual account details
                                then pay.</p>
                        </div>
                        <div class="single-QnA">
                            <div class=" flex items-center">
                                <h1 class="flex-grow">Is MaximusHub safe to use?</h1>
                                <img src="/vectors/add-circle.svg" alt="" class="cursor-pointer" />
                            </div>
                            <p class="hide">Absolutely! We ensure that the gift cards and funds are well protected. Every user can
                                secure their wallet with a 4 digit PIN.</p>
                        </div>
                        <div class="single-QnA">
                            <div class=" flex items-center">
                                <h1 class="flex-grow">How can I contact you?</h1>
                                <img src="/vectors/add-circle.svg" alt="" class="cursor-pointer" />
                            </div>
                            <p class="hide">
                                <p>You can always reach out to us <a href="mailto:Help@myridima.com" class="text-blue-600" target="_blank" rel="noreferrer">Help@myridima.com</a></p>
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div class="other-questions">
                <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', position: 'relative', maxWidth: '100%' }}>
                    <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px', maxWidth: '100%' }}>
                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27213%27%20height=%27100%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: '0px', margin: '0px', padding: '0px' }} />
                    </span>
                    <img alt="" srcset="/vectors/people.svg 1x, /vectors/people.svg 2x" src="/vectors/people.svg" decoding="async" data-nimg="intrinsic" style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                </span>
                <h2>Still have questions?</h2>
                <p>Can’t find the answer you’re looking for? Please have a chat with our freindly team</p>
            </div>

            <Footer scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />
        </main>
    )
}

export default Faqs;