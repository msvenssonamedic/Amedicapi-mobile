var express = require('express')
var router = express.Router()
//var hsavisit_controller = require('../controllers/hsaVisitController')

let jwt = require('jsonwebtoken');
let config = require('../config');
let middleware = require('../middleware');

class HandlerGenerator {
    login (req, res) {
      let username = req.body.username;
      let password = req.body.password;
      // For the given username fetch user from DB
      let mockedUsername = 'admin';
      let mockedPassword = 'password';
  
      if (username && password) {
        if (username === mockedUsername && password === mockedPassword) {
          let token = jwt.sign({username: username},
            config.secret,
            { expiresIn: '24h' // expires in 24 hours
            }
          );
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
        } else {
          res.send(403).json({
            success: false,
            message: 'Incorrect username or password'
          });
        }
      } else {
        res.send(400).json({
          success: false,
          message: 'Authentication failed! Please check the request'
        });
      }
    }
    index (req, res) {
      res.json({
        success: true,
        message: 'Index page'
      });
    }
  }

let handlers = new HandlerGenerator();
router.post('/login', handlers.login);
router.get('/', middleware.checkToken, handlers.index);

module.exports = router;
