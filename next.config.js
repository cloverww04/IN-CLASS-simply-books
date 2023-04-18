module.exports = {
  reactStrictMode: true,
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  ignoreDuringBuilds: true,
};
