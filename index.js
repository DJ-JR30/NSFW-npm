const got = require('got');
const uniqueRandomArray = require('unique-random-array');
const EventEmitter = require('eventemitter3');

const randomCache = {};

function formatResult(getRandomImage) {
    const imageData = getRandomImage();
    if (!imageData) {
        return;
    }
    return `http://imgur.com/${imageData.hash}${imageData.ext.replace(/\?.*/, '')}`;
}

function storeResults(images, subreddit) {
    const getRandomImage = uniqueRandomArray(images);

    randomCache[subreddit] = getRandomImage;
    return getRandomImage;
}

function randomBoobs(subreddit) {
    subreddit = (typeof subreddit === 'string' && subreddit.length !== 0) ? subreddit : 'PerfectTits';

    if (randomCache[subreddit]) {
        return Promise.resolve(formatResult(randomCache[subreddit]));
    }

    return got(`https://imgur.com/r/${subreddit}/hot.json`, {json: true})
        .then(response => storeResults(response.body.data, subreddit))
        .then(getRandomImage => formatResult(getRandomImage));
}

// silly feature to play with observables
function Boobs(subreddit) {
    const eventEmitter = new EventEmitter();

    function emitRandomImage(subreddit) {
        randomBoobs(subreddit).then(imageUrl => {
            eventEmitter.emit('data', imageUrl + '#' + subreddit);
            if (eventEmitter.listeners('data').length) {
                setTimeout(() => emitRandomImage(subreddit), 200);
            }
        });
    }

    emitRandomImage(subreddit);
    return eventEmitter;
}

function callback(subreddit, cb) {
    randomBoobs(subreddit)
        .then(url => cb(null, url))
        .catch(err => cb(err));
}

// subreddit is optional
// callback support is provided for a training exercise
module.exports = (subreddit, cb) => {
    if (typeof cb === 'function') {
        callback(subreddit, cb);
    } else if (typeof subreddit === 'function') {
        callback(null, subreddit);
    } else {
        return randomBoobs(subreddit);
    }
};

module.exports.Boobs = Boobs;


function formatResult(getRandomImage) {
    const imageData = getRandomImage();
    if (!imageData) {
        return;
    }
    return `http://imgur.com/${imageData.hash}${imageData.ext.replace(/\?.*/, '')}`;
}

function storeResults(images, subreddit) {
    const getRandomImage = uniqueRandomArray(images);

    randomCache[subreddit] = getRandomImage;
    return getRandomImage;
}

function randomVagina(subreddit) {
    subreddit = (typeof subreddit === 'string' && subreddit.length !== 0) ? subreddit : 'vagina';

    if (randomCache[subreddit]) {
        return Promise.resolve(formatResult(randomCache[subreddit]));
    }

    return got(`https://imgur.com/r/${subreddit}/hot.json`, {json: true})
        .then(response => storeResults(response.body.data, subreddit))
        .then(getRandomImage => formatResult(getRandomImage));
}

// silly feature to play with observables
function Pussy(subreddit) {
    const eventEmitter = new EventEmitter();

    function emitRandomImage(subreddit) {
        randomVagina(subreddit).then(imageUrl => {
            eventEmitter.emit('data', imageUrl + '#' + subreddit);
            if (eventEmitter.listeners('data').length) {
                setTimeout(() => emitRandomImage(subreddit), 200);
            }
        });
    }

    emitRandomImage(subreddit);
    return eventEmitter;
}

function callback(subreddit, cb) {
    randomVagina(subreddit)
        .then(url => cb(null, url))
        .catch(err => cb(err));
}

// subreddit is optional
// callback support is provided for a training exercise
module.exports = (subreddit, cb) => {
    if (typeof cb === 'function') {
        callback(subreddit, cb);
    } else if (typeof subreddit === 'function') {
        callback(null, subreddit);
    } else {
        return randomVagina(subreddit);
    }
};

module.exports.Pussy = Pussy;


function formatResult(getRandomImage) {
    const imageData = getRandomImage();
    if (!imageData) {
        return;
    }
    return `http://imgur.com/${imageData.hash}${imageData.ext.replace(/\?.*/, '')}`;
}

function storeResults(images, subreddit) {
    const getRandomImage = uniqueRandomArray(images);

    randomCache[subreddit] = getRandomImage;
    return getRandomImage;
}

function randomButt(subreddit) {
    subreddit = (typeof subreddit === 'string' && subreddit.length !== 0) ? subreddit : 'butt';

    if (randomCache[subreddit]) {
        return Promise.resolve(formatResult(randomCache[subreddit]));
    }

    return got(`https://imgur.com/r/${subreddit}/hot.json`, {json: true})
        .then(response => storeResults(response.body.data, subreddit))
        .then(getRandomImage => formatResult(getRandomImage));
}

// silly feature to play with observables
function Butt(subreddit) {
    const eventEmitter = new EventEmitter();

    function emitRandomImage(subreddit) {
        randomButt(subreddit).then(imageUrl => {
            eventEmitter.emit('data', imageUrl + '#' + subreddit);
            if (eventEmitter.listeners('data').length) {
                setTimeout(() => emitRandomImage(subreddit), 200);
            }
        });
    }

    emitRandomImage(subreddit);
    return eventEmitter;
}

function callback(subreddit, cb) {
    randomButt(subreddit)
        .then(url => cb(null, url))
        .catch(err => cb(err));
}

// subreddit is optional
// callback support is provided for a training exercise
module.exports = (subreddit, cb) => {
    if (typeof cb === 'function') {
        callback(subreddit, cb);
    } else if (typeof subreddit === 'function') {
        callback(null, subreddit);
    } else {
        return randomButt(subreddit);
    }
};

module.exports.Butt = Butt;


// 💦💦💦

// Cartoon
const { hfuck, hcum, hanal, hlewd, hgif } = require('./src/h');
// Born
const { porngif, anal } = require('./src/born');

module.exports = {
    hfuck, hcum, hanal, hlewd, hgif, 
    porngif, anal
};