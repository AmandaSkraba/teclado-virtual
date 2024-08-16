'use client'

import { Piano } from "../components/Piano";

export default function Home() {
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height:'100vh' }}>
      <div style={{ color: '#ffffff', textAlign: 'start', fontSize: "20px" }}>
        <div style={{ marginBottom: '25px', fontSize: "20px" }}>Use o teclado para tocar!</div>
        <div><b style={{ fontSize: "25px" }}>C:</b> z&nbsp;&nbsp;&nbsp;<b style={{ fontSize: "25px" }}>DF:</b> s</div>
        <div><b style={{ fontSize: "25px" }}>D:</b> x&nbsp;&nbsp;&nbsp;<b style={{ fontSize: "25px" }}>EF:</b> d</div>
        <div><b style={{ fontSize: "25px" }}>E:</b> c&nbsp;&nbsp;&nbsp;<b style={{ fontSize: "25px" }}>GF:</b> g</div>
        <div><b style={{ fontSize: "25px" }}>F:</b> v&nbsp;&nbsp;&nbsp;<b style={{ fontSize: "25px" }}>AF:</b> h</div>
        <div><b style={{ fontSize: "25px" }}>G: </b> b&nbsp;&nbsp;&nbsp;<b style={{ fontSize: "25px" }}>BF:</b> j</div>
        <div><b style={{ fontSize: "25px" }}>A:</b> n&nbsp;&nbsp;&nbsp;</div>
        <div><b style={{ fontSize: "25px" }}>B:</b> m</div>
      </div>
      <header className="App-header">
        <Piano />
      </header>
    </div >
  );
}
