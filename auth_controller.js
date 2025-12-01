import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {

    
    const { firstName, lastName, email, profession, location, password, confirmPassword } = req.body;
    
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match" });

    
    const existingUser = await User.findOne({ email });
    
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ firstName, lastName, email, profession, location, password: hashedPassword });
    
    await user.save();

    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    
    res.status(201).json({ message: "Account created", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};