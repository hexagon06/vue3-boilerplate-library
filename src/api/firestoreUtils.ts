import { collection, getDocs, Firestore, query, documentId, where } from 'firebase/firestore'

export async function getCollection (db: Firestore, name: string) {
  const result = await getDocs(collection(db, name))
  return result
}

export async function getSingle (db: Firestore, collectionName: string, id: string) {
  const ref = collection(db, collectionName)
  const q = query(ref, where(documentId(), '==', id))
  return await getDocs(q)
}
