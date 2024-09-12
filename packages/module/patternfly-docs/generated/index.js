module.exports = {
  '/extensions/ai-infra-ui-components/react': {
    id: "AI-infra-ui-components",
    title: "AI-infra-ui-components",
    toc: [{"text":"Basic usage"},[{"text":"Example"},{"text":"Fullscreen example"}]],
    examples: ["Example"],
    fullscreenExamples: ["Fullscreen example"],
    section: "extensions",
    subsection: "",
    source: "react",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/ai-infra-ui-components/react/index" */ './extensions/ai-infra-ui-components/react')
  },
  '/extensions/ai-infra-ui-components/design-guidelines': {
    id: "AI-infra-ui-components",
    title: "AI-infra-ui-components",
    toc: [{"text":"Header"},[{"text":"Sub-header"}]],
    section: "extensions",
    subsection: "",
    source: "design-guidelines",
    tabName: null,
    Component: () => import(/* webpackChunkName: "extensions/ai-infra-ui-components/design-guidelines/index" */ './extensions/ai-infra-ui-components/design-guidelines')
  }
};