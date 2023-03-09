import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';



export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"C"} color={"#9B9B9B"} />
                <BotonCalculadora texto={"+/-"} color={"#9B9B9B"} />
                <BotonCalculadora texto={"del"} color={"#9B9B9B"} />
                <BotonCalculadora texto={"/"} color={"#FF9427"} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"7"}/>
                <BotonCalculadora texto={"8"}/>
                <BotonCalculadora texto={"9"} />
                <BotonCalculadora texto={"X"} color={"#FF9427"} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"4"}/>
                <BotonCalculadora texto={"5"}/>
                <BotonCalculadora texto={"6"} />
                <BotonCalculadora texto={"-"} color={"#FF9427"} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"1"}/>
                <BotonCalculadora texto={"2"}/>
                <BotonCalculadora texto={"3"} />
                <BotonCalculadora texto={"+"} color={"#FF9427"} />
            </View>

             {/* Fila de Botones */}
             <View style={styles.fila}>
                <BotonCalculadora texto={"0"} ancho = {true}/>
                <BotonCalculadora texto={"."} />
                <BotonCalculadora texto={"="} color={"#FF9427"} />
            </View>
        </View>
    );
}
