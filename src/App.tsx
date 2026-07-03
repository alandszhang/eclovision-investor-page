import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { ArrowRight, BrainCircuit, Camera, Check, ChevronRight, CircleDollarSign, Cpu, Database, Globe2, Layers3, Map, Menu, Navigation, Network, PlugZap, Radar, Rocket, Route, ScanLine, Sparkles, Target, TrendingDown, X, Zap } from 'lucide-react'

type Lang = 'en' | 'zh'
type Bi = { en: string; zh: string }
const bi = (en: string, zh: string): Bi => ({ en, zh })

const translations = {
  en: {
    nav: ['Problem','Solution','Product','Customers','Economics'], view: 'View business plan', contact: 'Contact us',
    heroKicker: 'THE INTELLIGENCE LAYER FOR MOBILE ROBOTS', heroTitle: 'Vision that learns', heroAccent: 'on the edge.',
    tagline: 'Plug-and-play robotics intelligence for low-cost, self-improving edge robots.', heroNote: 'Perception · Localization · Planning · Continual learning',
    market: 'WHY NOW', problemTitle: 'Robots are ready to scale. Their intelligence stack is not.', problemSub: 'Today’s autonomy stack remains expensive, fragmented and static — slowing the path from prototype to fleet.',
    solutionKicker: 'ONE MODULE. A COMPLETE LOOP.', solutionTitle: 'Integrated edge robotics intelligence', solutionSub: 'A compact module that turns sensor input into action — and field experience into measurable improvement.',
    productKicker: 'PRODUCT', productTitle: 'Built to integrate fast. Designed to improve continuously.', productSub: 'A production-ready intelligence layer for commercial cleaning, lawn care, pool cleaning and other mobile robots.',
    customersKicker: 'EARLY MARKET', customersTitle: 'High-fit customer pathways', customersSub: 'Focused on OEMs and solution partners already shipping autonomous mobile products.',
    compKicker: 'COMPETITIVE POSITION', compTitle: 'More capability at a deployable price', compSub: 'EcloVision combines perception and navigation with a continual-learning data loop — across three hardware tiers.',
    costKicker: 'COST ADVANTAGE', costTitle: 'Lower cost unlocks fleet-scale deployment', costSub: 'Edge hardware options span efficient Rockchip platforms through high-performance NVIDIA compute.',
    unitKicker: 'UNIT ECONOMICS', unitTitle: 'Priced for integration, not experimentation', unitSub: 'EcloVision targets the practical middle: full-stack intelligence at a fraction of incumbent module pricing.',
    valueKicker: 'BUSINESS VALUE', valueTitle: 'A compounding advantage in every deployment',
    fundingKicker: 'FINANCING ROADMAP', fundingTitle: 'Capital-efficient path from pilot to production', fundingSub: 'A staged plan to validate the product, secure lighthouse customers and scale batch production.',
    ctaTitle: 'Building the intelligence layer for scalable edge robots', ctaSub: 'EcloVision enables robots to perceive, localize, plan and improve directly on the edge.', demo: 'Request demo',
    source: 'Based on EcloVision BP V3 · Confidential investor overview', scroll: 'Explore the plan'
  },
  zh: {
    nav: ['市场痛点','解决方案','产品','潜在客户','单位经济'], view: '查看商业计划', contact: '联系我们',
    heroKicker: '面向移动机器人的智能层', heroTitle: '在边缘端持续学习的', heroAccent: '机器人视觉智能。',
    tagline: '面向低成本、自进化边缘机器人的可插拔智能模块。', heroNote: '感知 · 定位 · 规划 · 持续学习',
    market: '市场机遇', problemTitle: '机器人已准备规模化，智能栈却仍未就绪。', problemSub: '当前自主系统成本高、能力碎片化且无法持续学习，拖慢了从原型验证到规模部署的进程。',
    solutionKicker: '一个模块，完整闭环', solutionTitle: '集成式边缘机器人智能', solutionSub: '用紧凑模块将传感器输入转化为机器人动作，并将现场经验转化为可量化的持续优化。',
    productKicker: '产品', productTitle: '快速集成，为持续进化而设计。', productSub: '面向商用清洁、割草、泳池清理及其他移动机器人的量产级智能层。',
    customersKicker: '早期市场', customersTitle: '高契合度客户路径', customersSub: '聚焦已在交付自主移动产品的整机厂商与解决方案合作伙伴。',
    compKicker: '竞争定位', compTitle: '以可部署的价格提供更完整的能力', compSub: 'EcloVision 将感知、导航与持续学习数据闭环结合，并提供三档硬件方案。',
    costKicker: '成本优势', costTitle: '更低成本推动机器人规模化部署', costSub: '从高效的瑞芯微平台到高性能 NVIDIA 算力，覆盖不同机器人的成本与性能需求。',
    unitKicker: '单位经济模型', unitTitle: '为规模集成定价，而非停留在试验阶段', unitSub: 'EcloVision 瞄准最具落地价值的区间：以显著低于传统模块的价格提供全栈智能。',
    valueKicker: '商业价值', valueTitle: '每一次部署都在积累复利优势',
    fundingKicker: '融资路线', fundingTitle: '从试点到量产的资本高效路径', fundingSub: '分阶段完成产品验证、标杆客户落地与批量生产。',
    ctaTitle: '构建面向规模化边缘机器人的智能层', ctaSub: 'EcloVision 让机器人在边缘端完成感知、定位、规划与持续优化。', demo: '申请演示',
    source: '基于 EcloVision BP V3 · 投资人机密概览', scroll: '浏览商业计划'
  }
} as const

const problems = [
  { icon: CircleDollarSign, t: bi('Perception is expensive','感知模块成本高'), d: bi('Premium hardware and long R&D cycles inflate the bill of materials.','高价硬件与漫长研发周期共同推高整机成本。') },
  { icon: Layers3, t: bi('The stack is fragmented','能力栈碎片化'), d: bi('Perception, localization, mapping and planning arrive as separate pieces.','感知、定位、建图与规划往往来自不同系统。') },
  { icon: BrainCircuit, t: bi('Intelligence stays static','智能无法进化'), d: bi('Most deployed systems do not learn from edge cases encountered in the field.','多数已部署系统无法从现场长尾场景中持续学习。') },
  { icon: TrendingDown, t: bi('Cost blocks scale','成本限制规模'), d: bi('Expensive modules make fleet economics difficult for price-sensitive robots.','昂贵模块让价格敏感型机器人的规模经济难以成立。') },
]
const capabilities = [bi('Obstacle detection','障碍物检测'),bi('3D perception','3D 感知'),bi('Localization','定位'),bi('Mapping','建图'),bi('Path planning','路径规划'),bi('Continual learning','持续学习')]
const productBenefits = [
  { icon: Cpu, t: bi('Edge-native','原生边缘部署'), d: bi('Runs where latency, privacy and reliability matter.','兼顾低延迟、隐私与系统可靠性。') },
  { icon: PlugZap, t: bi('Plug-and-play','即插即用'), d: bi('A unified interface reduces integration work.','统一接口显著降低客户集成工作量。') },
  { icon: Network, t: bi('Full autonomy stack','完整自主能力栈'), d: bi('Perception, localization and planning in one layer.','将感知、定位与规划集成在同一层。') },
  { icon: Sparkles, t: bi('Self-improving','持续自我优化'), d: bi('Field data feeds an iterative learning loop.','现场数据驱动持续迭代的学习闭环。') },
]
const customers = [
  { n: bi('Guangzhou Lanhai Robot System','广州蓝海机器人系统有限公司'), b: bi('Commercial cleaning robots','商用清洁机器人'), v: bi('Integrated navigation stack for faster OEM deployment','以一体化导航能力加快整机落地') },
  { n: bi('Shenzhen Mowrator','深圳纵贯创新有限公司'), b: bi('Lawn mower robots','割草机器人'), v: bi('Robust outdoor perception and continual adaptation','强化户外感知与环境持续适应') },
  { n: bi('Shenzhen Mammotion','深圳库犸科技有限公司'), b: bi('Lawn mower & pool cleaning robots','割草机器人 / 泳池清理机器人'), v: bi('Reusable intelligence across multiple robot categories','跨品类复用统一智能平台') },
  { n: bi('Shenzhen Camsense','深圳欢创科技有限公司'), b: bi('LiDAR solution provider','激光雷达解决方案供应商'), v: bi('Sensor-to-intelligence solution partnership','形成传感器到智能模块的联合方案') },
]
const competitors = [
  { name:'GZ Hessian-Matrix', product:'RoboBaton MINI / VIOBOT2', cpu:'Cortex-A76 ×4 + A55 ×4', accel:'Mali-G610 MC4 · 6 TOPS', fn:bi('Localization · Mapping · Planning','定位 · 建图 · 规划'), point:bi('Navigation module','导航模块'), price:'S$999' },
  { name:'BJ Human+', product:'X-Mini', cpu:'—', accel:'—', fn:bi('Obstacle detection · Perception','障碍物检测 · 感知'), point:bi('Compact perception','紧凑型感知'), price:'—' },
  { name:'GZ DeepMirror', product:'Insight 9', cpu:'—', accel:'—', fn:bi('Localization','定位'), point:bi('Visual localization','视觉定位'), price:'—' },
  { name:'EcloVision', product:'Edge Intelligence Module', cpu:'A72/A53 · A76/A55 · A78AE', accel:'6 TOPS · 40 TOPS', fn:bi('Detection · 3D · Localization · Planning · Learning','检测 · 3D · 定位 · 规划 · 学习'), point:bi('Integrated + self-improving','一体化 + 自我进化'), price:'S$149 / 199 / 299', ours:true },
]
const costData = [
  { name:'RK3576', usd:99, note:'RMB 682' }, { name:'RK3588', usd:165, note:'RMB 1,160' }, { name:'RK3588 + HAILO-8', usd:345, note:'< RMB 2,500' }, { name:'Jetson Orin Nano', usd:499, note:'Reference' },
]
const values = [
  { icon: CircleDollarSign, t:bi('Lower hardware cost','降低硬件成本'), d:bi('Flexible compute tiers protect target margins.','灵活算力档位保障目标利润空间。') },
  { icon: Zap, t:bi('Faster integration','加快客户集成'), d:bi('One module replaces a fragmented toolchain.','一个模块替代碎片化工具链。') },
  { icon: Rocket, t:bi('Scalable deployment','支持规模部署'), d:bi('Economics work from pilot units to fleets.','从试点到机器人集群均具备经济性。') },
  { icon: Database, t:bi('Data compounding','数据持续增值'), d:bi('Every field deployment improves future performance.','每次现场部署都在提升未来性能。') },
]

function App() {
  const [lang,setLang] = useState<Lang>('en'); const [menu,setMenu] = useState(false); const t=translations[lang]; const tx=(x:Bi)=>x[lang]
  return <div className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#122038]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-8 place-items-center rounded-lg bg-blue-500"><ScanLine size={18}/></span>EcloVision</a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">{['problem','solution','product','customers','economics'].map((id,i)=><a key={id} href={'#'+id} className="transition hover:text-white">{t.nav[i]}</a>)}</nav>
        <div className="flex items-center gap-2"><div className="flex rounded-full border border-white/15 bg-white/5 p-1 text-xs"><button onClick={()=>setLang('zh')} className={`rounded-full px-3 py-1.5 transition ${lang==='zh'?'bg-white text-slate-900':'text-slate-300'}`}>中文</button><button onClick={()=>setLang('en')} className={`rounded-full px-3 py-1.5 transition ${lang==='en'?'bg-white text-slate-900':'text-slate-300'}`}>English</button></div><button onClick={()=>setMenu(!menu)} className="p-2 lg:hidden">{menu?<X/>:<Menu/>}</button></div>
      </div>{menu&&<div className="border-t border-white/10 px-5 py-4 lg:hidden">{['problem','solution','product','customers','economics'].map((id,i)=><a onClick={()=>setMenu(false)} key={id} href={'#'+id} className="block py-2 text-sm text-slate-300">{t.nav[i]}</a>)}</div>}
    </header>

    <main>
      <section id="top" className="relative min-h-[860px] bg-[#07111f] pt-16 text-white noise">
        <div className="absolute inset-0 grid-bg opacity-40"/><div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-24 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:py-32">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
            <Pill dark>{t.heroKicker}</Pill><h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-8xl">{t.heroTitle}<br/><span className="text-blue-400">{t.heroAccent}</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">{t.tagline}</p><div className="mt-10 flex flex-wrap gap-3"><a href="#problem" className="flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 font-medium transition hover:bg-blue-400">{t.view}<ArrowRight size={18}/></a><a href="mailto:hello@eclovision.ai" className="rounded-full border border-white/20 px-6 py-3.5 font-medium transition hover:bg-white/10">{t.contact}</a></div>
            <p className="mt-10 text-xs font-medium uppercase tracking-[.16em] text-slate-500">{t.heroNote}</p>
          </motion.div>
          <HeroVisual lang={lang}/>
        </div><a href="#problem" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.18em] text-slate-500 md:flex">{t.scroll}<ChevronRight className="rotate-90" size={15}/></a>
      </section>

      <Section id="problem" kicker={t.market} title={t.problemTitle} sub={t.problemSub}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{problems.map((x,i)=><InfoCard key={i} icon={<x.icon/>} title={tx(x.t)} text={tx(x.d)} index={`0${i+1}`}/>)}</div>
      </Section>

      <section id="solution" className="bg-[#0b1627] py-24 text-white md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><Heading dark kicker={t.solutionKicker} title={t.solutionTitle} sub={t.solutionSub}/><Flow lang={lang}/><div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{capabilities.map((x,i)=><div key={i} className="rounded-2xl border border-white/10 bg-white/[.04] p-4"><Check className="mb-5 text-blue-400" size={18}/><div className="text-sm font-medium">{tx(x)}</div></div>)}</div></div></section>

      <Section id="product" kicker={t.productKicker} title={t.productTitle} sub={t.productSub}>
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 to-[#062557] p-8 text-white md:p-12"><div className="absolute -right-16 -top-16 size-64 rounded-full border border-white/15"/><div className="absolute -right-8 -top-8 size-40 rounded-full border border-white/15"/><p className="text-xs font-semibold tracking-[.18em] text-blue-100">ECLOVISION EDGE MODULE</p><div className="absolute inset-x-8 bottom-8 rounded-3xl border border-white/15 bg-[#07111f]/70 p-7 backdrop-blur md:inset-x-12 md:bottom-12"><div className="mb-8 flex items-center justify-between"><Cpu size={42}/><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">6–40 TOPS</span></div><div className="grid grid-cols-3 gap-3 text-xs text-slate-300"><span>CAM / LiDAR</span><span>CAN / UART</span><span>EDGE AI</span></div><div className="mt-3 h-1 rounded bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300"/></div></div><div className="grid gap-4 sm:grid-cols-2">{productBenefits.map((x,i)=><InfoCard key={i} icon={<x.icon/>} title={tx(x.t)} text={tx(x.d)}/>)}</div></div>
      </Section>

      <Section id="customers" kicker={t.customersKicker} title={t.customersTitle} sub={t.customersSub} alt>
        <div className="grid gap-4 md:grid-cols-2">{customers.map((x,i)=><motion.article whileHover={{y:-4}} key={i} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className="flex items-start justify-between gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue-50 font-bold text-blue-600">{String(i+1).padStart(2,'0')}</div><Target className="text-slate-300"/></div><h3 className="mt-7 text-xl font-semibold">{tx(x.n)}</h3><p className="mt-2 text-sm font-medium text-blue-600">{tx(x.b)}</p><div className="my-5 h-px bg-slate-100"/><p className="text-sm leading-6 text-slate-500">{tx(x.v)}</p></motion.article>)}</div>
      </Section>

      <Section kicker={t.compKicker} title={t.compTitle} sub={t.compSub}>
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm"><table className="min-w-[1080px] w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr>{(lang==='en'?['Company & product','CPU','GPU / NPU','Key functions','Selling point','Price']:['公司与产品','CPU','GPU / NPU','核心功能','核心卖点','价格']).map(x=><th key={x} className="px-5 py-4 font-semibold">{x}</th>)}</tr></thead><tbody>{competitors.map((x,i)=><tr key={i} className={`border-t border-slate-100 ${x.ours?'bg-blue-50/80':''}`}><td className="px-5 py-5"><div className={`font-semibold ${x.ours?'text-blue-700':''}`}>{x.name}</div><div className="mt-1 text-xs text-slate-500">{x.product}</div></td><td className="px-5 py-5 text-xs text-slate-600">{x.cpu}</td><td className="px-5 py-5 text-xs text-slate-600">{x.accel}</td><td className="px-5 py-5 text-xs leading-5 text-slate-600">{tx(x.fn)}</td><td className="px-5 py-5 text-xs font-medium">{tx(x.point)}</td><td className={`px-5 py-5 font-semibold ${x.ours?'text-blue-700':''}`}>{x.price}</td></tr>)}</tbody></table></div>
      </Section>

      <section id="economics" className="bg-white py-24 md:py-32"><div className="mx-auto grid max-w-[1440px] gap-20 px-5 md:px-10 lg:grid-cols-2"><div><Heading kicker={t.costKicker} title={t.costTitle} sub={t.costSub}/><div className="mt-12 h-[360px] rounded-3xl border border-slate-200 bg-[#fbfcfe] p-5 md:p-7"><ResponsiveContainer width="100%" height="100%"><BarChart data={costData} margin={{top:18,right:10,left:-25,bottom:32}}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5eaf2"/><XAxis dataKey="name" tick={{fontSize:11,fill:'#667085'}} interval={0} angle={-10} textAnchor="end"/><YAxis tick={{fontSize:11,fill:'#667085'}}/><Tooltip cursor={{fill:'#eef5ff'}} formatter={(v)=>[`US$${v}`,'Cost']}/><Bar dataKey="usd" fill="#3182f6" radius={[8,8,0,0]}/></BarChart></ResponsiveContainer></div></div><div><Heading kicker={t.unitKicker} title={t.unitTitle} sub={t.unitSub}/><div className="mt-12 rounded-3xl bg-[#0b1627] p-7 text-white md:p-9"><PriceRange lang={lang}/><div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">{['S$149','S$199','S$299'].map((x,i)=><div key={x}><div className="text-2xl font-semibold text-blue-300">{x}</div><div className="mt-1 text-xs text-slate-400">{['Entry','Scale','Performance'][i]}</div></div>)}</div></div></div></div></section>

      <Section kicker={t.valueKicker} title={t.valueTitle}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{values.map((x,i)=><InfoCard key={i} icon={<x.icon/>} title={tx(x.t)} text={tx(x.d)}/>)}</div>
      </Section>

      <section className="bg-[#eef4fb] py-24 md:py-28"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><Heading kicker={t.fundingKicker} title={t.fundingTitle} sub={t.fundingSub}/><div className="mt-12 grid gap-4 lg:grid-cols-3"><Metric value="S$1.2M" label={lang==='en'?'First-round target':'首轮融资目标'} note={lang==='en'?'Product validation + batch production':'产品验证与批量生产'}/><Metric value="S$12.0M" label={lang==='en'?'Second-round target':'第二轮融资目标'} note={lang==='en'?'Scale manufacturing + commercialization':'扩大生产与商业化'}/><Metric value="9×" label={lang==='en'?'Target valuation step-up':'目标估值提升'} note={lang==='en'?'Milestone-driven financing path':'里程碑驱动的融资路径'}/></div></div></section>

      <section className="relative overflow-hidden bg-blue-600 py-24 text-white md:py-32"><div className="absolute inset-0 grid-bg opacity-20"/><div className="relative mx-auto max-w-4xl px-5 text-center"><Globe2 className="mx-auto mb-8" size={38}/><h2 className="text-4xl font-semibold tracking-[-.04em] md:text-6xl">{t.ctaTitle}</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">{t.ctaSub}</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href="mailto:hello@eclovision.ai" className="rounded-full bg-white px-6 py-3.5 font-medium text-blue-700">{t.contact}</a><a href="mailto:hello@eclovision.ai?subject=EcloVision Demo" className="rounded-full border border-white/30 px-6 py-3.5 font-medium">{t.demo}</a></div></div></section>
    </main>
    <footer className="bg-[#07111f] px-5 py-8 text-xs text-slate-500"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 md:flex-row"><span>© 2026 EcloVision</span><span>{t.source}</span></div></footer>
  </div>
}

function Section({id,kicker,title,sub,children,alt=false}:{id?:string;kicker:string;title:string;sub?:string;children:ReactNode;alt?:boolean}) { return <section id={id} className={`${alt?'bg-[#f0f5fb]':'bg-[#f7f9fc]'} py-24 md:py-32`}><div className="mx-auto max-w-[1440px] px-5 md:px-10"><Heading kicker={kicker} title={title} sub={sub}/><div className="mt-12 md:mt-16">{children}</div></div></section> }
function Heading({kicker,title,sub,dark=false}:{kicker:string;title:string;sub?:string;dark?:boolean}) { return <div className="max-w-4xl"><Pill dark={dark}>{kicker}</Pill><h2 className={`mt-5 text-4xl font-semibold tracking-[-.04em] md:text-6xl ${dark?'text-white':'text-[#122038]'}`}>{title}</h2>{sub&&<p className={`mt-5 max-w-2xl text-base leading-7 md:text-lg ${dark?'text-slate-400':'text-slate-500'}`}>{sub}</p>}</div> }
function Pill({children,dark=false}:{children:ReactNode;dark?:boolean}) { return <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[.16em] ${dark?'border-blue-400/25 bg-blue-400/10 text-blue-300':'border-blue-200 bg-blue-50 text-blue-700'}`}>{children}</span> }
function InfoCard({icon,title,text,index}:{icon:ReactNode;title:string;text:string;index?:string}) { return <motion.article whileHover={{y:-4}} className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-600">{icon}</div>{index&&<span className="absolute right-6 top-6 text-xs font-semibold text-slate-300">{index}</span>}<h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{text}</p></motion.article> }
function Metric({value,label,note}:{value:string;label:string;note:string}) { return <div className="rounded-3xl border border-blue-100 bg-white p-8"><div className="text-4xl font-semibold tracking-tight text-blue-600">{value}</div><h3 className="mt-5 font-semibold">{label}</h3><p className="mt-2 text-sm text-slate-500">{note}</p></div> }
function HeroVisual({lang}:{lang:Lang}) { const labels=lang==='en'?['SENSE','UNDERSTAND','ACT','LEARN']:['感知','理解','执行','学习']; return <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="relative mx-auto aspect-square w-full max-w-[620px]"><div className="absolute inset-[14%] rounded-full border border-blue-400/20"/><div className="absolute inset-[24%] rounded-full border border-dashed border-cyan-300/25"/><div className="absolute inset-[34%] grid place-items-center rounded-full bg-blue-500 shadow-[0_0_100px_rgba(46,134,255,.35)]"><BrainCircuit size={74}/></div>{[Camera,Map,Route,Database].map((Icon,i)=>{const pos=["left-[4%] top-[42%]","left-[42%] top-[4%]","right-[3%] top-[42%]","bottom-[4%] left-[42%]"][i];return <div key={i} className={`absolute ${pos} grid size-24 place-items-center rounded-3xl border border-white/10 bg-white/[.06] backdrop-blur`}><Icon className="text-blue-300"/><span className="mt-[-24px] text-[9px] font-semibold tracking-widest text-slate-400">{labels[i]}</span></div>})}<svg className="absolute inset-0 size-full animate-[spin_28s_linear_infinite]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(80,162,255,.3)" strokeWidth=".3" strokeDasharray="2 4"/><circle cx="50" cy="5" r="1.2" fill="#5cc8ff"/><circle cx="95" cy="50" r=".8" fill="#62e8d0"/></svg></motion.div> }
function Flow({lang}:{lang:Lang}) { const items=lang==='en'?[['Camera / Sensors',Camera],['Edge AI Module',Cpu],['Perceive · Localize · Plan',Radar],['Robot Actions',Navigation],['Data Feedback',Database],['Continual Improvement',Sparkles]]:[['相机 / 传感器',Camera],['边缘 AI 模块',Cpu],['感知 · 定位 · 规划',Radar],['机器人执行',Navigation],['数据反馈',Database],['持续优化',Sparkles]]; return <div className="mt-16 grid gap-3 lg:grid-cols-6">{items.map(([label,Icon],i)=>{const I=Icon as typeof Camera; return <div key={label as string} className="relative rounded-2xl border border-white/10 bg-white/[.04] p-5"><I className="text-blue-400"/><p className="mt-6 text-sm font-medium">{label as string}</p>{i<5&&<ArrowRight className="absolute -right-5 top-1/2 z-10 hidden text-blue-400 lg:block" size={16}/>}</div>})}</div> }
function PriceRange({lang}:{lang:Lang}) { const rows=lang==='en'?[['Competitor range',272,599,'#64748b'],['Alternative range',145,290,'#14b8a6'],['EcloVision range',149,299,'#3b82f6']]:[['竞品价格区间',272,599,'#64748b'],['替代方案区间',145,290,'#14b8a6'],['EcloVision 区间',149,299,'#3b82f6']]; return <div>{rows.map(([label,start,end,color])=><div className="mb-7" key={label as string}><div className="mb-3 flex justify-between text-sm"><span>{label as string}</span><span className="text-slate-400">US${start as number}–{end as number}</span></div><div className="h-3 rounded-full bg-white/10"><div className="h-3 rounded-full" style={{marginLeft:`${(start as number)/7}%`,width:`${((end as number)-(start as number))/7}%`,background:color as string}}/></div></div>)}</div> }

export default App
