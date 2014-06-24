auto-completion
===============

auto completion API based on Node.js and Thrift service


How to build and run it:

1. under server\server

make
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/thrift/lib/cpp/.libs
./autoCompletion-server

2. under client-api\nodejs

npm start

3. open browser

type http://localhost:3000/api/autoCompletion?prefix=cool

you will see the json message from the thrift server.


