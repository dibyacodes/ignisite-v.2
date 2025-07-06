import Button from "../components/Button"
import Cards from "../components/Cards"
// import Pop from "../components/Pop"

function Home() {
    
    return (
        <>
            <div className="bg-black to-40% h-full py-10">

                {/* hero section */}
                <section className="flex pt-30 md:pt-[5%] justify-center">
                    <div className="flex flex-col gap-5 md:gap-5 px-4 md:px-0 md:w-[90%] text-center justify-center items-center">

                        {/* <span className=" capitalize font-inter bg-gray-300/50 w-fit px-4 py-2 rounded-full font-medium text-gray-200 text-sm">website & softwares</span> */}
                        <h1 className="font-inter capitalize text-4xl md:text-6xl font-semibold text-gray-200 md:max-w-[20ch]">
                            designed for business, built for you</h1>

                        <p className="hidden md:flex md:text-xl font-inter text-gray-300 font-medium md:w-[70ch] leading-tight">
                            Discover industry standard website & software development services customize for your business that converts viewers to customers.
                        </p>

                        <div className="flex gap-3 flex-row md:flex-row justify-center items-center">
                            <Button to="/appointment/1" customs="px-3 py-1 bg-white text-gray-900" buttonText="Get custom site" />
                            <Button to="/appointment/0" customs="underline" buttonText="book a call" />
                        </div>

                    </div>
                </section>


                {/* services section with cards - horizontal scrolling for mobile devices and optional horizontal scroll for desktops */}
                <section className=" py-20">
                    <div className="px-4 lg:ml-[10%]">
                        <h1 className="md:text-3xl font-inter md:font-medium md:max-w-[30ch] capitalize text-2xl font-semibold text-gray-300 md:text-gray-200">
                            {/* building unapologetically modern websites & software */}
                            Discover our latest services. Review our recently added web solutions
                        </h1>
                    </div>

                    {/* horizontal scrolling cards */}
                    <div className="flex flex-row overflow-y-hidden gap-5 overflow-x-scroll hide-scrollbar py-5 px-4 lg:pl-[10%]">

                        <Cards cardButtonText="send request" cardImage="/custom_website.svg" cardTag="branding + web design" cardDesc="Your website is your brand's digital home. Discover uniquely modern websites custom-made for your business" cardTitle="Custom Built websites" />

                        <Cards cardButtonText="send request" cardImage="/redesign.svg" cardTag="Web Design + Figma" cardDesc="We refine software functions to increase efficiency and align your systems for flawless operation." cardTitle="website redesign & maintenance" />

                        <Cards cardButtonText="send request" cardImage="/automation.svg" cardTag="Programming + AI" cardDesc="Integrated AI to automate mundane tasks & connecting your systems for reliable, seamless operations" cardTitle="Custom Softwares & Automations" />

                        <Cards cardButtonText="send request" cardImage="/seo.svg" cardTag="SEO + Branding" cardDesc="Place your business in the top of the internet for your target audience. Being in sight is being in mind." cardTitle="SEO Optimization Services" />

                    </div>
                </section>


                <section className=" py-20">
                    <div className="px-4 lg:ml-[10%]">
                        <h1 className="md:text-3xl font-inter md:font-medium capitalize md:max-w-[50ch] text-2xl font-semibold text-gray-300 md:text-gray-200">
                            {/* building unapologetically modern websites & software */}
                            Delivering value first is our first priority.
                        </h1>
                    </div>

                    {/* horizontal scrolling cards */}
                    <div className="flex flex-row overflow-y-hidden gap-5 overflow-x-scroll hide-scrollbar py-5 px-4 lg:pl-[10%] snap-x md:snap-none snap-mandatory">

                        <Cards cardImage="/owner-fill.svg" cardDesc="We design admin pages tailored to your workflow, giving you control and clarity with a user-friendly experience." cardTitle="personalized admin pages" />

                        <Cards cardImage="/custom-size.svg" cardDesc="We craft distinctive brand identities that help your business stand out and connect with your audience." cardTitle="Custom Branding for your business" />

                        <Cards cardImage="/device-fill.svg" cardDesc="We build seamless, mobile-friendly designs that look and work perfectly on any device." cardTitle="responsive web & software designs" />

                        <Cards cardImage="/sparkling-fill.svg" cardDesc="We create visually striking, interactive designs that captivate users and elevate your brand's digital presence." cardTitle="dynamic & aestheic designs" />

                        <Cards cardImage="/shield-fill.svg" cardDesc="We employ advanced encryption protocols and secure connections to maintain the highest level of protection for your business." cardTitle="top-notch security & connections" />

                    </div>
                </section>

                <section className=" py-20">
                    <div className="px-4 lg:ml-[10%]">
                        <h1 className="md:text-3xl font-inter md:font-medium capitalize md:max-w-[50ch] text-2xl font-semibold text-gray-300 md:text-gray-200">
                            {/* building unapologetically modern websites & software */}
                            the <b>IgniSite Advantage</b>. <br /> your trusted ally in web-development
                        </h1>
                    </div>

                    {/* horizontal scrolling cards */}
                    <div className="flex flex-row overflow-y-hidden gap-5 overflow-x-scroll hide-scrollbar py-5 px-4 lg:pl-[10%] snap-x md:snap-none snap-mandatory">

                        <Cards cardIcon="/bank-card-fill.svg" customTitleStyle="text-blue-500" cardTitle="choice based subscriptions. choose your own benefits" />
                        <Cards cardIcon="/lock-password-fill.svg" customTitleStyle="text-green-500" cardTitle="monthly security checks & upgrades to keep your business safe." />
                        <Cards cardIcon="/terminal-box-fill.svg" customTitleStyle="text-gray-300" cardTitle="Implementing latest tech stacks to ensure fast & reliable websites." />
                        <Cards cardIcon="/globe-fill.svg" customTitleStyle="text-blue-500" cardTitle="SEO optimized content to help you land in your clients search history." />

                    </div>
                </section>
            </div>


            <section className="bg-black ">
                <div className="px-4 lg:ml-[10%]">
                    <h1 className="text-white font-inter text-3xl md:text-5xl md:max-w-[50%] font-semibold">
                        Get yourself a custom made website in just 5 steps.
                    </h1>
                </div>
                <div className="flex flex-row overflow-y-hidden gap-5 overflow-x-scroll hide-scrollbar py-5 px-4 lg:pl-[10%] snap-x md:snap-none snap-mandatory">

                    <Cards cardButtonText="send request" cardTag="step 1" cardImage="/send-request.svg" cardTitle="send a request for web or software development." cardDesc="Click the button above to send a request now." />
                    <Cards cardTag="step 2" cardImage="/email-notification.svg" cardTitle="Receive an e-mail confirming your order." cardDesc="You should receive an email or a whatsapp message within 24 hours of the making a service request." />
                    <Cards cardTag="step 3" cardImage="/conference.svg" cardTitle="Schedule a call & get a pricing of your choice" cardDesc="A custom website, comes with a custom price. We focus on providing quality products than cheap products." />
                    <Cards cardTag="step 4" cardImage="/wait.svg" cardDesc="Wait for the time period of maximum 4 days. Need it sooner? We can discuss that over a call." cardTitle="Wait for the allocated time period." />
                    <Cards cardTag="step 5" cardImage="/done.svg" cardDesc="Wait for the time period of maximum 4 days. Need it sooner? We can discuss that over a call." cardTitle="Receive your website & take your business online" />

                </div>
            </section>


            <section className="px-3 bg-black py-20 flex flex-col">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-blue-400 font-semibold font-inter capitalize text-xl">
                        all your queries answered
                    </p>
                    <h1 className="md:text-5xl text-white font-inter font-semibold capitalize md:max-w-[50%] text-center">
                        Ready to achieve your financial goals with your business?
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center bg-radial-[at_50%_50%] from-blue-500 to-black to-90% pt-15 gap-5">
                    <Cards cardImage="/consultation.svg" cardTag="free 30 min consultation" cardButtonText="book a call" cardTitle="Book a consultation to know what's best for you." />
                    <Cards cardImage="/conference.svg" cardTag="reach us out instantly" cardButtonText="book a call" cardTitle="whatsapp numbers or phone call numbers to be added" />
                </div>
            </section>

        </>
    )
}

export default Home