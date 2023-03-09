import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

 export interface props{
    texto:string;
    color?: string
}

export const BotonCalculadora = ({texto, color = "#2D2D2D"}:props) => {
    return (
        <View style={{...styles.boton, backgroundColor: color}}>
            <Text style={styles.botonTexto}>{texto}</Text>
        </View>
    );
}
