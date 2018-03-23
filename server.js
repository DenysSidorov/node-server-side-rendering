// for skipping another files' types
require('babel-core/register');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2']
  .forEach((ext) => require.extensions[ext] = () => {
});
require('babel-polyfill');
require('server.js');