exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("listings")
    .then(function() {
      // Inserts seed entries
      return knex("listings").insert([
        {
          label: "It's Lit, Fam!",
          neighborhood:"Friedrichshain-Kreuzberg",
          accomodates: 5,
          bedrooms: 3,
          bathrooms: 2.5,
          room_type: "Entire home/apt",
          wifi: "yes",
          minimum_nights: 2,
          "description": "Hella coool",
          optimal_price: 305,
          users_id: 1
        }
      ]);
    });
};
