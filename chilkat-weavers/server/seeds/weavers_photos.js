const weavers = [
  {
    id: 111,
    links:"'photographed by Sydney Akagi'",
    info: "Lily Hope, photographed by @SydneyAkagiPhoto",
    comments: "",
    instagram:"https://www.instagram.com/lilyhopeweaver/",
    facebook:"https://www.facebook.com/lilyhopeweaver",
  },
  {
    id: 112,
    links:"www.jaadkuujus.com www.meghannobrien.com",
    info: "Meghann O'Brien",
    comments: "",
    instagram:"https://www.instagram.com/meghaanobrien/",
    facebook:"https://www.facebook.com/meghann.obrien.5",
  },
  {
    id:113,
    links:"",
    info:"Weaver Rachel Hunt",
    comments:"“Everything is interwoven… weave with intention, and in good spirits.”",
    instagram:"",
    facebook:"",
  },
  {
    id:114,
    links:"",
    info:"Weaver Charlene Baker",
    comments:"“Weaving is so relaxing.  My ancestors prepared me when I was a child by putting a robe on me.  I am lucky to weave”",
    instagram:"",
    facebook:"",
  }
];

const images = [
  {
    id: 10,
    weavers_id: 111,
    file: "/gallery/overheadshot.JPG",
  },

  {
    id: 11,
    weavers_id: 111,
    file: "/gallery/dancing.JPG",
  },
  {
    id: 12,
    weavers_id: 111,
    file: "/gallery/wovensheild.JPG",
  },

  {
    id: 13,
    weavers_id: 112,
    file: "/gallery/Meghann01.PNG",
  },
  {
    id: 14,
    weavers_id: 112,
    file: "/gallery/moaresidency07.JPG",
  },
  {
    id: 15,
    weavers_id: 112,
    file: "/gallery/robertleon.com-vanbc8798-1080px.JPG",
  },
  {
    id: 16,
    weavers_id: 113,
    file: "/gallery/rachel.jpeg",
  },
  {
    id: 17,
    weavers_id: 114,
    file: "/gallery/charlene.JPG",
  },


];
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("weavers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("weavers").insert(weavers);
    })
    .then(function () {
      return knex("images").del();
    })
    .then(function () {
      return knex("images").insert(images);
    });
};
