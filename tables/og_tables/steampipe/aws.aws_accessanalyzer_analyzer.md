# aws.aws_accessanalyzer_analyzer

## Description

AWS Access Analyzer

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| name | text |  | true |  |  | The name of the Analyzer. |
| arn | text |  | true |  |  | The ARN of the analyzer. |
| status | text |  | true |  |  | The status of the analyzer. |
| type | text |  | true |  |  | The type of analyzer, which corresponds to the zone of trust chosen for the analyzer. |
| created_at | timestamp with time zone |  | true |  |  | A timestamp for the time at which the analyzer was created. |
| last_resource_analyzed | text |  | true |  |  | The resource that was most recently analyzed by the analyzer. |
| last_resource_analyzed_at | timestamp with time zone |  | true |  |  | The time at which the most recently analyzed resource was analyzed. |
| status_reason | text |  | true |  |  | The statusReason provides more details about the current status of the analyzer. |
| findings | jsonb |  | true |  |  | A list of findings retrieved from the analyzer that match the filter criteria specified, if any. |
| title | text |  | true |  |  | Title of the resource. |
| tags | jsonb |  | true |  |  | A map of tags for the resource. |
| akas | jsonb |  | true |  |  | Array of globally unique identifier strings (also known as) for the resource. |
| partition | text |  | true |  |  | The AWS partition in which the resource is located (aws, aws-cn, or aws-us-gov). |
| region | text |  | true |  |  | The AWS Region in which the resource is located. |
| account_id | text |  | true |  |  | The AWS Account ID in which the resource is located. |
| og_account_id | text |  | true |  |  | The Platform Account ID in which the resource is located. |
| og_resource_id | text |  | true |  |  | The unique ID of the resource in opengovernance. |
| og_metadata | text |  | true |  |  | Platform Metadata of the AWS resource. |
| og_description | jsonb |  | true |  |  | The full model description of the resource |
| _ctx | jsonb |  | true |  |  | Steampipe context in JSON form, e.g. connection_name. |


---
