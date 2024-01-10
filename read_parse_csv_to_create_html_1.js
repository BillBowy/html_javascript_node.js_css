// code to create data.html file
// all code backup in local folder
// parse a CSV file that includes a header into an HTML file:

//JavaScript
//function myFunction() {

    // Define the input and output file names
    const csvFile = "test.csv";
    const htmlFile = "data.html";

    // Create a file system object
    const fs = require("fs");

    // Read the CSV file as a string
    fs.readFile(csvFile, "utf8", (err, data) => {
        // Handle any errors
        if (err) {
            console.error(err);
            return;
        }
        // Split the data by newline characters
        const lines = data.split("\n");
        // Get the first line as the header
        const header = lines[0];
        // Split the header by comma characters
        const fields = header.split(";");
        // Create a list to store the data rows
        const rows = [];
        // Loop through the remaining lines
        for (let i = 1; i < lines.length; i++) {
            // Split each line by comma characters
            const values = lines[i].split(";");
            // Create an object to store the row data
            const row = {};
            // Loop through the fields
            for (let j = 0; j < fields.length; j++) {
                // Assign each value to the corresponding field
                row[fields[j]] = values[j];
            }
            // Append the row object to the rows list
            rows.push(row);
        }
        // Create a string to store the HTML output
        let html = "";
        // Add the HTML header
        html += "<!DOCTYPE html>\n";
        html += "<html>\n";
        html += "<head>\n";
        html += "<title>Data</title>\n";
        html += "</head>\n";
        html += "<body>\n";
        // Add the HTML table
        html += "<table>\n";
        // Add the table header
        html += "<thead>\n";
        html += "<tr>\n";
        // Loop through the fields
        for (let field of fields) {
            // Add each field as a table header cell
            html += `<th>${field}</th>\n`;
        }
        html += "</tr>\n";
        html += "</thead>\n";
        // Add the table body
        html += "<tbody>\n";
        // Loop through the rows
        for (let row of rows) {
            // Add each row as a table row
            html += "<tr>\n";
            // Loop through the fields
            for (let field of fields) {
                // Add each value as a table data cell
                html += `<td>${row[field]}</td>\n`;
            }
            html += "</tr>\n";
        }
        html += "</tbody>\n";
        html += "</table>\n";
        // Add the HTML footer
        html += "</body>\n";
        html += "</html>\n";
        // Write the HTML output to the HTML file
        fs.writeFile(htmlFile, html, (err) => {
            // Handle any errors
            if (err) {
                console.error(err);
                return;
            }
            // Log a success message
            console.log("HTML file created successfully!");
        });
    });
    //AI-generated code. Review and use carefully. More info on FAQ.

//}
