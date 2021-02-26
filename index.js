// @flow

function acceptsString(value: string) {
  console.log(value);
}

acceptsString('foo'); // Works!
acceptsString(false); // Error!
