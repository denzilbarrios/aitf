Proyecto AITF
Realizado por: Denzil Barrios



# Clonar repositorio, localmente:
$ git clone https://github.com/denzilbarrios/aitf.git

# Preparar el contenedor
$ docker-compose build

# Ejecutarlo 
$ docker-compose up


# Datos adicionales
El proyecto levantara los puertos

Express 3000,

Angular 4000, 

Python  5000,
 
Mongodb 2707,

phpmyadmin 8080,

nginx   8081

Para acceder al proyecto se utiliza la siguiente url.

http://ip_servidor:8081

** Este proyecto fue ejecutado desde Ubuntu Server 20.04.3 LTS

con redireconamiento en nginx {proxy pass} hacia el puerto 8081, 

para la habilitación de acceso via https con certificado Let's Encrypt.

