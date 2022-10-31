const nodeFetch = require('node-fetch')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

exports.getAccessToken = async (code) => {
  const res = await nodeFetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code
    })
  })

  const data = await res.text()
  const params = new URLSearchParams(data)

  return params.get('access_token')
}

exports.getGithubUser = async (access_token) => {
  const res = await nodeFetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${access_token}`
    }
  })

  const data = await res.json()
  return data
}