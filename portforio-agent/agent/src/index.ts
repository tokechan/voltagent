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


const getQiitaUserItems = createTool({
  name: "getQiitaUserItems",
  description: "QiitaユーザーIDを指定して、そのユーザーの投稿記事を取得する最大30件まで取得可能です。記事のタイトル、URL、いいね数、ストック数、閲覧数、タグ、作成日を返します。",
  parameters: z.object({
    userId: z.string().describe("記事一覧を取得したいQitaユーザーのID"),
  }),
  execute: async ({ userId }) => {
    const accessToken = process.env.QIITA_API_KEY;
    const response = await fetch(`https://qiita.com/api/v2/users/${userId}/items?per_page=1`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    return data.map((item: any) => ({
      title: item.title,
      url: item.url,
      likes: item.likes_count,
      stocks: item.stocks_count,
      views: item.page_views_count,
    }));
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
    getQiitaUserItems,
  ],
});

new VoltAgent({
  agents: {
    agent,
  },
});