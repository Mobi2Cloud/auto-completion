CC=g++ -O2 -lthrift -lssl
CFLAGS=-g -I./ -I/usr/local/include/thrift/ -c

all: thrift ac_server

thrift:
	thrift -gen cpp ../autoCompletion.thrift
	cp gen-cpp/*.cpp .
	cp gen-cpp/*.h .

ac_server: autoCompletion_constants.o autoCompletion_types.o AutoCompletionService.o AutoCompletionServiceHandler.o 
	$(CC) AutoCompletionServiceHandler.o AutoCompletionService.o autoCompletion_constants.o autoCompletion_types.o -o autoCompletion_server

autoCompletion_constants.o: autoCompletion_constants.cpp
	$(CC) $(CFLAGS) autoCompletion_constants.cpp

autoCompletion_types.o: autoCompletion_types.cpp
	$(CC) $(CFLAGS) autoCompletion_types.cpp

AutoCompletionService.o: AutoCompletionService.cpp
	$(CC) $(CFLAGS) AutoCompletionService.cpp

AutoCompletionServiceHandler.o: AutoCompletionServiceHandler.cpp
	$(CC) $(CFLAGS) AutoCompletionServiceHandler.cpp

clean:
	rm -rf *o autoCompletion_server
	mv AutoCompletionServiceHandler.cpp AutoCompletionServiceHandler.tmp
	rm *.cpp
	rm *.h
	cp AutoCompletionServiceHandler.tmp AutoCompletionServiceHandler.cpp
	rm AutoCompletionServiceHandler.tmp
	rm -rf gen-cpp/
