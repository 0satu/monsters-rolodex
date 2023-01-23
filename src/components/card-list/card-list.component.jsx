// import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => {
  console.log('-render-')
  return (
    <div className='card-list'>
      {monsters.map(monster => (
        <Card monster={monster} />
      ))}
    </div>
  )
}

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props
//     console.log('-render-')
//     return (
//       <div className='card-list'>
//         {monsters.map(monster => (
//           <Card monster={monster} />
//         ))}
//       </div>
//     )
//   }
// }

export default CardList
