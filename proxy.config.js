const proxy = [
  {
    context: '/filme',
    target: 'http://localhost:8080',
    pathRewrite: { '^/filme': '' }
  }
];
module.exports = proxy;
