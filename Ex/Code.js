const NdjClient = require("./NdjClient");

const bot = new NdjClient({
token: "Bot_Token",
prefix: "!"
});

/* =========================
   READY
========================= */

bot.on("ready",(user)=>{
console.log("Bot online:", user.username);
});

/* =========================
   SLASH PING
========================= */

bot.slashCommand({
name:"ping",
description:"Testa se o bot está online"
}, async (ctx)=>{
var botname = ctx.client.vars.botName

ctx.reply("🏓 Pong! eu sou o " + botname);

});



bot.slashCommand({
name:"botinfo",
description:"Info do bot"
}, async (ctx)=>{

ctx.reply({

embed:{
title:"NDJ BOT",
description:
"Nome: "+ctx.client.vars.botName+
"\nServidores: "+ctx.client.vars.guildCount+
"\nUsuários: "+ctx.client.vars.userCount,
color:0x00ff00
}

});

});



/* =========================
   SLASH ECHO
========================= */

bot.slashCommand({
name:"echo",
description:"Repete uma mensagem",
options:[
{
name:"texto",
description:"Mensagem para repetir",
type:3,
required:true
}
]
}, async (ctx)=>{

ctx.reply("Você disse: " + ctx.options.texto);

});


/* =========================
   SLASH RANDOM
========================= */

bot.slashCommand({
name:"random",
description:"Gera um número aleatório"
}, async (ctx)=>{

const num = Math.floor(Math.random()*100);

ctx.reply("Número aleatório: " + num);

});


/* =========================
   SLASH EMBED
========================= */

bot.slashCommand({
name:"embed",
description:"Teste de embed",
options:[
{
name:"conteudo",
description:"Mensagem para repetir",
type:3,
required:true
}
]

}, async (ctx)=>{
var nome = ctx.options.conteudo

ctx.reply({
embed:{
title:"NDJ LIB",
description:nome,
color:0x00ff00
}
});

});


/* =========================
   SLASH SOMA
========================= */

bot.slashCommand({
name:"soma",
description:"Soma dois números",
options:[
{
name:"numero1",
description:"Primeiro número",
type:4,
required:true
},
{
name:"numero2",
description:"Segundo número",
type:4,
required:true
}
]
}, async (ctx)=>{

const resultado = ctx.options.numero1 + ctx.options.numero2;

ctx.reply("Resultado: " + resultado);

});


/* =========================
   SLASH USER
========================= */

bot.slashCommand({
name:"user",
description:"Mostra o usuário que executou o comando"
}, async (ctx)=>{

ctx.reply("Usuário: " + ctx.user.username);

});


/* =========================
   START
========================= */

bot.start();
  
