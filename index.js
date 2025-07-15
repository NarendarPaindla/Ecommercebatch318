const express = require('express');
const app = express();
const sequelize=require('./config/db');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Connect to the database
sequelize.sync({alter:true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err=>{
    console.error("Failed to sync database:",err);
});


//Do not touch these 5 lines of code
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


