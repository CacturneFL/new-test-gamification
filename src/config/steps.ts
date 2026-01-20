import { Step } from "@/lib/types";

export const steps: Step[] = [
  {
    id: "inicio",
    title: "Vamos elevar sua margem de 18% para até 44%",
    subtitle: "Responda rápido e desbloqueie o diagnóstico premium do seu terreno.",
    microcopy: "Seu resultado aparece ao final e pode ser enviado por WhatsApp.",
    type: "choice",
    layout: "oneColumnCards",
    options: [
      {
        id: "projeto_do_zero",
        label: "Ainda vou começar o projeto",
        description: "Quero reduzir custo de obra e maximizar margem."
      },
      {
        id: "readequar",
        label: "Estou readequando um terreno",
        description: "Busco uma estratégia de compra inteligente."
      },
      {
        id: "comparar",
        label: "Quero comparar oportunidades",
        description: "Busco terreno com alto potencial de revenda."
      }
    ]
  },
  {
    id: "intencao",
    title: "Qual é a intenção principal?",
    subtitle: "Essa escolha impacta a faixa de ganho e o tipo de terreno ideal.",
    type: "choice",
    layout: "twoColumnCards",
    options: [
      {
        id: "investidor",
        label: "Investidor",
        description: "Giro rápido e valorização acima da média."
      },
      {
        id: "casa_campo",
        label: "Casa de campo",
        description: "Uso pessoal com foco em conforto e lazer."
      },
      {
        id: "hibrido",
        label: "Híbrido",
        description: "Equilíbrio entre uso e revenda futura."
      }
    ]
  },
  {
    id: "topografia",
    title: "Topografia que mais combina com seu perfil",
    subtitle: "Impacta diretamente no custo de obra e na margem final.",
    type: "choice",
    layout: "grid2x2",
    options: [
      {
        id: "plano",
        label: "Plano",
        description: "Menor custo de terraplenagem."
      },
      {
        id: "leve",
        label: "Leve declive",
        description: "Possibilita projetos premium com baixo ajuste."
      },
      {
        id: "moderado",
        label: "Moderado",
        description: "Flexível para casas em níveis."
      },
      {
        id: "acidentado",
        label: "Acidentado",
        description: "Exige estratégia certa para manter a margem."
      }
    ]
  },
  {
    id: "estilo",
    title: "Estilo arquitetônico desejado",
    subtitle: "Define o ticket do projeto e a percepção de valor.",
    type: "choice",
    layout: "split",
    visual: {
      label: "Moodboard premium",
      tone: "cool"
    },
    options: [
      {
        id: "contemporaneo",
        label: "Contemporâneo",
        description: "Linhas retas e alto padrão."
      },
      {
        id: "rustico",
        label: "Rústico chique",
        description: "Integração com natureza e materiais nobres."
      },
      {
        id: "minimalista",
        label: "Minimalista",
        description: "Eficiência e valorização do terreno."
      }
    ]
  },
  {
    id: "quitacao",
    title: "Perfil de quitação",
    subtitle: "QA = Quitação Acelerada (não é entrar antes).",
    microcopy: "Quem quita mais rápido costuma acessar melhores descontos e margem.",
    type: "choice",
    layout: "chips",
    options: [
      {
        id: "qa",
        label: "QA (Quitação Acelerada)",
        description: "Prioriza quitar antecipadamente."
      },
      {
        id: "pontual",
        label: "Pontual",
        description: "Mantém o fluxo em dia."
      },
      {
        id: "flexivel",
        label: "Flexível",
        description: "Busca parcelas maiores com folga."
      }
    ]
  },
  {
    id: "lead",
    title: "Para enviar seu resumo no WhatsApp",
    subtitle: "Receba o diagnóstico e as recomendações personalizadas.",
    type: "lead",
    layout: "formLead",
    microcopy: "Prometemos não enviar spam."
  },
  {
    id: "whatsapp",
    title: "Veja como o resumo chega no seu WhatsApp",
    subtitle: "Simulação ao vivo com mensagens de áudio.",
    type: "whatsapp",
    layout: "whatsappMock"
  },
  {
    id: "resultado",
    title: "Seu resultado premium",
    subtitle: "Faixa estimada de margem",
    type: "result",
    layout: "result"
  },
  {
    id: "panel",
    title: "Painel Terrenos QA",
    subtitle: "Explore oportunidades com margem projetada e foco em QA.",
    type: "panel",
    layout: "panel"
  }
];
