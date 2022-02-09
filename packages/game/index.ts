function test(input: string) {
	return `Hello, ${input}!`;
}

if (require.main == module) {
	console.log(test("World"));
}