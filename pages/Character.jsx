import React from 'react'
import styles from '../styles/Character.module.css'

let timeOutInstance = null

class Character extends React.Component {
  constructor() {
    super()
    this.state = {
      blink: false
    }
  }
  
  componentDidMount() {
    this.blink()
  }
  
  componentWillUnmount() {
    clearTimeout(timeOutInstance)
  }
  
  blink = () => {
    this.setState({
      blink: !this.state.blink
    })
    
    const randomTime = (Math.random() * 3000) + 1000 
    
    timeOutInstance = setTimeout(() => {
      this.blink()
    }, randomTime)
  }
  
  render() {
    let blinkClass = styles.blink_frame
    let talkClass = styles.hide_animation
    
    if (this.state.blink) {
      blinkClass = `${styles.blink_frame} ${styles.blink_animation}`
    }

    if(this.props.talking) {
      talkClass = `${styles.talk_frame} ${styles.talk_animation}`
      blinkClass = styles.hide_animation
    }

    return (
      <div className={styles.viewport}>
        <div className={blinkClass}>
        </div>
        <div className={talkClass}>
        </div>
      </div>
    )
  }
}

export default Character