import { useEffect, useRef } from 'react'
import robotAnimation from '../../assets/robot-hello.json'

/* monday.com assets */
import mondaySidekick  from '../../assets/monday/monday-sidekick.png'
import mondayAgent     from '../../assets/monday/monday-agent.png'
import mondayWorkflow  from '../../assets/monday/monday-workflow.png'
import mondayVibe      from '../../assets/monday/monday-vibe.png'
import badgeMWM  from '../../assets/badges/MWM.svg'
import badgeCRM  from '../../assets/badges/CRM.svg'
import badgeDEV  from '../../assets/badges/DEV.svg'

/* integration logos */
import slackLogo      from '../../assets/logos/slack.png'
import zapierLogo     from '../../assets/logos/zapier.png'
import gmailLogo      from '../../assets/logos/gmail.png'
import makeLogo       from '../../assets/logos/make.webp'
import hubspotLogo    from '../../assets/logos/hubspot.webp'
import salesforceLogo from '../../assets/logos/salesforce.jpg'

const CSS = `
  @keyframes ha-up  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ha-in  { from{opacity:0;transform:scale(.72)}       to{opacity:1;transform:scale(1)} }
  @keyframes fa { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
  @keyframes fb { 0%,100%{transform:translateY(0)} 50%{transform:translateY( 6px)} }
  @keyframes gp { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.75;transform:scale(1.08)} }
  @keyframes ping {
    0%  {transform:scale(1);opacity:1}
    70% {transform:scale(2.1);opacity:0}
    100%{transform:scale(2.1);opacity:0}
  }
  .ha-scene { animation: ha-up .7s cubic-bezier(.22,1,.36,1) both; }

  /* integration icon circle */
  .ha-ico {
    position:absolute;
    width:50px; height:50px; border-radius:50%;
    background:rgba(255,255,255,.97);
    border:1.5px solid rgba(255,255,255,1);
    box-shadow:0 4px 18px rgba(109,40,217,.1),0 1px 4px rgba(0,0,0,.04);
    display:flex; align-items:center; justify-content:center;
    z-index:20;
  }
  .ha-ico img { width:26px; height:26px; object-fit:contain; border-radius:5px; }

  /* monday product rounded-square */
  .ha-mon {
    position:absolute;
    width:46px; height:46px; border-radius:13px;
    background:rgba(255,255,255,.97);
    border:1.5px solid rgba(255,255,255,1);
    box-shadow:0 4px 18px rgba(109,40,217,.12),0 1px 4px rgba(0,0,0,.05);
    display:flex; align-items:center; justify-content:center;
    z-index:20;
  }
  .ha-mon img { width:30px; height:30px; object-fit:contain; }

  /* info badge pill */
  .ha-badge {
    position:absolute;
    display:flex; align-items:center; gap:10px;
    background:rgba(255,255,255,.97);
    border:1.5px solid rgba(255,255,255,1);
    border-radius:10px;
    padding:10px 16px 10px 10px;
    box-shadow:0 6px 28px rgba(109,40,217,.13),0 1px 5px rgba(0,0,0,.04);
    white-space:nowrap; z-index:30;
  }
  .ha-badge-icon {
    width:36px; height:36px; border-radius:10px;
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .badge-lbl { font-size:9px;  font-weight:500; color:#94a3b8; letter-spacing:.06em; text-transform:uppercase; line-height:1; margin-bottom:3px; }
  .badge-val { font-size:13px; font-weight:700; line-height:1; letter-spacing:-.01em; }
  .ping-w { position:relative; width:7px; height:7px; flex-shrink:0; margin-left:2px; }
  .ping-d { position:absolute; inset:0; border-radius:50%; background:#22c55e; }
  .ping-r { position:absolute; inset:0; border-radius:50%; background:#22c55e; animation:ping 1.8s cubic-bezier(0,0,.2,1) infinite; }
`

const an = (dir, d, f = '4.5s') =>
  `ha-in .4s cubic-bezier(.22,1,.36,1) ${d} both, ${dir === 'a' ? 'fa' : 'fb'} ${f} ease-in-out calc(${d} + .4s) infinite`

export default function HeroMondayAgent() {
  const lottieRef = useRef(null)
  const animRef   = useRef(null)

  useEffect(() => {
    if (animRef.current) return
    import('lottie-web').then(mod => {
      if (!lottieRef.current || animRef.current) return
      const lottie = mod.default ?? mod
      lottieRef.current.innerHTML = ''
      animRef.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg', loop: true, autoplay: true,
        animationData: robotAnimation,
      })
    })
    return () => { animRef.current?.destroy(); animRef.current = null }
  }, [])

  /*
    Canvas 540 × 500  |  Robot 200×200  center (270, 248)
    Robot edges: L=170  R=370  T=148  B=348

    LEFT column (center-x ≈ 46):
      Integration circles  left=20  (right-edge = 72, gap 98px from robot)
      monday squares       left=84  (right-edge = 130, gap 40px from robot)

    RIGHT column (center-x ≈ 494):
      Integration circles  right=20  (left-edge = 468, gap 98px from robot)
      monday squares       right=84  (left-edge = 410, gap 40px from robot)

    Row tops (of 50px/46px items) to fill 500px canvas:
      Row A  top=82   (center y=107)
      Row B  top=216  (center y=241)
      Row C  top=350  (center y=375)
  */

  return (
    <div className="ha-scene flex items-center justify-center w-full select-none">
      <style>{CSS}</style>

      <div style={{ position:'relative', width:540, height:500, maxWidth:'100%' }}>

        {/* Glow */}
        <div style={{
          position:'absolute', width:260, height:260, borderRadius:'50%',
          top:'50%', left:'54%', transform:'translate(-50%,-53%)',
          background:'radial-gradient(ellipse,rgba(168,85,247,.18) 0%,rgba(99,102,241,.05) 55%,transparent 75%)',
          filter:'blur(40px)',
          animation:'gp 5s ease-in-out infinite',
          pointerEvents:'none',
        }} />

        {/* Robot */}
        <div ref={lottieRef} style={{
          position:'absolute', width:300, height:300,
          top:'50%', left:'50%', transform:'translate(-50%,-52%)',
          zIndex:10,
        }} />

        {/* ── LEFT — integration circles ── */}
        <div className="ha-ico" style={{ top:82,  left:20, animation:an('a','0.2s','4.3s') }}>
          <img src={slackLogo} alt="Slack" />
        </div>
        <div className="ha-ico" style={{ top:222, left:20, animation:an('b','0.35s','5s') }}>
          <img src={gmailLogo} alt="Gmail" />
        </div>
        <div className="ha-ico" style={{ top:362, left:20, animation:an('a','0.5s','4.7s') }}>
          <img src={hubspotLogo} alt="HubSpot" />
        </div>

        {/* ── LEFT — monday product squares ── */}
        <div className="ha-mon" style={{ top:152, left:84, animation:an('b','0.28s','4.8s') }}>
          <img src={mondayWorkflow} alt="monday WorkForms" />
        </div>
        <div className="ha-mon" style={{ top:302, left:84, animation:an('a','0.45s','5.2s') }}>
          <img src={mondayVibe} alt="monday AI" />
        </div>

        {/* ── RIGHT — integration circles ── */}
        <div className="ha-ico" style={{ top:82,  right:20, animation:an('b','0.25s','4.6s') }}>
          <img src={zapierLogo} alt="Zapier" />
        </div>
        <div className="ha-ico" style={{ top:222, right:20, animation:an('a','0.4s','4.1s') }}>
          <img src={makeLogo} alt="Make" />
        </div>
        <div className="ha-ico" style={{ top:362, right:20, animation:an('b','0.55s','4.9s') }}>
          <img src={salesforceLogo} alt="Salesforce" style={{ borderRadius:5 }} />
        </div>

        {/* ── RIGHT — monday product squares ── */}
        <div className="ha-mon" style={{ top:152, right:84, animation:an('a','0.3s','4.4s') }}>
          <img src={mondaySidekick} alt="monday Sidekick" />
        </div>
        <div className="ha-mon" style={{ top:302, right:84, animation:an('b','0.48s','5.1s') }}>
          <img src={mondayAgent} alt="monday Agent" />
        </div>

        {/* ── TOP BADGE — MWM.svg ── */}
        <div className="ha-badge" style={{
          top:10, left:'50%', transform:'translateX(-50%)',
          animation: an('a','0.15s','4.5s'),
          padding:'8px 14px',
        }}>
          <img src={badgeMWM} alt="monday Work Management"
            style={{ height:26, width:'auto', maxWidth:160, objectFit:'contain', display:'block' }} />
        </div>

        {/* ── BOTTOM-LEFT BADGE — CRM.svg ── */}
        <div className="ha-badge" style={{
          bottom:12, left:20,
          animation: an('b','0.55s','4.6s'),
          padding:'8px 14px',
        }}>
          <img src={badgeCRM} alt="monday CRM"
            style={{ height:26, width:'auto', maxWidth:130, objectFit:'contain', display:'block' }} />
        </div>

        {/* ── BOTTOM-RIGHT BADGE — DEV.svg ── */}
        <div className="ha-badge" style={{
          bottom:12, right:20,
          animation: an('a','0.65s','4.3s'),
          padding:'8px 14px',
        }}>
          <img src={badgeDEV} alt="monday Dev"
            style={{ height:26, width:'auto', maxWidth:130, objectFit:'contain', display:'block' }} />
        </div>

      </div>
    </div>
  )
}
