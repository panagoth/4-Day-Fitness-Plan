/* Βασικές ρυθμίσεις */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #0a0a0a; /* Σχεδόν μαύρο φόντο */
    color: #b3b3b3; /* Απαλό γκρι κείμενο */
}

/* Επικεφαλίδα */
header {
    text-align: center;
    background-color: #1c1c1c; /* Σκούρο γκρι-μαύρο */
    color: #a71d31; /* Σκούρο κόκκινο */
    padding: 20px 0;
}

h1 {
    margin: 0;
}

main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

/* Κάρτες για τις ημέρες */
.day {
    background-color: #1c1c1c; /* Σκούρο γκρι */
    border: 1px solid #333; /* Πιο σκούρο περίγραμμα */
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    width: 250px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    transition: transform 0.2s, background-color 0.2s;
}

.day:hover {
    transform: scale(1.05);
    background-color: #a71d31; /* Σκούρο κόκκινο hover */
    color: #ffffff; /* Λευκό κείμενο για αντίθεση */
}

/* Λεπτομέρειες ημέρας */
.details {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1c1c1c; /* Σκούρο γκρι */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    z-index: 1000;
    max-width: 400px;
    text-align: center;
    color: #d3d3d3; /* Ελαφρώς πιο φωτεινό γκρι */
}

.hidden {
    display: none;
}

/* Κουμπιά */
button {
    background-color: #a71d31; /* Σκούρο κόκκινο */
    color: #fff; /* Λευκό */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-weight: bold;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #7e1525; /* Ακόμα πιο σκοτεινό κόκκινο hover */
}

/* Λίστα */
ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin: 8px 0;
}
