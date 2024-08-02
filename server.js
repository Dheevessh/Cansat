 const express = require('express'); 
    const app = express(); 
    const port = 6000; 
 
    app.use(express.static('public')); 
 
    app.listen(port, () => { 
	          console.log(`Game running at http://localhost:${port}`); 
	        }); 
