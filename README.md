# knighthell-boilerplate-idl-proto

## Description

Interface Definition Language using ProtoBuf for DDD of knighthell's boilerplate projects

## Ref Diagram

````mermaid
flowchart LR
    idl[knighthell-boilerplate-idl-proto]
    nestjs[knighthell-boilerplate-nestjs]
    quarkus[knighthell-boilerplate-quarkus]
    fastapi[knighthell-boilerplate-fastapi]
    golang[knighthell-boilerplate-golang]
    springboot[knighthell-boilerplate-springboot]
    
    idl -.-> nestjs
    idl -.-> quarkus
    idl -.-> fastapi
    idl -.-> golang
    idl -.-> springboot
````

## Usage

````shell
sudo ./idlprotoc.sh -d place -d user -t nestjs -t ts -t golang
````

or

````shell
sudo ./idlprotoc.sh --all
````
### Servers

- knighthell-boilerplate-nestjs
- ~~knighthell-boilerplate-quarkus~~(TBD)
- ~~knighthell-boilerplate-golang~~(TBD)
- ~~knighthell-boilerplate-springboot~~(TBD)
- ~~knighthell-boilerplate-fastapi~~(TBD)

### Client

- Angular
  - knighthell-boilerplate-angular-user
  - ~~knighthell-boilerplate-angular-admin~~(TBD)
- Flutter
  - ~~knighthell-boilerplate-flutter~~(TBD)