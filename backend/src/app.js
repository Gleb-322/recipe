const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./db/mongoose')
const signInRoute = require('./routers/signIn')
const signUpRoute = require('./routers/singUp')
const app = express()
const port = process.env.PORT || 1000

//MAIN APP
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(signInRoute)
app.use(signUpRoute)
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
  });
app.use(cors({
	origin: 'http://localhost:3001'
  }))
app.listen(port, () => {
	console.log(`server is up on port ${port}`)
})