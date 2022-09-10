# Pipeline de CI com SonarCloud

## Enunciado

Nesse desafio, iremos consolidar os conhecimentos em relação a criação de uma pipeline de CI realizando os seguintes passos.

- Crie uma pequena aplicação simples em node.js (qualquer aplicação mesmo)
- Crie testes de unidade para essa aplicação
- Crie uma pipeline de CI utilizando o Github actions que:
- Instale a aplicação
    - Execute os testes
    - Execute o SonarCloud
    - Suba essa aplicação para um repositório público no Gthub e ative o status check para que seja possível dar o merge apenas se a aplicação passar na pipeline de CI e também se a aplicação passar no quality gate do SonarCloud.
- Crie uma Pull Request (PR) realizando todo o processo.
- Informe o link da PR abaixo para que possamos corrigir.

## Resposta
[Pull Request](https://github.com/lmarqs/curso-full-cycle-3-0/pull/9)

[Pipeline executado](https://github.com/lmarqs/curso-full-cycle-3-0/runs/8287296151?check_suite_focus=true)

Pipeline com merge bloqueado aguardando execução da pipeline

![image](https://user-images.githubusercontent.com/22457494/189504826-109601b6-25dd-4c07-a00b-b71debbae00b.png)

PR com merge liberado após execução da pipeline

![image](https://user-images.githubusercontent.com/22457494/189504833-91636fd5-05b1-4020-9408-344724798ccb.png)
