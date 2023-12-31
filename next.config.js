/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true 
  },
  
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
};