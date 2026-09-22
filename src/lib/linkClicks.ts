import clientPromise from "@/lib/mongodb";

const COLLECTION = "linkClicks";

type LinkClickDoc = {
  _id: string;
  count: number;
};

async function getCollection() {
  const client = await clientPromise;
  return client.db().collection<LinkClickDoc>(COLLECTION);
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const collection = await getCollection();
  const docs = await collection.find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
}

export async function incrementClick(id: string): Promise<number> {
  const collection = await getCollection();
  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );
  return result?.count ?? 1;
}
