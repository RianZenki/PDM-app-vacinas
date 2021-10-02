import React from 'react'
import { Text, View } from "react-native"


const ExibeVacina = (props) => {
    return (
        <View>
            <Text>{props.dadosVacina.lote}</Text>
            <Text>{props.dadosVacina.fabricante}</Text>
            <Text>{props.dadosVacina.descricao}</Text>
        </View>
    )

}

export default ExibeVacina