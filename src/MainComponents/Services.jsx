import React from 'react'
import ServiceA from '../ServiceComponets/ServiceA'
import ServiceB from '../ServiceComponets/ServiceB'
import ServiceC from '../ServiceComponets/ServiceC'
import ServiceD from '../ServiceComponets/ServiceD'
import ServiceE from '../ServiceComponets/ServiceE'
import HomeB from '../HomeComponets/HomeB'
import SellE from '../SellComponets/SellE'
import ContactD from '../ContactComponets/ContactD'

function Services() {
  return (
<>
    <div>
     <ServiceA/>
     <ServiceB/>
     <ServiceC/>
     <ServiceD/>
     <HomeB/>
     <SellE/>
     <ContactD/>
      <ServiceE/>
    </div>

</>
  )
}

export default Services
