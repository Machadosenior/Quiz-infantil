const perguntas = [
    {
      pergunta: "Por que Elimeleque e sua família foram para Moabe?",
      resposta:[
        "A) Um anjo disse a ele.",
        "B) Epidemia",
        "C) Guerra.",
        "D) Fome em Israel."
      ],
      correta: 3
    },
    {
      pergunta:"Onde Rute ficou deitada Boaz dormiu?",
      resposta:[
        "A) Na casa de Noemi.",
        "B) Aos pés de Boaz.",
        "C) Na casa dela.",
        "D) No campo de colheita."
      ],
      correta: 1
    },
    {
      pergunta: "Quantos filhos Noemi teve?",
      resposta:[
        "A) 2",
        "B) 0",
        "C) 13",
        "D) 4"
      ],
      correta: 0
    },
    {
      pergunta: "quais os nomes dos filhos de Noemi",
      resposta:[
        "A) Mickey e Donald.",
        "B) Saul e Elias.",
        "C) Quiliom e Malom",
        "D) Paulo e Silas"
      ],
      correta: 2
    },
    {
      pergunta: "Quando Boaz acordou e viu Rute deitada aos seus pés, qual foi a reação dele?",
      resposta:[
        "A) Sorriu",
        "B) Assustado",
        "C) Repreendeu",
        "D) Apaixonou"
      ],
      correta: 1
    },
    {
      pergunta: "Rute teve um filhos, e esse filho foi muito importante em Israel, quem foi?",
      resposta:[
        "A) Davi",
        "B) Elias",
        "C) Saul",
        "D) Obede"
      ],
      correta: 3
    },
    {
      pergunta: "Onde Rute aceitou se casar com Boaz?",
      resposta:[
        "A) Na eira.",
        "B) Na casa de Boaz.",
        "C) Na casa de Noemi.",
        "D) Na lavroura."
      ],
      correta: 0
    },
    {
      pergunta: "Qual foi o texto referência da história de Rute?",
      resposta:[
        "A) Rute 1:16"
      ],
      correta: 1
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const correta = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent=correta.size + 'de' + totalDePerguntas
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value=item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta= event.target.value == item.correta
      correta.delete(item)
     if(estaCorreta) {
       correta.add(item)
  
     }
  
     mostrarTotal.textContent = correta.size + 'de' + totalDePerguntas
    }
  
  
    quizItem.querySelector('dl').appendChild(dt)
   }
  
   quizItem.querySelector('dl dt').remove()
  
   quiz.appendChild(quizItem)
  
  
  }