/**
 * 
 * Dado un número, mostrar una escalera con escalones de "[-]" usando
 * el número para los niveles de la escalera.
 * [-]
 * [-][-]
 * [-][-][-]
 * [-][-][-][-]
 */

function escalera(number) { 
    let escalon = "";
    console.log(escalon);
    for (let i = 1; i <=number; i++){
        //console.log(escalon);
        console.log( escalon += "[-]"   );
       
        // for (let j = 1; j < number; j++){
        //     escalon+="[-]";
        // }
    }
}
escalera(6);


function escaleraNew(number) { 
    let escalera_completa = "";
    for (let nivel = 1; nivel <= number; nivel++) {
        let escalones = "";
        for (let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]";
        }
        //console.log("Nivel:", nivel, escalones);
        escalera_completa+=escalones+'\n';
    }
    return escalera_completa;
}
escaleraNew(4);
