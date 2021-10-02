import React from 'react'
import { FlatList, View } from 'react-native'
import ExibeVacina from './ExibeVacina'

export default class ExibeVacinas extends React.Component {
    render() {
        return (
            <View>
                <FlatList 
                    data={this.props.listaVacinas}
                    renderItem={
                        vacina => (
                            <ExibeVacina dadosVacina={vacina.item.value} />
                        )
                    }
                />
            </View>
        )
    }
}