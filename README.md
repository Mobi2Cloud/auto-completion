auto-completion
===============

Use Node.js and Thrift service to implement an auto-completion api


### How to build and run it:

* under server\server

```
make
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/thrift/lib/cpp/.libs
./autoCompletion-server
```

* under client-api\nodejs

```
npm start
```

* open browser

```
type http://localhost:3000/api/autoCompletion?prefix=cool
```

you will see the json message from the thrift server.


