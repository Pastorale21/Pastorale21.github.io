# 给 Claude Code 的实现指令 —— 首页「喫茶去」茶印交互

复制下面整段发给 Claude Code（在你本地 `Pastorale21.github.io` 仓库里运行）。
同一目录下的两个文件 `TeaSeal.astro` 和 `tea-works.js` 一起放进去。

---

## 任务

把一个「喫茶去」茶印交互加到网站首页。访客点击一枚陶土红的「茶」印，会以
墨迹显影动效随机斟出我 Apple Music 资料库里的一首作品（作曲家/艺人、曲名、
演奏版本、流派），并提供一个**精准的 Apple Music 专辑链接**（运行时通过
iTunes Search API 解析，结果缓存到 localStorage，解析失败时回退搜索链接）。
无需 React，纯 Astro + 原生 JS。

## 我提供的文件（与本指令同目录）

- `TeaSeal.astro` —— 组件本体（含 markup / scoped 样式 / 客户端脚本）。
- `tea-works.js` —— 数据模块，`export const works = [...]`，60 首跨流派作品，
  由我的 Apple Music 资料库挖掘而来。

## 实现步骤

1. **放置组件**
   - 把 `TeaSeal.astro` 放到 `src/components/`。
   - 把 `tea-works.js` 放到 `src/components/`（与组件同级；组件用
     `import { works } from './tea-works.js'`）。

2. **接入首页** `src/pages/index.astro`
   - `import TeaSeal from '../components/TeaSeal.astro'`
   - 现在首页顶部是那段 Keats 题词（epigraph）。**把茶印放在「近期文章」
     列表正上方**。关于题词：我已把它移到了入场屏保（EntranceEpigraph），
     所以首页正文里**原来的静态 epigraph 区块可以删掉**，由 `<TeaSeal />`
     取代——请确认首页不再出现重复的 Keats 引文。

3. **适配设计 token（重要）**
   组件默认用我设计系统的变量名，其中两个和本仓库的 `global.css` 不一致，
   请在 `TeaSeal.astro` 里改一下：
   - 把组件样式里的 `var(--font-serif, …)` 全部换成 `var(--font-sans, …)`
     （本站正文字体 token 是 `--font-sans`）。
   - 组件用到 `--text-muted`（演奏者那行），本站 `global.css` 没有这个 token。
     请在 `global.css` 的 `:root` 和 `.dark` 各加一条**桥接 token**，紧挨现有的
     `--text-strong` / `--text-quiet`：
     ```css
     :root { --text-muted: color-mix(in oklab, var(--color-black) 82%, var(--color-neutral-100)); }
     .dark { --text-muted: color-mix(in oklab, var(--color-white) 75%, var(--color-neutral-900)); }
     ```
   - 其余变量（`--accent` / `--surface-page` / `--text-strong` / `--text-quiet`
     / `--font-display` / `--font-charter`）本站已有，直接生效，深浅色自动跟随。

4. **验证**
   - `pnpm dev`（或 `npm run dev`），打开首页：
     - 点茶印 → 墨迹显影斟出一首作品；「再斟一首」可换下一首。
     - 「在 Apple Music 听」初始是搜索链接，约 1 秒后应自动变成精准专辑链接
       （如 `music.apple.com/us/album/.../<id>`）；刷新后命中缓存即时生效。
     - 切换深色模式，文字、印章、链接都应清晰可读（用的是站点语义 token）。
     - 减弱动效（prefers-reduced-motion）下不放动画，但内容照常显示。

## 注意

- 作品数据想增删，直接改 `tea-works.js` 的 `works` 数组即可（字段：
  `composer / title / op / perf / genre`，`minutes` 仅供参考，组件不使用）。
- iTunes Search API 是匿名 JSONP，无需密钥；个别冷门作品可能匹配不到，
  此时保留搜索链接兜底，属预期行为。
- 链接是 `/us/` 全球目录 ID，登录用户会自动跳转到自己所在区。
