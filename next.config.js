/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        ncludePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
