import React from 'react'
import {Card} from 'react-native-paper'

export default function BaseCard(props){
  return(
    <Card>
      <Card.Title title={props.title} subtitle={props.sub} />
      <Card.Content>
        {props.children}
      </Card.Content>
    </Card>
  )
}
