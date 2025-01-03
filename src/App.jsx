


import React from 'react'
import { motion, useScroll } from 'motion/react'
import useProducts from './Hook/useProducts';

function App() {

  const {scrollYprogresss} = useScroll();

  const data = useProducts();
  console.log(data);



  return (
    <div>
      <motion.div style={{scaleX:scrollYprogresss}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ad, odit harum sit aliquam consequuntur, nihil ipsam optio officiis ea inventore vel. Aperiam, cumque delectus quae mollitia quis quos optio?
      </motion.div>


      
      



    </div>
  )
}

export default App