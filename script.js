const nome = document.getElementById("nome");
const height = document.getElementById("height");
const weight = document.getElementById ("weight");
const button = document.getElementById("calculate");
const result = document.getElementById("result")


const getTexts = (imc) => {
    if(imc > 40) return 'com obesidade grau III';
    if(imc > 35) return 'com obesidade grau II';
    if(imc > 30) return 'com obesidade grau I';
    if(imc > 25) return 'Levemente acima do peso';
    if(imc > 18.5) return 'com o peso ideal';
    return 'abaixo do peso';
}


const imcCalc = () => {
    if(!nome.value || !height.value || !weight.value) return result.textContent = 'preencha todos os compos'
    const valorImc = (+weight.value / (+height.value * +height.value)).toFixed();
    console.log (+weight.value ,+height.value , nome.value)
    result.textContent = getTexts(imcCalc);
    result.textContent = `${nome.value} voce está ${getTexts(valorImc)}. Com seu IMC em:${valorImc}`;
}

button.addEventListener ('click', imcCalc);