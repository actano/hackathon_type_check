### @flow ###

### (x: string, y: number): boolean ###
foo2 = (x, y) ->
    x.length * y is 5

foo2('Hello', 42)  # gives an error in FlowType

class Bob
    ### (x: number): number ###
    calculate: (x) ->
        x * x

b = new Bob()
b.calculate(4)  # no error in FlowType
