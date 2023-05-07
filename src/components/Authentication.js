


const CLIENT_ID = "ea6feeca6dad465d804fc1403386d145";
const REDIRECT_URI = "https://spotify-react-cs.netlify.app/#";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token"

export const loginurl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

