import React, { useState } from "react";
import ParagraphSection from "./ParagraphSection";
import swal from "sweetalert";

function DisplayLorem(props) {
	const [paragraphValue, setParagraphValue] = useState(0);
	const [sentencesValue, setSentencesValue] = useState(0);
	const [dataContent, setDataContent] = useState();
	const [isExpanded, setExpanded] = useState(false);

	function expand() {
		//Show paragraph area after fetching the api
		setExpanded(true);
	}

	function showAlarm(){
		//Show alarm
		swal("Really?", "Invalid selected values, try again", "warning");
		setExpanded(false);
	}

	function getLoremParagraph(event) {
		event.preventDefault();
		//Handle errors
		if(paragraphValue >= 10 || paragraphValue < 0 || sentencesValue > 100 || sentencesValue < 0) {
			return showAlarm();
		}

		//Fetch API and set content in DataContent hook
		let paragraphAmount = parseInt(paragraphValue);
		let sentencesAmount = parseInt(sentencesValue);
		const paragraphValueToString = paragraphAmount.toString();
		const sentencesValueToString = sentencesAmount.toString();

		//Fetch api
		if (props.data === "paragraph") {
			fetch(
				"https://hipsum.co/api/?type=hipster-centric&paras=" +
					paragraphValueToString
			)
				.then((res) => res.json())
				.then((data) => {
					setDataContent(data);
				});
		} else if (props.data === "sentence") {
			fetch(
				"https://hipsum.co/api/?type=hipster-centric&sentences=" +
					sentencesValueToString
			)
				.then((res) => res.json())
				.then((data) => {
					setDataContent(data);
				});
		}
	}

	function showParagraphForm() {
		//Set visibility of paragraph form
		return (
			<div>
				<label className="form-label">PARAGRAPHS:</label>
				<input
					type="number"
					name="amount"
					value={paragraphValue}
					onChange={(event) => setParagraphValue(event.target.value)}
				/>
			</div>
		);
	}

	function showSentenceForm() {
		//Set visibility of sentence form
		return (
			<div>
				<label className="form-label">SENTENCES:</label>
				<input
					type="number"
					name="amount"
					value={sentencesValue}
					onChange={(event) => setSentencesValue(event.target.value)}
				/>
			</div>
		);
	}

	return (
		<div>
			<form className="lorem-form" onSubmit={getLoremParagraph}>
				{props.visibility === true && props.data === "paragraph"
					? showParagraphForm()
					: null}
				{props.visibility === true && props.data === "sentence"
					? showSentenceForm()
					: null}
				<button className="btn btn-primary" onClick={expand}>
					GENERATE
				</button>
			</form>
			{isExpanded && <ParagraphSection data={dataContent} />}
		</div>
	);
}
export default DisplayLorem;
