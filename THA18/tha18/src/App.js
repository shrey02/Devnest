
function  Box1() {
  return <div style={{background:'white',
  width:50,
  height:50,
  margin: 0
}}> </div>;
}

function  Box2() {
  return <div style={{background:'black',
  width:50,
  height:50,
  margin: 0
}}> </div>;
}

function Rows(){
return (
  <div style={{ display: 'flex',
    margin: 0}}>
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
      <div  style={{ display:'flex',
        margin: 0}}>
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
  const grey="#000";
  return (
  <div  style={{width: 399,
  height: 399,
  padding: 'none',
  marginLeft: 600,
  marginTop:100,
  boxShadow: `0 0 6px 2px ${grey}`}}>
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

function App() {
 
  return (
    <div className="App">
     <Chess/>
    </div>
  );
}

export default App;
