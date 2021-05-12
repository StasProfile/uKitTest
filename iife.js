/*создать IIFE функцию с помощью классического js, 
имеющую несколько свойств и методов, 
записанную в переменную и иметь возможность 
достать некоторые свойства, 
но не иметь возможности менять значения.
 (Без использования Object.freeze и Object.defineProperty)*/

 const table = (function() {
    const private = { color: 'black', length: '2 meters', height: '1.5 meters', width: '1 meter', tableId: '123123' };

    return {
        get color() { return private.color } ,
        get length() { return private.length } ,
        get height() { return private.height } ,
        get width() { return private.width },
        getColor() { return private.color },
        getLength() { return private.length },
        getHeight() { return private.height },
        getWidth() { return private.width },

    };   
 })();

console.log(table.color);
table.color = 'white';
console.log(table.color);
console.log(table.getColor());