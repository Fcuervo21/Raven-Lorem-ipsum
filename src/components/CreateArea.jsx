import React, { useState } from "react";
import DisplayLorem  from "./DisplayLorem";
import InformationContainer from "./InformationContainer";

function CreateArea() {

	
	const [paragraphDisplay, setParagraphDisplay] = useState(false);
	const [sentencesDisplay, setSentencesDisplay] = useState(false);

	function paragrapghForm() {
		setParagraphDisplay(true);
		setSentencesDisplay(false);
	}
	function sentencesForm() {
		setSentencesDisplay(true);
		setParagraphDisplay(false);
	}
	

	return (
		<div className="main-container">
			<h1 className="main-title">CREATE YOUR LOREM IPSUM</h1>
			<h3>CHOOSE BETWEEN<br/>PARAGRAPH OR SENTENCES</h3>
			<div className="buttons-section">
				<button className="btn-options" onClick={paragrapghForm}>Paragraphs</button>
				<button className="btn-options" onClick={sentencesForm}>Sentences</button>
			</div>
			{paragraphDisplay ? <DisplayLorem visibility={paragraphDisplay} data='paragraph'/> : null}
			{sentencesDisplay ? <DisplayLorem visibility={sentencesDisplay} data='sentence'/> : null}
			<InformationContainer />
		</div>
	);
}

export default CreateArea;
