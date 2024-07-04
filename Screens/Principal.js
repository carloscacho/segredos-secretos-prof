import React from 'react'
import {View, FlatList, Text} from 'react-native'

import BaseCard from '../components/BaseCard'

const segredos = [
  {
    id: 1,
    titulo: "Um segredo muito secreto",
    segredo: "Não irei revelar aqui, mas é muito secreto",
    user: "carlos@mail.com"
  },
  {
    id: 2,
    titulo: "Um segredo nada secreto",
    segredo: "Estamos furando a greve",
    user: "carlos@mail.com"
  },
  {
    id: 3,
    titulo: "Um segredo muito secreto",
    segredo: "JavaScript é melhor que JAVA",
    user: "maria@mail.com"
  }
]

export default function Principal(){
  return(
    <View>
      <FlatList 
        data={segredos}
        renderItem={item => 
          (
          <BaseCard title={item.item.titulo}>
            <Text>{item.item.segredo}</Text>
          </BaseCard>
          )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}