provider "aws" {
  region = "sa-east-1"
  shared_credentials_file = "~/.aws/credentials"
}

resource "aws_s3_bucket" "codando" {
  bucket = "${var.bucket_name}"
  acl    = "public-read"

  policy = <<EOF
{
  "Id": "codando_policy",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "codando_policy_statement",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::${var.bucket_name}/*",
      "Principal": "*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
