import mongoose from 'mongoose';

const ConnectTodb = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('MONGODB_URI environment variable is not set.');
    }

    // Check if there is an existing connection to avoid multiple connections
    if (mongoose.connections[0].readyState) {
        return; // Connection already established
    }

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Re-throw to handle in the calling function
    }
};

export default ConnectTodb;
