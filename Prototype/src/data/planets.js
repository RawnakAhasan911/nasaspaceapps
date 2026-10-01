// NASA/JPL-inspired planetary constants used by the frontend prototype.
// Orbital element values are approximate J2000-era elements intended for visualization,
// not precision spacecraft navigation. Source references are documented in README.md.
export const PLANETS = [
  {key:'mercury',name:'Mercury',short:'ME',color:0x9a9a93,radius:0.115,orbit:3.0,period:87.969,rotation:58.646,a:0.387098,e:0.205636,i:7.005,moons:0, texture:null, fact:'Smallest planet; extreme day/night temperature contrast.'},
  {key:'venus',name:'Venus',short:'VE',color:0xc9986e,radius:0.18,orbit:4.0,period:224.701,rotation:-243.025,a:0.723336,e:0.00678,i:3.394,moons:0,texture:null,fact:'Dense CO₂ atmosphere and a surface hotter than Mercury.'},
  {key:'earth',name:'Earth',short:'EA',color:0x3e83c4,radius:0.205,orbit:5.15,period:365.256,rotation:0.9973,a:1.000000,e:0.01671,i:0.000,moons:1,texture:'https://images-assets.nasa.gov/image/PIA18033/PIA18033~large.jpg',fact:'Liquid-water world and the only known planet with life.'},
  {key:'mars',name:'Mars',short:'MA',color:0xb85f45,radius:0.155,orbit:6.55,period:686.98,rotation:1.026,a:1.523679,e:0.0934,i:1.850,moons:2,texture:'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/6/6453_mars-globe-valles-marineris-enhanced-full2.jpg?crop=faces%2Cfocalpoint&fit=clip&h=2970&w=2970',fact:'Cold desert world with two small moons: Phobos and Deimos.'},
  {key:'jupiter',name:'Jupiter',short:'JU',color:0xb99572,radius:0.48,orbit:9.0,period:4332.59,rotation:0.4135,a:5.2026,e:0.0485,i:1.303,moons:95,texture:null,fact:'Largest planet; powerful magnetosphere and a famous Great Red Spot.'},
  {key:'saturn',name:'Saturn',short:'SA',color:0xcabda3,radius:0.42,orbit:12.0,period:10759.2,rotation:0.444,a:9.5549,e:0.0555,i:2.489,moons:146,texture:null,rings:true,fact:'Gas giant known for its extensive ring system.'},
  {key:'uranus',name:'Uranus',short:'UR',color:0x7bbfd0,radius:0.29,orbit:15.0,period:30687,rotation:-0.718,a:19.2184,e:0.0463,i:0.773,moons:28,texture:null,rings:true,fact:'Ice giant rotating on its side with a high axial tilt.'},
  {key:'neptune',name:'Neptune',short:'NE',color:0x4f76bd,radius:0.285,orbit:18.0,period:60190,rotation:0.671,a:30.110,e:0.0095,i:1.770,moons:16,texture:null,fact:'Distant ice giant with exceptionally fast winds.'}
];

export const SUN={key:'sun',name:'Sun',radius:0.86,color:0xf4b65b,period:0,rotation:25.38,fact:'The G-type main-sequence star at the center of our planetary system.'};
export const MOONS={moon:{name:'Moon',radius:0.055,orbit:0.55,period:27.321,texture:'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia14/pia14011/jpeg/PIA14011.jpg?crop=faces%2Cfocalpoint&fit=clip&h=1400&w=1400'},phobos:{name:'Phobos',radius:0.025,orbit:0.35,period:0.319},deimos:{name:'Deimos',radius:0.018,orbit:0.62,period:1.263}};

export const PLANET_ICONS={earth:'🌍',moon:'🌕',mars:'🔴',water:'◉',food:'✦',energy:'ϟ',crew:'◎'};
