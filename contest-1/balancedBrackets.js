const testData = ['{[()]}', '{[(])}', '{{{[[(())]]}}'];

function isBalanced(s) {
	let isValid = 'YES';
	const bracketMap = {
			'(': ')',
			'{': '}',
			'[': ']'
	};
	const bracketArrays = [];

	for(let i = 0; i< s.length; i++) {
		const currentChar = s[i];
		if(Object.keys(bracketMap).includes(currentChar)) {
			bracketArrays.push(currentChar)
		} 
		else {
			const lastChar = bracketArrays[bracketArrays.length -1];
			if(bracketMap[lastChar] === currentChar) {
				bracketArrays.pop();
				continue;
			} else {
				isValid = 'NO';
				break;
			}
		}
	
	}
	if(bracketArrays.length > 0) {
		isValid = 'NO';
	}

	return isValid;
}

console.log(`Final Result : ${isBalanced(testData[2])}`);