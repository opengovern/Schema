const readFiles = () => {
  const directory = "/integrations/platform/";

  // selector for the relevant links in the directory's index page
  const selector = "a[href$='.md']";

  const request = new XMLHttpRequest();
  request.open("GET", directory, true);
  const temp = [];
  const temp1 = [];

  request.onload = () => {
    // succesful response
    if (request.status >= 200 && request.status < 400) {
      // create DOM from response HTML
      const doc = new DOMParser().parseFromString(
        request.responseText,
        "text/html"
      );
      // get all links
      const links = doc.querySelectorAll(selector);
      links.forEach((link) => {
        // get table list div

        temp1.push(
          `<a class="table-link" id="${link.getAttribute(
            "title"
          )}" href="#${link.getAttribute("title")}">${link
            .getAttribute("title")
            .replace(".md", "")}</a>`
        );
        // get tables div
        temp.push(
          `<div class="table" id="${link.getAttribute("title")}">
          <zero-md id="${link.getAttribute(
            "title"
          )}" src="https://raw.githubusercontent.com/opengovern/schema/main${link.getAttribute(
            "href"
          )}?raw=true"></zero-md>
          </div>`
        );
        // const table = document.getElementById("tables");
        // table.innerHTML += `  <zero-md src="${link.getAttribute("href")}"></zero-md>`;
      });
    }
  };
  request.send();
  console.log(temp)
  console.log(temp1)
};

// document.onload=readFiles();
