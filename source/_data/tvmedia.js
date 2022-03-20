const Fetch = require( '@11ty/eleventy-fetch' );

require( 'dotenv' ).config();

module.exports = async function() {
  // Generic U.S. Eastern time zone lineup.
  const lineup = '36617';

  // API key.
  const api_key = process.env.API_KEY;

  // URL for the API call.
  const url = `http://api.tvmedia.ca/tv/v4/lineups/${ lineup }/listings?api_key=${ api_key }`;

  try {
    let json = await Fetch( url, {
      duration: '1d',
      type: 'json'
    });

    return json;
  } catch( error ) {
    console.log( error );
    return [];
  }
};
