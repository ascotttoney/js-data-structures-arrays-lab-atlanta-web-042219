const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const appendDrivers = [...drivers, name];
  return appendDrivers;
}

function prependDriver(name) {
  const prependDrivers = [name, ...drivers];
  return prependDrivers;
}

function removeLastDriver() {
  const removeLast = drivers.slice(0, -1);
  return removeLast;
}

function removeFirstDriver() {
  const removeFirst = drivers.slice(1);
  return removeFirst;
}