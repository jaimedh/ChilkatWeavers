const usersData = [
  {
    id: 1,
    username: "user1",
    password: "testuser",
    file: "photo",
    name: "Jaime",
    community: "Lax Kw'alaams",
    nation: "Tsimshian",   
    crest: "Eagle",  
  },
  {
    id: 2,
    file: "photo2",
    name: "Bilhaa'mnelx (Michelle Bryant)",
    community: "Lax KwAlaams",
    nation: "Tsimshian",   
    crest: "Killerwhale",  
  },

]

const usersInfo = [
  {
      id: 4,
      users_id: 2,
      location: "Coombs",
      age: "43",
      teacher: "May",
      experience: "Beginner",
      blanket: "no",
      supply: "shop", 
      comments:"weaving through life",
      website:"www.weaver.com",
      fb:"facebook", 
      instagram:"instagram",
      twitter:"twitter",

    },
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
    website:"www.weaver.com",
    fb:"https:/www.facebook.com/tsimshiandiva", 
    instagram:"https://instagram.com/m_bryant_diva",  
    twitter:"twitter",
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
