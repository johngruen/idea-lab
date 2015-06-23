module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: require('./controllers/index')
        }
    },
    // Public
    {
        method: 'GET',
        path: '/{param*}',
        config: {
            auth: false,
            handler: require('./controllers/assets')
        }
    }
];
