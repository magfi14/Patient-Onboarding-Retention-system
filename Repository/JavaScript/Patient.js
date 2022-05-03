class Patient {

    appointmentGoal;
    appointmentDate;
    firstName;
    lastName;
    TITLE = "Patient";
    insuranceProvider;
    height;
    weight;
    healthImprovementPlan;
    onboarded;
    appointmentList = [];
    isPresent;

    constructor(firstName, lastName, height, weight, insuranceProvider) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
        this.insuranceProvider = insuranceProvider;
        this.onboarded = false;
    }

    markPresent() {
        isPresent = true;
    }

    markAbsent() {
        isPresent = false;
    }
   
    scheduleAppointment(appointmentGoal, appointmentDate) {
        this.appointmentGoal = appointmentGoal;
        this.appointmentDate = appointmentDate;
        let appointment = new Appointment(appointmentGoal, appointmentDate);
        this.appointmentList.push(appointment);
        this.appointmentList.sort();
    }

    rescheduleAppointment(appointmentGoal, appointmentDate, newAppointmentDate) {
        this.appointmentGoal = appointmentGoal;
        this.appointmentDate = appointmentDate;
        x = 0;
        while (x < this.appointmentList.length) {
            if (this.appointmentList[x].appointmentGoal == appointmentGoal && this.appointmentList[x].appointmentDate == appointmentDate) {
                this.appointmentList[x].appointmentDate = newAppointmentDate;
                this.appointmentList[x].appointmentGoal = appointmentGoal;
            }
            x++;
        }
    }

    cancelAppointment(appointmentDate) {
        this.appointmentDate = appointmentDate;
        x = 0;
        while (x < this.appointmentList.length) {
            if (this.appointmentList[x].appointmentDate == appointmentDate) {
                this.appointmentList.splice(x, 1);
            }
            x++;
        }
    }

    changeAppointmentGoal(newAppointmentGoal) {
        x = 0;
        while (x < this.appointmentList.length) {
            if (this.appointmentList[x].appointmentGoal == this.appointmentGoal) {
                this.appointmentList[x].appointmentGoal = newAppointmentGoal;
            }
            x++;
        }
    }

}

class Appointment {

    assignedDoctor;
    assignedPatient;
    date;
    goal;

    constructor(date, goal) {
        this.date = date;
        this.goal = goal;
    }

    setDoctor(doctor) {
        this.assignedDoctor = doctor;
    }

    getDoctor() {
        return this.assignedDoctor;
    }

    setPatient(patient) {
        this.assignedPatient = patient;
    }

    getPatient() {
        return this.assignedPatient;
    }

    getGoal() {
        return this.goal;
    }

    setGoal(goal) {
        this.goal = goal;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }

}