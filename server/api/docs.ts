// #MARK(PB-2)

import { IncomingMessage, ServerResponse } from 'node:http'


export default async (req: IncomingMessage, res: ServerResponse) => {
  res
    .writeHead(200, { 'Content-Type': 'application/json' })
    // MARK-BEGIN
    .end('{"components/AutoLink.vue":{"category":"","description":"","example":[],"icon":"link","name":"AutoLink","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Button.vue":{"category":"","description":"Button component with optional gradient or ghost effect","example":[],"icon":"hand-pointing","name":"Button","note":"","property":[{"default":"false","description":"Capitalize the text","name":"capitalize","required":false,"type":"boolean"},{"default":"\'primary\'","description":"Button color, can be from the color palette","name":"color","required":false,"type":"string"},{"default":"false","description":"Add a ghost effect","name":"ghost","required":false,"type":"boolean"},{"default":"\'primary\'","description":"Button gradient color, can be from the color palette","name":"gradient","required":false,"type":"string"},{"default":"\'button\'","description":"Button type, can be button, submit, reset","name":"type","required":false,"type":"string"},{"default":"false","description":"Uppercase the text","name":"uppercase","required":false,"type":"boolean"}],"renderedExample":[],"see":[],"tags":[],"usage":"<Button color=\\"primary\\">\\n  button\\n</Button>","version":"1.1.0"},"components/ButtonGroup.vue":{"category":"","description":"","example":[],"icon":"arrows-in-line-vertical","name":"ButtonGroup","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Checkbox.vue":{"category":"","description":"","example":[],"icon":"check-square","name":"Checkbox","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Container.vue":{"category":"","description":"Container component for pages, main content and elements","example":[],"icon":"package","name":"Container","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<Container>Summary</Container>","version":"1.3.1"},"components/Form.vue":{"category":"","description":"","example":[],"icon":"cursor-text","name":"Form","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Glue.vue":{"category":"","description":"","example":[],"icon":"columns","name":"Glue","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"0.1.0"},"components/Icon.vue":{"category":"","description":"Icon component from Phosphor Icons","example":[],"icon":"palette","name":"Icon","note":"For an icon list see https://phosphoricons.com/","property":[{"default":"\'primary\'","description":"Icon color, can be from the color palette","name":"color","required":false,"type":"string"},{"description":"Icon name as it appears in Phosphor Icons","name":"name","required":true,"type":"string"},{"default":"\'16px\'","description":"Icon size, can be any valid CSS value","name":"size","required":false,"type":"string"}],"renderedExample":["<Icon name=\\"chat-dots\\" size=\\"32px\\" />","<Icon color=\\"white\\" name=\\"mouse\\" size=\\"24px\\" />"],"see":[],"tags":[],"usage":"<Icon name=\\"gear\\" />","version":"1.1.0"},"components/IconButton.vue":{"category":"","description":"","example":[],"icon":"hand-pointing","name":"IconButton","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Input.vue":{"category":"","description":"","example":[],"icon":"textbox","name":"Input","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"0.0.1"},"components/MultilineCode.vue":{"category":"","description":"","example":[],"icon":"code","name":"MultilineCode","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.1.0"},"components/Paintbrush.vue":{"category":"","description":"Main component to be used everywhere","example":[],"icon":"paintbrush","name":"Paintbrush","note":"This component should be wrapping every other Paintbrush component used","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<Paintbrush>\\n<Text>Hello world</Text>\\n</Paintbrush>","version":"1.0.0"},"components/PoweredBy.vue":{"category":"","description":"","example":[],"icon":"plug","name":"PoweredBy","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Runtime.vue":{"category":"","description":"Render any html at runtime","example":[],"icon":"brain","name":"Runtime","note":"Nuxt does not process the given html","property":[{"default":"\'\'","description":"CSS classes to apply to the rendered html","name":"class","required":false,"type":"string"},{"description":"Html to render","name":"html","required":true,"type":"string"}],"renderedExample":["<Runtime html=\\"Hello World\\" />","<Runtime element=\\"p\\" html=\\"Some <em>text</em>\\" class=\\"important\\" />"],"see":[],"tags":[],"usage":"<Runtime element=\\"h1\\" html=\\"Hello World\\" />","version":"1.0.0"},"components/Separator.vue":{"category":"","description":"","example":[],"icon":"arrows-horizontal","name":"Separator","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Text.vue":{"category":"","description":"Text component to display text","example":[],"icon":"text-aa","name":"Text","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<Text>Lorem ipsum dolor sit amet</Text>","version":"1.1.0"},"components/ThemeToggle.vue":{"category":"","description":"","example":[],"icon":"moon","name":"ThemeToggle","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"0.0.1"},"components/Sidebar/Category.vue":{"category":"Navigation","description":"","example":[],"icon":"sticker","name":"SidebarCategory","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Sidebar/Container.vue":{"category":"Navigation","description":"","example":[],"icon":"sidebar-simple","name":"SidebarContainer","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Sidebar/Link.vue":{"category":"Navigation","description":"","example":[],"icon":"link-simple","name":"SidebarLink","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.2.0"}}')
    // MARK-END
}
