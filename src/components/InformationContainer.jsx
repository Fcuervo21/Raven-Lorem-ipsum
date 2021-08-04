import React from "react";

function InformationContainer() {
	return (
		<div className="information-container">
            <div className="info-box">
                <h2 className="h2-title">Hi! This is one of my first projects with React</h2>
                <p className="information-paragraph">
                    In the header there is a button with a direct link to my
                    portfolio where you can find this project and my other projects.
                    <br/>
                    If value selected is equal to 0, api will return the default parameters.
                </p>
                <h3 className="h3-api-link"><a href="https://hipsum.co/">I used HIPSTER IPSUM API for this project</a></h3>
            </div>
			
		</div>
	);
}
export default InformationContainer;