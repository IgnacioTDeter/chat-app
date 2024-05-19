import User from '../models/user.model.js';


export const login = (req, res) => {
    console.log("LoginUser");
    res.send("Login successful");

};

export const signup = async (req, res) => {
    console.log("signupUser");
    res.send("Signup successful");

    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})     
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error: "This username already exist"})
        }

        //HASH PASSWORD HERE 
        
    } catch (error) {
        
    }
};

export const logout = (req, res) => {
    console.log("logoutUser");
    res.send("Logout successful");
};
