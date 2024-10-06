Arquitetura evolutiva e modular:
Arquitetura que ajuda a evitar o overengeniring e a criação de uma estrutura e um código focado no momento atual do projeto
e ao mesmo tempo deixando ambos "maleaveis" onde a evolução, mudança, separação e junção se torna facil. Não precisamos
fixar uma estratégia como apenas monolito, micro serviço e etc do inicio ao fim do projeto, focamos em desenvolver de 
acordo com a situação atual do projeto. Exemplo: Se estamos no inicio do projeto e não temos uma visão clara de uma demanda
por elasticidade, escalabilidade e um alto consumo para um dominio especifico não precisamos trabalhar com micro serviços,
seguimos com uma arquitetura modular e estamos preparados para caso surja a necessidade podemos separar um módulo espefico
do projeto e transforma-lo em um micro-serviço conforme se mostre necessário.

Usamos:
DDD estratégico: Focamos estruturação teórica, desenhamos os dominios, como eles se relacionam, levantamos os requisitos
e quais serviços podemos usar para suprir essas necessidades. Realizamos discussões em conjunto para tomar decissões RFCs,
fazemos revisões na arquitetura periodicamente para verificarmos se oq temos até o momento ainda faz sentido e o que preci
sa ser alterado e adicionado.

DDD tatíco: Focado no código, como separados entre entidades, agregadores, objetos de valor, casos de uso.
