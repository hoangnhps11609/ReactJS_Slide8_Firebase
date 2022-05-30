import { createStore } from 'redux'
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore
import rootReducer from './rootReducer'
import firebase from './firebase'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}


// Create store with reducers and initial state
const initialState = {} 
export const store = createStore(rootReducer, initialState)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

