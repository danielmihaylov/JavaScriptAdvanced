function listProcessor(commands) {
    let processor = (function () {
        let list = [];

        function add(item) {
            list.push(item);
        }

        function remove(item) {
           list = list.filter(e => e != item);
        }

        function print() {
            console.log(list.toString());
        }

        return{
            add,
            remove,
            print
        }
    })();

    for(let cmd of commands){
        [cmdName,arg] = cmd.split(' ');
        processor[cmdName](arg);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);



