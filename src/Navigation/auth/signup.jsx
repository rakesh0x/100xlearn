import jwt from "jsonwebtoken";
import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";

const auth = express();
auth.use(express.json());
auth.use(cors());

let users = {}; 

auth.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Username and password are required" });

    if (users[username]) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = { password: hashedPassword };

    const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
    res.status(201).json({ message: "User signed up successfully", token });
});

// Signin Route
auth.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: "Username and password are required" });

    const user = users[username];
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
    res.status(200).json({ message: "Sign-in successful", token });
});
