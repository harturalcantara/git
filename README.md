# git

### Comandos básicos utilizando git

#### $ git config

A primeira coisa que você deve fazer quando instalar o Git é definir o seu nome de usuário e endereço de e-mail. Isso é importante porque todos os commits no Git utilizam essas informações, e está imutavelmente anexado nos commits que você realiza:

```
git config --global user.name "Hartur Alcantara"
git config --global user.email alcantara@example.com
```
Relembrando, você só precisará fazer isso uma vez caso passe a opção --global, pois o Git sempre usará essa informação para qualquer coisa que você faça nesse sistema. Caso você queira sobrepor estas com um nome ou endereço de e-mail diferentes para projetos específicos, você pode executar o comando sem a opção --global quando estiver no próprio projeto.

#### $ git help
Existem três maneiras de obter a ajuda para qualquer um dos comandos Git:

```
git help {comando}
git {comando} --help
man git- {comando}
```

### Comandos em um novo projeto
Você pode obter um projeto Git utilizando duas formas principais. A primeira faz uso de um projeto ou diretório existente e o importa para o Git. A segunda clona um repositório Git existente a partir de outro servidor.

#### $ git init

#### $ git clone
