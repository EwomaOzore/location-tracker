const Location = require("../models/locationModel");


const storeLocation = async (req, res) => {
    const { latitude, longitude } = req.body;
    const userId = req.user

    const location = new Location({
        userId,
        latitude,
        longitude
    });

    try {
        await location.save();
        res.status(200).json({ message: 'Location added successfully' });
    } catch (error) {
        console.error('Error saving location:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const retrieveLocation = async (req, res) => {
    const userId = req.params.id
    try {
        const locations = await Location.find({ userId }).sort({ timestamp: -1 });
        res.status(200).json(locations);
    } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



module.exports = { storeLocation, retrieveLocation }