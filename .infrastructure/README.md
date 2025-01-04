# Deploying Infrastructure with Terraform

This repository contains the Terraform configuration files to deploy the infrastructure to ECS Fargate.

## Prerequisites

- Install Terraform [link](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- Install AWS CLI [link](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
- Configure AWS CLI [link](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

## Deploying Environments

Currently, the Terraform code is set up to deploy the **demo**, **staging**, and **production** environments.  To deploy an environment, run the following commands:

```bash
cd terraform
terraform init  # Initialize the Terraform configuration
terraform plan -var-file "environments/demo.tfvars  # Plan the deployment
terraform apply -var-file "environments/demo.tfvars"  # Deploy the infrastructure
```

Terraform allows for reproducible infrastructure deployments by using the same configuration files to deploy the same infrastructure in different environments.  The `terraform appy -var-file "environments/<env name>.tfvars` command will prompt you to confirm the deployment before proceeding.  So, any changes to the infrastructure can be reviewed before applying them.

Note: Additonal environments can be added by created by adding a new TFvars file in the `terraform/environments` directory.

Each environment sets up the following resources:

Sets up the following AWS infrastructure:

- IAM Roles and Policies
- Lambda Function
- Logs

If you make changes to the Terraform configuration, run `terraform validate` to check for syntax errors.  Before applying the changes, you can run `terraform plan` to see the changes that will be applied before running `terraform apply`.

## Cost Estimates

The baseline cost for each environment is xxxxx. Also, some costs may be lower due to free-tier usage.  However, the cost can be estimated using the AWS Pricing Calculator [link](https://calculator.aws).
