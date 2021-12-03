const usersData = [
  {
    id: 1,
    file: "photo",
    name: "Bilhaa'mnelx (Michelle Bryant",
    community: "Lax Kw'alaams",
    nation: "Tsimshian",   
    crest: "Killer Whale",  
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
    location: "Prince Rupert",
    age: "46",
    teacher: "Willie White",
    experience: "Novice",
    blanket: "",
    supply: "", 
    comments: "love weaving",
    fb:"https:/www.facebook.com/tsimshiandiva", 
    instagram:"https://instagram.com/m_bryant_diva"  
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
