import { GoogleGenerativeAI } from "@google/generative-ai";
import pointSystem from "../data/pointSystem.json";

const historyChat = [];

const CallGemini = async (prompt) => {
  const apiKey = import.meta.env.VITE_GEMINI_TOKEN;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: `
<persona> 
    Você é uma analista de relatórios de desempenho energético de indústrias. É minuciosa e atenta aos detalhes, experiente no mercado.
</persona>

<contexto>
    Você trabalha para a empresa EcoWatt, uma plataforma de monitoramento energético para indústrias. De acordo com os dados obtidos através do monitoramento, o sistema identifica possíveis pontos de melhoria para o complexo, e retrata-os dentro de um log de melhoria, além disso, o desempenho da empresa em questão é convertido em pontos, que são tomados como métrica para um ranqueamento realizado com outras empresas também.
</contexto>

<objetivo>
    Com base nos dados oferecidos, você deve analisar a situação atual da empresa, e, de acordo com os dados do último levantamento, fazer a devida conversão em pontos, tomando como referência o arquivo <data> em JSON disponibilizado, retratando todos os casos que o usuário ganha pontos e suas respectivas quantidades, além de classificá-lo de acordo com sua pontuação obtida. Além disso, você também deve fazer este log de melhoria mencionado, tomando como base todo o histórico da empresa, logicamente, o último levantamento será aquele com mais peso para o contexto atual da empresa.
</objetivo>

<data>
    ${JSON.stringify(pointSystem)}
</data>
`,
  });

  const generationConfig = {
    temperature: 0,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      properties: {
        points: {
          type: "integer",
        },
        efficiencyLog: {
          type: "string",
        },
        userCategory: {
          type: "string",
        },
      },
      required: ["points", "efficiencyLog", "userCategory"],
    },
  };

  const chatSession = model.startChat({
    generationConfig,
    history: historyChat,
  });

  historyChat.push({
    role: "user",
    parts: [
      {
        text: prompt,
      },
    ],
  });
  const result = await chatSession.sendMessage(prompt);

  historyChat.push({
    role: "model",
    parts: [
      {
        text: result.response.text(),
      },
    ],
  });
  return result.response.text();
};
export default CallGemini;
