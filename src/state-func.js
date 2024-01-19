import React,{useState} from "react";

export default function MessageBox(){
    let [text,setText]=useState('Hello World')
    let [size,setSize]=React.useState(16)

    const onClickSetText=()=>{
        let t=prompt('กำหนัดข้อความ')
        if(t){
            setText(t)
        }
    }
    const onClickZoomin=()=>{
        let newSize=size+1
        setSize(newSize)
    }
    let msgboxStyle={
        display:'inline-block',
        width:350,
        fontSize:size,
        backgroundColor:'#ccc',
        padding:5,
        textAlign:'left'
    }
    return <div style={{textAlign:'center',marginTop:20}}>
        <div style={msgboxStyle}>{text}</div><br/><br/>
        <button onClick={onClickSetText}>ข้อความ</button>&nbsp;
        <button onClick={onClickZoomin}>เพิ่มขนาดข้อความ</button>&nbsp;
        <button onClick={()=>setSize(size-1)}>ลดขนาดข้อความ</button>
    </div>
}