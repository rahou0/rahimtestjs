const router = require("express").Router();
const { places } = require("../helpers/Data");
router.get("/place/:id", (req, res) => {
  const place = places.find(({ id }) => id.toString() === req.params.id);
  if (place === null) return res.status(400).send("dont exist");
  return res.status(200).send(place);
});

router.get("/search/", (req, res) => {
  console.log(req.query.name);
  console.log(req.query.city);
  let place = null;
  if (req.query.name === "all" || req.query.city === "all")
    return res.status(200).send(JSON.stringify(places));
  if (req.query.name !== null)
    place = places.find(({ title }) => title === req.query.name);
  if (req.query.city !== null)
    place = places.find(({ address }) => address === req.query.city);
  console.log(place);
  if (place === null) return res.status(400).send("dont exist");
  return res.status(200).send(place);
});

module.exports = router;
