import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';

enum Operadores{
     //Enumeraciones de los operadores
    sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState("100")
    const [numeroAnterior, setNumeroAnterior] = useState("0")

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () =>{
        setNumero("0")
    }

    const armarNumero = (numeroTexto: string) =>{
        //No aceptar doble punto
        if (numero.includes(".") && numeroTexto === ".") return;

        if (numero.startsWith("0") || numero.startsWith("-0")){

            //Numero decimal
            if(numeroTexto === "."){
                setNumero(numero+numeroTexto)

                //Evaluar si es otro cero y hay un punto
            } else if (numeroTexto === "0" && numero.includes(".")){
                setNumero(numero + numeroTexto)

                //Evaluar si es diferente de cero y no tiene un punto
            } else if( numeroTexto !== "0" && !numero.includes(".")){
                setNumero(numeroTexto)

                //Evitar 0000.0
            } else if ( numeroTexto === "0" && !numero.includes(".")){
                setNumero(numero)
            }else{
                setNumero(numero + numeroTexto)
            }

        }else{
            setNumero(numero + numeroTexto)
        }

    }

    const positivoNegativo = () =>{
        if (numero.includes("-")){
            setNumero(numero.replace("-",""))
        }else{
            setNumero("-"+numero)
        }
    }

    const btnDelete = () =>{

        let negativo ="";
        let numeroTemp = numero;

        if(numero.includes("-")){
            negativo="-";
            numeroTemp = numero.slice(1)
        }

        if(numeroTemp.length >1){
            setNumero(negativo + numeroTemp.slice(0,-1))
        } else {
            setNumero("0")
        }
    }
    
    const cambiarNumPorAnterior = () =>{

        if(numero.endsWith(".")){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }

        setNumeroAnterior(numero);
        setNumero("0");
    }

    const btnDividir = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnRestar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }
    return (

        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== "0") && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            }
            

            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"C"} color={"#9B9B9B"} accion={limpiar} />
                <BotonCalculadora texto={"+/-"} color={"#9B9B9B"} accion={positivoNegativo}/>
                <BotonCalculadora texto={"del"} color={"#9B9B9B"} accion={btnDelete}/>
                <BotonCalculadora texto={"/"} color={"#FF9427"} accion={btnDividir}/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"7"} accion={armarNumero}/>
                <BotonCalculadora texto={"8"}  accion={armarNumero}/>
                <BotonCalculadora texto={"9"}  accion={armarNumero}/>
                <BotonCalculadora texto={"X"} color={"#FF9427"} accion={btnMultiplicar}/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"4"} accion={armarNumero}/>
                <BotonCalculadora texto={"5"} accion={armarNumero}/>
                <BotonCalculadora texto={"6"}  accion={armarNumero}/>
                <BotonCalculadora texto={"-"} color={"#FF9427"} accion={btnRestar}/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto={"1"} accion={armarNumero}/>
                <BotonCalculadora texto={"2"} accion={armarNumero}/>
                <BotonCalculadora texto={"3"} accion={armarNumero} />
                <BotonCalculadora texto={"+"} color={"#FF9427"} accion={btnSumar}/>
            </View>

             {/* Fila de Botones */}
             <View style={styles.fila}>
                <BotonCalculadora texto={"0"} ancho = {true} accion={armarNumero}/>
                <BotonCalculadora texto={"."} accion={armarNumero}/>
                <BotonCalculadora texto={"="} color={"#FF9427"} accion={limpiar}/>
            </View>
        </View>
    );
}
