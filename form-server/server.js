require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Define the Google Forms URL
const formUrl = process.env.FORM_URL;

app.post('/submit-form', async (req, res) => {
    const { name, email, message, selectedService } = req.body;

    const formData = new URLSearchParams();
    formData.append(process.env.ENTRY_NAME, name);
    formData.append(process.env.ENTRY_EMAIL, email);
    formData.append(process.env.ENTRY_MESSAGE, message);
    formData.append(process.env.ENTRY_SERVICE, selectedService);

    try {
        // Send data to Google Forms
        await axios.post(formUrl, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error sending form data:', error);
        res.status(500).send('Something went wrong');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
