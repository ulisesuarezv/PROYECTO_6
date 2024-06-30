ENDPOINTS Y DOCUMENTACION.

La API cuenta con 2 modulos, uno de prendas y otro de tipos. Tipos refiere a tipos de ropa como "Accesorios", "Pants", "Sneakers", estos contienen prendas en un array y cada prenda tiene sus variables.


paths-TIPOS:
getTipos/
getTipoByID/
postTipo/
putTipo/
deleteTipo/

paths-ROPA:
getPrenda/
getPrendaByID/
postPrenda/
putPrenda/
deletePrenda/


El servidor se encuentra levantado con EXPRESS y la base de datos con MONGODB.