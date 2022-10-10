# git

### Comandos básicos utilizando git

#### $ git config

Ao ter instalado o Git você deve definir o seu nome de usuário e endereço de e-mail, pois todos commits no Git utilizam essas informações, e está imutavelmente anexado nos commits que você realiza:

    git config --global user.name "Hartur Alcantara"
    git config --global user.email "alcantara@example.com"


Você só precisará fazer isso uma vez caso passe a opção ```--global```, pois o Git sempre usará essa informação para qualquer coisa que você faça nesse sistema. Caso você queira modificar essas informações com um nome ou endereço de e-mail diferentes para projetos específicos, você pode executar o comando sem a opção ```--global``` quando estiver no projeto.

#### $ git help
Existem três maneiras de obter a ajuda para qualquer um dos comandos Git:


    git help {comando}
    git {comando} --help
    man git- {comando}


### Comandos em um novo projeto
Você pode obter um projeto Git utilizando duas formas principais.
- A primeira faz uso de um projeto ou diretório existente e o importa para o Git.
- A segunda clona um repositório Git existente a partir de outro servidor.

#### $ git init

#### $ git clone

### Comitar arquivo/diretório

##### Comitar um arquivo

	git commit meu_arquivo.txt

##### Comitar vários arquivos

	git commit meu_arquivo.txt meu_outro_arquivo.txt
	
##### Comitar informando mensagem

	git commit meuarquivo.txt -m "minha mensagem de commit"

### Remover arquivo/diretório

##### Remover arquivo

	git rm meu_arquivo.txt

##### Remover diretório

	git rm -r diretorio

### Visualizar histórico

##### Exibir histórico de altereções.
	
	git log
	
##### Exibir histórico com diff (mostra linhas de arquivo novas, excluídas ou modificadas) das duas últimas alterações.

	git log -p -2
	
##### Exibir resumo do histórico (hash completa, autor, data, comentário e qtde de alterações (+/-))

	git log --stat
	
### Branches

O **master** é o branch principal do GIT.
O **HEAD** é um ponteiro *especial* que indica qual é o branch atual. Por padrão, o **HEAD** aponta para o branch principal, o **master**.

##### Criando um novo branch

	git branch "new-branch"
	
##### Trocando para um branch existente

	git checkout "new-branch"

##### Criar um novo branch e trocar 

	git checkout -b bug-456	
