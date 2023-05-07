//// Load most basic dependencies
// Create require function 
// https://nodejs.org/docs/latest-v18.x/api/module.html#modulecreaterequirefilename
import { createRequire } from 'node:module'; // These two lines allow us to use ES methods and CJS methods for loading dependencies.\
import { rps, rpsls } from "./lib/rpsls.js";
const require = createRequire(import.meta.url);

const minimist = require('minimist') // Load minimist for command line argument parsing https://www.npmjs.com/package/minimist

const args = minimist(process.argv.slice(2)) // Parse our command line arguments

if (args.debug) { // Are we debugging or testing? If so, then let's look at our command line arguments just to see what is in there
    console.info('Minimist parsed and created the following `args` object:')
    console.info(args)
}


if (args.h || args.help) { // Did we call for help? 
    console.log(`
usage: node server.js --port=5000

This package serves the static HTML, CSS, and JS files in a /public directory.
It also creates logs in a common log format (CLF) so that you can better.

  --stat,  -s    Specify the directory for static files to be served
                    Default: ./public/
  --port, -p    Specify the port for the HTTP server to listen on
                    Default: 8080
  --log,  -l    Specify the directory for the log files
                    Default: ./log/
  --help, -h    Displays this help message and exit 0 
                    (Does not work when run with nodemon)
  --debug       Echos more information to STDOUT so that you can see what is
                    stored in internal variables, etc.
    `)
    process.exit(0)
} 

import express from 'express' // Load express and other dependencies for serving HTML, CSS, and JS files

import path from 'path' // Use CJS __filename and __dirname in ES module scope https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fs = require('fs') // Load dependencies for logging
const morgan = require('morgan')

const logpath = args.log || args.l || process.env.LOGPATH || path.join(__dirname, 'log') // Create log path
if (!fs.existsSync(logpath)){ fs.mkdirSync(logpath) }
if (args.debug) {
    console.info('HTTP server is logging to this directory:')
    console.info(logpath)
}

const app = express() // Create an app server

const port = args.port || args.p || process.env.PORT || 8080 // Set a port for the server to listen on
// Load app middleware here to serve routes, accept data requests, etc.

app.use(morgan( // Create and update access log. The morgan format below is the Apache Foundation combined format but with ISO8601 dates
    ':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
    {stream: fs.createWriteStream(path.join(logpath, 'access.log')), flags: 'a' }
))

const staticpath = args.stat || args.s || process.env.STATICPATH || path.join(__dirname, 'public') // Serve static files
app.use('/', express.static(staticpath))


app.get('/app', (req, res) => { // App get requests
    res.status(200).send('200 OK');
})

app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
})

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(rpsls());
})

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})

app.get('/app/rps/play/:arg', (req, res) => {
    res.status(200).send(rps(req.params.arg));
})

app.get('/app/rpsls/play/:arg', (req, res) => {
    res.status(200).send(rpsls(req.params.arg));
})

app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
})

app.get('*', function(req, res){
    res.status(404).send('404 NOT FOUND');
  });

const server = app.listen(port) // Create app listener

let startlog = new Date().toISOString() + ' HTTP server started on port ' + port + '\n' // Create a log entry on start

if (args.debug) { console.info(startlog) } // Debug echo start log entry to STDOUT 

fs.appendFileSync(path.join(logpath, 'server.log'), startlog) // Log server start to file

process.on('SIGINT', () => { // Exit gracefully and log

    let stoppinglog =  new Date().toISOString() + ' SIGINT signal received: stopping HTTP server\n' // Create a log entry on SIGINT

    fs.appendFileSync(path.join(logpath, 'server.log'), stoppinglog) //  Log SIGINT to file

    if (args.debug) { console.info('\n' + stoppinglog) } // Debug echo SIGINT log entry to STDOUT

    server.close(() => { // Create a log entry on stop
        let stoppedlog = new Date().toISOString() + ' HTTP server stopped\n'

        fs.appendFileSync(path.join(logpath, 'server.log'), stoppedlog) // Log server stop to file

        if (args.debug) { console.info('\n' + stoppedlog) } // Debug echo stop log entry to STDOUT
    })
})
