window.CURSO = window.CURSO || {};
window.CURSO.modulos = [
{
  id: 1, slug: "fundamentos", titulo: "Fundamentos", sub: "O que é o OpenMausBot e como ele pensa", tempo: "15 min",
  oque: [
    "O OpenMausBot é um app de computador que transforma programas de agente de IA de linha de comando (Claude Code, Codex, Grok, Cursor, modelos locais e outros) num chat parecido com o WhatsApp. Cada bot é um processo de agente real, com nome, instruções, memória, motor de IA, pasta de trabalho, apps conectados, computador e automações próprios.",
    "O app não tem um cérebro próprio: quem raciocina é o motor (engine) que você escolhe. O login e a cobrança são sempre do provedor do motor, feitos no próprio programa dele.",
    "Toda instalação começa com o MausBot, que é o Chief of Staff (chefe de gabinete): o ponto único de contato que cria especialistas, delega trabalho e consolida as respostas. É exatamente o papel de um bot orquestrador, que você vai montar no módulo 12."
  ],
  porque: [
    "Entender as peças evita a confusão mais comum: achar que o app é a IA. O app é a mesa de trabalho; o motor é quem pensa; o bot é o funcionário com cargo, memória e acesso.",
    "Também mostra onde mora cada coisa: instruções permanentes (Soul), perfil compartilhado (About me), gabarito de bots novos e o MausBot Cloud, que mantém os bots ligados com o computador desligado."
  ],
  conceitos: [
    { t: "Bot", d: "Um funcionário de IA permanente, com nome, instruções, memória, skills, motor e configurações. Limites de perfil: nome até 100 caracteres, título até 200, descrição até 4.000 e Soul até 24.000 bytes [código]." },
    { t: "Engine (motor)", d: "O programa que raciocina e usa ferramentas: Claude Code, Codex, Grok, Cursor, Gemini, modelos locais. O login é feito no próprio programa do motor." },
    { t: "Instância", d: "Uma configuração nomeada de um motor (por exemplo, duas contas do Claude). Cada bot aponta para uma instância." },
    { t: "Working folder (pasta de trabalho)", d: "A pasta do computador onde o bot trabalha. Vira o contexto inicial e evita edições em outros lugares. Sem pasta definida, o bot usa um espaço privado do app." },
    { t: "Soul", d: "As instruções de cargo do bot (Bot settings → Soul). Valem mais que memória e skills e menos que o seu pedido atual e as regras de segurança. O arquivo SOUL.md no disco é só um espelho: editar por fora não muda o bot sozinho [código]." },
    { t: "About me", d: "Texto seu, de até 24.000 caracteres, em Settings → General → Profile, que entra nas instruções de todos os bots. É enviado ao provedor de IA: nunca coloque segredo ali." },
    { t: "Defaults for new bots", d: "Gabarito com perfil, modelo, instruções, acesso, memória, skills e rotinas para bots novos. Não muda os bots que já existem." },
    { t: "Simple mode e Advanced mode", d: "No Simples, New bot abre a conversa do Chief e ele cria o bot; não há escolha de modelo. No Avançado, abre um rascunho completo para revisar antes de criar." },
    { t: "Chief of Staff", d: "O bot coordenador (coroa na lista). Há no máximo um por departamento. Recebe pedidos, delega a especialistas e consolida a resposta." },
    { t: "MausBot Cloud (My Cloud)", d: "Servidor na nuvem onde os bots passam a morar. Continuam trabalhando com o computador desligado; desktop e celular viram janelas para ele." }
  ],
  passos: [
    "Instale o app e faça login no programa do motor no terminal (por exemplo, claude ou codex login). Erro 401 vem do motor, não do app.",
    "Abra o MausBot e converse com ele: ele é o seu Chief of Staff.",
    "Escreva o About me em Settings → General → Profile: quem você é, sua empresa, tom e horários. Sem senhas nem dados de cliente.",
    "Ajuste Defaults for new bots (App settings → General → Defaults for new bots → Edit): modelo padrão e nível de acesso que todo bot novo herda.",
    "Ligue o Advanced mode se quiser escolher modelo e revisar cada bot antes de criar.",
    "Crie seu primeiro especialista (Sidebar → New bot): nome, propósito, motor, modelo e pasta de trabalho se ele for editar arquivos."
  ],
  dicas: [
    "No Soul, coloque só o papel, as regras e os critérios de aceite. Procedimentos longos vão para skills. O próprio comando /setup orienta manter o Soul curto [código].",
    "Regras que não podem ser furadas vão no Soul ou nas instruções do departamento, não na memória: o Soul tem prioridade sobre memória e skills.",
    "Bots Claude não leem o seu ~/.claude (CLAUDE.md, skills, hooks, MCPs pessoais). Se o bot precisa de regras, coloque no About me, no Soul ou nas skills do bot.",
    "Peça diagnóstico antes de execução. A própria documentação sugere revisar antes de alterar (Do not change files yet).",
    "Use o comando /setup tarefa no chat de um bot para ele se autoconfigurar com até 4 perguntas [código]."
  ],
  armadilhas: [
    "Confundir as três pastas: pasta de trabalho (onde o bot edita arquivos), folder da barra lateral (só organiza conversas) e departamento (agrupa bots e tem instruções compartilhadas).",
    "Colocar segredo no Soul, no About me ou no chat: tudo isso vai para o provedor e fica no histórico.",
    "Achar que mudar Defaults for new bots atualiza os bots antigos. Não atualiza.",
    "Bots novos nascem em Full access (acesso total). Para quem mexe em dados sensíveis, baixe o nível logo depois de criar.",
    "No MausBot Cloud, os logins do Claude, ChatGPT, Gemini e Grok não migram: entre de novo em Settings → AI do My Cloud.",
    "O MausBot não pode ser apagado, só escondido da barra lateral."
  ],
  teste: [
    "Escrevi meu About me com contexto da empresa e sem nenhum segredo.",
    "Conferi qual motor e modelo o MausBot usa e fiz login no programa do motor.",
    "Revisei Defaults for new bots e defini um nível de acesso padrão consciente.",
    "Criei um bot especialista com nome, propósito e Soul curto.",
    "Rodei /setup num bot e acompanhei as perguntas que ele fez."
  ],
  quiz: [
    { q: "Qual é o papel do MausBot numa instalação nova?", o: ["Um bot de exemplo que pode ser apagado", "O Chief of Staff: ponto único de contato que cria especialistas e coordena o time", "Um bot de suporte técnico sem ferramentas", "Um bot que só funciona na nuvem"], c: 1, e: "A instalação começa com o MausBot, o Chief of Staff. Ele cria especialistas quando o trabalho pede e nunca é apagado, só escondido." },
    { q: "Um bot Claude lê automaticamente o seu ~/.claude/CLAUDE.md e suas skills do Claude Code?", o: ["Sim, sempre", "Só em Full access", "Não: por padrão fica isolado e só vê os MCPs do app, as integrações dele e o .mcp.json do projeto", "Só no MausBot Cloud"], c: 2, e: "O isolamento existe para economizar contexto (na medição da doc, cerca de 407 ferramentas e 10 mil tokens a mais por chamada). Adicione o que precisa em Settings → MCP servers." },
    { q: "Você salvou Defaults for new bots com nível Ask. O que acontece com os bots existentes?", o: ["Passam a Ask imediatamente", "Nada: o gabarito só vale para bots criados depois", "Passam a Ask depois de reiniciar", "Perdem as rotinas"], c: 1, e: "O gabarito não altera bots existentes nem liga rotinas." },
    { q: "Ao migrar para o MausBot Cloud, o que NÃO vai junto automaticamente?", o: ["Bots e memória", "Rotinas", "Logins do Claude, ChatGPT, Gemini e Grok", "Chaves de API e MCPs"], c: 2, e: "Esses logins ficam no computador onde foram feitos. É preciso entrar de novo no My Cloud." }
  ],
  fontes: [
    { t: "Visão geral", u: "https://docs.openmausbot.com/docs" },
    { t: "Primeiro bot", u: "https://docs.openmausbot.com/docs/getting-started/first-bot" },
    { t: "Configuração", u: "https://docs.openmausbot.com/docs/getting-started/configuration" },
    { t: "Organização (login corporativo)", u: "https://docs.openmausbot.com/docs/getting-started/organisation" },
    { t: "Desktop com My Cloud", u: "https://docs.openmausbot.com/docs/getting-started/using-the-desktop-app-with-my-cloud" }
  ]
},
{
  id: 2, slug: "bots-pastas-threads", titulo: "Bots, pastas e threads", sub: "Como o trabalho se organiza dentro de cada bot", tempo: "15 min",
  oque: [
    "O bot é o funcionário fixo. A thread é uma conversa independente com ele, com histórico, sessão no provedor, aprovações, custos e botão Stop próprios. A pasta (folder) só organiza as threads na lista.",
    "Toda thread segue o modelo do bot, a não ser que você escolha outro no cabeçalho dela. Por padrão, até 3 threads diretas rodam ao mesmo tempo por bot, contando as que esperam sua aprovação."
  ],
  porque: [
    "Criar um bot novo para cada projeto é o erro mais comum. A regra da documentação: bot novo só quando o papel ou o acesso precisam ser diferentes. Projeto novo vira thread ou pasta.",
    "Saber o limite de threads simultâneas explica por que um especialista às vezes demora: ele está na fila."
  ],
  conceitos: [
    { t: "Thread", d: "Conversa independente com um bot. Antes se chamava Task. Tem histórico, custos e estado de execução próprios." },
    { t: "Folder (pasta de conversas)", d: "Agrupa threads de um bot. Não tem modelo, permissão nem pasta de trabalho, e não é fronteira de privacidade. Apagar a pasta não apaga as conversas." },
    { t: "Modelo da thread", d: "A thread usa o modelo do bot, salvo escolha própria no cabeçalho. 'Use <bot>'s model' volta ao padrão; 'Switch them too' devolve todas de uma vez." },
    { t: "Limite de threads simultâneas", d: "Padrão de 3 por bot, ajustável de 1 a 10 na chave threads.maxConcurrentPerBot do config.json [código]." },
    { t: "Fila e steering", d: "Mensagem para uma thread ocupada entra na fila. Em motores que permitem (como o Codex), você redireciona o agente enquanto ele trabalha." },
    { t: "Reply style", d: "Estilo de resposta do bot: default (completa) ou conversational (mensagens curtas; as simples vão para o modelo mais rápido do mesmo motor) [código]." },
    { t: "Medidor de tokens", d: "Chip no cabeçalho do chat com entrada não cacheada, entrada cacheada, saída e, quando o provedor informa, o custo." }
  ],
  passos: [
    "Para um assunto novo com o mesmo bot, abra uma thread nova em vez de continuar a antiga.",
    "Agrupe threads relacionadas numa pasta (por exemplo, 'E-mail' com 'Triagem Gmail' e 'Triagem Outlook').",
    "Para testar um modelo mais forte numa tarefa difícil, troque o modelo só no cabeçalho daquela thread.",
    "Use o botão Task ou peça 'abra uma conversa separada para cada item' para paralelizar trabalho do mesmo bot.",
    "Confira o chip de tokens para ver quanto cada conversa custou."
  ],
  dicas: [
    "Para paralelizar o MESMO bot (por exemplo, uma análise por cliente), peça start_thread (até 5 por turno) em vez de duplicar bots [código].",
    "Use o Reply style conversational em bots de conversa pelo celular e o default em bots que entregam relatórios consolidados.",
    "Edite uma mensagem antiga para criar um caminho novo da conversa (rewind) quando o bot seguiu por um caminho ruim.",
    "Fixe (Pin) mensagens com decisões importantes; responda perguntas do bot com 👍 ou 👎 pelo celular."
  ],
  armadilhas: [
    "Achar que pasta isola acesso. Todas as threads do bot compartilham memória e skills.",
    "Thread esperando aprovação ocupa uma das 3 vagas do bot. Aprovações paradas travam trabalho novo.",
    "Trocar o modelo do bot muda também as threads antigas que uma rotina ou delegação reabrir, exceto as que têm modelo próprio.",
    "Computador, navegador ou pasta compartilhados não aceitam dois agentes mexendo ao mesmo tempo: o app acusa o conflito."
  ],
  teste: [
    "Criei uma pasta num bot e movi duas threads para ela.",
    "Abri uma thread com modelo próprio e depois voltei ao modelo do bot.",
    "Olhei o chip de tokens de uma conversa longa.",
    "Respondi uma pergunta de um bot com 👍."
  ],
  quiz: [
    { q: "Quando faz sentido criar um bot novo em vez de uma thread?", o: ["Sempre que surge um projeto novo", "Quando o papel ou o acesso precisam ser diferentes", "Quando quero outro modelo", "Quando a conversa ficou longa"], c: 1, e: "Projeto ou modelo diferente cabem numa thread. Bot novo só quando cargo ou acesso mudam." },
    { q: "Quantas threads diretas um bot roda ao mesmo tempo por padrão?", o: ["1, fixo", "3, ajustável até 10 no config.json", "Ilimitado", "5, só no Cloud"], c: 1, e: "A doc cita 3, contando as que esperam aprovação. O código aceita de 1 a 10 em threads.maxConcurrentPerBot." },
    { q: "Mover uma thread para outra pasta muda o modelo ou as permissões dela?", o: ["Sim, herda os da pasta", "Não: pasta só organiza", "Muda só as permissões", "Muda só o modelo"], c: 1, e: "Pasta não tem modelo nem permissão. É só organização visual." }
  ],
  fontes: [
    { t: "Bots e tarefas", u: "https://docs.openmausbot.com/docs/features/bots-and-tasks" },
    { t: "Chat e times", u: "https://docs.openmausbot.com/docs/features/chat-and-teams" },
    { t: "Anexos e busca", u: "https://docs.openmausbot.com/docs/features/attachments-and-search" }
  ]
},
{
  id: 3, slug: "grupos-colaboracao", titulo: "Grupos e colaboração", sub: "Vários bots na mesma sala, delegação e o modo Objetivo", tempo: "20 min",
  oque: [
    "Um grupo é uma conversa com vários bots que compartilham contexto. Cada um mantém o próprio modelo e permissões. Os colegas leem só a resposta final de cada bot; as anotações de trabalho ficam dobradas em 'Worked for…'.",
    "Delegar é um bot passar uma subtarefa delimitada para outro. Por baixo, isso é a ferramenta coordinate_bots: o resultado volta e acorda quem delegou sozinho.",
    "O modo Objetivo (/goal) faz um coordenador conduzir o time por até 13 turnos, até a meta ser concluída, travar ou precisar de você [código]."
  ],
  porque: [
    "É aqui que o trabalho deixa de ser um bot respondendo e vira um time. Saber quem responde a cada mensagem evita bots falando ao mesmo tempo ou ninguém respondendo.",
    "As travas contra loop existem por um motivo: se os bots ficam conversando entre si, o processo está mal desenhado, e mais automação não resolve."
  ],
  conceitos: [
    { t: "Grupo (room)", d: "Conversa com vários bots. Antes chamada canal ou sala. Cada bot tem estado, modelo e permissões próprios." },
    { t: "Quem responde (Group behavior)", d: "Quatro modos para mensagens sem @menção: Lead (um bot escolhido), Everyone (todos), Only when mentioned (só os citados) e Auto (um modelo rápido escolhe). @menção sempre vence; @everyone chama todos." },
    { t: "Auto (Jev)", d: "Um modelo de decisão lê nome, título e descrição de cada bot e escolhe quem responde. Só vale com confiança de pelo menos 0,6 e resposta em até 1,5 s; senão vai para o bot reserva ou o primeiro membro [código]." },
    { t: "Hold (pausar no grupo)", d: "'stop @Bot' ou o botão Stop Bot tira só aquele bot da vez até você chamá-lo de novo ou dizer 'resume'. A palavra de parada precisa estar a até 2 palavras da menção [código]." },
    { t: "coordinate_bots", d: "A única forma de um bot passar trabalho a outro: até 4 colegas por chamada, mensagem de até 4.000 caracteres, com done_when (critério de pronto), consult (só opinião), reply:'none' (aviso) e rework (refazer) [código]." },
    { t: "/goal (Concluir junto)", d: "Num grupo, um coordenador decide a cada turno quem age, até 13 turnos, e fecha como completed, needs-input ou blocked [código]." },
    { t: "post_to_room", d: "Publica um aviso num grupo sem fazer ninguém trabalhar. Até 3 posts por turno [código]." },
    { t: "Reações como resposta", d: "👍 ou 👎 numa pergunta do bot valem como sim ou não; num cartão de aprovação, permitem ou negam." }
  ],
  passos: [
    "Crie um grupo com 2 ou 3 especialistas e escreva no bulletin (instruções fixadas) o objetivo e as regras.",
    "Em Group behavior, escolha 'Lead: <coordenador>' para que toda mensagem simples vá ao coordenador.",
    "Use @Nome quando quiser falar direto com um especialista.",
    "Se um bot entrar em loop, escreva 'stop @Nome' ou aperte Stop Bot. Retome com 'resume'.",
    "Para uma entrega de várias etapas, digite /goal e a meta, mencionando o coordenador."
  ],
  dicas: [
    "Escreva título e descrição de cada especialista pensando no roteador Auto: ele decide lendo só 'Nome, Título. Descrição' (descrição cortada em 400 caracteres). Descrição vaga gera roteamento errado [código].",
    "Peça que toda delegação use done_when ('pronto quando houver tabela com período e fonte'). O colega é cobrado por esse critério.",
    "Use consult:true para segunda opinião sem efeito colateral e reply:'none' para avisos.",
    "Se a resposta final de um bot @menciona outro membro, esse membro é acionado em seguida, com no máximo 1 salto [código].",
    "Aumente o tempo-limite de turno do grupo (padrão 5 min, até 1.440) se as tarefas forem longas. O relógio pausa enquanto espera sua aprovação."
  ],
  armadilhas: [
    "Esperar paralelismo dentro de um grupo: trabalhos na mesma sala rodam em fila, um de cada vez (salvo a chave escondida parallelRoomJobs, módulo 11).",
    "Usar post_to_room para pedir trabalho. Ele só publica; ninguém responde.",
    "Mencionar no grupo um bot que não é membro: a menção não chega nele.",
    "Modo Auto sem o serviço de decisão ligado: tudo cai no bot reserva, e parece que o roteamento não funciona.",
    "Bot que termina sem mensagem final: aparece 'finished without a summary'. Exija uma resposta final curta no Soul de cada especialista."
  ],
  teste: [
    "Criei um grupo com dois bots e um bulletin com regras.",
    "Configurei Lead para um bot e testei uma mensagem sem @menção.",
    "Pausei um bot com 'stop @Nome' e retomei com 'resume'.",
    "Rodei um /goal simples e vi como o coordenador encerrou."
  ],
  quiz: [
    { q: "Você quer que toda mensagem sem @menção vá para o coordenador. Qual modo usar?", o: ["Everyone responds", "Only when mentioned", "Lead: coordenador", "Auto sem o serviço de decisão"], c: 2, e: "No Lead, mensagens simples vão para o bot escolhido; @menções têm prioridade." },
    { q: "Qual parâmetro do coordinate_bots pede opinião sem que o colega execute nada?", o: ["reply: 'none'", "consult: true", "rework: true", "thread: 'new'"], c: 1, e: "consult:true faz o colega responder com o que sabe, sem agir." },
    { q: "Você escreveu 'stop, preciso revisar antes. Depois falo com o @Redator' e ele continuou. Por quê?", o: ["Hold só funciona pelo botão", "A palavra 'stop' estava a mais de 2 palavras da menção", "O Redator estava em Full access", "@menção cancela o stop"], c: 1, e: "Use 'stop @Redator' ou o botão Stop Bot." },
    { q: "Quantos turnos de time, no máximo, um /goal roda?", o: ["3", "5", "13", "Ilimitado"], c: 2, e: "São 13, número ímpar para a última decisão ficar com o coordenador." }
  ],
  fontes: [
    { t: "Chat e times", u: "https://docs.openmausbot.com/docs/features/chat-and-teams" },
    { t: "Bots e tarefas: grupos", u: "https://docs.openmausbot.com/docs/features/bots-and-tasks" },
    { t: "Reações", u: "https://docs.openmausbot.com/docs/features/chat-and-teams#reactions" }
  ]
},
{
  id: 4, slug: "aprovacoes-seguranca", titulo: "Aprovações e segurança", sub: "Quanto o bot faz sozinho e como você coloca travas", tempo: "20 min",
  oque: [
    "Todo bot nasce em Full access (acesso total). O app não decide se uma ação é segura: ele repassa o modo de permissão do próprio motor. Quem protege de verdade é você, configurando nível de aprovação, política de envio, permissões por app e o cofre de logins.",
    "Mudanças que um bot faz no próprio perfil, skills, modelo ou no time valem na hora, com uma linha de Details e Undo. Apagar bot não tem Undo."
  ],
  porque: [
    "Um bot com acesso a e-mail e CRM em Full access pode enviar mensagem ou alterar dados sem ninguém ver. O primeiro dia é o mais arriscado, porque o padrão é aberto.",
    "As travas certas deixam você soltar o bot aos poucos, com rastro de tudo o que ele fez."
  ],
  conceitos: [
    { t: "Níveis de aprovação", d: "Ask (pede antes de comandos e edições), Auto-accept edits (aprova edições de arquivo), Approve for me (revisão automática do motor), Full access (acesso total) e Custom (só no Codex)." },
    { t: "Envio em seu nome (outbound)", d: "Qualquer chamada que chega a uma pessoa fora do app ou move dinheiro (send, reply, post, pay…). Abaixo de Full, cada envio pede confirmação ou gasta uma cota diária (padrão 25, máximo 1.000). Ler e rascunhar nunca contam [código]." },
    { t: "Grant (permissão por ferramenta)", d: "Por bot e por app: todas as ferramentas, uma lista exata ou nenhuma. Ao salvar o primeiro grant, todos os outros apps do bot ficam sem ferramentas até você liberar." },
    { t: "Escopo read/write", d: "Por bot, cada app fica em leitura ou escrita ('Limit this bot to specific apps'). Um lote que mistura leitura com escrita proibida é recusado inteiro [código]." },
    { t: "Saved logins e fill_login", d: "Cofre de logins de sites. O app digita usuário, senha e código 2FA na página certa; o bot nunca vê a senha." },
    { t: "Safety floor", d: "Trava que impede aprovação automática de comandos destrutivos de shell. Vem desligada; não atua em motores que nunca perguntam [código]." },
    { t: "Log de decisões", d: "Registro mensal, local, de por que cada chamada de ferramenta foi permitida, negada ou virou cartão. Guarda 180 dias por padrão [código]." },
    { t: "Scrubber", d: "Troca senhas e códigos por •••••• em resultados, conversas e logs. Não cobre screenshots." },
    { t: "Ask me before contacting other bots", d: "Chave por bot que mostra um cartão Allow / Deny / Always allow antes de ele delegar ou postar para outro bot. Não aparece em Full access [código]." }
  ],
  passos: [
    "Ao criar um bot que mexe em dados de cliente, baixe o nível para Ask ou Approve for me.",
    "Em Permissions → 'Sending on your behalf', deixe 'Ask every time' ou escolha uma cota diária baixa.",
    "Em Connected apps / Access, conceda a cada bot só os apps e ferramentas do papel dele.",
    "Em Settings → Logins, salve logins de painéis (ou conecte um cofre 1Password dedicado) e escolha quais bots podem usar.",
    "Revise as linhas Details / Undo depois que um bot mudar algo no time."
  ],
  dicas: [
    "Separe o bot que lê do bot que escreve: analista em leitura, executor em escrita com cota de envio.",
    "Para follow-up, prefira 'Allow a daily amount' com cota baixa (5 a 10) a Full access.",
    "Ligue o safety floor (safetyFloor.enabled ou OMB_SAFETY_FLOOR=1) em máquinas com dados reais [código].",
    "Em domínio compartilhado (ex.: um login corporativo), marque 'Only on this exact address' no login salvo.",
    "Aumente OMB_DECISION_RETENTION_DAYS se precisar de trilha de auditoria maior que 180 dias [código]."
  ],
  armadilhas: [
    "Achar que o app é seguro por padrão: em Full access os envios saem sem perguntar e sem cota.",
    "Salvar o primeiro grant de um app e não perceber que os outros apps do bot ficaram sem ferramentas.",
    "Achar que 'Always allow' libera envio: a checagem de envio vem antes e continua pedindo confirmação ou cota.",
    "Usar Custom e trocar de motor: o nível cai para Ask.",
    "Colar chave de API ou senha no chat. Use Settings ou o cartão seguro de credencial.",
    "Achar que pôr o coordenador em Ask freia os especialistas: a herança de nível só sobe, nunca rebaixa (módulo 12)."
  ],
  teste: [
    "Conferi o nível de aprovação de cada bot e baixei o de quem mexe em dados sensíveis.",
    "Configurei 'Sending on your behalf' num bot que envia mensagens.",
    "Salvei um login de um site de teste e vi o bot entrar sem ver a senha.",
    "Desfiz uma mudança com Undo."
  ],
  quiz: [
    { q: "Em que nível de aprovação um bot novo roda se você não mexer em nada?", o: ["Ask", "Approve for me", "Full access", "Custom"], c: 2, e: "O padrão é Full access. Só num workspace de empresa compartilhado o servidor muda para Ask." },
    { q: "Um bot em Approve for me com cota diária cria um rascunho e depois envia um e-mail. O que gasta cota?", o: ["Os dois", "Só o rascunho", "Só o envio", "Nenhum"], c: 2, e: "Rascunho nunca conta; enviar gasta a cota." },
    { q: "Um bot em Ask tem 'Always allow' em várias ferramentas e tenta enviar e-mail. O que acontece?", o: ["Envia sozinho", "Pede confirmação (ou gasta cota)", "É bloqueado para sempre", "Vira rascunho"], c: 1, e: "A checagem de envio vem antes das regras salvas. Só Full access envia sem perguntar." }
  ],
  fontes: [
    { t: "Segurança", u: "https://docs.openmausbot.com/docs/security" },
    { t: "Permissões e segredos", u: "https://docs.openmausbot.com/docs/security/permissions-and-secrets" },
    { t: "Aprovações e Inspector", u: "https://docs.openmausbot.com/docs/features/approvals-and-inspector" },
    { t: "Analytics", u: "https://docs.openmausbot.com/docs/security/analytics" }
  ]
},
{
  id: 5, slug: "rotinas-webhooks", titulo: "Rotinas e webhooks", sub: "O bot trabalhando sem você digitar nada", tempo: "20 min",
  oque: [
    "Um bot pode trabalhar sozinho de quatro jeitos: por horário (rotina), quando outro sistema chama um endereço (webhook), quando algo acontece num app conectado (gatilho de app) ou quando o limite de uso de uma IA volta (limit_reset).",
    "Cada execução trabalha numa conversa escondida e só o resultado chega ao chat. Se não há novidade, o bot pode ficar quieto."
  ],
  porque: [
    "Um bot vale pelo que faz sem ser chamado: relatórios na hora certa, reação a eventos e silêncio quando nada mudou.",
    "Rotina mal desenhada gera ruído, custo e execuções perdidas. Cada uma precisa de dono, critério de parada e destino de relatório antes de ser ligada."
  ],
  conceitos: [
    { t: "Rotina", d: "Tarefa automática que roda uma vez, num intervalo ou em dias escolhidos. Usa modelo, permissões e computador do bot." },
    { t: "Cron", d: "Agenda de calendário em 5 campos (minuto, hora, dia, mês, dia da semana). Exige fuso com nome, como America/Sao_Paulo. Aceita L (último dia) e MON#2 (segunda segunda-feira) [código]." },
    { t: "Catch-up de 12 horas", d: "Se o computador estava desligado, a rotina roda quando o app volta, se o atraso for de até 12 horas. Acima disso vira 'missed'." },
    { t: "Overlap", d: "Se a rotina vence com a anterior ainda ativa: 'skip' (padrão) pula; 'queue' guarda uma na fila [código]." },
    { t: "Remember the last run", d: "Cada execução recebe o relatório da anterior (até 2.000 caracteres). Bom para 'o que mudou desde ontem'." },
    { t: "Nothing new / Needs input:", d: "Se a última linha da resposta é 'Nothing new', a execução fica em silêncio. Uma linha 'Needs input: …' vira pergunta para você [código]." },
    { t: "Webhook", d: "Endereço secreto que outro sistema chama por POST para disparar o bot. No desktop escuta em 127.0.0.1:8800." },
    { t: "Gatilho de app", d: "Dispara quando algo acontece num app conectado, como e-mail novo no Gmail, com filtros simples (from, subject_contains, label, contains) [código]." },
    { t: "limit_reset", d: "Roda 1 minuto depois que o limite de uso de uma IA reinicia, uma vez ou a cada reinício [código]." },
    { t: "Brief", d: "Card diário do Chief of Staff com e-mails importantes, preparo de reuniões e rotinas que falharam, montado pela rotina 'Keep an eye on my day' [código]." },
    { t: "read-and-draft", d: "Modo cercado: a rotina só lê Gmail e Agenda e pode criar um rascunho de resposta. Não envia, não navega, não grava memória [código]." }
  ],
  passos: [
    "No chat do bot, peça: 'toda segunda às 8h me mande o resumo de X'. Ele cria a rotina e mostra um cartão com Editar, Pausar e Desfazer.",
    "Escreva as instruções completas: a rotina não vê a conversa em que foi criada.",
    "Inclua: 'Se nada mudou, responda apenas Nothing new na última linha'.",
    "Ligue 'Remember the last run' em monitoramentos e 'Also run when OpenMausBot starts' se o computador costuma estar desligado no horário.",
    "Escolha em 'Post results to' a thread de destino e mova-a para uma pasta de relatórios.",
    "Para webhook, peça ao bot ('quando o sistema X mandar um lead, qualifique e me avise') e cole o endereço gerado no outro sistema."
  ],
  dicas: [
    "No webhook, mande o segredo no header 'Authorization: Bearer' e um ID único em 'Idempotency-Key' para evitar execução duplicada.",
    "Filtre tipos de evento com webhook_event_types: tipo fora da lista recebe 202 e é ignorado [código].",
    "Defina timeout_minutes (5 a 240) em rotinas que delegam ou navegam [código].",
    "Use 'queue' no overlap quando nenhuma ocorrência pode se perder.",
    "Prefira gatilho de app a uma rotina que fica checando de tempos em tempos.",
    "Um Chief of Staff cria e gerencia gatilhos de outros bots do departamento com for_bot_id [código]."
  ],
  armadilhas: [
    "Fechar o app desktop para todas as rotinas, webhooks e gatilhos locais. Só o My Cloud continua com o computador desligado.",
    "Expor a porta principal (8799) na internet. Para webhook vindo de fora, exponha só o receptor (8800) por túnel.",
    "Com o overlap padrão, ocorrências que vencem com a anterior ativa são puladas em silêncio.",
    "Fila cheia (3 pendentes por padrão) faz o webhook responder 429.",
    "Um e-mail malicioso pode tentar dar ordens ao bot. Ponha o critério de julgamento nas instruções e limite as permissões do bot que reage a eventos externos.",
    "Pausar ou apagar a rotina 'Keep an eye on my day' desliga o brief, e ela não é recriada."
  ],
  teste: [
    "Criei uma rotina semanal com fuso America/Sao_Paulo pelo chat.",
    "Incluí a regra 'Nothing new' e vi uma execução silenciosa.",
    "Rodei a rotina na hora com run_now e conferi o destino do resultado.",
    "Criei um webhook de teste e disparei o evento de teste."
  ],
  quiz: [
    { q: "Relatório às 9h do último dia de cada mês, horário de Brasília. Qual agenda?", o: ["daily às 09:00 e a IA confere o dia", "cron '0 9 L * *' com timeZone America/Sao_Paulo", "cron '0 0 9 L * *' com timeZone -03:00", "interval de 43.200 minutos"], c: 1, e: "Cron com 5 campos e fuso com nome. Interval só vai de 5 a 1.440 minutos." },
    { q: "Como fazer uma rotina de monitoramento ficar quieta quando nada mudou?", o: ["Pausar", "Terminar a resposta com a linha 'Nothing new'", "Ligar Remember the last run", "Mudar o destino"], c: 1, e: "Com 'Nothing new' na última linha, não há mensagem, ponto de não lido nem notificação." },
    { q: "O computador ficou desligado das 6h às 20h e havia uma rotina às 7h. O que acontece às 20h?", o: ["Roda normalmente", "Vira 'missed': o atraso passou de 12 horas", "Roda duas vezes", "É apagada"], c: 1, e: "O catch-up cobre até 12 horas. 'Also run when OpenMausBot starts' cobriria essa ocorrência." }
  ],
  fontes: [
    { t: "Automação", u: "https://docs.openmausbot.com/docs/features/automation" },
    { t: "Webhooks", u: "https://docs.openmausbot.com/docs/features/automation#webhook-triggers" },
    { t: "Lembrar a última execução", u: "https://docs.openmausbot.com/docs/features/automation#remember-the-last-run" }
  ]
},
{
  id: 6, slug: "voz-memoria", titulo: "Voz e memória", sub: "O bot que fala, escuta e lembra", tempo: "15 min",
  oque: [
    "O bot pode ler respostas em voz alta, mandar notas de voz e fazer chamadas: em turnos (Take turns, só no macOS) ou ao vivo (Live, com a sua chave da OpenAI).",
    "A memória é texto simples e editável. Cada bot tem um MEMORY.md, arquivos de tópico, um diário, captura automática de fatos e uma limpeza noturna, com registro de auditoria que permite desfazer."
  ],
  porque: [
    "Memória bem usada evita repetir contexto toda vez. Mal usada, enche o caderno de detalhe e empurra fatos importantes para fora.",
    "Voz permite aprovar e acompanhar sem tela, mas manda áudio e contexto ao provedor: cuidado com dado sensível."
  ],
  conceitos: [
    { t: "MEMORY.md", d: "Caderno permanente do bot. Carregam por sessão as primeiras 200 linhas ou 24 KB; o excedente vai para um arquivo de arquivo, que a busca ainda encontra." },
    { t: "Tópicos e diário", d: "memory/<tópico>.md guarda assuntos específicos, lidos sob demanda. memory/log/ é o diário de eventos: nunca entra no prompt [código]." },
    { t: "Memory upkeep", d: "Manutenção automática: captura fatos 2 minutos depois que a conversa fica quieta, organiza em tópicos e faz a limpeza depois das 3h [código]." },
    { t: "Memory journal", d: "Registro de cada mudança de memória, fora da pasta do bot, com 'Undo this change' [código]." },
    { t: "Memória de time", d: "Fatos compartilhados do departamento: pessoa, lugar, decisão ou termo. Valem na hora, com Undo." },
    { t: "About me aprendido", d: "Fatos sobre você que os bots acrescentam sozinhos ao About me. Um fato que você apaga nunca volta automaticamente [código]." },
    { t: "Take turns x Live", d: "Take turns usa o reconhecimento de voz do Mac, um de cada vez. Live usa a OpenAI, deixa interromper e custa cerca de US$ 0,05 por minuto." },
    { t: "Ditado", d: "O microfone do campo de mensagem usa o reconhecimento local da Apple. Não existe no Linux nem no Windows." }
  ],
  passos: [
    "Em App Settings, escolha o motor de voz e a voz, teste com 'Try' e ligue Auto-speak se quiser respostas faladas.",
    "Para Live, coloque a chave da OpenAI em Settings → API keys.",
    "Abra a tela Memory de um bot e leia o que ele já sabe. Edite à vontade.",
    "Peça explicitamente: 'registre como decisão: …' em vez de contar com a captura automática.",
    "Use 'lembre até 30/10 que …' para fatos temporários."
  ],
  dicas: [
    "Escolha onde gravar por tipo: fato durável em memory_update, evento em memory_log, decisão do time em propose_team_memory com uma 'key' estável [código].",
    "Use 'supersede' quando um fato mudou: o antigo fica riscado e o novo entra.",
    "Se o computador dorme de madrugada, ajuste memory.tidyHour no config.json [código].",
    "Ligue 'Learn from group chats' se quiser que os bots aprendam também nos grupos (vem desligado).",
    "Revise o About me de tempos em tempos: os bots acrescentam fatos que todos os outros vão ler."
  ],
  armadilhas: [
    "Encher o MEMORY.md de detalhe: só 200 linhas carregam por sessão.",
    "Confiar na captura automática para registrar uma decisão. Peça explicitamente.",
    "Usar Live em conversa com dado sensível: ele envia voz, as últimas 8 mensagens e detalhes de aprovações à OpenAI.",
    "Na aprovação por voz, 'ok' ou 'beleza' não contam: diga 'yes' ou 'no'.",
    "Notas de voz contam na cota de anexos."
  ],
  teste: [
    "Li a memória de um bot e apaguei um fato desatualizado.",
    "Pedi para registrar uma decisão com prazo de validade.",
    "Testei uma voz em Settings com 'Try'.",
    "Desfiz uma mudança de memória pelo journal."
  ],
  quiz: [
    { q: "Quanto do MEMORY.md carrega em cada sessão?", o: ["O arquivo inteiro", "As primeiras 200 linhas ou 24 KB", "Só os tópicos", "Nada"], c: 1, e: "O excedente vai para o arquivo, que só aparece pela busca." },
    { q: "Você apagou do About me um fato aprendido por um bot. Ele volta sozinho?", o: ["Sim, na próxima captura", "Não: fato removido é lembrado e nunca volta automaticamente", "Volta depois de 30 dias", "Depende do motor"], c: 1, e: "Para reintroduzir, escreva à mão." },
    { q: "Qual é a forma mais segura de registrar uma decisão do time?", o: ["Esperar a captura automática", "Pedir explicitamente para gravar na memória do time", "Escrever no chat e confiar", "Colocar no About me"], c: 1, e: "A captura depende de confiança mínima e regras de origem. Peça o registro." }
  ],
  fontes: [
    { t: "Voz e memória", u: "https://docs.openmausbot.com/docs/features/voice-and-memory" },
    { t: "Perfil compartilhado (About me)", u: "https://docs.openmausbot.com/docs/getting-started/configuration#shared-user-profile" }
  ]
}
];
