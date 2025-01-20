// Import library yang dibutuhkan
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Konfigurasi dotenv agar membaca dari variable .env
dotenv.config();

//Middleware untuk parsing JSON pada request body
const app = express()

//Import rute API
const userRoutes = require('./routes/userRoutes');
const financeRoutes = require('./routes/financeRoutes');

//Gunakan route API
app.use('/api/users', userRoutes);
app.use('/api/finance', financeRoutes);

//port Aplikasi
const PORT = process.env.PORT || 5000;

//Jalakan server
app.listen(PORT, () => 
    console.log(`Server berjalan di port ${PORT}`)
)