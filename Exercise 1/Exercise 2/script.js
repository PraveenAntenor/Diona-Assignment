const reportData = {
    returnDate: "March 15, 2024",
    recoveryComment: "Testing Testing",
    painLevel: 6,
    treatment: true,
    provider: "Dr. Smith",
    nextAppointment: "April 10, 2024",
    homeExercise: true,
    exercises: ["Stretching", "Strengthening"],
    medication: true,
    meds: ["Ibuprofen"],
    additionalInfo: "No info. Testing Testing"
  };
  
  const report = document.getElementById("report");
  report.innerHTML = `
    <section>
      <h2>Return to Work</h2>
      <p><strong>Date:</strong> ${reportData.returnDate}</p>
    </section>
    <section>
      <h2>Recovery</h2>
      <p><strong>Comment:</strong> ${reportData.recoveryComment}</p>
      <p><strong>Pain Level:</strong> ${reportData.painLevel}/10</p>
    </section>
    <section>
      <h2>Medical Treatment</h2>
      <p>${reportData.treatment ? `Receiving treatment from ${reportData.provider}` : "Not receiving treatment"}</p>
      <p><strong>Next Appointment:</strong> ${reportData.nextAppointment}</p>
    </section>
    <section>
      <h2>Home Exercises</h2>
      <p>${reportData.homeExercise ? `Doing exercises: ${reportData.exercises.join(", ")}` : "Not doing exercises"}</p>
    </section>
    <section>
      <h2>Medication</h2>
      <p>${reportData.medication ? `Medications: ${reportData.meds.join(", ")}` : "No medications"}</p>
    </section>
    <section>
      <h2>Additional Info</h2>
      <p>${reportData.additionalInfo}</p>
    </section>
  `;
  