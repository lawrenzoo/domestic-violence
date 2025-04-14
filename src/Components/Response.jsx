const Response = () =>{
    return(
        <>
        <div className="response-container">
            <div className="response-content">
                <h1>Want to Report a case or Need a Quick Response?</h1>
                <p>You can contact us through a variety of channels, including our social media platforms. if you would rather speak with us directly, you call us directly now.</p>
                <div className="response-btns">
                    <button className="case">Report a case</button>
                    <button className="call-us" >Call us now
                        
                        <img src="../public/assets/call-purple.svg" alt="icon" /></button>
                </div>
            </div>
            <div className="response-image">
                <img src="../public/assets/response-image.png" alt="response" />
            </div>
        </div>
        </>
    )
}

export default Response