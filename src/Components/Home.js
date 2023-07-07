import List from "../Subcomponents/Card1";
import List2 from "../Subcomponents/Card2";
import BasicExample from "../Subcomponents/Accodin";
import Carousel from "../Subcomponents/Carousel";
import Carousel2 from "../Subcomponents/Carousel2";
import Carousel3 from "../Subcomponents/Carousel3";

const Home = () => {

    return(
        <>
          
            <div className="hero">

                <h1>Buy and sell domains with no capital!</h1>
                <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
                <div className="buttons">
                    <button className="btn1">SIGN UP FOR FREE</button>
                    <button className="btn2">READ ABOUT US</button>
                </div>
                <img className="laptop" src= 'images/Group 79.png' alt=""/>
            </div>

            <div className="about">

                <div className="about-img">
                      <img src= 'images/Rectangle 5.png' alt=""/>
                </div>
              
                    <div className="about-content">
                <h1>Wait, What?</h1>
                <p>Resellme allows for you to purchase domains through our platform without paying money upfront. 
                   All you need to do is have a client who will pay for the domain and you get to keep the profit
                   deducted from the domain purchase price!</p>
                <p>Buying domains through the platforms is <span >SUPER CHEAP</span> </p>
                <button className="btn3" href="">READ MORE</button>
                </div>
            </div>

            <div className="card_content1">
                <h1>How To Get Started</h1>
         
               <List 
                    icon='images/one.png'
                    images='images/icon1.png'
                    header='Register'
                    title='To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method. '
               />

                <List 
                    icon='images/second.png'
                    images='images/icon2.png'
                    header='Find Clients'
                    title='Find a client who can be a business owner or a freelancer who wants a website but does not have a domain.You take lead to buy the desired domain via ReSellMe for the client upfront.'
               />

                <List 
                    icon='images/three.png'
                    images='images/icon3.png'
                    header='Get Paid'
                    title='You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit.   Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru'

               />
        
            </div>

            <div className="features">
                <div className="features-content1">
                    <h1>Resellme’s Features</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

                   <div className="features-content2">

                   <List2
                    images='images/icon4.png'
                    header='Best Purchase Rates'
                    title='You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors'
               />

                    <List2
                    images='images/icon4.png'
                    header='Instant Payouts'
                    title='USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right? '
               />

                    <List2 
                    images='images/icon4.png'
                    header='NoMonthlyCommitments'
                    title='As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit.'
               />

                    <List2
                    images='images/icon4.png'
                    header='Business Automation'
                    title='Place your business on autopilot by making use of our plugins. Head over to our plugins & intergrations panel to get started'
               />

               </div>

            </div>

            <div className="freelancer-section">
               <h1>Resellme’s Use Cases</h1>
               
               <Carousel />
           </div>  

             <div className="testimonials-section">
                <div className="content">
                    <h1>Client Testimonials</h1>
                    <p className="testimonialstxt">We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.</p>
                </div>
                <Carousel2 />
           </div>    

            <div className="accordion-main">
                <div className="accordion-content1">
                   <h1>Frequently Asked Questions</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
               </div>
                <div className="accordion-content2">
                    <BasicExample/> 
                </div>
            </div>

               <div className="partners-section">
               <h1>We’ve Been Featured In</h1>
               
               <Carousel3 />
           </div>  
            
            <div className="creditsection">
                <h1>You Don’t Need Any Credit To Get Started</h1>
                <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
                    <div className="buttons">
                        <button className="btn1" href="">SIGN UP FOR FREE</button>
                    </div>
           </div>   

             <div className="partners-section">
               <h1>Our Partners</h1>
               
               <Carousel3 />
           </div>      



           <div className="footersection">
                <div className="footerlogo">
                    <img src= 'images/resellme-logo 3.png' alt=""/>
                </div>
               

                <div className="footercontent1">
                    <h1>Libraries & Plugins</h1>
                    <span>SDKs</span>  
                    <span> WHMCS Plugin</span>
                    <span>WordPress Plugin</span>
                </div>

                <div className="footercontent2">
                    <h1>Community</h1>
                    <span> Facebook</span>  
                    <span> Developer Forums</span>
                    <span>Twitter</span>
                </div>
               
                <div className="footercontent2">
                    <h1>More</h1>
                    <span>Blog</span>  
                    <span> Docs</span>
                    <span>About Us</span>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                </div>

                <div className="footer-txt">
                    <p>Copyright © 2022 Resellme.</p>
                </div>
               

           </div>    

         
           
               

      
           
         
        </>
        
    );
}

export default Home; 