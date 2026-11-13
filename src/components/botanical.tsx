export function Botanical({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 220 320" fill="none" aria-hidden="true"><path d="M103 310C110 243 74 197 101 126C116 87 147 48 146 13M105 264C71 245 45 209 28 166M104 218C145 196 174 157 186 117M96 164C69 140 55 110 53 72" stroke="currentColor" strokeWidth="2"/>{[[125,61,-30],[111,98,24],[86,133,-45],[122,173,35],[151,151,48],[77,210,-48],[52,190,-30],[112,239,30],[142,218,45]].map(([x,y,r],i)=><ellipse key={i} cx={x} cy={y} rx="12" ry="30" transform={`rotate(${r} ${x} ${y})`} fill="currentColor" opacity={i%2 ? ".45" : ".7"}/>)}</svg>;
}
export function Sun({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true"><circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5"/>{Array.from({length:12},(_,i)=><path key={i} d="M50 10v12" stroke="currentColor" strokeWidth="1.5" transform={`rotate(${i*30} 50 50)`}/>)}</svg>;
}
