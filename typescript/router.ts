import * as express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.get('/', controller.Widok0);

router.get('/list/:region', controller.Widok1);

router.get('/list/:region/:name', controller.Widok2);

router.get('/o_mnie', controller.omnie);

export default router;