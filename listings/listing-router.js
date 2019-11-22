const router = require("express").Router();
const Listing = require("../models/listings-model");

// Add listing
router.post("/user/:id/listings", (req, res) => {
  const id = req.params.id;
  const listing = { ...req.body, users_id: id};
  Listing.add(listing)
    .then(listings => res.status(201).json(listings))
    .catch(error => res.status(500).json({ error: "Could not add listing." }));
});

//Get all the listings
router.get("/listings", (req, res) => {
  Listing.find()
    .then(listings => res.status(200).send(listings))
    .catch(error => res.status(500).json({ Error: "Error getting listings." }));
});

//Get user listing
router.get("/user/:id/listings", (req, res) => {
  const id = req.params.id;
  Listing.findUserListing(id)
    .then(listings => res.status(200).json({ listings }))
    .catch(err => res.status(500).send(err));
});

// Gets listing by ID
router.get("/listings/:id", (req, res) => {
  const id = req.params.id;
  Listing.findBy(id)
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(500).send(err));
});

// DELETE - listing
router.delete("/listings/:id", (req, res) => {
  const id = req.params.id;
  Listing.remove(id)
    .then(deleted => res.json({ message: "listing deleted successfully" }))
    .catch(err => res.status(500).json({ error: "Failed to delete listing." }));
});

//Update - listing
router.put("/listings/:id", (req, res) => {
  const id = req.params.id;
  const updatedlisting = req.body;
  Listing.update(id, updatedlisting)
    .then(updated => res.status(201).json(updated))
    .catch(err => res.status(500).json({ error: "Failed to update listing." }));
});

module.exports = router;
