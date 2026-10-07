# Questão 1

## a) 
O tipo da variável é definido no código e fixo. A verificação é feita em tempo de compilação, antes de rodar o programa.

## b)
* Performance: O compilador gera código de máquina otimizado direto, sem checar tipos a cada instrução.

* Segurança: Pega erros de tipo antes do programa rodar, evitando falhas em produção.

## c) 
O tipo é associado ao valor guardado, não à variável, e a checagem acontece enquanto o código roda. O desafio de performance é o overhead constante de inspecionar tipos em tempo de execução.

## d)
* Forte: Não permite misturar tipos incompatíveis sem conversão explícita (ex: somar texto com número quebra).

* Fraca: Converte tipos por baixo dos panos automaticamente (coerção implícita), às vezes gerando comportamentos bizarros.

## e) 
Elas mantêm tipos estáticos na maior parte do código, mas oferecem um tipo de escape flexível (como dynamic no C# ou any no TypeScript). A inferência deduz o tipo sozinha com base no valor inicial, poupando você de digitar o tipo manualmente.

## f) 
O JavaScript é dinâmico e fracamente tipado: as variáveis mudam de tipo livremente e ele faz coerção implícita automática o tempo todo (como 1 + "2" virar "12").