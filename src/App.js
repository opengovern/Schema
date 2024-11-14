import "./App.css";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { resources } from "./resources";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Button from "@cloudscape-design/components/button";
import { useEffect, useState } from "react";
import Pagination from "@cloudscape-design/components/pagination";
import { Icon, Modal } from "@cloudscape-design/components";
import Cal from "@calcom/embed-react";
import IntegrationCard from "./components/IntegrationCard";

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
        setTotal(Math.abs(text.length/12));
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
            <div class="col-12 m-2 d-flex flex-row card-container  flex-wrap">
              {types.slice((page - 1) * 12, page * 12).map((type) => {
                return (
                  <>
                    <IntegrationCard
                      onClickCard={() => {
                        if (type.Tier === "Community") {
                          selectIntegration(type.Directory);
                          setSelectedIntegration(type);
                        } else {
                          setOpen(true);
                        }
                      }}
                      type={type.Connector}
                      title={type.Connector}
                      tier={type.Tier}
                      count={resources[type?.Directory]?.length}
                      logo={`https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${type.Icon}`}
                    />
                
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
