import React  from "react";
function magaziheader() {
    return (
    <header>
        <div className="Title">
            <figure>
                <img className="icon" aria-label="xbox icon" src={require('./pictures/logo.jpg')}/>
            </figure>
            <h1 className="xbox" tabindex="1"> XBOX</h1>
        </div>
        <h2 className="message" tabindex="2">NOT A OFFICIAL MAGAZINE</h2>
    </header>
    ) ;
  

}
export default magaziheader ; 