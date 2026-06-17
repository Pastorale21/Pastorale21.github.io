---
target: 首页
total_score: 34
p0_count: 0
p1_count: 2
timestamp: 2026-06-17T11-42-22Z
slug: src-pages-index-astro
---
## 首页设计评审 — 喫茶去 (src/pages/index.astro)

### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | 揭示动画期间内容短暂空白；若 JS reveal 不触发则整段空白，无加载指示 |
| 2 | Match System / Real World | 4 | 全中文、措辞自然（近期文章/联系/查看全部），公案开场贴合受众 |
| 3 | User Control and Freedom | 4 | 阅读页无陷阱；链接/返回/搜索 Esc 关闭俱全 |
| 4 | Consistency and Standards | 4 | 设计系统统一；仅 space-y-16(4rem) 与 DESIGN.md 的 3.5rem 轻微出入 |
| 5 | Error Prevention | 3 | 首页几无出错面；n/a 居多 |
| 6 | Recognition Rather Than Recall | 3 | 主导航为文字标签；主题切换为纯图标（有 aria-label） |
| 7 | Flexibility and Efficiency | 3 | 搜索支持 / 与 Cmd/Ctrl-K；首页提供"查看全部"捷径 |
| 8 | Aesthetic and Minimalist Design | 4 | 真正克制、每个元素都有理由；唯"淡灰求雅"使浅色文字过淡 |
| 9 | Error Recovery | 3 | 首页无错误态；404 另有页面 |
| 10 | Help and Documentation | 3 | 阅读站所需极少；公案开场即定位 |
| **Total** | | **34/40** | **Good（良好，处于区间高位）** |

### Anti-Patterns Verdict

**这看起来像 AI 生成的吗？——不像。** 这是本次评审最确定的结论。

- **LLM 评估**：克制、文人气、版式驱动的"标题页"。没有居中英雄区+功能卡片网格、没有渐变强调、没有每段一个的 tracked 小标签、没有卡片堆叠。公案开场 + 近期文章 + 联系的安静三段式有明确 POV。通过品牌 slop 测试。
- **确定性扫描**：`detect.mjs` 对 index.astro 与 PostListItem.astro 返回 `[]`（exit 0），零命中。与人工判断一致。
- **可视化叠层**：本次会话无可用浏览器自动化/运行中的 dev server，未注入叠层；结论基于确定性扫描 + 实测对比度计算，已如实说明。

### Overall Impression
一个气质对、骨架对的页面：安静、温暖、可信，确实像一间茶室。最大的单点机会不是"更好看"，而是**让浅色文字达到可读门槛**——目前的优雅有一部分是靠把文字调淡换来的，而这正是 PRODUCT.md 刚承诺的 WCAG AA 的反面。

### What's Working
1. **不是 slop，且有声音。** 检测器零命中，公案标题页有真实的编辑视角，与同类个人博客拉开距离。
2. **双字重衬线系统 + 单一珊瑚强调。** 层级靠字号与颜色而非假中间字重；强调色珊瑚在奶白上 6.14:1，可达标，只在指尖处出现。
3. **深色模式对比度全档优秀**（/100→15.2:1，/60→6.09:1，/50→4.62:1，均过 AA）。暖白配深炭，长读舒适。

### Priority Issues

- **[P1] 浅色模式的弱化文字不达 WCAG AA**
  - **Why it matters**：实测（基于 ink=oklch(38%) 合成）——首页唯一可见正文"公案简介"`text-black/70` = **4.07:1**（正文需 ≥4.5，不达）；文章摘要 `text-black/60` = **3.18:1**；日期 centered `/45` = **2.27:1**、compact `/50` = **2.52:1**。这是标题页的主文案与每条文章的摘要/日期，恰好踩中"用淡灰求优雅"的最常见可读性陷阱，且与 PRODUCT.md 的 AA 承诺直接冲突。深色模式不受影响。
  - **Fix**：浅色档位整体上移——简介升到 ink 实色或 `/90`；摘要升到约 `/75`（≈4.5:1）；日期升到 `/65` 左右。深色档位可保留。亦可在 DESIGN.md 把"摘要 Ink/60、日期 Ink/45"修订为达标值，避免系统继续固化该失败。
  - **Suggested command**：`/impeccable audit 首页`（a11y/对比度）

- **[P1] 首页主内容被 JS 揭示动画"门控"，且无减弱动效兜底**
  - **Why it matters**：`.animate` 初始为 `opacity-0 -translate-y-3`，靠 Head.astro 的 `animate()` 用 setTimeout 逐个加 `.show` 才显形。包裹的是**近期文章列表（首页主内容）**与联系区。`<noscript>` 只兜住"禁用 JS"；兜不住 JS 报错、后台标签 setTimeout 节流、爬虫/无头渲染——这些情况下主内容会以空白出货。违反"揭示动画必须增强一个本就可见的默认态"。其次，全站 `grep` 无 `prefers-reduced-motion`，减弱动效用户仍吃到位移+淡入，与刚写入的"AA + 尊重减弱动效"承诺冲突。
  - **Fix**：默认可见，把动画做成增强（如用 IntersectionObserver 且初始不隐藏，或仅在 `(prefers-reduced-motion: no-preference)` 下应用初始隐藏类）；并补 `@media (prefers-reduced-motion: reduce)` 下退化为即时显示。
  - **Suggested command**：`/impeccable animate 首页`

- **[P2] 9 条"featured"稀释了"精选/策展"的本意**
  - **Why it matters**：`NUM_POSTS_ON_HOMEPAGE: 9`，每条都是 centered + text-2xl 标题 + 封面 + 摘要的大尺寸 featured 处理，叠成很长的居中滚动列。DESIGN.md 把首页定义为"curated 精选 feed"——9 条同级大卡时，"精选"不再是精选。
  - **Fix**：首页精选收到 3–5 条，其余交给 `/blog` 归档；或为首条做真正的头条差异化、其余降为紧凑列表。
  - **Suggested command**：`/impeccable layout 首页`

- **[P2] 居中的多行摘要降低可扫读性**
  - **Why it matters**：根容器 `text-center` 使两行中文摘要也居中。居中正文超过一行后行首参差，扫读成本上升，且与"安静从容的长读"目标相悖。
  - **Fix**：标题保持居中，日期与摘要改左对齐（或限一行）；保留 featured 的留白与封面居中。
  - **Suggested command**：`/impeccable layout 首页`

- **[P3] 间距 token 漂移**：首页 `space-y-16`(4rem) 与 DESIGN.md 规定的 featured 3.5rem 不一致。统一即可。

### Persona Red Flags

**Sam（依赖无障碍）**：浅色模式下简介 4.07:1、摘要 3.18:1、日期 2.27:1 均不达 AA，低视力用户费力；无 `prefers-reduced-motion` 替代，前庭敏感用户被迫看位移动画；若揭示脚本不触发，屏幕阅读器之外的视觉用户可能看到空白主区。

**沉思的读者（项目专属，源自 PRODUCT.md "安静从容的长读"）**：摘要/日期过淡，长时间阅读列表时眼睛吃力，与"被尊重的安静阅读"体验相悖；这是把"优雅"误投到"更淡"上的代价。

**Casey（分心的移动端用户）**：9 条大 featured 在窄屏上是很长的居中滚动，拇指要多次滑动才到"查看全部"；触控目标本身（整条 `<a>`）够大，无虞；对比度问题在小屏强光下更明显。

### Minor Observations
- 首页 `<h1>` 为 `sr-only`，可见首个标题是 h2「近期文章」——对屏幕阅读器有 h1，结构成立；视觉品牌名由页眉 masthead 承担，符合"标题页"意图。
- 强调色链接对比度 6.14:1，达标，无需改动。

### Questions to Consider
- 若把浅色文字调到达标，"安静"会受损吗？（深色模式已证明高对比也能很安静——对比来自明度差，气质来自字体与留白。）
- 首页真的需要 9 条同级精选，还是 1 条头条 + 几条次级更像"策展"？
- 揭示动画为页面增加了什么？如果默认就可见，它还值得保留吗，或只在首屏做一次更克制的编排？
