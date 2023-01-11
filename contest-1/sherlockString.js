const testCase = [`aabbccddeefghi`, 'abcdefghhgfedecba'];

function isValid(s) {
	let isValid = true;
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
	
	
	console.log(countMap.entries())
	return isValid;
	
}

console.log(isValid(testCase[1]));