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
