import './Card.css'

function Card({image1, image2, image3, title, price}) {
  return (
    <div className='card'>
        <div className='images'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
        </div>
        <span className='cardsspan1'>{title}</span>
        <span className='cardsspan2'>Rs{price}/Month</span>
    </div>
  )
}

export default Card
