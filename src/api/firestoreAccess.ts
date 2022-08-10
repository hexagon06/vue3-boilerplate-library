import { IdItem } from '../types'
import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, query, QueryConstraint, setDoc, updateDoc } from 'firebase/firestore'
import { cloneDeep } from 'lodash'
import { getCollection } from './firestoreUtils'

export class FirestoreAcces<T extends IdItem> {
  // https://firebase.google.com/docs/firestore/manage-data/add-data
  // https://firebase.google.com/docs/firestore/query-data/get-data

  constructor(
    private readonly db: Firestore,
    private readonly collection: string) {
  }

  ref () {
    return collection(this.db, this.collection)
  }

  async get (): Promise<T[]> {
    try {
      const result = await getCollection(this.db, this.collection)
      return result.docs.map<T>((value) => {
        return { ...(value.data() as T), id: value.id }
      })
    } catch (error) {
      console.error(`Error fetching collection "${this.collection}": `, error)
      return []
    }
  }

  async getById (id: string): Promise<T | undefined> {
    try {
      const docRef = doc(this.db, this.collection, id)
      const result = await getDoc(docRef)
      if (result.exists()) {
        return { ...(result.data() as T), id: result.id }
      } else {
        return undefined
      }
    } catch (error) {
      console.error(`Error fetching document from "${this.collection}": `, error)
      return undefined
    }
  }

  async query (constraint: QueryConstraint): Promise<T[]> {
    try {
      const ref = collection(this.db, this.collection)
      const docs = await getDocs(query(ref, constraint))
      return docs.docs.map(d => {
        return {
          ...(d.data() as T), id: d.id
        }
      })
    } catch (error) {
      console.error(`Error querying on "${this.collection}": `, error)
      return []
    }
  }

  async add (item: T): Promise<string> {
    // https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
    try {
      delete item.id
      const reference = await addDoc(collection(this.db, this.collection), item)
      return reference.id
    } catch (error) {
      console.error(`Error adding document to collection"${this.collection}": `, error)
      throw error
    }
  }

  async addAt (item: T, path: string): Promise<void> {
    try {
      delete item.id
      await setDoc(doc(this.db, this.collection, path), item)
    } catch (error) {
      console.error(`Error adding document to collection "${this.collection}" at ${path}: `, error)
      throw error
    }
  }

  async update (item: T): Promise<void> {
    // https://firebase.google.com/docs/firestore/manage-data/add-data#update-data
    const { id } = item
    if (id === undefined) throw new Error('item.id is undefined, use add(item) instead')
    const entity = cloneDeep(item) as any
    delete entity.id
    try {
      await updateDoc(doc(this.db, this.collection, id), entity)
    } catch (error) {
      console.error(`Error updating document in "${this.collection}": `, error)
      throw error
    }
  }

  async delete (item: T): Promise<void> {
    const { id } = item
    if (id === undefined) throw new Error('item.id is undefined, is this item stored?')
    try {
      await deleteDoc(doc(this.db, this.collection, id))
    } catch (error) {
      console.error(`Error deleting document in "${this.collection}": `, error)
      throw error
    }
  }
}
