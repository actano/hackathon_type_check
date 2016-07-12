# Type Check with Flow
* Language extension
* Is transpiled to js, i.e. by bable
* Supports inline annotation syntax usable in coffee script

## Documentation
(https://flowtype.org)

## Repository
(https://github.com/actano/hackathon_type_check)

## IDEs / Plugins

### Atom

#### Nuclide (von Facebook)
* Supports flow based development
  * Autosuggestion on objects
    * shows object type when hovering over objects
    * shows attributes and their types
    * shows functions with their parameters/types and return types
    * does not show available parameters on constructors

  * inline linting
    * provides deep link to related source

  * supports only js

  * shows file based flow coverage

### Sublime Text

#### SublimeLinter-flow
* Supports flow based development
  * Shows only the error position in the code

## Refactoring Abilities
* only indirect during build time

## Call Stack
* ./.
