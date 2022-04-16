import {config} from 'dotenv';
config();

//Enviroment variable to get into the DB, not used now
export default {
    mongodbURL: process.env.MONGODB_URI ,
}