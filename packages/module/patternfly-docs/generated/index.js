module.exports = {
  '/extensions/deletemodal/react': {
    id: "DeleteModal",
    title: "DeleteModal",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"},{"text":"DeleteModal implementation"}]],
    examples: ["Example","DeleteModal implementation"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/deletemodal/react/index" */ './extensions/deletemodal/react')
  },
  '/extensions/deletemodal/design-guidelines': {
    id: "DeleteModal",
    title: "DeleteModal",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/deletemodal/design-guidelines/index" */ './extensions/deletemodal/design-guidelines')
  }
};