const body = document.querySelector("body");
const resultsDiv = document.getElementById("results");

const apiPromise = fetch("https://www.reddit.com/r/aww/.json").then((res) =>
  res.json()
);

const results = apiPromise.then((data) => {
  for (let i = 0; i < data.data.children.length; i++) {
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
    let site = "http://www.reddit.com" + data.data.children[i].data.permalink;
    const link = document.createElement("a");
    link.classList.add("link");
    link.href = site;
    link.textContent = site;
    postDiv.appendChild(link);
    // APPEND RESULTS DIV
    resultsDiv.appendChild(postDiv);
  }
});
