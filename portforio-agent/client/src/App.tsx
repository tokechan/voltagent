import { Button } from "./components/ui/button";
import { useState } from "react";



function App() {
  const [portfolio, setPortfolio] = useState<string>("");
  
  const generatePortfolio = async (qiitaId: string, githubId: string) => {
    const response = await fetch(
      "http://localhost:3141/agents/main-agent/text",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: `Qiita ID: ${qiitaId} \n GitHub ID: ${githubId}`,
          options: {
            userId: "unique-user-id",
            conversationId: "unique-conversation-id",
            contextLimit: 10,
            temperature: 0.7,
            maxTokens: 100,
          },
        }),
      }
    );

    const res = (await response.json()) as {
      data: { provider: { text: string } };
    };

    return res.data.provider.text;
  };

  const handleGeneratePortfolio = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const qiitaId = e.currentTarget.qiitaId.value;
    const githubId = e.currentTarget.githubId.value;

    const portfolio = await generatePortfolio(qiitaId, githubId);
    setPortfolio(portfolio);
  }
  return (
    <div>
      <form onSubmit={handleGeneratePortfolio}>
        <input type="text" name="qiitaId" placeholder="Qiita ID" />
        <input type="text" name="githubId" placeholder="GitHub ID" />
        <Button type="submit">Click me</Button>
        </form>
        <div>{portfolio}</div>
    </div>
  );
}

export default App;