exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("listings").truncate()
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
          tv: "yes",
          Laptop_friendly_workspace: "yes",
          family_kid_friendly: "yes",
          smoking_allowed: "yes",
          minimum_nights: 2,
          extra_people: 0,
          cleaning_fee: 0,
          optimal_price: 305,
          users_id: 1
        }
      ]);
    });
};
