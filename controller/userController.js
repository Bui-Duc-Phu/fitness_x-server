const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    login : async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ status: 400, message: 'Email and password are required' });
            }

             const user = await User.findOne({ email });
            
             if (!user) {
            return res.status(401).json({ status: 401, message: 'Invalid email or password' });
      
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ status: 401, message: 'Invalid email or password' });
        }

            if (!process.env.JWT_SECRET) {
                throw new Error('JWT_SECRET environment variable is not set');
            }
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({
                status: 200,
              token :token,
            });
        } catch (error) {
            console.error('Error in authController.login:', error); 
            if (error.message === 'JWT_SECRET environment variable is not set') {
                res.status(500).json({status: 500, message: 'Internal server error: JWT secret missing' });
            } else {
                res.status(500).json({status : 500, message : "Server error"});
            }
        }
    },
    registerUser : async (req , res) => {
        try{
            const { user_name, email, password } = req.body;
            const existingUser = await User.findOne({ $or: [{ email }, { user_name }] }); 
            if (existingUser) {
                return res.status(400).json({status : 400, message: existingUser.email === email ? 'Email already in use' : 'Username is already in use' });
            }
            
            if (!user_name){
                return res.status(400).json({status : 400, message: 'Username cannot be empty!!' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                display_name : user_name,
                user_name : user_name,
                email : email,
                password: hashedPassword,
            });
    
            await newUser.save();
    
            res.status(201).json({stauts: 201, message: 'Registration successful', user: newUser });
        }catch(error){
            console.log(error);
            res.status(500).json({status : 500, message : "Server error"});
        }
    }
}

module.exports = userController