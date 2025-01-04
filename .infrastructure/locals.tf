data "aws_caller_identity" "current" {}

data "aws_vpc" "default" {
  default = true
}

locals {
  account_id  = data.aws_caller_identity.current.account_id
  default_vpc = data.aws_vpc.default
}
