// Assignment Instructions
// Assigned

// Instructions:

// You are going to build simple APIs using Node.js and Express.

// Use the drugs array given below as your "database" inside the server.



// Important:

// Use express.json() to handle incoming POST request bodies.
// Test all your APIs using Postman.

// The Drugs Array



const drugs = [
    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
];

import express from 'express';
const app = express();
const POST = process.env.port || 7000;

app.listen(POST, () => { console.log(`Server is running on port ${POST}`) });

// 1. GET /drugs/antibiotics
// Return all drugs where category is "Antibiotic".
app.get('/drugs/antibiotics', (req, res) => {
    const antibiotics = drugs.filter(drug => drug.category === 'Antibiotic');
    res.json(antibiotics);
});

// 2.GET /drugs/names
// Return an array of all drug names converted to lowercase.
app.get("/drugs/names", (req, res) => {
    res.send(drugs.map(drug => drug.name.toLowerCase()))
});

// 3.POST /drugs/by-category
// Accept a category in the body and return all drugs under that category.
// Example body: { "category": "Antibiotic" }
app.post("/drugs/by-category", express.json(), (req, res) => {
    res.send(drugs.filter(drug => drug.category === req.body.category))
})

// 4.GET /drugs/names-manufacturers
// Return an array of objects showing each drug’s name and manufacturer.
app.get("/drugs/manufacturers", (req, res) => {
    res.send(drugs.map(drug => ({ name: drug.name, manufacturer: drug.manufacturer })));
})
// console.log(drugs.map(drug => ({ name: drug.name, manufacturer: drug.manufacturer })))


// 5.GET /drugs/prescription
// Return all drugs where isPrescriptionOnly is true.
app.get("/drugs/prescription", (req, res) => {
    res.send(drugs.filter(drug => drug.isPrescriptionOnly === true));
})

// 6. GET /drugs/formatted
// Return a new array where each item is a string like:
// "Drug: [name] - [dosageMg]mg"
app.get("/drugs/formatted", (req, res) => {
    res.send(drugs.map(drug => `drug: ${drug.name} - ${drug.dosageMg}mg`));
})

// 7.GET /drugs/low-stock
// Return all drugs where stock is less than 50.
app.get("/drugs/low-stock", (req, res) => {
    res.send(drugs.filter(drug => drug.stock < 50));
});

// 8.GET /drugs/non-prescription
// Return all drugs where isPrescriptionOnly is false.
app.get("/drugs/non-prescription", (req, res) => {
    res.send(drugs.filter(drug => drug.isPrescriptionOnly === false));
});

// 9.POST /drugs/manufacturer-count
// Accept a manufacturer in the body and return how many drugs are produced by that manufacturer.
// Example body: { "manufacturer": "Pfizer" }
app.post("/drugs/manufacturer-count", express.json(), (req, res) => {
    res.send(drugs.filter(drug => drug.manufacturer === req.body.manufacturer).length);
});

// 10. GET /drugs/count-analgesics
// Count and return how many drugs have the category "Analgesic".
app.get("drugs/count-analgesics", (req, res) => {
    res.send(drugs.filter(drug => drug.category === "Analgesic").length);
});

// Push your complete Node.js project (server file + package.json) to GitHub.
// Ensure you have initialized a Git repository in your project folder
// Run the following commands in your terminal:

// Initialize Git repository
// git init

// Add all files to the staging area
// git add .

// Commit the changes
// git commit -m "Initial commit for Node.js drug API project"

// Create a new repository on GitHub (e.g., "node-drug-api")

// Link the local repository to the GitHub repository
// git remote add origin https://github.com/your-username/node-drug-api.git

// Push the code to the GitHub repository
// git branch -M main
// git push -u origin main
// Share the GitHub repository URL when you are done.