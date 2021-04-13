function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    copyOwnPropertiesFrom(copy, orig);
    return copy;
  }
  
  function copyOwnPropertiesFrom(target, source) {
    Object
      .getOwnPropertyNames(source)
      .forEach(function (propKey) {
        var desc = Object.getOwnPropertyDescriptor(source, propKey);
        if (desc.value instanceof  Object) {
            desc.value = copyObject(desc.value)
        }
        Object.defineProperty(target, propKey, desc);
      });
    return target;
  }
  var obj ={
      a: [1]
  }
  var o =  copyObject(obj)
  console.log(o.a ===obj.a);
  console.log(o);