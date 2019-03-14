// from data.js
var tableData = data;

var $dateInput = document.querySelector('#date');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredaddresses to addressData initially
// addressData comes from the addressData.js file
var filteredReports = addressData;

// renderTable renders the filteredaddresses to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredaddresses.length; i++) {
    // Get get the current report object and its fields
    var address = filteredaddresses[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the report object, create a new cell at set its inner text to be the current value at the current report's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $dateInput.value.trim().toLowerCase();

  // Set filteredReports to an array of all addresses whose "state" matches the filter
  filteredReports = addressData.filter(function(report) {
    var addressState = report.datetime;

    // If true, add the report to the filteredReports, otherwise don't add it to filteredReports
    return addressState === filterState;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
