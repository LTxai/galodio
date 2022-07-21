import { BaseError } from "./BaseError";

export class MissingFieldsToComplete extends BaseError {
    constructor() {
        super(401, "Missing fields to complet")
    }
} 