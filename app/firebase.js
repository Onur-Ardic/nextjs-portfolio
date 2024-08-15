import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import toast from 'react-hot-toast'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()

export const Login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    localStorage.setItem('user', JSON.stringify(user))
    return user
  } catch (error) {
    console.error(error)
    error && toast.error('Giriş Sırasında Hata Oluştu Bilgileri Kontrol Ediniz ve Tekrar Deneyiniz')
  }
}

export const Logout = async () => {
  try {
    await signOut(auth)
    localStorage.removeItem('user')
    window.location.reload()
    return true
  } catch (error) {
    toast.error(error)
  }
}
