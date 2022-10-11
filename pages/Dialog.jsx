import React, { Component } from 'react'
import styles from '../styles/Dialog.module.css'

class Dialog  extends Component{
    constructor(){
      super();
      this.state = {
        message : [
          'Hey, I\'m Enrique. I\'m a Frontend Engineer.', 
          'I\'m just getting started',
          'I\'m looking for my first oportunity.',
          'And this...',
          'This in the back it\s me in my dream: ',
          'Improving my developer knowledge',
          'But the rest of the day I\'m open to work ',
          'I\'m convinced that hiring me its a great opportunity!',
          'I\'m eager to learn and grow,',
          'I care about impact and collaboration,',
          'So if are you looking for a developer,',
          'Let\'s conect!'
        ],
        number : 0
      }
    }
    
    componentDidUpdate(prevProps) {
      const talkingStateChanged = prevProps.talking !== this.props.talking
      
      if (talkingStateChanged && this.props.talking) {
        this.next()
      } 
    }
    
    next(){
      let newNumber = this.state.number + 1

      if (newNumber >= this.state.message.length) {
        newNumber = 0
      }
      
      this.setState ({ number: newNumber })    
    }
    
    render(){
      return (
        <h1 className={ styles.dialog_animation } key={this.state.number }> {this.state.message[this.state.number]}</h1>
      )
      
    }
}

export default Dialog
