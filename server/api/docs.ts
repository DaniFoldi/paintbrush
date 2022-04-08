// TODO remove this once useFetch works properly

import { IncomingMessage, ServerResponse } from 'node:http'


export default async (req: IncomingMessage, res: ServerResponse) => {
  res
    .writeHead(200, { 'Content-Type': 'application/json' })
    // MARK-BEGIN
    .end('{"components/AutoLink.vue":{"description":"","example":[],"name":"AutoLink","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Center.vue":{"description":"","example":[],"name":"Center","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Checkbox.vue":{"description":"","example":[],"name":"Checkbox","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/GradientText.vue":{"description":"","example":[],"name":"GradientText","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Icon.vue":{"description":"Icon component from Phosphor Icons","example":[],"name":"Icon","note":"For an icon list see https://phosphoricons.com/","property":[{"default":"\'primary\'","description":"Icon color, can be from the color palette","name":"color","required":false,"type":"string"},{"description":"Icon name as it appears in Phosphor Icons","name":"name","required":true,"type":"string"},{"default":"\'16px\'","description":"Icon size, can be any valid CSS value","name":"size","required":false,"type":"string"}],"renderedExample":["<Icon name=\\"chat-dots\\" size=\\"32px\\" />","<Icon color=\\"white\\" name=\\"mouse\\" size=\\"24px\\" />"],"see":[],"tags":[],"usage":"<Icon name=\\"gear\\" />","version":"1.0.0"},"components/IconButton.vue":{"description":"","example":[],"name":"IconButton","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/KeyText.vue":{"description":"","example":[],"name":"KeyText","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/MultilineCode.vue":{"description":"","example":[],"name":"MultilineCode","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/PageContainer.vue":{"description":"","example":[],"name":"","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"0.0.1"},"components/PageTitle.vue":{"description":"PageTitle component to display the main page title","example":[],"name":"PageTitle","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<PageTitle>Hello</PageTitle>","version":"1.0.0"},"components/Paintbrush.vue":{"description":"Main component to be used everywhere","example":[],"name":"Paintbrush","note":"This component should be wrapping every other Paintbrush component used","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<Paintbrush>\\n  <Text>Hello world</Text>\\n</Paintbrush>","version":"1.0.0"},"components/PoweredBy.vue":{"description":"","example":[],"name":"PoweredBy","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/PrimaryButton.vue":{"description":"","example":[],"name":"PrimaryButton","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Subtitle.vue":{"description":"Subtitle component to display subtitles","example":[],"name":"Subtitle","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<Subtitle>Hello</Subtitle>","version":"1.0.0"},"components/Text.vue":{"description":"Text component to display text","example":[],"name":"Text","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"<Text>Lorem ipsum dolor sit amet</Text>","version":"1.0.0"},"components/ThemeToggle.vue":{"description":"","example":[],"name":"ThemeToggle","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Sidebar/Category.vue":{"description":"","example":[],"name":"","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"0.0.1"},"components/Sidebar/Container.vue":{"description":"","example":[],"name":"SidebarContainer","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"},"components/Sidebar/Link.vue":{"description":"","example":[],"name":"SidebarLink","note":"","property":[],"renderedExample":[],"see":[],"tags":[],"usage":"","version":"1.0.0"}}')
    // MARK-END
}