let arr = [{
  name: "pizza",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZL48F5PSKrvgarNDcXBSQA6UgtPj7xMOIw&usqp=CAU",
},
  {
    name: "burgar",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB9f6VdgD5wKgubeW6ex8m7CxkfH7tHns_Q&usqp=CAU",
  },
  {
    name: "cheese",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0lEWuagaeBqgm3AiOzJfuRsWdvRvQEaV9g&usqp=CAU",
  },
  {
    name: "ice cream",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlD1L0ZlfbbF37uFBFBguzvHqsNHiJBXGHTg&usqp=CAU"
  },
  {
    name: "corn",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoGS5HRHRw2W0VD_bO91emb-VoXZt12CFfQ&usqp=CAU",
  },
  {
    name: "soda",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNONv119lzjVNr6w6d4-K-nnj1zdBkk_kFw&usqp=CAU",
  },
  {
    name: "pizza",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZL48F5PSKrvgarNDcXBSQA6UgtPj7xMOIw&usqp=CAU",
  },
  {
    name: "burgar",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB9f6VdgD5wKgubeW6ex8m7CxkfH7tHns_Q&usqp=CAU",
  },
  {
    name: "cheese",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0lEWuagaeBqgm3AiOzJfuRsWdvRvQEaV9g&usqp=CAU",
  },
  {
    name: "ice cream",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlD1L0ZlfbbF37uFBFBguzvHqsNHiJBXGHTg&usqp=CAU"
  },
  {
    name: "corn",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoGS5HRHRw2W0VD_bO91emb-VoXZt12CFfQ&usqp=CAU",
  },
  {
    name: "soda",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtNONv119lzjVNr6w6d4-K-nnj1zdBkk_kFw&usqp=CAU",
  }]
arr.sort(()=>0.5-Math.random())
let items = []
let myimgs = []
let imgitems = []
let win = []
let result = document.querySelector("#score")
//console.log(arr)
imgs = document.querySelectorAll("img")
imgs.forEach(function (img) {
  img.addEventListener("click",one)
})
 function one() {
    this.src = arr[this.dataset.num].src
    myimgs.push(this.dataset.num)
    items.push(arr[this.dataset.num].name)
    if (items.length === 2) {
      setTimeout(matchitems, 300);
    }
  }
function matchitems() {
  if (items[0] === items[1]) {
    imgs[myimgs[0]].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdtPpvQ2GEi0KZb10UF2WIVDfg0piFlTRVg&usqp=CAU"
    imgs[myimgs[1]].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdtPpvQ2GEi0KZb10UF2WIVDfg0piFlTRVg&usqp=CAU"
    imgs[myimgs[0]].removeEventListener("click",one)
    imgs[myimgs[1]].removeEventListener("click",one)
    win.push(items)
    result.innerHTML=+result.innerHTML + 1
  } else {
    imgs[myimgs[0]].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSkdSSuLD9rgZ49uK_2y5RLabXEOtathF1Q&usqp=CAU"
    imgs[myimgs[1]].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSkdSSuLD9rgZ49uK_2y5RLabXEOtathF1Q&usqp=CAU"
    result.innerHTML=+result.innerHTML - 1
  }
  items = []
  myimgs = []
}