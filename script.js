var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1))
var container=document.createElement("div")
container.className="container"
var row=document.createElement("div")
row.className="row"
function foo(data1){
  console.log(data1)
    for(i=0;i<data1.length;i++){
        var col=document.createElement("div")
        col.className="col-lg-4 text-center"
        col.innerHTML=`<div class="card border-dark text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header bg-dark">${data1[i].name.common}</div>
        <div class="card-body p-3 m-0 text-light">
          <h5 class="card-title"><img src="${data1[i].flags.svg}" class="img-fluid" alt="image" style="width:300px;height:170px"></h5>
          <p class="card-text wt-5 p-0 m-0">Capital : ${data1[i].capital}</p>
          <p class="card-text wt-5 p-0 m-0">Region : ${data1[i].region}</p>
          <p class="card-text wt-5 p-0 m-0">Country Code : ${data1[i].cca3}</p>
          <button class="m-2 p-1 bg-info text-white">click for Weather</button>
        </div>
      </div>`
      row.append(col)
      container.append(row)
      document.body.append(container)
    }
}