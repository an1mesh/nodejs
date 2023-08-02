import User from '../model/user.js';

export const getAllUsers = (req,res,next) => {
    User.find().then(response => {
        res.json({response});
    }).catch(error => {
        res.json({
            message:"An error occured",
        });
    });
}

export const saveUsers = (req,res,next) => {
    
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    user.save().then(response => {
        console.log('User Saved');
        res.json({
            message:'User saved',
        });
    }).catch(error =>{
        res.json({
            message:'Error occured',
        });
    });
}

export const deleteUser = (req,res,next) => {
    const {user} = req.params;
    User.findOneAndDelete({user}).then(deletedUser => {
        res.json({
            message:'User deleted',
        });
    }).catch(error => {
        res.json({
            message:'Error occured',
        });
    });
}

export const updateUser = (req,res,next) => {
    const {username} = req.params;
    User.findOneAndUpdate({username:username},{
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        
    }).then(updatedUser => {
        res.json({
            message:'User updated',
        });
    }).catch(error => {
        res.json({
            message:'Error occured',
        });
    });
}
