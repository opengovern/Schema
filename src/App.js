import "./App.css";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { resources } from "./resources";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Button from "@cloudscape-design/components/button";
import { useEffect, useState } from "react";
import Pagination from "@cloudscape-design/components/pagination";
import { Modal } from "@cloudscape-design/components";
import Cal from "@calcom/embed-react";

function App() {
  const [selected, setselected] = useState(false);
  const [name, setname] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIntegration, setSelectedIntegration] = useState();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [open, setOpen] = useState(false);
  const selectIntegration = (name) => {
    if (name) {
      setselected(true);
      setname(name);
      getMarkdown(name, 0);
    }
  };
  const getMarkdown = (name, index) => {
    const temp_index = index ? index : 0;
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
  };
  const getConnectors = () => {
    fetch(
      `https://raw.githubusercontent.com/opengovern/website/main/connectors/connectors.json`
    )
      .then((response) => response.json())
      .then((text) => {
        setTypes(text);
        setTotal(Math.abs(text.length/9));
      });
  };
  useEffect(() => {
    getConnectors();
  }, []);

  return (
    <>
      {selected ? (
        <>
          <div className="container content">
            <div className="col-3 sidebar">
              <SideNavigation
                activeHref={selectedIndex.toString()}
                header={{
                  href: "1",
                  text: `${selectedIntegration.Connector} (${resources[name].length})`,
                }}
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
            <div className="col-9 tables">
              <div className="back">
                <button
                className="back-btn"
                  variant="primary"
                  onClick={() => {
                    setselected(false);
                  }}
                >
                  Go back
                </button>
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
          <div className="container content card-content mt-2 main">
            <div class="col-12 m-2 d-flex flex-row gap-4 flex-wrap">
              {types.slice((page - 1) * 9, page * 9).map((type) => {
                return (
                  <>
                    <div
                      class="card d-flex p-4 flex-column"
                      onClick={() => {
                        if (type.Tier === "Community") {
                          selectIntegration(type.Directory);
                          setSelectedIntegration(type);
                        } else {
                          setOpen(true);
                        }
                      }}
                    >
                      <div className="d-flex gap-3 flex-row">
                        <img
                          class="card-logo"
                          alt={type.Connector}
                          src={`https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${type.Icon}`}
                        />
                        <span class="card-title">
                          {type.Connector} <></>
                        </span>
                      </div>
                      <span class={`card-tier ${type.Tier}`}>{type.Tier}</span>

                      <span className="card-desc">{type.Description}</span>
                      <div class="card-link">
                        <a class="card-a">Learn more</a>
                        <div class="show-link">
                          {type.Tier === "Community" && (
                            <>{resources[type?.Directory]?.length} Tables</>
                          )}{" "}
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
                  </>
                );
              })}
            </div>
            <div className="col-12 d-flex justify-content-center ">
              <Pagination
                currentPageIndex={page}
                onChange={({ detail }) => setPage(detail.currentPageIndex)}
                pagesCount={total}
              />
            </div>
          </div>
        </>
      )}
      <Modal
        header="Try enterprise Edition"
        size="large"
        visible={open}
        onDismiss={() => setOpen(false)}
      >
        <Cal
          namespace="try-enterprise"
          calLink="team/opengovernance/try-enterprise"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </Modal>
    </>
  );
}

export default App;
