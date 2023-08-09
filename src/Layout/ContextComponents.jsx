import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import app from '../Firebase.config'

const auth = getAuth(app)
export const createContextUser =  createContext()



const ContextComponents = ({children}) => {
      const [user, setUser] = useState({name: "shuvo"})
      const [loading, setLoading] = useState(true)    

      const createUSer = (email,password) =>{ 
        setLoading(true)       
       return createUserWithEmailAndPassword(auth, email, password)
      }

      const userLogin = (email, password) => {
         setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
      }


      const logout = () => {
        return signOut(auth)
      }  






      useEffect(()=>{
      const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log("login user", currentUser)
        })

        return () => unSubcribe()
      },[])

    const info ={user,createUSer,logout,userLogin,loading}
  return (
    <div>
       <createContextUser.Provider value={info}>
            {children}
        </createContextUser.Provider>       
    </div>
  )
}

export default ContextComponents
