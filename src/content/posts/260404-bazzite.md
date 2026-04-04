---
title: "Bazzite: De NAS a Desktop Gamer (e os perrengues do hardware)"
description: "Minha transição do zimaOS para o Bazzite, resolvendo instabilidades de hardware e descobrindo o poder das distros atômicas."
pubDate: 2026-04-04
tags: ["Linux", "Bazzite", "Hardware", "Homelab"]
category: "post"
accentColor: "blue"
---

Aproveitei esse feriado prolongado para dar uma atenção que meu desktop pedia há tempos. No último ano, ele viveu como um servidor/NAS rodando **zimaOS**, o que foi uma experiência incrível para aprender sobre containers e aplicações isoladas. Mas, ultimamente, a saudade de ter um PC \"de mesa\" pronto para uso — sem precisar plugar cabos no notebook toda vez que quisesse jogar ou assistir algo na TV — falou mais alto.

Além disso, eu vinha enfrentando travamentos aleatórios no zimaOS. Minhas suspeitas bailavam entre o NVMe, o gerenciamento de energia do Linux e as minhas memórias novas (dois pentes Asgard de 8GB vindos da China).

Juntando o útil com o agradável, decidi que era hora de um \"reset\" completo.

### A escolha da distro: Por que Bazzite?

Windows? Nem pensar. Estou cansado de lutar para configurar compiladores C/C++ toda vez e queria distância do ecossistema da Microsoft por um tempo. 

Eu queria algo *user-friendly* como o Linux Mint ou Pop!_OS, mas minha curiosidade sobre **distros atômicas** (herança positiva do zimaOS) me levou ao **Bazzite**. Ele é baseado no Fedora Kinoite e focado em games, trazendo o Steam e o Proton prontos para o combate. A ideia de manter o sistema base imutável e usar **Flatpaks** ou **Distrobox** para isolar ambientes de desenvolvimento me pareceu o equilíbrio perfeito entre estabilidade e flexibilidade.

### O brilho da conteinerização no Desktop

Onde o Bazzite realmente me conquistou foi no **Distrobox**. A possibilidade de rodar ambientes de desenvolvimento isolados, seguros, mas perfeitamente integrados ao sistema, é fascinante. Inclusive, terminei o desenvolvimento deste site rodando tudo dentro desse fluxo!

### O veredito do Hardware (A verdade dói)

O processo não foi só flores. Os travamentos continuaram após a instalação. Depois de algumas horas de debug, cheguei à conclusão amarga: minhas memórias Asgard \"3200MHz\" são, na verdade, chips de 2400MHz rodando no limite do overclock e \"na base da fé\".

Após alguns testes de estresse, encontrei a estabilidade em **2666MHz**. Em *Dual Channel*, o desempenho ainda é superior ao meu antigo pente único de 8GB, e o sistema finalmente parou de congelar.

### Conclusão

Estou muito satisfeito com a escolha. O Bazzite se comporta muito bem tanto para consumo de mídia quanto para codagem. Ter um ambiente planejado para poder quebrar tudo dentro de um container sem levar o SO junto me dá uma liberdade que eu não sentia há muito tempo no Linux Desktop.

E agora, o setup finalmente está estável para as próximas explorações. 🚀
