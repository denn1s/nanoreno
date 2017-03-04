const toRegExp = require('path-to-regexp')

function escape(text) {
  return text.replace('\'', '\\\'').replace('\\', '\\\\')
}

module.exports = function routesLoader(source) {
  this.cacheable()

  const output = ['[\n']
  const routes = JSON.parse(source)
  let cutNum = 0

  for (const scene of routes) {
    const route = {
      path: scene.path ? scene.path : ('/' + (cutNum ? cutNum : '')),
      page: scene.page ? scene.page : './Cut',
      chunk: scene.chunk ? scene.chunk : 'main',
      data: scene
    }
    const keys = []
    const pattern = toRegExp(route.path, keys)
    const require = route.chunk && route.chunk === 'main' ?
      module => `Promise.resolve(require('${escape(module)}').default)` :
      module => `new Promise(function (resolve, reject) {
        try {
          require.ensure(['${escape(module)}'], function (require) {
            resolve(require('${escape(module)}').default)
          }${typeof route.chunk === 'string' ? `, '${escape(route.chunk)}'` : ''})
        } catch (err) {
          reject(err)
        }
      })`
    output.push('  {\n')
    output.push(`    path: '${escape(route.path)}',\n`)
    output.push(`    pattern: ${pattern.toString()},\n`)
    output.push(`    keys: ${JSON.stringify(keys)},\n`)
    output.push(`    page: '${escape(route.page)}',\n`)
    if (route.data) {
      output.push(`    data: ${JSON.stringify(route.data)},\n`)
    }
    output.push(`    load() {\n      return ${require(route.page)};\n    },\n`)
    output.push('  },\n')
  }

  output.push(']')
  cutNum += 1
  return `export default ${output.join('')};`
}
