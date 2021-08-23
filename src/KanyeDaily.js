import React from 'react';

function KanyeDaily(props) {
	const quote = props.kanyeQuote;

	return (
		<div>
			<h3>Kanye Of The Day</h3>
			<div className='quote'>{quote && `${quote}`}</div>
		</div>
	);
}
export default KanyeDaily;
