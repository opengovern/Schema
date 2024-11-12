# aws.aws_sagemaker_training_job

## Description

AWS SageMaker Training Job

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| name | text |  | true |  |  | The name of the training job. |
| arn | text |  | true |  |  | The Amazon Resource Name (ARN) of the training job. |
| training_job_status | text |  | true |  |  | The status of the training job. |
| auto_ml_job_arn | text |  | true |  |  | The Amazon Resource Name (ARN) of an AutoML job. |
| billable_time_in_seconds | bigint |  | true |  |  | The billable time in seconds. Billable time refers to the absolute wall-clock time. |
| creation_time | timestamp with time zone |  | true |  |  | A timestamp that shows when the training job was created. |
| enable_managed_spot_training | boolean |  | true |  |  | A Boolean indicating whether managed spot training is enabled or not. |
| enable_network_isolation | boolean |  | true |  |  | Specifies enable network isolation for training jobs. |
| enable_inter_container_traffic_encryption | boolean |  | true |  |  | To encrypt all communications between ML compute instances in distributed training, choose True. |
| failure_reason | text |  | true |  |  | If the training job failed, the reason it failed. |
| labeling_job_arn | text |  | true |  |  | The Amazon Resource Name (ARN) of the Amazon SageMaker Ground Truth labeling job that created the transform or training job. |
| last_modified_time | timestamp with time zone |  | true |  |  | Timestamp when the training job was last modified. |
| profiling_status | text |  | true |  |  | Profiling status of a training job. |
| role_arn | text |  | true |  |  | The AWS Identity and Access Management (IAM) role configured for the training job. |
| secondary_status | text |  | true |  |  | Provides detailed information about the state of the training job. |
| training_end_time | timestamp with time zone |  | true |  |  | A timestamp that shows when the training job ended. |
| training_start_time | timestamp with time zone |  | true |  |  | Indicates the time when the training job starts on training instances. |
| training_time_in_seconds | bigint |  | true |  |  | The training time in seconds. |
| tuning_job_arn | text |  | true |  |  | The Amazon Resource Name (ARN) of the associated hyperparameter tuning job if the training job was launched by a hyperparameter tuning job. |
| algorithm_specification | jsonb |  | true |  |  | Information about the algorithm used for training, and algorithm metadata. |
| checkpoint_config | jsonb |  | true |  |  | Contains information about the output location for managed spot training checkpoint data. |
| debug_hook_config | jsonb |  | true |  |  | Configuration information for the Debugger hook parameters, metric and tensor collections, and storage paths. |
| debug_rule_configurations | jsonb |  | true |  |  | Configuration information for Debugger rules for debugging output tensors. |
| debug_rule_evaluation_statuses | jsonb |  | true |  |  | Evaluation status of Debugger rules for debugging on a training job. |
| environment | jsonb |  | true |  |  | The environment variables to set in the Docker container. |
| experiment_config | jsonb |  | true |  |  | Associates a SageMaker job as a trial component with an experiment and trial. |
| final_metric_data_list | jsonb |  | true |  |  | A collection of MetricData objects that specify the names, values, and dates and times that the training algorithm emitted to Amazon CloudWatch. |
| hyper_parameters | jsonb |  | true |  |  | Algorithm-specific parameters. |
| input_data_config | jsonb |  | true |  |  | An array of Channel objects that describes each data input channel. |
| model_artifacts | jsonb |  | true |  |  | Information about the Amazon S3 location that is configured for storing model artifacts. |
| output_data_config | jsonb |  | true |  |  | The S3 path where model artifacts that you configured when creating the job are stored. |
| profiler_config | jsonb |  | true |  |  | Configuration information for Debugger system monitoring,framework profiling and storage paths. |
| profiler_rule_configurations | jsonb |  | true |  |  | Configuration information for Debugger rules for profiling system and framework metrics. |
| profiler_rule_evaluation_statuses | jsonb |  | true |  |  | Evaluation status of Debugger rules for profiling on a training job. |
| resource_config | jsonb |  | true |  |  | Resources, including ML compute instances and ML storage volumes, that are configured for model training. |
| secondary_status_transitions | jsonb |  | true |  |  | A history of all of the secondary statuses that the training job has transitioned through. |
| stopping_condition | jsonb |  | true |  |  | Specifies a limit to how long a model training job can run. |
| tensor_board_output_config | jsonb |  | true |  |  | Configuration of storage locations for the Debugger TensorBoard output data. |
| vpc_config | jsonb |  | true |  |  | A VpcConfig object that specifies the VPC that this training job has access to. |
| tags_src | jsonb |  | true |  |  | A list of tags assigned to the training job. |
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

## Relations

![er](aws.aws_sagemaker_training_job.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
