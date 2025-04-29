// routes/auth.js (example)
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    // Check if the user exists, compare passwords, and issue a JWT token
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
  
    // Compare password using bcrypt (or other hashing method)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
    // Generate JWT token
    const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, token });
  });
  