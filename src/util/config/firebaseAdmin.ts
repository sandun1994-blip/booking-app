import * as admin from 'firebase-admin'

const firebasePrivateKey = process.env.NEXT_PUBLIC_firebasePrivateKey?.replace(/\\n/g, '\n')

console.log('admin.apps.length', admin.apps.length)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.NEXT_PUBLIC_firebaseClientEmail,
      privateKey: firebasePrivateKey,
      projectId: process.env.NEXT_PUBLIC_firebaseProjectId,
    }),
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  })
}
export const adminStorage = admin.storage()
