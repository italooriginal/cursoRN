import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, { MegaSena } from './componentes/Multi'

export default createDrawerNavigator({
    MegaSena:{
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
      screen: () => <Inverter text='Inverte tudo' />
    },
    Simples:{
      screen: () => <Simples />,
      navigationOptions: { title: 'Simples' }
    },
    ParImpar: {
      screen: () => <ParImpar numero={4} />
    }

}, { drawerWidth: 300 })