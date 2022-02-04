const AWS = require('aws-sdk')

// load CloudFront key pair from environment variables
// Important: when storing your CloudFront private key as an environment variable string, 
// you'll need to replace all line breaks with \n, like this:
// CF_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIE...1Ar\nwLW...2eL\nFOu...k2E\n-----END RSA PRIVATE KEY-----"
const cloudfrontAccessKeyId = "XXXXXXXXX"
const cloudFrontPrivateKey = "-----BEGIN RSA PRIVATE KEY-----\nXXXXXXXX\n-----END RSA PRIVATE KEY-----\n"
const signer = new AWS.CloudFront.Signer(cloudfrontAccessKeyId, cloudFrontPrivateKey)

// 2 days as milliseconds to use for link expiration
const twoDays = 365*24*60*60*1000

// sign a CloudFront URL that expires 2 days from now
const signedUrl = signer.getSignedUrl({
  url: 'https://xxxxxxxxxx.cloudfront.net/file.blob',
  expires: Math.floor((Date.now() + twoDays)/1000), // Unix UTC timestamp for now + 2 days
})

console.log(signedUrl)