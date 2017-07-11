function PrintDeck(cardsDeck) {
    function cards(face,suit) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuites = ['S', 'H', 'D', 'C'];
        if(!validFaces.includes(face)){
            throw new Error("Invalid card face: " + face);
        }
        if(!validSuites.includes(suit)){
            throw new Error("Invalid card suit: " + suit);
        }

        let card = {
            face: face,
            suit: suit,
            toString: () =>{
                let cardChars = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663",
                };
                return card.face + cardChars[card.suit];
            }
        };
        return card;
    }
    let deck = [];
    for(let card of cardsDeck){
        let face = card.substring(0,card.length -1);
        let suit = card.substr(card.length - 1);
        try{
            deck.push(cards(face,suit))
        }catch (err){
            console.log("Invalid card: " + card);
            return;
        }
    }

    console.log(deck.join(' '));
}

PrintDeck(['AS', '10D', 'KH', '2C']);
