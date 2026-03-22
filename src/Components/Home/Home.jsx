import "./Home.css"
import Card from "../Card/Card"
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import imgs4 from '../../assets/image4.jpg'
import imgs5 from '../../assets/image5.jpg'
import imgs6 from '../../assets/image6.jpg'
import imgt7 from '../../assets/image7.jpg'
import imgt8 from '../../assets/image8.jpg'
import imgt9 from '../../assets/image9.jpg'
import imgf10 from '../../assets/image10.jpg'
import imgf11 from '../../assets/image11.jpg'
import imgf12 from '../../assets/image12.jpg'
import { useContext } from "react";
import { dataContext } from "../../Context/Usercontext"


function Home() {
   let {
      title,
      setTitle,
      addListing,
      setaddListing,
      addImage1,
      setaddImage1,
      addImage2,
      setaddImage2,
      addImage3,
      setaddImage3,
      price,
      setprice,
  } = useContext(dataContext)
  return (
    <div id="home">
      <Card image1={img1} image2={img2} image3={img3} title={"3BHK villa in Jhansi"} price={"40,000"}/>
       <Card image1={imgs4} image2={imgs5} image3={imgs6} title={"1BHK Farmhouse in Lucknow"} price={"60,000"}/>
        <Card image1={imgt7} image2={imgt8} image3={imgt9} title={"1BHK Flat in Manali"} price={"60,000"}/>
        <Card image1={imgf10} image2={imgf11} image3={imgf12} title={"1BHK Modern Flat in Kanpur"} price={"60,000"}/>
         <Card image1={imgs4} image2={imgs5} image3={imgs6} title={"1BHK Modern Flat in Kanpur"} price={"70,000"}/>
         <Card image1={img1} image2={img2} image3={img3} title={"2BHK Modern villa in Jhansi"} price={"50,000"}/>
         <Card image1={imgs4} image2={imgs5} image3={imgs6} title={"1BHK House in Manali"} price={"30,000"}/>
        <Card image1={imgt7} image2={imgt8} image3={imgt9} title={"1BHK Flat in Manali"} price={"60,000"}/>
        <Card image1={img1} image2={img2} image3={img3} title={"3BHK villa in Jhansi"} price={"40,000"}/>
        <Card image1={imgs4} image2={imgs5} image3={imgs6} title={"1BHK House in Manali"} price={"30,000"}/>
          <Card image1={imgt7} image2={imgt8} image3={imgt9} title={"1BHK Flat in Manali"} price={"60,000"}/>
          <Card image1={imgf10} image2={imgf11} image3={imgf12} title={"1BHK Modern Flat in Kanpur"} price={"60,000"}/>
          {addListing?<Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""}


    </div>
  )
}

export default Home
