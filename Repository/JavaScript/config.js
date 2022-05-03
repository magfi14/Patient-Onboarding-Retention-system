// Initialization

var Database = require("airtable");
Database.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyvsyCu5tq9miUnM",
});
var base = Database.base("appkls8Oq4277WW5");

// Creating a new Patient Record

function createPatientRecord(
  firstName,
  lastName,
  age,
  weight,
  height,
  appointmentGoal,
  appointmentDate
) {
  base("Patient").create(
    {
      "fields": {
        "First Name": firstName,
        "Last Name": lastName,
        "Age": age,
        "Weight": weight,
        "Height": height,
        "Appointment Goal": appointmentGoal,
        "Appointment Date": appointmentDate,
      },
    },
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Created", record.get("Name"));
    }
  );
}

// Updating a Patient Record

function updatePatientRecord(
  id,
  firstName,
  lastName,
  age,
  weight,
  height,
  appointmentGoal,
  appointmentDate
) {
  base("Patient").update(
    {
      id: id,
      fields: {
        "First Name": firstName,
        "Last Name": lastName,
        "Age": age,
        "Weight": weight,
        "Height": height,
        "Appointment Goal": appointmentGoal,
        "Appointment Date": appointmentDate,
      },
    },
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Updated", record.get("Name"));
    }
  );
}

// Retrieving the PATIENT Data from the Database

function retrievePatientData() {
  base("Patient")
    .select({
      // Selecting the first 10 records in the table:
      maxRecords: 10,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record) {
          //console.log('Retrieved', record.get('Name'));
          console.log("Retrieved", record.get("ID"));
        });

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}

// Retrieving a Patient Record from the database

function retrievePatientRecord(ID) {
  base("Patient").find(ID, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Retrieved", record.get("Name"));
  });
}

// Deleting a Patient Record from the database

function deletePatientRecord(IDs) {
  base("Patient").destroy(IDs, function (err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    deletedRecords.forEach(function (deletedRecord) {
      console.log("Deleted", deletedRecord.get("Name"));
    });
  });
}

// Creating a Staff Record

function createStaffRecord(username, role, firstName, lastName, insuranceProvider) {
    base("Staff").create(
        {
        "fields": {
            "Username": username,
            "Role": role,
            "First Name": firstName,
            "Last Name": lastName,
            "Insurance Provider": insuranceProvider,
        },
        },
        function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Created", record.get("Name"));
        }
    );
}

// Updating a Staff Record

function updateStaffRecord(username, role, firstName, lastName, insuranceProvider) {
    base("Staff").update(
        {
        "fields": {
            "Username": username,
            "Role": role,
            "First Name": firstName,
            "Last Name": lastName,
            "Insurance Provider": insuranceProvider,
        },
        },
        function (err, record) {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Updated", record.get("Name"));
        }
    );
}

// Listing all the Staff records

function retrieveStaffData() {
  base("Staff")
    .select({
      // Selecting the first 10 records in the table:
      maxRecords: 10,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record) {
          //console.log('Retrieved', record.get('Name'));
          console.log("Retrieved", record.get("ID"));
        });

        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}

// Retrieving a Staff Record

function retrieveStaffRecord(ID) {
  base("Staff").find(ID, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Retrieved", record.get("Name"));
  });
}

// Deleting Staff records

function deleteStaffRecord(IDs) {
  base("Staff").destroy(IDs, function (err, deletedRecords) {
    if (err) {
      console.error(err);
      return;
    }
    deletedRecords.forEach(function (deletedRecord) {
      console.log("Deleted", deletedRecord.get("Name"));
    });
  });
}