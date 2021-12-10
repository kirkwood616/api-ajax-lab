const body = document.querySelector("body");
const resultsDiv = document.getElementById("results");
const button = document.getElementById("load");
const inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputResult;
  let textInput = document.getElementById("textInput").value;
  inputResult = textInput.toLowerCase().replace(" ", "");
  clear();
  run(inputResult);
});

function clear() {
  const postContent = document.querySelectorAll(".post");
  if (postContent.length) {
    postContent.forEach((post) => post.remove());
  }
  return;
}

function run(value) {
  const apiPromise = fetch("https://www.reddit.com/r/" + value + "/.json").then(
    (res) => res.json()
  );
  const results = apiPromise.then((data) => {
    for (let i = 0; i < 10; i++) {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      // CREATE TITLE
      let title = data.data.children[i].data.title;
      const h2 = document.createElement("h2");
      h2.innerText = title;
      postDiv.appendChild(h2);
      // CREATE IMAGE
      let thumbnail = data.data.children[i].data.thumbnail;
      const image = document.createElement("img");
      image.src = thumbnail;
      image.alt = "Image or Video";
      postDiv.appendChild(image);
      // CREATE LINK
      let site =
        "https://www.reddit.com" + data.data.children[i].data.permalink;
      const link = document.createElement("a");
      link.classList.add("link");
      link.href = site;
      link.target = "_blank";
      link.textContent = site;
      postDiv.appendChild(link);
      // APPEND RESULTS DIV
      resultsDiv.appendChild(postDiv);
    }
  });
}
