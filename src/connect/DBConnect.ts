import * as mongoose from 'mongoose';

const mongodburl = process.env.HOST;

mongoose.connect(mongodburl)
mongoose.connection.once('open', () => {
    console.log('connected into database')
})

export default mongoose;