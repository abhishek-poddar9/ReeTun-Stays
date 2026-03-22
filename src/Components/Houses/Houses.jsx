import './Houses.css'
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import imgs4 from '../../assets/image4.jpg'
import imgs5 from '../../assets/image5.jpg'
import imgs6 from '../../assets/image6.jpg'
import imgf10 from '../../assets/image10.jpg'
import imgf11 from '../../assets/image11.jpg'
import imgf12 from '../../assets/image12.jpg'
import Card from "../Card/Card"


function Houses() {
  return (
    <div id='houses'>
        <Card image1={img1} image2={img2} image3={img3} title={"3BHK villa in Jhansi"} price={"40,000"}/>
        <Card image1={imgf10} image2={imgf11} image3={imgf12} title={"1BHK Modern Flat in Kanpur"} price={"60,000"}/>
        <Card image1={imgs4} image2={imgs5} image3={imgs6} title={"1BHK House in Manali"} price={"30,000"}/>
        <Card image1={imgf10} image2={imgf11} image3={imgf12} title={"1BHK Modern Flat in Kanpur"} price={"60,000"}/>

    </div>
  )
}

export default Houses
