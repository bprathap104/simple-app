#!/bin/bash
/home/frontend/bin/node_modules/pm2/bin/pm2 stop /home/frontend/src/server.js
rm -rf /home/frontend/.pm2/
