import React from 'react';
import  './Chess.css';
function  Box1() {
    return <div className="black"> </div>;
}

function  Box2() {
    return <div className="white"> </div>;
}

function Rows(){
return (
    <div className="rows">
        <Box1/>
        <Box2/>
        <Box1/>
        <Box2/>
        <Box1/>
        <Box2/>
        <Box1/>
        <Box2/>
    </div>
   )
}
function Rows1(){
    return (
        <div className="rows">
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
            <Box2/>
            <Box1/>
        </div>
       )
    }
function  Chess() {
    return (
    <div className="board">
       <Rows/>
       <Rows1/>
       <Rows/>
       <Rows1/>
       <Rows/>
       <Rows1/>
       <Rows/>
       <Rows1/>
    </div>
    )
}
export default Chess;