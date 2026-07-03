export type Lang = 'en' | 'zh'
export type Bi = { en: string; zh: string }
export const bi = (en: string, zh: string): Bi => ({ en, zh })

export const copy = {
  en: {
    nav: ['Overview', 'Market', 'Product', 'Customers', 'Economics', 'Financing'],
    eyebrow: 'INVESTOR BUSINESS PLAN', title: 'Vision that Learns on the Edge',
    intro: 'Integrated, plug-and-play robotics intelligence that self-improves over time.',
    view: 'View the business plan', contact: 'Start a discussion',
    overview: 'Company overview', overviewTitle: 'Building the visual navigation perception module for autonomous robots',
    overviewText: 'EcloVision integrates perception, localization, mapping and planning on the edge, with continual learning driven by field data.',
    team: 'Core team', teamTitle: 'Robotics & AI Research and Development Experience',
    market: 'Market opportunity', marketTitle: 'A large cleaning robot market with fast-growing outdoor categories',
    marketText: 'The BP identifies smart vacuum as the volume anchor, while lawn mower robotics is the fastest-growing major category.',
    stack: 'Autonomy stack', stackTitle: 'Core capabilities of robots',
    problem: 'Pain points', problemTitle: 'High hardware and R&D cost, with limited self-learning',
    data: 'Data loop', dataTitle: 'Resource-intensive data collection remains a bottleneck',
    product: 'Product', productTitle: 'Visual navigation perception module',
    customers: 'Potential customers', customersTitle: 'Initial customer and partner landscape',
    comparison: 'Competitive comparison', comparisonTitle: 'Integrated capability at lower price points',
    economics: 'Unit economics', economicsTitle: 'Lower cost enables scalability',
    cost: 'Cost advantages', costTitle: 'Three product tiers for different compute requirements',
    financing: 'Financing plan', financingTitle: 'Milestone-driven path from product validation to batch production',
    original: 'Original BP visual — retained to preserve data, annotations and source context.',
    closing: 'Integrated, plug-and-play robotics intelligence that self-improves over time',
    closingText: 'EcloVision is developing the edge intelligence layer for robot perception, localization and planning.',
    confidential: 'Based on EcloVision BP V3 · Investor material'
  },
  zh: {
    nav: ['概览', '市场', '产品', '潜在客户', '单位经济', '融资计划'],
    eyebrow: '投资人商业计划书', title: '在边缘端持续学习的机器人视觉智能',
    intro: '集成式、可插拔、可持续自我进化的机器人边缘智能模块。',
    view: '查看商业计划', contact: '联系洽谈',
    overview: '公司概览', overviewTitle: '为自主机器人构建视觉导航感知模块',
    overviewText: 'EcloVision 在边缘端集成感知、定位、建图与规划，并通过现场数据驱动持续学习。',
    team: '核心团队', teamTitle: '机器人与人工智能研发经验',
    market: '市场机会', marketTitle: '规模庞大的清洁机器人市场与快速增长的户外品类',
    marketText: 'BP 将扫地机器人视为规模基本盘，同时指出割草机器人是增长最快的主要品类。',
    stack: '自主能力栈', stackTitle: '机器人的核心能力',
    problem: '行业痛点', problemTitle: '硬件与研发成本高，且缺乏持续自学习能力',
    data: '数据闭环', dataTitle: '高资源消耗的数据采集仍是关键瓶颈',
    product: '产品', productTitle: '视觉导航感知模块',
    customers: '潜在客户', customersTitle: '初始客户与合作伙伴版图',
    comparison: '竞品对比', comparisonTitle: '以更低价格提供集成式能力',
    economics: '单位经济', economicsTitle: '更低成本推动规模化部署',
    cost: '成本优势', costTitle: '面向不同算力需求的三档产品方案',
    financing: '融资计划', financingTitle: '从产品验证到批量生产的里程碑路径',
    original: '原始 BP 视觉——保留完整数据、标注与来源语境。',
    closing: '集成式、可插拔、可持续自我进化的机器人智能',
    closingText: 'EcloVision 正在构建面向机器人感知、定位与规划的边缘智能层。',
    confidential: '基于 EcloVision BP V3 · 投资人材料'
  }
} as const

export const customers = [
  { en: 'Guangzhou Lanhai Robot System', zh: '广州蓝海机器人系统有限公司', domain: bi('Commercial Cleaning Robots', '商用清洁机器人') },
  { en: 'Shenzhen Mowrator', zh: '深圳纵贯创新有限公司', domain: bi('Lawn Mower Robots', '割草机器人') },
  { en: 'Shenzhen Mammotion', zh: '深圳库犸科技有限公司', domain: bi('Lawn Mower Robots / Pool Cleaning Robots', '割草机器人 / 泳池清理机器人') },
  { en: 'Shenzhen Camsense', zh: '深圳欢创科技有限公司', domain: bi('LiDAR Solution Provider', '激光雷达解决方案供应商') },
]

export const team = [
  {
    name: 'Dr. Zhang Dongshuo', role: bi('CEO & CTO', '首席执行官兼首席技术官'), image: 'zhang-dongshuo.png',
    points: [
      bi('PhD in Robotics from CCDS, NTU', '南洋理工大学 CCDS 机器人学博士'),
      bi('12+ years robotics R&D experience', '12+ 年机器人研发经验'),
      bi('6+ years industry experience (Sony, DJI, Camsense)', '6+ 年产业经验（Sony、DJI、Camsense）'),
      bi('6+ years robotics research experience (NTU, HKUST, CUHK)', '6+ 年机器人科研经验（NTU、HKUST、CUHK）'),
    ]
  },
  {
    name: 'Miyuru Thathsara', role: bi('Chief Scientist', '首席科学家'), image: 'miyuru-thathsara.png',
    points: [
      bi('PhD student in Robotics, CCDS, NTU (Final Year)', '南洋理工大学 CCDS 机器人学博士生（最后一年）'),
      bi('4 years robotics R&D experience', '4 年机器人研发经验'),
      bi('1 year industry experience (LSEG Technologies)', '1 年产业经验（LSEG Technologies）'),
    ]
  },
  {
    name: 'Lin Peiyi', role: bi('Chief Scientist', '首席科学家'), image: 'lin-peiyi.png',
    points: [
      bi('Master student in Robotics, CCDS, NTU', '南洋理工大学 CCDS 机器人学硕士生'),
      bi('Awardee of China Undergraduate Mathematical Contest in Modeling', '全国大学生数学建模竞赛获奖者'),
      bi('Awardee of ASC Student Supercomputer Challenge', 'ASC 大学生超级计算机竞赛获奖者'),
    ]
  },
  {
    name: 'Prof. Lam Siew Kei', role: bi('Scientific Advisor', '科学顾问'), image: 'lam-siew-kei.png',
    points: [
      bi('Associate Professor, CCDS, NTU', '南洋理工大学 CCDS 副教授'),
      bi('Expertise in Edge AI for Robotics', '机器人边缘 AI 专家'),
      bi('15+ years working with industries and government agencies to develop prototypes, proof-of-concepts, and field trials', '15+ 年产业与政府机构合作经验，涵盖原型、概念验证及现场试验'),
    ]
  },
]

export const marketMetrics = [
  { value:'32.72M', unit:bi('units','台'), label:bi('Global cleaning robot shipments, 2025','2025 年全球清洁机器人出货量'), note:bi('+20.1% YoY','同比 +20.1%'), source:'IDC' },
  { value:'$9.31B', unit:'', label:bi('Global robot vacuum market value, 2024','2024 年全球扫地机器人市场规模'), note:bi('Market value','市场规模'), source:'IDC' },
  { value:'24.12M', unit:bi('units','台'), label:bi('Smart vacuum shipments, 2025','2025 年智能扫地机器人出货量'), note:bi('+17.1% YoY','同比 +17.1%'), source:'IDC' },
  { value:'23.7%', unit:'CAGR', label:bi('Estimated cleaning robot market growth, 2025–2030','2025–2030 年清洁机器人市场预计增速'), note:bi('Estimated growth','预计增速'), source:'Grand View Research' },
]

export const robotCategories = [
  { name:bi('Smart Vacuum / Mop','智能扫地 / 拖地机器人'), value:'24.12M', note:bi('units in 2025','2025 年出货量'), text:bi('Largest category and core household cleaning segment','最大品类及家庭清洁核心市场') },
  { name:bi('Lawn Mower Robotics','割草机器人'), value:'1.99M', note:'+63.8% YoY', text:bi('Fastest outdoor growth driven by cordless / wire-free upgrades','由无线化升级驱动、增长最快的户外品类') },
  { name:bi('Window Cleaning Robots','擦窗机器人'), value:'2.37M', note:'+70.4% YoY', text:bi('Rapid adoption in urban residential use','在城市住宅场景中快速普及') },
  { name:bi('Pool Cleaning Robots','泳池清洁机器人'), value:bi('Steady','稳定'), note:bi('Niche market','细分市场'), text:bi('Stable niche with growing cordless penetration','稳定细分市场，无线产品渗透率持续提升') },
]

export const shipmentTrend = [
  { period:'2024 H2', shipments:10.0, lawn:63.8, window:50 },
  { period:'2025 H1', shipments:11.2, lawn:85, window:70 },
  { period:'2025 H2', shipments:13.0, lawn:45, window:35 },
]

export const topVendors = [
  { rank:1, name:'Roborock', shipments:'5.8M', share:'17.7%' },
  { rank:2, name:'ECOVACS', shipments:'4.7M', share:'14.3%' },
  { rank:3, name:'Dreame', shipments:'3.4M', share:'10.5%' },
  { rank:4, name:'Xiaomi', shipments:'2.2M', share:'6.7%' },
  { rank:5, name:'Narwal', shipments:'1.7M', share:'5.3%' },
]

export const regions = [
  { name:bi('Europe','欧洲'), stat:'~+16%', text:bi('Growth in 2024 · Mature premium market','2024 年增长 · 成熟高端市场') },
  { name:bi('Americas','美洲'), stat:'~-1%', text:bi('Growth in 2024 · Softer demand versus Europe / APAC','2024 年增长 · 需求弱于欧洲 / 亚太') },
  { name:bi('China / APAC','中国 / 亚太'), stat:'5.389M', text:bi('China robot vacuum shipments in 2024 (+6.7% YoY); APAC ~+16% growth','2024 年中国扫地机器人出货量（同比 +6.7%）；亚太增长约 +16%') },
  { name:bi('Emerging Markets / Other Regions','新兴市场 / 其他地区'), stat:bi('Long-term','长期增长'), text:bi('Smaller base, faster long-term adoption potential','基数较小，长期普及潜力更高') },
]

export const vacuumShares = [
  { year:'2023', values:[14.7,15.1,5.5,9.2,3.7,50.8] },
  { year:'2024', values:[16.0,13.5,8.0,9.7,6.6,46.3] },
  { year:'2025', values:[24.1,13.8,13.5,9.1,7.3,32.2] },
]
export const vacuumBrands = ['Roborock','Ecovacs','Dreame','Xiaomi','Narwal','Others']

export const outlookMetrics = [
  { value:'24.12M', label:bi('Smart vacuum shipments, 2025','2025 年智能扫地机器人出货量'), note:bi('+17.1% YoY / 74% of total cleaning robot shipments','同比 +17.1% / 占清洁机器人总出货量 74%') },
  { value:'1.99M', label:bi('Lawn mower robot shipments, 2025','2025 年割草机器人出货量'), note:bi('+63.8% YoY / fastest-growing major category','同比 +63.8% / 增长最快的主要品类') },
  { value:'1.32M', label:bi('Wire-free lawn mower shipments','无线割草机器人出货量'), note:bi('66.2% of market / +182.4% YoY','占市场 66.2% / 同比 +182.4%') },
  { value:'+95.6% / +40.3%', label:bi('Fastest smart vacuum regional growth','智能扫地机器人增长最快的区域'), note:bi('Middle East & Africa / Central & Eastern Europe','中东和非洲 / 中东欧') },
]

export const marketSignals = [
  bi('Chinese brands lead innovation and scale across smart vacuum and adjacent cleaning categories.','中国品牌在智能扫地及相邻清洁品类中引领创新与规模化。'),
  bi('Niche segments such as lawn mower and pool cleaning robotics remain in competitive flux.','割草与泳池清洁机器人等细分市场仍处于竞争格局变化期。'),
  bi('AI is the long-term moat: obstacle avoidance, path planning, adaptive cleaning, and human–machine interaction.','AI 是长期护城河：障碍物规避、路径规划、自适应清洁与人机交互。'),
]

export const comparison = [
  { company:'GZ Hessian-Matrix', product:'RoboBaton MINI / RoboBaton VIOBOT2', cpu:'Cortex-A76*4 + Cortex-A55*4', gpu:'Mali-G610 MC4 + 6 TOPS', fn:bi('Localization / Mapping / Planning','定位 / 建图 / 规划'), price:'S$999' },
  { company:'BJ Human+', product:'司眸 X-Mini (Dec 25)', cpu:'–', gpu:'–', fn:bi('Obstacle Detection / Perception','障碍物检测 / 感知'), price:'–' },
  { company:'GZ DeepMirror', product:'Insight 9 (Feb 26)', cpu:'–', gpu:'–', fn:bi('Localization','定位'), price:'–' },
  { company:'Ours', product:'Edge Robotics Intelligence', cpu:'Cortex-A72*4 + Cortex-A53*4', gpu:'– / 6 TOPS', fn:bi('Obstacle Detection / 3D Perception','障碍物检测 / 3D 感知'), price:'S$149', ours:true },
  { company:'Ours', product:'Edge Robotics Intelligence', cpu:'Cortex-A76*4 + Cortex-A55*4', gpu:'Mali-G610 MC4 + 6 TOPS', fn:bi('Localization / Planning / Data-Driven Continual Self-Learning','定位 / 规划 / 数据驱动持续自学习'), price:'S$199', ours:true },
  { company:'Ours', product:'Edge Robotics Intelligence', cpu:'Cortex-A78AE*6', gpu:'1024-core NVIDIA GPU (40 TOPS)', fn:bi('Integrated robotics intelligence','集成式机器人智能'), price:'S$299', ours:true },
]

export const unitRanges = [
  { label:bi('Competitor range','竞品价格区间'), value:'US$272–599' },
  { label:bi('Alternative range','替代方案区间'), value:'US$145–290*' },
  { label:bi('Our range','我们的价格区间'), value:'US$149–299', ours:true },
]

export const costCards = [
  { name:'RK3576', rmb:'RMB 682', usd:'USD 99' },
  { name:'RK3588', rmb:'RMB 1,160', usd:'USD 165' },
  { name:'RK3588 + HAILO-8', rmb:'< RMB 2,500', usd:'26 TOPS' },
  { name:'NVIDIA Jetson Orin Nano', rmb:'Reference platform', usd:'NVIDIA GPU' },
]
