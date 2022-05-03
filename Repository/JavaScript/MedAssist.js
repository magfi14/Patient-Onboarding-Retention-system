class MedAssist {

    patientList = [];
    doctorList = [];
    insuranceProviders = [];
    firstName;
    lastName;
    TITLE = "Medical Assistant";
    username;
    password;

    constructor(firstName, lastName, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }

    getPersonalInformation(patient);
    acceptAppointment(patient);
    acceptReschedule(patient);
    rejectReschedule(patient);
    rejectAppointment(patient);

}

class AdminMedAssist extends MedAssist {

    patientList = [];
    doctorList = [];
    insuranceProviders = [];
    firstName;
    lastName;
    TITLE = "Administrative Medical Assistant";
    username;
    password;

    constructor(firstName, lastName, username, password) {
        super(firstName, lastName, username, password);
    }

    getPersonalInformation(patient) {
        super.getPersonalInformation(patient);
    }

    acceptAppointment(patient) {
        super.acceptAppointment(patient);
    }

    acceptReschedule(patient) {
        super.acceptReschedule(patient);
    }

    rejectReschedule(patient) {
        super.rejectReschedule(patient);
    }

    rejectAppointment(patient) {
        super.rejectAppointment(patient);
    }

    checkPatientIn(patient);
    processInsurance(patient, insuranceProvider);

}

class ClinicalMedicAssist extends MedAssist {

    patientList = [];
    doctorList = [];
    insuranceProviders = [];
    firstName;
    lastName;
    TITLE = "Clinical Medical Assistant";
    username;
    password;

    constructor(firstName, lastName, username, password) {
        super(firstName, lastName, username, password);
    }

    updatePatientDetails(patient);

    acceptAppointment(patient) {
        super.acceptAppointment(patient);
    }

    acceptReschedule(patient) {
        super.acceptReschedule(patient);
    }

    rejectReschedule(patient) {
        super.rejectReschedule(patient);
    }

    rejectAppointment(patient) {
        super.rejectAppointment(patient);
    }

}