window.onload = function () {
  let rarityinfo = [["ssr", 20], ["baha", 15], ["sr", 10]];

  let getjson = localStorage.getItem('set');
  if (getjson != null) {
    var obj = JSON.parse(getjson);
    setvalues(obj);
  };

  document.getElementById("save").onclick = function () {
    save(getsetting());
  };

  function getsetting() {
    let currentvalues = [];
    for (let i = 0; i < rarityinfo.length; i++) {
      currentvalues.push(getvalues(i));
    };
    return currentvalues;
  };
  function setvalues(values){
    for(let i = 0; i < rarityinfo.length; i++){
      for (let j = 1; j < rarityinfo[i][1]; j++) {
        let wkid = rarityinfo[i][0] + j;
        let wkelm = document.getElementById(wkid)
        wkelm.selectedIndex = values[i][j-1]-1;
      };
    };
  };
  function getvalues(cnt) {
    let wkarray = [];
    for (let j = 1; j < rarityinfo[cnt][1]; j++) {
      let wkid = rarityinfo[cnt][0] + j;
      let wkelm = document.getElementById(wkid)
      let wkidx = wkelm.selectedIndex;
      let wkval = wkelm.options[wkidx].value;
      wkarray.push(parseInt(wkval));
    };
    let wkarray_values = wkarray;
    return wkarray_values;
  };


  function save(savedvalues) {
    const collection = collect(savedvalues);
    const settings = collection.toJson();
    localStorage.setItem('set',settings);
    
  };

};
