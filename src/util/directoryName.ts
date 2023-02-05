import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const directoryName = dirname(resolve(fileURLToPath(import.meta.url), "../../"));
