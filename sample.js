const bcrypt = require('bcrypt');

bcrypt.hash('123456', 10, function (err, hash) {
    console.log(hash);

});

bcrypt.compare("12345", "$2b$10$8A7Hf1EwW9nOkqBmqyGNZeak2ZYhZd9ijJQKKbvPtP5lZksPZFVTi", function (err, result) {
    console.log(result);

});