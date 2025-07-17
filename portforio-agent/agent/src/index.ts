import { VoltAgent, Agent, createTool } from "@voltagent/core";
import { VercelAIProvider } from "@voltagent/vercel-ai";

import { openai } from "@ai-sdk/openai";
import { z } from "zod";

const getQiitaUserInfo = createTool({
  name: "getQiitaUserInfo",
  description: "QittaUserの情報を取得する",
  parameters: z.object({
    userId: z.string().describe("QiitaユーザーID"),
  }),
  execute: async ({ userId }) => {
    const accessToken = process.env.QIITA_API_KEY;
    const response = await fetch(`https://qiita.com/api/v2/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data =  await response.json();
    return data;
  },
});

const agent = new Agent({
  name: "qitta-agent",
  instructions: `ユーザーからQiitaユーザーIDを受け取ったら、ユーザーの情報を取得してください。`,
  parameters: z.object({
    userId: z.string().describe("QiitaユーザーID"),
  }),
  llm: new VercelAIProvider(),
  model: openai("gpt-4o-mini"),
  tools: [
    getQiitaUserInfo,
  ],
});

new VoltAgent({
  agents: {
    agent,
  },
});