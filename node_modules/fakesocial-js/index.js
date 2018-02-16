var cont = 1;
var tokens=[1,2,3,4,5,6,7,8,9,10]
var social = [
    {
        token: cont++,
        name: 'luca',
        friends: [],
        reqE: [],
        reqR: [],
        post: [
            {
                idPost: 1,
                mes: "hello"
            }
        ]

    },
    {
        token: cont++,
        name: 'pippo',
        friends: [],
        reqE: [],
        reqR: [],
        post: [
            {
                idPost: 1,
                mes: "hello"
            }
        ]

    }

]

exports.signUp=function(user){
    user.token=cont++;
    user.friends=[];
    user.reqE=[];
    user.reqR=[];
    user.post=[];
    social.push(user);
    return "userAdded";
}

exports.addPost=function(token,newPost){
   
    for (var i = 0; i < social.length; i++) {
        if (token===social[i].token) {
             newPost.idPost++;
             social[i].post.push({newPost})
        }
        
    }
    
    return "post";
}




exports.reqFr = function (idE, idR) {
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===idE)
        {
            social[i].reqE.push(idR)
        }
    }     
    for (var i = 0; i < social.length; i++) {
        if(social[i].token===idR)
        {
            social[i].reqR.push(idE)
        }
    }

    return social  
   
    
}
//reqFr(1,2);



exports.conferme = function (id,idFriend) {
            for (var i = 0; i < social.length; i++) {
                if(social[i].token===id)
                {
                    for (var y = 0; y < social[i].reqR.length; y++) {
                     if (idFriend===social[i].reqR[y]) {
                         social[i].friends.push(idFriend)
                         social[i].reqR.splice(y,1)
                         
                        }
                    }
                    
                }  
            }

            for (var i = 0; i < social.length; i++) {
                if(social[i].token===idFriend)
                {
                    for (var y = 0; y < social[i].reqE.length; y++) {
                     if (id===social[i].reqE[y]) {
                         social[i].friends.push(id)
                         social[i].reqE.splice(y,1)
                         
                     }
                }
                    
            } 
        }
    return  "Accepted"
   
    
}
//console.log(conferme(2,1));
//console.log(social);


exports.allUser=function() {
    return social;   
}

exports.allToken=function () { 
    cond=true;
    for (var i = 0; i < social.length; i++) {
        if(tokens.includes(social[i].token) && cond===true)
        {
          cond=true;
        }else cond=false;
    }

    if(cond===true){
        return "ValidToken"
    }
    return "Invalid Token"
    
     
}

