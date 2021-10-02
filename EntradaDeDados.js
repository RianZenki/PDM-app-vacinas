import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native'

const EntradaDeDados = (props) => {
    const [lote, setLote] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [descricao, setDescricao] = useState('')

    const capturarLote = (lote) => setLote(lote)
    const capturarFabricante = (fabricante) => setFabricante(fabricante)
    const capturarDescricao = (descricao) => setDescricao(descricao)

    return (
        <View>
            <TextInput 
                placeholder="Digite o numero do lote"
                onChangeText={capturarLote}
                value={lote}
            />
            <TextInput 
                placeholder="Digite o fabricante"
                onChangeText={capturarFabricante}
                value={fabricante}
            />
            <TextInput 
                placeholder="Digite a descrição"
                onChangeText={capturarDescricao}
                value={descricao}
            />
            <Button 
                title="Cadastrar Vacina"
                onPress={() => props.adicionaVacina(lote, fabricante, descricao)}
            />
        </View>
    )
}

export default EntradaDeDados
