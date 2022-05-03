class Receptionist {
    
    patientList = [];
    doctorList = [];
    insuranceProviders = [];
    firstName;
    lastName;
    TITLE = "Receptionist";
    username;
    password;

    constructor(firstName, lastName, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
    }

    checkPatientIn(patient) {
        patient.markPresent();
    }
}