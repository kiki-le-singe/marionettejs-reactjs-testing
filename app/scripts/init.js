require.config({

    baseUrl: '/scripts',

    /* starting point for application */
    deps: ['main'],

    shim: {
        backbone: {
            deps: ['underscore', 'jquery']
        },
        marionette: {
          deps: ['backbone']
        }
    },

    paths: {
      // React components
      '#components': 'components/build',

        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone',

        /* alias all marionette libs */
        marionette: '../bower_components/backbone.marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',

        /* Facebook's libraries */
        react: '../bower_components/react/react-with-addons',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: '../templates',

        /* Helpers */
        helpersHBS: 'helpers/helpers',

        /* requirejs-plugins */
        json: '../bower_components/requirejs-plugins/src/json',

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/handlebars/handlebars',
        hbs: '../bower_components/requirejs-hbs/hbs'
    }
});
