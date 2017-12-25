const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
router.get('/sighup',(req,res)=>{
    res.render('sighup');
});
router.post('/', (req, res) => {
  usersController.createUser(req.body, (err, data) => {
    if (err)
      res.status(500).send({ success: false, error: err.message });
    else
      res.status(200).send({ success: true });
  })
});

router.get('/logout', (req, res) => {
  res.clearCookie("username");
  res.redirect('/');
})
router.post('/login', (req, res) => {
  usersController.loginUser(req.body, (err, data) => {
    if (err) {
      res.status(401).send(err.message);
    } else {
      // console.log("user data", data);
      // console.log("aa",data._id);
      // res.cookie("userId",data._id)=data._id;
              res.cookie("userId",data._id);
      if (!req.body.remember)
        req.session.username = data.username;
      else {
        res.cookie("username", data.username);
      }
      res.redirect('/');
    }
  });
})
router.get('/:id', (req, res) => {
  usersController.getUserById(req.params.id, (err, data) => {
    if (err)
      res.status(500).send(err.message);
    else
      res.status(200).send(data);
  })
});





module.exports = router;
