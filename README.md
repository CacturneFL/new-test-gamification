# Funil Gamificado - Painel Terrenos QA

Projeto Next.js (App Router) com TypeScript, Tailwind CSS e Framer Motion para simular um funil premium mobile-first.

## Como rodar

```bash
npm i
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Onde alterar copy e etapas

As etapas do funil ficam em `src/config/steps.ts`. É possível ajustar textos, ordem, layouts e opções sem mexer na lógica do funil.

## Onde plugar URLs de áudio

A simulação de WhatsApp usa o arquivo `src/components/PhoneWhatsAppMock.tsx`. Substitua o campo `audioUrl` no array `messages` com as URLs reais quando integrar.
