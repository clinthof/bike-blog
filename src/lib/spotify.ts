import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic: ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
    grant_type: 'refresh_token',
    refresh_token
    })
  });

  return response.json();
};

const PLAYLIST_ID = 'WwE8vJr2u508fVKctfLYX';
const PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`;

export const addToPlaylist = async () => {
  const { access_token } = await getAccessToken();

  return await fetch(PLAYLIST_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-type': 'application/json',
    },
    body: querystring.stringify({
      'uris': ['spotify:track:4iV5W9uYEdYUVa79Axb7Rh', 'spotify:track:1301WleyT98MSxVHPZCA6M'],
      'position': 0
    })
  });
};