(function() {
	"use strict";
	var baseURL = "http://ec2-35-154-13-63.ap-south-1.compute.amazonaws.com:9090/clinivantage/";

	angular.module("cognitionApp").constant("ACTION", {
		"CONFIGURE" : {
			"getAllCountries" : baseURL + "country/getAllCountries",
			"getCodeMaster" : baseURL + "codeMaster/getCodeMaster?codeGroup=",
			"getHopsitalUnits" : baseURL + "hospital/getHopsitalUnits?hospitalId=",
			"getStatesOfCountry" : baseURL + "states/getStatesOfCountry?countryId=",
			"getCitiesOfStates" : baseURL + "city/getCitiesOfStates?stateId=",
			"getPatientCount" : baseURL + "register/getPatientCount/",
			"getDrilldownForReg" : baseURL + "register/getMonthlyPatientRegistrationCount",
			"getDrList" : baseURL + "doctor/getDoctors",
			"getAppointmentsCount" : baseURL + "opd/getAppointmentsCount",
			"getAverageConsultationCount" : baseURL + "opd/getAverageConsultationCount",
			"getTypeOfAppointmentBookingCount" :  baseURL + "opd/getTypeOfAppointmentBookingCount",
			"getAppCancellationAnalysisCount" :  baseURL + "opd/getAppCancellationAnalysisCount",
			"getVisitAnalysisCount" : baseURL + "opd/getVisitAnalysisCount",
			"encounterTopConsultants" : baseURL + "opd/encounterTopConsultants",
			"encounterBottomConsultants" : baseURL + "opd/encounterBottomConsultants",
			"getEncountersComparative" : baseURL + "opd/getEncountersComparative",
			"getTopPackages" : baseURL + "opd/getTopPackages",
			"getBottomPackages" : baseURL + "opd/getBottomPackages",
			"getPackagesComparative" : baseURL + "opd/getPackagesComparative",
			"admissionAnalysis" :  baseURL + "adt/admissionAnalysis",
			"getDailyPatients" : baseURL + "getDailyPatients"
		}
	})
})();