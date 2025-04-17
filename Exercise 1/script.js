const data = {
    prescriptionDrugs: [
      { name: "Naproxen", date: "Feb 28, 2024", provider: "Dr. Best", amount: "$20.00" }
    ],
    otcDrugs: [
      { name: "Advil", date: "March 28, 2024", amount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" }
    ],
    medicalSupplies: [
      { item: "Tensor", date: "Feb 28, 2024", prescribed: "Yes", provider: "Dr. Best", amount: "$10.00", seller: "Shoppers Drug Mart" }
    ],
    parking: [
      { address: "333 St Mary Ave", date: "March 28, 2024", amount: "$10.00", meter: "12245" }
    ],
    mileage: [
      { date: "March 28, 2024", to: "HSC, 820 Sherbrook St", from: "333 Broadway", km: "20 km" }
    ],
    transport: [
      { date: "March 28, 2024", from: "HSC Women’s Hospital", to: "665 William Ave", mode: "Bus", fare: "$3.00" },
      { date: "March 27, 2024", from: "25 Furby St", to: "440 Edmonton St", mode: "Taxi", fare: "$15.00" }
    ]
  };
  
  function renderTable(title, headers, rows) {
    let html = `<h2>${title}</h2><table><thead><tr>`;
    headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    rows.forEach(row => {
      html += `<tr>` + headers.map(h => `<td>${row[h.toLowerCase()] || ''}</td>`).join('') + `</tr>`;
    });
    html += `</tbody></table>`;
    return html;
  }
  
  const content = document.getElementById("content");
  content.innerHTML =
    renderTable("Prescription Drugs", ["Name", "Date", "Provider", "Amount"], data.prescriptionDrugs) +
    renderTable("Over-the-Counter Drugs", ["Name", "Date", "Amount", "Seller", "Reason"], data.otcDrugs) +
    renderTable("Medical Supplies", ["Item", "Date", "Prescribed", "Provider", "Amount", "Seller"], data.medicalSupplies) +
    renderTable("Parking", ["Address", "Date", "Amount", "Meter"], data.parking) +
    renderTable("Mileage", ["Date", "To", "From", "Km"], data.mileage) +
    renderTable("Bus/Taxi", ["Date", "From", "To", "Mode", "Fare"], data.transport);
  
  
  