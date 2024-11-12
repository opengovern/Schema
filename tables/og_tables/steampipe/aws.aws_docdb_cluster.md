# aws.aws_docdb_cluster

## Description

AWS DocumentDB Cluster

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| db_cluster_identifier | text |  | true |  |  | Contains a user-supplied cluster identifier. This identifier is the unique key that identifies a cluster. |
| arn | text |  | true |  |  | The Amazon Resource Name (ARN) for the Cluster. |
| status | text |  | true |  |  | Specifies the current state of this cluster. |
| cluster_create_time | timestamp with time zone |  | true |  |  | Specifies the time when the cluster was created. |
| backup_retention_period | bigint |  | true |  |  | Specifies the number of days for which automatic snapshots are retained. |
| clone_group_id | text |  | true |  |  | Identifies the clone group to which the DB cluster is associated. |
| db_cluster_parameter_group | text |  | true |  |  | Specifies the name of the cluster parameter group for the cluster. |
| db_cluster_resource_id | text |  | true |  |  | The Region-unique, immutable identifier for the cluster. |
| db_subnet_group | text |  | true |  |  | Specifies information on the subnet group associated with the cluster. |
| deletion_protection | boolean |  | true |  |  | Specifies whether the cluster has deletion protection enabled, or not. |
| earliest_restorable_time | timestamp with time zone |  | true |  |  | The earliest time to which a database can be restored with point-in-time restore. |
| endpoint | text |  | true |  |  | Specifies the connection endpoint for the primary instance of the DB cluster. |
| engine | text |  | true |  |  | The name of the database engine to be used for this DB cluster. |
| engine_version | text |  | true |  |  | Indicates the database engine version. |
| hosted_zone_id | text |  | true |  |  | Specifies the ID that Amazon Route 53 assigns when you create a hosted zone. |
| kms_key_id | text |  | true |  |  | The AWS KMS key identifier for the encrypted cluster. |
| latest_restorable_time | timestamp with time zone |  | true |  |  | Specifies the latest time to which a database can be restored with point-in-time restore. |
| master_user_name | text |  | true |  |  | Contains the master username for the cluster. |
| multi_az | boolean |  | true |  |  | Specifies whether the cluster has instances in multiple Availability Zones, or not. |
| percent_progress | text |  | true |  |  | Specifies the progress of the operation as a percentage. |
| port | bigint |  | true |  |  | Specifies the port that the database engine is listening on. |
| preferred_backup_window | text |  | true |  |  | Specifies the daily time range during which automated backups are created. |
| preferred_maintenance_window | text |  | true |  |  | Specifies the weekly time range during which system maintenance can occur |
| reader_endpoint | text |  | true |  |  | The reader endpoint for the DB cluster. |
| replication_source_identifier | text |  | true |  |  | Contains the identifier of the source cluster if this cluster is a secondary cluster. |
| storage_encrypted | boolean |  | true |  |  | Specifies whether the cluster is encrypted, or not. |
| associated_roles | jsonb |  | true |  |  | A list of AWS IAM roles that are associated with the cluster. |
| availability_zones | jsonb |  | true |  |  | A list of Availability Zones (AZs) where instances in the cluster can be created. |
| enabled_cloudwatch_logs_exports | jsonb |  | true |  |  | A list of log types that this cluster is configured to export to Amazon CloudWatch Logs. |
| members | jsonb |  | true |  |  | A list of instances that make up the cluster. |
| read_replica_identifiers | jsonb |  | true |  |  | A list of identifiers of the read replicas associated with this cluster. |
| vpc_security_groups | jsonb |  | true |  |  | A list of VPC security groups that the DB cluster belongs to. |
| tags_src | jsonb |  | true |  |  | A list of tags attached to the Cluster. |
| tags | jsonb |  | true |  |  | A map of tags for the resource. |
| title | text |  | true |  |  | Title of the resource. |
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

![er](aws.aws_docdb_cluster.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
