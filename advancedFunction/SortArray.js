function sortArray(inputArray,sortMethod) {
    if (sortMethod == 'asc'){
        return inputArray.sort((a,b)=>{
            return a-b;
        });
    }else if(sortMethod = 'desc') {
        return inputArray.sort((a, b)=> {
            return b - a;
        })
    }
}


