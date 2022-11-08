import pino from "pino";
import lib from "../../lib/lib-a";
import data from "../../lib/lib-data";

const logger = pino();
logger.info("testing 1, 2, 3");

logger.info(lib());
// people();
// others();

console.log(data);
