let tentativas = 0

let numeroAleatorio = Math.floor(Math.random() * 500) + 1

/* LÓGICA PARA PEGAR O NÚMERO QUE A PESSOA DIGITOU
***********************************************************************/

function numeroDigitado() {
    let x = parseInt(document.getElementById('numeroTentativa').value)
    let adivinheNumero = document.getElementById('adivinheNumero')
    let historico5 = document.getElementById('historico')
    let contadorDeTentativas = document.getElementById('contadorDeTentativas')
    let comoJogar = document.getElementById('comoJogar')
    let validar = x

    //Lógica para o histórico de tentativas
    let li = document.createElement('li')

    let diferenca = Math.abs(x - numeroAleatorio)

    if(diferenca > 100){
        li.textContent = `${x} - Muito longe`
        li.style.background = 'purple'
        li.style.color = 'white'
    } else if (diferenca > 75) {
        li.textContent = `${x} - Longe`
        li.style.background = 'blue'
        li.style.color = 'white'
    } else if(diferenca > 50) {
        li.textContent = `${x} - Chegando perto`
        li.style.background = 'yellow'
        li.style.color = 'black'
    } else if(diferenca > 25) {
        li.textContent = `${x} - Quase lá`
        li.style.background = 'orange'
        li.style.color = 'black'
    } else if (diferenca > 10) {
        li.textContent = `${x} - Perto`
        li.style.background = 'red'
        li.style.color = 'white'
    } else {
        li.textContent = `${x} - Muito perto`
        li.style.background = 'darkred'
        li.style.color = 'white'
    }

    if(historico5.children.length == 5 && x == validar) {
        historico5.removeChild(historico5.firstChild)
    }

    historico5.appendChild(li)

    document.getElementById('numeroTentativa').value = ''

    //Lógica para o contador de tentativas
    if (x == validar) {
        tentativas++
        document.getElementById('tentativas').value = tentativas
    } else if(isNaN(x)) {
        alert('Digite um número válido!')
        document.getElementById('tentativas').value = (1 + tentativas) - 1
        document.getElementById('numeroTentativa').value = ''
        historico5.removeChild(historico5.lastChild)
    }
    
    //Quando a pessoa acertou o número
    if(x === numeroAleatorio) {
        adivinheNumero.style.transition = "0.4s ease"
        adivinheNumero.style.backgroundColor = "green"

        contadorDeTentativas.style.transition = "0.4s ease"
        contadorDeTentativas.style.backgroundColor = 'green'

        comoJogar.style.transition = "0.4s ease"
        comoJogar.style.backgroundColor = 'green'

        adivinheNumero.innerHTML = `
        <div style="text-align: center; color: white;">
          <h1 style="margin: 40px 40px 27px 40px;">Você acertou!</h1>
          <button onclick="reiniciarJogo()" style="
            text-align: center;
            padding: 7px 20px;
            font-size: 15px; 
            border: none; 
            border-radius: 7px; 
            cursor: pointer;
            margin-top: 5px;
            background-color: white;
            color: black;
            margin-bottom: 60px;
            font-weight: bold;
          ">Reiniciar</button>
        </div>
        `;

        tentativas = ''

        adivinheNumero.style.display = "flex"
        adivinheNumero.style.flexDirection = "column"
        adivinheNumero.style.justifyContent = "center"
        adivinheNumero.style.alignItems = "center"

    }
    
    //Lógica para saber se está perto ou longe de acertar

    let diff = Math.abs(x - numeroAleatorio)

    let feedback = document.getElementById('feedback')

    if(diff > 100) {
        feedback.value = "Muito longe"
        feedback.style.backgroundColor = "purple"
        feedback.style.color = "White"
    } else if(diff > 75) {
        feedback.value = "Longe"
        feedback.style.backgroundColor = "blue"
        feedback.style.color = "White"
    } else if(diff > 50) {
        feedback.value = "Chegando perto"
        feedback.style.backgroundColor = "yellow"
        feedback.style.color = "black"
    } else if(diff > 25) {
        feedback.value = "Quase lá"
        feedback.style.backgroundColor = "orange"
        feedback.style.color = "black"
    } else if(diff > 10) {
        feedback.value = "Perto"
        feedback.style.backgroundColor = "red"
        feedback.style.color = "White"
    } else if(diff > 0) {
        feedback.value = "Muito perto"
        feedback.style.backgroundColor = "darkred"
        feedback.style.color = "White"
    }

}

/* LÓGICA PARA REINICIAR O JOGO
***********************************************************************/

function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 500) + 1
    console.log(numeroAleatorio)

    document.getElementById('containerMaior').innerHTML = `
        <div id="comoJogar">

                <h3>Como jogar:</h3>

                <div id="paragrafosComoJogar">
                    
                    <p class="negrito">
                    Você deve adivinhar o número certo de acordo com as dicas que você recebe.<br><br>
                    </p>
                    <p id="ps">
                        PS: O número mínimo é 1 e o número máximo é 500.
                    </p>

                </div>

            </div>
        
            <div id="adivinheNumero">

                <h3>Adivinhe o número</h3>

                <input type="text" id="numeroTentativa" placeholder="Digite o número aqui" autofocus><br>

                <button type="button" onclick="numeroDigitado()">Chutar</button><br>

                <input type="text" id="feedback" disabled>

            </div>

            <div id="contadorDeTentativas">

                <h3>Contador de tentativas</h3>
                
                <input type="text" id="tentativas" placeholder="0" disabled><br>

                <hr>

                <h3>Histórico de chutes</h3>

                <ul id="historico"></ul>

            </div>

            <footer id="footer">
                Rodapé
            </footer>
    `
    
    adivinheNumero.style.backgroundColor = 'white'
    adivinheNumero.style.display = "block"
}