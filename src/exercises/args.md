# The arguments passed to the program consist of flags and values.

one character(minus sign) zero, or one value

function parser()
  schema: string => flags: string
                    values*: []

function schema()
  type: string => values: []

number and types
using the names of the flags

## -l -p 8080 -d /usr/logs  单个value

'l' (logging) flag
boolean

* [ ] -l => { l: True }
* [ ] (-l) => { l: False }

'p' (port) flag
integer

* [ ] -p => { p: 8080 }
* [ ] (-p) => { p: 0 }

'd' (directory)
string

* [ ] -d /usr/logs => { d: '/usr/logs' }
* [ ] (-d) => { d: '' }

### default value
- 'False' for a boolean
- 0 for a number
- '' for a string

error message

## -g this,is,a,list -d 1,2,-3,5  处理多个values

'g' flag
list of strings: ['this', 'is', 'a', 'list']

* [ ] -g this,is,a,list => { g: ['this', 'is', 'a', 'list'] }

'd' flag
list of integers [1,2,-3,5]

* [ ] -g this,is,a,list => { d: [1,2,-3,5] }

## 集成测试

* [ ] -g this,is,a,list -d 1,2,-3,5 => 
  { 
    l: False,
    p: 0,
    g: ['this', 'is', 'a', 'list'], 
    d: ['this', 'is', 'a', 'list'], 
  }

* [ ] -l -p 8080 -d /usr/logs -g this,is,a,list => 
  { 
    l: True,
    p: 8080,
    g: ['this', 'is', 'a', 'list'], 
    d: '/usr/logs', 
  }

extensible
new types
