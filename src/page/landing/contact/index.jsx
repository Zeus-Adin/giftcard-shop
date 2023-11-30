import Footer from '../footer';

const Contact = ({ scrollToRef, handleScrollToRef }) => {

    return (
        <main>
            <div class="content contact-cover" style={{ transform: 'translate(0px, 0px)', opacity: '1' }}>
                <section class="Contact">
                    <h1 class="text-5xl md:text-[6rem] font-bold text-deepPurple text-center">Contact Us</h1>
                    <p class="subtitle">Any questions or remarks? Just write us a message!</p>
                    <form>
                        <div class="form-group">
                            <label for="">Hi, my name is</label>
                            <input class="Input" required="" name="from_name" value="" />
                            <label for="">and my email address is</label>
                            <input class="Input" required="" type="email" name="reply_to" value="" />
                        </div>
                        <div class="form-group2 ">
                            <label for="">My message is</label>
                            <div class="flex-grow w-full">
                                <textarea id="" class="resize-none w-full h-[18rem] bg-[#F6F6F6] rounded-[3.125rem] px-10 py-6" required="" />
                                <div class="w-[13rem] mt-[1.875rem]"><button class="Button text-base text-white bg-rBlue ">Send
                                    message</button></div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <Footer scrollToRef={scrollToRef} handleScrollToRef={handleScrollToRef} />
        </main>
    )
}

export default Contact;