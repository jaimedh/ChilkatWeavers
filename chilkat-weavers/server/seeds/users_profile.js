const usersData = [
  {
    id: 1,
    file: "/photos/michelle.jpeg",
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
    experience: "5 years",
    blanket: "",
    supply: "", 
    comments: "love weaving",
    website:"",
    fb:"https:/www.facebook.com/tsimshiandiva", 
    instagram:"https://instagram.com/m_bryant_diva", 
    twitter:"",
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
    comments:"weaving is life",
    website:"",
    fb:"facebook", 
    instagram:"instagram", 
    twitter:"",
  },
]

  const landingphotos = [
    {
      id:0111,
      file: "/gallery/rachel.JPG",
      info:"Weaver Rachel Hunt",
      comments:"“Everything is interwoven… weave with intention, and in good spirits.”",
    },
    {
      id:0112,
      file: "/gallery/charlene.JPG",
      info:"Weaver Charlene Baker",
      comments:"“Weaving is so relaxing.  My ancestors prepared me when I was a child by putting a robe on me.  I am lucky to weave”",
    }
  ]
  


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () { // Inserts seed entries     
      return knex('users').insert(usersData);
    }).then(function(){
      return knex('usersInfo').del();
    }).then(function() {
      return knex('usersInfo').insert(usersInfo);
    }).then(function(){
      return knex('landingphotos').del()
    }).then(function() {
      return knex('landingphotos').insert(landingphotos);
    })

};
