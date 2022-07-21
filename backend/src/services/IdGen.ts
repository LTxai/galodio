import { v4 } from "uuid";

export class IdGenerator {

    generateId(): string {
        return v4();
    }
}