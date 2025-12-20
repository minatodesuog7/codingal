class test:
    def __init__(self):
        print("object created")
    def __del__(self):
        print("object destroyed")
t = test()
del t