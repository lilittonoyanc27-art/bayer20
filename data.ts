export interface ExerciseItem {
  id: number;
  sentenceBefore: string;
  sentenceAfter: string;
  correct: 'por' | 'para' | 'en';
  translation: string;
  explanation: string;
  category: string;
}

export const EXERCISE_SET_1: ExerciseItem[] = [
  {
    id: 1,
    sentenceBefore: "Salgo ",
    sentenceAfter: " Barcelona.",
    correct: "para",
    translation: "Ես մեկնում եմ Բարսելոնա։",
    explanation: "«Para»-ն օգտագործվում է վերջնակետ կամ ուղղություն (destino) նշելու համար, երբ ինչ-որ տեղ ես մեկնում:",
    category: "Destino"
  },
  {
    id: 2,
    sentenceBefore: "No me dejaron entrar en la iglesia ",
    sentenceAfter: " llevar pantalones cortos.",
    correct: "por",
    translation: "Ինձ թույլ չտվեցին մտնել եկեղեցի կարճ տաբատ կրելու պատճառով։",
    explanation: "«Por»-ն օգտագործվում է պատճառ, դրդապատճառ (causa/motivo) նշելու համար («պատճառով` llevar pantalones cortos»):",
    category: "Causa"
  },
  {
    id: 3,
    sentenceBefore: "El helado es ",
    sentenceAfter: " los niños.",
    correct: "para",
    translation: "Պաղպաղակը երեխաների համար է։",
    explanation: "«Para»-ն օգտագործվում է նշելու համար, թե ում համար է նախատեսված ինչ-որ բան՝ հասցեատեր կամ ստացող (destinatario):",
    category: "Destinatario"
  },
  {
    id: 4,
    sentenceBefore: "Te mandaré los papeles ",
    sentenceAfter: " correo.",
    correct: "por",
    translation: "Ես քեզ փաստաթղթերը կուղարկեմ փոստով։",
    explanation: "«Por»-ն օգտագործվում է նշելու համար հաղորդակցման կամ տեղափոխման միջոցը (medio de comunicación/transporte):",
    category: "Medio"
  },
  {
    id: 5,
    sentenceBefore: "Se lo compro ",
    sentenceAfter: " cinco euros.",
    correct: "por",
    translation: "Ես դա գնում եմ հինգ եվրոյով։",
    explanation: "«Por»-ն օգտագործվում է գին, արժեք կամ փոխանակում (precio/intercambio) նշելու համար:",
    category: "Precio"
  },
  {
    id: 6,
    sentenceBefore: "Estoy buscando mis gafas ",
    sentenceAfter: " todas partes.",
    correct: "por",
    translation: "Ես իմ ակնոցը փնտրում եմ ամեն տեղ։",
    explanation: "«Por»-ն օգտագործվում է անորոշ տարածություն կամ վայրերի միջով շարժում (lugar impreciso) նշելու համար («por todas partes» = ամենուր):",
    category: "Lugar impreciso"
  },
  {
    id: 7,
    sentenceBefore: "Trabajamos ",
    sentenceAfter: " vivir y no el contrario.",
    correct: "para",
    translation: "Մենք աշխատում ենք ապրելու համար, ոչ թե հակառակը։",
    explanation: "«Para» + infinitivo (անորոշ դերբայ) օգտագործվում է գործողության նպատակը (finalidad/propósito) արտահայտելու համար:",
    category: "Finalidad"
  },
  {
    id: 8,
    sentenceBefore: "Gracias ",
    sentenceAfter: " ayudarme a prepararlo.",
    correct: "por",
    translation: "Շնորհակալություն՝ ինձ օգնելու համար դա պատրաստել։",
    explanation: "«Gracias»-ից հետո միշտ օգտագործվում է «por»՝ երախտագիտություն կամ պատճառ արտահայտելու համար (agradecimiento):",
    category: "Agradecimiento"
  },
  {
    id: 9,
    sentenceBefore: "Me encanta pasear ",
    sentenceAfter: " el campo.",
    correct: "por",
    translation: "Ինձ շատ դուր է գալիս զբոսնել դաշտով / գյուղական վայրերով։",
    explanation: "«Por»-ն օգտագործվում է նշելու համար շարժում ինչ-որ տարածքով, վայրի միջով (movimiento a través de un lugar):",
    category: "Movimiento"
  },
  {
    id: 10,
    sentenceBefore: "Pasamos ",
    sentenceAfter: " el pueblo de mi abuelo.",
    correct: "por",
    translation: "Մենք անցանք պապիկիս գյուղով։",
    explanation: "«Por»-ն օգտագործվում է նշելու համար տարանցումը կամ ինչ-որ վայրի մոտով/միջով անցնելը (tránsito/paso por un lugar):",
    category: "Tránsito"
  },
  {
    id: 11,
    sentenceBefore: "Ese dinero es ",
    sentenceAfter: " guardarlo.",
    correct: "para",
    translation: "Այդ գումարը պահելու համար է։",
    explanation: "«Para»-ն ցույց է տալիս իրի կամ գումարի նպատակային նշանակությունը կամ օգտագործումը (uso/finalidad):",
    category: "Uso"
  },
  {
    id: 12,
    sentenceBefore: "Nicolás ha preguntado ",
    sentenceAfter: " vosotras.",
    correct: "por",
    translation: "Նիկոլասը հարցրել է ձեր մասին։",
    explanation: "«Preguntar por alguien» նշանակում է հարցնել ինչ-որ մեկի մասին կամ հետաքրքրվել նրանով (interés/búsqueda).",
    category: "Interés"
  },
  {
    id: 13,
    sentenceBefore: "Lo tiramos a la basura. Ya no sirve ",
    sentenceAfter: " nada.",
    correct: "para",
    translation: "Մենք դա գցեցինք աղբը։ Դա այլևս ոչ մի բանի պետք չէ։",
    explanation: "«Servir para» կայուն կառույց է, որը նշանակում է պիտանի լինել ինչ-որ բանի համար (utilidad):",
    category: "Utilidad"
  },
  {
    id: 14,
    sentenceBefore: "Insisto ",
    sentenceAfter: " que no te vayas ahora.",
    correct: "en",
    translation: "Ես պնդում եմ, որ հիմա չգնաս։ (Այստեղ ճիշտը en է, ոչ թե por/para)",
    explanation: "«Insistir en que»-ն կայուն բայական կառույց է. «insistir» բայը պահանջում է «en» նախդիրը (régimen verbal):",
    category: "Régimen"
  },
  {
    id: 15,
    sentenceBefore: "He comprado sellos ",
    sentenceAfter: " mandar el paquete.",
    correct: "para",
    translation: "Ես նամականիշեր եմ գնել փաթեթը ուղարկելու համար։",
    explanation: "«Para»-ն ցույց է տալիս գնման նպատակը (finalidad + infinitivo):",
    category: "Finalidad"
  },
  {
    id: 16,
    sentenceBefore: "Eso no lo cambio ",
    sentenceAfter: " nada.",
    correct: "por",
    translation: "Ես դա ոչնչի հետ չեմ փոխի։",
    explanation: "«Cambiar por» կառույցը ցույց է տալիս փոխանակում (intercambio / trueque):",
    category: "Intercambio"
  },
  {
    id: 17,
    sentenceBefore: "Lucie habla bien español ",
    sentenceAfter: " una extranjera.",
    correct: "para",
    translation: "Լյուսին լավ է խոսում իսպաներեն՝ օտարերկրացու համար։",
    explanation: "«Para»-ն օգտագործվում է համեմատության համար, երբ արդյունքը տարբերվում է սպասվածից կամ ընդհանուր նորմից (opinión/comparación con la norma):",
    category: "Comparación"
  },
  {
    id: 18,
    sentenceBefore: "Lo hago ",
    sentenceAfter: " él, porque es mi mejor amigo.",
    correct: "por",
    translation: "Ես դա անում եմ նրա համար, որովհետև նա իմ լավագույն ընկերն է։",
    explanation: "«Hacer por alguien» նշանակում է անել ի նպաստ մեկի, հանուն նրա, նրա շնորհիվ (causa/favor/motivación):",
    category: "Motivación"
  },
  {
    id: 19,
    sentenceBefore: "",
    sentenceAfter: " ti, ¿qué es más fácil, hablar o escribir en alemán?",
    correct: "para",
    translation: "Քո կարծիքով՝ ո՞րն է ավելի հեշտ՝ խոսե՞լ, թե՞ գրել գերմաներեն։",
    explanation: "«Para ti» արտահայտությունը նշանակում է «քո կարծիքով», «քո տեսանկյունից» (opinión/punto de vista):",
    category: "Opinión"
  },
  {
    id: 20,
    sentenceBefore: "Hemos reservado las entradas ",
    sentenceAfter: " visitar la Alhambra. ¿Estáis listos para salir?",
    correct: "para",
    translation: "Մենք տոմսերը ամրագրել ենք Ալհամբրան այցելելու համար։ Պատրա՞ստ եք դուրս գալու։",
    explanation: "«Para»-ն ցույց է տալիս ամրագրման նպատակը («para visitar...»), ինչպես նաև պատրաստվածությունը («listos para...»):",
    category: "Finalidad"
  },
  {
    id: 21,
    sentenceBefore: "La casa ha sido construida ",
    sentenceAfter: " mi tío.",
    correct: "por",
    translation: "Տունը կառուցվել է իմ հորեղբոր / քեռու կողմից։",
    explanation: "«Por»-ն օգտագործվում է կրավորական կառուցվածքում (voz pasiva)՝ գործողությունն իրականացնող անձին (agente) նշելու համար:",
    category: "Voz Pasiva"
  },
  {
    id: 22,
    sentenceBefore: "No tengo bastante tiempo ",
    sentenceAfter: " estudiarlo bien.",
    correct: "para",
    translation: "Ես բավական ժամանակ չունեմ դա լավ սովորելու համար։",
    explanation: "«Para»-ն ցույց է տալիս նպատակը կամ անհրաժեշտ սահմանը, թե ինչի համար է պակասում ժամանակը (propósito/insuficiencia):",
    category: "Finalidad"
  },
  {
    id: 23,
    sentenceBefore: "¿Lo harías ",
    sentenceAfter: " mil euros?",
    correct: "por",
    translation: "Դու դա կանեի՞ր հազար եվրոյի համար։",
    explanation: "«Por»-ն օգտագործվում է փոխանակման կամ գումարային փոխհատուցման համար (intercambio de dinero):",
    category: "Intercambio"
  },
  {
    id: 24,
    sentenceBefore: "Quiero que el trabajo esté entregado ",
    sentenceAfter: " el día 23.",
    correct: "para",
    translation: "Ես ուզում եմ, որ աշխատանքը հանձնված լինի մինչև 23-ը։",
    explanation: "«Para»-ն օգտագործվում է ապագա կոնկրետ սահմանային ժամկետ կամ վերջնաժամկետ (fecha límite/plazo) նշելու համար:",
    category: "Fecha límite"
  }
];

export const EXERCISE_SET_2: ExerciseItem[] = [
  {
    id: 1,
    sentenceBefore: "Este regalo es ",
    sentenceAfter: " mi hermana.",
    correct: "para",
    translation: "Այս նվերը քրոջս համար է։",
    explanation: "«Para»-ն ցույց է տալիս հասցեատիրոջը կամ ստացողին (destinatario). նվերը պատկանում է քրոջը:",
    category: "Destinatario"
  },
  {
    id: 2,
    sentenceBefore: "Caminamos ",
    sentenceAfter: " el parque durante una hora.",
    correct: "por",
    translation: "Մենք մեկ ժամ քայլեցինք այգով։",
    explanation: "«Por»-ն օգտագործվում է նշելու համար շարժում ինչ-որ տարածության միջով (movimiento por un lugar) և ժամանակային տևողություն (duración):",
    category: "Movimiento"
  },
  {
    id: 3,
    sentenceBefore: "Estudio español ",
    sentenceAfter: " trabajar en España.",
    correct: "para",
    translation: "Ես իսպաներեն եմ սովորում Իսպանիայում աշխատելու համար։",
    explanation: "«Para» + infinitivo արտահայտում է ուսման վերջնական նպատակը կամ ծրագիրը (finalidad/propósito):",
    category: "Finalidad"
  },
  {
    id: 4,
    sentenceBefore: "No salimos ",
    sentenceAfter: " la lluvia.",
    correct: "por",
    translation: "Մենք դուրս չեկանք անձրևի պատճառով։",
    explanation: "«Por»-ն օգտագործվում է պատճառ (causa/motivo) արտահայտելու համար. պատճառը անձրևն էր:",
    category: "Causa"
  },
  {
    id: 5,
    sentenceBefore: "Te llamé ",
    sentenceAfter: " teléfono ayer.",
    correct: "por",
    translation: "Ես երեկ քեզ զանգեցի հեռախոսով։",
    explanation: "«Por»-ն օգտագործվում է հաղորդակցման կամ կապի միջոցը (medio de comunicación) նշելու համար:",
    category: "Medio"
  },
  {
    id: 6,
    sentenceBefore: "Compré esta chaqueta ",
    sentenceAfter: " 30 euros.",
    correct: "por",
    translation: "Ես այս բաճկոնը գնեցի 30 եվրոյով։",
    explanation: "«Por»-ն օգտագործվում է գնումների դեպքում ապրանքի գինը կամ արժեքը (precio/intercambio) նշելու համար:",
    category: "Precio"
  },
  {
    id: 7,
    sentenceBefore: "Necesito terminar el trabajo ",
    sentenceAfter: " mañana.",
    correct: "para",
    translation: "Ինձ պետք է ավարտել աշխատանքը մինչև վաղը։",
    explanation: "«Para»-ն օգտագործվում է կոնկրետ վերջնաժամկետ (plazo/fecha límite) սահմանելու համար («մինչև վաղը»):",
    category: "Fecha límite"
  },
  {
    id: 8,
    sentenceBefore: "Gracias ",
    sentenceAfter: " venir a mi fiesta.",
    correct: "por",
    translation: "Շնորհակալություն իմ երեկույթին գալու համար։",
    explanation: "«Gracias por»-ը կայուն կապակցություն է՝ երախտագիտություն կամ շնորհակալության պատճառը նշելու համար (agradecimiento):",
    category: "Agradecimiento"
  },
  {
    id: 9,
    sentenceBefore: "Vamos ",
    sentenceAfter: " Madrid el viernes.",
    correct: "para",
    translation: "Ուրբաթ մենք մեկնում ենք Մադրիդ։",
    explanation: "«Para»-ն ցույց է տալիս շարժման վերջնակետը կամ ուղղությունը, դեպի ուր որ գնում ենք (destino):",
    category: "Destino"
  },
  {
    id: 10,
    sentenceBefore: "Este mensaje es ",
    sentenceAfter: " ti.",
    correct: "para",
    translation: "Այս հաղորդագրությունը քեզ համար է։",
    explanation: "«Para»-ն նշում է ստացողին կամ ընդունողին (destinatario). հաղորդագրությունը հասցեագրված է քեզ:",
    category: "Destinatario"
  },
  {
    id: 11,
    sentenceBefore: "Lo hice ",
    sentenceAfter: " ayudarte.",
    correct: "para",
    translation: "Ես դա արեցի քեզ օգնելու համար։",
    explanation: "«Para» + infinitivo-ն արտահայտում է գործողության ուղղակի նպատակը (finalidad):",
    category: "Finalidad"
  },
  {
    id: 12,
    sentenceBefore: "Pasamos ",
    sentenceAfter: " la tienda, pero no entramos.",
    correct: "por",
    translation: "Մենք անցանք խանութի մոտով, բայց ներս չմտանք։",
    explanation: "«Por»-ն օգտագործվում է նշելու համար ինչ-որ վայրի մոտով կամ միջով անցնելը (tránsito/paso por un lugar):",
    category: "Tránsito"
  },
  {
    id: 13,
    sentenceBefore: "No tengo dinero ",
    sentenceAfter: " comprar el billete.",
    correct: "para",
    translation: "Ես փող չունեմ տոմս գնելու համար։",
    explanation: "«Para»-ն ցույց է տալիս գումարի նպատակայնությունը. ինչի համար է այն անհրաժեշտ (propósito/finalidad):",
    category: "Finalidad"
  },
  {
    id: 14,
    sentenceBefore: "Lo cambié ",
    sentenceAfter: " otro color.",
    correct: "por",
    translation: "Ես դա փոխեցի ուրիշ գույնի հետ։",
    explanation: "«Por»-ն օգտագործվում է փոխանակում (intercambio) կամ փոխարինում նշելու համար:",
    category: "Intercambio"
  },
  {
    id: 15,
    sentenceBefore: "Trabajo mucho ",
    sentenceAfter: " mi familia.",
    correct: "por",
    translation: "Ես շատ եմ աշխատում ընտանիքիս համար / ընտանիքիս պատճառով։",
    explanation: "«Por»-ն այստեղ ցույց է տալիս շարժառիթը, հանուն ում կամ ում պատճառով (motivación/causa): «Para mi familia» նշանակում է ընտանիքին ապահովելու նպատակով, իսկ «por»-ը՝ նրանց սիրուց դրդված կամ նրանց համար:",
    category: "Motivación"
  },
  {
    id: 16,
    sentenceBefore: "La carta fue escrita ",
    sentenceAfter: " Ana.",
    correct: "por",
    translation: "Նամակը գրվել է Անայի կողմից։",
    explanation: "«Por»-ն օգտագործվում է կրավորական սեռում (voz pasiva) գործող սուբյեկտին (agente) նշելու համար («Անայի կողմից»):",
    category: "Voz Pasiva"
  },
  {
    id: 17,
    sentenceBefore: "",
    sentenceAfter: " mí, este ejercicio es fácil.",
    correct: "para",
    translation: "Ինձ համար այս վարժությունը հեշտ է։",
    explanation: "«Para mí» նշանակում է «իմ կարծիքով», «իմ տեսանկյունից» (opinión/punto de vista):",
    category: "Opinión"
  },
  {
    id: 18,
    sentenceBefore: "Salgo ",
    sentenceAfter: " la mañana muy temprano.",
    correct: "por",
    translation: "Ես առավոտյան շատ շուտ եմ դուրս գալիս։",
    explanation: "«Por la mañana / tarde / noche» կայուն ժամանակային արտահայտություններ են՝ օրվա մասերն արտահայտելու համար (momento del día):",
    category: "Tiempo"
  },
  {
    id: 19,
    sentenceBefore: "He comprado flores ",
    sentenceAfter: " mi madre.",
    correct: "para",
    translation: "Ես ծաղիկներ եմ գնել մայրիկիս համար։",
    explanation: "«Para»-ն նշում է ստացողին, հասցեատիրոջը (destinatario), ում համար գնվել են ծաղիկները:",
    category: "Destinatario"
  },
  {
    id: 20,
    sentenceBefore: "¿Estás preparado ",
    sentenceAfter: " el examen?",
    correct: "para",
    translation: "Պատրա՞ստ ես քննությանը։",
    explanation: "«Estar preparado para» արտահայտությունը նշանակում է պատրաստ լինել գործողությանը կամ իրադարձությանը (finalidad o preparación):",
    category: "Preparación"
  }
];

export interface GrammarRule {
  preposition: 'por' | 'para';
  ruleArm: string;
  ruleEsp: string;
  examples: { esp: string; arm: string }[];
}

export const GRAMMAR_RULES: GrammarRule[] = [
  {
    preposition: 'por',
    ruleEsp: "Causa, Motivo o Razón",
    ruleArm: "Պատճառ, դրդապատճառ կամ շարժառիթ",
    examples: [
      { esp: "Lo hice por ti", arm: "Ես դա արեցի քեզ համար (քո պատճառով / հանուն քեզ):" },
      { esp: "No trabajamos por el frío", arm: "Ցրտի պատճառով չենք աշխատում:" }
    ]
  },
  {
    preposition: 'por',
    ruleEsp: "Lugar de tránsito (A través de / Por)",
    ruleArm: "Շարժում ինչ-որ տեղով (միջով, վրայով, մոտով)",
    examples: [
      { esp: "Pasear por el parque", arm: "Զբոսնել այգով:" },
      { esp: "Pasar por la tienda", arm: "Անցնել խանութի մոտով:" }
    ]
  },
  {
    preposition: 'por',
    ruleEsp: "Medio de transporte o comunicación",
    ruleArm: "Հաղորդակցման կամ տեղափոխման միջոց",
    examples: [
      { esp: "Hablar por teléfono", arm: "Խոսել հեռախոսով:" },
      { esp: "Enviar por correo", arm: "Ուղարկել փոստով:" }
    ]
  },
  {
    preposition: 'por',
    ruleEsp: "Precio o Intercambio",
    ruleArm: "Գին, արժեք կամ փոխանակում",
    examples: [
      { esp: "Lo compré por 10 euros", arm: "Ես դա գնեցի 10 եվրոյով:" },
      { esp: "Lo cambio por otro", arm: "Փոխում եմ ուրիշի հետ:" }
    ]
  },
  {
    preposition: 'por',
    ruleEsp: "Tiempo o Época (Duración o momento del día)",
    ruleArm: "Տևողություն կամ օրվա ժամանակահատված",
    examples: [
      { esp: "Estudiar por dos horas", arm: "Սովորել երկու ժամ շարունակ:" },
      { esp: "Por la mañana", arm: "Առավոտյան:" }
    ]
  },
  {
    preposition: 'por',
    ruleEsp: "Agente en Voz Pasiva",
    ruleArm: "Կրավորական սեռի գործող անձ",
    examples: [
      { esp: "El libro fue escrito por Cervantes", arm: "Գիրքը գրվել է Սերվանտեսի կողմից:" }
    ]
  },
  {
    preposition: 'para',
    ruleEsp: "Destinatario (Para quién)",
    ruleArm: "Հասցեատեր կամ ստացող",
    examples: [
      { esp: "Este libro es para ti", arm: "Այս գիրքը քեզ համար է:" }
    ]
  },
  {
    preposition: 'para',
    ruleEsp: "Destino (Lugar de llegada)",
    ruleArm: "Շարժման ուղղություն, վերջնակետ",
    examples: [
      { esp: "Salgo para Madrid", arm: "Մեկնում եմ Մադրիդ:" }
    ]
  },
  {
    preposition: 'para',
    ruleEsp: "Finalidad o Propósito (Para + infinitivo)",
    ruleArm: "Նպատակ (անորոշ դերբայով)",
    examples: [
      { esp: "Estudio para aprender", arm: "Սովորում եմ սովորելու/իմանալու համար:" }
    ]
  },
  {
    preposition: 'para',
    ruleEsp: "Fecha límite o Plazo (Deadline)",
    ruleArm: "Վերջնաժամկետ կամ սահմանային ժամանակ",
    examples: [
      { esp: "Para mañana", arm: "Մինչև վաղը:" },
      { esp: "La tarea es para el lunes", arm: "Տնային հանձնարարությունը երկուշաբթի օրվա համար է:" }
    ]
  },
  {
    preposition: 'para',
    ruleEsp: "Opinión (Punto de vista)",
    ruleArm: "Կարծիք, տեսանկյուն",
    examples: [
      { esp: "Para mí, es muy difícil", arm: "Ինձ համար (իմ կարծիքով) դա շատ դժվար է:" }
    ]
  },
  {
    preposition: 'para',
    ruleEsp: "Comparación con una norma",
    ruleArm: "Համեմատություն նորմայի կամ սպասելիքի հետ",
    examples: [
      { esp: "Habla muy bien para un extranjero", arm: "Նա շատ լավ է խոսում օտարերկրացու համար:" }
    ]
  }
];
