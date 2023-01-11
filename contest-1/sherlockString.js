const testCase = [`aabbccddeefghi`, 'abcdefghhgfedecba'];

function isValid(s) {

	const stringMap = new Map();
	for(let i =0; i< s.length; i++) {
		const currentChar = s[i];
		const currentCharCount = stringMap.get(currentChar) || 0;
		stringMap.set(currentChar, currentCharCount + 1);
	}
	const countMap = new Map();
	
	for (const [key, value] of stringMap.entries()) {
		const oldValue = countMap.get(value) || '';
		const currentValue = `${oldValue}${key}`;
		countMap.set(value, currentValue);
	}
	
	if(countMap.size === 1) {
		return 'YES';
	}
	if(countMap.size > 2) {
		return 'NO';
	}
	
	
	
	console.log(countMap)
	//TODO: need to implement logic for size 2 only
//	return 
		
}

console.log(isValid(testCase[0]));