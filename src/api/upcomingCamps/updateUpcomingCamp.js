const UpcomingCamps = require('../../models/UpcomingCamps');

const updateUpcomingCamp = async (req, res, next) => {
    try{
        if(req.user.email !== req.query.email){
            return res.status(403).send({message: 'Forbidden Access'});
        }
        const {id} = req.params;
        const camp = await UpcomingCamps.findById(id);
        if(!camp){
            return res.status(404).send({message: 'Camp not found'});
        }
        const result = await UpcomingCamps.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).send({message: 'Camp updated successfully', result});
    } catch(error){
        next(error);
    }
}

module.exports = updateUpcomingCamp;