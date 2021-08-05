# typescript

### typescript is strictly types
* Once a variable is declared of a specific type, it's type can't be changed.
* Typescript infers the type from the value if type is not defined explicitly.
* In Typescript the type can also be specified explicitly.


### commands
* tsc <filename> - This will compile a typescript file.
* tcs --init -  This will create a typescript config file.
* tsc -w - This will watch the folder as per the configuration file and compile them as soon as something is changed.
* watch compiler option can also be added to tsconfig file so that compliler can watch changes in the files and compile them to javascript files.


### Inheritance in typescript configuration file
* In large projects we can create a typescript configuration file at the root of the project.
* For each part of application a new config file can be created in that directory which can extend the existing basee file.
* tsconfig.json file in src directory is extending the existing tsconfig.json base file at the root of the project.