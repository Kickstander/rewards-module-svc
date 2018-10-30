test('simple addition test', () => {
  let testStr = document.getElementById('testDiv').innerText();
  expect(testStr).toEqual('HELLO WORLD!');
});
