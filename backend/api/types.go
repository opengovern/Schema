package api

import "strings"


type ComplianceResultSeverity string

const (
	ComplianceResultSeverityNone     ComplianceResultSeverity = "none"
	ComplianceResultSeverityLow      ComplianceResultSeverity = "low"
	ComplianceResultSeverityMedium   ComplianceResultSeverity = "medium"
	ComplianceResultSeverityHigh     ComplianceResultSeverity = "high"
	ComplianceResultSeverityCritical ComplianceResultSeverity = "critical"
)
func (s ComplianceResultSeverity) String() string {
	return string(s)
}


var complianceResultSeveritiesSeverities = []ComplianceResultSeverity{
	ComplianceResultSeverityNone,
	ComplianceResultSeverityLow,
	ComplianceResultSeverityMedium,
	ComplianceResultSeverityHigh,
	ComplianceResultSeverityCritical,
}
func ParseComplianceResultSeverity(s string) ComplianceResultSeverity {
	s = strings.ToLower(s)
	for _, sev := range complianceResultSeveritiesSeverities {
		if s == strings.ToLower(sev.String()) {
			return sev
		}
	}
	return ""
}

func ParseComplianceResultSeverities(list []string) []ComplianceResultSeverity {
	result := make([]ComplianceResultSeverity, 0, len(list))
	for _, s := range list {
		result = append(result, ParseComplianceResultSeverity(s))
	}
	return result
}
