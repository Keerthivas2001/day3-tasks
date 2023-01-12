
//1. JSON iterate over all loops
let data= [{ 
    
        
    "id":1,
    "firstName":"keerthivas",
    "middleNamr":"munusaamy",
    "lastName":"dhanasekar",
    "gender":"male"
},
{
    "id":2,
    "firstName":"veera",
    "middleNamr":"narashima",
    "lastName":"reddy",
    "gender":"male"
},
{
"id":3,
    "firstName":"sri",
    "middleNamr":"krishna",
    "lastName":"murthy",
    "gender":"male"
},

]


//FOR LOOP
for(let i=0;i<data.length;i++){
    console.log(data[i]);
}

//FOR IN LOOP
for(var a in data){
    console.log(data[a]);
}

//FOR OF LOOP
for(var a of data){
    console.log(a);
}

//FOREACH LOOP
data.forEach(obj=>{
    console.log(obj);
})


//2.resume in JSON format
let resume =[
    {
    
            "basics": [
                {
              "name": "keerthivas.M.D",
              "email": "keerthivasandhanasekar2001@gmail.com",
              "phone": 8925616816,
              "degree": "BBA SHIPPING"
                }],
             
                "location":[
                {
                "address": "No:34/57,periyar street, sanatorium tambaram",
                "postalCode": 600047,
                "city": "Chennai",
                "country": "India",
                "region": "Asia"
              }],

              "profiles": [
                {
                  "network": "LinkedIn",
                  "username": "Keerthi Vask",
                  "url": "www.linkedin.com/in/keerthi-vas-632775210"
                }],

            "education" : [
            {
               " schoolName" : "N.S.N Group Of School",
               "10thGpa" : 78,
              " 10thPassedOutyear" : 2016,
               "+2Gpa" : 62,
               "+2PassedOutYear" : 2019,
        
                "institution": "AMET University",
                "studyType": "SHIPPING AND LOGISTICS",
                "startYear": "2019",
                "endYear": "2022",
                "gpa": 7,
                "courses": "BBA SHIPPING"
                  
            }], 
                
            "skills" :
              [{
                "name": "Microsoft(Excel,word and powerpoint)"
                
              }],
              
            "languages" :
            [
              {
                "language": "English and Tamil",
                "fluency": "intermediate"
              }
             ], 

            "interests" :
               [{
                "name": "Reading and writting stories"
            
              }]
            
        }]