function cipher(string, key, action) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    string.toLowerCase();
    key.toLowerCase();
    let keyIndex = 0;
    let output = "";
    
    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            const value = alphabet.indexOf(key[keyIndex % key.length]);
            if (action === "encode") {
                output += alphabet[(alphabet.indexOf(string[i]) + value) % alphabet.length];
            } else if(action==="decode") {
                output += alphabet[(alphabet.indexOf(string[i]) - value + alphabet.length) % alphabet.length];
            }
            keyIndex++;
        } else {
            output += string[i];
        }
    }
 console.log(output)
}

cipher("codewars","password","encode");
cipher("laxxhsj","password","decode");

