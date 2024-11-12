# aws.aws_neptune_db_cluster

## Description

AWS Neptune DB Cluster

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| db_cluster_identifier | text |  | true |  |  | Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster. |
| arn | text |  | true |  |  | The Amazon Resource Name (ARN) for the DB cluster. |
| status | text |  | true |  |  | Specifies the current state of this DB cluster. |
| cluster_create_time | timestamp with time zone |  | true |  |  | Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC). |
| allocated_storage | bigint |  | true |  |  | AllocatedStorage always returns 1, because Neptune DB cluster storage size is not fixed, but instead automatically adjusts as needed. |
| automatic_restart_time | timestamp with time zone |  | true |  |  | Time at which the DB cluster will be automatically restarted. |
| backup_retention_period | bigint |  | true |  |  | Specifies the number of days for which automatic DB snapshots are retained. |
| clone_group_id | text |  | true |  |  | Identifies the clone group to which the DB cluster is associated. |
| copy_tags_to_snapshot | boolean |  | true |  |  | If set to true, tags are copied to any snapshot of the DB cluster that is created. |
| cross_account_clone | boolean |  | true |  |  | If set to true, the DB cluster can be cloned across accounts. |
| db_cluster_parameter_group | text |  | true |  |  | Specifies the name of the DB cluster parameter group for the DB cluster. |
| db_subnet_group | text |  | true |  |  | Specifies information on the subnet group associated with the DB cluster. |
| database_name | text |  | true |  |  | Contains the name of the initial database of this DB cluster that was provided. |
| db_cluster_resource_id | text |  | true |  |  | The Amazon Region-unique, immutable identifier for the DB cluster. |
| deletion_protection | boolean |  | true |  |  | Indicates whether or not the DB cluster has deletion protection enabled. |
| earliest_restorable_time | timestamp with time zone |  | true |  |  | Specifies the earliest time to which a database can be restored with point-in-time restore. |
| endpoint | text |  | true |  |  | Specifies the connection endpoint for the primary instance of the DB cluster. |
| engine | text |  | true |  |  | Provides the name of the database engine to be used for this DB cluster. |
| engine_version | text |  | true |  |  | Indicates the database engine version. |
| hosted_zone_id | text |  | true |  |  | Specifies the ID that Amazon Route 53 assigns when you create a hosted zone. |
| iam_database_authentication_enabled | boolean |  | true |  |  | True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false. |
| kms_key_id | text |  | true |  |  | If StorageEncrypted is true, the Amazon KMS key identifier for the encrypted DB cluster. |
| latest_restorable_time | timestamp with time zone |  | true |  |  | Specifies the latest time to which a database can be restored with point-in-time restore. |
| multi_az | boolean |  | true |  |  | Specifies whether the DB cluster has instances in multiple Availability Zones. |
| percent_progress | text |  | true |  |  | Specifies the progress of the operation as a percentage. |
| port | bigint |  | true |  |  | Specifies the port that the database engine is listening on. |
| preferred_backup_window | text |  | true |  |  | Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod. |
| preferred_maintenance_window | text |  | true |  |  | Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). |
| reader_endpoint | text |  | true |  |  | The reader endpoint for the DB cluster. |
| storage_encrypted | boolean |  | true |  |  | Specifies whether the DB cluster is encrypted. |
| associated_roles | jsonb |  | true |  |  | Provides a list of the Amazon Identity and Access Management (IAM) roles. |
| availability_zones | jsonb |  | true |  |  | Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in. |
| db_cluster_members | jsonb |  | true |  |  | Provides the list of instances that make up the DB cluster. |
| enabled_cloudwatch_logs_exports | jsonb |  | true |  |  | A list of log types that this DB cluster is configured to export to CloudWatch Logs. |
| read_replica_identifiers | jsonb |  | true |  |  | Contains one or more identifiers of the Read Replicas associated with this DB cluster. |
| vpc_security_groups | jsonb |  | true |  |  | Provides a list of VPC security groups that the DB cluster belongs to. |
| tags_src | jsonb |  | true |  |  | A list of tags assigned to the resource. |
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

![er](aws.aws_neptune_db_cluster.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
