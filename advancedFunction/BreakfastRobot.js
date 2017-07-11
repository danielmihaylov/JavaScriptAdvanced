function result() {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10
        }
    };

    return function (inputString) {
        let inputData = inputString.split(' ');
        let command = inputData [0];

        if(command === 'restock'){
            let microElement = inputData[1];
            let quantity = Number(inputData[2]);
            robot[microElement] += quantity;
            return 'Success';
        }else if(command === 'report'){
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        }else if(command === 'prepare'){
            let selectedProduct = inputData[1];
            let selectQuantity = Number(inputData[2]);
            let currentProduct = products[selectedProduct];

            let canProductBeCooked = true;

            for(var microElement in currentProduct){
                if(currentProduct.hasOwnProperty(microElement)){
                    var element = currentProduct[microElement];
                    if(robot[microElement] < element * selectQuantity){
                        canProductBeCooked = false;
                        return `Error: not enough ${microElement} in stock`;

                    }
                }
            }
            if(canProductBeCooked){
                for(var microElement in currentProduct){
                    if(currentProduct.hasOwnProperty(microElement)){
                        var element = currentProduct[microElement];
                        robot[microElement] -= element * selectQuantity;
                    }
                }

                return 'Success';
            }
        }
    }
};
