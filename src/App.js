import './App.css';
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { resources } from './resources';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Button from "@cloudscape-design/components/button";

function App() {
  const [selected, setselected] = useState(false);
  const [name, setname] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
 const [content, setContent] = useState("");
 const [loading, setLoading] = useState(true);
  const selectIntegration = (name) => {
    setselected(true);
    setname(name);
    getMarkdown(name,0);
  }
  const getMarkdown = (name,index) => {

    const temp_index = index? index : 0;
    setSelectedIndex(temp_index);
    setLoading(true);
    fetch(
      `https://raw.githubusercontent.com/opengovern/schema/main/integrations/${name}/${resources[name][temp_index]}.md`
    )
      .then((response) => response.text())
      .then((text) => {
        setContent(text.replace("# Columns", ""));
        setLoading(false);
      });
    
  }

  return (
    <>
      {selected ? (
        <>
          <div className="container content">
            <div className="col-3">
              <SideNavigation
                activeHref={selectedIndex.toString()}
                header={{ href: "1", text: "Tables" }}
                onFollow={(event) => {
                  if (!event.detail.external) {
                    event.preventDefault();
                    getMarkdown(name, parseInt(event.detail.href));
                  }
                }}
                items={resources[name].map((resource, index) => {
                  return {
                    type: "link",
                    text: resource,
                    href: index.toString(),
                  };
                })}
              />
            </div>
            <div className="col-9">
              <div className="back">
                <Button
                  variant="primary"
                  onClick={() => {
                    setselected(false);
                  }}
                >
                  Go back
                </Button>
              </div>
              {name && !loading ? (
                <>
                  <div className="markdown">
                    <span className="title">
                      {resources[name][selectedIndex]}
                    </span>
                    <ReactMarkdown
                      children={content}
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      // linkTarget="_blank"
                      // transformLinkUri={undefined}
                    />
                  </div>
                </>
              ) : (
                <div className="markdown">
                  <span>Loading...</span>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container mt-2 main">
            <div class="col-12 m-2 d-flex flex-row gap-2 flex-wrap">
              <div
                class="card d-flex p-4 flex-column"
                onClick={() => {
                  selectIntegration("aws");
                }}
              >
                <img
                  class="card-logo"
                  alt="AWS logo"
                  src="https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/aws.svg"
                />
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </span>
                <div class="card-link">
                  <a class="card-a">Learn more</a>
                  <div class="show-link">
                    Show Tables
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 1024 1024"
                      class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z"
                        fill="#2196F3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="card d-flex p-4 flex-column"
                onClick={() => {
                  selectIntegration("azure");
                }}
              >
                <img
                  class="card-logo"
                  alt="Azure logo"
                  src="https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/azure.svg"
                />
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </span>
                <div class="card-link">
                  <a class="card-a">Learn more</a>
                  <div class="show-link">
                    Show Tables
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 1024 1024"
                      class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z"
                        fill="#2196F3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="card d-flex p-4 flex-column"
                onClick={() => {
                  selectIntegration("entraid");
                }}
              >
                <img
                  class="card-logo"
                  alt="EntraID logo"
                  src="https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/entraid.svg"
                />
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </span>
                <div class="card-link">
                  <a class="card-a">Learn more</a>
                  <div class="show-link">
                    Show Tables
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 1024 1024"
                      class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z"
                        fill="#2196F3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="card d-flex p-4 flex-column"
                onClick={() => {
                  selectIntegration("platform");
                }}
              >
                <img
                  class="card-logo"
                  alt="Opengovernance logo"
                  src="https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/open-governance.svg"
                />
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </span>
                <div class="card-link">
                  <a class="card-a">Learn more</a>
                  <div class="show-link">
                    Show Tables
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 1024 1024"
                      class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z"
                        fill="#2196F3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
