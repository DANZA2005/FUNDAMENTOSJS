const tsuru  = {
    model: 2000,
    color: 'blanco',
    kilometers: 200000,
    engine: '2.0 litros',
}
console.log(tsuru);
console.log(tsuru.color);
console.log(tsuru.engine);
console.log(tsuru.model);
tsuru.engine = '4.0 litros'
console.log(tsuru);

tsuru.collitions = 5;
console.log(tsuru)
//esto es por si quieres que tenga mas de una palabra
tsuru['numero de placas'] = 'XD XD XD';
console.log(tsuru);
// esto por si quieres poner varios atributos en un solo objeto
tsuru.services = [2005, 2010, 2015, 2020];
console.log(tsuru ['services']);

// objetos con metodos 
tsuru.status = 'apagado'

tsuru.start = function(){
    console.log('Revision del sistema');
    console.log('Revisando niveles');
    console.log('BRUMMMMMMM');
    console.log('BRUMMMMMMM');
    console.log('BRUMMMMMMM');
    console.log('R!');
    console.log('R!');
    console.log('R!');
    this.status = 'Encendido';
}

tsuru.start();
console.log(tsuru.status);

tsuru['Turn off'] = function(){
    console.log('apagandose...')
    this.status = 'apagado';
    console.log(this.status);

}

tsuru['Turn off']();

delete tsuru['numero de placas'];
console.log(tsuru);

