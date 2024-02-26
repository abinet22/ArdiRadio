const express = require('express');
const router = express.Router();
const axios = require('axios');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const passport = require('passport');
const db = require("../models");
const path = require("path");
const Op = db.Sequelize.Op;
const { v4: uuidv4 } = require('uuid');
router.get('/', forwardAuthenticated, async (req, res) =>{
res.render('index',{});
});
router.get('/podcast', forwardAuthenticated, async (req, res) =>{
  res.render('podcast',{});
  });
  router.get('/podcast-details', forwardAuthenticated, async (req, res) =>{
    res.render('podcast-details',{});
    });
    router.get('/about', forwardAuthenticated, async (req, res) =>{
      res.render('about',{});
      });
      router.get('/contact', forwardAuthenticated, async (req, res) =>{
        res.render('contact',{});
        });
      router.get('/blog-details', forwardAuthenticated, async (req, res) =>{
        res.render('blog-details',{});
        });
        router.get('/blog', forwardAuthenticated, async (req, res) =>{
          res.render('blog',{});
          });
router.get('/dashboard', ensureAuthenticated, async (req, res) =>{
    res.render('index',{user:req.user});
    });
              
                                
router.get('/login', forwardAuthenticated, async (req, res) =>{
res.render('login');
});
router.get('/api/nowplaying', async (req, res) => {
    // try {
    //     const response = await axios.get('http://5.75.147.133/api/nowplaying/utopiaechoes');
    //     const nowPlaying = response.data.now_playing;
    //     res.json(nowPlaying);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
    res.render('nowplaying')
  });
    
// Logout
router.get('/logout', (req, res) => {
req.logout();
req.flash('success_msg', 'You are logged out');
res.redirect('/login')

})

// Post Routers 
router.post('/login', (req, res, next) => {


passport.authenticate('local', {
successRedirect: '/dashboard',
failureRedirect: '/login',
failureFlash: true

})(req, res, next);
});
module.exports = router;