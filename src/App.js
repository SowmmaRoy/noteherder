import React, { Component } from 'react'

import './App.css'
import Main from './Main'

import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()

    this.setCurrentNote = this.setCurrentNote.bind(this)

      this.state = {
        notes: {},
        currentNote: this.blankNote(),    
   }
  }

  blankNote = () => {
    return {
      id:null,
      title:'',
      body:'',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () =>
    this.setCurrentNote(this.blankNote())

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if (!note.id){
      note.id = Date.now()
    }
    notes[note.id] = note
    this.setState({ notes })
    this.setCurrentNote(note)
  }
  
  removeCurrentNote = () => {
    const notes = {...this.state.notes}
    delete notes[this.state.currentNote.id]

    this.setState({ notes })
    this.resetCurrentNote()
  }




  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
    }

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }

    return (
      <div className="App">
        <Main
          {...noteData}
          {...actions}
        />

      </div>
    );
  }
}

export default App

