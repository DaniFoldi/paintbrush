const stylelint = require('stylelint')


const ruleName = 'custom/no-future-comment'
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'Unexpected \'$1\' comment: \'$2\''
})
const meta = {
  url: 'https://github.com/DaniFoldi/paintbrush/blob/main/conf/stylelint-comment.cjs'
}

module.exports = stylelint.createPlugin(
  ruleName,
  function(enabled, { disallow = [ 'todo', 'fixme' ] }) {
    return (root, result) => {
      if (!enabled) {
        return
      }

      root.walkComments(node => {
        for (const word of disallow) {
          if (node.text.toLowerCase().includes(word.toLowerCase())) {
            stylelint.utils.report({
              message: messages.rejected.replace('$1', word).replace('$2', node.text),
              node,
              result,
              ruleName
            })
          }
        }
      })
    }
  }
)

module.exports.ruleName = ruleName
module.exports.messages = messages
module.exports.meta = meta
