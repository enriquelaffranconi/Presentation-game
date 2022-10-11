import { React } from "react";
import styles from "../styles/Background.module.css"



const Image = () => {

  
  // const switchImage = useRef()
  // console.log(switchImage.current);

  // const changeImage = () => {
  //   switchImage.current = styles.background_gif
    
  // }
  
  // onClick= {changeImage()}
  // ref={switchImage}

  return (
    <div className= {styles.screen}>
        <div  className={styles.background_gif} >
        </div>
    </div>
  )
}

export default Image



