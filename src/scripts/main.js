AOS.init();

const dataDoEvento = new Date("jul 1, 2023 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

// atualiza a constante agora a cada 1 segundo
const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoQueFalta = timeStampDoEvento - timeStampAtual;
    const diasEmMs =  1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasQueFalta = Math.floor(tempoQueFalta / diasEmMs);
    const horasQueFalta =  Math.floor((tempoQueFalta % (1000 * 60 * 60 * 24)) / horasEmMs);
    const minutosQueFalta = Math.floor((tempoQueFalta % horasEmMs) / minutosEmMs);
    const segundosQueFalta = Math.floor((tempoQueFalta % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasQueFalta}d ${horasQueFalta}h ${minutosQueFalta}m ${segundosQueFalta}s`;

    if (tempoQueFalta < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Já acabou, espero que tenha gostado. Fique atento para os próximos.';
        document.getElementById('botaoGaranta').innerHTML = 'Me avise do próximo';
    } 
},1000)