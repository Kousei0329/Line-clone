import { Button } from '@mui/material'
import React from 'react'
//rfceでひな形を補完
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'



function Signin() {
    function signinWithGoogle(){
        //これでgoogleログインできる
        //ただfirebaseの方でAuthentic設定が必要
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  return (
    
    <div style={{
      display:"flex",
      justifyContent: "center",
      alignItems:"center",
      height:"100vh",

    }}>
      <Button style={{
        fontSize:"50px",
        color:"white",
        backgroundColor: "blue",
        cursor:"pointer",
        transition:"color 0.3s, background-color 0.3s",
        borderRadius: "20px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "yellow"; // ホバー時のテキスト色
        e.currentTarget.style.backgroundColor = "darkblue"; // ホバー時の背景色
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "white"; // 元のテキスト色に戻す
        e.currentTarget.style.backgroundColor = "blue"; // 元の背景色に戻す
      }}
      
      onClick={signinWithGoogle}>
        グーグルでログインする
      </Button>
    </div>
  );
}

export default Signin
