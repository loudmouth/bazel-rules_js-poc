import pino from "pino";
import lib from "just/lib/lib-a";

const logger = pino();
logger.info("testing 1, 2, 3");

logger.info(lib());
