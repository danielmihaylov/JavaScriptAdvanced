function cars(commands) {
    let map = new Map();
    let carManager = {
        create: function ([name, ,parent]) {
            parent = parent ? map.get(parent) : null;
            let newObject = Object.create(parent);
            map.set(name,newObject);
            return newObject;
        },

        set: function ([name,key,value]) {
            let obj = map.get(name);
            obj[key] = value;
        },

        print: function ([name]) {
            let obj = map.get(name);
            let all = [];
            Object.keys(obj).forEach(k => all.push(`${key}:${obj[key]}`));
            while (Object.getPrototypeOf(obj)){
                Object.keys(Object.getPrototypeOf(obj)).forEach(k => all.push(`${key}:${Object.getPrototypeOf(obj)[key]}`));
                obj = Object.getPrototypeOf(obj);
            }
            console.log(all.join(', '));
        }
    };

    for(let cmd of commands){
        let tokens = cmd.split(' ');
        let action = tokens.shift();
        carManager[action](tokens);
    }
}
