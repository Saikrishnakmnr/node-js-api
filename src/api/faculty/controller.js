import faculties from './model';

export const create = (req,res) =>{
    faculties.create(req.body, (err,result) =>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
}

export const update = (req,res) => {
    faculties.findByIdAndUpdate(req.params.id, req.body,{new: true} , (err, updateObj) =>{
        if(err) {
            res.send(err);
        }
        else{
            res.send(updateObj);
        }
    })
}

export const destroy = (req,res) =>{
    faculties.findByIdAndRemove(req.params.id, (err, deleteObj)=>{
        if(err) {
            res.send(err);
        }
        else{
            res.send(deleteObj)
        }
    })

}

export const searchFaculty = (req,res) => {
    console.log(req.query);
    faculties.find({name: { '$regex' : req.query.name, '$options' : 'i'}}).exec((err, results) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(results)
        }
    })
}


// export const searchFaculty = (req,res) => {
//     faculties.find({name:req.query.})
// }

export const show = (req,res) =>{
    faculties.findById(req.params.id, (err, result) =>{
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

export const index = (req,res) =>{
    sendAllFaculty(res);
}

const sendAllFaculty = (res) =>{
    faculties.find((er, faculty) => {
        if(!er) {
            res.send(faculty)
        }
        else{
            res.send(er)
        }
    })
}