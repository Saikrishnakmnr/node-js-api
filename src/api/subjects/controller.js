import subjects from './model';

export const create = (req,res) =>{
    
  subjects.create(req.body, (err,result) =>{
      if(err){
          res.send(err)
      }else{
          res.send(result)
      }
  })
}

export const update = (req,res)=> {
    subjects.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateObj) =>{
        if(err) {
            res.send(err);
        }
        else{
            res.send(updateObj);
        }
    })
}

export const show = (req,res) =>
 students.findById (req.params.id, (err, result) => {
     if (err) {
         res.send(err);
     }
     else{
         res.send(result)
     }
 }) 

 export const index = (req, res) =>
  sendAllSubjects(res);

  const sendAllSubjects = (res) =>{
    subjects.find((er, subjects) =>{
        if(!er) {
            res.send(subjects);
        }else{
            res.send(er)
        }
    })
  }

  export const destroy = (req,res) =>{
      subjects.findByIdAndRemove(req.params.id, (err, deleteObj) => {
          if(err) {
              res.send(err);
          }
          else{
              res.send(deleteObj);
          }
      })
  }

  export const searchSubject = (req, res) => {
      console.log(req.query);
      subjects.find({name: {'$regex': req.query.name, '$options' : 'i'}}).exec((err, results) => {
          if(err) {
              res.send(err);
          }
          else{
              res.send(results);
          }
      })
    }

    export const searchBybranch = (req, res) => {
        subjects.find({branch:req.params.branch}, (err, branchObj) =>{
            if(err) {
                res.send(err);
            }
            else {
                res.send(branchObj);
            }
        })
    }
  