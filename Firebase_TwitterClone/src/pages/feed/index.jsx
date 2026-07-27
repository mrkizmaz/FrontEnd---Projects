import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const Feed = () => {

    const handleClick = () => {
        signOut(auth)
            .then(() => toast.info("Hesaptan cikis yapildi"))
    }

    /**
     * bu yöntem gercek projelerde kullanilmiyor! 
    // console.log(auth.currentUser);
    // kullanici mailini dogrulamak zorunda! 
    // if (!auth.currentUser.emailVerified) return <h1>Bu sayfayi göremezsiniz!</h1>
    */

    return (
        <div>
            <h1>Akis Sayfasi</h1>
            <button onClick={handleClick}>Cikis Yap</button>
        </div>
    )
}

export default Feed