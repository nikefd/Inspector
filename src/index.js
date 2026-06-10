/**
 * Claude Inspector — Cloudflare Worker（纯静态资源）
 *
 * 这是一个【离线解析】工具：所有解析都在浏览器里完成，
 * 不向任何上游发请求、不需要 API Key。Worker 只负责把 public/ 下的
 * 前端页面交给静态资源服务。
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
