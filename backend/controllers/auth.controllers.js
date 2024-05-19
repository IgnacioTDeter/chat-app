

export const login = async (req, res) => {
    console.log("LoginUser");
    res.send("Login successful");

    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;
    } catch (error) {
        
    }
};

export const signup = (req, res) => {
    console.log("signupUser");
    res.send("Signup successful");
};

export const logout = (req, res) => {
    console.log("logoutUser");
    res.send("Logout successful");
};
