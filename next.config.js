const withMDX = require('@next/mdx')({
   extension: /\.mdx?$/,
});

module.exports = withMDX({
   webpack: (config, { isServer }) => {
      if (!isServer) {
         config.node = {
            fs: 'empty',
         };
      }

      return config;
   },
   pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
