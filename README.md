# <div align="center">Pasante bot, telegram version</div> 
<div align="center">¡Pequeño bot para Telegram!</div><br>

<div align="center">

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

<br>
Este proyecto es un fork de [JGPenaB/Pasante-bot](https://github.com/JGPenaB/Pasante-bot) con el propósito de adaptarlo a Telegram.
<br>
Repositorio mantenido por [César Escudero](https://github.com/cedaesca)
</div>

--------

<p style="text-align:justify;">Es un bot para nuestro server de Discord. Nació con el propósito de consultar criptomonedas, pero se incluyeron otras funciones igual de (in)útiles.</p>

**Funciones principales:**

* Consulta del Dólar paralelo (distintas fuentes: AirTM, DolarToday, LocalBitcoin...).

* Búsqueda de imágenes y vídeos.

* Búsqueda de preguntas en Stack Overflow.

* Búsqueda en la Wikipedia.

--------

## Instalación

* Requiere Node.js >= 14.15

Primero instala las dependencias necesarias:

```
npm install
```

Luego, crea un archivo .env que contenga la estructura del archivo `.env.example` y coloca el token de tu bot.
```
TELEGRAM_API_TOKEN=<tu token>
```

Y de último, para ejecutarlo, usa el siguiente comando:

```
 npm start
```

--------

Hecho en NodeJS con la librería [Node.js Telegram Bot API](https://github.com/yagop/node-telegram-bot-api).

El bot hace uso de la API "[Stack Exchange API](https://api.stackexchange.com/docs)" para las búsquedas en Stack Overflow. Tanto el Stack Exchange API como Stack Overflow pertenecen a Stack Exchange Inc.

*The unified mark is a trademark of the Wikimedia Foundation and is used with the permission of the Wikimedia Foundation. We are not endorsed by or affiliated with the Wikimedia Foundation.*
