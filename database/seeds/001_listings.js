const listListings = [
  {
    label: "It's Lit, Fam!",
    accomodates: 5,
    bedrooms: 3,
    bathrooms: 2.5,
    bed_type: "Queen size",
    minimum_nights: 2,
    optimal_price: 406,
    users_id: 1
  },
  {
    label: "Hella Cool",
    accomodates: 6,
    bedrooms: 3,
    bathrooms: 2.5,
    bed_type: "Full size",
    minimum_nights: 2,
    optimal_price: 305,
    users_id: 2
  }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("listings")
    .then(function() {
      // Inserts seed entries
      return knex("listings").insert(listListings);
    });
};
