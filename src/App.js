import "./App.css";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { resources } from "./resources";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Button from "@cloudscape-design/components/button";
import { useEffect, useState } from "react";
import { Icon, Link, Modal, Select, Table } from "@cloudscape-design/components";
import Cal from "@calcom/embed-react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";

function App() {
  const [selected, setselected] = useState(false);
  const [name, setname] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIntegration, setSelectedIntegration] = useState();
  const [selectedTable, setSelectedTable] = useState();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [row, setRow] = useState([]);
  const [selectedItems, setSelectedItems] = useState([
   
  ]);
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const selectIntegration = (name) => {
    if (name) {
      setselected(true);
      setname(name);
      if(window.innerWidth > 768){
      getMarkdown(name, 0);}

    }
  };

  const extractValuesfromTagsString = (str) => {
    var tags = str.replace("# Columns", "").split("\n");
    tags = tags.slice(4, tags.length - 2);
    const temp_row = [];
    tags.forEach((tag) => {
      const columns = tag.split("</td>");
      const data = {
        name: columns[0].split("<td>")[1],
        description: columns[1].split("<td>")[1],
      };
      temp_row.push(data);
    });
    setRow(temp_row);
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
        extractValuesfromTagsString(text);
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
        setTotal(Math.abs(text.length / 12));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getConnectors();
  }, []);

  return (
    <>
      {selected ? (
        <>
          <div className="container desktop-content">
            <div className="col-3 sidebar">
              <SideNavigation
                activeHref={selectedIndex.toString()}
                header={{
                  href: "1",
                  text: `${selectedIntegration.name} (${resources[name].length})`,
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
              {name && !loading ? (
                <>
                  <div className="custom-table">
                    <Table
                      className="p-3"
                      renderAriaLive={({
                        firstIndex,
                        lastIndex,
                        totalItemsCount,
                      }) =>
                        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
                      }
                      columnDefinitions={[
                        {
                          id: "name",
                          header: "Column name",
                          cell: (item) => <>{item.name || "-"}</>,
                          sortingField: "name",
                          isRowHeader: true,
                        },

                        {
                          id: "description",
                          header: "Description",
                          cell: (item) => item.description || "-",
                        },
                      ]}
                      enableKeyboardNavigation
                      items={row}
                      loadingText="Loading resources"
                      sortingDisabled
                      empty={
                        <Box
                          margin={{ vertical: "xs" }}
                          textAlign="center"
                          color="inherit"
                        >
                          <SpaceBetween size="m">
                            <b>No resources</b>
                          </SpaceBetween>
                        </Box>
                      }
                      header={
                        <Header
                          actions={
                            <>
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
                            </>
                          }
                          className="p-0"
                        >
                          {" "}
                          {resources[name][selectedIndex]}{" "}
                        </Header>
                      }
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

          <div className="container mobile-content">
            {!show && (
              <>
                <div className="col-3 sidebar">
                  <SideNavigation
                    className="bg-white rounded-3"
                    activeHref={selectedIndex.toString()}
                    header={{
                      href: "1",
                      text: (
                        <>
                          <div>
                            {`${selectedIntegration.name}(${resources[name].length})`}
                            <div className="back">
                              <button
                                className="back-btn-mobile"
                                variant="primary"
                                onClick={() => {
                                  setselected(false);
                                }}
                              >
                                Go back
                              </button>
                            </div>
                          </div>
                        </>
                      ),
                    }}
                    onFollow={(event) => {
                      if (!event.detail.external) {
                        event.preventDefault();
                        getMarkdown(name, parseInt(event.detail.href));
                        setShow(true);
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
              </>
            )}
            {show && (
              <>
                <div className="col-9 tables">
                  {name && !loading ? (
                    <>
                      <div className="custom-table">
                        <Table
                          className="p-3"
                          renderAriaLive={({
                            firstIndex,
                            lastIndex,
                            totalItemsCount,
                          }) =>
                            `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
                          }
                          columnDefinitions={[
                            {
                              id: "name",
                              header: "Column name",
                              cell: (item) => <>{item.name || "-"}</>,
                              sortingField: "name",
                              isRowHeader: true,
                            },

                            {
                              id: "description",
                              header: "Description",
                              cell: (item) => item.description || "-",
                            },
                          ]}
                          enableKeyboardNavigation
                          items={row}
                          loadingText="Loading resources"
                          sortingDisabled
                          empty={
                            <Box
                              margin={{ vertical: "xs" }}
                              textAlign="center"
                              color="inherit"
                            >
                              <SpaceBetween size="m">
                                <b>No resources</b>
                              </SpaceBetween>
                            </Box>
                          }
                          header={
                            <>
                              {window.innerWidth > 768 ? (
                                <Header
                                  actions={
                                    <>
                                      <div className="back">
                                        <button
                                          className="back-btn"
                                          variant="primary"
                                          onClick={() => {
                                            setShow(false);
                                          }}
                                        >
                                          Go back
                                        </button>
                                      </div>
                                    </>
                                  }
                                  className="p-0"
                                >
                                  {" "}
                                  {resources[name][selectedIndex]}{" "}
                                </Header>
                              ) : (
                                <>
                                  {" "}
                                  {resources[name][selectedIndex]}{" "}
                                  <div className="back">
                                    <button
                                      className="back-btn"
                                      variant="primary"
                                      onClick={() => {
                                        setShow(false);
                                      }}
                                    >
                                      Go back
                                    </button>
                                  </div>
                                </>
                              )}
                            </>
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <div className="markdown">
                      <span>Loading...</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="col-12 d-flex justify-content-end container mt-2">
            <Pagination
              currentPageIndex={page}
              onChange={({ detail }) => setPage(detail.currentPageIndex)}
              pagesCount={total}
            />
          </div>
          <div className="container content card-content  main">
            <Cards
              ariaLabels={{
                itemSelectionLabel: (e, t) => `select ${t.name}`,
                selectionGroupLabel: "Item selection",
              }}
              onSelectionChange={({ detail }) => {
                const item = detail?.selectedItems[0];
                if (item.tier === "Community") {
                  selectIntegration(item.directory);
                  setSelectedIntegration(item);
                } else {
                  setOpen(true);
                }
                setSelectedItems(detail?.selectedItems ?? []);
              }}
              selectedItems={selectedItems}
              cardDefinition={{
                header: (item) => (
                  <Link
                    className="w-100"
                    onClick={() => {
                      if (item.tier === "Community") {
                        selectIntegration(item.directory);
                        setSelectedIntegration(item);
                      } else {
                        setOpen(true);
                      }
                    }}
                  >
                    <div className="w-100 flex flex-row justify-content-between">
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ),
                sections: [
                  {
                    id: "logo",

                    content: (item) => (
                      <div className="w-100 d-flex justify-content-start mt-2 mb-1">
                        <img
                          className="card-image"
                          src={item.logo}
                          alt="placeholder"
                        />
                      </div>
                    ),
                  },
                  // {
                  //   id: "description",
                  //   header: "Description",
                  //   content: (item) => item.description,
                  // },
                  {
                    id: "tier",
                    header: "Tier",
                    content: (item) => item.tier,
                    width: 85,
                  },
                  {
                    id: "tables",
                    header: "Table",
                    content: (item) => (item.count ? item.count : "--"),
                    width: 15,
                  },
                ],
              }}
              cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
              items={types.slice((page - 1) * 12, page * 12).map((type) => {
                return {
                  id: type.ID,
                  tier: type.Tier,
                  description: type.Description,
                  name: type.Connector,
                  count: resources[type?.Directory]?.length,
                  directory: type?.Directory,
                  logo: `https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${type.Icon}`,
                };
              })}
              loadingText="Loading resources"
              stickyHeader
              entireCardClickable
              variant="full-page"
              selectionType="single"
              trackBy="name"
              empty={
                <Box
                  margin={{ vertical: "xs" }}
                  textAlign="center"
                  color="inherit"
                >
                  <SpaceBetween size="m">
                    <b>No resources</b>
                  </SpaceBetween>
                </Box>
              }
            />
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
