import React, {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import {Note} from './Models/note.model'
import NoteList from './Components/NoteList'
import Header from './Components/Header'
import {Container,Row,Col} from 'react-bootstrap';
import CreateNotes from './Components/CreateNote';


function App() {
  //const name:string ="ram"
  const [notes,setNotes]=useState<Note[]>([{
    id:(new Date).toDateString(),
    title:"metting",
    text:"schedule metting Quadient project team",
    color:"red",
    date:(new Date).toDateString()
  }])
  // const changeName = ()=>{
  //   setName(10);
  // }
  return (
    <>
    <Header />
    <Container className="mt-5">
      <Row>
        <Col>
        <NoteList notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
