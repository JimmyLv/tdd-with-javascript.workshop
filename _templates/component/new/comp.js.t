---
to: src/components/<%= name %>.js
---
<% const comp = h.inflection.undasherize(name) -%>
<% if(locals.stateful) { -%>
import React, { Component } from 'react'
import './<%= name %>.css'

class <%= comp %> extends Component {
  render() {
    return <div>edit me: at components/<%= name %>.js</div>
  }
}
<% } else if(locals.functional) { -%>
import React from 'react'
const <%= comp %> = props => <div>edit me: at components/<%= name %>.js</div>
<% } else { -%>
import React, { PureComponent } from 'react'
class <%= comp %> extends PureComponent {
  render() {
    return <div>edit me: at components/<%= name %>.js</div>
  }
}
<% } -%>

export default <%= comp %>