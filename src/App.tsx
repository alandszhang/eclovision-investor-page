import { useState, type ReactNode } from 'react'
import { ArrowRight, BrainCircuit, Camera, Check, ChevronRight, Cpu, Database, Globe2, MapPinned, Menu, Navigation, Radar, Route, ScanLine, X } from 'lucide-react'
import { type Lang, type Bi, copy, customers, comparison, unitRanges, costCards, team } from './data/content'

const base = import.meta.env.BASE_URL

export default function App() {
  const [lang,setLang]=useState<Lang>('en'); const [menu,setMenu]=useState(false); const t=copy[lang]; const tx=(v:Bi)=>v[lang]
  return <div className="min-h-screen bg-[#f7f9fc] text-[#142039]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-semibold"><span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white"><ScanLine size={18}/></span>EcloVision</a>
        <nav className="hidden gap-7 text-sm text-slate-600 lg:flex">{['overview','market','product','customers','economics','financing'].map((id,i)=><a key={id} href={`#${id}`} className="hover:text-blue-600">{t.nav[i]}</a>)}</nav>
        <div className="flex items-center gap-2"><div className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs"><button onClick={()=>setLang('zh')} className={`rounded-full px-3 py-1.5 ${lang==='zh'?'bg-white text-blue-700 shadow-sm':'text-slate-500'}`}>中文</button><button onClick={()=>setLang('en')} className={`rounded-full px-3 py-1.5 ${lang==='en'?'bg-white text-blue-700 shadow-sm':'text-slate-500'}`}>EN</button></div><button aria-label="Menu" onClick={()=>setMenu(!menu)} className="p-2 lg:hidden">{menu?<X/>:<Menu/>}</button></div>
      </div>{menu&&<div className="border-t bg-white px-5 py-3 lg:hidden">{['overview','market','product','customers','economics','financing'].map((id,i)=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)} className="block py-2 text-sm">{t.nav[i]}</a>)}</div>}
    </header>

    <main>
      <section id="top" className="grid-bg relative overflow-hidden bg-white pt-16"><div className="mx-auto grid min-h-[780px] max-w-[1440px] items-center gap-12 px-5 py-24 md:px-10 lg:grid-cols-[1.05fr_.95fr]">
        <div><Eyebrow>{t.eyebrow}</Eyebrow><h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] text-[#091a3a] sm:text-6xl lg:text-8xl">EcloVision<br/><span className="text-blue-600">{t.title}</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{t.intro}</p><div className="mt-10 flex flex-wrap gap-3"><a href="#overview" className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-medium text-white">{t.view}<ArrowRight size={17}/></a><a href="mailto:contact@eclovision.ai" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 font-medium">{t.contact}</a></div></div>
        <EdgeDiagram lang={lang}/>
      </div></section>

      <PageSection id="overview" eyebrow={t.overview} title={t.overviewTitle} text={t.overviewText}>
        <CapabilityStrip lang={lang}/>
        <div className="mt-16"><Subhead label={t.team} title={t.teamTitle}/><TeamSection lang={lang} tx={tx}/></div>
      </PageSection>

      <PageSection id="market" eyebrow={t.market} title={t.marketTitle} text={t.marketText} tint>
        <div className="grid gap-6"><SlideVisual src="market-overview.png" alt="Global cleaning robot market overview" caption={t.original}/><SlideVisual src="market-outlook.png" alt="Smart vacuum and lawn mower robotics outlook" caption={t.original}/></div>
      </PageSection>

      <PageSection eyebrow={t.stack} title={t.stackTitle}>
        <SlideVisual src="capabilities.png" alt="Core capabilities of robots" caption={t.original}/>
      </PageSection>

      <PageSection eyebrow={t.problem} title={t.problemTitle} tint>
        <div className="grid gap-6 lg:grid-cols-2"><SlideVisual src="pain-points.png" alt="Robot pain point analysis" caption={t.original}/><SlideVisual src="data-collection.png" alt="Resource-intensive data collection" caption={t.original}/></div>
      </PageSection>

      <PageSection id="product" eyebrow={t.product} title={t.productTitle} text={t.overviewText}>
        <div className="grid items-center gap-8 lg:grid-cols-[.72fr_1.28fr]"><ProductLoop lang={lang}/><SlideVisual src="product.png" alt="Visual navigation perception module" caption={t.original}/></div>
      </PageSection>

      <PageSection id="customers" eyebrow={t.customers} title={t.customersTitle} tint>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="hidden grid-cols-[1fr_1fr_.9fr] bg-slate-50 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid"><span>{lang==='en'?'Company':'公司'}</span><span>{lang==='en'?'Chinese name':'中文名称'}</span><span>{lang==='en'?'Main business':'主营业务'}</span></div>{customers.map((c,i)=><div key={c.en} className="grid gap-2 border-t border-slate-100 px-7 py-6 md:grid-cols-[1fr_1fr_.9fr]"><span className="font-semibold">{c.en}</span><span className="text-slate-600">{c.zh}</span><span className="text-sm font-medium text-blue-700">{tx(c.domain)}</span></div>)}</div>
      </PageSection>

      <PageSection eyebrow={t.comparison} title={t.comparisonTitle}>
        <ComparisonTable lang={lang} tx={tx}/>
      </PageSection>

      <PageSection id="economics" eyebrow={t.economics} title={t.economicsTitle} tint>
        <div className="grid gap-5 md:grid-cols-3">{unitRanges.map(r=><div key={r.value} className={`rounded-3xl border p-8 ${r.ours?'border-blue-300 bg-blue-600 text-white':'border-slate-200 bg-white'}`}><p className={`text-sm ${r.ours?'text-blue-100':'text-slate-500'}`}>{tx(r.label)}</p><p className="mt-4 text-4xl font-semibold tracking-tight">{r.value}</p></div>)}</div>
        <SlideVisual src="unit-economics.png" alt="Unit economics and cost advantages" caption={t.original}/>
      </PageSection>

      <PageSection eyebrow={t.cost} title={t.costTitle}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{costCards.map((c,i)=><div key={c.name} className="rounded-3xl border border-slate-200 bg-white p-7"><Cpu className="text-blue-600"/><h3 className="mt-7 text-lg font-semibold">{c.name}</h3><p className="mt-5 text-2xl font-semibold text-blue-700">{c.rmb}</p><p className="mt-1 text-sm text-slate-500">{c.usd}</p></div>)}</div>
      </PageSection>

      <PageSection id="financing" eyebrow={t.financing} title={t.financingTitle} tint>
        <div className="grid gap-6"><SlideVisual src="financing-round-one.png" alt="First-round financing target" caption={t.original}/><div className="grid gap-6 lg:grid-cols-2"><SlideVisual src="financing-path.png" alt="Two-round financing path" caption={t.original}/><SlideVisual src="financing-round-two.png" alt="Second-round financing plan" caption={t.original}/></div></div>
      </PageSection>

      <section className="bg-[#08275f] py-24 text-white"><div className="mx-auto max-w-4xl px-5 text-center"><Globe2 className="mx-auto text-blue-300" size={36}/><h2 className="mt-8 text-4xl font-semibold tracking-[-.04em] md:text-6xl">{t.closing}</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">{t.closingText}</p><a href="mailto:contact@eclovision.ai" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-blue-800">{t.contact}<ArrowRight size={17}/></a></div></section>
    </main><footer className="bg-[#061a40] px-5 py-8 text-xs text-blue-200/60"><div className="mx-auto flex max-w-[1440px] justify-between"><span>© 2026 EcloVision</span><span>{t.confidential}</span></div></footer>
  </div>
}

function PageSection({id,eyebrow,title,text,children,tint=false}:{id?:string;eyebrow:string;title:string;text?:string;children:ReactNode;tint?:boolean}){return <section id={id} className={`${tint?'bg-[#f0f5fb]':'bg-white'} py-24 md:py-32`}><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="max-w-4xl"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-5 text-4xl font-semibold tracking-[-.04em] text-[#091a3a] md:text-6xl">{title}</h2>{text&&<p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>}</div><div className="mt-12 md:mt-16">{children}</div></div></section>}
function Eyebrow({children}:{children:ReactNode}){return <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.16em] text-blue-700">{children}</span>}
function Subhead({label,title}:{label:string;title:string}){return <div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[.16em] text-blue-600">{label}</p><h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3></div>}
function SlideVisual({src,alt,caption}:{src:string;alt:string;caption:string}){return <figure className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_55px_rgba(24,55,95,.09)]"><img src={`${base}slides/${src}`} alt={alt} className="w-full"/><figcaption className="border-t border-slate-100 px-5 py-3 text-xs text-slate-500">{caption}</figcaption></figure>}
function EdgeDiagram({lang}:{lang:Lang}){const a=lang==='en'?['Sensors','Edge AI','Robot action','Field data']:['传感器','边缘 AI','机器人执行','现场数据']; return <div className="relative mx-auto aspect-square w-full max-w-[560px] rounded-full border border-blue-100 bg-blue-50/70 p-[18%]"><div className="grid size-full place-items-center rounded-full bg-blue-600 text-white shadow-[0_25px_80px_rgba(37,99,235,.28)]"><BrainCircuit size={74}/><span className="mt-[-28%] text-xs font-semibold tracking-wider">ECLOVISION</span></div>{[Camera,Cpu,Navigation,Database].map((I,i)=><div key={i} className={`absolute grid size-24 place-items-center rounded-3xl border border-slate-200 bg-white shadow-lg ${['left-0 top-[40%]','left-[40%] top-0','right-0 top-[40%]','bottom-0 left-[40%]'][i]}`}><I className="text-blue-600"/><span className="mt-[-22px] text-[10px] font-medium text-slate-500">{a[i]}</span></div>)}</div>}
function CapabilityStrip({lang}:{lang:Lang}){const a=lang==='en'?['Obstacle detection','3D perception','Localization','Mapping','Planning','Continual learning']:['障碍物检测','3D 感知','定位','建图','规划','持续学习']; const icons=[Radar,Camera,MapPinned,Route,Navigation,Database]; return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{a.map((x,i)=>{const I=icons[i];return <div key={x} className="rounded-2xl border border-slate-200 bg-white p-5"><I className="text-blue-600"/><p className="mt-6 text-sm font-semibold">{x}</p></div>})}</div>}
function TeamSection({lang,tx}:{lang:Lang;tx:(v:Bi)=>string}){return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{team.map((m,i)=><article key={m.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(24,55,95,.07)]"><div className="flex items-start justify-between"><img src={`${base}team/${m.image}`} alt={m.name} className="size-28 rounded-full border border-slate-200 object-cover shadow-sm"/><span className="text-xs font-semibold text-slate-300">0{i+1}</span></div><h3 className="mt-6 text-xl font-semibold tracking-tight">{m.name}</h3><p className="mt-1 text-sm font-semibold text-blue-600">{tx(m.role)}</p><div className="my-5 h-px bg-slate-100"/><ul className="space-y-4">{m.points.map((p,j)=><li key={j} className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-1 size-4 shrink-0 text-blue-600"/><span>{tx(p)}</span></li>)}</ul></article>)}</div>}
function ProductLoop({lang}:{lang:Lang}){const a=lang==='en'?['Camera / Sensors','Edge AI Module','Perception / Localization / Planning','Robot Actions','Data Feedback','Continual Improvement']:['相机 / 传感器','边缘 AI 模块','感知 / 定位 / 规划','机器人执行','数据反馈','持续优化']; return <div className="space-y-3">{a.map((x,i)=><div key={x} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">{i+1}</span><span className="text-sm font-medium">{x}</span>{i<5&&<ChevronRight className="ml-auto text-slate-300" size={16}/>}</div>)}</div>}
function ComparisonTable({lang,tx}:{lang:Lang;tx:(v:Bi)=>string}){const heads=lang==='en'?['Company','Product','CPU','GPU / NPU','Function & Selling Point','Price']:['公司','产品','CPU','GPU / NPU','功能与卖点','价格'];return <div className="overflow-x-auto rounded-3xl border border-slate-200"><table className="w-full min-w-[1050px] bg-white text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr>{heads.map(h=><th className="px-5 py-4" key={h}>{h}</th>)}</tr></thead><tbody>{comparison.map((r,i)=><tr key={i} className={`border-t border-slate-100 ${r.ours?'bg-blue-50/80':''}`}><td className={`px-5 py-5 font-semibold ${r.ours?'text-blue-700':''}`}>{r.company}</td><td className="px-5 py-5">{r.product}</td><td className="px-5 py-5 text-xs">{r.cpu}</td><td className="px-5 py-5 text-xs">{r.gpu}</td><td className="px-5 py-5 text-xs leading-5">{tx(r.fn)}</td><td className={`px-5 py-5 font-semibold ${r.ours?'text-blue-700':''}`}>{r.price}</td></tr>)}</tbody></table></div>}
