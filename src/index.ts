import "./polyfill";
import { doGetController } from "./controllers";

declare const global: {
  [x: string]: any;
}

global.doGet = doGetController;
