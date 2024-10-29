import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import { auth, db } from '../firebase'
import SendMessages from './SendMessages';
function Line() {
    //map関数を使うため、useStateを配列にしとく
    const [messages, setMessages] = useState([]);
    //messagesの格納⇒レンダリング時に1回だけする
    //第二引数を空にすることでuseEffectが一回だけになる
    useEffect (()=> {
        db.collection("messages")//firebaseで作成したmessagesのこと
        .orderBy("createdAt")//createdAt順で
        .limit(50)//最大表示は50
        .onSnapshot((snapshot)=>{//データベースのいろんな情報取得のため
            setMessages(snapshot.docs.map((doc)=>doc.data()));
            //snapshotの中のdocsに複数のデータ
            //その中のすべてのデータをmapを使用して呼び出し
            //呼び出したデータをsetMessagesに格納
        })
    },[])
    return (
        <div>
            {console.log(messages)}
            <SignOut/>
            <div className='msgs'>
                {/*{}の中はjs, ()の中はhtmlが書ける */}
                {messages.map(({id, text, photoURL, uid})=>(
                    <div>
                        <div key={id}
                        className={`msg ${uid === auth.currentUser.uid?"sent":"received"}`}>
                            <img src = {photoURL} alt = ""/>
                            <p>{text}</p> 
                        </div>
                    </div>
                ))}
            </div>
            <SendMessages/>
        </div>
    )
}

export default Line
