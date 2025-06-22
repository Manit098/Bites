import express from "express";
import { validate } from "../middleware/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurants.js";
const router = express.Router();


router.post("/", validate(RestaurantSchema), async (req, res) => {
  const data = req.body as Restaurant;
  res.send("Hello world");
});

export default router;
