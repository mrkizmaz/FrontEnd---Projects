import React, { useEffect, useState } from 'react'
import Form from '../../components/form'
import Post from '../../components/post'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import Loader from '../../components/loader/loader';

const Main = ({ user }) => {

    const [tweets, setTweets] = useState(null);

    // ekrana gelen her yeni veriyi almak icin
    useEffect(() => {
        const tweetsCol = collection(db, "tweets");

        const q = query(tweetsCol, orderBy("createdAt", "desc"))

        const unsub = onSnapshot(q, (snapshot) => {
            // console.log(snapshot) ile verileri kontrol et
            const temp = [];
            snapshot.docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

            setTweets(temp);
        });

        return () => unsub;
    }, []);

    // tweetleri kontrol et
    // console.log(tweets);

    // form kac kez render oldu? -2 kez oluyor! Neden?
    // console.log("form render oldu")

    return (
        <main className='border border-zinc-600 overflow-y-auto'>
            <header className='border-b border-zinc-600 p-4 font-bold'>Anasayfa</header>

            <Form user={user} />

            {!tweets ? (<Loader designs="my-20 scale-[1.2]" />) :
                (
                    tweets.map((tweet, key) => (
                        <Post key={key} tweet={tweet} />
                    ))
                )}

        </main>
    )
}

export default Main