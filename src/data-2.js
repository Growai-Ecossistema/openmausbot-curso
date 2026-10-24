window.CURSO.modulos = window.CURSO.modulos.concat([
{
  id: 7, slug: "engines-modelos", titulo: "Engines e modelos", sub: "Quem pensa por trás de cada bot, quanto custa e o que fazer quando falha", tempo: "20 min",
  oque: [
    "Cada bot roda sobre um engine: um programa de IA instalado no computador (Claude Code, Codex, Antigravity, OpenCode e outros) ou uma conexão direta por chave de API (OpenRouter, OpenAI, Mistral, Groq…).",
    "Cada bot pode ter engine, modelo, nível de raciocínio (effort) e conta próprios. O app também traz recuperação automática com modelo reserva, troca de motor quando o limite estoura e estimativa de custo."
  ],
  porque: [
    "A escolha do engine define custo, inteligência, ferramentas disponíveis e resiliência do time.",
    "Uma configuração errada de chave pode mudar a cobrança de todos os bots de assinatura para cobrança por uso sem você perceber."
  ],
  conceitos: [
    { t: "CLI", d: "Programa de terminal (claude, codex, opencode). Ter instalado não basta: precisa estar logado." },
    { t: "ACP", d: "Protocolo padrão entre o app e agentes de terceiros (Antigravity, Grok, Gemini CLI, Kimi, Droid, Cursor, OpenCode, Qwen, Hermes). O app fecha o processo depois de 10 minutos parado." },
    { t: "Chat engine compatível com OpenAI", d: "Conversa direto com qualquer API no padrão OpenAI, sem CLI. Não tem pasta de trabalho." },
    { t: "Effort", d: "Quanto o modelo pensa antes de responder. Claude e Codex aceitam low, medium, high, xhigh e max." },
    { t: "Assinatura x uso", d: "Login de assinatura consome o limite do plano; chave de API cobra por token." },
    { t: "Janela de contexto", d: "Quanto texto o modelo considera de uma vez. Varia por modelo, de cerca de 200 mil a 1 milhão de tokens." },
    { t: "Automatic recovery", d: "Se o pedido falha antes de começar (login, limite, motor fora do ar), a conversa passa para o modelo reserva e volta quando o limite reinicia [código]." },
    { t: "Cache aquecido (cacheKeepWarm)", d: "Em assinaturas do Claude, mantém o cache de conversas grandes com um ping periódico. Vem desligado [código]." }
  ],
  passos: [
    "Instale e faça login na CLI do motor no terminal. Reinicie o app.",
    "Confira o estado de cada engine em Settings → Engines.",
    "No seletor de cada bot, escolha engine, modelo e effort.",
    "Para separar consumo por frente de trabalho, use Settings → Engines → Add Claude account.",
    "Ligue App Settings → Automatic recovery → Use a backup model, com um reserva de outro engine."
  ],
  dicas: [
    "Monte o time em camadas de custo: coordenador num modelo topo de linha, executores num intermediário, triagem num modelo rápido.",
    "Ao pedir que o coordenador crie um especialista, passe o modelo explicitamente. Sem isso, o bot novo usa o modelo padrão do workspace, não o do coordenador.",
    "Outra conta da mesma assinatura é recusada como reserva. Use outro engine ou uma chave paga.",
    "Use OpenCode para modelos de terceiros que precisam mexer em arquivos; use OpenRouter para conversa barata.",
    "A tela Sell prices do painel de uso define quanto você cobra por milhão de tokens e cria uma coluna faturável no CSV [código]."
  ],
  armadilhas: [
    "Salvar uma Anthropic API key em Connections com 'Use this key for every Claude bot' ligado (o padrão): todos os bots Claude passam a cobrar por token.",
    "Exportar uma chave no ~/.zshrc: aberto pelo Dock, o app só copia o PATH.",
    "Engines de API não têm pasta de trabalho, mesmo quando têm navegador.",
    "A lista de reserva de um bot fica inativa enquanto a recuperação automática global estiver desligada.",
    "Gemini CLI saiu da frota padrão para contas pessoais: use o Antigravity."
  ],
  teste: [
    "Conferi em Settings → Engines quais motores estão prontos.",
    "Escolhi modelo e effort conscientes para dois bots diferentes.",
    "Configurei um modelo reserva na recuperação automática.",
    "Olhei o painel de uso e comparei o custo de dois bots."
  ],
  quiz: [
    { q: "Você salvou uma Anthropic API key em Connections e não mexeu em mais nada. O que acontece com os bots Claude de assinatura?", o: ["Nada", "Todos passam a usar a chave e cobrar por token", "Alternam conforme o limite", "A chave só vale para o Codex"], c: 1, e: "A opção 'every Claude bot' vem ligada por padrão." },
    { q: "Qual engine é a escolha errada para um bot que precisa editar arquivos?", o: ["Claude", "Codex", "OpenCode", "Chat engine compatível com OpenAI"], c: 3, e: "O chat engine não tem pasta de trabalho." },
    { q: "Qual reserva o app recusa quando o Claude bate o limite?", o: ["Codex", "Claude por chave de API", "Outra conta Claude da mesma assinatura", "OpenRouter"], c: 2, e: "Rodízio de contas da mesma assinatura é bloqueado." }
  ],
  fontes: [
    { t: "Provedores", u: "https://docs.openmausbot.com/docs/providers" },
    { t: "Provedores de modelo", u: "https://docs.openmausbot.com/docs/providers/model-providers" },
    { t: "Antigravity", u: "https://docs.openmausbot.com/docs/providers/antigravity" },
    { t: "Problemas com provedores", u: "https://docs.openmausbot.com/docs/providers/troubleshooting" }
  ]
},
{
  id: 8, slug: "computadores-celular", titulo: "Computadores e celular", sub: "Onde o bot põe as mãos e como você comanda de longe", tempo: "20 min",
  oque: [
    "O bot pode trabalhar sem computador, no seu próprio Mac (This computer), num desktop Linux isolado dentro do Mac (Local VM, em Docker ou Podman), num computador alugado na nuvem (Boat) ou num contêiner na sua própria VPS, por SSH.",
    "Pelo celular (app iOS, app Android ou navegador, pareados por QR ou código) você conversa, aprova, interrompe e dispara rotinas. Um bot também pode controlar um Android físico ligado por USB."
  ],
  porque: [
    "É aqui que o bot deixa de só conversar e passa a operar telas: painéis, CRMs e sites sem API.",
    "Também é aqui que estão os maiores riscos: custo de nuvem ligada e bot clicando no seu computador real."
  ],
  conceitos: [
    { t: "This computer", d: "O bot vê a tela e opera apps e arquivos do próprio computador. Sem isolamento. Ligar globalmente não libera nenhum bot: é preciso escolher bot por bot." },
    { t: "Local VM", d: "Desktop Linux em contêiner no mesmo computador. Modos shared (um para todos) e per-bot (um por bot, com pasta e logins próprios)." },
    { t: "Boat", d: "Desktop Linux na nuvem, pago depois do teste, que cobra enquanto está ligado. Dorme após 10 minutos sem uso." },
    { t: "VPS própria", d: "Contêiner Docker no seu servidor Linux x86_64, via alias SSH. O usuário SSH com Docker equivale a root." },
    { t: "Auto (Works on)", d: "O bot escolhe ou troca de computador sozinho com select_computer, reaproveitando o que já existe primeiro." },
    { t: "Take control", d: "Você assume mouse e teclado da máquina do bot. Enquanto isso, as ações do bot são recusadas." },
    { t: "Sign in needed", d: "Cartão que aparece quando o bot precisa entrar num site: Open, faça o login, Done." },
    { t: "Companion", d: "O celular é um cliente leve: o computador continua dono dos agentes e das credenciais. Pareamento por QR (2 minutos) ou código de 6 dígitos." }
  ],
  passos: [
    "Decida o lugar de cada bot: sem computador para quem só conversa; Local VM per-bot para quem opera telas; This computer só para um bot de confiança.",
    "Para Local VM: instale Docker ou Podman e, em App Settings → Bot desktops, prepare a imagem e escolha o modo.",
    "Para This computer: habilite o controle local, conceda Acessibilidade e Gravação de Tela no macOS e escolha 'This computer' no bot.",
    "Quando aparecer 'Sign in needed', toque em Open, faça login com Take control e toque em Done. Salve o login para a próxima vez.",
    "No celular: abra o pareamento no desktop (Remote access / Companion) e escaneie o QR. Para usar fora de casa, use Tailscale ou o endereço HTTPS gerenciado e ligue 'Keep this computer awake'."
  ],
  dicas: [
    "Na Local VM per-bot, cada especialista tem pasta e logins de navegador próprios. Cada desktop pode usar até 4 GB de RAM e 2 CPUs: confira a memória antes [código].",
    "Para Gmail, Agenda e Drive, prefira apps conectados a login pelo navegador: evita bloqueio de passkey.",
    "Use um alias SSH diferente por bot para separar servidores.",
    "Em Auto com backend VPS, uma rotina agendada pode ligar a VPS mesmo com 'Start VPS automatically' desligado [código].",
    "Pelo celular dá para criar e disparar rotinas, aprovar, trocar o modelo do bot e fazer chamadas Live."
  ],
  armadilhas: [
    "Deixar um bot em This computer com Full access: ele clica no seu computador real sem pedir.",
    "Esquecer que o Boat cobra enquanto está ligado. Rotinas com intervalo menor que 30 minutos o mantêm ligado o tempo todo.",
    "Tratar o disco do contêiner da VPS como permanente. Tire os resultados de lá.",
    "Apontar o app para uma VPS de produção: o bot pode derrubar serviços no ar.",
    "Pedir ao bot Android para digitar texto com acento: só aceita ASCII básico, até 256 caracteres [código].",
    "Achar que o celular alcança o computador dormindo, ou recebe alertas com o app iOS fechado."
  ],
  teste: [
    "Defini o lugar de trabalho de cada bot e anotei o porquê.",
    "Pareei o celular e aprovei uma ação por ele.",
    "Usei Take control num cartão Sign in needed.",
    "Conferi que nenhum bot com This computer está em Full access."
  ],
  quiz: [
    { q: "Você ligou o controle local nas configurações do app. O que acontece com os bots?", o: ["Todos passam a controlar o computador", "Nenhum ganha o recurso até você escolher 'This computer' em cada um", "Só o MausBot ganha", "Ganham só em modo leitura"], c: 1, e: "Habilitar globalmente não atribui o recurso a nenhum bot." },
    { q: "Quando o Boat vai dormir sozinho?", o: ["Nunca", "Após 10 minutos sem uso, salvo rotina que o usa nos próximos 30 minutos", "Após 1 hora", "À meia-noite"], c: 1, e: "A VPS própria, ao contrário, nunca é desligada pelo app." },
    { q: "Qual destes NÃO dá para fazer pelo celular pareado?", o: ["Aprovar uma ação", "Criar e disparar rotina", "Trocar uma chave de API", "Interromper um bot"], c: 2, e: "Chaves de API só podem ser trocadas no computador." }
  ],
  fontes: [
    { t: "Computadores", u: "https://docs.openmausbot.com/docs/computers" },
    { t: "Este computador", u: "https://docs.openmausbot.com/docs/computers/local-computer" },
    { t: "Local VM", u: "https://docs.openmausbot.com/docs/computers/local-vm" },
    { t: "Nuvem e VPS", u: "https://docs.openmausbot.com/docs/computers/cloud-and-vps" },
    { t: "App iOS", u: "https://docs.openmausbot.com/docs/mobile/ios-companion" },
    { t: "Controle de Android", u: "https://docs.openmausbot.com/docs/mobile/android-control" }
  ]
},
{
  id: 9, slug: "apps-conectados", titulo: "Apps conectados", sub: "Gmail, Slack, CRM e mais, com contas separadas e travas", tempo: "15 min",
  oque: [
    "Apps conectados dão ao bot acesso a Gmail, Slack, Notion, planilhas e outros pela Composio, um serviço que guarda as autorizações (OAuth) e transforma cada app em ferramentas. Os tokens ficam na Composio, nunca no prompt do bot.",
    "No app oficial você conecta sem chave nenhuma. Há também até 5 contas por serviço com apelido, chave própria da Composio (self-host), leitura do X via treg e uma integração nativa com HighLevel [código]."
  ],
  porque: [
    "É assim que um bot sai do chat e passa a trabalhar nos sistemas da empresa.",
    "Sem entender grants e contas, um bot com acesso ao Gmail alcança todas as caixas conectadas na instalação."
  ],
  conceitos: [
    { t: "Composio", d: "Serviço terceiro que guarda autorizações de apps e oferece as ferramentas ao bot." },
    { t: "OAuth", d: "Login do tipo 'Entrar com Google': você autoriza sem entregar a senha." },
    { t: "Toolkit", d: "Um serviço inteiro (gmail, slack, googlesheets), com várias ferramentas." },
    { t: "Alias (apelido de conta)", d: "Nome de cada conta conectada (trabalho, pessoal). Até 5 contas por serviço; o bot escolhe explicitamente qual usar." },
    { t: "Self-hosted", d: "Usar o seu próprio projeto Composio colando a chave em App Settings → Connections. Passa na frente do serviço gerenciado." },
    { t: "HighLevel nativo", d: "Integração direta com HighLevel com 20 ferramentas de contatos, tags, notas, tarefas, oportunidades, conversas e agenda. Nunca envia SMS, e-mail ou WhatsApp nem dispara workflow; conversas e agenda são só leitura; uma conexão (uma location) por vez [código]." },
    { t: "treg (X/Twitter)", d: "Pacote só de leitura para buscar posts e perfis no X." }
  ],
  passos: [
    "Abra Connected apps na barra lateral, busque o app e clique em Connect.",
    "Dê um apelido à conta (trabalho, pessoal) e conclua a autorização no navegador.",
    "Nas configurações do bot, em Connected apps / Access, conceda só as ferramentas do papel dele.",
    "Depois de conectar, abra uma thread nova para o bot receber o catálogo atualizado.",
    "Para HighLevel: card HighLevel → Connect (login) ou token de Private Integration + Location ID."
  ],
  dicas: [
    "Se o bot pedir um app que falta, aparece um cartão seguro de conexão na conversa; depois de autorizar, ele continua sozinho [código].",
    "Para clientes diferentes, não confie em grant para separar contas: o grant vale para ferramentas, não para contas. Use instalações separadas.",
    "No HighLevel, peça ao bot para consultar a location antes de gravar campos personalizados e buscar o contato antes de criar outro.",
    "Para enviar WhatsApp ou SMS pelo HighLevel, o bot grava uma tag ou campo e um workflow do próprio HighLevel envia."
  ],
  armadilhas: [
    "Desconectar uma conta achando que só esconde: desconectar revoga a autorização no provedor.",
    "Esquecer qual location do HighLevel está conectada e gravar dado no CRM errado.",
    "Esperar que o HighLevel do bot envie mensagem: as ferramentas nunca enviam.",
    "O serviço gerenciado não posta no X; para isso é preciso self-host com app próprio do X."
  ],
  teste: [
    "Conectei um app com apelido de conta.",
    "Restringi as ferramentas de um bot a só leitura.",
    "Abri uma thread nova e conferi que o bot vê as ferramentas.",
    "Anotei qual conta cada bot alcança."
  ],
  quiz: [
    { q: "Dois Gmails conectados na mesma instalação e um bot com grant de Gmail. O que é verdade?", o: ["O bot só vê a conta do grant", "O bot alcança as duas e precisa escolher qual usar", "A segunda substitui a primeira", "O app impede duas contas"], c: 1, e: "Grant vale para ferramentas, não para contas. Para isolar, outra instalação." },
    { q: "O que a integração nativa com HighLevel NÃO faz?", o: ["Mover oportunidade de estágio", "Adicionar tag", "Enviar WhatsApp ou disparar workflow", "Ler conversas"], c: 2, e: "Ela lê e atualiza registros, mas nunca envia mensagens nem inicia automações." },
    { q: "Você conectou um app novo e o bot não vê as ferramentas. O que fazer primeiro?", o: ["Reinstalar o app", "Abrir uma thread nova", "Mudar o motor", "Apagar o bot"], c: 1, e: "A thread antiga pode não ter o catálogo atualizado." }
  ],
  fontes: [
    { t: "Apps conectados", u: "https://docs.openmausbot.com/docs/connected-apps" },
    { t: "Várias contas", u: "https://docs.openmausbot.com/docs/connected-apps/multiple-accounts" },
    { t: "Composio própria", u: "https://docs.openmausbot.com/docs/connected-apps/self-hosted-composio" },
    { t: "Problemas com apps", u: "https://docs.openmausbot.com/docs/troubleshooting/connected-apps" }
  ]
},
{
  id: 10, slug: "self-hosting-operacao", titulo: "Self-hosting e operação", sub: "Dados, backup, servidor 24 horas e diagnóstico", tempo: "20 min",
  oque: [
    "Os dados do app ficam numa pasta local (~/.openmausbot). O servidor interno (harness) só escuta em 127.0.0.1:8799 e todo aparelho entra por pareamento, sem senha.",
    "Para deixar os bots ligados 24 horas numa VPS há três caminhos: túnel público (--tunnel), domínio próprio com Docker e Caddy, ou rede privada Tailscale (--tailscale)."
  ],
  porque: [
    "Um time de bots só funciona com servidor de pé, backup confiável e diagnóstico rápido.",
    "Errar a exposição de rede pode abrir a API completa do app para a internet."
  ],
  conceitos: [
    { t: "Harness", d: "O servidor interno, dono dos agentes, aprovações e configurações. Escuta em 127.0.0.1:8799 e nunca deve ser exposto." },
    { t: "Pareamento", d: "O login do app: código de uso único, válido por 5 minutos. A sessão dura 30 dias e renova até 180." },
    { t: "Backup .ombbackup", d: "Exportação criptografada com senha de 12+ caracteres. Leva bots, conversas, memória, skills e rotinas; não leva credenciais nem conexões." },
    { t: "Restore", d: "Substitui o workspace inteiro (digite REPLACE). Rotinas e webhooks voltam pausados." },
    { t: "Lease", d: "Arquivo de trava que impede dois processos de usar a mesma pasta de dados. Pode travar a abertura depois de um desligamento sujo com troca do nome da máquina [código]." },
    { t: "Sentinel", d: "Varredura de saúde somente leitura: falhas de ferramenta, turnos parados, filas longas, turnos caros e loops [código]." },
    { t: "Portas", d: "8799 harness (nunca expor) · 8800 receptor de webhook · 8810 companion (quando ligado) · 8811 controle de pareamento." }
  ],
  passos: [
    "Faça backup em Settings → Backups → Export full backup, com a senha guardada à parte.",
    "Para migrar a um servidor seu: Settings → Servers → Copy this computer here. Depois reconecte contas e religue rotinas.",
    "Numa VPS: crie um usuário dedicado, instale a versão fixa (openmausbot@X.Y.Z) e rode serve --tailscale (ou --tunnel).",
    "Crie um serviço systemd com Restart=always para subir sozinho após reboot.",
    "Quando algo falhar: Settings → General → Diagnostics → Export Diagnostics, que troca chaves e tokens por «redacted»."
  ],
  dicas: [
    "Tailscale é a rota mais privada: nada fica público. Para receber webhook de fora, exponha só a porta 8800.",
    "Atualize entre execuções: rotinas e fila sobrevivem ao reinício, o turno em andamento se perde.",
    "Use OMB_DATA_DIR para testar configurações numa pasta isolada sem tocar no time real.",
    "A CLI headless (run, events, interrupt, team export/apply) permite disparar bots por script e versionar o time em arquivo (módulo 11) [código].",
    "Se o app não abre com 'already owned by a process on another machine': confirme que nenhuma outra instância usa a pasta, saia do app, apague só o arquivo openmausbot-server.lease e reabra."
  ],
  armadilhas: [
    "Expor a porta 8799 à internet.",
    "Achar que reiniciar o serviço atualiza a versão. Não atualiza: instale a versão nova antes.",
    "Logar os motores como root e rodar o serviço com outro usuário: o bot dirá que o motor não está logado.",
    "Confiar que o backup leva as chaves e conexões. Não leva.",
    "Copiar a pasta de dados com o app aberto: o banco pode sair inconsistente.",
    "Apagar a pasta de dados inteira para resolver uma trava. Nunca."
  ],
  teste: [
    "Exportei um backup completo e guardei a senha num cofre.",
    "Encontrei a pasta de logs pelo menu Diagnostics.",
    "Listei os aparelhos pareados e revoguei um que não uso.",
    "Escrevi qual caminho de servidor (túnel, domínio ou Tailscale) faz sentido para mim e por quê."
  ],
  quiz: [
    { q: "Qual porta nunca deve ser publicada na internet?", o: ["8800 (webhook)", "8799 (harness)", "443 do Caddy", "8810 (companion)"], c: 1, e: "O harness controla bots, aprovações e computadores." },
    { q: "O que o backup .ombbackup NÃO inclui?", o: ["Rotinas", "Memória e skills", "Credenciais e conexões de apps", "Anexos"], c: 2, e: "É preciso reconectar tudo na máquina nova." },
    { q: "Qual caminho de VPS não deixa nada exposto publicamente?", o: ["serve --tunnel", "Docker + Caddy", "serve --tailscale", "Abrir a 8799"], c: 2, e: "Só aparelhos da sua rede Tailscale alcançam o servidor." }
  ],
  fontes: [
    { t: "Self-hosting", u: "https://docs.openmausbot.com/docs/self-hosting" },
    { t: "Deploy em VPS", u: "https://docs.openmausbot.com/docs/self-hosting/deploy-vps" },
    { t: "Rede", u: "https://docs.openmausbot.com/docs/self-hosting/networking" },
    { t: "Dados e backups", u: "https://docs.openmausbot.com/docs/self-hosting/data-and-backups" },
    { t: "Logs", u: "https://docs.openmausbot.com/docs/troubleshooting/logs" },
    { t: "Atualizações", u: "https://docs.openmausbot.com/docs/troubleshooting/updates" },
    { t: "Changelog", u: "https://docs.openmausbot.com/docs/changelog" }
  ]
},
{
  id: 11, slug: "recursos-escondidos", titulo: "Recursos escondidos", sub: "O que o app já faz e a documentação quase não explica", tempo: "25 min",
  oque: [
    "Comparando o código do app (versão 0.1.126) com a documentação, aparecem várias peças prontas e pouco explicadas: o modelo de decisão, o banco de dados de cada bot, dashboards e páginas públicas, widgets no chat, skills aprendidas, a CLI headless, um servidor MCP próprio, o Sentinel e chaves escondidas do config.json.",
    "Tudo neste módulo é marcado como 'só no código': funciona hoje, mas pode mudar entre versões. Teste antes de depender."
  ],
  porque: [
    "É aqui que está muito do valor que passa despercebido: relatórios com dados, painéis, aprendizado do time e controle por script.",
    "Saber que existe muda o que você pede ao bot."
  ],
  conceitos: [
    { t: "Modelo de decisão (decider)", d: "Modelo pequeno e rápido que só classifica: quem responde num grupo em Auto e quais e-mails importam. Dá aos bots as ferramentas decide (até 8 perguntas tipadas) e extract (até 30 campos de um texto ou imagem). Settings → Decision and extraction [código]." },
    { t: "Data tools (DuckDB)", d: "Cada bot tem um banco analítico próprio. Carrega CSV, planilhas, Parquet, Google Sheets e cópias de Postgres/MySQL; roda SQL; mostra tabelas e gráficos na aba Data; exporta CSV, XLSX, PNG [código]." },
    { t: "Dashboards e páginas", d: "show_html mostra uma página ou componente no chat; update_html altera só a parte apontada; publish_page publica num link público (até 5 MB) só quando você pede [código]." },
    { t: "Widgets", d: "Formulários nativos no chat (data, seleção, texto) e cartões de 2 a 6 opções clicáveis [código]." },
    { t: "Skills aprendidas", d: "/learn transforma a conversa numa skill. 'Learn skills automatically' faz o bot criar ou melhorar skills sozinho (experimental). 'Share learned skills with the department' leva para o time [código]." },
    { t: "CLI headless", d: "Comandos run, send, wait, events, interrupt, export e team export/apply para controlar bots por script e versionar o time em arquivo YAML/JSON [código]." },
    { t: "Servidor MCP próprio", d: "'openmausbot mcp' expõe os bots como ferramentas para outro agente, como o Claude Code [código]." },
    { t: "Sentinel", d: "Varredura de saúde: falhas, filas acima de 300 s, turnos acima de US$ 5 e loops, sem copiar conteúdo de mensagens [código]." },
    { t: "Chaves de features", d: "No config.json: parallelRoomJobs (tarefas de grupo em paralelo), chiefEscalations (avisos de bot travado ao Chief), showToolCalls (mostrar cada ferramenta usada), roomMemoryCapture e outras. A maioria vem desligada [código]." },
    { t: "Checkpoint de turno", d: "Antes de cada turno o app fotografa a pasta de trabalho num git sombra para listar o que o bot alterou. Seu .git nunca é tocado [código]." }
  ],
  passos: [
    "Peça a um bot: 'carregue esta planilha como tabela vendas e me mostre a receita por mês em gráfico'. Abra a aba Data.",
    "Peça: 'monte um dashboard com esses dados'. Clique numa parte da página e diga o que mudar.",
    "Depois de um fluxo que deu certo, digite /learn para virar skill.",
    "Em Settings → Decision and extraction, configure o modelo de decisão se usar grupos em Auto.",
    "Se for usar a CLI: rode doctor, depois team export para ver o time como arquivo, sempre com --dry-run antes de aplicar."
  ],
  dicas: [
    "Combine data_load + data_show + show_html + uma rotina que republica: painel semanal sem BI externo.",
    "Use extract para tirar campos de notas, propostas ou prints.",
    "Ligue 'Share learned skills with the department' em 'Ask' para aprovar cada skill antes de circular.",
    "Ligue showToolCalls enquanto ajusta um time para ver cada ferramenta usada; depois desligue.",
    "Rode o Sentinel toda semana para ter dados de falhas, filas e custo antes de dar mais autonomia."
  ],
  armadilhas: [
    "publish_page cria link público: nada de dado pessoal ou de cliente sem autorização.",
    "'team apply --prune' apaga bots e grupos que não estão no arquivo. Rode sempre --dry-run ou --check antes.",
    "'Learn skills automatically' consome tokens e conta no limite de gastos.",
    "data_sql roda uma instrução por vez, só SELECT e CREATE TABLE/VIEW AS.",
    "Chaves escondidas do config.json não têm suporte documentado. Teste num perfil isolado e com o app fechado."
  ],
  teste: [
    "Carreguei uma planilha num bot e vi o gráfico na aba Data.",
    "Gerei um dashboard no chat e alterei uma parte dele.",
    "Transformei uma conversa em skill com /learn.",
    "Anotei quais chaves escondidas quero testar e em qual perfil isolado."
  ],
  quiz: [
    { q: "Num grupo em Auto, o modelo de decisão demora mais de 1,5 s. Quem responde?", o: ["Ninguém", "Todos", "O líder ou bot reserva do grupo", "O app pergunta a você"], c: 2, e: "Na dúvida ou fora do ar, a mensagem vai para o reserva." },
    { q: "Qual comando versiona o time como arquivo e mostra mudanças antes de aplicar?", o: ["sentinel --once", "team export e team apply --dry-run", "run --export", "doctor --wait"], c: 1, e: "team export gera o arquivo; team apply --dry-run só mostra o plano." },
    { q: "O que publish_page faz?", o: ["Salva a página só no seu computador", "Publica num link público, só quando você pede", "Manda por e-mail", "Imprime"], c: 1, e: "Por ser público, exige cuidado com dados pessoais." }
  ],
  fontes: [
    { t: "Documentação (índice)", u: "https://docs.openmausbot.com/docs" },
    { t: "Changelog", u: "https://docs.openmausbot.com/docs/changelog" },
    { t: "Configuração", u: "https://docs.openmausbot.com/docs/getting-started/configuration" }
  ]
},
{
  id: 12, slug: "orquestracao-chef", titulo: "Orquestração: montando o Chef", sub: "Um bot coordenador que recebe pedidos e distribui para especialistas", tempo: "30 min",
  oque: [
    "No OpenMausBot, orquestrar é um papel que já vem pronto: o Chief of Staff. Ele recebe o pedido, passa partes do trabalho a especialistas com coordinate_bots, é acordado sozinho quando os resultados chegam e entrega uma resposta consolidada.",
    "O Chef é o seu Chief of Staff com nome, regras e time próprios. Não é preciso construir a orquestração por fora: é preciso configurar bem o que já existe."
  ],
  porque: [
    "Um ponto único de contato tira de você o trabalho de lembrar qual bot faz o quê.",
    "As travas embutidas (profundidade máxima, orçamento de pedidos, nada de devolver trabalho a quem pediu) evitam bots em loop, mas só funcionam com um processo bem desenhado. Processo antes de automação."
  ],
  conceitos: [
    { t: "Papel x poderes de Chief", d: "O papel (chiefOfStaff) dá o resumo diário, as threads 'Team incidents' e 'Team escalations' e a liderança em grupos. Os poderes (criar, configurar e apagar bots, salas e rotinas; retomar threads; repassar o nível) ficam com o Chief e com o MausBot padrão [código]." },
    { t: "Um Chief por departamento", d: "Nomear outro bot como Chief tira o cargo do anterior. A troca precisa tirar o atual e nomear o novo no mesmo plano." },
    { t: "Árvore de tarefas", d: "Cada delegação vira um nó. Limites por pedido original: profundidade 4, 64 pedidos, 96 execuções; brief e resultado até 12.000 caracteres [código]." },
    { t: "Thread standing x new", d: "standing (padrão): uma thread de trabalho fixa com cada colega, em fila. new: abre uma thread nova no colega. Até 5 threads novas por turno [código]." },
    { t: "Herança de nível", d: "Num pedido que passa pelo Chief, o especialista pode SUBIR até o nível do Chief, nunca descer. Pôr o Chef em Ask não freia um especialista em Full access [código]." },
    { t: "Incidentes e escalações", d: "Falha de um colega vai para 'Team incidents' (o Chief pode usar retry_thread, no máximo 2 vezes). Bot parado esperando você vai para 'Team escalations' (raise_escalation; avisos ligados pela chave chiefEscalations) [código]." },
    { t: "propose_team_setup", d: "Aplica de uma vez um plano de time: até 24 operações e 8 times novos, com Undo [código]." },
    { t: "assignment_status", d: "Consulta o andamento de uma delegação num turno posterior. Nunca no mesmo turno em que delegou [código]." }
  ],
  passos: [
    "Desenhe o processo antes: quais 2 ou 3 especialistas, qual a entrada e a saída de cada um, quem aprova.",
    "Escolha o caminho: renomear o MausBot para 'Chef' (ele já é o Chief) ou pedir ao Chief atual um propose_team_setup que tire o cargo dele e dê ao Chef no mesmo plano.",
    "Escolha para o Chef um motor que delega (Claude ou Codex) e um modelo forte. Reply style default.",
    "Escreva o Soul do Chef: papel, regras de roteamento, formato de brief (objetivo, entradas, restrições, done_when), uma frente por vez e entrega consolidada. Nunca dizer 'feito' antes do resultado do colega chegar.",
    "Crie ou ajuste os especialistas com modelo explícito (list_team_setup), Soul curto, pasta própria e nível de acesso baixo.",
    "Crie um grupo 'Time do Chef' com Lead: Chef e um bulletin com as regras.",
    "Na fase de teste, ligue 'Ask me before contacting other bots' no Chef (fora de Full access) para ver cada repasse.",
    "Crie a rotina diária do Chef: cron com fuso America/Sao_Paulo, Remember the last run, leitura de list_threads, assignment_status e list_triggers dos especialistas, e 'Nothing new' quando não houver novidade."
  ],
  dicas: [
    "Brief padrão em cada delegação: objetivo em uma frase, entradas exatas, restrições e um done_when verificável. Uma tarefa estreita por especialista.",
    "Consulte antes de executar: consult:true com 2 a 4 especialistas em paralelo, depois delegue o trabalho.",
    "Use decide para classificar o pedido antes de escolher o especialista (módulo 11).",
    "Uma thread 'new' por cliente ou projeto mantém o histórico de cada um separado no especialista.",
    "Depois de delegar, o Chef encerra o turno. O resultado o acorda sozinho.",
    "Grave decisões do time com propose_team_memory (key estável) e eventos com memory_log.",
    "Comece com 2 ou 3 especialistas num único processo já medido; amplie só depois de ver os dados."
  ],
  armadilhas: [
    "Consultar o andamento no mesmo turno da delegação.",
    "Delegar de volta para quem pediu: é recusado.",
    "Mandar 'obrigado' como trabalho novo a quem já terminou (ALREADY_COMPLETED). Use rework só com correção concreta.",
    "Inventar id de modelo ou de bot: sempre liste antes.",
    "Desenhar uma árvore funda: para em 4 níveis.",
    "Bots de outro departamento não aparecem, a não ser que o Chef gerencie aquele departamento.",
    "Achar que mensagem de um bot vale como autorização sua. Nunca vale.",
    "Especialista criado pelo Chef nasce em Full access, com apps desligados e no modelo padrão do workspace. Revise antes de dar trabalho sensível."
  ],
  teste: [
    "Escrevi o processo do Chef em uma página antes de configurar.",
    "Defini quem é o Chief do departamento e confirmei que há só um.",
    "Escrevi o Soul do Chef com o formato de brief e a regra de não declarar 'feito' antes do resultado.",
    "Criei 2 especialistas com modelo explícito e nível de acesso baixo.",
    "Criei o grupo 'Time do Chef' com Lead: Chef.",
    "Liguei 'Ask me before contacting other bots' e observei uma delegação.",
    "Criei a rotina diária do Chef com 'Nothing new'.",
    "Rodei um /goal no grupo com o Chef como coordenador."
  ],
  quiz: [
    { q: "O Chef mandou uma tarefa a um especialista. O que ele deve fazer em seguida?", o: ["Chamar assignment_status a cada minuto", "Encerrar o turno; o resultado o retoma sozinho", "Postar no grupo pedindo urgência", "Abrir start_thread para esperar"], c: 1, e: "A ferramenta manda encerrar o turno depois de enviar." },
    { q: "Qual é o jeito suportado de o Chef virar Chief no departamento onde o MausBot já é Chief?", o: ["Criar o Chef: vira Chief automaticamente", "Um propose_team_setup que tira o cargo do MausBot e dá ao Chef no mesmo plano", "Apagar o MausBot", "Ligar OMB_OPEN_TEAMS=1"], c: 1, e: "Um departamento não aceita dois Chiefs, e o MausBot nunca pode ser apagado." },
    { q: "Depois da troca, o que acontece com o MausBot?", o: ["Perde todas as ferramentas", "Mantém os poderes de Chief, mas resumo, incidentes e escalações vão para o Chef", "Continua Chief junto", "É apagado"], c: 1, e: "O MausBot é o bot padrão e mantém os poderes, mas o papel passa ao Chef." },
    { q: "O Chef está em Ask e um especialista em Full access. Num pedido repassado, em que nível o especialista trabalha?", o: ["Ask, herdado", "Full access, o nível dele", "Sempre Approve for me", "Depende do grupo"], c: 1, e: "A herança só sobe, nunca rebaixa. Para frear, baixe o nível do especialista." },
    { q: "Qual limite de profundidade da árvore de delegação?", o: ["2 níveis", "4 níveis", "10 níveis", "Sem limite"], c: 1, e: "Desenhe o time raso: Chef, especialista e, no máximo, subespecialista." }
  ],
  fontes: [
    { t: "Chat e times: delegação", u: "https://docs.openmausbot.com/docs/features/chat-and-teams#delegation" },
    { t: "Departamentos", u: "https://docs.openmausbot.com/docs/features/chat-and-teams#departments" },
    { t: "Grupos e times", u: "https://docs.openmausbot.com/docs/features/bots-and-tasks#groups-and-teams" },
    { t: "Especialista com modelo escolhido", u: "https://docs.openmausbot.com/docs/features/chat-and-teams#creating-a-specialist-with-a-chosen-model" },
    { t: "Mudanças que um bot faz", u: "https://docs.openmausbot.com/docs/features/approvals-and-inspector#changes-a-bot-makes" },
    { t: "Automação", u: "https://docs.openmausbot.com/docs/features/automation" }
  ]
}
]);

window.CURSO.glossarioExtra = [
  { t: "MCP", d: "Model Context Protocol: padrão para dar ferramentas a um agente de IA." },
  { t: "Composio", d: "Serviço que guarda as autorizações de apps e entrega ferramentas aos bots." },
  { t: "Loopback (127.0.0.1)", d: "Endereço que só a própria máquina enxerga." },
  { t: "Tailscale", d: "Rede privada entre seus aparelhos; só eles alcançam o servidor." },
  { t: "Token", d: "Pedaço de texto contado pelo modelo; é a unidade de cobrança e de tamanho de contexto." },
  { t: "SSH", d: "Acesso seguro por terminal a outro computador." },
  { t: "Docker / Podman", d: "Programas que rodam contêineres: computadores isolados dentro do seu." },
  { t: "Webhook", d: "Endereço que outro sistema chama para avisar que algo aconteceu." },
  { t: "done_when", d: "Critério de pronto que acompanha uma delegação; o colega é cobrado por ele." },
  { t: "Bulletin", d: "Instruções fixadas no topo de um grupo, com até 12.000 caracteres." },
  { t: "Departamento (section)", d: "Agrupa bots na barra lateral, tem instruções compartilhadas e no máximo um Chief." },
  { t: "Shared instructions", d: "Texto do departamento lido por todos os bots dele a cada turno; só você edita." },
  { t: "Undo", d: "Botão que desfaz mudanças feitas por bots (perfil, modelo, skills, time, memória). Apagar bot não tem Undo." }
];
