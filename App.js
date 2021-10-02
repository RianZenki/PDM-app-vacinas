import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EntradaDeDados from './EntradaDeDados'
import ExibeVacinas from './ExibeVacinas';

export default function App() {

  const [vacinas, setVacinas] = useState([]) 
  const [contador, setContador] = useState(0)

  const adicionarVacina = (lote, fabricante, descricao) => {
      setVacinas(vacinas => {
          setContador(contador + 1)

          const novaVacina = {
            key: contador.toString(),
            value: {
                lote: lote,
                fabricante: fabricante,
                descricao: descricao
            }
          }

          return [novaVacina, ...vacinas]
      })
  }
  

  return (
    <View style={styles.container}>
        <View>
            <EntradaDeDados adicionaVacina={adicionarVacina} />
        </View>
        <View>
            <ExibeVacinas listaVacinas={vacinas}/>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 50
  },
});