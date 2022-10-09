document.querySelector("#logo > img").onclick = function () {
  location.href = "./index.html";
};


function updateCount() {
  let arr = JSON.parse(localStorage.getItem("stdInfo")) || [];
  let x = 0;
  let y = 0;

  arr.forEach((e) => {
    if (e.batch == "Batch01") x++;
    if (e.batch == "Batch02") y++;
  });

  document.querySelector("#batch1_count").textContent = x || 0;
  document.querySelector("#batch2_count").textContent = y || 0;
}
updateCount();
