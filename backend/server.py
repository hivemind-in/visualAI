import os
import zerorpc

class Ping(object):
    def ping(self):
        return "receiving data from ip=127.0.0.1 at port=5001"


class Endpoint(object):

    def __init__(self,type_con,ip,port):
        self.type_con = type_con
        self.ip = ip
        self.port = port
        self.server = zerorpc.Server(Ping())
        self.server.bind(type_con+"://"+ip+":"+port)
    
    def run_server(self):
        self.server.run()

