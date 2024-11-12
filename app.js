
const readFiles = () =>{
    const directory = "/tables/og_tables/steampipe/";

    // selector for the relevant links in the directory's index page
    const selector = "a[href$='.md']";

    const request = new XMLHttpRequest();
    request.open("GET", directory, true);

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
            const tableList = document.getElementById("table-list");
            // add <a> tag in the table list with the name of the file
            tableList.innerHTML += `<a class="table-link" id="${link.getAttribute(
              "title"
            )}" href="#${link.getAttribute("title")}">${link.getAttribute(
              "title"
            ).replace(".md","")}</a>`;
            // get tables div
            // const table = document.getElementById("tables");
            // table.innerHTML += `  <zero-md src="${link.getAttribute("href")}"></zero-md>`;
        });
      }
    };
    request.send();
}

document.onload=readFiles();