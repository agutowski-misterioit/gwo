import * as express from "express";
import * as controller from "./controller";

const router = express.Router();

// let api = async (req, res, next) => {
//     req.get({
//         url: 'https://restcountries.com/v3.1/region/europe';
//         json: true,
//         headers: {'Region': 'request'}
//     },(err, res, data) =>{
//         if(err) {
//             console.log(err);
//         } else if(res.statuCode !==200){
//             console.log('Status:', res.statusCode);
//         } else {
//             console.log(data.html_url);
//         }
//     });
// };

router.get('/', controller.Widok0);

router.get('/lista/europe', controller.Widok1);

router.get('/lista/:kontynent/:panstwo', controller.Widok2);

router.get('/o_mnie', controller.omnie);

export default router;