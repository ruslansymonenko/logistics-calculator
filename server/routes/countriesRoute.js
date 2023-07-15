import { Router } from "express";

import { getCountriesData } from "../controllers/handleCountriesData.js";

const router = new Router();

router.get('/getCountries', getCountriesData);

export default router;