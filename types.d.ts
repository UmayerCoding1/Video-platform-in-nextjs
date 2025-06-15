import type { Collection } from "mongoose"

declare global {
    var mongoose : {
        conn: Collection<Document> | null,
        promise: Promise<Collection<Document> | Connection> | null
    }
}

export {};