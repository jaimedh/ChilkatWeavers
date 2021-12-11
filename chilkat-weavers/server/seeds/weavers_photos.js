const weavers = [
  {
    id: 111,
    links:"'photographed by Sydney Akagi'",
    info: "Lily Hope, photographed by @SydneyAkagiPhoto",
    comments: "",
    website:"",
    instagram:"https://www.instagram.com/lilyhopeweaver/",
    facebook:"https://www.facebook.com/lilyhopeweaver",
  },
  {
    id: 112,
    links:"",
    info: "Meghann O'Brien",
    comments: "",
    website:"www.jaadkuujus.com www.meghannobrien.com",
    instagram:"https://www.instagram.com/meghaanobrien/",
  },
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
    file: "/gallery/robertleon.com-vanbc8798-1080px",
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
