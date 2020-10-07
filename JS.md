# Part of JS Program
+ Engine : responsible for start to finish compilation and execution js program
+ Compiler : handles parsing and code generation
+ Scope manager: collects and maintains a lookup list of all the declared variables/identifiers, enforce a set of rules as to how these are accesible, each block has its own scope manager



## 2 Phases
- initial identifiers and blocks scope(compiler to scope manager)
- assign value to the identifiers(engine to scopoe manager)


# Recommend to use `{}` block scope to minimize scope exposure 


# Closures

### _Reference from a inner function to outer scope is called closures(each instance of inner function **close over** to the outer variables)_

### Closure allows inner function to continue to access outer variables even after outer scope is finished(dont get GCed and stay around in the memory)

### Reference to the global scope is not closure

### Closure is most encountered in ajax and event handler

### Don't care the closure that not observable
- Must be a function involve
- Must reference at least 1 variable from an outer Scope
- Must be inviked in a different branch of the scope chain from the variables

###  It's important to know where closures appear in our programs, and what variables are included. We should manage these closures carefully so we're only holding onto what's minimally needed and not wasting memory.

