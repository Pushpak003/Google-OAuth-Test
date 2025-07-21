import express from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import authRoutes from './src/routes/authroutes.js';
import './src/config/passport.js';

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET || 'fallback_secret_key',
    resave: false,
    saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/auth/google">Login with Google</a>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


