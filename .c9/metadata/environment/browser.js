{"filter":false,"title":"browser.js","tooltip":"/browser.js","undoManager":{"mark":11,"position":11,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["const AWS = require('aws-sdk')","","// load CloudFront key pair from environment variables","// Important: when storing your CloudFront private key as an environment variable string, ","// you'll need to replace all line breaks with \\n, like this:","// CF_PRIVATE_KEY=\"-----BEGIN RSA PRIVATE KEY-----\\nMIIE...1Ar\\nwLW...2eL\\nFOu...k2E\\n-----END RSA PRIVATE KEY-----\"","const cloudfrontAccessKeyId = process.env.CF_ACCESS_KEY_ID","const cloudFrontPrivateKey = process.env.CF_PRIVATE_KEY","const signer = new AWS.CloudFront.Signer(cloudfrontAccessKeyId, cloudFrontPrivateKey)","","// 2 days as milliseconds to use for link expiration","const twoDays = 2*24*60*60*1000","","// sign a CloudFront URL that expires 2 days from now","const signedUrl = signer.getSignedUrl({","  url: 'https://248hf0w8hs.cloudfront.net/secret-image.jpg',","  expires: Math.floor((Date.now() + twoDays)/1000), // Unix UTC timestamp for now + 2 days","})"],"id":1}],[{"start":{"row":15,"column":42},"end":{"row":15,"column":58},"action":"remove","lines":["secret-image.jpg"],"id":2},{"start":{"row":15,"column":42},"end":{"row":15,"column":43},"action":"insert","lines":["f"]},{"start":{"row":15,"column":43},"end":{"row":15,"column":44},"action":"insert","lines":["i"]},{"start":{"row":15,"column":44},"end":{"row":15,"column":45},"action":"insert","lines":["l"]},{"start":{"row":15,"column":45},"end":{"row":15,"column":46},"action":"insert","lines":["e"]},{"start":{"row":15,"column":46},"end":{"row":15,"column":47},"action":"insert","lines":["."]},{"start":{"row":15,"column":47},"end":{"row":15,"column":48},"action":"insert","lines":["b"]},{"start":{"row":15,"column":48},"end":{"row":15,"column":49},"action":"insert","lines":["l"]}],[{"start":{"row":15,"column":49},"end":{"row":15,"column":50},"action":"insert","lines":["o"],"id":3},{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"remove","lines":["g"],"id":4}],[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"insert","lines":["b"],"id":5}],[{"start":{"row":15,"column":8},"end":{"row":15,"column":40},"action":"remove","lines":["https://248hf0w8hs.cloudfront.ne"],"id":6},{"start":{"row":15,"column":8},"end":{"row":15,"column":45},"action":"insert","lines":["https://d2o1r90mgh9tvb.cloudfront.net"]}],[{"start":{"row":15,"column":44},"end":{"row":15,"column":45},"action":"remove","lines":["t"],"id":7}],[{"start":{"row":17,"column":2},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"insert","lines":["c"]},{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"insert","lines":["o"]},{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":["n"]},{"start":{"row":19,"column":3},"end":{"row":19,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["cons"],"id":9},{"start":{"row":19,"column":0},"end":{"row":19,"column":7},"action":"insert","lines":["console"]}],[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["."],"id":10},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["l"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["o"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":19,"column":11},"end":{"row":19,"column":13},"action":"insert","lines":["()"],"id":11}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":21},"action":"insert","lines":["signedUrl"],"id":12}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":21},"end":{"row":19,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1643524315582,"hash":"d4dafb7c6b7e8ce808039b65271dfc3190454801"}