let estado = 'lista';
switch(estado){
        case 'aprovada':
        console.log('Parabens você foi aprovado!')
        break;
        case 'reprovada':
        console.log('Você foi reprovado!')
        break;
        case 'lista':
        console.log('Você está na lista de espera!')
        break;
        default:
        console.log('Informação incorreta')
}