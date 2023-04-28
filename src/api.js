export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '05498bc285msh0d0dcc1063625d7p16b713jsn1983fb4c603a',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};



try {
	const response = await fetch(url, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}