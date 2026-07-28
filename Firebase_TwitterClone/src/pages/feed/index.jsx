import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import Nav from './nav';
import Main from './main';
import Aside from './aside';

const Feed = () => {

    /**
     * bu yöntem gercek projelerde kullanilmiyor! 
    // console.log(auth.currentUser);
    // kullanici mailini dogrulamak zorunda! 
    // if (!auth.currentUser.emailVerified) return <h1>Bu sayfayi göremezsiniz!</h1>
    */
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user));

        return () => unsub();
    }, []);

    console.log(user)

    return (
        <div className='h-screen bg-black text-white overflow-hidden grid grid-cols-[1fr_minmax(300px,600px)_1fr]'>
            <Nav user={user} />
            <Main user={user} />
            <Aside />
        </div>
    )
}

export default Feed