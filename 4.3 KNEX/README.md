#   KNEX 
### Manual de uso en un nuevo proyecto con Node y una Base de datos Relacional 

Es un constructor de **consultas SQL** para Javascript, es una abstracción delgada en la parte superior del controlador. Se utiliza en las bases de datos relacionales (PG,MySQL).

# INSTALACIÓN

se puede instalar de dos maneras para utilizarlo en un proyecto: 

1. Global: `npm i knex -g` 
    - recordando que `-g` es un modificador para instalar de forma global (es decir en toda la compu, no solo para el proyecto en el que se va a ejecutar el comando).

2. Local: `npm i knex`
    - lo que permitira instalarlo solo para el proyecto en el que ejecutes el comando.

se recomienda la instalación local para los proyectos, para evitar problemas de versionamiento con Knex.

### Scripts

Si optas por la opción dos, todos los comandos que se mencionaremos más adelante se deberan agregar en un script dentro de nuestro package.json y la instalación se hará despues de inicializar el proyecto.

## Iniciar el proyecto

1. inicializamos el proyecto dentro de una carpeta destinada para el mismo.
    - `npm init -y`
2. instalar los recursos necesarios:
    - `npm i express knex pg`
        - express: Biblioteca para creacion de API.
        - Knex: Query Builder (constructor de consultas).
        - pg: Driver de postgreSQL, puedes cambiarlo depandiendo de la base de datos que se va a ausar.
3. Crear mi .gitignore:
    - node_modules/

## Configuración de Knex

1. iniciar la configuración de knex para el CRUD de operaciones por medio de `migrations` en Knex.
    - `knex init`: esto genera un archivo llamado knexfile.js
        - si se hizo instalacion local, para poder ejecutar el comando se debe agregar en un script en package.json
            - vamos a package.json
            - agregamos un script: 
            ```
            "scripts": {
            "test": "echo \"Error: no test          specified\" && exit 1",
            "knex": "knex init"
            },
            ```
        - para ejecutarlo en la terminal correremos: `npm run nombreDelScript` => `npm run knex`
```
Migraciones

    una migración es un control de versiones de nuestra base de datos y nos permite crear tablas, establecer relaciones, modificarlas y eliminarlas, utilizando comandos y de manera programacional en vez de hacerlo directamente en la base de datos.
```

2.  al ejecutar el comando `knex init` nos ayudara a inicializar un archivo de configuracion de knex para nuestro proyecto; Este creara un archivo `knexflie.js` donde tendremos que configurar manualmente la conexion y configuración de la base de datos para los diferentes entornos.
    - Desarrollo: Development.
    - En preparación: Staging.
    - Producción: Production.
3. Agregar la configuración para desarrollo, de la siguiente manera debe quedar:
    ```
    development: {
        client: 'postgresql',
        connection: {
            host:'localhost',
            database:'sales',
            user:'postgres',
            password:'rut',
        },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
    },
    ```

4. Crear la Migración.

se crean migraciones tanto entidades queramos agregar a nuestra base de datos.

por ejemplo, yo quiero crear la tabla cliente,
-   `knex migrate:make NombreTabla` => `knex migrate:make cliente`

la ejecución de este comando me permitirá crear un archivo con dos funciones.

- exports.up: es lo que la migracion creará según lo que configuremos (tablas,campos, cambiar tipos de campos, etc)
- exports.dawn: definimos como revertir la migracion realizada por export.up.

    - si se hizo instalacion local, para poder ejecutar el comando se debe agregar en un script en package.json.
     ```
            "scripts": {
            "test": "echo \"Error: no test          specified\" && exit 1",
            "knex": "knex init",
            "knex_migrations": "knex migrate:make cliente && knex migrate:make producto"
            },
    ```
- para ejecutarlo en la terminal correremos: `npm run nombreDelScript` => `npm run knex_migrations`.

5.  CRUD a la base de datos de manera programatica.

    Dentro de la funcion: `exports.up`:
    ```
    exports.up = function(knex) {
        return knex.schema.hasTable('cliente').then((exists)=>{
            if (!exists) {
                return knex.schema.createTable("cliente", function(table){
                    table.increments("dni").primary();
                    table.string("nombre").notNullable();
                    table.string("primer_apellido").notNullable();
                    table.boolean("active").notNullable().defaultTo(true);
                    table.timestamp("created_at").defaultTo(knex.fn.now);
                });
            }
        });
    };
    ```
6. una vez creado el codigo para crear la base de datos me encargare de ejecutar el comando para cargar las indicaciones en la base de datos, eso creara dos tablas:
    - knex_migrations.
    - knex_migrations_lock.

    - `knex migrate:latest`

    - si se hizo instalacion local, para poder ejecutar el comando se debe agregar en un script en package.json.
     ```
            "scripts": {
            "test": "echo \"Error: no test          specified\" && exit 1",
            "knex": "knex init",
            "knex_migrations": "knex migrate:make cliente && knex migrate:make producto",
            
            },
    ```
    ```
            "scripts": {
            "test": "echo \"Error: no test          specified\" && exit 1",
            "knex": "knex init",
            "knex_migrations": "knex migrate:make cliente && knex migrate:make producto",
            "knex_latest":"knex migrate:latest"
            },
    ```
    
- para ejecutarlo en la terminal correremos: `npm run nombreDelScript` => `npm run knex_latest`.
