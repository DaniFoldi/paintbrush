// #MARK(PB-2)

import { IncomingMessage, ServerResponse } from 'node:http'


export default async (req: IncomingMessage, res: ServerResponse) => {
  res
    .writeHead(200, { 'Content-Type': 'application/json' })
    // MARK-BEGIN
    .end('{"components/AutoLink.vue":{"category":"Basic","description":"SSR/SPA-friendly link component","emit":[],"example":[],"icon":"link","name":"AutoLink","note":"","property":[{"default":"","description":"URL to navigate to","name":"href","required":false,"type":"string "}],"renderedExample":[],"see":[],"tag":[],"usage":"<AutoLink href=\\"/dashboard\\">Dashboard</AutoLink>","version":"1.0.0"},"components/Button.vue":{"category":"Basic","description":"Button component with optional gradient or ghost effect","emit":[],"example":[],"icon":"hand-pointing","name":"Button","note":"","property":[{"default":" {\\n    capitalize: false,\\n    color: \'primary\',\\n    ghost: false,\\n    gradient: \'\',\\n    type: \'button\',\\n    uppercase: false\\n  }","description":"Capitalize the button text","name":"capitalize","required":false,"type":"boolean "},{"default":" {\\n    capitalize: false,\\n    color: \'primary\',\\n    ghost: false,\\n    gradient: \'\',\\n    type: \'button\',\\n    uppercase: false\\n  }","description":"Background color of the button","name":"color","required":false,"type":"string "},{"default":" {\\n    capitalize: false,\\n    color: \'primary\',\\n    ghost: false,\\n    gradient: \'\',\\n    type: \'button\',\\n    uppercase: false\\n  }","description":"Add a ghost effect to the button","name":"ghost","required":false,"type":"boolean "},{"default":" {\\n    capitalize: false,\\n    color: \'primary\',\\n    ghost: false,\\n    gradient: \'\',\\n    type: \'button\',\\n    uppercase: false\\n  }","description":"Set the 2nd gradient color","name":"gradient","required":false,"type":"string  "},{"default":" {\\n    capitalize: false,\\n    color: \'primary\',\\n    ghost: false,\\n    gradient: \'\',\\n    type: \'button\',\\n    uppercase: false\\n  }","description":"Button type","name":"type","required":false,"type":"\'button\' | \'submit\' | \'reset\' "},{"default":" {\\n    capitalize: false,\\n    color: \'primary\',\\n    ghost: false,\\n    gradient: \'\',\\n    type: \'button\',\\n    uppercase: false\\n  }","description":"Uppercase the button text","name":"uppercase","required":false,"type":"boolean "}],"renderedExample":[],"see":[],"tag":[],"usage":"<Button color=\\"primary\\">\\n  button\\n</Button>","version":"1.1.0"},"components/ButtonGroup.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"arrows-in-line-vertical","name":"ButtonGroup","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Card.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"card","name":"Card","note":"","property":[{"default":" {\\n    background: \'background\'\\n  }","description":"Background color of card","name":"background","required":false,"type":"string "},{"default":" {\\n    background: \'background\'\\n  }","description":"Display card as inline","name":"inline","required":false,"type":"boolean "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Checkbox.vue":{"category":"Form","description":"","emit":[],"example":[],"icon":"check-square","name":"Checkbox","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"0.1.0"},"components/Container.vue":{"category":"Layout","description":"Container component for pages, main content and elements","emit":[],"example":[],"icon":"package","name":"Container","note":"","property":[{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Display container as article mode, with a maximum width","name":"article","required":false,"type":"boolean "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Center container along axes","name":"center","required":false,"type":"boolean | \'block\' | \'inline\' "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Display container as inline","name":"inline","required":false,"type":"boolean "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Badge in top left corner","name":"leftBadge","required":false,"type":"string "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Stretch container to maximum width and height","name":"max","required":false,"type":"boolean "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Apply padding","name":"padded","required":false,"type":"boolean "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Badge in top right corner","name":"rightBadge","required":false,"type":"string "},{"default":" {\\n    article: false,\\n    center: false,\\n    inline: false,\\n    leftBadge: \'\',\\n    max: false,\\n    padded: false,\\n    rightBadge: \'\',\\n    split: false\\n  }","description":"Split container into two halves","name":"split","required":false,"type":"boolean "}],"renderedExample":[],"see":[],"tag":[],"usage":"<Container>Summary</Container>","version":"1.4.0"},"components/Form.vue":{"category":"Form","description":"","emit":[{"description":"Form is submitted","name":"pb-submit","payload":"target","type":"HTMLFormElement"}],"example":[],"icon":"cursor-text","name":"Form","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Icon.vue":{"category":"Display","description":"Icon component from Phosphor Icons","emit":[],"example":[],"icon":"palette","name":"Icon","note":"For an icon list see https://phosphoricons.com/","property":[{"default":" {\\n    color: \'primary\',\\n    size: \'16px\',\\n    variant: \'regular\'\\n  }","description":"Icon color","name":"color","required":false,"type":"string "},{"default":" {\\n    color: \'primary\',\\n    size: \'16px\',\\n    variant: \'regular\'\\n  }","description":"Icon name","name":"name","required":false,"type":"IconTypes "},{"default":" {\\n    color: \'primary\',\\n    size: \'16px\',\\n    variant: \'regular\'\\n  }","description":"Icon font size","name":"size","required":false,"type":"string "},{"default":" {\\n    color: \'primary\',\\n    size: \'16px\',\\n    variant: \'regular\'\\n  }","description":"Icon variant","name":"variant","required":false,"type":"IconVariants "}],"renderedExample":["<Icon name=\\"chat-dots\\" size=\\"32px\\" />","<Icon color=\\"white\\" name=\\"mouse\\" size=\\"24px\\" />"],"see":[],"tag":[],"usage":"<Icon name=\\"gear\\" />","version":"1.1.0"},"components/IconButton.vue":{"category":"Basic","description":"","emit":[],"example":[],"icon":"hand-pointing","name":"IconButton","note":"","property":[{"default":" {\\n    color: \'primary\',\\n    iconColor: \'white\',\\n    iconVariant: \'regular\'\\n  }","description":"Button color","name":"color","required":false,"type":"string "},{"default":" {\\n    color: \'primary\',\\n    iconColor: \'white\',\\n    iconVariant: \'regular\'\\n  }","description":"Icon name","name":"icon","required":false,"type":"IconTypes "},{"default":" {\\n    color: \'primary\',\\n    iconColor: \'white\',\\n    iconVariant: \'regular\'\\n  }","description":"Icon color","name":"iconColor","required":false,"type":"string "},{"default":" {\\n    color: \'primary\',\\n    iconColor: \'white\',\\n    iconVariant: \'regular\'\\n  }","description":"Icon variant","name":"iconVariant","required":false,"type":"IconVariants "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.1.0"},"components/Image.vue":{"category":"Display","description":"","emit":[],"example":[],"name":"Image","note":"","property":[{"default":" {\\n    maxHeight: \'100%\',\\n    maxWidth: \'100%\',\\n    rounded: true\\n  }","description":"Image alt text","name":"alt","required":false,"type":"string "},{"default":" {\\n    maxHeight: \'100%\',\\n    maxWidth: \'100%\',\\n    rounded: true\\n  }","description":"Max height of the image","name":"maxHeight","required":false,"type":"string "},{"default":" {\\n    maxHeight: \'100%\',\\n    maxWidth: \'100%\',\\n    rounded: true\\n  }","description":"Max width of the image","name":"maxWidth","required":false,"type":"string "},{"default":" {\\n    maxHeight: \'100%\',\\n    maxWidth: \'100%\',\\n    rounded: true\\n  }","description":"Round the corners","name":"rounded","required":false,"type":"boolean "},{"default":" {\\n    maxHeight: \'100%\',\\n    maxWidth: \'100%\',\\n    rounded: true\\n  }","description":"Image source","name":"source","required":false,"type":"string "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.1.0"},"components/Input.vue":{"category":"Form","description":"","emit":[{"description":"v-model update","name":"update:modelValue","payload":"value","type":"string"}],"example":[],"icon":"textbox","name":"Input","note":"","property":[{"default":" {\\n    autoWrap: true,\\n    modelValue: \'\',\\n    placeholder: \'\',\\n    type: \'text\',\\n    width: \'100%\'\\n  }","description":"Wrap text in Text component","name":"autoWrap","required":false,"type":"boolean "},{"default":" {\\n    autoWrap: true,\\n    modelValue: \'\',\\n    placeholder: \'\',\\n    type: \'text\',\\n    width: \'100%\'\\n  }","description":"v-model value","name":"modelValue","required":false,"type":"string "},{"default":" {\\n    autoWrap: true,\\n    modelValue: \'\',\\n    placeholder: \'\',\\n    type: \'text\',\\n    width: \'100%\'\\n  }","description":"Placeholder text","name":"placeholder","required":false,"type":"string "},{"default":" {\\n    autoWrap: true,\\n    modelValue: \'\',\\n    placeholder: \'\',\\n    type: \'text\',\\n    width: \'100%\'\\n  }","description":"Input type","name":"type","required":false,"type":"string "},{"default":" {\\n    autoWrap: true,\\n    modelValue: \'\',\\n    placeholder: \'\',\\n    type: \'text\',\\n    width: \'100%\'\\n  }","description":"Width of input","name":"width","required":false,"type":"string "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"0.4.0"},"components/MultilineCode.vue":{"category":"Display","description":"","emit":[],"example":[],"icon":"code","name":"MultilineCode","note":"","property":[{"default":" {\\n    language: \'auto\'\\n  }","description":"Source code to highlight","name":"code","required":false,"type":"string "},{"default":" {\\n    language: \'auto\'\\n  }","description":"Language to use","name":"language","required":false,"type":"string "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.1.0"},"components/Paintbrush.vue":{"category":"","description":"Main component to be used everywhere","emit":[],"example":[],"name":"Paintbrush","note":"This component should be wrapping every other Paintbrush component used","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"<Paintbrush>\\n  <Text>Hello world</Text>\\n</Paintbrush>","version":"1.0.0"},"components/PoweredBy.vue":{"category":"Paintbrush","description":"","emit":[],"example":[],"icon":"plug","name":"PoweredBy","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Runtime.vue":{"category":"Misc","description":"Render any html at runtime","emit":[],"example":[],"icon":"brain","name":"Runtime","note":"Nuxt/vue does not process the given html","property":[{"default":" {\\n    class: \'\',\\n    element: \'div\'\\n  }","description":"CSS classes to apply to the rendered elemnent","name":"class","required":false,"type":"string "},{"default":" {\\n    class: \'\',\\n    element: \'div\'\\n  }","description":"Top level HTML element","name":"element","required":false,"type":"string "},{"default":" {\\n    class: \'\',\\n    element: \'div\'\\n  }","description":"innterHTML of element","name":"rendered","required":false,"type":"string "}],"renderedExample":["<Runtime html=\\"Hello World\\" />","<Runtime element=\\"p\\" html=\\"Some <em>text</em>\\" class=\\"important\\" />"],"see":[],"tag":[],"usage":"<Runtime element=\\"h1\\" html=\\"Hello World\\" />","version":"1.0.0"},"components/Separator.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"arrows-horizontal","name":"Separator","note":"","property":[{"default":" {\\n    rounded: true,\\n    spaced: false\\n  }","description":"Round the edges","name":"rounded","required":false,"type":"boolean "},{"default":" {\\n    rounded: true,\\n    spaced: false\\n  }","description":"Apply spacing on both sides","name":"spaced","required":false,"type":"boolean "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.1.0"},"components/Stat.vue":{"category":"","description":"","emit":[],"example":[],"name":"Stat","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"0.0.1"},"components/Text.vue":{"category":"Basic","description":"Text component to display text","emit":[],"example":[],"icon":"text-aa","name":"Text","note":"","property":[{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Bold text","name":"bold","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Capitalize text","name":"capitalize","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Gradient text","name":"gradient","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Important text","name":"important","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Inline text","name":"inline","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Italic text","name":"italic","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Light text","name":"light","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Render as span within other Text component","name":"part","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Render as h3","name":"sectiontitle","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Render as h2","name":"subtitle","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Render as h1","name":"title","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Underline text","name":"underline","required":false,"type":"boolean "},{"default":" {\\n    bold: false,\\n    capitalize: false,\\n    gradient: false,\\n    important: false,\\n    inline: false,\\n    italic: false,\\n    light: false,\\n    part: false,\\n    sectiontitle: false,\\n    subtitle: false,\\n    title: false,\\n    underline: false,\\n    uppercase: false\\n  }","description":"Uppercase text","name":"uppercase","required":false,"type":"boolean "}],"renderedExample":[],"see":[],"tag":[],"usage":"<Text>Lorem ipsum dolor sit amet</Text>","version":"1.1.0"},"components/ThemeToggle.vue":{"category":"Paintbrush","description":"","emit":[],"example":[],"icon":"moon","name":"ThemeToggle","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"0.0.1"},"components/Sidebar/Category.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"sticker","name":"SidebarCategory","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Sidebar/Container.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"sidebar-simple","name":"SidebarContainer","note":"","property":[{"default":" {\\n    sidebarSpacing: \'double-unit\'\\n  }","description":"Spacing between sidebar parts","name":"sidebarSpacing","required":false,"type":"string "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.1.0"},"components/Sidebar/Link.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"link-simple","name":"SidebarLink","note":"","property":[{"default":" {\\n    autoTitle: true,\\n    iconColor: \'primary\',\\n    iconVariant: \'regular\'\\n  }","description":"Wrap text in Text component","name":"autoTitle","required":false,"type":"boolean "},{"default":" {\\n    autoTitle: true,\\n    iconColor: \'primary\',\\n    iconVariant: \'regular\'\\n  }","description":"Link to navigate to","name":"href","required":false,"type":"string "},{"default":" {\\n    autoTitle: true,\\n    iconColor: \'primary\',\\n    iconVariant: \'regular\'\\n  }","description":"Icon to display","name":"icon","required":false,"type":"undefined | IconTypes "},{"default":" {\\n    autoTitle: true,\\n    iconColor: \'primary\',\\n    iconVariant: \'regular\'\\n  }","description":"Color of icon","name":"iconColor","required":false,"type":"string "},{"default":" {\\n    autoTitle: true,\\n    iconColor: \'primary\',\\n    iconVariant: \'regular\'\\n  }","description":"Variant of icon","name":"iconVariant","required":false,"type":"IconVariants "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"1.2.1"},"components/Table/Container.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"table","name":"TableContainer","note":"","property":[{"default":" {\\n    columnGap: \'var(--double-unit","description":"Space between columns","name":"columnGap","required":false,"type":"string "},{"default":" {\\n    columnGap: \'var(--double-unit","description":"Column layout: {align?: string, justify?: string, place?: string, width: string","name":"layout","required":false,"type":"TableColumn[] "}],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"0.1.0"},"components/Table/Row.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"rows","name":"TableRow","note":"","property":[],"renderedExample":[],"see":[],"tag":[],"usage":"","version":"0.1.0"}}')
    // MARK-END
}
