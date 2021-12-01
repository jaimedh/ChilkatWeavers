const usersData = [
  {
    id: 1,
    file: "photo",
    name: "Jaime",
    community: "Lax",
    nation: "Tsimshian",   
    crest: "Eagle",  
  },
  {
    id: 2,
    file: "photo2",
    name: "Cara",
    community: "Lax KwAlaams",
    nation: "Tsimshian",   
    crest: "Eagle",  
  },

]

const usersInfo = [
  {
    id: 3,
    users_id: 1,
    location: "Victoria",
    age: "40",
    teacher: "Willie",
    experience: "Beginner",
    blanket: "no",
    supply: "store", 
    fb:"facebook", 
    instagram:"instagram"  
  },
  {
    id: 4,
    users_id: 2,
    location: "Coombs",
    age: "43",
    teacher: "May",
    experience: "Beginner",
    blanket: "no",
    supply: "shop", 
    fb:"facebook", 
    instagram:"instagram" 
  },
  

]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(usersData);
    }).then(function(){
      return knex('usersInfo').del();
    }).then(function() {
      return knex('usersInfo').insert(usersInfo);
    });
};
