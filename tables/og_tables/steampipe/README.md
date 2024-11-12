# steampipe

## Tables

| Name | Columns | Comment | Type |
| ---- | ------- | ------- | ---- |
| [steampipe_command.cache](steampipe_command.cache.md) | 1 |  | FOREIGN TABLE |
| [steampipe_command.scan_metadata](steampipe_command.scan_metadata.md) | 10 |  | FOREIGN TABLE |
| [steampipe_internal.steampipe_plugin_limiter](steampipe_internal.steampipe_plugin_limiter.md) | 13 |  | BASE TABLE |
| [steampipe_internal.steampipe_settings](steampipe_internal.steampipe_settings.md) | 2 |  | FOREIGN TABLE |
| [steampipe_internal.steampipe_scan_metadata](steampipe_internal.steampipe_scan_metadata.md) | 10 |  | FOREIGN TABLE |
| [steampipe_internal.steampipe_scan_metadata_summary](steampipe_internal.steampipe_scan_metadata_summary.md) | 6 |  | FOREIGN TABLE |
| [steampipe_internal.steampipe_connection](steampipe_internal.steampipe_connection.md) | 16 |  | BASE TABLE |
| [steampipe_internal.steampipe_connection_state](steampipe_internal.steampipe_connection_state.md) | 16 |  | BASE TABLE |
| [steampipe_internal.steampipe_plugin](steampipe_internal.steampipe_plugin.md) | 8 |  | BASE TABLE |
| [steampipe_internal.steampipe_server_settings](steampipe_internal.steampipe_server_settings.md) | 6 |  | BASE TABLE |
| [steampipe_internal.steampipe_plugin_column](steampipe_internal.steampipe_plugin_column.md) | 9 |  | BASE TABLE |
| [aws.aws_wellarchitected_workload_share](aws.aws_wellarchitected_workload_share.md) | 16 | AWS Well-Architected Workload Share | FOREIGN TABLE |
| [aws.aws_pricing_product](aws.aws_pricing_product.md) | 19 | AWS Pricing Product | FOREIGN TABLE |
| [aws.aws_identitystore_group](aws.aws_identitystore_group.md) | 14 | AWS Identity Store Group | FOREIGN TABLE |
| [aws.aws_elastic_beanstalk_environment](aws.aws_elastic_beanstalk_environment.md) | 35 | AWS ElasticBeanstalk Environment | FOREIGN TABLE |
| [aws.aws_cost_by_service_usage_type_monthly](aws.aws_cost_by_service_usage_type_monthly.md) | 27 | AWS Cost Explorer - Cost by Service and Usage Type (Monthly) | FOREIGN TABLE |
| [aws.aws_vpc_security_group](aws.aws_vpc_security_group.md) | 20 | AWS VPC Security Group | FOREIGN TABLE |
| [aws.aws_inspector2_member](aws.aws_inspector2_member.md) | 10 | AWS Inspector2 Member | FOREIGN TABLE |
| [aws.aws_elasticache_subnet_group](aws.aws_elasticache_subnet_group.md) | 15 | AWS ElastiCache Subnet Group | FOREIGN TABLE |
| [aws.aws_ecs_container_instance](aws.aws_ecs_container_instance.md) | 28 | AWS ECS Container Instance | FOREIGN TABLE |
| [aws.aws_rds_db_instance_automated_backup](aws.aws_rds_db_instance_automated_backup.md) | 37 | AWS RDS DB Instance Automated Backup | FOREIGN TABLE |
| [aws.aws_api_gatewayv2_integration](aws.aws_api_gatewayv2_integration.md) | 32 | AWS API Gateway Version 2 Integration | FOREIGN TABLE |
| [aws.aws_emr_block_public_access_configuration](aws.aws_emr_block_public_access_configuration.md) | 13 | AWS EMR Block Public Access Configuration | FOREIGN TABLE |
| [aws.aws_cost_by_service_usage_type_daily](aws.aws_cost_by_service_usage_type_daily.md) | 27 | AWS Cost Explorer - Cost by Service and Usage Type (Daily) | FOREIGN TABLE |
| [aws.aws_docdb_cluster_instance](aws.aws_docdb_cluster_instance.md) | 45 | AWS DocumentDB Cluster Instance | FOREIGN TABLE |
| [aws.aws_memorydb_cluster](aws.aws_memorydb_cluster.md) | 13 | AWS MemoryDb Cluster | FOREIGN TABLE |
| [aws.aws_emr_instance](aws.aws_emr_instance.md) | 25 | AWS EMR Instance | FOREIGN TABLE |
| [aws.aws_securityhub_product](aws.aws_securityhub_product.md) | 19 | AWS Securityhub Product | FOREIGN TABLE |
| [aws.aws_securityhub_member](aws.aws_securityhub_member.md) | 16 | AWS Securityhub Member | FOREIGN TABLE |
| [aws.aws_appconfig_application](aws.aws_appconfig_application.md) | 15 | AWS AppConfig Application | FOREIGN TABLE |
| [aws.aws_directory_service_certificate](aws.aws_directory_service_certificate.md) | 18 | AWS Directory Service Certificate | FOREIGN TABLE |
| [aws.aws_rds_db_recommendation](aws.aws_rds_db_recommendation.md) | 29 | AWS RDS DB Recommendation | FOREIGN TABLE |
| [aws.aws_guardduty_member](aws.aws_guardduty_member.md) | 16 | AWS GuardDuty Member | FOREIGN TABLE |
| [aws.aws_ses_domain_identity](aws.aws_ses_domain_identity.md) | 17 | AWS SES Domain Identity | FOREIGN TABLE |
| [aws.aws_iam_service_specific_credential](aws.aws_iam_service_specific_credential.md) | 15 | AWS IAM User Service Specific Credential | FOREIGN TABLE |
| [aws.aws_ec2_launch_configuration](aws.aws_ec2_launch_configuration.md) | 32 | AWS EC2 Launch Configuration | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_write_iops_daily](aws.aws_rds_db_instance_metric_write_iops_daily.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - Write IOPS (Daily) | FOREIGN TABLE |
| [aws.aws_cloudfront_distribution](aws.aws_cloudfront_distribution.md) | 39 | AWS CloudFront Distribution | FOREIGN TABLE |
| [aws.aws_codebuild_build](aws.aws_codebuild_build.md) | 41 | AWS CodeBuild Build | FOREIGN TABLE |
| [aws.aws_vpc_nat_gateway](aws.aws_vpc_nat_gateway.md) | 23 | AWS VPC Network Address Translation Gateway | FOREIGN TABLE |
| [aws.aws_iam_group](aws.aws_iam_group.md) | 19 | AWS IAM Group | FOREIGN TABLE |
| [aws.aws_iam_account_summary](aws.aws_iam_account_summary.md) | 41 | AWS IAM Account Summary | FOREIGN TABLE |
| [aws.aws_backup_region_settings](aws.aws_backup_region_settings.md) | 10 | AWS Backup Region Settings | FOREIGN TABLE |
| [aws.aws_glue_catalog_database](aws.aws_glue_catalog_database.md) | 18 | AWS Glue Catalog Database | FOREIGN TABLE |
| [aws.aws_codedeploy_deployment_group](aws.aws_codedeploy_deployment_group.md) | 35 | AWS CodeDeploy DeploymentGroup | FOREIGN TABLE |
| [aws.aws_account](aws.aws_account.md) | 22 | AWS Account | FOREIGN TABLE |
| [aws.aws_ec2_instance_availability](aws.aws_ec2_instance_availability.md) | 13 | AWS EC2 Instance Availability | FOREIGN TABLE |
| [aws.aws_guardduty_publishing_destination](aws.aws_guardduty_publishing_destination.md) | 18 | AWS GuardDuty Publishing Destination | FOREIGN TABLE |
| [aws.aws_storagegateway_storage_gateway](aws.aws_storagegateway_storage_gateway.md) | 14 | AWS StorageGateway StorageGateway | FOREIGN TABLE |
| [aws.aws_sagemaker_endpoint_configuration](aws.aws_sagemaker_endpoint_configuration.md) | 18 | AWS Sagemaker Endpoint Configuration | FOREIGN TABLE |
| [aws.aws_cost_by_service_monthly](aws.aws_cost_by_service_monthly.md) | 26 | AWS Cost Explorer - Cost by Service (Monthly) | FOREIGN TABLE |
| [aws.aws_s3_multi_region_access_point](aws.aws_s3_multi_region_access_point.md) | 16 | AWS S3 Multi Region Access Point | FOREIGN TABLE |
| [aws.aws_ram_principal_association](aws.aws_ram_principal_association.md) | 20 | AWS RAM Principal Association | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_cpu_utilization_daily](aws.aws_rds_db_instance_metric_cpu_utilization_daily.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - CPU Utilization (Daily) | FOREIGN TABLE |
| [aws.aws_route53_traffic_policy](aws.aws_route53_traffic_policy.md) | 16 | AWS Route53 Traffic Policy | FOREIGN TABLE |
| [aws.aws_dynamodb_table](aws.aws_dynamodb_table.md) | 34 | AWS DynamoDB Table | FOREIGN TABLE |
| [aws.aws_rds_db_engine_version](aws.aws_rds_db_engine_version.md) | 39 | AWS RDS DB Engine Version | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_cache_hits_hourly](aws.aws_elasticache_redis_metric_cache_hits_hourly.md) | 18 | AWS Elasticache Redis CacheHits metric (Hourly) | FOREIGN TABLE |
| [aws.aws_guardduty_detector](aws.aws_guardduty_detector.md) | 21 | AWS GuardDuty Detector | FOREIGN TABLE |
| [aws.aws_lambda_version](aws.aws_lambda_version.md) | 49 | AWS Lambda Version | FOREIGN TABLE |
| [aws.aws_cost_forecast_daily](aws.aws_cost_forecast_daily.md) | 11 | AWS Cost Explorer - Cost Forecast (Daily) | FOREIGN TABLE |
| [aws.aws_inspector2_coverage_statistics](aws.aws_inspector2_coverage_statistics.md) | 6 | AWS Inspector2 Coverage Statistics | FOREIGN TABLE |
| [aws.aws_ecr_registry](aws.aws_ecr_registry.md) | 11 | AWS ECR Registry | FOREIGN TABLE |
| [aws.aws_health_affected_entity](aws.aws_health_affected_entity.md) | 15 | AWS Health Affected Entity | FOREIGN TABLE |
| [aws.aws_msk_serverless_cluster](aws.aws_msk_serverless_cluster.md) | 21 | AWS Serverless Managed Streaming for Apache Kafka | FOREIGN TABLE |
| [aws.aws_organizations_organizational_unit](aws.aws_organizations_organizational_unit.md) | 16 | AWS Organizations Organizational Unit | FOREIGN TABLE |
| [aws.aws_resourcegroups_group](aws.aws_resourcegroups_group.md) | 13 | AWS ResourceGroups Group | FOREIGN TABLE |
| [aws.aws_user_effective_access](aws.aws_user_effective_access.md) | 14 | AWS User Effective Access | FOREIGN TABLE |
| [aws.aws_ec2_autoscaling_group](aws.aws_ec2_autoscaling_group.md) | 49 | AWS EC2 Autoscaling Group | FOREIGN TABLE |
| [aws.aws_ecr_registry_scanning_configuration](aws.aws_ecr_registry_scanning_configuration.md) | 11 | AWS ECR Registry Scanning Configuration | FOREIGN TABLE |
| [aws.aws_wafregional_rule_group](aws.aws_wafregional_rule_group.md) | 17 | AWS WAF Regional Rule Group | FOREIGN TABLE |
| [aws.aws_cloudtrail_import](aws.aws_cloudtrail_import.md) | 18 | AWS CloudTrail Import | FOREIGN TABLE |
| [aws.aws_codeartifact_repository](aws.aws_codeartifact_repository.md) | 23 | AWS CodeArtifact Repository | FOREIGN TABLE |
| [aws.aws_ec2_key_pair](aws.aws_ec2_key_pair.md) | 16 | AWS EC2 Key Pair | FOREIGN TABLE |
| [aws.aws_resource_explorer_index](aws.aws_resource_explorer_index.md) | 9 | AWS Resource Explorer Index | FOREIGN TABLE |
| [aws.aws_appstream_fleet](aws.aws_appstream_fleet.md) | 36 | AWS AppStream Fleet | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_get_type_cmds_hourly](aws.aws_elasticache_redis_metric_get_type_cmds_hourly.md) | 18 | AWS Elasticache Redis GetTypeCmds metric(Hourly) | FOREIGN TABLE |
| [aws.aws_inspector_assessment_run](aws.aws_inspector_assessment_run.md) | 25 | AWS Inspector Assessment Run | FOREIGN TABLE |
| [aws.aws_glacier_vault](aws.aws_glacier_vault.md) | 23 | AWS Glacier Vault | FOREIGN TABLE |
| [aws.aws_inspector_assessment_target](aws.aws_inspector_assessment_target.md) | 15 | AWS Inspector Assessment Target | FOREIGN TABLE |
| [aws.aws_cloudformation_stack_resource](aws.aws_cloudformation_stack_resource.md) | 20 | AWS CloudFormation Stack Resource | FOREIGN TABLE |
| [aws.aws_ecs_task](aws.aws_ecs_task.md) | 48 | AWS ECS Task | FOREIGN TABLE |
| [aws.aws_auditmanager_framework](aws.aws_auditmanager_framework.md) | 26 | AWS Audit Manager Framework | FOREIGN TABLE |
| [aws.aws_securitylake_subscriber](aws.aws_securitylake_subscriber.md) | 24 | AWS Security Lake Subscriber | FOREIGN TABLE |
| [aws.aws_redshift_cluster](aws.aws_redshift_cluster.md) | 62 | AWS Redshift Cluster | FOREIGN TABLE |
| [aws.aws_service_discovery_instance](aws.aws_service_discovery_instance.md) | 19 | AWS Service Discovery Instance | FOREIGN TABLE |
| [aws.aws_dynamodb_global_table](aws.aws_dynamodb_global_table.md) | 15 | AWS DynamoDB Global Table | FOREIGN TABLE |
| [aws.aws_neptune_db_cluster](aws.aws_neptune_db_cluster.md) | 48 | AWS Neptune DB Cluster | FOREIGN TABLE |
| [aws.aws_wellarchitected_check_summary](aws.aws_wellarchitected_check_summary.md) | 21 | AWS Well-Architected Check Summary | FOREIGN TABLE |
| [aws.aws_codedeploy_app](aws.aws_codedeploy_app.md) | 19 | AWS CodeDeploy Application | FOREIGN TABLE |
| [aws.aws_elasticsearch_domain](aws.aws_elasticsearch_domain.md) | 38 | AWS Elasticsearch Domain | FOREIGN TABLE |
| [aws.aws_ssm_managed_instance_compliance](aws.aws_ssm_managed_instance_compliance.md) | 19 | AWS SSM Managed Instance Compliance | FOREIGN TABLE |
| [aws.aws_ec2_load_balancer_listener](aws.aws_ec2_load_balancer_listener.md) | 18 | AWS EC2 Load Balancer Listener | FOREIGN TABLE |
| [aws.aws_ssm_patch_baseline](aws.aws_ssm_patch_baseline.md) | 27 | AWS SSM Patch Baseline | FOREIGN TABLE |
| [aws.aws_cost_by_account_monthly](aws.aws_cost_by_account_monthly.md) | 26 | AWS Cost Explorer - Cost by Linked Account (Monthly) | FOREIGN TABLE |
| [aws.aws_lambda_function](aws.aws_lambda_function.md) | 48 | AWS Lambda Function | FOREIGN TABLE |
| [aws.aws_networkfirewall_rule_group](aws.aws_networkfirewall_rule_group.md) | 24 | AWS Network Firewall Rule Group | FOREIGN TABLE |
| [aws.aws_cloudfront_function](aws.aws_cloudfront_function.md) | 16 | AWS CloudFront Function | FOREIGN TABLE |
| [aws.aws_vpc_route_table](aws.aws_vpc_route_table.md) | 18 | AWS VPC Route table | FOREIGN TABLE |
| [aws.aws_grafana_workspace](aws.aws_grafana_workspace.md) | 14 | AWS Grafana Workspace | FOREIGN TABLE |
| [aws.aws_config_conformance_pack](aws.aws_config_conformance_pack.md) | 18 | AWS Config Conformance Pack | FOREIGN TABLE |
| [aws.aws_networkfirewall_firewall](aws.aws_networkfirewall_firewall.md) | 25 | AWS Network Firewall Firewall | FOREIGN TABLE |
| [aws.aws_securityhub_hub](aws.aws_securityhub_hub.md) | 15 | AWS Security Hub | FOREIGN TABLE |
| [aws.aws_ec2_ipam_pool](aws.aws_ec2_ipam_pool.md) | 13 | AWS EC2 IpamPool | FOREIGN TABLE |
| [aws.aws_ec2_instance_type](aws.aws_ec2_instance_type.md) | 30 | AWS EC2 Instance Type | FOREIGN TABLE |
| [aws.aws_redshiftserverless_workgroup](aws.aws_redshiftserverless_workgroup.md) | 25 | AWS Redshift Serverless Workgroup | FOREIGN TABLE |
| [aws.aws_securityhub_standards_subscription](aws.aws_securityhub_standards_subscription.md) | 19 | AWS Security Hub Standards Subscription | FOREIGN TABLE |
| [aws.aws_inspector2_finding](aws.aws_inspector2_finding.md) | 57 | AWS Inspector2 Finding | FOREIGN TABLE |
| [aws.aws_vpc_vpn_gateway](aws.aws_vpc_vpn_gateway.md) | 18 | AWS VPC VPN Gateway | FOREIGN TABLE |
| [aws.aws_auditmanager_assessment](aws.aws_auditmanager_assessment.md) | 26 | AWS Audit Manager Assessment | FOREIGN TABLE |
| [aws.aws_fsx_snapshot](aws.aws_fsx_snapshot.md) | 14 | AWS FSX Snapshot | FOREIGN TABLE |
| [aws.aws_guardduty_threat_intel_set](aws.aws_guardduty_threat_intel_set.md) | 17 | AWS GuardDuty ThreatIntelSet | FOREIGN TABLE |
| [aws.aws_codebuild_source_credential](aws.aws_codebuild_source_credential.md) | 13 | AWS CodeBuild Source Credential | FOREIGN TABLE |
| [aws.aws_cloudwatch_log_metric_filter](aws.aws_cloudwatch_log_metric_filter.md) | 17 | AWS CloudWatch Log Metric Filter | FOREIGN TABLE |
| [aws.aws_glue_data_quality_ruleset](aws.aws_glue_data_quality_ruleset.md) | 19 | AWS Glue Data Quality Ruleset | FOREIGN TABLE |
| [aws.aws_dynamodb_global_secondary_index](aws.aws_dynamodb_global_secondary_index.md) | 12 | AWS DynamoDb GlobalSecondaryIndex | FOREIGN TABLE |
| [aws.aws_kinesis_firehose_delivery_stream](aws.aws_kinesis_firehose_delivery_stream.md) | 24 | AWS Kinesis Firehose Delivery Stream | FOREIGN TABLE |
| [aws.aws_s3_object](aws.aws_s3_object.md) | 55 | List AWS S3 Objects in S3 buckets by bucket name. | FOREIGN TABLE |
| [aws.aws_rds_db_instance](aws.aws_rds_db_instance.md) | 81 | AWS RDS DB Instance | FOREIGN TABLE |
| [aws.aws_cost_by_record_type_daily](aws.aws_cost_by_record_type_daily.md) | 27 | AWS Cost Explorer - Cost by Record Type (Daily) | FOREIGN TABLE |
| [aws.aws_rds_db_cluster_parameter_group](aws.aws_rds_db_cluster_parameter_group.md) | 17 | AWS RDS DB Cluster Parameter Group | FOREIGN TABLE |
| [aws.aws_glue_data_catalog_encryption_settings](aws.aws_glue_data_catalog_encryption_settings.md) | 10 | AWS Glue Data Catalog Encryption Settings | FOREIGN TABLE |
| [aws.aws_ec2_classic_load_balancer](aws.aws_ec2_classic_load_balancer.md) | 45 | AWS EC2 Classic Load Balancer | FOREIGN TABLE |
| [aws.aws_redshift_event_subscription](aws.aws_redshift_event_subscription.md) | 22 | AWS Redshift Event Subscription | FOREIGN TABLE |
| [aws.aws_appstream_application](aws.aws_appstream_application.md) | 13 | AWS AppStream Application | FOREIGN TABLE |
| [aws.aws_inspector_finding](aws.aws_inspector_finding.md) | 30 | AWS Inspector Finding | FOREIGN TABLE |
| [aws.aws_vpc_verified_access_group](aws.aws_vpc_verified_access_group.md) | 20 | AWS VPC Verified Access Group | FOREIGN TABLE |
| [aws.aws_ec2_target_group](aws.aws_ec2_target_group.md) | 30 | AWS EC2 Target Group | FOREIGN TABLE |
| [aws.aws_organizations_root](aws.aws_organizations_root.md) | 14 | AWS Organizations Root | FOREIGN TABLE |
| [aws.aws_iam_account_password_policy](aws.aws_iam_account_password_policy.md) | 18 | AWS IAM Account Password Policy | FOREIGN TABLE |
| [aws.aws_mq_broker](aws.aws_mq_broker.md) | 43 | AWS MQ Broker | FOREIGN TABLE |
| [aws.aws_ses_email_identity](aws.aws_ses_email_identity.md) | 15 | AWS SES Email Identity | FOREIGN TABLE |
| [aws.aws_lambda_alias](aws.aws_lambda_alias.md) | 19 | AWS Lambda Alias | FOREIGN TABLE |
| [aws.aws_securityhub_standards_control](aws.aws_securityhub_standards_control.md) | 19 | AWS Security Hub Standards Control | FOREIGN TABLE |
| [aws.aws_vpc_peering_connection](aws.aws_vpc_peering_connection.md) | 29 | AWS VPC Peering Connection | FOREIGN TABLE |
| [aws.aws_route53_record](aws.aws_route53_record.md) | 24 | AWS Route53 Record | FOREIGN TABLE |
| [aws.aws_servicequotas_service_quota_change_request](aws.aws_servicequotas_service_quota_change_request.md) | 26 | AWS ServiceQuotas Service Quota Change Request | FOREIGN TABLE |
| [aws.aws_oam_link](aws.aws_oam_link.md) | 17 | AWS OAM Link | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_read_iops_hourly](aws.aws_rds_db_instance_metric_read_iops_hourly.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - Read IOPS (Hourly) | FOREIGN TABLE |
| [aws.aws_batch_job](aws.aws_batch_job.md) | 13 | AWS Batch Job | FOREIGN TABLE |
| [aws.aws_ec2_managed_prefix_list_entry](aws.aws_ec2_managed_prefix_list_entry.md) | 8 | AWS EC2 Managed Prefix List Entry | FOREIGN TABLE |
| [aws.aws_eks_addon](aws.aws_eks_addon.md) | 20 | AWS EKS Addon | FOREIGN TABLE |
| [aws.aws_ec2_regional_settings](aws.aws_ec2_regional_settings.md) | 12 | AWS EC2 Regional Settings | FOREIGN TABLE |
| [aws.aws_ssoadmin_managed_policy_attachment](aws.aws_ssoadmin_managed_policy_attachment.md) | 13 | AWS SSO Managed Policy Attachment | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_write_iops_hourly](aws.aws_rds_db_instance_metric_write_iops_hourly.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - Write IOPS (Hourly) | FOREIGN TABLE |
| [aws.aws_ses_configuration_set](aws.aws_ses_configuration_set.md) | 12 | AWS SES ConfigurationSet | FOREIGN TABLE |
| [aws.aws_api_gatewayv2_api](aws.aws_api_gatewayv2_api.md) | 19 | AWS API Gateway Version 2 API | FOREIGN TABLE |
| [aws.aws_wellarchitected_lens_review](aws.aws_wellarchitected_lens_review.md) | 20 | AWS Well-Architected Lens Review | FOREIGN TABLE |
| [aws.aws_ec2_application_load_balancer](aws.aws_ec2_application_load_balancer.md) | 27 | AWS EC2 Application Load Balancer | FOREIGN TABLE |
| [aws.aws_oam_sink](aws.aws_oam_sink.md) | 14 | AWS OAM Sink | FOREIGN TABLE |
| [aws.aws_efs_access_point](aws.aws_efs_access_point.md) | 21 | AWS EFS Access Point | FOREIGN TABLE |
| [aws.aws_redshift_parameter_group](aws.aws_redshift_parameter_group.md) | 16 | AWS Redshift Parameter Group | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_read_iops](aws.aws_rds_db_instance_metric_read_iops.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - Read IOPS | FOREIGN TABLE |
| [aws.aws_route53_traffic_policy_instance](aws.aws_route53_traffic_policy_instance.md) | 19 | AWS Route53 Traffic Policy Instance | FOREIGN TABLE |
| [aws.aws_api_gatewayv2_route](aws.aws_api_gatewayv2_route.md) | 24 | AWS API Gateway Version 2 Route | FOREIGN TABLE |
| [aws.aws_waf_rule](aws.aws_waf_rule.md) | 16 | AWS WAF Rule | FOREIGN TABLE |
| [aws.aws_ec2_localgateway](aws.aws_ec2_localgateway.md) | 12 | AWS EC2 LocalGateway | FOREIGN TABLE |
| [aws.aws_sfn_state_machine_execution](aws.aws_sfn_state_machine_execution.md) | 21 | AWS Step Functions State Machine Execution | FOREIGN TABLE |
| [aws.aws_cost_by_service_daily](aws.aws_cost_by_service_daily.md) | 27 | AWS Cost Explorer - Cost by Service (Daily) | FOREIGN TABLE |
| [aws.aws_codepipeline_pipeline](aws.aws_codepipeline_pipeline.md) | 21 | AWS Codepipeline Pipeline | FOREIGN TABLE |
| [aws.aws_cloudtrail_event_data_store](aws.aws_cloudtrail_event_data_store.md) | 20 | AWS CloudTrail Event Data Store | FOREIGN TABLE |
| [aws.aws_timestream_database](aws.aws_timestream_database.md) | 13 | AWS Timestream Database | FOREIGN TABLE |
| [aws.aws_dlm_lifecycle_policy](aws.aws_dlm_lifecycle_policy.md) | 21 | AWS DLM Lifecycle Policy | FOREIGN TABLE |
| [aws.aws_ssm_document_permission](aws.aws_ssm_document_permission.md) | 13 | AWS SSM Document Permission | FOREIGN TABLE |
| [aws.aws_backup_framework](aws.aws_backup_framework.md) | 19 | AWS Backup Framework | FOREIGN TABLE |
| [aws.aws_amp_workspace](aws.aws_amp_workspace.md) | 13 | AWS AMP Workspace | FOREIGN TABLE |
| [aws.aws_vpc_endpoint](aws.aws_vpc_endpoint.md) | 28 | AWS VPC Endpoint | FOREIGN TABLE |
| [aws.aws_kinesis_video_stream](aws.aws_kinesis_video_stream.md) | 20 | AWS Kinesis Video Stream | FOREIGN TABLE |
| [aws.aws_ssm_inventory_entry](aws.aws_ssm_inventory_entry.md) | 14 | AWS SSM Inventory Entry | FOREIGN TABLE |
| [aws.aws_ram_resource_association](aws.aws_ram_resource_association.md) | 20 | AWS RAM Resource Association | FOREIGN TABLE |
| [aws.aws_cloudfront_response_headers_policy](aws.aws_cloudfront_response_headers_policy.md) | 17 | AWS Cloudfront Response Headers Policy | FOREIGN TABLE |
| [aws.aws_cloudfront_origin_request_policy](aws.aws_cloudfront_origin_request_policy.md) | 18 | AWS CloudFront Origin Request Policy | FOREIGN TABLE |
| [aws.aws_wafregional_rule](aws.aws_wafregional_rule.md) | 16 | AWS WAF Regional Rule | FOREIGN TABLE |
| [aws.aws_s3_bucket](aws.aws_s3_bucket.md) | 33 | AWS S3 Bucket | FOREIGN TABLE |
| [aws.aws_api_gateway_api_key](aws.aws_api_gateway_api_key.md) | 21 | AWS API Gateway API Key | FOREIGN TABLE |
| [aws.aws_waf_rate_based_rule](aws.aws_waf_rate_based_rule.md) | 18 | AWS WAF Rate Based Rule | FOREIGN TABLE |
| [aws.aws_elasticache_reserved_cache_node](aws.aws_elasticache_reserved_cache_node.md) | 23 | AWS ElastiCache Reserved Cache Node | FOREIGN TABLE |
| [aws.aws_rds_db_proxy](aws.aws_rds_db_proxy.md) | 26 | AWS RDS DB Proxy | FOREIGN TABLE |
| [aws.aws_ec2_network_load_balancer](aws.aws_ec2_network_load_balancer.md) | 27 | AWS EC2 Network Load Balancer | FOREIGN TABLE |
| [aws.aws_ssm_parameter](aws.aws_ssm_parameter.md) | 25 | AWS SSM Parameter | FOREIGN TABLE |
| [aws.aws_appautoscaling_policy](aws.aws_appautoscaling_policy.md) | 19 | AWS Application Auto Scaling Policy | FOREIGN TABLE |
| [aws.aws_wellarchitected_lens](aws.aws_wellarchitected_lens.md) | 22 | AWS Well-Architected Lens | FOREIGN TABLE |
| [aws.aws_backup_selection](aws.aws_backup_selection.md) | 19 | AWS Backup Selection | FOREIGN TABLE |
| [aws.aws_securityhub_action_target](aws.aws_securityhub_action_target.md) | 13 | AWS Security Hub Action Target | FOREIGN TABLE |
| [aws.aws_vpc_verified_access_instance](aws.aws_vpc_verified_access_instance.md) | 16 | AWS VPC Verified Access Instance | FOREIGN TABLE |
| [aws.aws_api_gatewayv2_stage](aws.aws_api_gatewayv2_stage.md) | 28 | AWS API Gateway Version 2 Stage | FOREIGN TABLE |
| [aws.aws_vpc_eip](aws.aws_vpc_eip.md) | 26 | AWS VPC Elastic IP | FOREIGN TABLE |
| [aws.aws_servicecatalog_product](aws.aws_servicecatalog_product.md) | 27 | AWS Service Catalog Product | FOREIGN TABLE |
| [aws.aws_ec2_instance_metric_cpu_utilization_daily](aws.aws_ec2_instance_metric_cpu_utilization_daily.md) | 18 | AWS EC2 Instance Cloudwatch Metrics - CPU Utilization (Daily) | FOREIGN TABLE |
| [aws.aws_cloudformation_stack_set](aws.aws_cloudformation_stack_set.md) | 29 | AWS CloudFormation StackSet | FOREIGN TABLE |
| [aws.aws_ec2_launch_template](aws.aws_ec2_launch_template.md) | 20 | AWS EC2 LaunchTemplate | FOREIGN TABLE |
| [aws.aws_securityhub_finding_aggregator](aws.aws_securityhub_finding_aggregator.md) | 13 | AWS Security Hub Finding Aggregator | FOREIGN TABLE |
| [aws.aws_athena_query_execution](aws.aws_athena_query_execution.md) | 41 | AWS Athena Query Execution | FOREIGN TABLE |
| [aws.aws_organizations_account](aws.aws_organizations_account.md) | 20 | AWS Organizations Account | FOREIGN TABLE |
| [aws.aws_sfn_state_machine](aws.aws_sfn_state_machine.md) | 21 | AWS Step Functions State Machine | FOREIGN TABLE |
| [aws.aws_redshiftserverless_snapshot](aws.aws_redshiftserverless_snapshot.md) | 13 | AWS RedshiftServerless Snapshot | FOREIGN TABLE |
| [aws.aws_ec2_client_vpn_endpoint](aws.aws_ec2_client_vpn_endpoint.md) | 32 | AWS EC2 Client VPN Endpoint | FOREIGN TABLE |
| [aws.aws_neptune_database](aws.aws_neptune_database.md) | 14 | AWS Neptune Database | FOREIGN TABLE |
| [aws.aws_sns_topic](aws.aws_sns_topic.md) | 38 | AWS SNS Topic | FOREIGN TABLE |
| [aws.aws_wellarchitected_notification](aws.aws_wellarchitected_notification.md) | 15 | AWS Well-Architected Notification | FOREIGN TABLE |
| [aws.aws_ssm_document](aws.aws_ssm_document.md) | 42 | AWS SSM Document | FOREIGN TABLE |
| [aws.aws_rds_db_event_subscription](aws.aws_rds_db_event_subscription.md) | 20 | AWS RDS DB Event Subscription | FOREIGN TABLE |
| [aws.aws_ec2_load_balancer_listener_rule](aws.aws_ec2_load_balancer_listener_rule.md) | 11 | AWS ElasticLoadBalancingV2 Rule | FOREIGN TABLE |
| [aws.aws_appstream_image](aws.aws_appstream_image.md) | 28 | AWS AppStream Image | FOREIGN TABLE |
| [aws.aws_wafv2_rule_group](aws.aws_wafv2_rule_group.md) | 21 | AWS WAFv2 Rule Group | FOREIGN TABLE |
| [aws.aws_ecr_image](aws.aws_ecr_image.md) | 20 | AWS ECR Image | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_connections_hourly](aws.aws_rds_db_instance_metric_connections_hourly.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - DB Connections (Hourly) | FOREIGN TABLE |
| [aws.aws_kms_key_rotation](aws.aws_kms_key_rotation.md) | 13 | AWS KMS Key Rotation | FOREIGN TABLE |
| [aws.aws_batch_compute_environment](aws.aws_batch_compute_environment.md) | 14 | AWS Batch ComputeEnvironment | FOREIGN TABLE |
| [aws.aws_service_discovery_namespace](aws.aws_service_discovery_namespace.md) | 21 | AWS Service Discovery Namespace | FOREIGN TABLE |
| [aws.aws_keyspaces_keyspace](aws.aws_keyspaces_keyspace.md) | 13 | AWS Keyspaces Keyspace | FOREIGN TABLE |
| [aws.aws_neptune_db_cluster_snapshot](aws.aws_neptune_db_cluster_snapshot.md) | 31 | AWS Neptune DB Cluster Snapshot | FOREIGN TABLE |
| [aws.aws_service_discovery_service](aws.aws_service_discovery_service.md) | 24 | AWS Service Discovery Service | FOREIGN TABLE |
| [aws.aws_codecommit_repository](aws.aws_codecommit_repository.md) | 20 | AWS CodeCommit Repository | FOREIGN TABLE |
| [aws.aws_cloudwatch_metric](aws.aws_cloudwatch_metric.md) | 13 | AWS CloudWatch Metric | FOREIGN TABLE |
| [aws.aws_efs_mount_target](aws.aws_efs_mount_target.md) | 21 | AWS EFS Mount Target | FOREIGN TABLE |
| [aws.aws_kinesis_stream](aws.aws_kinesis_stream.md) | 24 | AWS Kinesis Stream | FOREIGN TABLE |
| [aws.aws_ebs_volume](aws.aws_ebs_volume.md) | 29 | AWS EBS Volume | FOREIGN TABLE |
| [aws.aws_redshiftserverless_namespace](aws.aws_redshiftserverless_namespace.md) | 23 | AWS Redshift Serverless Namespace | FOREIGN TABLE |
| [aws.aws_organizations_policy_target](aws.aws_organizations_policy_target.md) | 18 | AWS Organizations Policy Target | FOREIGN TABLE |
| [aws.aws_wafv2_ip_set](aws.aws_wafv2_ip_set.md) | 20 | AWS WAFv2 IP Set | FOREIGN TABLE |
| [aws.aws_ssm_inventory](aws.aws_ssm_inventory.md) | 15 | AWS SSM Inventory | FOREIGN TABLE |
| [aws.aws_resource_explorer_search](aws.aws_resource_explorer_search.md) | 16 | AWS Resource Explorer Search | FOREIGN TABLE |
| [aws.aws_dax_subnet_group](aws.aws_dax_subnet_group.md) | 14 | AWS DAX Subnet Group | FOREIGN TABLE |
| [aws.aws_ecs_task_set](aws.aws_ecs_task_set.md) | 13 | AWS ECS TaskSet | FOREIGN TABLE |
| [aws.aws_ec2_transit_gateway_route](aws.aws_ec2_transit_gateway_route.md) | 16 | AWS EC2 Transit Gateway Route | FOREIGN TABLE |
| [aws.aws_redshift_subnet_group](aws.aws_redshift_subnet_group.md) | 17 | AWS Redshift Subnet Group | FOREIGN TABLE |
| [aws.aws_vpc_route](aws.aws_vpc_route.md) | 26 | AWS VPC Route | FOREIGN TABLE |
| [aws.aws_efs_file_system](aws.aws_efs_file_system.md) | 29 | AWS Elastic File System | FOREIGN TABLE |
| [aws.aws_media_store_container](aws.aws_media_store_container.md) | 20 | AWS Media Store Container | FOREIGN TABLE |
| [aws.aws_networkfirewall_firewall_policy](aws.aws_networkfirewall_firewall_policy.md) | 23 | AWS Network Firewall Policy | FOREIGN TABLE |
| [aws.aws_iam_user](aws.aws_iam_user.md) | 27 | AWS IAM User | FOREIGN TABLE |
| [aws.aws_cost_forecast_monthly](aws.aws_cost_forecast_monthly.md) | 11 | AWS Cost Explorer - Cost Forecast (Monthly) | FOREIGN TABLE |
| [aws.aws_eks_cluster](aws.aws_eks_cluster.md) | 25 | AWS Elastic Kubernetes Service Cluster | FOREIGN TABLE |
| [aws.aws_securitylake_data_lake](aws.aws_securitylake_data_lake.md) | 17 | AWS Security Lake Data Lake | FOREIGN TABLE |
| [aws.aws_inspector2_coverage](aws.aws_inspector2_coverage.md) | 22 | AWS Inspector2 Coverage | FOREIGN TABLE |
| [aws.aws_servicequotas_service](aws.aws_servicequotas_service.md) | 12 | AWS Service Quotas Service | FOREIGN TABLE |
| [aws.aws_kafka_cluster](aws.aws_kafka_cluster.md) | 13 | AWS Kafka Cluster | FOREIGN TABLE |
| [aws.aws_codebuild_project](aws.aws_codebuild_project.md) | 37 | AWS CodeBuild Project | FOREIGN TABLE |
| [aws.aws_ec2_elasticip](aws.aws_ec2_elasticip.md) | 11 | AWS EC2 ElasticIP | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_read_iops_daily](aws.aws_rds_db_instance_metric_read_iops_daily.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - Read IOPS (Daily) | FOREIGN TABLE |
| [aws.aws_route53_resolver_rule](aws.aws_route53_resolver_rule.md) | 27 | AWS Route53 Resolver Rule | FOREIGN TABLE |
| [aws.aws_iam_virtual_mfa_device](aws.aws_iam_virtual_mfa_device.md) | 18 | AWS IAM Virtual MFA device | FOREIGN TABLE |
| [aws.aws_wellarchitected_lens_review_improvement](aws.aws_wellarchitected_lens_review_improvement.md) | 19 | AWS Well-Architected Lens Review Improvement | FOREIGN TABLE |
| [aws.aws_account_contact](aws.aws_account_contact.md) | 22 | AWS Account Contact | FOREIGN TABLE |
| [aws.aws_cloudwatch_log_group](aws.aws_cloudwatch_log_group.md) | 20 | AWS CloudWatch Log Group | FOREIGN TABLE |
| [aws.aws_backup_report_plan](aws.aws_backup_report_plan.md) | 19 | AWS Backup Report Plan | FOREIGN TABLE |
| [aws.aws_auditmanager_control](aws.aws_auditmanager_control.md) | 25 | AWS Audit Manager Control | FOREIGN TABLE |
| [aws.aws_vpc_verified_access_endpoint](aws.aws_vpc_verified_access_endpoint.md) | 28 | AWS VPC verified access Endpoint | FOREIGN TABLE |
| [aws.aws_vpc_dhcp_options](aws.aws_vpc_dhcp_options.md) | 19 | AWS VPC DHCP Options | FOREIGN TABLE |
| [aws.aws_config_configuration_recorder](aws.aws_config_configuration_recorder.md) | 16 | AWS Config Configuration Recorder | FOREIGN TABLE |
| [aws.aws_dax_cluster](aws.aws_dax_cluster.md) | 29 | AWS DAX Cluster | FOREIGN TABLE |
| [aws.aws_iam_ssh_public_key](aws.aws_iam_ssh_public_key.md) | 14 | AWS IAM User Access Key | FOREIGN TABLE |
| [aws.aws_vpc_verified_access_trust_provider](aws.aws_vpc_verified_access_trust_provider.md) | 20 | AWS VPC Verified Access Trust Provider | FOREIGN TABLE |
| [aws.aws_kinesis_consumer](aws.aws_kinesis_consumer.md) | 15 | AWS Kinesis Consumer | FOREIGN TABLE |
| [aws.aws_amplify_app](aws.aws_amplify_app.md) | 34 | AWS Amplify App | FOREIGN TABLE |
| [aws.aws_config_aggregate_authorization](aws.aws_config_aggregate_authorization.md) | 16 | AWS Config Aggregate Authorization | FOREIGN TABLE |
| [aws.aws_rds_db_cluster](aws.aws_rds_db_cluster.md) | 66 | AWS RDS DB Cluster | FOREIGN TABLE |
| [aws.aws_cloudwatch_log_subscription_filter](aws.aws_cloudwatch_log_subscription_filter.md) | 17 | AWS CloudWatch Log Subscription Filter | FOREIGN TABLE |
| [aws.aws_ses_identity](aws.aws_ses_identity.md) | 13 | AWS SES Identity | FOREIGN TABLE |
| [aws.aws_sns_topic_subscription](aws.aws_sns_topic_subscription.md) | 22 | AWS SNS Topic Subscription | FOREIGN TABLE |
| [aws.aws_iam_policy](aws.aws_iam_policy.md) | 26 | AWS IAM Policy | FOREIGN TABLE |
| [aws.aws_wellarchitected_lens_share](aws.aws_wellarchitected_lens_share.md) | 16 | AWS Well-Architected Lens Share | FOREIGN TABLE |
| [aws.aws_ecr_repository](aws.aws_ecr_repository.md) | 28 | AWS ECR Repository | FOREIGN TABLE |
| [aws.aws_vpc_egress_only_internet_gateway](aws.aws_vpc_egress_only_internet_gateway.md) | 14 | AWS VPC Egress Only Internet Gateway | FOREIGN TABLE |
| [aws.aws_workspaces_bundle](aws.aws_workspaces_bundle.md) | 14 | AWS Workspaces Bundle | FOREIGN TABLE |
| [aws.aws_appautoscaling_target](aws.aws_appautoscaling_target.md) | 17 | AWS Application Auto Scaling Target | FOREIGN TABLE |
| [aws.aws_guardduty_filter](aws.aws_guardduty_filter.md) | 17 | AWS GuardDuty Filter | FOREIGN TABLE |
| [aws.aws_lambda_layer_version](aws.aws_lambda_layer_version.md) | 23 | AWS Lambda Layer Version | FOREIGN TABLE |
| [aws.aws_route53_zone](aws.aws_route53_zone.md) | 25 | AWS Route53 Zone | FOREIGN TABLE |
| [aws.aws_elastic_beanstalk_application_version](aws.aws_elastic_beanstalk_application_version.md) | 22 | AWS Elastic Beanstalk Application Version | FOREIGN TABLE |
| [aws.aws_resource_explorer_supported_resource_type](aws.aws_resource_explorer_supported_resource_type.md) | 10 | AWS Resource Explorer Supported Resource Type | FOREIGN TABLE |
| [aws.aws_ssm_association](aws.aws_ssm_association.md) | 34 | AWS SSM Association | FOREIGN TABLE |
| [aws.aws_dms_replication_instance](aws.aws_dms_replication_instance.md) | 35 | AWS DMS Replication Instance | FOREIGN TABLE |
| [aws.aws_ec2_network_interface](aws.aws_ec2_network_interface.md) | 44 | AWS EC2 Network Interface | FOREIGN TABLE |
| [aws.aws_ec2_host](aws.aws_ec2_host.md) | 13 | AWS Ec2 Host | FOREIGN TABLE |
| [aws.aws_account_alternate_contact](aws.aws_account_alternate_contact.md) | 15 | AWS Account Alternate Contact | FOREIGN TABLE |
| [aws.aws_waf_web_acl](aws.aws_waf_web_acl.md) | 19 | AWS WAF Web ACL | FOREIGN TABLE |
| [aws.aws_cost_by_account_daily](aws.aws_cost_by_account_daily.md) | 26 | AWS Cost Explorer - Cost by Linked Account (Daily) | FOREIGN TABLE |
| [aws.aws_accessanalyzer_finding](aws.aws_accessanalyzer_finding.md) | 24 | AWS Access Analyzer Finding | FOREIGN TABLE |
| [aws.aws_dynamodb_table_export](aws.aws_dynamodb_table_export.md) | 28 | AWS DynamoDB Table Export | FOREIGN TABLE |
| [aws.aws_cloudfront_origin_access_control](aws.aws_cloudfront_origin_access_control.md) | 14 | AWS CloudFront OriginAccessControl | FOREIGN TABLE |
| [aws.aws_api_gateway_stage](aws.aws_api_gateway_stage.md) | 29 | AWS API Gateway Stage | FOREIGN TABLE |
| [aws.aws_ssm_managed_instance_patch_state](aws.aws_ssm_managed_instance_patch_state.md) | 30 | AWS SSM Managed Instance Patch State | FOREIGN TABLE |
| [aws.aws_s3_access_point](aws.aws_s3_access_point.md) | 23 | AWS S3 Access Point | FOREIGN TABLE |
| [aws.aws_inspector_assessment_template](aws.aws_inspector_assessment_template.md) | 22 | AWS Inspector Assessment Template | FOREIGN TABLE |
| [aws.aws_vpc](aws.aws_vpc.md) | 22 | AWS VPC | FOREIGN TABLE |
| [aws.aws_sesv2_emailidentity](aws.aws_sesv2_emailidentity.md) | 13 | AWS SESv2 EmailIdentity | FOREIGN TABLE |
| [aws.aws_ec2_instance_metric_cpu_utilization](aws.aws_ec2_instance_metric_cpu_utilization.md) | 18 | AWS EC2 Instance Cloudwatch Metrics - CPU Utilization | FOREIGN TABLE |
| [aws.aws_fsx_task](aws.aws_fsx_task.md) | 13 | AWS FSX Task | FOREIGN TABLE |
| [aws.aws_docdb_cluster](aws.aws_docdb_cluster.md) | 44 | AWS DocumentDB Cluster | FOREIGN TABLE |
| [aws.aws_cloudtrail_query](aws.aws_cloudtrail_query.md) | 21 | AWS CloudTrail Query | FOREIGN TABLE |
| [aws.aws_securityhub_insight](aws.aws_securityhub_insight.md) | 14 | AWS Securityhub Insight | FOREIGN TABLE |
| [aws.aws_glue_job](aws.aws_glue_job.md) | 32 | AWS Glue Job | FOREIGN TABLE |
| [aws.aws_opsworkscm_server](aws.aws_opsworkscm_server.md) | 13 | AWS OpsWorksCM Server | FOREIGN TABLE |
| [aws.aws_ec2_gateway_load_balancer](aws.aws_ec2_gateway_load_balancer.md) | 26 | AWS EC2 Gateway Load Balancer | FOREIGN TABLE |
| [aws.aws_ec2_ssl_policy](aws.aws_ec2_ssl_policy.md) | 13 | AWS EC2 SSL Policy | FOREIGN TABLE |
| [aws.aws_rds_db_option_group](aws.aws_rds_db_option_group.md) | 20 | AWS RDS DB Option Group | FOREIGN TABLE |
| [aws.aws_guardduty_ipset](aws.aws_guardduty_ipset.md) | 17 | AWS GuardDuty IPSet | FOREIGN TABLE |
| [aws.aws_vpc_endpoint_service](aws.aws_vpc_endpoint_service.md) | 25 | AWS VPC Endpoint Service | FOREIGN TABLE |
| [aws.aws_config_rule](aws.aws_config_rule.md) | 24 | AWS Config Rule | FOREIGN TABLE |
| [aws.aws_appstream_stack](aws.aws_appstream_stack.md) | 13 | AWS AppStream Stack | FOREIGN TABLE |
| [aws.aws_auditmanager_evidence_folder](aws.aws_auditmanager_evidence_folder.md) | 29 | AWS Audit Manager Evidence Folder | FOREIGN TABLE |
| [aws.aws_organizations_policy](aws.aws_organizations_policy.md) | 17 | AWS Organizations Policy | FOREIGN TABLE |
| [aws.aws_iam_role](aws.aws_iam_role.md) | 29 | AWS IAM Role | FOREIGN TABLE |
| [aws.aws_accessanalyzer_analyzer](aws.aws_accessanalyzer_analyzer.md) | 20 | AWS Access Analyzer | FOREIGN TABLE |
| [aws.aws_globalaccelerator_listener](aws.aws_globalaccelerator_listener.md) | 15 | AWS Global Accelerator Listener | FOREIGN TABLE |
| [aws.aws_opensearchserverless_collection](aws.aws_opensearchserverless_collection.md) | 13 | AWS OpenSearchServerless Collection | FOREIGN TABLE |
| [aws.aws_ec2_ami](aws.aws_ec2_ami.md) | 39 | AWS EC2 AMI | FOREIGN TABLE |
| [aws.aws_redshift_snapshot](aws.aws_redshift_snapshot.md) | 45 | AWS Redshift Snapshot | FOREIGN TABLE |
| [aws.aws_ec2_transit_gateway](aws.aws_ec2_transit_gateway.md) | 28 | AWS EC2 Transit Gateway | FOREIGN TABLE |
| [aws.aws_api_gateway_usage_plan](aws.aws_api_gateway_usage_plan.md) | 18 | AWS API Gateway Usage Plan | FOREIGN TABLE |
| [aws.aws_emr_instance_group](aws.aws_emr_instance_group.md) | 31 | AWS EMR Instance Group | FOREIGN TABLE |
| [aws.aws_eventbridge_rule](aws.aws_eventbridge_rule.md) | 22 | AWS EventBridge Rule | FOREIGN TABLE |
| [aws.aws_iam_server_certificate](aws.aws_iam_server_certificate.md) | 21 | AWS IAM Server Certificate | FOREIGN TABLE |
| [aws.aws_cloudsearch_domain](aws.aws_cloudsearch_domain.md) | 23 | AWS CloudSearch Domain | FOREIGN TABLE |
| [aws.aws_rds_reserved_db_instance](aws.aws_rds_reserved_db_instance.md) | 26 | AWS RDS Reserved DB Instance | FOREIGN TABLE |
| [aws.aws_eks_fargate_profile](aws.aws_eks_fargate_profile.md) | 19 | AWS Elastic Kubernetes Service Fargate Profile | FOREIGN TABLE |
| [aws.aws_wafv2_regex_pattern_set](aws.aws_wafv2_regex_pattern_set.md) | 19 | AWS WAFv2 Regex Pattern Set | FOREIGN TABLE |
| [aws.aws_api_gateway_rest_api](aws.aws_api_gateway_rest_api.md) | 24 | AWS API Gateway Rest API  | FOREIGN TABLE |
| [aws.aws_iam_policy_attachment](aws.aws_iam_policy_attachment.md) | 13 | AWS IAM Policy Attachment | FOREIGN TABLE |
| [aws.aws_route53_domain](aws.aws_route53_domain.md) | 34 | AWS Route53 Domain | FOREIGN TABLE |
| [aws.aws_glue_dev_endpoint](aws.aws_glue_dev_endpoint.md) | 35 | AWS Glue Dev Endpoint | FOREIGN TABLE |
| [aws.aws_guardduty_finding](aws.aws_guardduty_finding.md) | 23 | AWS GuardDuty Finding | FOREIGN TABLE |
| [aws.aws_cloudwatch_log_event](aws.aws_cloudwatch_log_event.md) | 16 | AWS CloudWatch Log Event | FOREIGN TABLE |
| [aws.aws_route53_resolver_query_log_config](aws.aws_route53_resolver_query_log_config.md) | 17 | AWS Route53 Resolver Query Logging Configuration | FOREIGN TABLE |
| [aws.aws_secretsmanager_secret](aws.aws_secretsmanager_secret.md) | 30 | AWS Secrets Manager Secret | FOREIGN TABLE |
| [aws.aws_msk_cluster](aws.aws_msk_cluster.md) | 22 | AWS Managed Streaming for Apache Kafka | FOREIGN TABLE |
| [aws.aws_acmpca_certificate_authority](aws.aws_acmpca_certificate_authority.md) | 27 | AWS ACMPCA CertificateAuthority | FOREIGN TABLE |
| [aws.aws_lightsail_instance](aws.aws_lightsail_instance.md) | 33 | AWS Lightsail Instance | FOREIGN TABLE |
| [aws.aws_iam_action](aws.aws_iam_action.md) | 13 | AWS IAM Action | FOREIGN TABLE |
| [aws.aws_pinpoint_app](aws.aws_pinpoint_app.md) | 18 | AWS Pinpoint App | FOREIGN TABLE |
| [aws.aws_rds_global_cluster](aws.aws_rds_global_cluster.md) | 13 | AWS RDS GlobalCluster | FOREIGN TABLE |
| [aws.aws_lambda_layer](aws.aws_lambda_layer.md) | 19 | AWS Lambda Layer | FOREIGN TABLE |
| [aws.aws_vpc_internet_gateway](aws.aws_vpc_internet_gateway.md) | 15 | AWS VPC Internet Gateway | FOREIGN TABLE |
| [aws.aws_workspaces_workspace](aws.aws_workspaces_workspace.md) | 28 | AWS Workspaces | FOREIGN TABLE |
| [aws.aws_cloudfront_streamingdistribution](aws.aws_cloudfront_streamingdistribution.md) | 14 | AWS CloudFront StreamingDistribution | FOREIGN TABLE |
| [aws.aws_sagemaker_model](aws.aws_sagemaker_model.md) | 21 | AWS Sagemaker Model | FOREIGN TABLE |
| [aws.aws_api_gateway_domain_name](aws.aws_api_gateway_domain_name.md) | 23 | AWS API Gateway Domain Name | FOREIGN TABLE |
| [aws.aws_ecs_task_definition](aws.aws_ecs_task_definition.md) | 33 | AWS ECS Task Definition | FOREIGN TABLE |
| [aws.aws_iam_access_advisor](aws.aws_iam_access_advisor.md) | 15 | AWS IAM Access Advisor | FOREIGN TABLE |
| [aws.aws_iam_access_key](aws.aws_iam_access_key.md) | 17 | AWS IAM User Access Key | FOREIGN TABLE |
| [aws.aws_waf_rule_group](aws.aws_waf_rule_group.md) | 17 | AWS WAF Rule Group | FOREIGN TABLE |
| [aws.aws_wellarchitected_consolidated_report](aws.aws_wellarchitected_consolidated_report.md) | 18 | AWS Well-Architected Consolidated Report | FOREIGN TABLE |
| [aws.aws_cloudtrail_trail](aws.aws_cloudtrail_trail.md) | 41 | AWS CloudTrail Trail | FOREIGN TABLE |
| [aws.aws_dax_parameter](aws.aws_dax_parameter.md) | 19 | AWS DAX Parameter | FOREIGN TABLE |
| [aws.aws_vpc_flow_log](aws.aws_vpc_flow_log.md) | 26 | AWS VPC Flowlog | FOREIGN TABLE |
| [aws.aws_fsx_volume](aws.aws_fsx_volume.md) | 14 | AWS FSX Volume | FOREIGN TABLE |
| [aws.aws_codestar_project](aws.aws_codestar_project.md) | 14 | AWS CodeStar Project | FOREIGN TABLE |
| [aws.aws_health_event](aws.aws_health_event.md) | 19 | AWS Health Event | FOREIGN TABLE |
| [aws.aws_dynamodbstreams_stream](aws.aws_dynamodbstreams_stream.md) | 12 | AWS DynamoDb Stream | FOREIGN TABLE |
| [aws.aws_cloudformation_stack](aws.aws_cloudformation_stack.md) | 32 | AWS CloudFormation Stack | FOREIGN TABLE |
| [aws.aws_macie2_classification_job](aws.aws_macie2_classification_job.md) | 27 | AWS Macie2 Classification Job | FOREIGN TABLE |
| [aws.aws_codeartifact_domain](aws.aws_codeartifact_domain.md) | 23 | AWS Code Artifact Domain | FOREIGN TABLE |
| [aws.aws_dms_replication_task](aws.aws_dms_replication_task.md) | 31 | AWS DMS Replication Task | FOREIGN TABLE |
| [aws.aws_globalaccelerator_endpoint_group](aws.aws_globalaccelerator_endpoint_group.md) | 21 | AWS Global Accelerator Endpoint Group | FOREIGN TABLE |
| [aws.aws_ec2_instance](aws.aws_ec2_instance.md) | 82 | AWS EC2 Instance | FOREIGN TABLE |
| [aws.aws_opensearch_domain](aws.aws_opensearch_domain.md) | 37 | AWS OpenSearch Domain | FOREIGN TABLE |
| [aws.aws_dms_endpoint](aws.aws_dms_endpoint.md) | 47 | AWS DMS Endpoint | FOREIGN TABLE |
| [aws.aws_elastic_beanstalk_application](aws.aws_elastic_beanstalk_application.md) | 20 | AWS Elastic Beanstalk Application | FOREIGN TABLE |
| [aws.aws_ec2_fleet](aws.aws_ec2_fleet.md) | 13 | AWS Ec2 Fleet | FOREIGN TABLE |
| [aws.aws_sfn_state_machine_execution_history](aws.aws_sfn_state_machine_execution_history.md) | 47 | AWS Step Functions State Machine Execution History | FOREIGN TABLE |
| [aws.aws_backup_protected_resource](aws.aws_backup_protected_resource.md) | 12 | AWS Backup Protected Resource | FOREIGN TABLE |
| [aws.aws_eventbridge_bus](aws.aws_eventbridge_bus.md) | 16 | AWS EventBridge Bus | FOREIGN TABLE |
| [aws.aws_globalaccelerator_accelerator](aws.aws_globalaccelerator_accelerator.md) | 22 | AWS Global Accelerator Accelerator | FOREIGN TABLE |
| [aws.aws_sagemaker_app](aws.aws_sagemaker_app.md) | 21 | AWS Sagemaker App | FOREIGN TABLE |
| [aws.aws_region](aws.aws_region.md) | 11 | AWS Region | FOREIGN TABLE |
| [aws.aws_wafregional_web_acl](aws.aws_wafregional_web_acl.md) | 20 | AWS WAF Regional Web ACL | FOREIGN TABLE |
| [aws.aws_rds_db_parameter_group](aws.aws_rds_db_parameter_group.md) | 17 | AWS RDS DB Parameter Group | FOREIGN TABLE |
| [aws.aws_cloudwatch_log_resource_policy](aws.aws_cloudwatch_log_resource_policy.md) | 13 | AWS CloudWatch Log Resource Policy | FOREIGN TABLE |
| [aws.aws_sagemaker_notebook_instance](aws.aws_sagemaker_notebook_instance.md) | 32 | AWS Sagemaker Notebook Instance | FOREIGN TABLE |
| [aws.aws_vpc_flow_log_event](aws.aws_vpc_flow_log_event.md) | 28 | AWS VPC Flow Log events from CloudWatch Logs | FOREIGN TABLE |
| [aws.aws_mgn_application](aws.aws_mgn_application.md) | 20 | AWS MGN Application | FOREIGN TABLE |
| [aws.aws_athena_workgroup](aws.aws_athena_workgroup.md) | 26 | AWS Athena Workgroup | FOREIGN TABLE |
| [aws.aws_shield_protection_group](aws.aws_shield_protection_group.md) | 13 | AWS Shield ProtectionGroup | FOREIGN TABLE |
| [aws.aws_vpc_subnet](aws.aws_vpc_subnet.md) | 28 | AWS VPC Subnet | FOREIGN TABLE |
| [aws.aws_vpc_vpn_connection](aws.aws_vpc_vpn_connection.md) | 24 | AWS VPC VPN Connection | FOREIGN TABLE |
| [aws.aws_securityhub_finding](aws.aws_securityhub_finding.md) | 48 | AWS Security Hub Finding | FOREIGN TABLE |
| [aws.aws_iam_policy_simulator](aws.aws_iam_policy_simulator.md) | 18 | AWS IAM Policy Simulator | FOREIGN TABLE |
| [aws.aws_ecr_image_scan_finding](aws.aws_ecr_image_scan_finding.md) | 21 | AWS ECR Image Scan Finding | FOREIGN TABLE |
| [aws.aws_ecs_cluster_metric_cpu_utilization_hourly](aws.aws_ecs_cluster_metric_cpu_utilization_hourly.md) | 18 | AWS ECS Cluster Cloudwatch Metrics - CPU Utilization (Hourly) | FOREIGN TABLE |
| [aws.aws_fsx_file_system](aws.aws_fsx_file_system.md) | 32 | AWS FSx File System | FOREIGN TABLE |
| [aws.aws_ec2_transit_gateway_route_table](aws.aws_ec2_transit_gateway_route_table.md) | 18 | AWS EC2 Transit Gateway Route Table | FOREIGN TABLE |
| [aws.aws_api_gatewayv2_domain_name](aws.aws_api_gatewayv2_domain_name.md) | 15 | AWS API Gateway Version 2 Domain Name | FOREIGN TABLE |
| [aws.aws_mwaa_environment](aws.aws_mwaa_environment.md) | 13 | AWS MWAA Environment | FOREIGN TABLE |
| [aws.aws_vpc_security_group_rule](aws.aws_vpc_security_group_rule.md) | 37 | AWS VPC Security Group Rule | FOREIGN TABLE |
| [aws.aws_ec2_capacity_reservation](aws.aws_ec2_capacity_reservation.md) | 31 | AWS EC2 Capacity Reservation | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_write_iops](aws.aws_rds_db_instance_metric_write_iops.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - Write IOPS | FOREIGN TABLE |
| [aws.aws_servicecatalog_portfolio](aws.aws_servicecatalog_portfolio.md) | 20 | AWS Service Catalog Portfolio | FOREIGN TABLE |
| [aws.aws_wafv2_web_acl](aws.aws_wafv2_web_acl.md) | 27 | AWS WAFv2 Web ACL | FOREIGN TABLE |
| [aws.aws_cloudwatch_log_stream](aws.aws_cloudwatch_log_stream.md) | 18 | AWS CloudWatch Log Stream | FOREIGN TABLE |
| [aws.aws_backup_recovery_point](aws.aws_backup_recovery_point.md) | 29 | AWS Backup Recovery Point | FOREIGN TABLE |
| [aws.aws_sagemaker_domain](aws.aws_sagemaker_domain.md) | 30 | AWS Sagemaker Domain | FOREIGN TABLE |
| [aws.aws_ec2_instance_metric_cpu_utilization_hourly](aws.aws_ec2_instance_metric_cpu_utilization_hourly.md) | 15 | AWS EC2 Instance Cloudwatch Metrics - CPU Utilization (Hourly) | FOREIGN TABLE |
| [aws.aws_cloudwatch_alarm](aws.aws_cloudwatch_alarm.md) | 39 | AWS CloudWatch Alarm | FOREIGN TABLE |
| [aws.aws_ssoadmin_permission_set](aws.aws_ssoadmin_permission_set.md) | 19 | AWS SSO Permission Set | FOREIGN TABLE |
| [aws.aws_eks_node_group](aws.aws_eks_node_group.md) | 33 | AWS EKS Node Group | FOREIGN TABLE |
| [aws.aws_elasticache_parameter_group](aws.aws_elasticache_parameter_group.md) | 15 | AWS ElastiCache Parameter Group | FOREIGN TABLE |
| [aws.aws_wellarchitected_lens_review_report](aws.aws_wellarchitected_lens_review_report.md) | 13 | AWS Well-Architected Lens Review Report | FOREIGN TABLE |
| [aws.aws_ec2_reserved_instance](aws.aws_ec2_reserved_instance.md) | 30 | AWS EC2 Reserved Instance | FOREIGN TABLE |
| [aws.aws_ecrpublic_registry](aws.aws_ecrpublic_registry.md) | 13 | AWS ECRPublic Registry} | FOREIGN TABLE |
| [aws.aws_vpc_network_acl](aws.aws_vpc_network_acl.md) | 19 | AWS VPC Network ACL | FOREIGN TABLE |
| [aws.aws_emr_instance_fleet](aws.aws_emr_instance_fleet.md) | 24 | AWS EMR Instance Fleet | FOREIGN TABLE |
| [aws.aws_ssm_managed_instance](aws.aws_ssm_managed_instance.md) | 29 | AWS SSM Managed Instance | FOREIGN TABLE |
| [aws.aws_rds_db_snapshot](aws.aws_rds_db_snapshot.md) | 41 | AWS RDS DB Snapshot | FOREIGN TABLE |
| [aws.aws_auditmanager_evidence](aws.aws_auditmanager_evidence.md) | 28 | AWS Audit Manager Evidence | FOREIGN TABLE |
| [aws.aws_ec2_placement_group](aws.aws_ec2_placement_group.md) | 14 | AWS Ec2 Placement Group | FOREIGN TABLE |
| [aws.aws_ec2_ami_shared](aws.aws_ec2_ami_shared.md) | 37 | AWS EC2 AMI - All public, private, and shared AMIs | FOREIGN TABLE |
| [aws.aws_api_gateway_authorizer](aws.aws_api_gateway_authorizer.md) | 19 | AWS API Gateway Authorizer | FOREIGN TABLE |
| [aws.aws_iam_saml_provider](aws.aws_iam_saml_provider.md) | 15 | AWS IAM Saml Provider | FOREIGN TABLE |
| [aws.aws_simspaceweaver_simulation](aws.aws_simspaceweaver_simulation.md) | 23 | AWS SimSpace Weaver Simulation | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_cpu_utilization](aws.aws_rds_db_instance_metric_cpu_utilization.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - CPU Utilization | FOREIGN TABLE |
| [aws.aws_cloudtrail_channel](aws.aws_cloudtrail_channel.md) | 17 | AWS CloudTrail Channel | FOREIGN TABLE |
| [aws.aws_ecs_service](aws.aws_ecs_service.md) | 42 | AWS ECS Service | FOREIGN TABLE |
| [aws.aws_codedeploy_deployment_config](aws.aws_codedeploy_deployment_config.md) | 17 | AWS CodeDeploy Deployment Config | FOREIGN TABLE |
| [aws.aws_wellarchitected_share_invitation](aws.aws_wellarchitected_share_invitation.md) | 18 | AWS Well-Architected Share Invitation | FOREIGN TABLE |
| [aws.aws_acm_certificate](aws.aws_acm_certificate.md) | 37 | AWS ACM Certificate | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_engine_cpu_utilization_hourly](aws.aws_elasticache_redis_metric_engine_cpu_utilization_hourly.md) | 18 | AWS Elasticache Redis EngineCPUUtilization metric (Hourly) | FOREIGN TABLE |
| [aws.aws_iam_credential_report](aws.aws_iam_credential_report.md) | 32 | AWS IAM Credential Report | FOREIGN TABLE |
| [aws.aws_identitystore_group_membership](aws.aws_identitystore_group_membership.md) | 13 | AWS Identity Store Group Membership | FOREIGN TABLE |
| [aws.aws_dynamodb_local_secondary_index](aws.aws_dynamodb_local_secondary_index.md) | 12 | AWS DynamoDb LocalSecondaryIndex | FOREIGN TABLE |
| [aws.aws_keyspaces_table](aws.aws_keyspaces_table.md) | 13 | AWS Keyspaces Table | FOREIGN TABLE |
| [aws.aws_elasticache_cluster](aws.aws_elasticache_cluster.md) | 45 | AWS ElastiCache Cluster | FOREIGN TABLE |
| [aws.aws_ec2_launch_template_version](aws.aws_ec2_launch_template_version.md) | 28 | AWS EC2 Launch Template Version | FOREIGN TABLE |
| [aws.aws_dax_parameter_group](aws.aws_dax_parameter_group.md) | 11 | AWS DAX Parameter Group | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_connections](aws.aws_rds_db_instance_metric_connections.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - DB Connections | FOREIGN TABLE |
| [aws.aws_kinesisanalyticsv2_application](aws.aws_kinesisanalyticsv2_application.md) | 23 | AWS Kinesis Analytics V2 Application | FOREIGN TABLE |
| [aws.aws_backup_legal_hold](aws.aws_backup_legal_hold.md) | 18 | AWS Backup Legal Hold | FOREIGN TABLE |
| [aws.aws_kms_alias](aws.aws_kms_alias.md) | 15 | AWS KMS Alias | FOREIGN TABLE |
| [aws.aws_backup_vault](aws.aws_backup_vault.md) | 21 | AWS Backup Vault | FOREIGN TABLE |
| [aws.aws_sagemaker_training_job](aws.aws_sagemaker_training_job.md) | 51 | AWS SageMaker Training Job | FOREIGN TABLE |
| [aws.aws_fsx_storage_virtual_machine](aws.aws_fsx_storage_virtual_machine.md) | 14 | AWS FSX StorageVirtualMachine | FOREIGN TABLE |
| [aws.aws_batchjob_queue](aws.aws_batchjob_queue.md) | 14 | AWS BatchJob Queue | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_new_connections_hourly](aws.aws_elasticache_redis_metric_new_connections_hourly.md) | 18 | AWS Elasticache Redis NewConnections metric (Hourly) | FOREIGN TABLE |
| [aws.aws_cost_usage](aws.aws_cost_usage.md) | 28 | AWS Cost Explorer - Cost and Usage | FOREIGN TABLE |
| [aws.aws_cloudfront_origin_access_identity](aws.aws_cloudfront_origin_access_identity.md) | 16 | AWS CloudFront Origin Access Identity | FOREIGN TABLE |
| [aws.aws_s3_account_settings](aws.aws_s3_account_settings.md) | 14 | AWS S3 Account Block Public Access Settings | FOREIGN TABLE |
| [aws.aws_directconnect_gateway](aws.aws_directconnect_gateway.md) | 14 | AWS DirectConnect Gateway | FOREIGN TABLE |
| [aws.aws_vpc_eip_address_transfer](aws.aws_vpc_eip_address_transfer.md) | 15 | AWS VPC Elastic IP Address Transfer | FOREIGN TABLE |
| [aws.aws_rds_db_subnet_group](aws.aws_rds_db_subnet_group.md) | 18 | AWS RDS DB Subnet Group | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_engine_cpu_utilization_daily](aws.aws_elasticache_redis_metric_engine_cpu_utilization_daily.md) | 18 | AWS Elasticache Redis EngineCPUUtilization metric (Daily) | FOREIGN TABLE |
| [aws.aws_serverlessapplicationrepository_application](aws.aws_serverlessapplicationrepository_application.md) | 24 | AWS Serverless Application Repository Application | FOREIGN TABLE |
| [aws.aws_emr_cluster](aws.aws_emr_cluster.md) | 42 | AWS EMR Cluster | FOREIGN TABLE |
| [aws.aws_elasticache_replication_group](aws.aws_elasticache_replication_group.md) | 33 | AWS ElastiCache Replication Group | FOREIGN TABLE |
| [aws.aws_route53_resolver_endpoint](aws.aws_route53_resolver_endpoint.md) | 25 | AWS Route53 Resolver Endpoint | FOREIGN TABLE |
| [aws.aws_ecs_cluster_metric_cpu_utilization_daily](aws.aws_ecs_cluster_metric_cpu_utilization_daily.md) | 18 | AWS ECS Cluster Cloudwatch Metrics - CPU Utilization (Daily) | FOREIGN TABLE |
| [aws.aws_identitystore_user](aws.aws_identitystore_user.md) | 15 | AWS Identity Store User | FOREIGN TABLE |
| [aws.aws_docdb_cluster_snapshot](aws.aws_docdb_cluster_snapshot.md) | 30 | AWS DocumentDB Cluster Snapshot | FOREIGN TABLE |
| [aws.aws_directory_service_directory](aws.aws_directory_service_directory.md) | 41 | AWS Directory Service Directory | FOREIGN TABLE |
| [aws.aws_pipes_pipe](aws.aws_pipes_pipe.md) | 27 | AWS Pipes Pipe | FOREIGN TABLE |
| [aws.aws_glue_crawler](aws.aws_glue_crawler.md) | 30 | AWS Glue Crawler | FOREIGN TABLE |
| [aws.aws_ecrpublic_repository](aws.aws_ecrpublic_repository.md) | 20 | AWS ECR Public Repository | FOREIGN TABLE |
| [aws.aws_iam_open_id_connect_provider](aws.aws_iam_open_id_connect_provider.md) | 16 | AWS IAM OpenID Connect Provider | FOREIGN TABLE |
| [aws.aws_wellarchitected_answer](aws.aws_wellarchitected_answer.md) | 27 | AWS Well-Architected Answer | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_connections_daily](aws.aws_rds_db_instance_metric_connections_daily.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - DB Connections (Daily) | FOREIGN TABLE |
| [aws.aws_ec2_managed_prefix_list](aws.aws_ec2_managed_prefix_list.md) | 21 | AWS EC2 Managed Prefix List | FOREIGN TABLE |
| [aws.aws_cloudtrail_trail_event](aws.aws_cloudtrail_trail_event.md) | 41 | CloudTrail events from cloudwatch service. | FOREIGN TABLE |
| [aws.aws_ec2_capacity_reservation_fleet](aws.aws_ec2_capacity_reservation_fleet.md) | 13 | AWS Ec2 CapacityReservationFleet | FOREIGN TABLE |
| [aws.aws_config_retention_configuration](aws.aws_config_retention_configuration.md) | 11 | AWS Config Retention Configuration | FOREIGN TABLE |
| [aws.aws_route53_query_log](aws.aws_route53_query_log.md) | 9 | AWS Route53 Query Logging Configuration | FOREIGN TABLE |
| [aws.aws_eks_addon_version](aws.aws_eks_addon_version.md) | 16 | AWS EKS Addon Version | FOREIGN TABLE |
| [aws.aws_sqs_queue](aws.aws_sqs_queue.md) | 27 | AWS SQS Queue | FOREIGN TABLE |
| [aws.aws_directconnect_connection](aws.aws_directconnect_connection.md) | 14 | AWS DirectConnect Connection | FOREIGN TABLE |
| [aws.aws_glue_catalog_table](aws.aws_glue_catalog_table.md) | 30 | AWS Glue Catalog Table | FOREIGN TABLE |
| [aws.aws_ecs_cluster](aws.aws_ecs_cluster.md) | 25 | AWS ECS Cluster | FOREIGN TABLE |
| [aws.aws_availability_zone](aws.aws_availability_zone.md) | 19 | AWS Availability Zone | FOREIGN TABLE |
| [aws.aws_ec2_ipam](aws.aws_ec2_ipam.md) | 13 | AWS EC2 Ipam | FOREIGN TABLE |
| [aws.aws_wellarchitected_milestone](aws.aws_wellarchitected_milestone.md) | 13 | AWS Well-Architected Milestone | FOREIGN TABLE |
| [aws.aws_rds_db_cluster_snapshot](aws.aws_rds_db_cluster_snapshot.md) | 33 | AWS RDS DB Cluster Snapshot | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_list_based_cmds_hourly](aws.aws_elasticache_redis_metric_list_based_cmds_hourly.md) | 18 | AWS Elasticache Redis ListBasedCmds metric (Hourly) | FOREIGN TABLE |
| [aws.aws_ssm_maintenance_window](aws.aws_ssm_maintenance_window.md) | 29 | AWS SSM Maintenance Window | FOREIGN TABLE |
| [aws.aws_pricing_service_attribute](aws.aws_pricing_service_attribute.md) | 6 | AWS Pricing Service Attribute | FOREIGN TABLE |
| [aws.aws_ebs_snapshot](aws.aws_ebs_snapshot.md) | 27 | AWS EBS Snapshot | FOREIGN TABLE |
| [aws.aws_cost_by_record_type_monthly](aws.aws_cost_by_record_type_monthly.md) | 27 | AWS Cost Explorer - Cost by Record Type (Monthly) | FOREIGN TABLE |
| [aws.aws_sts_caller_identity](aws.aws_sts_caller_identity.md) | 7 | AWS STS Caller Identity | FOREIGN TABLE |
| [aws.aws_cloudfront_cache_policy](aws.aws_cloudfront_cache_policy.md) | 19 | AWS CloudFront Cache Policy | FOREIGN TABLE |
| [aws.aws_backup_plan](aws.aws_backup_plan.md) | 21 | AWS Backup Plan | FOREIGN TABLE |
| [aws.aws_ssoadmin_account_assignment](aws.aws_ssoadmin_account_assignment.md) | 13 | AWS SSO Account Assignment | FOREIGN TABLE |
| [aws.aws_inspector_exclusion](aws.aws_inspector_exclusion.md) | 16 | AWS Inspector Exclusion | FOREIGN TABLE |
| [aws.aws_kms_key](aws.aws_kms_key.md) | 29 | AWS KMS Key | FOREIGN TABLE |
| [aws.aws_ecs_cluster_metric_cpu_utilization](aws.aws_ecs_cluster_metric_cpu_utilization.md) | 18 | AWS ECS Cluster Cloudwatch Metrics - CPU Utilization | FOREIGN TABLE |
| [aws.aws_wellarchitected_workload](aws.aws_wellarchitected_workload.md) | 33 | AWS Well-Architected Workload | FOREIGN TABLE |
| [aws.aws_ec2_transit_gateway_vpc_attachment](aws.aws_ec2_transit_gateway_vpc_attachment.md) | 22 |  | FOREIGN TABLE |
| [aws.aws_wellarchitected_check_detail](aws.aws_wellarchitected_check_detail.md) | 23 | AWS Well-Architected Check Detail | FOREIGN TABLE |
| [aws.aws_organizations_organization](aws.aws_organizations_organization.md) | 12 | AWS Organizations Organization | FOREIGN TABLE |
| [aws.aws_glue_security_configuration](aws.aws_glue_security_configuration.md) | 15 | AWS Glue Security Configuration | FOREIGN TABLE |
| [aws.aws_glue_connection](aws.aws_glue_connection.md) | 20 | AWS Glue Connection | FOREIGN TABLE |
| [aws.aws_s3_bucket_intelligent_tiering_configuration](aws.aws_s3_bucket_intelligent_tiering_configuration.md) | 10 | AWS S3 Bucket Intelligent Tiering Configuration | FOREIGN TABLE |
| [aws.aws_elasticache_redis_metric_curr_connections_hourly](aws.aws_elasticache_redis_metric_curr_connections_hourly.md) | 18 | AWS Elasticache Redis CurrConnections metric (Hourly) | FOREIGN TABLE |
| [aws.aws_ssoadmin_instance](aws.aws_ssoadmin_instance.md) | 12 | AWS SSO Instance | FOREIGN TABLE |
| [aws.aws_directory_service_log_subscription](aws.aws_directory_service_log_subscription.md) | 12 | AWS Directory Service Log Subscription | FOREIGN TABLE |
| [aws.aws_vpc_customer_gateway](aws.aws_vpc_customer_gateway.md) | 19 | AWS VPC Customer Gateway | FOREIGN TABLE |
| [aws.aws_rds_db_instance_metric_cpu_utilization_hourly](aws.aws_rds_db_instance_metric_cpu_utilization_hourly.md) | 14 | AWS RDS DB Instance Cloudwatch Metrics - CPU Utilization (Hourly) | FOREIGN TABLE |
| [aws.aws_dynamodb_backup](aws.aws_dynamodb_backup.md) | 20 | AWS DynamoDB Backup | FOREIGN TABLE |
| [aws.aws_route53_health_check](aws.aws_route53_health_check.md) | 20 | AWS Route53 Health Check | FOREIGN TABLE |
| [aws.aws_imagebuilder_image](aws.aws_imagebuilder_image.md) | 13 | AWS ImageBuilder Image | FOREIGN TABLE |
| [azure.azure_synapse_workspace](azure.azure_synapse_workspace.md) | 37 | Azure Synapse Workspace | FOREIGN TABLE |
| [azure.azure_role_assignment](azure.azure_role_assignment.md) | 20 | Azure Role Assignment | FOREIGN TABLE |
| [azure.azure_storage_blob](azure.azure_storage_blob.md) | 56 | Azure Storage Blob | FOREIGN TABLE |
| [azure.azure_eventgrid_domain](azure.azure_eventgrid_domain.md) | 39 | Azure Event Grid Domain | FOREIGN TABLE |
| [azure.azure_operationalinsights_workspaces](azure.azure_operationalinsights_workspaces.md) | 34 | Azure OperationalInsights Workspaces | FOREIGN TABLE |
| [azure.azure_cdn_endpoint](azure.azure_cdn_endpoint.md) | 14 | Azure Cdn Endpoint | FOREIGN TABLE |
| [azure.azure_kubernetes_cluster](azure.azure_kubernetes_cluster.md) | 45 | Azure Kubernetes Cluster | FOREIGN TABLE |
| [azure.azure_databox_edge_device](azure.azure_databox_edge_device.md) | 35 | Azure Data Box Edge Device | FOREIGN TABLE |
| [azure.azure_web_serverfarms](azure.azure_web_serverfarms.md) | 14 | Azure Web ServerFarms | FOREIGN TABLE |
| [azure.azure_resource_group](azure.azure_resource_group.md) | 18 | Azure Resource Group | FOREIGN TABLE |
| [azure.azure_automation_variable](azure.azure_automation_variable.md) | 21 | Azure Automation Variable | FOREIGN TABLE |
| [azure.azure_cosmosdb_restorable_database_account](azure.azure_cosmosdb_restorable_database_account.md) | 21 | Azure Cosmos DB Restorable Database Account | FOREIGN TABLE |
| [azure.azure_hpc_cache](azure.azure_hpc_cache.md) | 30 | Azure HPC Cache | FOREIGN TABLE |
| [azure.azure_compute_disk_metric_write_ops](azure.azure_compute_disk_metric_write_ops.md) | 14 | Azure Compute Disk Metrics - Write Ops | FOREIGN TABLE |
| [azure.azure_network_vpnsites](azure.azure_network_vpnsites.md) | 14 | Azure Network VPNSites | FOREIGN TABLE |
| [azure.azure_key_vault_key_version](azure.azure_key_vault_key_version.md) | 33 | Azure Key Vault Key Version | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine](azure.azure_compute_virtual_machine.md) | 67 | Azure Compute Virtual Machine | FOREIGN TABLE |
| [azure.azure_app_managedenvironments](azure.azure_app_managedenvironments.md) | 14 | Azure App ManagedEnvironments | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine_metric_cpu_utilization_daily](azure.azure_compute_virtual_machine_metric_cpu_utilization_daily.md) | 14 | Azure Compute Virtual Machine Metrics - CPU Utilization (Daily) | FOREIGN TABLE |
| [azure.azure_servicebus_namespace](azure.azure_servicebus_namespace.md) | 33 | Azure ServiceBus Namespace | FOREIGN TABLE |
| [azure.azure_network_watcher](azure.azure_network_watcher.md) | 19 | Azure Network Watcher | FOREIGN TABLE |
| [azure.azure_streamanalytics_cluster](azure.azure_streamanalytics_cluster.md) | 14 | Azure StreamAnalytics Cluster | FOREIGN TABLE |
| [azure.azure_mssql_managed_instance](azure.azure_mssql_managed_instance.md) | 42 | Azure Microsoft SQL Managed Instance | FOREIGN TABLE |
| [azure.azure_app_service_web_app_slot](azure.azure_app_service_web_app_slot.md) | 53 | Azure App Service Web App Slot | FOREIGN TABLE |
| [azure.azure_signalr_service](azure.azure_signalr_service.md) | 32 | Azure SignalR Service | FOREIGN TABLE |
| [azure.azure_lighthouse_assignment](azure.azure_lighthouse_assignment.md) | 13 | Azure Lighthouse Assignment | FOREIGN TABLE |
| [azure.azure_postgresql_server](azure.azure_postgresql_server.md) | 46 | Azure PostgreSQL Server | FOREIGN TABLE |
| [azure.azure_network_virtualhubs](azure.azure_network_virtualhubs.md) | 14 | Azure Network VirtualHubs | FOREIGN TABLE |
| [azure.azure_compute_disk_metric_read_ops](azure.azure_compute_disk_metric_read_ops.md) | 14 | Azure Compute Disk Metrics - Read Ops | FOREIGN TABLE |
| [azure.azure_route_table](azure.azure_route_table.md) | 22 | Azure Route Table | FOREIGN TABLE |
| [azure.azure_dataprotection_backuppolicies](azure.azure_dataprotection_backuppolicies.md) | 13 | Azure DataProtection BackupPolicies | FOREIGN TABLE |
| [azure.azure_timeseriesinsights_environments](azure.azure_timeseriesinsights_environments.md) | 14 | Azure TimeSeriesInsights Environments | FOREIGN TABLE |
| [azure.azure_compute_image](azure.azure_compute_image.md) | 31 | Azure Compute Image | FOREIGN TABLE |
| [azure.azure_provider](azure.azure_provider.md) | 15 | Azure Provider | FOREIGN TABLE |
| [azure.azure_hybrid_compute_machine](azure.azure_hybrid_compute_machine.md) | 38 | Azure Hybrid Compute Machine | FOREIGN TABLE |
| [azure.azure_network_security_group](azure.azure_network_security_group.md) | 26 | Azure Network Security Group | FOREIGN TABLE |
| [azure.azure_key_vault_key](azure.azure_key_vault_key.md) | 31 | Azure Key Vault Key | FOREIGN TABLE |
| [azure.azure_cosmosdb_mongo_collection](azure.azure_cosmosdb_mongo_collection.md) | 29 | Azure Cosmos DB Mongo Collection | FOREIGN TABLE |
| [azure.azure_recovery_services_backup_job](azure.azure_recovery_services_backup_job.md) | 20 | Azure Recovery Services Backup Job | FOREIGN TABLE |
| [azure.azure_frontdoor](azure.azure_frontdoor.md) | 31 | Azure Front Door | FOREIGN TABLE |
| [azure.azure_synapse_workspacessqlpools](azure.azure_synapse_workspacessqlpools.md) | 14 | Azure Synapse WorkspacesSqlPools | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine_metric_cpu_utilization](azure.azure_compute_virtual_machine_metric_cpu_utilization.md) | 14 | Azure Compute Virtual Machine Metrics - CPU Utilization | FOREIGN TABLE |
| [azure.azure_firewall](azure.azure_firewall.md) | 34 | Azure Firewall | FOREIGN TABLE |
| [azure.azure_tenant](azure.azure_tenant.md) | 19 | Azure Tenant | FOREIGN TABLE |
| [azure.azure_storage_container](azure.azure_storage_container.md) | 32 | Azure Storage Container | FOREIGN TABLE |
| [azure.azure_storage_table](azure.azure_storage_table.md) | 17 | Azure Storage Table | FOREIGN TABLE |
| [azure.azure_application_insight](azure.azure_application_insight.md) | 39 | Azure Application Insight | FOREIGN TABLE |
| [azure.azure_data_lake_store](azure.azure_data_lake_store.md) | 37 | Azure Data Lake Store | FOREIGN TABLE |
| [azure.azure_recovery_services_vault](azure.azure_recovery_services_vault.md) | 26 | Azure Recovery Services Vault | FOREIGN TABLE |
| [azure.azure_cosmosdb_sql_database](azure.azure_cosmosdb_sql_database.md) | 26 | Azure Cosmos DB SQL Database | FOREIGN TABLE |
| [azure.azure_lb_backend_address_pool](azure.azure_lb_backend_address_pool.md) | 24 | Azure Load Balancer Backend Address Pool | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine_scale_set](azure.azure_compute_virtual_machine_scale_set.md) | 40 | Azure Compute Virtual Machine Scale Set | FOREIGN TABLE |
| [azure.azure_network_interface](azure.azure_network_interface.md) | 42 | Azure Network Interface | FOREIGN TABLE |
| [azure.azure_storage_sync](azure.azure_storage_sync.md) | 24 | Azure Storage Sync | FOREIGN TABLE |
| [azure.azure_cosmosdb_mongo_database](azure.azure_cosmosdb_mongo_database.md) | 25 | Azure Cosmos DB Mongo Database | FOREIGN TABLE |
| [azure.azure_compute_disk_access](azure.azure_compute_disk_access.md) | 20 | Azure Compute Disk Access | FOREIGN TABLE |
| [azure.azure_data_protection_backup_job](azure.azure_data_protection_backup_job.md) | 44 | Azure Data Protection Backup Job | FOREIGN TABLE |
| [azure.azure_analysisservices_servers](azure.azure_analysisservices_servers.md) | 14 | Azure AnalysisServices Servers | FOREIGN TABLE |
| [azure.azure_api_management](azure.azure_api_management.md) | 52 | Azure API Management Service | FOREIGN TABLE |
| [azure.azure_stream_analytics_job](azure.azure_stream_analytics_job.md) | 37 | Azure Stream Analytics Job | FOREIGN TABLE |
| [azure.azure_recovery_services_backup_item](azure.azure_recovery_services_backup_item.md) | 17 | Azure Recovery Services Backup Item | FOREIGN TABLE |
| [azure.azure_compute_snapshot](azure.azure_compute_snapshot.md) | 44 | Azure Compute Snapshot | FOREIGN TABLE |
| [azure.azure_compute_disk_metric_read_ops_daily](azure.azure_compute_disk_metric_read_ops_daily.md) | 14 | Azure Compute Disk Metrics - Read Ops (Daily) | FOREIGN TABLE |
| [azure.azure_network_vpnconnections](azure.azure_network_vpnconnections.md) | 14 | Azure Network VPNConnections | FOREIGN TABLE |
| [azure.azure_machine_learning_workspace](azure.azure_machine_learning_workspace.md) | 35 | Azure Machine Learning Workspace | FOREIGN TABLE |
| [azure.azure_app_configuration](azure.azure_app_configuration.md) | 26 | Azure App Configuration | FOREIGN TABLE |
| [azure.azure_security_center_contact](azure.azure_security_center_contact.md) | 18 | Azure Security Center Contact | FOREIGN TABLE |
| [azure.azure_lb_nat_rule](azure.azure_lb_nat_rule.md) | 26 | Azure Load Balancer Nat Rule | FOREIGN TABLE |
| [azure.azure_sql_server](azure.azure_sql_server.md) | 37 | Azure SQL Server | FOREIGN TABLE |
| [azure.azure_redis_cache](azure.azure_redis_cache.md) | 39 | Azure Redis Cache | FOREIGN TABLE |
| [azure.azure_virtual_network_gateway](azure.azure_virtual_network_gateway.md) | 37 | Azure Virtual Network Gateway | FOREIGN TABLE |
| [azure.azure_hdinsight_cluster](azure.azure_hdinsight_cluster.md) | 42 | Azure HDInsight Cluster | FOREIGN TABLE |
| [azure.azure_synapse_workspacesbigdatapools](azure.azure_synapse_workspacesbigdatapools.md) | 14 | Azure Synapse WorkspacesBigDataPools | FOREIGN TABLE |
| [azure.azure_dbformysql_flexibleservers](azure.azure_dbformysql_flexibleservers.md) | 14 | Azure DBforMySQL FlexibleServers | FOREIGN TABLE |
| [azure.azure_powerbidedicated_capacity](azure.azure_powerbidedicated_capacity.md) | 14 | Azure PowerBIDedicated Capacity | FOREIGN TABLE |
| [azure.azure_security_center_setting](azure.azure_security_center_setting.md) | 16 | Azure Security Center Setting | FOREIGN TABLE |
| [azure.azure_network_vpngateways](azure.azure_network_vpngateways.md) | 14 | Azure Network VPNGateways | FOREIGN TABLE |
| [azure.azure_compute_resource_sku](azure.azure_compute_resource_sku.md) | 27 | Azure Compute Resource SKU | FOREIGN TABLE |
| [azure.azure_eventhub_namespaceeventhubs](azure.azure_eventhub_namespaceeventhubs.md) | 14 | Azure Eventhub NamespaceEventhubs | FOREIGN TABLE |
| [azure.azure_mariadb_server](azure.azure_mariadb_server.md) | 37 | Azure MariaDB Server | FOREIGN TABLE |
| [azure.azure_mssql_elasticpool](azure.azure_mssql_elasticpool.md) | 27 | Azure Microsoft SQL Elastic Pool | FOREIGN TABLE |
| [azure.azure_key_vault_certificate](azure.azure_key_vault_certificate.md) | 20 | Azure Key Vault Certificate | FOREIGN TABLE |
| [azure.azure_security_center_auto_provisioning](azure.azure_security_center_auto_provisioning.md) | 15 | Azure Security Center Auto Provisioning | FOREIGN TABLE |
| [azure.azure_compute_disk_encryption_set](azure.azure_compute_disk_encryption_set.md) | 25 | Azure Compute Disk Encryption Set | FOREIGN TABLE |
| [azure.azure_key_vault_deleted_vault](azure.azure_key_vault_deleted_vault.md) | 20 | Azure Key Vault Deleted Vault | FOREIGN TABLE |
| [azure.azure_policy_definition](azure.azure_policy_definition.md) | 21 | Azure Policy Definition | FOREIGN TABLE |
| [azure.azure_monitor_log_profile](azure.azure_monitor_log_profile.md) | 17 | Azure Monitor Log Profile | FOREIGN TABLE |
| [azure.azure_log_analytics_workspace](azure.azure_log_analytics_workspace.md) | 34 | Azure Log Analytics Workspace | FOREIGN TABLE |
| [azure.azure_resource_link](azure.azure_resource_link.md) | 18 | Azure Resource Link | FOREIGN TABLE |
| [azure.azure_desktop_virtualization_host_pool](azure.azure_desktop_virtualization_host_pool.md) | 14 | Azure DesktopVirtualization HostPool | FOREIGN TABLE |
| [azure.azure_data_factory_dataset](azure.azure_data_factory_dataset.md) | 18 | Azure Data Factory Dataset | FOREIGN TABLE |
| [azure.azure_search_service](azure.azure_search_service.md) | 30 | Azure Search Service | FOREIGN TABLE |
| [azure.azure_subnet](azure.azure_subnet.md) | 28 | Azure Subnet | FOREIGN TABLE |
| [azure.azure_lb_probe](azure.azure_lb_probe.md) | 24 | Azure Load Balancer Probe | FOREIGN TABLE |
| [azure.azure_express_route_circuit](azure.azure_express_route_circuit.md) | 32 | Azure Express Route Circuit | FOREIGN TABLE |
| [azure.azure_mariadb_databases](azure.azure_mariadb_databases.md) | 14 | Azure MariaDB Databases | FOREIGN TABLE |
| [azure.azure_location](azure.azure_location.md) | 16 | Azure Location | FOREIGN TABLE |
| [azure.azure_hybrid_kubernetes_connected_cluster](azure.azure_hybrid_kubernetes_connected_cluster.md) | 38 | Azure Hybrid Kubernetes Connected Cluster | FOREIGN TABLE |
| [azure.azure_eventgrid_topic](azure.azure_eventgrid_topic.md) | 37 | Azure Event Grid Topic | FOREIGN TABLE |
| [azure.azure_databricks_workspaces](azure.azure_databricks_workspaces.md) | 30 | Azure Databricks Workspaces | FOREIGN TABLE |
| [azure.azure_iothub](azure.azure_iothub.md) | 39 | Azure Iot Hub | FOREIGN TABLE |
| [azure.azure_security_center_automation](azure.azure_security_center_automation.md) | 24 | Azure Security Center Automation | FOREIGN TABLE |
| [azure.azure_storage_blob_service](azure.azure_storage_blob_service.md) | 27 | Azure Storage Blob Service | FOREIGN TABLE |
| [azure.azure_app_containerapps](azure.azure_app_containerapps.md) | 14 | Azure App ContainerApps | FOREIGN TABLE |
| [azure.azure_compute_disk_metric_write_ops_daily](azure.azure_compute_disk_metric_write_ops_daily.md) | 14 | Azure Compute Disk Metrics - Write Ops (Daily) | FOREIGN TABLE |
| [azure.azure_network_publicipprefixes](azure.azure_network_publicipprefixes.md) | 14 | Azure Network PublicIPPrefixes | FOREIGN TABLE |
| [azure.azure_sql_virtualclusters](azure.azure_sql_virtualclusters.md) | 14 | Azure Sql VirtualClusters | FOREIGN TABLE |
| [azure.azure_nat_gateway](azure.azure_nat_gateway.md) | 26 | Azure NAT Gateway | FOREIGN TABLE |
| [azure.azure_ad_service_principal](azure.azure_ad_service_principal.md) | 23 | [DEPRECATED] This table has been deprecated and will be removed in a future release. Please use the azuread_service_principal table in the azuread plugin instead. | FOREIGN TABLE |
| [azure.azure_network_watcher_flow_log](azure.azure_network_watcher_flow_log.md) | 29 | Azure Network Watcher FlowLog | FOREIGN TABLE |
| [azure.azure_batch_account](azure.azure_batch_account.md) | 33 | Azure Batch Account | FOREIGN TABLE |
| [azure.azure_sql_serversjobagents](azure.azure_sql_serversjobagents.md) | 14 | Azure Sql ServersJobAgents | FOREIGN TABLE |
| [azure.azure_storage_account](azure.azure_storage_account.md) | 80 | Azure Storage Account | FOREIGN TABLE |
| [azure.azure_netapp_capacity_pool](azure.azure_netapp_capacity_pool.md) | 14 | Azure NetApp CapacityPool | FOREIGN TABLE |
| [azure.azure_service_fabric_cluster](azure.azure_service_fabric_cluster.md) | 41 | Azure Service Fabric Cluster | FOREIGN TABLE |
| [azure.azure_key_vault_secret](azure.azure_key_vault_secret.md) | 28 | Azure Key Vault Secret | FOREIGN TABLE |
| [azure.azure_management_group](azure.azure_management_group.md) | 21 | Azure Management Group. | FOREIGN TABLE |
| [azure.azure_compute_restore_point_collection](azure.azure_compute_restore_point_collection.md) | 14 | Azure Compute RestorePointCollection | FOREIGN TABLE |
| [azure.azure_subscription](azure.azure_subscription.md) | 19 | Azure Subscription | FOREIGN TABLE |
| [azure.azure_diagnostic_setting](azure.azure_diagnostic_setting.md) | 23 | Azure Diagnostic Setting | FOREIGN TABLE |
| [azure.azure_key_vault](azure.azure_key_vault.md) | 33 | Azure Key Vault | FOREIGN TABLE |
| [azure.azure_mysql_flexible_server](azure.azure_mysql_flexible_server.md) | 43 | Azure MySQL Flexible Server | FOREIGN TABLE |
| [azure.azure_sql_managedinstancesdatabases](azure.azure_sql_managedinstancesdatabases.md) | 14 | Azure Sql ManagedInstancesDatabases | FOREIGN TABLE |
| [azure.azure_container_group](azure.azure_container_group.md) | 32 | Azure Container Group | FOREIGN TABLE |
| [azure.azure_app_service_plan](azure.azure_app_service_plan.md) | 33 | Azure App Service Plan | FOREIGN TABLE |
| [azure.azure_logic_app_workflow](azure.azure_logic_app_workflow.md) | 32 | Azure Logic App Workflow | FOREIGN TABLE |
| [azure.azure_dns_zone](azure.azure_dns_zone.md) | 25 | Azure DNS Zone | FOREIGN TABLE |
| [azure.azure_sql_virtualmachinegroups](azure.azure_sql_virtualmachinegroups.md) | 14 | Azure Sql VirtualMachineGroups | FOREIGN TABLE |
| [azure.azure_data_factory_pipeline](azure.azure_data_factory_pipeline.md) | 26 | Azure Data Factory Pipeline | FOREIGN TABLE |
| [azure.azure_maintenance_configuration](azure.azure_maintenance_configuration.md) | 25 | Azure Maintenance Configuration. | FOREIGN TABLE |
| [azure.azure_compute_disk_metric_read_ops_hourly](azure.azure_compute_disk_metric_read_ops_hourly.md) | 14 | Azure Compute Disk Metrics - Read Ops (Hourly) | FOREIGN TABLE |
| [azure.azure_desktopvirtualization_workspace](azure.azure_desktopvirtualization_workspace.md) | 14 | Azure DesktopVirtualization Workspace | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine_scale_set_vm](azure.azure_compute_virtual_machine_scale_set_vm.md) | 44 | Azure Compute Virtual Machine Scale Set VM | FOREIGN TABLE |
| [azure.azure_lb](azure.azure_lb.md) | 32 | Azure Load Balancer | FOREIGN TABLE |
| [azure.azure_blueprint_blueprints](azure.azure_blueprint_blueprints.md) | 13 | Azure Blueprint Blueprints | FOREIGN TABLE |
| [azure.azure_app_service_web_app](azure.azure_app_service_web_app.md) | 36 | Azure App Service Web App | FOREIGN TABLE |
| [azure.azure_network_privatelinkservices](azure.azure_network_privatelinkservices.md) | 14 | Azure Network PrivateLinkServices | FOREIGN TABLE |
| [azure.azure_firewall_policy](azure.azure_firewall_policy.md) | 32 | Azure Firewall Policy | FOREIGN TABLE |
| [azure.azure_bastion_host](azure.azure_bastion_host.md) | 21 | Azure Bastion Host | FOREIGN TABLE |
| [azure.azure_cosmosdb_cassandra_cluster](azure.azure_cosmosdb_cassandra_cluster.md) | 14 | Azure Cosmosdb CassandraCluster | FOREIGN TABLE |
| [azure.azure_costmanagement_costbysubscription](azure.azure_costmanagement_costbysubscription.md) | 12 | Azure CostManagement CostBySubscription | FOREIGN TABLE |
| [azure.azure_compute_host](azure.azure_compute_host.md) | 14 | Azure Compute Host | FOREIGN TABLE |
| [azure.azure_autoscale_setting](azure.azure_autoscale_setting.md) | 20 | Azure Autoscale Setting | FOREIGN TABLE |
| [azure.azure_trafficmanager_profile](azure.azure_trafficmanager_profile.md) | 14 | Azure TrafficManager Profile | FOREIGN TABLE |
| [azure.azure_log_alert](azure.azure_log_alert.md) | 23 | Azure Log Alert | FOREIGN TABLE |
| [azure.azure_compute_host_group](azure.azure_compute_host_group.md) | 14 | Azure Compute HostGroup | FOREIGN TABLE |
| [azure.azure_policy_assignment](azure.azure_policy_assignment.md) | 25 | Azure Policy Assignment | FOREIGN TABLE |
| [azure.azure_kusto_cluster](azure.azure_kusto_cluster.md) | 38 | Azure Kusto Cluster | FOREIGN TABLE |
| [azure.azure_resource](azure.azure_resource.md) | 32 | Azure Resource | FOREIGN TABLE |
| [azure.azure_purview_account](azure.azure_purview_account.md) | 14 | Azure Purview Account | FOREIGN TABLE |
| [azure.azure_iothub_dps](azure.azure_iothub_dps.md) | 30 | Azure Iot Hub Dps | FOREIGN TABLE |
| [azure.azure_network_connections](azure.azure_network_connections.md) | 14 | Azure Network Connections | FOREIGN TABLE |
| [azure.azure_cognitive_account](azure.azure_cognitive_account.md) | 44 | Azure Cognitive Account | FOREIGN TABLE |
| [azure.azure_lb_outbound_rule](azure.azure_lb_outbound_rule.md) | 24 | Azure Load Balancer Outbound Rule | FOREIGN TABLE |
| [azure.azure_botservice_bot](azure.azure_botservice_bot.md) | 14 | Azure BotService Bot | FOREIGN TABLE |
| [azure.azure_private_endpoint](azure.azure_private_endpoint.md) | 29 | Azure Private Endpoint | FOREIGN TABLE |
| [azure.azure_management_lock](azure.azure_management_lock.md) | 19 | Azure Management Lock | FOREIGN TABLE |
| [azure.azure_virtual_network](azure.azure_virtual_network.md) | 25 | Azure Virtual Network | FOREIGN TABLE |
| [azure.azure_private_dns_zone](azure.azure_private_dns_zone.md) | 25 | Azure Private DNS Zone | FOREIGN TABLE |
| [azure.azure_kubernetes_service_version](azure.azure_kubernetes_service_version.md) | 15 | Azure Kubernetes Service Version | FOREIGN TABLE |
| [azure.azure_storage_table_service](azure.azure_storage_table_service.md) | 18 | Azure Storage Table Service | FOREIGN TABLE |
| [azure.azure_sql_database](azure.azure_sql_database.md) | 51 | Azure SQL Database | FOREIGN TABLE |
| [azure.azure_healthcare_service](azure.azure_healthcare_service.md) | 33 | Azure Healthcare Service | FOREIGN TABLE |
| [azure.azure_compute_ssh_key](azure.azure_compute_ssh_key.md) | 18 | Azure Compute SSH Key | FOREIGN TABLE |
| [azure.azure_eventhub_namespace](azure.azure_eventhub_namespace.md) | 35 | Azure Event Hub Namespace | FOREIGN TABLE |
| [azure.azure_security_center_jit_network_access_policy](azure.azure_security_center_jit_network_access_policy.md) | 17 | Azure Security Center JIT Network Access Policy | FOREIGN TABLE |
| [azure.azure_compute_availability_set](azure.azure_compute_availability_set.md) | 25 | Azure Compute Availability Set | FOREIGN TABLE |
| [azure.azure_key_vault_managed_hardware_security_module](azure.azure_key_vault_managed_hardware_security_module.md) | 28 | Azure Key Vault Managed Hardware Security Module | FOREIGN TABLE |
| [azure.azure_virtualmachineimages_imagetemplates](azure.azure_virtualmachineimages_imagetemplates.md) | 14 | Azure VirtualMachineImages ImageTemplates | FOREIGN TABLE |
| [azure.azure_network_dnsresolver](azure.azure_network_dnsresolver.md) | 14 | Azure Network DNSResolver | FOREIGN TABLE |
| [azure.azure_network_localnetworkgateways](azure.azure_network_localnetworkgateways.md) | 14 | Azure Network LocalNetworkGateways | FOREIGN TABLE |
| [azure.azure_automation_account](azure.azure_automation_account.md) | 26 | Azure Automation Account | FOREIGN TABLE |
| [azure.azure_recovery_services_backup_policy](azure.azure_recovery_services_backup_policy.md) | 16 | Azure Recovery Services Backup Policy | FOREIGN TABLE |
| [azure.azure_api_management_backend](azure.azure_api_management_backend.md) | 21 | Azure API Management Backend | FOREIGN TABLE |
| [azure.azure_netapp_account](azure.azure_netapp_account.md) | 14 | Azure NetApp Account | FOREIGN TABLE |
| [azure.azure_devtestlab_lab](azure.azure_devtestlab_lab.md) | 14 | Azure DevTestLab Lab | FOREIGN TABLE |
| [azure.azure_storage_queue](azure.azure_storage_queue.md) | 18 | Azure Storage Queue | FOREIGN TABLE |
| [azure.azure_storage_share_file](azure.azure_storage_share_file.md) | 29 | Azure Storage Share File | FOREIGN TABLE |
| [azure.azure_app_service_function_app](azure.azure_app_service_function_app.md) | 34 | Azure App Service Function App | FOREIGN TABLE |
| [azure.azure_application_security_group](azure.azure_application_security_group.md) | 20 | Azure Application Security Group | FOREIGN TABLE |
| [azure.azure_application_gateway](azure.azure_application_gateway.md) | 51 | Azure Application Gateway | FOREIGN TABLE |
| [azure.azure_network_ddos_protection_plan](azure.azure_network_ddos_protection_plan.md) | 14 | Azure Network DDoSProtectionPlan | FOREIGN TABLE |
| [azure.azure_container_registry](azure.azure_container_registry.md) | 41 | Azure Container Registry | FOREIGN TABLE |
| [azure.azure_ad_group](azure.azure_ad_group.md) | 14 | [DEPRECATED] This table has been deprecated and will be removed in a future release. Please use the azuread_group table in the azuread plugin instead. | FOREIGN TABLE |
| [azure.azure_cosmosdb_account](azure.azure_cosmosdb_account.md) | 47 | Azure Cosmos DB Account | FOREIGN TABLE |
| [azure.azure_spring_cloud_service](azure.azure_spring_cloud_service.md) | 20 | Azure Spring Cloud Service | FOREIGN TABLE |
| [azure.azure_network_virtualwans](azure.azure_network_virtualwans.md) | 14 | Azure Network VirtualWans | FOREIGN TABLE |
| [azure.azure_dataprotection_backupvaults](azure.azure_dataprotection_backupvaults.md) | 24 | Azure DataProtection BackupVaults | FOREIGN TABLE |
| [azure.azure_dashboard_grafana](azure.azure_dashboard_grafana.md) | 13 | Azure Dashboard Grafana | FOREIGN TABLE |
| [azure.azure_ad_user](azure.azure_ad_user.md) | 20 | [DEPRECATED] This table has been deprecated and will be removed in a future release. Please use the azuread_user table in the azuread plugin instead. | FOREIGN TABLE |
| [azure.azure_costmanagement_costbyresourcetype](azure.azure_costmanagement_costbyresourcetype.md) | 16 | Azure CostManagement CostByResourceType | FOREIGN TABLE |
| [azure.azure_security_center_sub_assessment](azure.azure_security_center_sub_assessment.md) | 28 | Azure Security Center Sub Assessment | FOREIGN TABLE |
| [azure.azure_postgresql_flexible_server](azure.azure_postgresql_flexible_server.md) | 19 | Azure PostgreSQL Flexible Server | FOREIGN TABLE |
| [azure.azure_public_ip](azure.azure_public_ip.md) | 35 | Azure Public IP | FOREIGN TABLE |
| [azure.azure_mysql_server](azure.azure_mysql_server.md) | 46 | Azure MySQL Server | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine_metric_cpu_utilization_hourly](azure.azure_compute_virtual_machine_metric_cpu_utilization_hourly.md) | 14 | Azure Compute Virtual Machine Metrics - CPU Utilization (Hourly) | FOREIGN TABLE |
| [azure.azure_log_profile](azure.azure_log_profile.md) | 23 | Azure Log Profile | FOREIGN TABLE |
| [azure.azure_role_definition](azure.azure_role_definition.md) | 19 | Azure Role Definition | FOREIGN TABLE |
| [azure.azure_sql_instance_pool](azure.azure_sql_instance_pool.md) | 14 | Azure Sql InstancePool | FOREIGN TABLE |
| [azure.azure_user_effective_access](azure.azure_user_effective_access.md) | 19 | Azure User Effective Access | FOREIGN TABLE |
| [azure.azure_network_privateendpoints](azure.azure_network_privateendpoints.md) | 14 | Azure Network PrivateEndpoints | FOREIGN TABLE |
| [azure.azure_app_service_environment](azure.azure_app_service_environment.md) | 31 | Azure App Service Environment | FOREIGN TABLE |
| [azure.azure_datamigration_services](azure.azure_datamigration_services.md) | 14 | Azure DataMigration Services | FOREIGN TABLE |
| [azure.azure_compute_disk](azure.azure_compute_disk.md) | 53 | Azure Compute Disk | FOREIGN TABLE |
| [azure.azure_cdn_profiles](azure.azure_cdn_profiles.md) | 24 | Azure Cdn Profiles | FOREIGN TABLE |
| [azure.azure_data_factory](azure.azure_data_factory.md) | 28 | Azure Data Factory | FOREIGN TABLE |
| [azure.azure_security_center_subscription_pricing](azure.azure_security_center_subscription_pricing.md) | 16 | Azure Security Center Subscription Pricing | FOREIGN TABLE |
| [azure.azure_mssql_virtual_machine](azure.azure_mssql_virtual_machine.md) | 31 | Azure MS SQL Virtual Machine | FOREIGN TABLE |
| [azure.azure_cache_redisenterprise](azure.azure_cache_redisenterprise.md) | 14 | Azure Cache RedisEnterprise | FOREIGN TABLE |
| [azure.azure_data_lake_analytics_account](azure.azure_data_lake_analytics_account.md) | 40 | Azure Data Lake Analytics account | FOREIGN TABLE |
| [azure.azure_compute_cloudservices](azure.azure_compute_cloudservices.md) | 14 | Azure Compute CloudServices | FOREIGN TABLE |
| [azure.azure_compute_disk_metric_write_ops_hourly](azure.azure_compute_disk_metric_write_ops_hourly.md) | 14 | Azure Compute Disk Metrics - Write Ops (Hourly) | FOREIGN TABLE |
| [azure.azure_compute_image_gallery](azure.azure_compute_image_gallery.md) | 14 | Azure Compute ImageGallery | FOREIGN TABLE |
| [azure.azure_lighthouse_definition](azure.azure_lighthouse_definition.md) | 19 | Azure Lighthouse Definition | FOREIGN TABLE |
| [azure.azure_logic_integrationaccounts](azure.azure_logic_integrationaccounts.md) | 14 | Azure Logic IntegrationAccounts | FOREIGN TABLE |
| [azure.azure_compute_virtual_machine_scale_set_network_interface](azure.azure_compute_virtual_machine_scale_set_network_interface.md) | 30 | Azure Compute Virtual Machine Scale Set Network Interface | FOREIGN TABLE |
| [azure.azure_lb_rule](azure.azure_lb_rule.md) | 30 | Azure Load Balancer Rule | FOREIGN TABLE |
| [azuread.azuread_user_registration_details](azuread.azuread_user_registration_details.md) | 27 | Represents an Azure AD user registration details. | FOREIGN TABLE |
| [azuread.azuread_admin_consent_request_policy](azuread.azuread_admin_consent_request_policy.md) | 17 | Represents the policy for enabling or disabling the Azure AD admin consent workflow. | FOREIGN TABLE |
| [azuread.azuread_app_registration](azuread.azuread_app_registration.md) | 31 | Represents an Azure Active Directory (Azure AD) service principal. | FOREIGN TABLE |
| [azuread.azuread_identity_provider](azuread.azuread_identity_provider.md) | 16 | Represents an Azure Active Directory (Azure AD) identity provider. | FOREIGN TABLE |
| [azuread.azuread_authorization_policy](azuread.azuread_authorization_policy.md) | 21 | Represents a policy that can control Azure Active Directory authorization settings. | FOREIGN TABLE |
| [azuread.azuread_service_principal](azuread.azuread_service_principal.md) | 38 | Represents an Azure Active Directory (Azure AD) service principal. | FOREIGN TABLE |
| [azuread.azuread_directory_audit_report](azuread.azuread_directory_audit_report.md) | 23 | Represents the list of audit logs generated by Azure Active Directory. | FOREIGN TABLE |
| [azuread.azuread_conditional_access_policy](azuread.azuread_conditional_access_policy.md) | 31 | Represents an Azure Active Directory (Azure AD) Conditional Access Policy. | FOREIGN TABLE |
| [azuread.azuread_sign_in_report](azuread.azuread_sign_in_report.md) | 34 | Represents an Azure Active Directory (Azure AD) sign-in report. | FOREIGN TABLE |
| [azuread.azuread_device](azuread.azuread_device.md) | 26 | Represents an Azure AD device. | FOREIGN TABLE |
| [azuread.azuread_microsoft_application](azuread.azuread_microsoft_application.md) | 38 | Represents an Azure Microsoft Application. | FOREIGN TABLE |
| [azuread.azuread_domain](azuread.azuread_domain.md) | 19 | Represents an Azure Active Directory (Azure AD) domain. | FOREIGN TABLE |
| [azuread.azuread_group](azuread.azuread_group.md) | 44 | Represents an Azure AD group. | FOREIGN TABLE |
| [azuread.azuread_managed_identity](azuread.azuread_managed_identity.md) | 38 | Represents an Azure Managed Identity. | FOREIGN TABLE |
| [azuread.azuread_tenant](azuread.azuread_tenant.md) | 16 | Represents an Azure AD Tenant. | FOREIGN TABLE |
| [azuread.azuread_user](azuread.azuread_user.md) | 26 | Represents an Azure AD user account. | FOREIGN TABLE |
| [azuread.azuread_application](azuread.azuread_application.md) | 31 | Represents an Azure Active Directory (Azure AD) application. | FOREIGN TABLE |
| [azuread.azuread_enterprise_application](azuread.azuread_enterprise_application.md) | 38 | Represents an Azure Enterprise Application. | FOREIGN TABLE |
| [azuread.azuread_group_membership](azuread.azuread_group_membership.md) | 22 | Represents an Azure AD group membership. | FOREIGN TABLE |
| [azuread.azuread_directory_setting](azuread.azuread_directory_setting.md) | 16 | Represents the configurations that can be used to customize the tenant-wide and object-specific restrictions and allowed behavior | FOREIGN TABLE |
| [azuread.azuread_security_defaults_policy](azuread.azuread_security_defaults_policy.md) | 15 | Represents the Azure Active Directory security defaults policy | FOREIGN TABLE |
| [azuread.azuread_directory_role](azuread.azuread_directory_role.md) | 16 | Represents an Azure Active Directory (Azure AD) directory role. | FOREIGN TABLE |
| [opengovernance.og_resources](opengovernance.og_resources.md) | 12 | OpenGovernance Resources | FOREIGN TABLE |
| [opengovernance.pennywise_cost_estimate](opengovernance.pennywise_cost_estimate.md) | 6 | Pennywise Resource Cost Estimate | FOREIGN TABLE |
| [opengovernance.og_findings](opengovernance.og_findings.md) | 21 | OpenGovernance Compliance Findings | FOREIGN TABLE |
| [opengovernance.og_lookup](opengovernance.og_lookup.md) | 12 | OpenGovernance Resource Lookup | FOREIGN TABLE |
| [opengovernance.og_cost](opengovernance.og_cost.md) | 15 | Account-level cost of connections onboarded into platform | FOREIGN TABLE |
| [opengovernance.og_metrics](opengovernance.og_metrics.md) | 12 | opengovernance Metrics | FOREIGN TABLE |
| [opengovernance.og_api_benchmark_controls](opengovernance.og_api_benchmark_controls.md) | 18 | Wrapper for benchmark summary api | FOREIGN TABLE |
| [opengovernance.og_connections](opengovernance.og_connections.md) | 10 | OpenGovernance Connections | FOREIGN TABLE |
| [opengovernance.og_api_benchmark_summary](opengovernance.og_api_benchmark_summary.md) | 42 | Wrapper for benchmark summary api | FOREIGN TABLE |
| [public.s3_state](public.s3_state.md) | 33 |  | MATERIALIZED VIEW |
| [public.og_configs](public.og_configs.md) | 2 |  | BASE TABLE |

## Stored procedures and functions

| Name | ReturnType | Arguments | Type |
| ---- | ------- | ------- | ---- |
| public.fdw_handler | fdw_handler |  | FUNCTION |
| public.fdw_validator | void | text[], oid | FUNCTION |
| public.normal_rand | float8 | integer, double precision, double precision | FUNCTION |
| public.crosstab | record | text | FUNCTION |
| public.crosstab2 | tablefunc_crosstab_2 | text | FUNCTION |
| public.crosstab3 | tablefunc_crosstab_3 | text | FUNCTION |
| public.crosstab4 | tablefunc_crosstab_4 | text | FUNCTION |
| public.crosstab | record | text, integer | FUNCTION |
| public.crosstab | record | text, text | FUNCTION |
| public.connectby | record | text, text, text, text, integer, text | FUNCTION |
| public.connectby | record | text, text, text, text, integer | FUNCTION |
| public.connectby | record | text, text, text, text, text, integer, text | FUNCTION |
| public.connectby | record | text, text, text, text, text, integer | FUNCTION |
| public.ltree_in | ltree | cstring | FUNCTION |
| public.ltree_out | cstring | ltree | FUNCTION |
| public.ltree_cmp | int4 | ltree, ltree | FUNCTION |
| public.ltree_lt | bool | ltree, ltree | FUNCTION |
| public.ltree_le | bool | ltree, ltree | FUNCTION |
| public.ltree_eq | bool | ltree, ltree | FUNCTION |
| public.ltree_ge | bool | ltree, ltree | FUNCTION |
| public.ltree_gt | bool | ltree, ltree | FUNCTION |
| public.ltree_ne | bool | ltree, ltree | FUNCTION |
| public.subltree | ltree | ltree, integer, integer | FUNCTION |
| public.subpath | ltree | ltree, integer, integer | FUNCTION |
| public.subpath | ltree | ltree, integer | FUNCTION |
| public.index | int4 | ltree, ltree | FUNCTION |
| public.index | int4 | ltree, ltree, integer | FUNCTION |
| public.nlevel | int4 | ltree | FUNCTION |
| public.ltree2text | text | ltree | FUNCTION |
| public.text2ltree | ltree | text | FUNCTION |
| public.lca | ltree | ltree[] | FUNCTION |
| public.lca | ltree | ltree, ltree | FUNCTION |
| public.lca | ltree | ltree, ltree, ltree | FUNCTION |
| public.lca | ltree | ltree, ltree, ltree, ltree | FUNCTION |
| public.lca | ltree | ltree, ltree, ltree, ltree, ltree | FUNCTION |
| public.lca | ltree | ltree, ltree, ltree, ltree, ltree, ltree | FUNCTION |
| public.lca | ltree | ltree, ltree, ltree, ltree, ltree, ltree, ltree | FUNCTION |
| public.lca | ltree | ltree, ltree, ltree, ltree, ltree, ltree, ltree, ltree | FUNCTION |
| public.ltree_isparent | bool | ltree, ltree | FUNCTION |
| public.ltree_risparent | bool | ltree, ltree | FUNCTION |
| public.ltree_addltree | ltree | ltree, ltree | FUNCTION |
| public.ltree_addtext | ltree | ltree, text | FUNCTION |
| public.ltree_textadd | ltree | text, ltree | FUNCTION |
| public.ltreeparentsel | float8 | internal, oid, internal, integer | FUNCTION |
| public.lquery_in | lquery | cstring | FUNCTION |
| public.lquery_out | cstring | lquery | FUNCTION |
| public.ltq_regex | bool | ltree, lquery | FUNCTION |
| public.ltq_rregex | bool | lquery, ltree | FUNCTION |
| public.lt_q_regex | bool | ltree, lquery[] | FUNCTION |
| public.lt_q_rregex | bool | lquery[], ltree | FUNCTION |
| public.ltxtq_in | ltxtquery | cstring | FUNCTION |
| public.ltxtq_out | cstring | ltxtquery | FUNCTION |
| public.ltxtq_exec | bool | ltree, ltxtquery | FUNCTION |
| public.ltxtq_rexec | bool | ltxtquery, ltree | FUNCTION |
| public.ltree_gist_in | ltree_gist | cstring | FUNCTION |
| public.ltree_gist_out | cstring | ltree_gist | FUNCTION |
| public.ltree_consistent | bool | internal, ltree, smallint, oid, internal | FUNCTION |
| public.ltree_compress | internal | internal | FUNCTION |
| public.ltree_decompress | internal | internal | FUNCTION |
| public.ltree_penalty | internal | internal, internal, internal | FUNCTION |
| public.ltree_picksplit | internal | internal, internal | FUNCTION |
| public.ltree_union | ltree_gist | internal, internal | FUNCTION |
| public.ltree_same | internal | ltree_gist, ltree_gist, internal | FUNCTION |
| public._ltree_isparent | bool | ltree[], ltree | FUNCTION |
| public._ltree_r_isparent | bool | ltree, ltree[] | FUNCTION |
| public._ltree_risparent | bool | ltree[], ltree | FUNCTION |
| public._ltree_r_risparent | bool | ltree, ltree[] | FUNCTION |
| public._ltq_regex | bool | ltree[], lquery | FUNCTION |
| public._ltq_rregex | bool | lquery, ltree[] | FUNCTION |
| public._lt_q_regex | bool | ltree[], lquery[] | FUNCTION |
| public._lt_q_rregex | bool | lquery[], ltree[] | FUNCTION |
| public._ltxtq_exec | bool | ltree[], ltxtquery | FUNCTION |
| public._ltxtq_rexec | bool | ltxtquery, ltree[] | FUNCTION |
| public._ltree_extract_isparent | ltree | ltree[], ltree | FUNCTION |
| public._ltree_extract_risparent | ltree | ltree[], ltree | FUNCTION |
| public._ltq_extract_regex | ltree | ltree[], lquery | FUNCTION |
| public._ltxtq_extract_exec | ltree | ltree[], ltxtquery | FUNCTION |
| public._ltree_consistent | bool | internal, ltree[], smallint, oid, internal | FUNCTION |
| public._ltree_compress | internal | internal | FUNCTION |
| public._ltree_penalty | internal | internal, internal, internal | FUNCTION |
| public._ltree_picksplit | internal | internal, internal | FUNCTION |
| public._ltree_union | ltree_gist | internal, internal | FUNCTION |
| public._ltree_same | internal | ltree_gist, ltree_gist, internal | FUNCTION |
| public.ltree_recv | ltree | internal | FUNCTION |
| public.ltree_send | bytea | ltree | FUNCTION |
| public.lquery_recv | lquery | internal | FUNCTION |
| public.lquery_send | bytea | lquery | FUNCTION |
| public.ltxtq_recv | ltxtquery | internal | FUNCTION |
| public.ltxtq_send | bytea | ltxtquery | FUNCTION |
| public.ltree_gist_options | void | internal | FUNCTION |
| public._ltree_gist_options | void | internal | FUNCTION |
| steampipe_internal.glob | text | input_glob text | FUNCTION |
| steampipe_internal.meta_cache | void | command text | FUNCTION |
| steampipe_internal.meta_connection_cache_clear | void | connection text | FUNCTION |
| steampipe_internal.meta_cache_ttl | void | duration integer | FUNCTION |
| public.clone_foreign_schema | text | source_schema text, dest_schema text, plugin_name text | FUNCTION |
| public.clone_table_comments | text | source_schema text, dest_schema text | FUNCTION |

## Relations

![er](schema.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
