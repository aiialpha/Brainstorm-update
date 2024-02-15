import React from 'react'
import TeamCard from '../../pages/about-us/TeamCard'
// import pic0 from '../../assets/team/fahad1.png'
// import pic1 from '../../assets/team/ishaq1.png'
import pic2 from '../../assets/team/mide2.jpg'
// import pic3 from '../../assets/team/musty1.png'
import pic4 from '../../assets/team/daddy.png'
import pic5 from '../../assets/team/ahmad2.png'
import pic6 from '../../assets/team/sadiq1.png'
import pic7 from '../../assets/team/ahmad.png'
import pic8 from '../../assets/team/Abdurrahman-removebg-preview.png'
import pic9 from '../../assets/team/nagudu.png'
import pic10 from '../../assets/team/nazif.png'
import pic11 from '../../assets/team/mide.png'



export default function TeamCardsContainer() {
  return (
    <div className='team row pt-3'>
        {/* <TeamCard name='' delay={100} pic={pic0} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic1} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic2} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic3} role={'Developer'} ceo={''}/> */}
        <TeamCard name='Abdulsalam' delay={100} pic={pic4} role={'Developer'} ceo={''}/>
        <TeamCard name='Sadiq' delay={100} pic={pic6} role={'Developer'} ceo={''}/>
        <TeamCard name='Ahmad' delay={100} pic={pic7} role={'Developer'} ceo={''}/>
        <TeamCard name='Khalifa' delay={100} pic={pic9} role={'Developer'} ceo={''}/>
        <TeamCard name='Abdulrahman' delay={100} pic={pic8} role={'Developer'} ceo={''}/>
        <TeamCard name='Nazif' delay={100} pic={pic10} role={'Developer'} ceo={''}/>
        <TeamCard name='Ahmad' delay={100} pic={pic5} role={'Developer'} ceo={''}/>
        <TeamCard name='Ayomide' delay={100} pic={pic11} role={'Developer'} ceo={''}/>
        <TeamCard name='Bashir' delay={100} pic={pic2} role={'Developer'} ceo={''}/>
        <TeamCard name='Abba' delay={100} pic={pic2} role={'Developer'} ceo={''}/>
        {/* <TeamCard name='' delay={100} pic={pic14} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic15} role={'Developer'} ceo={''}/> */}
    </div>
  )
}
