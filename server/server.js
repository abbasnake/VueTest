const express          = require('express')           // using express framework                   
// const path             = require('path')              // path module                            
const bodyParser       = require('body-parser')       // for json parsing                
const expressSanitizer = require('express-sanitizer') // defense against injections
const cors             = require('cors')



// require('./oldData.js') // inserting data to mLab

const port = process.env.PORT || 8081 // set port
const app  = express();               // initialize express app

app.use(bodyParser.urlencoded({extended: true})) // setting body-parser
app.use(bodyParser.json())                       // setting body-parser
app.use(expressSanitizer())                      // for avoiding injections, this has to be after body-parser
app.use(cors())
// app.use(express.static('../client/public'))      // setting static file directory

// app.set('views', path.join(__dirname, './views')) // views
// app.set('view engine', 'ejs')                     // view engine

app.use(require("./controllers/api")); // all requests go here

app.listen(port, () => console.log(`todo app listening on port ${port}`)) // listening