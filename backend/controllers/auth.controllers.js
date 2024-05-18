export const login = (req, res) => {
    console.log("LoginUser");
    res.send("Login successful");
};

export const signup = (req, res) => {
    console.log("signupUser");
    res.send("Signup successful");
};

export const logout = (req, res) => {
    console.log("logoutUser");
    res.send("Logout successful");
};
