import React, { useRef, useState } from "react";

function ParagraphSections(props) {
	const element = props.data;

	return (
		<div className="lorem-container">
			<p className="lorem-paragraph">{element}</p>
		</div>
	);
}

export default ParagraphSections;
