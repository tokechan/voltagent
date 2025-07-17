import { VoltAgent, Agent, createTool } from "@voltagent/core";
import { VercelAIProvider } from "@voltagent/vercel-ai";

import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { getQiitaUserInfo, getQiitaUserItems } from "./tools/qitta.js";


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
    getQiitaUserItems,
  ],
});

new VoltAgent({
  agents: {
    agent,
  },
});