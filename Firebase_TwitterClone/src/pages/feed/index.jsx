import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import Nav from './nav';
import Main from './main';
import Aside from './aside';
import { useOutletContext } from 'react-router-dom';

const Feed = () => {

    /**
     * bu yöntem gercek projelerde kullanilmiyor! 
    // console.log(auth.currentUser);
    // kullanici mailini dogrulamak zorunda! 
    // if (!auth.currentUser.emailVerified) return <h1>Bu sayfayi göremezsiniz!</h1>
    */

    // outlet componentindan gönderilen context propuna bu hook araciligi ile erisebiliyoruz
    const user = useOutletContext();
    // console.log(user);

    /*
     const [user, setUser] = useState(undefined);
    +// bu isleme gerek kalmiyor!!
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user));

        return () => unsub();
    }, []);

    console.log(user)
    */

    return (
        <div className='h-screen bg-black text-white overflow-hidden grid grid-cols-[1fr_minmax(300px,600px)_1fr]'>
            <Nav user={user} />
            <Main user={user} />
            <Aside />
        </div>
    )
}

export default Feed