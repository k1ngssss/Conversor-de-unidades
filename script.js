//Variáveis
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("graus");

//Conversor
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        console.log(e.target.name + ":" + value);

        switch (e.target.name) {
            case "celsius":
                fahrenheitInput.value = ((value * 1.8) + 32).toFixed(2);
                kelvinInput.value = (value + 273.15).toFixed(2);
                break;
            case "fahrenheit":
                celsiusInput.value = ((value - 32) / 1.8).toFixed(2);
                kelvinInput.value = (((value - 32) / 1.8) + 273.15).toFixed(2);
                break;
            case "kelvin":
                celsiusInput.value = (value - 273.15).toFixed(2);
                fahrenheitInput.value = (((value - 273.15) * 1.8) + 32).toFixed(2);
                break;
        }
//Alerta de limite de temperatura
        if (celsiusInput.value < -273.15) {
            alert("Atenção! Os valores que está prestes a encontrar são ímpossíveis de atingir no planeta Terra!")
        } 
    
    }
    )
}

//Output HTML
function legenda() {
    let texto = parseFloat(document.getElementById("celsius").value);
    let texto1 = parseFloat(document.getElementById("fahrenheit").value);
    let texto2 = parseFloat(document.getElementById("kelvin").value);
    
    document.getElementById('outputHTML').innerHTML = `
    <p>Graus Celsius (valor anterior): ${texto}</p>
    <p>Graus Fahrenheit (valor anterior): ${texto1}</p>
    <p>Graus Kelvin (valor anterior): ${texto2}</p> `;

    //Background color
    if (celsiusInput.value <= 15) {
        document.body.style.backgroundColor = "blue";
}
    else if (celsiusInput.value <= 25) {
        document.body.style.backgroundColor = "yellow";
}
    else if (celsiusInput.value > 25) {
        document.body.style.backgroundColor = "red";
}   

}
