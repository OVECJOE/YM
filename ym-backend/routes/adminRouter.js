const express = require('express')

const { getAccessToken, getGithubUser } = require('../utils/adminUtils')
const Admin = require('../models/adminModel');

// Create a router instance
const router = express.Router()

// GitHub OAuth Info
const CLIENT_ID = process.env.CLIENT_ID

// authenticate user via github
router.get('/login/github', (req, res) => {
  const REDIRECT_URL = 'http://localhost:9000/api/admin/login/github/callback'

  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}
  &redirect_uri=${REDIRECT_URL}`

  res.redirect(url)
})

// Exchange temporary code with access token; get github user info and create
// admin (if admin does not exist)
router.get('/login/github/callback', async (req, res) => {
  const { code } = req.query;
  const token = await getAccessToken(code);
  const githubData = await getGithubUser(token);

  if (githubData.id === 63981225) {

    try {
      const adminExists = await Admin.exists({ username: githubData.login });

      if (!adminExists) {
        const admin = await Admin.create({
          username: githubData.login,
          bio: githubData.bio,
          email: githubData.email,
        });

        // If admin creation is successful, send admin obj to client
        if (admin) {
          console.log(`Admin has been created; id: ${admin.id}`)
          return res.send(admin)
        }

        // send error message back to client
        console.log('Error: Could not create admin')
        return res.status(500).send({
          message: 'Server Error: Could not register admin.'
        })
      }

      // If admin already exists, redirect back to admin route
      req.session.adminId = adminExists._id
      res.redirect('/api/admin');
    } catch (err) {
      res.status(404).send({ message: err.message })
    }

  } else {
    console.log('Error: Bad GitHub Credentials or something went wrong')
    res.send({
      error: 'An Error Occurred; Could not get User Github Data!'
    })
  }
})

router.get('/', async (req, res) => {
  const { adminId } = req.session;

  if (adminId) {
    try {
      const admin = await Admin.findById(adminId);

      if (admin) {
        res.send(admin)
      } else {
        res.status(403).send({
          message: 'Cannot get admin details'
        })
      }
    } catch (err) {
      res.status(404).send({ message: err.message })
    }
  } else {
    res.redirect('/api/admin/login/github')
  }
})

module.exports = router