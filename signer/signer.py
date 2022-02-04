import datetime
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding
from botocore.signers import CloudFrontSigner
def rsa_signer(message):
  with open('./private_key.pem', 'rb') as key_file:
    private_key = serialization.load_pem_private_key(
      key_file.read(),
      password=None,
      backend=default_backend()
    )
    return private_key.sign(message, padding.PKCS1v15(),hashes.SHA1())
key_id = 'K3H7J7FJE60E7P'
url = 'https://xxxxxxxxxxxxxx.cloudfront.net/file.blob'
expire_date = datetime.datetime(2023, 2, 1)
cloudfront_signer = CloudFrontSigner(key_id, rsa_signer)
signed_url = cloudfront_signer.generate_presigned_url(url, date_less_than=expire_date)
print(signed_url)