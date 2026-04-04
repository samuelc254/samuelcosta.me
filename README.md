# samuelcosta.me 

Este é o meu playground. Um diário para documentar o que eu invento nos finais de semana, de robótica a homelabs.

## Lembretes de Organização

1.  **A ordem do Feed é pelo NOME do arquivo:** O site não olha a data para ordenar. Use prefixos numéricos em `src/content/posts/` para colocar o que você quiser no topo (ex: `00-pilar.md`, `01-projeto-rc.md`).
2.  **Selo de Pinado:** No Markdown, use `addIcon: "pin"` para mostrar o ícone de pin no card (é apenas visual, não afeta a ordem).
3.  **Cores de Destaque:** As opções de `accentColor` são: `mint`, `amber`, `blue`, `peach`.
4.  **Logs de Desenvolvimento:** O histórico de "por que fiz isso?" está no `log.md`.

### Exemplo de Markdown (Frontmatter)

```yaml
---
title: "Título"
description: "Resumo rápido"
pubDate: 2026-04-04
tags: ["Tag1", "Tag2"]
category: "post" # post ou project
accentColor: "blue" # mint, amber, blue, peach
addIcon: "pin" # Opcional: selo visual
---
```

---
> Hospedado na Cloudflare Pages.
