import { Router } from "express";

import { getCarriersData } from "../controllers/handleCarriersData.js";

const router = new Router();

router.get('/getCarriers', getCarriersData);

export default router;