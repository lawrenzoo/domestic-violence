import '../App.css';

const SectionOne = () => {
  return (
    <>
    <section className='platform-container'>
        <div className="platform">
            <div className="platform-image">
                <img src="assets/Image-platform.png" alt="platform-image" />
            </div>
            <div className="platform-content">
                <div className="platform-topic">
                    <h5>Our Services</h5>
                    <h2>Let’s See Why You Must Use Our 911 Domestic Violence Platform</h2>
                    <div className="platform-text">
                        <div className="logo-topic">
                            <img src="assets/get-help.svg" alt="" />
                            <h5>Get Help</h5>
                        </div>
                        <p>Our team is here to provide you with counseling, and the resources needed overcome this challenging time.</p>
                    </div>

                    <div className="platform-text">
                        <div className="logo-topic">
                            <img src="assets/hugeicons_energy.svg" alt="" />
                            <h5>Identify Abuse</h5>
                        </div>
                        <p>Learn about the various forms of domestic violence, abuse, to better understand your situation</p>
                    </div>

                    <div className="platform-text">
                        <div className="logo-topic">
                            <img src="assets/fluent_person-support-28-regular.svg" alt="" />
                            <h5>Support Others</h5>
                        </div>
                        <p>Discover ways to help, from offering a listening ear to volunteering advocating for change and safety in your community.</p>
                    </div>

                    <div className="platform-text">
                        <div className="logo-topic">
                            <img src="assets/hugeicons_security-wifi.svg" alt="" />
                            <h5>Create a Safety Plan</h5>
                        </div>
                        <p>Developing a personalized safety plan is crucial for protecting yourself in an abusive situation.</p>
                    </div>
                    <button className="call-us">Call us Now <img src="assets/majesticons_phone-line.svg" alt="call" /></button>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default SectionOne