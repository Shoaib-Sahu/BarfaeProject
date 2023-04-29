import UserModel from '../model/userModel.js';

// Create a user
export const postApi = async (req, res) => {
    const newUser = await UserModel(req.body);
    const { username } = req.body;
    try {
        // Checking if the username already exists
        const oldUser = await UserModel.findOne({ username });
        if (oldUser) {
            return res.status(400).json({ error: "This username is already registered" });
        };

        const user = await newUser.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get A User
export const getApi = async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await UserModel.findById(_id).select("-password");
        // Checking if user exists 
        if (!user) {
            return res
                .status(404)
                .json({ error: "User does not exist" });
        };
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};