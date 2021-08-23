import React from 'react';

function KanyeDaily(kanyeQuote) {
	const quote = kanyeQuote.kanyeQuote.data.quote;
	console.log(kanyeQuote);
	return (
		<div>
			<h3>Kanye Of The Day</h3>
			<div className='quote'>{`${quote}`}</div>
		</div>
	);
}
export default KanyeDaily;
