var object = {}
function updateObjectWithKeyAndValue(object, key, value) {
  object.key = 'value';
  object.assign( {}, object,{[key]: 'value'});
  return object
}
