import React, { useEffect, useState } from 'react'

const useAmdin = (email) => {
    const [isAdmin, setIsadmin] = useState(null)

    if(email){
        useEffect(() => {
            fetch(`https://my-personal-website-flax-beta.vercel.app/checkAdmin?email=${email}`)
            .then((res) => res.json())
            .then((data)=>{
                setIsadmin(data.isAdmin)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[email])
    }

    return [isAdmin]
  
}

export default useAmdin
