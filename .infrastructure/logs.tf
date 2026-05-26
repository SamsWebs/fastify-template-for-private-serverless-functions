resource "aws_cloudwatch_log_group" "cloudwatch-log-group" {
  name              = "/aws/lambda/${var.function_name}"
  retention_in_days = var.log_retention_in_days
}
