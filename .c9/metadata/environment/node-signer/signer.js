{"filter":false,"title":"signer.js","tooltip":"/node-signer/signer.js","undoManager":{"mark":29,"position":29,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["const AWS = require('aws-sdk')","","// load CloudFront key pair from environment variables","// Important: when storing your CloudFront private key as an environment variable string, ","// you'll need to replace all line breaks with \\n, like this:","// CF_PRIVATE_KEY=\"-----BEGIN RSA PRIVATE KEY-----\\nMIIE...1Ar\\nwLW...2eL\\nFOu...k2E\\n-----END RSA PRIVATE KEY-----\"","const cloudfrontAccessKeyId = process.env.CF_ACCESS_KEY_ID","const cloudFrontPrivateKey = process.env.CF_PRIVATE_KEY","const signer = new AWS.CloudFront.Signer(cloudfrontAccessKeyId, cloudFrontPrivateKey)","","// 2 days as milliseconds to use for link expiration","const twoDays = 2*24*60*60*1000","","// sign a CloudFront URL that expires 2 days from now","const signedUrl = signer.getSignedUrl({","  url: 'https://248hf0w8hs.cloudfront.net/secret-image.jpg',","  expires: Math.floor((Date.now() + twoDays)/1000), // Unix UTC timestamp for now + 2 days","})"],"id":1}],[{"start":{"row":15,"column":42},"end":{"row":15,"column":58},"action":"remove","lines":["secret-image.jpg"],"id":2},{"start":{"row":15,"column":42},"end":{"row":15,"column":43},"action":"insert","lines":["f"]},{"start":{"row":15,"column":43},"end":{"row":15,"column":44},"action":"insert","lines":["i"]},{"start":{"row":15,"column":44},"end":{"row":15,"column":45},"action":"insert","lines":["l"]},{"start":{"row":15,"column":45},"end":{"row":15,"column":46},"action":"insert","lines":["e"]},{"start":{"row":15,"column":46},"end":{"row":15,"column":47},"action":"insert","lines":["."]},{"start":{"row":15,"column":47},"end":{"row":15,"column":48},"action":"insert","lines":["b"]},{"start":{"row":15,"column":48},"end":{"row":15,"column":49},"action":"insert","lines":["l"]}],[{"start":{"row":15,"column":49},"end":{"row":15,"column":50},"action":"insert","lines":["o"],"id":3},{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"insert","lines":["g"]}],[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"remove","lines":["g"],"id":4}],[{"start":{"row":15,"column":50},"end":{"row":15,"column":51},"action":"insert","lines":["b"],"id":5}],[{"start":{"row":15,"column":8},"end":{"row":15,"column":40},"action":"remove","lines":["https://248hf0w8hs.cloudfront.ne"],"id":6},{"start":{"row":15,"column":8},"end":{"row":15,"column":45},"action":"insert","lines":["https://d2o1r90mgh9tvb.cloudfront.net"]}],[{"start":{"row":15,"column":44},"end":{"row":15,"column":45},"action":"remove","lines":["t"],"id":7}],[{"start":{"row":17,"column":2},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":1},"action":"insert","lines":["c"]},{"start":{"row":19,"column":1},"end":{"row":19,"column":2},"action":"insert","lines":["o"]},{"start":{"row":19,"column":2},"end":{"row":19,"column":3},"action":"insert","lines":["n"]},{"start":{"row":19,"column":3},"end":{"row":19,"column":4},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"remove","lines":["cons"],"id":9},{"start":{"row":19,"column":0},"end":{"row":19,"column":7},"action":"insert","lines":["console"]}],[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":["."],"id":10},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["l"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["o"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":19,"column":11},"end":{"row":19,"column":13},"action":"insert","lines":["()"],"id":11}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":21},"action":"insert","lines":["signedUrl"],"id":12}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":58},"action":"remove","lines":["process.env.CF_ACCESS_KEY_ID"],"id":13},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["\""]}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":46},"action":"insert","lines":["K3H7J7FJE60E7P\t"],"id":14}],[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"insert","lines":["\""],"id":15}],[{"start":{"row":6,"column":46},"end":{"row":6,"column":47},"action":"remove","lines":["\""],"id":16},{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"remove","lines":["\t"]}],[{"start":{"row":6,"column":45},"end":{"row":6,"column":46},"action":"insert","lines":["\""],"id":17}],[{"start":{"row":7,"column":29},"end":{"row":7,"column":55},"action":"remove","lines":["process.env.CF_PRIVATE_KEY"],"id":18},{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["\""]}],[{"start":{"row":7,"column":30},"end":{"row":7,"column":32},"action":"insert","lines":["\"\""],"id":19}],[{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":[" "],"id":20}],[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"remove","lines":["\""],"id":21},{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"remove","lines":[" "]}],[{"start":{"row":7,"column":30},"end":{"row":7,"column":1736},"action":"insert","lines":["-----BEGIN RSA PRIVATE KEY-----\\nMIIEpAIBAAKCAQEAxV1cD9sn/lHobGtVxvOFrrDrofgjrCj0jFRrkMJYvh+dv3wM\\nrWc0rrmuT+AfQl5poGW7faJ/ak2ADIIcXqVwBabfK8HP5JDvNxqZ90oFgCI8hkEb\\nuahCWhHRYhsGVWBz2ItoWBaXQBgBZ+CBZR49xcnGgCTzgIQX0G21RdY4nnY0Q50z\\nFdkAtrm3hgI2O5A5jaqD27qC7VOBQ8txokCSGaFuYAYQXbPKc8Wrt/W6NBVYn1fH\\nNVK+rKr+RQ2Cw2ISiBcPaSrEN8Ep79M/dMIb2tmYTFVZKGJILoYxmo/BfOu12Mxg\\n0T0eMsIEim8aS2IBhH7eUGacnAiXIdLwHkPHVwIDAQABAoIBAEzBDP+BnGEUW45m\\ng7pWlGOmnEymIsFeQBSe9CIc4sQ1qXSBerCpFVzqCzc3ExENhIiDZ9HpMyIVN7ol\\nk4DfV9xq1BnBSuc50j4c00nPeKonJmCTy4N9QyiiC0ra9bCYTRUmyhKP3oxniYxr\\nTAcWJrHX0aGePTB6roQ5VijtsaE16iLCqJoNMb04WD+wHA9SsyVFbWQP8TIHwLM4\\nr56YeBa/ZKGQ+l2BeoPxxhyPhPzInbf3F8ROKl0KNVio472meuUVnaimvSFzmbJV\\ncqKsvUVOrsaqMoR7+tgX9qM3z9voeEZjQVkHc4ro8uXcIb2S90JBzUuxhhTXGVb2\\nxhQpA2ECgYEA5sFGQmWNvkJJMfmDytVU0RBHJm21CfbI155w4CZiUwZdiUE/LZ4Q\\nTALHAWLNTsJiuS7j9WMTr6MQwlrc6DNhmo8TZt64gQyBOGN7kGmNc2d8KwzV7Oh2\\nbr1d/4oru+MxPIgUBmUbhDKwJwz3yp0AxHezSttm9rsXPgJYJJr9NHECgYEA2vTt\\nbkvFtlJ3//+9K0We2jjcJDZaMaN0loL/juO8WZSAN6zOyAF18+K0LQ5rWYMO720w\\nnZtYO7FMBmPN53JMax7OVedDFhkcxt7YYdTsHkzlRosxL4jttt5hjSoRzubgKx8g\\nPAFaGF/eI4f7cD90AML6kWIG1PkRRGkxpEKb/EcCgYEAgjBDIozHNrORNkfPCm3n\\nx3gGnHDC9lcsozH5/wzI5oyt0xVjvqnyCeB7RJXovWnAZzhEVprKbYpzlyPKhJsQ\\nkzHrwVsg/3X9pcHC4gwbSSP2kxdPzrSstPfUA6uB1yRsD/m6So1aw/ARIEcZuk9w\\nMmhSWIaGheeySkLqVeS3vJECgYEAgpQG9PwjUPQltHojqqa+cY3vW3k+mNPON+Sv\\n29tc/F9fh9R7DTQxz9ynbydmRd+vDIKlt5hpKlA18qmapii4AjpA+2IL1CXtz3we\\nt1lv5zIcmdFw59RVT/WXX8RzEl0F2zGY27BCtr6Vj8MM5Igy+jFNlV5MjL5s2cuS\\nW0+ODwkCgYAt34KUtLTE/r4sqJzWA0e7K7/aJDPo6/5DB5ImANIJYMPsVStCAiMW\\nB+hjLszlGoV6haKoEe9iNatATDLH574NyQ7fsR96Kt4MSLN8oRh4ypokOpOvl6qC\\nOmt+haoJIYMbaLF5EvUSYnQ5qCd4yIw1Nx8nJH3JC+1/B5pot/gtVg==\\n-----END RSA PRIVATE KEY-----\\n"],"id":22}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"remove","lines":["2"],"id":23}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["3"],"id":24},{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["6"]},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["5"]}],[{"start":{"row":15,"column":16},"end":{"row":15,"column":30},"action":"remove","lines":["d2o1r90mgh9tvb"],"id":25},{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":["x"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["x"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["x"]},{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["x"]},{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["x"]},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["x"]},{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["x"]},{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["x"]},{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":["x"]},{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"insert","lines":["x"]}],[{"start":{"row":7,"column":63},"end":{"row":7,"column":144},"action":"remove","lines":["MIIEpAIBAAKCAQEAxV1cD9sn/lHobGtVxvOFrrDrofgjrCj0jFRrkMJYvh+dv3wM\\nrWc0rrmuT+AfQl5"],"id":26},{"start":{"row":7,"column":63},"end":{"row":7,"column":64},"action":"insert","lines":["x"]},{"start":{"row":7,"column":64},"end":{"row":7,"column":65},"action":"insert","lines":["x"]},{"start":{"row":7,"column":65},"end":{"row":7,"column":66},"action":"insert","lines":["x"]}],[{"start":{"row":7,"column":116},"end":{"row":7,"column":146},"action":"remove","lines":["nuahCWhHRYhsGVWBz2ItoWBaXQBgBZ"],"id":27},{"start":{"row":7,"column":115},"end":{"row":7,"column":116},"action":"remove","lines":["\\"]},{"start":{"row":7,"column":114},"end":{"row":7,"column":115},"action":"remove","lines":["b"]},{"start":{"row":7,"column":113},"end":{"row":7,"column":114},"action":"remove","lines":["E"]},{"start":{"row":7,"column":112},"end":{"row":7,"column":113},"action":"remove","lines":["k"]},{"start":{"row":7,"column":111},"end":{"row":7,"column":112},"action":"remove","lines":["h"]},{"start":{"row":7,"column":110},"end":{"row":7,"column":111},"action":"remove","lines":["8"]},{"start":{"row":7,"column":109},"end":{"row":7,"column":110},"action":"remove","lines":["I"]},{"start":{"row":7,"column":108},"end":{"row":7,"column":109},"action":"remove","lines":["C"]},{"start":{"row":7,"column":107},"end":{"row":7,"column":108},"action":"remove","lines":["g"]},{"start":{"row":7,"column":106},"end":{"row":7,"column":107},"action":"remove","lines":["F"]},{"start":{"row":7,"column":105},"end":{"row":7,"column":106},"action":"remove","lines":["o"]},{"start":{"row":7,"column":104},"end":{"row":7,"column":105},"action":"remove","lines":["0"]},{"start":{"row":7,"column":103},"end":{"row":7,"column":104},"action":"remove","lines":["9"]},{"start":{"row":7,"column":102},"end":{"row":7,"column":103},"action":"remove","lines":["Z"]},{"start":{"row":7,"column":101},"end":{"row":7,"column":102},"action":"remove","lines":["q"]}],[{"start":{"row":7,"column":101},"end":{"row":7,"column":1579},"action":"remove","lines":["+CBZR49xcnGgCTzgIQX0G21RdY4nnY0Q50z\\nFdkAtrm3hgI2O5A5jaqD27qC7VOBQ8txokCSGaFuYAYQXbPKc8Wrt/W6NBVYn1fH\\nNVK+rKr+RQ2Cw2ISiBcPaSrEN8Ep79M/dMIb2tmYTFVZKGJILoYxmo/BfOu12Mxg\\n0T0eMsIEim8aS2IBhH7eUGacnAiXIdLwHkPHVwIDAQABAoIBAEzBDP+BnGEUW45m\\ng7pWlGOmnEymIsFeQBSe9CIc4sQ1qXSBerCpFVzqCzc3ExENhIiDZ9HpMyIVN7ol\\nk4DfV9xq1BnBSuc50j4c00nPeKonJmCTy4N9QyiiC0ra9bCYTRUmyhKP3oxniYxr\\nTAcWJrHX0aGePTB6roQ5VijtsaE16iLCqJoNMb04WD+wHA9SsyVFbWQP8TIHwLM4\\nr56YeBa/ZKGQ+l2BeoPxxhyPhPzInbf3F8ROKl0KNVio472meuUVnaimvSFzmbJV\\ncqKsvUVOrsaqMoR7+tgX9qM3z9voeEZjQVkHc4ro8uXcIb2S90JBzUuxhhTXGVb2\\nxhQpA2ECgYEA5sFGQmWNvkJJMfmDytVU0RBHJm21CfbI155w4CZiUwZdiUE/LZ4Q\\nTALHAWLNTsJiuS7j9WMTr6MQwlrc6DNhmo8TZt64gQyBOGN7kGmNc2d8KwzV7Oh2\\nbr1d/4oru+MxPIgUBmUbhDKwJwz3yp0AxHezSttm9rsXPgJYJJr9NHECgYEA2vTt\\nbkvFtlJ3//+9K0We2jjcJDZaMaN0loL/juO8WZSAN6zOyAF18+K0LQ5rWYMO720w\\nnZtYO7FMBmPN53JMax7OVedDFhkcxt7YYdTsHkzlRosxL4jttt5hjSoRzubgKx8g\\nPAFaGF/eI4f7cD90AML6kWIG1PkRRGkxpEKb/EcCgYEAgjBDIozHNrORNkfPCm3n\\nx3gGnHDC9lcsozH5/wzI5oyt0xVjvqnyCeB7RJXovWnAZzhEVprKbYpzlyPKhJsQ\\nkzHrwVsg/3X9pcHC4gwbSSP2kxdPzrSstPfUA6uB1yRsD/m6So1aw/ARIEcZuk9w\\nMmhSWIaGheeySkLqVeS3vJECgYEAgpQG9PwjUPQltHojqqa+cY3vW3k+mNPON+Sv\\n29tc/F9fh9R7DTQxz9ynbydmRd+vDIKlt5hpKlA18qmapii4AjpA+2IL1CXtz3we\\nt1lv5zIcmdFw59RVT/WXX8RzEl0F2zGY27BCtr6Vj8MM5Igy+jFNlV5MjL5s2cuS\\nW0+ODwkCgYAt34KUtLTE/r4sqJzWA0e7K7/aJDPo6/5DB5ImANIJYMPsVStCAiMW\\nB+hjLszlGoV6haKoEe9iNatATDLH574NyQ7fsR96Kt4MSLN8oRh4ypokOpOvl6qC\\nOmt+haoJIYMbaLF5EvUSYnQ5qCd4yIw1Nx8nJH3JC+1/B5pot/gtVg="],"id":28}],[{"start":{"row":7,"column":63},"end":{"row":7,"column":102},"action":"remove","lines":["xxxpoGW7faJ/ak2ADIIcXqVwBabfK8HP5JDvNx="],"id":29},{"start":{"row":7,"column":63},"end":{"row":7,"column":64},"action":"insert","lines":["X"]},{"start":{"row":7,"column":64},"end":{"row":7,"column":65},"action":"insert","lines":["X"]},{"start":{"row":7,"column":65},"end":{"row":7,"column":66},"action":"insert","lines":["X"]},{"start":{"row":7,"column":66},"end":{"row":7,"column":67},"action":"insert","lines":["X"]},{"start":{"row":7,"column":67},"end":{"row":7,"column":68},"action":"insert","lines":["X"]},{"start":{"row":7,"column":68},"end":{"row":7,"column":69},"action":"insert","lines":["X"]},{"start":{"row":7,"column":69},"end":{"row":7,"column":70},"action":"insert","lines":["X"]},{"start":{"row":7,"column":70},"end":{"row":7,"column":71},"action":"insert","lines":["X"]}],[{"start":{"row":6,"column":31},"end":{"row":6,"column":45},"action":"remove","lines":["K3H7J7FJE60E7P"],"id":30},{"start":{"row":6,"column":31},"end":{"row":6,"column":32},"action":"insert","lines":["X"]},{"start":{"row":6,"column":32},"end":{"row":6,"column":33},"action":"insert","lines":["X"]},{"start":{"row":6,"column":33},"end":{"row":6,"column":34},"action":"insert","lines":["X"]},{"start":{"row":6,"column":34},"end":{"row":6,"column":35},"action":"insert","lines":["X"]},{"start":{"row":6,"column":35},"end":{"row":6,"column":36},"action":"insert","lines":["X"]},{"start":{"row":6,"column":36},"end":{"row":6,"column":37},"action":"insert","lines":["X"]},{"start":{"row":6,"column":37},"end":{"row":6,"column":38},"action":"insert","lines":["X"]},{"start":{"row":6,"column":38},"end":{"row":6,"column":39},"action":"insert","lines":["X"]},{"start":{"row":6,"column":39},"end":{"row":6,"column":40},"action":"insert","lines":["X"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":40},"end":{"row":6,"column":40},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1644016951478,"hash":"0ef387b090ac5d0458a5e081445eff515b2a7ad3"}