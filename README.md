# QA_Xacademy_Automation

# Cypress Testing for Sauce Demo

Este proyecto contiene un conjunto de pruebas automatizadas utilizando **Cypress** para evaluar el comportamiento del sitio web [Sauce Demo](https://www.saucedemo.com/).  
Se realizan pruebas funcionales sobre los flujos principales de usuarios, validando desde el login hasta la finalización del checkout.

## Pruebas Incluidas
- **Usuarios estándar (`standard_user`)**
  - Inicio de sesión.
  - Agregar productos al carrito.
  - Finalización exitosa del checkout.
  - Validación de mensajes de confirmación.
  - Logout.

- **Usuarios problemáticos (`problem_user`)**
  - Identificación de fallos esperados en botones y formularios.
  - Validación de mensajes de error durante el checkout.
  - Logout exitoso.

## Requisitos
- Node.js instalado.
- Cypress configurado en tu entorno.

## Link a tablero de Trello
- https://trello.com/b/DBPmnw4D/mytestsaucedemo
