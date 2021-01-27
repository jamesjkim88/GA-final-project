const User = require('../models/user');

module.exports = {
    create,
    deleteArchive
}

async function create(req, res){
	try {
			const user = await User.findById(req.user._id);
			user.posts.push(req.body);
			await user.save()
			// console.log("req.user: ", req.user);
			console.log("user.post: ", user);
			res.status(201).json(user.posts)
	} catch(err){
			console.log("error from create archive ctrl: ", err);
			res.json({data: err})
	}
}

async function deleteArchive(req, res){
	try {
			
			const user = await User.findOne({'archived._id': req.params.id, 'archived.username': req.user.username});
			user.archived.remove(req.params.id)
			await user.save()
			res.json({data: 'archived removed'})
	} catch(err){
			res.json({error: err})
	}
}