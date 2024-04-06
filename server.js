const express = require('express'); // Require Express module
const path = require('path'); // Require Path module for path operations

const app = express(); // Create an Express application instance

// Now you can use `app` to set up your server, including setting the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Rest of your server code, including starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
