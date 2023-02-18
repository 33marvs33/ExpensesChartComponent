const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
// graph-container innerhtml//
const graphContainer = document.querySelector(".graph-container");
data.forEach((data) => {
  graphContainer.innerHTML += `
    <div class="box" style="width:50px">
        <div class="graph ${data.day}" style="height:${data.amount}%;"></div>
        <p>${data.day}</p>
    </div>
    `;
// adding eventlistener on screen size//
    window.addEventListener('resize', () => {
      let box = document.querySelectorAll('.box');
      if(this.innerWidth >= 550) {
        box.forEach(squareBox => {
          squareBox.style.width = '70px'
        })
       
      }else {
        box.forEach(squareBox => {
          squareBox.style.width = '50px'
        })
      }
    })
});
// targeting  pseudoclass graph:before content//
    const graph = document.querySelectorAll('.graph');
graph.forEach((grap,index) => {
    grap.style.setProperty("--content",`'${data[index].amount}'`)
})
