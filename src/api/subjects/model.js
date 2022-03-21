import mongoose  from 'mongoose'

const subjectsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
        },
        
    branch: {
        type: String,
        required: true,
        enum:['EEE', 'CSE','ECE', 'IT']
       },

   author_name:{
        type: String,
        required: true
    },

    faculty:{
        type: String,
        required: true
    }

 }, {
     timestamps: true
 }
 )

const model = mongoose.model('subjects', subjectsSchema)

export default model