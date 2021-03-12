module.exports = {
  distDir: 'build',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ];
  }
};
