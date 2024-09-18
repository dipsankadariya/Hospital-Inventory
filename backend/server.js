require('dotenv').config(); 

const express = require('express'); 
const mysql = require('mysql2'); 
const cors = require('cors');    

const app = express();           
const port = process.env.PORT || 5000; 

app.use(cors());                
app.use(express.json());       

const db = mysql.createConnection({
  host: process.env.DB_HOST,           
  user: process.env.DB_USER,                 
  password: process.env.DB_PASSWORD,   
  database: process.env.DB_NAME       
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.post('/api/appointments', (req, res) => {
  const { name, gender, dob, email, phone, address, preferredDoctor, purpose } = req.body;
  const query = 'INSERT INTO appointments (name, gender, dob, email, phone, address, preferredDoctor, purpose) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, gender, dob, email, phone, address, preferredDoctor, purpose], (err, result) => {
    if (err) {
      console.error('Error saving appointment:', err);
      res.status(500).json({ error: 'Error saving appointment' });
      return;
    }
    res.status(201).json({ message: 'Appointment saved successfully', id: result.insertId });
  });
});

app.get('/api/appointments', (req, res) => {
  const query = 'SELECT * FROM appointments';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching appointments:', err);
      res.status(500).json({ error: 'Error fetching appointments' });
      return;
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
