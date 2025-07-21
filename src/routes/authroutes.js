import express from 'express';
import passport from 'passport';
import{loginSuccess, logout} from '../controllers/authcontroller.js';

const router = express.Router();
router.get('/google', 
    passport.authenticate('google',{scope: ['profile', 'email']})
);

router.get('/google/callback',
    passport.authenticate('google',{failureRedirect: '/'}),
    (req, res) =>{
       
        res.send('Login Successful! Welcome, ');
        }
    );

router.get('/profile', loginSuccess);

router.get('/logout', logout);

export default router;
        