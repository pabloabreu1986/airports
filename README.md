# Servidor REST Express / Express REST Server

[![N|Solid](https://www.idqweb.com/wp-content/uploads/2016/08/cabecera-nodejs-express.png)](https://nodesource.com/products/nsolid)

Implementación de un serividor REST con Express+NodeJS tiene un endpoint único que devuelve una lista de aeropuertos(no actualizada ni fiable, solo para PRUEBAS).

Implementation of a REST server with Express + Node JS has a unique endpoint that returns a list of airports (not updated or reliable, only for TEST).

# Endpont!


### Aeropuertos / Airports

- GET: Aeropuertos / Airports

### Instalar paquetes / Install dependencies

Se requiere / Required:

[Node.js](https://nodejs.org/) v8+ to run.

Instalar las dependencias y correr el servidor / Install the dependencies and run the server.

```sh
$ cd path/to/project
$ npm install
$ npm run start
```

En desarrollo para instalar dependencias y dependencias de desarrollo (devDependencies) y correr el servidor.

For non production environments...

```sh
$ npm install
$ npm install --dev
$ npm run dev
```

### Por hacer / TO DO..!!

- Busqueda por termino / Search by term
- Pruebas Unitarias / Unitary Test
- Dockerizar / Dockerize

### Probar en localhost / Try at localhost

- http://localhost:3000/airports/v1     --> Data format 1
- http://localhost:3000/airports/v2     --> Data format 2

## License

MIT

**No reinventar la rueda!**
