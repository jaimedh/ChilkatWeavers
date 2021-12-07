const weavers = [
  {
    id: 111,
    info: "Lily Hope, photographed by @SydneyAkagiPhoto",
    comments: "",
  },
  {
    id: 112,
    info: "Meghann O'Brien",
    comments: "",
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
    weavers_id: 112,
    file: "/gallery/Meghann01.PNG",
  },
  {
    id: 13,
    weavers_id: 112,
    file: "/gallery/moaresidency07.JPG",
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
