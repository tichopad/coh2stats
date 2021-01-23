import { getStatsDocRef } from "../../fb-paths";
import { ProcessedMatch, StatDict } from "../types";
import { analyzeMatches } from "./match-analysis";
import * as functions from "firebase-functions";
import { firestore } from "firebase-admin";
import { sumValuesOfObjects } from "../helpers";

const db = firestore();

const saveAnalysis = async (
    stats: Record<string, any>,
    timestamp: number,
    statType: "daily" = "daily",
) => {
    const statRef = getStatsDocRef(timestamp, statType);
    try {
        // This stat object will be updated in parallel based on how many
        // threads (functions) for processing the will run;
        await db.runTransaction(async (t) => {
            const statDoc = await t.get(statRef);
            let data = statDoc.data();
            data = sumValuesOfObjects(data as StatDict, stats);
            t.set(statRef, data);
        });
    } catch (e) {
        functions.logger.error(
            `Failed to save new analysis stats into ${statRef}`,
            timestamp,
            stats,
            e,
        );
    }
};

const analyzeAndSaveMatchStats = (
    matches: Array<ProcessedMatch>,
    dateTimeStamp: number,
): Promise<void> => {
    const stats = analyzeMatches(matches);

    return saveAnalysis(stats, dateTimeStamp);
};

export { analyzeAndSaveMatchStats };
