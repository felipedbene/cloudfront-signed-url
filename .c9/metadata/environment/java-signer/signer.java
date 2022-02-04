{"filter":false,"title":"signer.java","tooltip":"/java-signer/signer.java","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":58,"column":30},"action":"insert","lines":["// Signed URLs for a private distribution","// Note that Java only supports SSL certificates in DER format, ","// so you will need to convert your PEM-formatted file to DER format. ","// To do this, you can use openssl:","// openssl pkcs8 -topk8 -nocrypt -in origin.pem -inform PEM -out new.der ","//    -outform DER ","// So the encoder works correctly, you should also add the bouncy castle jar","// to your project and then add the provider.","","Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());","","String distributionDomain = \"a1b2c3d4e5f6g7.cloudfront.net\";","String privateKeyFilePath = \"/path/to/rsa-private-key.der\";","String s3ObjectKey = \"s3/object/key.txt\";","String policyResourcePath = \"https://\" + distributionDomain + \"/\" + s3ObjectKey;","","// Convert your DER file into a byte array.","","byte[] derPrivateKey = ServiceUtils.readInputStreamToBytes(new","    FileInputStream(privateKeyFilePath));","","// Generate a \"canned\" signed URL to allow access to a ","// specific distribution and file","","String signedUrlCanned = CloudFrontService.signUrlCanned(","    \"https://\" + distributionDomain + \"/\" + s3ObjectKey, // Resource URL or Path","    keyPairId,     // Certificate identifier, ","                   // an active trusted signer for the distribution","    derPrivateKey, // DER Private key data","    ServiceUtils.parseIso8601Date(\"2011-11-14T22:20:00.000Z\") // DateLessThan","    );","System.out.println(signedUrlCanned);","","// Build a policy document to define custom restrictions for a signed URL.","","String policy = CloudFrontService.buildPolicyForSignedUrl(","    // Resource path (optional, can include '*' and '?' wildcards)","    policyResourcePath, ","    // DateLessThan","    ServiceUtils.parseIso8601Date(\"2011-11-14T22:20:00.000Z\"), ","    // CIDR IP address restriction (optional, 0.0.0.0/0 means everyone)","    \"0.0.0.0/0\", ","    // DateGreaterThan (optional)","    ServiceUtils.parseIso8601Date(\"2011-10-16T06:31:56.000Z\")","    );","","// Generate a signed URL using a custom policy document.","","String signedUrl = CloudFrontService.signUrl(","    // Resource URL or Path","    \"https://\" + distributionDomain + \"/\" + s3ObjectKey, ","    // Certificate identifier, an active trusted signer for the distribution","    keyPairId,     ","    // DER Private key data","    derPrivateKey, ","    // Access control policy","    policy ","    );","System.out.println(signedUrl);"],"id":1}]]},"ace":{"folds":[],"scrolltop":360,"scrollleft":0,"selection":{"start":{"row":58,"column":30},"end":{"row":58,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":21,"state":"start","mode":"ace/mode/java"}},"timestamp":1643528368266,"hash":"2e113e76c7cb11362ab0d3ff7d3856a02bdc5ae4"}