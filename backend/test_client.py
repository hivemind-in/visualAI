import zerorpc
from server import Endpoint
from multiprocessing import Process
import sys

class test_Client(object):
    def __init__(self):
        self.client = zerorpc.Client()
        self.client.connect("tcp://127.0.0.1:5001")

    def see_response(self):
        print(self.client.ping())

if __name__ == "__main__":
    
    
    if sys.argv[1] == "1":
        soc = Endpoint("tcp","0.0.0.0","5001")
        soc.run_server()
    elif sys.argv[1] == "2":
        cli = test_Client()
        cli.see_response()