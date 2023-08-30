// Crear la clase Empresa
class Empresa {
    constructor(id, nombre, rut) {
    this._id = id;
    this._nombre = nombre;
    this._rut = rut;
    this._importaciones = [];
    }
    
    // Getter y setter para el id de la empresa
    get id() {
    return this._id;
    }
    set id(id) {
    this._id = id;
    }
    
    // Getter y setter para el nombre de la empresa
    get nombre() {
    return this._nombre;
    }
    set nombre(nombre) {
    this._nombre = nombre;
    }
    
    // Getter y setter para el rut de la empresa
    get rut() {
    return this._rut;
    }
    set rut(rut) {
    this._rut = rut;
    }
    
    // Getter para el total de importaciones de la empresa
    get totalImportaciones() {
    let total = 0;
    this._importaciones.forEach(importacion => {
    total += importacion.total;
    });
    return total;
    }
    
    // Método para agregar una importación a la empresa
    agregarImportacion(importacion) {
    this._importaciones.push(importacion);
    }
    
    // Método para obtener la suma total por el número de productos y su precio unitario
    sumaTotalProductos() {
    let totalProductos = 0;
    this._importaciones.forEach(importacion => {
    totalProductos += importacion.numProductos * importacion.precioUnitario;
    });
    return totalProductos;
    }
    }
    
    
    
    // Crear la clase Importacion
    class Importacion {
    constructor(id, producto, numProductos, precioUnitario) {
    this._id = id;
    this._producto = producto;
    this._numProductos = numProductos;
    this._precioUnitario = precioUnitario;
    }
    
    // Getter y setter para el id de la importación
    get id() {
    return this._id;
    }
    set id(id) {
    this._id = id;
    }
    
    // Getter y setter para el producto de la importación
    get producto() {
    return this._producto;
    }
    set producto(producto) {
    this._producto = producto;
    }
    
    // Getter y setter para el número de productos de la importación
    get numProductos() {
    return this._numProductos;
    }
    set numProductos(numProductos) {
    this._numProductos = numProductos;
    }
    
    // Getter y setter para el precio unitario de la importación
    get precioUnitario() {
    return this._precioUnitario;
    }
    set precioUnitario(precioUnitario) {
    this._precioUnitario = precioUnitario;
    }
    
    // Getter para el total de la importación
    get total() {
    return this._numProductos * this._precioUnitario;
    }
    }
    
    // Instanciar una empresa y agregar una importación
    const empresa1 = new Empresa(1, "Empresa 1", "12345678-9");
    const importacion1 = new Importacion(1, "Producto 1", 10, 100);
    const importacion2 = new Importacion(2, "Producto 2", 20, 100);
    
    empresa1.agregarImportacion(importacion2);
    empresa1.agregarImportacion(importacion1);
    
    // Obtener el total de importaciones de la empresa
    console.log(empresa1.totalImportaciones);
    
    // Obtener la suma total por el número de productos y su precio unitario
    console.log(empresa1.sumaTotalProductos());
    
    