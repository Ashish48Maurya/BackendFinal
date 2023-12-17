fetch("https://apilist.tronscanapi.com/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TPm1bTP3rXGCCgFVZbRkE6d6du31azNTLM").then((res)=>{
    return res.json();
}).then((val)=>{
    console.log(val);
})