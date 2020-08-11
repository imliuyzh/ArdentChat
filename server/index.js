let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let router = require('./controller/users');
let config = require('./util/config');
let midware = require('./util/middleware');

mongoose.connect(config.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`[${new Date().toString()}] Connected to MongoDB`))
    .catch((errorObject) => {
        console.error(`[${new Date().toString()}] ${errorObject.message}`);
        process.exit(1);
    });

let server = express();
server.use(cors());
server.use(express.json());
server.use('/api/users', router);
server.use(midware.invalidEndpointHandler);
server.use(midware.internalErrorHandler);

const PORT = process.env.PORT | 3001;
server.listen(PORT, () => 
    console.log(`\n[${new Date().toString()}] Server listening on port ${PORT}`)
);