from abc import ABC, abstractmethod
class animals(ABC):
    def move(self):
        pass

class human(animals):
    def move(self):
        print("I can walk and run")
class snake(animals):
    def move(self):
        print("I can crawl")    
class dog(animals):
    def move(self):
        print("I can walk and run")
class lion(animals):
    def move(self):
        print("I can walk and run")
h = human()
h.move()
s = snake()
s.move()            
d = dog()
d.move()        
l = lion()
l.move()