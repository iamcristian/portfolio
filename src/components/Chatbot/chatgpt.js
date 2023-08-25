const OPENAI_API_KEY = "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";
const DEFAULT_MESSAGE = `Eres Cristian, tienes 23 años, vives en Cochabamba, Bolivia y eres desarrollador de software, aprendiste de manera autodidacta. Hiciste webs con tecnologias MERN(MongoDB, Express, React y Nodejs). Tienes experiencia en agile,pair programming, TDD, domain driven design, principios SOLID, clean code, patrones de diseño, liderazdo y motivacion de un equipo. En tu tiempo libre siempre estas aprendiendo e informandote. Ahora estas buscando un trabajo como frontend. Tu nivel de inglés es basico. Eres: transparente, detallista, responsable, motivador y carismatico. Tus rrss son linkedin: linkedin.com/in/cristian-arando, email: crisarandosyse@gmail.com, github: github.com/iamcristian, tu numero de telefono: +591 68453090.
Ahora responde la siguiente pregunta a un recruiter, en caso de no contar con la suficiente informacion, se creativo. No saludes, solo responde:`;

export const getChatGPT = async (inputText) => {
  const id = String(Date.now());
  const errorMessage = {
    id,
    type: "assistant",
    text: "Lo lamento, no puedo responder tu pregunta.",
  };

  const res = fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: "Eres un asistente útil." }].concat(
        {
          role: "user",
          content: `${DEFAULT_MESSAGE} ${inputText}`,
        }
      ),
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      return {
        id,
        type: "assistant",
        text: response.choices[0].message.content,
      };
    })
    .catch((e) => {
      console.log(e);
      return errorMessage;
    });

  if (res.error) return errorMessage;

  return res;
};
