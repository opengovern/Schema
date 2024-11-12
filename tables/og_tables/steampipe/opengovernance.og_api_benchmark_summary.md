# opengovernance.og_api_benchmark_summary

## Description

Wrapper for benchmark summary api

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| benchmark_id | text |  | true |  |  | The ID of the benchmark in OpenGovernance |
| connection_id | text |  | true |  |  | The connection IDs included in the benchmark summary |
| time_at | timestamp with time zone |  | true |  |  | The timestamp of the benchmark summary record |
| conformance_status_passed_count | bigint |  | true |  |  | The number of checks that passed in the benchmark summary |
| conformance_status_failed_count | bigint |  | true |  |  | The number of checks that failed in the benchmark summary |
| severity_result_critical_count | bigint |  | true |  |  | The number of critical severity findings in the benchmark summary |
| severity_result_high_count | bigint |  | true |  |  | The number of high severity findings in the benchmark summary |
| severity_result_medium_count | bigint |  | true |  |  | The number of medium severity findings in the benchmark summary |
| severity_result_low_count | bigint |  | true |  |  | The number of low severity findings in the benchmark summary |
| severity_result_none_count | bigint |  | true |  |  | The number of findings with no severity in the benchmark summary |
| controls_severity_status_total_total_count | bigint |  | true |  |  | The total number of controls in the benchmark summary |
| controls_severity_status_total_passed_count | bigint |  | true |  |  | The number of controls that passed in the benchmark summary |
| controls_severity_status_critical_total_count | bigint |  | true |  |  | The total number of critical severity controls in the benchmark summary |
| controls_severity_status_critical_passed_count | bigint |  | true |  |  | The number of critical severity controls that passed in the benchmark summary |
| controls_severity_status_high_total_count | bigint |  | true |  |  | The total number of high severity controls in the benchmark summary |
| controls_severity_status_high_passed_count | bigint |  | true |  |  | The number of high severity controls that passed in the benchmark summary |
| controls_severity_status_medium_total_count | bigint |  | true |  |  | The total number of medium severity controls in the benchmark summary |
| controls_severity_status_medium_passed_count | bigint |  | true |  |  | The number of medium severity controls that passed in the benchmark summary |
| controls_severity_status_low_total_count | bigint |  | true |  |  | The total number of low severity controls in the benchmark summary |
| controls_severity_status_low_passed_count | bigint |  | true |  |  | The number of low severity controls that passed in the benchmark summary |
| controls_severity_status_none_total_count | bigint |  | true |  |  | The total number of controls with no severity in the benchmark summary |
| controls_severity_status_none_passed_count | bigint |  | true |  |  | The number of controls with no severity that passed in the benchmark summary |
| resources_severity_status_total_total_count | bigint |  | true |  |  | The total number of resources in the benchmark summary |
| resources_severity_status_total_passed_count | bigint |  | true |  |  | The number of resources that passed in the benchmark summary |
| resources_severity_status_critical_total_count | bigint |  | true |  |  | The total number of critical severity resources in the benchmark summary |
| resources_severity_status_critical_passed_count | bigint |  | true |  |  | The number of critical severity resources that passed in the benchmark summary |
| resources_severity_status_high_total_count | bigint |  | true |  |  | The total number of high severity resources in the benchmark summary |
| resources_severity_status_high_passed_count | bigint |  | true |  |  | The number of high severity resources that passed in the benchmark summary |
| resources_severity_status_medium_total_count | bigint |  | true |  |  | The total number of medium severity resources in the benchmark summary |
| resources_severity_status_medium_passed_count | bigint |  | true |  |  | The number of medium severity resources that passed in the benchmark summary |
| resources_severity_status_low_total_count | bigint |  | true |  |  | The total number of low severity resources in the benchmark summary |
| resources_severity_status_low_passed_count | bigint |  | true |  |  | The number of low severity resources that passed in the benchmark summary |
| resources_severity_status_none_total_count | bigint |  | true |  |  | The total number of resources with no severity in the benchmark summary |
| resources_severity_status_none_passed_count | bigint |  | true |  |  | The number of resources with no severity that passed in the benchmark summary |
| connections_result_conformance_status_passed_count | bigint |  | true |  |  | The number of checks that passed in the benchmark summary for the connection |
| connections_result_conformance_status_total_count | bigint |  | true |  |  | The total number of checks in the benchmark summary for the connection |
| cost_optimization | double precision |  | true |  |  | The cost optimization score of the benchmark summary |
| evaluated_at | timestamp with time zone |  | true |  |  | The timestamp when the benchmark summary was evaluated |
| api_result | jsonb |  | true |  |  | The result of the benchmark summary |
| sp_connection_name | text |  | true |  |  | Steampipe connection name. |
| sp_ctx | jsonb |  | true |  |  | Steampipe context in JSON form. |
| _ctx | jsonb |  | true |  |  | Steampipe context in JSON form. |

## Relations

![er](opengovernance.og_api_benchmark_summary.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
