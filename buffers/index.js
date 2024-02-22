const buff = Buffer.from("Buffers");
buff.fill("NewValue");
console.log(buff.toString());
console.log(Buffer.byteLength(buff));