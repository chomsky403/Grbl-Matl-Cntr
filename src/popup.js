window.onload = function () {
  let setvalues =[];
  let getjson = localStorage.getItem('set');
  if (getjson != null) {
    setvalues = JSON.parse(getjson);
  }else{
    setvalues = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1]
    ];
  };

document.getElementById("from").onchange = function(){
  autogetvalue(this);
}
  
  document.getElementById("go").onclick = function(){
  let rarity = getoptionvalue("rarity");
  let from = getoptionvalue("from");
  let to = getoptionvalue("to");
  
  let output_vals = Sum_until(rarity, from, to);
  const collection = collect(output_vals);
  let d_sum = collection.sum('d');
  let p_sum = collection.sum('p') + d_sum;
  let sr_sum = collection.sum('sr');
  let ssr_sum = collection.sum('ssr');
  document.getElementById("p").textContent = p_sum;
  document.getElementById("d").textContent = d_sum;
  document.getElementById("sr").textContent = sr_sum;
  document.getElementById("ssr").textContent = ssr_sum;

}
  

  function Cmb(cmbs) { this.cmbs = cmbs; }
  Cmb.prototype.selectedcmb = function (r_idx, lv_idx) { return this.cmbs[setvalues[r_idx][lv_idx] - 1]; }

  let sr = [];
  //sr1
  sr[0] = new Cmb(
    [{ p: 0, d: 0, sr: 1, ssr: 0 }, { p: 0, d: 0, sr: 0, ssr: 0 }, { p: 2, d: 0, sr: 0, ssr: 0 }]
  );
  //sr2
  sr[1] = new Cmb(
    [{ p: 0, d: 0, sr: 2, ssr: 0 }, { p: 0, d: 0, sr: 1, ssr: 0 }, { p: 4, d: 0, sr: 0, ssr: 0 }]
  );
  var sr2 = sr[0].selectedcmb(2, 0);
  sr2.sr += 1;
  //sr3
  sr[2] = new Cmb([{ p: 0, d: 0, sr: 3, ssr: 0 }, { p: 0, d: 1, sr: 0, ssr: 0 }]);
  //sr4
  sr[3] = new Cmb([{ p: 0, d: 0, sr: 4, ssr: 0 }]);
  //sr5
  sr[4] = new Cmb([{ p: 0, d: 0, sr: 5, ssr: 0 }, { p: 0, d: 2, sr: 5, ssr: 0 }]);
  //sr6
  sr[5] = new Cmb(
    [{ p: 0, d: 0, sr: 6, ssr: 0 }, { p: 0, d: 2, sr: 1, ssr: 0 }, { p: 0, d: 1, sr: 3, ssr: 0 }, Calc(sr2, 3)]
  );
  //sr7
  sr[6] = new Cmb(
    [{ p: 0, d: 0, sr: 7, ssr: 0 }, { p: 0, d: 2, sr: 2, ssr: 0 }, { p: 0, d: 1, sr: 4, ssr: 0 }]
  );
  //sr8
  sr[7] = new Cmb([{ p: 0, d: 0, sr: 8, ssr: 0 }, Calc(sr2, 4)]);
  //sr9
  sr[8] = new Cmb([{ p: 0, d: 0, sr: 9, ssr: 0 }, Calc(sr2, 4, { p: 0, d: 0, sr: 1, ssr: 0 })]);

  let ssr = [];
  //ssr1
  ssr[0] = new Cmb(
    [{ p: 0, d: 0, sr: 2, ssr: 0 }, { p: 0, d: 0, sr: 1, ssr: 0 }, { p: 2, d: 0, sr: 1, ssr: 0 }, { p: 0, d: 0, sr: 0, ssr: 0 }]
  );
  let ssr1 = { p: 0, d: 0, sr: 0, ssr: 1 };
  let ssr2 = ssr[0].selectedcmb(0, 0);
  ssr2.ssr += 1;
  //ssr2
  ssr[1] = new Cmb(
    [{ p: 0, d: 0, sr: 4, ssr: 0 }, { p: 0, d: 0, sr: 3, ssr: 0 }, { p: 2, d: 0, sr: 3, ssr: 0 }]
  );
  let ssr3 = ssr[1].selectedcmb(0, 1);
  ssr3 = Calc(ssr3, undefined, ssr2);
  //ssr3
  ssr[2] = new Cmb(
    [{ p: 0, d: 0, sr: 6, ssr: 0 }, { p: 0, d: 1, sr: 3, ssr: 0 }, Calc(sr2, 3), { p: 0, d: 2, sr: 1, ssr: 0 }]
  );
  let ssr4 = ssr[2].selectedcmb(0, 2);
  ssr4 = Calc(ssr4, undefined, ssr3);

  //ssr4
  ssr[3] = new Cmb(
    [{ p: 0, d: 0, sr: 8, ssr: 0 }, Calc(sr2, 4)]
  );
  //ssr5
  ssr[4] = new Cmb(
    [{ p: 0, d: 0, sr: 0, ssr: 1 }, { p: 0, d: 0, sr: 10, ssr: 0 }, Calc(sr2, 5)]
  );
  //ssr6
  ssr[5] = new Cmb(
    [{ p: 0, d: 0, sr: 2, ssr: 1 }, { p: 0, d: 5, sr: 0, ssr: 0 },
      { p: 0, d: 2, sr: 7, ssr: 0 }, Calc(sr2, 6)
    ]
  );
  //ssr7
  ssr[6] = new Cmb([ssr2]);
  //ssr8
  ssr[7] = new Cmb([ssr2]);
  //ssr9
  ssr[8] = new Cmb([ssr2]);
  //ssr10
  ssr[9] = new Cmb([ssr2]);
  //ssr11
  ssr[10] = new Cmb([Calc(ssr2, undefined, { p: 0, d: 0, sr: 2, ssr: 0 })]);
  //ssr12
  ssr[11] = new Cmb([ssr3]);
  //ssr13
  ssr[12] = new Cmb([ssr3]);
  //ssr14
  ssr[13] = new Cmb([ssr3]);
  //ssr15
  ssr[14] = new Cmb([Calc(ssr4, 3, ssr3), Calc(ssr3, 5)]);
  //ssr16
  ssr[15] = new Cmb([Calc(ssr4, 4), Calc(ssr3, 5, ssr1)]);
  //ssr17
  ssr[16] = new Cmb([Calc(ssr4, 4, ssr1), Calc(ssr3, 5, ssr2)]);
  //ssr18
  ssr[17] = new Cmb([Calc(ssr4, 4, ssr2), Calc(ssr3, 6)]);
  //ssr19
  ssr[18] = new Cmb([Calc(ssr4, 4, ssr3), Calc(ssr3, 6, ssr1)]);

  let baha = [];
  baha[0] = new Cmb([ssr1]);
  baha[1] = new Cmb([ssr2]);
  baha[2] = new Cmb([ssr3]);
  baha[3] = new Cmb([ssr4]);
  baha[4] = new Cmb([Calc(ssr2, undefined, ssr3), Calc(ssr2, 2, ssr1)]);
  //baha6
  baha[5] = new Cmb([Calc(ssr3, 2), Calc(ssr2, 3)]);
  //baha7
  baha[6] = new Cmb([Calc(ssr3, undefined, ssr4), Calc(ssr2, 2, ssr3)]);
  //baha8
  baha[7] = new Cmb([Calc(ssr3, 2, ssr2), Calc(ssr4, 2)]);
  //baha9
  baha[8] = new Cmb([Calc(ssr3, 3), Calc(ssr2, 4, ssr1)]);
  //baha10
  baha[9] = new Cmb([Calc(ssr3, 2, ssr4), Calc(ssr3, 3, ssr1)]);
  //baha11
  baha[10] = new Cmb([Calc(ssr4, 2, ssr3), Calc(ssr3, 3, ssr2)]);
  //baha12
  baha[11] = new Cmb([Calc(ssr4, 3), Calc(ssr3, 4)]);
  //baha13
  baha[12] = new Cmb([Calc(ssr4, 3, ssr1), Calc(ssr3, 4, ssr1)]);
  //baha14
  baha[13] = new Cmb([Calc(ssr4, 3, ssr2), Calc(ssr3, 4, ssr2)]);
  

  document.getElementById("settings").onclick = function(){
    window.open(chrome.extension.getURL("options.html"));
  }


  function Sum_until(rarity, from, to) {
    let wkcmb = new Array();
    rarity -= 1;
    from -= 1;
    to -= 1;
    for (let i = from; i < to; i++) {
      switch (rarity) {
        case 0:
          wkcmb.push(ssr[i].selectedcmb(rarity, i));
          break;
        case 1:
          wkcmb.push(baha[i].selectedcmb(rarity, i));
          break;
        case 2:
          wkcmb.push(sr[i].selectedcmb(rarity, i));
          break;
      };
    };
    return wkcmb;
  };

  function Calc(m_arr, cnt, p_arr) {
    let wkarr = JSON.parse(JSON.stringify(m_arr));
    if (m_arr != undefined && cnt != undefined) {
      for (let key in wkarr) {
        wkarr[key] *= cnt;
      };
    };
    if (p_arr != undefined) {
      for (let key in wkarr) {
        wkarr[key] += p_arr[key];
      };
    };
    return wkarr;
  };

  function getoptionvalue(id){
      let elm =document.getElementById(id);
      let idx = elm.selectedIndex;
      let val = elm.options[idx].value;
      return val;
  };
  function autogetvalue(from) {
    let fidx = from.selectedIndex;
    let fvalue = from.options[fidx].value;
    let to = document.getElementById("to");
    let tidx = to.selectedIndex;
    let tvalue = to.options[tidx].value;
    if (parseInt(fvalue) >= parseInt(tvalue)) {
      to.selectedIndex = parseInt(fvalue) - 1;
    };
  };
};


