let itemKey = document.querySelector(".box");
let idx = 0;
let idy = 0;

document.addEventListener("keydown", (e) => {
  let keyValiu = e.key;
  if (keyValiu == "d") {
    idx++;
    if (idx >= 109) {
      idx = 109;
    }
    itemKey.style.transform = `translate(${idx * 10}px,${idy * 10}px)`;
  } else if (keyValiu == "a") {
    idx--;
    if (idx <= 0) {
      idx = 0;
    }
    itemKey.style.transform = `translate(${idx * 10}px,${idy * 10}px)`;
  } else if (keyValiu == "s") {
    idy++;

    if (idy >= 54) {
      idy = 54;
    }
    itemKey.style.transform = `translate(${idx * 10}px,${idy * 10}px)`;
  } else if (keyValiu == "w") {
    idy--;
    if (idy <= 0) {
      idy = 0;
    }
    itemKey.style.transform = `translate(${idx * 10}px,${idy * 10}px)`;
  }
});
