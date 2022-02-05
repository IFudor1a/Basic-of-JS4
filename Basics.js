function alphabetPosition(text) {
    let new_text = []
    for(let i=0; i < text.length; i++){
        if(text[i].match(/[A-Z]/g)){
            new_text.push(text[i].charCodeAt()-64);
        }
        else if(text[i].match(/[a-z]/g)){
            new_text.push(text[i].charCodeAt()-96);
        }

    }
    return new_text.join(' ');
}