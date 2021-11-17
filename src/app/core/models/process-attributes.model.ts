import { RawData } from "./process-attribute-rawData.model";

export class ProcessAttribute {
    attributeId: string;
    averageScore: number;
    averageScoreLast5: number;
    averageScoreLast10: number;
    standardDeviation: number;
    assignedAttributesCount: number;
    id: string;
    rawData: RawData[];
}
