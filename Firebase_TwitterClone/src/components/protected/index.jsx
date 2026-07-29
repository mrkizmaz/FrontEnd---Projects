import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

// alt route elementini ekrana basmak icin
import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { auth } from '../../firebase'
import PageLoader from '../loader/page-loader'
import { toast } from 'react-toastify'

const Protected = () => {
    // kullanici oturumunun statei
    const [user, setUser] = useState();
    // const navigate = useNavigate(); bunun yerine Navigate componenti kullanilirsa daha saglikli olur

    // kullanicinin oturum verilini al
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => { setUser(user) });
        // dinleyici metodda sayfadan cikildigi anda oturumu kapatir
        return () => unsub();
    }, []);
    // console.log(user)

    // oturum verileri gelene kadar yükleniyor bas
    if (user === undefined) {
        return <PageLoader />
    }

    // eger kullanicinin oturumu kapaliysa logine yönlendir
    if (user === null || !user?.emailVerified) {
        // epostasi dogrulanmamissa bildirim gönder
        if (user?.emailVerified === false) toast.info("Lütfen mailinizi dogrulayiniz!")
        return <Navigate to="/" replace />
    }

    // oturumu acik ve epostasi dogrulanmissa akis sayfasini göster
    // ilgili safaya user verilerini prop olarak gönder
    return <Outlet context={user} />

}

export default Protected