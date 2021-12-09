const apiPromise = fetch("https://www.reddit.com/r/aww/.json").then((res) =>
  res.json()
);

apiPromise.then((data) => {
  console.log(data);
});
