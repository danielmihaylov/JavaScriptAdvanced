function myFunction() {
    let type = {};

    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(!type[typeof(arg)]){
            type[typeof(arg)] = 1;
        }else {
            type[typeof(arg)]++;
        }
    }

    Object.keys(type).sort((a,b)=>type[b]-type[a]).forEach(k=> console.log(`${k} = ${type[k]}`));
}

