const bcrypt=require('bcrypt')
const User=require('../models/User');

exports.signup=async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const existing=await User.findOne({where:{email}});
    if(existing){
        return res.status(400).json({message:'Email already registered'})
    }
    const salt=await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashed=await bcrypt.hash(password,salt);
    const user=await User.create({
        name,
        email,
        password:hashed,
    });
    res.status(201).json({
        id:user.id,
        name:user.name,
        email:user.email,
        role:user.role,
    })
    }catch(err){
      console.error('Signup error:',err);
      res.status(500).json({message:'Server error during signup'});
    }
};