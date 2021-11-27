const usersData = [
  {
    id: 1,
    // file: {},
    name: "Jaime",
    community: "Lax",
    nation: "Tsimshian",   
    crest: "Eagle",  
  },
  {
    id: 2,
    // file: {},
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
  },
  {
    id: 4,
    users_id: 1,
    location: "Coombs",
    age: "43",
    teacher: "May",
    experience: "Beginner",
    blanket: "no",
    supply: "shop", 
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
