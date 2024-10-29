import React, { useState } from 'react'
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

function SendMessages() {
    //フォーム内メッセージ⇒別の変数として格納される必要あり
    //⇒useStateを使用する必要あり
    const [messages, setMessages]=useState("");
    function SendMessages(e){
        e.preventDefault();//フォームのエンターを押すたびにレンダリングされる機能を止める
        
        const {uid, photoURL} = auth.currentUser;//現在のユーザのuidとphotoURLを獲得
        //photoURLはGoogleのアイコンになる

        db.collection("messages").add({//データベース上のmessagesに保存するための関数
            text:messages,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),//クリックしたときの時間を獲得
        });
        setMessages("");//フォームの中を空にするため
    }
    return (
        <div>
        <form onSubmit={SendMessages}>
        {/*フォームに入力してエンターキーを押したら関数が呼ばれる*/}
            
            <div className='sendMsg'>
                <Input
                style={{
                    width:"78%",
                    fontSize:"15px",
                    fontWeight:"550",
                    marginLeft:"5px",
                    marginBottom:"-3px"
                }}
                placeholder='メッセージを入力してください'
                type='text'
                onChange={(e)=>setMessages(e.target.value)}//入力内容を獲得, messagesに格納
                value={messages}
                />
                <SendIcon></SendIcon>
            </div>
        </form>
        </div>
    )
}

export default SendMessages
