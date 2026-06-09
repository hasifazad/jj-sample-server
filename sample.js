const jwt = require('jsonwebtoken');

// jwt.sign({ name: 'john' }, '123', (err, token) => {

//     console.log(token);


// })

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImlhdCI6MTc4MDk4MzIzN30.JoVKcGc2YsryuQyj_WRSfzTMWZ_CNHNzt92tTJ6-_Nc'


jwt.verify(token, '123', function (err, decoded) {
    console.log(decoded) // bar
});