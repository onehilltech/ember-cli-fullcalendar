'use strict';

module.exports = {
  name: require('./package').name,

  included (app) {
    this._super.call (this, ...arguments);

    app.import ({
      development: 'node_modules/@fullcalendar/common/main.css',
      production: 'node_modules/@fullcalendar/common/main.min.css'
    });

    app.import ({
      development: 'node_modules/@fullcalendar/daygrid/main.css',
      production: 'node_modules/@fullcalendar/daygrid/main.min.css'
    })
  },

  options: {
    autoImport:{
      webpack: {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: ['css-loader'],
            },
          ],
        }
      }
    }
  }
};
