let apiUrl
const expressPort = 5000
const apiUrls = {
  development: `http://localhost:${expressPort}/api`,
  production: `https://dry-basin-76111.herokuapp.com/api`,
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
