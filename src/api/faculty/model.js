import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({

  name:{
      type:String,
      required: true
  },

  email: {
      type: String,
      required: true,
      unique: true,
      validate:{
          validator: (value) =>{
            return String(value)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
          }
      }
  },

 "gender": {
     type: String,
     reuired: true,
     enum: ['Male', 'Female', 'others']
 },

 "branch": {
     type: String,
     required: true,
     enum: ['EEE', 'ECE', 'CSE', 'IT']
 },

 "yoe": {
     type: Number,
     required: true
 }
})


const model = mongoose.model('faculty', facultySchema)
export default model
