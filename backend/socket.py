import os
import zerorpc

class Ping(object):
    def ping(self):
        return "receiving data from ip=%s at port=%s" % self.ip,self.port

class Endpoint(object):

    def __init__(self,type_con,ip,port):
        self.type_con = type_con
        self.ip = ip
        self.port = port
        self.server = zerorpc.Server(Ping())
        self.server.bind(type_con+"://"+ip+":"+port)
        self.server.run()

