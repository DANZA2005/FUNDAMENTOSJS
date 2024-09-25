function createCube(size) {
    let cube = '';
  const space = ' ';
  const facea = '/\\';
  const backa = '_\\';
  const faceb = '\\/';     
  const backb = '_/';
  let cubea = '';
  let cubeb = '';
  for(let i = 0; i < size ; i++){
    let line = space.repeat(i);
    line += facea.repeat(size-i);
    line += backa.repeat(size);
    cubea = line + '\n' +cubea;
  }

  for(let i = size; i > 0 ; i--){
     let line = space.repeat(i-1);
     line += faceb.repeat((size+1)-i);
     line += backb.repeat(size);
     cubeb = line + '\n' +cubeb;
  }
    console.log(cubea + cubeb)


    return ''
  }

const cube = createCube(3);
