const testData = 'The quick brown fox jumps over the lazy dog';
function pangrams(s) {
    const data = new Set(s.toLowerCase().replace(/\s/g, ''));
    if(data.size === 26) {
        return 'pangrams';
    }
    
    return 'not pangram';

}

console.log(pangrams(testData));