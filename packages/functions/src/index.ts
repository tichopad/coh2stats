import * as admin from "firebase-admin";

admin.initializeApp();

export { getCOHLadders } from "./getCOHLadders";
export { getPlayerMatches } from "./getPlayerMatches";
export { runTest } from "./runTets";
