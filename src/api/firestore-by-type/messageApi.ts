import { Message } from '../../types'
import { Api } from '../genericApi'

const ENCOUNTER_COLLECTION = 'message'

export const messageApi = new Api<Message>(ENCOUNTER_COLLECTION)
