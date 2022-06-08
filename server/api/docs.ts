// #MARK(PB-2)

import { IncomingMessage, ServerResponse } from 'node:http'


export default async (req: IncomingMessage, res: ServerResponse) => {
  res
    .writeHead(200, { 'Content-Type': 'application/json' })
    // MARK-BEGIN
    .end('{"components/AutoLink.vue":{"category":"Basic","description":"SSR/SPA-friendly link component","emit":[],"example":[],"icon":"link","name":"AutoLink","note":"","property":[{"default":"","description":"URL to navigate to","name":"href","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<AutoLink href=\\"/dashboard\\">Dashboard</AutoLink>","version":"1.1.1"},"components/Breadcrumbs.vue":{"category":"Display","description":"Show the path of the current path","emit":[],"example":[],"icon":"path","name":"Breadcrumbs","note":"","property":[{"default":"","description":"array of breadcrumbs: { iconColor?: string, iconName: IconTypes, iconVariant?: IconVariants, text: string, underline?: boolean","name":"path","required":false,"type":"Breadcrumb[] "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Breadcrumbs :path=\\"[{ iconName: \'file\', text: \'some.txt\', underline: true }]\\" />","version":"0.1.0"},"components/Button.vue":{"category":"Basic","description":"Button component with optional gradient or ghost effect","emit":[],"example":[],"icon":"hand-pointing","name":"Button","note":"","property":[{"default":false,"description":"Capitalize the button text","name":"capitalize","required":false,"type":"boolean "},{"default":"primary","description":"Background color of the button","name":"color","required":false,"type":"string "},{"default":false,"description":"Add a ghost effect to the button","name":"ghost","required":false,"type":"boolean "},{"default":"","description":"Set the 2nd gradient color","name":"gradient","required":false,"type":"string  "},{"default":false,"description":"Make the button larger","name":"large","required":false,"type":"boolean "},{"default":false,"description":"Make the button smaller","name":"small","required":false,"type":"boolean "},{"default":"button","description":"Button type","name":"type","required":false,"type":"\'button\' | \'submit\' | \'reset\' "},{"default":false,"description":"Uppercase the button text","name":"uppercase","required":false,"type":"boolean "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Button color=\\"primary\\">\\n  button\\n</Button>","version":"1.4.0"},"components/ButtonGroup.vue":{"category":"Layout","description":"Align a group of buttons","emit":[],"example":[],"icon":"arrows-in-line-vertical","name":"ButtonGroup","note":"","property":[{"default":"","description":"height of buttons","name":"height","required":false,"type":"string "},{"default":"","description":"width of buttons","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<ButtonGroup width=\\"50px\\">\\n  <Button>click</Button>\\n  <Button>some</Button>\\n  <Button>buttons</Button>\\n</ButtonGroup>","version":"1.1.0"},"components/Card.vue":{"category":"Layout","description":"Visual building block with a separate background color","emit":[],"example":[],"icon":"cards","name":"Card","note":"","property":[{"default":"background","description":"Background color of card","name":"background","required":false,"type":"string "},{"default":"","description":"Display card as inline","name":"inline","required":false,"type":"boolean "},{"default":false,"description":"Internal padding","name":"padded","required":false,"type":"boolean | string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Card>\\n  <Input type=\\"text\\">Username</Input>\\n  <Input type=\\"password\\"Password</Input>\\n</Card>","version":"1.1.1"},"components/Checkbox.vue":{"category":"Form","description":"Simple checkbox component","emit":[{"description":"v-model update","name":"update:modelValue","payload":"value","type":"boolean"}],"example":[],"icon":"check-square","name":"Checkbox","note":"","property":[{"default":true,"description":"wrap the contents in <Text>","name":"autoWrap","required":false,"type":"boolean "},{"default":"","description":"v-model value","name":"modelValue","required":false,"type":"boolean "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Checkbox v-model=\\"accepted\\">Accept terms of service</Checkbox>","version":"0.2.0"},"components/Container.vue":{"category":"Layout","description":"Container component for pages, main content and elements","emit":[],"example":[],"icon":"package","name":"Container","note":"","property":[{"default":false,"description":"Display container as article mode, with a maximum width","name":"article","required":false,"type":"boolean "},{"default":false,"description":"Center container along axes","name":"center","required":false,"type":"boolean | \'block\' | \'inline\' "},{"default":"","description":"Specify custom grid-template-columns","name":"grid","required":false,"type":"string "},{"default":false,"description":"Display container as inline","name":"inline","required":false,"type":"boolean "},{"default":"","description":"Badge in top left corner","name":"leftBadge","required":false,"type":"string "},{"default":false,"description":"Stretch container to maximum width and height","name":"max","required":false,"type":"boolean "},{"default":false,"description":"Apply padding","name":"padded","required":false,"type":"boolean | string "},{"default":"","description":"Badge in top right corner","name":"rightBadge","required":false,"type":"string "},{"default":false,"description":"Split container into two halves","name":"split","required":false,"type":"boolean "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Container>Summary</Container>","version":"1.7.0"},"components/Copyright.vue":{"category":"Misc","description":"Display copyright information of a site","emit":[],"example":[],"icon":"copyright","name":"Copyright","note":"","property":[{"default":"","description":"Icon and text color","name":"color","required":false,"type":"string "},{"default":"","description":"Displayed end year","name":"endYear","required":false,"type":"number "},{"default":"","description":"Displayed start year","name":"startYear","required":false,"type":"number "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Copyright :startYear=\\"2020\\">Author</Copyright>","version":"1.1.0"},"components/Float.vue":{"category":"Misc","description":"Display a floating border around an element","emit":[],"example":[],"icon":"anchor","name":"Float","note":"This component should be wrapped with <ClientOnly />","property":[{"default":"","description":"Ref of element to highlight","name":"above","required":false,"type":"HTMLElement | null "},{"default":"primary","description":"Border color","name":"color","required":false,"type":"string "},{"default":4,"description":"Distance around element","name":"distance","required":false,"type":"number "},{"default":"var(--unit)","description":"Border radius","name":"radius","required":false,"type":"string "},{"default":"var(--unit)","description":"Border width","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Float :above=\\"button\\" :distance=\\"8\\" radius=\\"8px\\" width=\\"4px\\" />\\n<Button ref=\\"button\\">Click</Button>","version":"0.1.1"},"components/FocusMark.vue":{"category":"Misc","description":"Dim the page except for target element","emit":[],"example":[],"icon":"hand-waving","name":"FocusMark","note":"This component should be wrapped with <ClientOnly />","property":[{"default":0,"description":"Distance around element","name":"distance","required":false,"type":"number "},{"default":false,"description":"Toggle","name":"off","required":false,"type":"boolean "},{"default":0.35,"description":"Shadow opacity","name":"opacity","required":false,"type":"number "},{"default":false,"description":"Round borders","name":"rounded","required":false,"type":"boolean | string "},{"default":"","description":"Target element","name":"target","required":false,"type":"any "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<FocusMark :target=\\"button\\" :distance=\\"8\\" rounded width=\\"4px\\" />\\n<Button ref=\\"button\\">Click</Button>","version":"0.2.2"},"components/Form.vue":{"category":"Form","description":"Form component with automatic submit prevention","emit":[{"description":"Form is submitted","name":"pb-submit","payload":"target","type":"HTMLFormElement"}],"example":[],"icon":"cursor-text","name":"Form","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Form>\\n  <Input type=\\"text\\">Username</Input>\\n  <Input type=\\"password\\"Password</Input>\\n</Form>","version":"1.0.0"},"components/Highlight.vue":{"category":"Visual","description":"Draw the user\'s attention to a piece of text","emit":[],"example":[],"icon":"traffic-sign","name":"Highlight","note":"","property":[{"default":true,"description":"Wrap the text in Text","name":"autoWrap","required":false,"type":"boolean "},{"default":false,"description":"Error highlight type","name":"error","required":false,"type":"boolean "},{"default":"inherit","description":"Icon color","name":"iconColor","required":false,"type":"string "},{"default":"undefined","description":"Icon name","name":"iconName","required":false,"type":"IconTypes | undefined "},{"default":"regular","description":"Icon variant","name":"iconVariant","required":false,"type":"IconVariants "},{"default":false,"description":"Info highlight type","name":"info","required":false,"type":"boolean "},{"default":false,"description":"Quote highlight type","name":"quote","required":false,"type":"boolean "},{"default":false,"description":"Success highlight type","name":"success","required":false,"type":"boolean "},{"default":false,"description":"Warning highlight type","name":"warning","required":false,"type":"boolean "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Highlight warning iconName=\\"warning\\">\\n  This feature is currently in beta.\\n</Highlight","version":"1.1.2"},"components/Icon.vue":{"category":"Basic","description":"Icon component from Phosphor Icons","emit":[],"example":[],"icon":"palette","name":"Icon","note":"For an icon list see https://phosphoricons.com","property":[{"default":"primary","description":"Icon color","name":"color","required":false,"type":"string "},{"default":"","description":"Icon name","name":"name","required":false,"type":"IconTypes "},{"default":"16px","description":"Icon font size","name":"size","required":false,"type":"string "},{"default":"regular","description":"Icon variant","name":"variant","required":false,"type":"IconVariants "}],"renderedExample":["<Icon name=\\"chat-dots\\" size=\\"32px\\" />","<Icon color=\\"white\\" name=\\"mouse\\" size=\\"24px\\" />"],"require":["phosphor-icons"],"see":[],"tag":[],"usage":"<Icon name=\\"gear\\" />","version":"1.1.0"},"components/IconButton.vue":{"category":"Basic","description":"A button with an embedded and auto aligned icon","emit":[],"example":[],"icon":"hand-pointing","name":"IconButton","note":"","property":[{"default":"primary","description":"Button color","name":"color","required":false,"type":"string "},{"default":"","description":"Icon name","name":"icon","required":false,"type":"IconTypes "},{"default":"white","description":"Icon color","name":"iconColor","required":false,"type":"string "},{"default":"20px","description":"Icon size","name":"iconSize","required":false,"type":"string "},{"default":"regular","description":"Icon variant","name":"iconVariant","required":false,"type":"IconVariants "}],"renderedExample":[],"require":["phosphor-icons"],"see":[],"tag":[],"usage":"<IconButton icon-name=\\"flask\\">Enable</IconButton>","version":"1.2.1"},"components/IconLink.vue":{"category":"Basic","description":"A link with an embedded and auto aligned icon","emit":[],"example":[],"icon":"link","name":"IconLink","note":"","property":[{"default":"text","description":"Button color","name":"color","required":false,"type":"string "},{"default":"","description":"Icon name","name":"icon","required":false,"type":"IconTypes "},{"default":"inherit","description":"Icon color","name":"iconColor","required":false,"type":"string "},{"default":"inherit","description":"Icon size","name":"iconSize","required":false,"type":"string "},{"default":"regular","description":"Icon variant","name":"iconVariant","required":false,"type":"IconVariants "}],"renderedExample":[],"require":["phosphor-icons"],"see":[],"tag":[],"usage":"<IconLink icon-name=\\"question\\">What is this</IconLink>","version":"1.0.0"},"components/Image.vue":{"category":"Basic","description":"Display an image","emit":[],"example":[],"icon":"image","name":"Image","note":"","property":[{"default":"","description":"Image alt text","name":"alt","required":false,"type":"string "},{"default":"100%","description":"Max height of the image","name":"maxHeight","required":false,"type":"string "},{"default":"100%","description":"Max width of the image","name":"maxWidth","required":false,"type":"string "},{"default":true,"description":"Round the corners","name":"rounded","required":false,"type":"boolean "},{"default":"","description":"Image source","name":"source","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Image source=\\"/assets/image.png\\" alt=\\"A beautiful photo\\">","version":"1.1.0"},"components/Input.vue":{"category":"Form","description":"Basic input component","emit":[{"description":"v-model update","name":"update:modelValue","payload":"value","type":"string"}],"example":[],"icon":"textbox","name":"Input","note":"","property":[{"default":true,"description":"Wrap text in Text component","name":"autoWrap","required":false,"type":"boolean "},{"default":"","description":"v-model value","name":"modelValue","required":false,"type":"string "},{"default":"","description":"Placeholder text","name":"placeholder","required":false,"type":"string "},{"default":"text","description":"Input type","name":"type","required":false,"type":"string "},{"default":"100%","description":"Width of input","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Input type=\\"email\\">Email address</Input>","version":"0.4.0"},"components/MultilineCode.vue":{"category":"Display","description":"Highlight some source code","emit":[],"example":[],"icon":"code","name":"MultilineCode","note":"","property":[{"default":"","description":"Source code to highlight","name":"code","required":false,"type":"string "},{"default":"auto","description":"Language to use","name":"language","required":false,"type":"string "}],"renderedExample":[],"require":["highlight.js"],"see":[],"tag":[],"usage":"<MultilineCode :code=\\"let i = 0;\\" />","version":"1.1.0"},"components/Pagination.vue":{"category":"Layout","description":"Automatically paginate content","emit":[],"example":[],"icon":"dots-three","name":"Pagination","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Pagination :total-items=\\"110\\" :items-per-page=\\"25\\" />","version":"1.0.1"},"components/Paintbrush.vue":{"category":"","description":"Main component to be used everywhere","emit":[],"example":[],"icon":"paintbrush","name":"Paintbrush","note":"This component should be wrapping every other Paintbrush component used, see Getting Started","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Paintbrush ...>\\n  <Text>Hello world</Text>\\n</Paintbrush>","version":"1.0.0"},"components/Popup.vue":{"category":"","description":"","emit":[],"example":[],"name":"Popup","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"0.0.1"},"components/PoweredBy.vue":{"category":"Paintbrush","description":"Display that your awesome site is powered by none other than Paintbrush","emit":[],"example":[],"icon":"plug","name":"PoweredBy","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<PoweredBy />","version":"1.0.0"},"components/Runtime.vue":{"category":"Misc","description":"Render any html at runtime","emit":[],"example":[],"icon":"brain","name":"Runtime","note":"Nuxt/vue does not process the given html","property":[{"default":"","description":"CSS classes to apply to the rendered elemnent","name":"class","required":false,"type":"string "},{"default":"div","description":"Top level HTML element","name":"element","required":false,"type":"string "},{"default":"","description":"innterHTML of element","name":"rendered","required":false,"type":"string "}],"renderedExample":["<Runtime html=\\"Hello World\\" />","<Runtime element=\\"p\\" html=\\"Some <em>text</em>\\" class=\\"important\\" />"],"require":[],"see":[],"tag":[],"usage":"<Runtime element=\\"h1\\" html=\\"Hello World\\" />","version":"1.0.0"},"components/Separator.vue":{"category":"Layout","description":"Visually separate blocks of content with a line","emit":[],"example":[],"icon":"text-align-justify","name":"Separator","note":"","property":[{"default":true,"description":"Round the edges","name":"rounded","required":false,"type":"boolean "},{"default":false,"description":"Apply spacing on both sides","name":"spaced","required":false,"type":"boolean "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Separator />","version":"1.2.0"},"components/Shortcut.vue":{"category":"Visual","description":"Elegantly present keyboard shortcuts","emit":[],"example":[],"icon":"keyboard","name":"Shortcut","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Shortcut color=\\"secondary\\" :keys=\\"[ \'mod\', \'shift\', \'k\' ]\\" />","version":"1.1.0"},"components/Spinner.vue":{"category":"Basic","description":"Display a loading indicator","emit":[],"example":[],"icon":"circle-notch","name":"Spinner","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Spinner circles>","version":"1.0.0"},"components/Stat.vue":{"category":"Display","description":"Display statistics with an optional maximum","emit":[],"example":[],"icon":"presentation-chart","name":"Stat","note":"","property":[{"default":true,"description":"Wrap text in Text component","name":"autoWrap","required":false,"type":"boolean "},{"default":"text","description":"Color of text","name":"color","required":false,"type":"string "},{"default":"inherit","description":"Color of icon","name":"iconColor","required":false,"type":"string "},{"default":"undefined","description":"Icon to display","name":"iconName","required":false,"type":"IconTypes | undefined "},{"default":"regular","description":"Variant of icon","name":"iconVariant","required":false,"type":"IconVariants "},{"default":"undefined","description":"Maximum value","name":"max","required":false,"type":"number | undefined "},{"default":"","description":"Current value","name":"value","required":false,"type":"number "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Stat :max=\\"800\\" :value=\\"500\\">\\n  Number of connected devices\\n</Stat>","version":"1.0.0"},"components/Text.vue":{"category":"Basic","description":"Text component to display text","emit":[],"example":[],"icon":"text-aa","name":"Text","note":"","property":[{"default":false,"description":"Bold text","name":"bold","required":false,"type":"boolean "},{"default":false,"description":"Capitalize text","name":"capitalize","required":false,"type":"boolean "},{"default":false,"description":"Gradient text","name":"gradient","required":false,"type":"boolean | string "},{"default":false,"description":"Important text","name":"important","required":false,"type":"boolean "},{"default":false,"description":"Inline text","name":"inline","required":false,"type":"boolean "},{"default":false,"description":"Italic text","name":"italic","required":false,"type":"boolean "},{"default":false,"description":"Light text","name":"light","required":false,"type":"boolean "},{"default":false,"description":"Render as span within other Text component","name":"part","required":false,"type":"boolean "},{"default":false,"description":"Render as h3","name":"sectiontitle","required":false,"type":"boolean "},{"default":false,"description":"Render as h2","name":"subtitle","required":false,"type":"boolean "},{"default":false,"description":"Render as h1","name":"title","required":false,"type":"boolean "},{"default":false,"description":"Underline text","name":"underline","required":false,"type":"boolean "},{"default":false,"description":"Uppercase text","name":"uppercase","required":false,"type":"boolean "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Text>Lorem ipsum dolor sit amet</Text>","version":"1.4.0"},"components/ThemeToggle.vue":{"category":"Paintbrush","description":"Display a toggle for the page theme","emit":[],"example":[],"icon":"moon","name":"ThemeToggle","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<ThemeToggle />","version":"0.2.2"},"components/Toggle.vue":{"category":"Form","description":"Basic toggle component","emit":[{"description":"v-model update","name":"update:modelValue","payload":"value","type":"string"}],"example":[],"icon":"toggle-right","name":"Toggle","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Toggle color=\\"lightergray\\" />","version":"1.0.0"},"components/Transform.vue":{"category":"Misc","description":"Transform any component/html element.","emit":[],"example":[],"icon":"arrows-clockwise","name":"Transform","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"<Transform rotate=\\"45deg\\">\\n  <ShapeRectangle width=\\"80px\\" />\\n</Transform>","version":"0.1.0"},"components/Chart/Bar.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"chart-bar","name":"ChartBar","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'bar\', number[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'bar\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Chart/Bubble.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"dots-six-vertical","name":"ChartBubble","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'bubble\', BubbleDataPoint[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'bubble\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Chart/Doughnut.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"chart-pie","name":"ChartDoughnut","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'doughnut\', number[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'doughnut\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Chart/Line.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"chart-line","name":"ChartLine","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'line\', (number | ScatterDataPoint | null)[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'line\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.2"},"components/Chart/Pie.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"chart-pie","name":"ChartPie","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'pie\', number[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'pie\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Chart/Polar.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"chart-pie-slice","name":"ChartPolar","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'polarArea\', number[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'polarArea\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Chart/Radar.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"globe-hemisphere-west","name":"ChartRadar","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'radar\', (number | null)[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'radar\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Chart/Scatter.vue":{"category":"Chart","description":"","emit":[],"example":[],"icon":"dots-nine","name":"ChartScatter","note":"For the height property to work, set { maintainAspectRatio: false } in options","property":[{"default":"","description":"chart data to render","name":"data","required":false,"type":"TChartData<\'scatter\', (number | ScatterDataPoint | null)[], unknown> "},{"default":"auto","description":"height of chart","name":"height","required":false,"type":"string "},{"default":{},"description":"options for chart","name":"options","required":false,"type":"TChartOptions<\'scatter\'> "},{"default":"auto","description":"width of chart","name":"width","required":false,"type":"string "}],"renderedExample":[],"require":["vue-chartjs"],"see":[],"tag":[],"usage":"","version":"0.1.1"},"components/Menubar/Container.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"list","name":"MenubarContainer","note":"","property":[{"default":"double-unit","description":"Spacing between menubar parts","name":"menuPartSpacing","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"1.1.1"},"components/Menubar/Link.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"link-simple","name":"MenubarLink","note":"","property":[{"default":true,"description":"Wrap text in Text component","name":"autoWrap","required":false,"type":"boolean "},{"default":"","description":"Link to navigate to","name":"href","required":false,"type":"string "},{"default":"undefined","description":"Icon to display","name":"icon","required":false,"type":"IconTypes "},{"default":"primary","description":"Color of icon","name":"iconColor","required":false,"type":"string "},{"default":"regular","description":"Variant of icon","name":"iconVariant","required":false,"type":"IconVariants "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"1.2.1"},"components/Parallax/Display.vue":{"category":"Visual","description":"","emit":[],"example":[],"icon":"stack","name":"ParallaxDisplay","note":"","property":[],"renderedExample":[],"require":["atropos"],"see":[],"tag":[],"usage":"","version":"0.1.0"},"components/Parallax/Item.vue":{"category":"Visual","description":"","emit":[],"example":[],"icon":"stack-simple","name":"ParallaxItem","note":"","property":[],"renderedExample":[],"require":["atropos"],"see":[],"tag":[],"usage":"","version":"0.1.0"},"components/Shape/Circle.vue":{"category":"Visual","description":"","emit":[],"example":[],"icon":"circle","name":"ShapeCircle","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Shape/Rectangle.vue":{"category":"Visual","description":"","emit":[],"example":[],"icon":"square","name":"ShapeRectangle","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Sidebar/Category.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"sticker","name":"SidebarCategory","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"1.0.0"},"components/Sidebar/Container.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"sidebar-simple","name":"SidebarContainer","note":"","property":[{"default":"double-unit","description":"Spacing between sidebar parts","name":"sidebarSpacing","required":false,"type":"string "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"1.2.0"},"components/Sidebar/Link.vue":{"category":"Navigation","description":"","emit":[],"example":[],"icon":"link-simple","name":"SidebarLink","note":"","property":[{"default":true,"description":"Wrap text in Text component","name":"autoWrap","required":false,"type":"boolean "},{"default":"","description":"Link to navigate to","name":"href","required":false,"type":"string "},{"default":"","description":"Icon to display","name":"icon","required":false,"type":"undefined | IconTypes "},{"default":"primary","description":"Color of icon","name":"iconColor","required":false,"type":"string "},{"default":"regular","description":"Variant of icon","name":"iconVariant","required":false,"type":"IconVariants "}],"renderedExample":[],"require":["phosphor-icons"],"see":[],"tag":[],"usage":"","version":"1.3.1"},"components/Table/Container.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"table","name":"TableContainer","note":"","property":[{"default":"var(--double-unit)","description":"Space between columns","name":"columnGap","required":false,"type":"string "},{"default":"","description":"Column layout: {align?: string, justify?: string, place?: string, width: string","name":"layout","required":false,"type":"TableColumn[] "}],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"0.1.0"},"components/Table/Row.vue":{"category":"Layout","description":"","emit":[],"example":[],"icon":"rows","name":"TableRow","note":"","property":[],"renderedExample":[],"require":[],"see":[],"tag":[],"usage":"","version":"0.1.0"}}')
    // MARK-END
}
