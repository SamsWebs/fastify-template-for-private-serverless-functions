variable "region" {
  description = "The AWS region to create resources in."
  default     = "us-east-1"
}

variable "environment" {
  description = "The environment name"
}

variable "function_name" {
  description = "The name of the lambda function" 
  default     = "fastify-template-function" 
}

variable "function_timeout" {
  description = "The timeout for the lambda function"
  default     = 10
}

variable "log_retention_in_days" {
  default = 30
}
