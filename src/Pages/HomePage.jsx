import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Response from "../Components/Response"
import SectionOne from "../Components/SectionOne"
import SectionTwo from "../Components/sectionTwo"

const HomePage = () => {
  return (
   <>
   <Header>
    <>
    <div className="background-violence">
      <div className="violence-text">
        <h1>Are You Facing Any Kind of Domestic Violence?</h1>
        <p>Are you facing any kind of domestic violence? You don’t have to go throught it alone. Our dedicated team is available  24/7 to provide you with the support, resources and guidance you need  stay safe. </p>
        <div className="violence-call">
          <button className="call-us">Call us Now <img src="/domestic-violence/assets/majesticons_phone-line.svg" alt="call" /></button>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
    </>
   </Header>
   <SectionOne/>
   <SectionTwo/>
   <Response/>
   <Footer/>
   </>
  )
}

export default HomePage