var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.key = 'value';
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipe);
  delete newObj.key;
  return newObj;
}
