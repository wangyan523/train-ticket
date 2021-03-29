### Context
- Provider 是父组件使用
- Consumer 是子组件使用 用来接收父组件的数据
- Context 可以嵌套传值
- ContextType 简化了组件接收值

### import动态导入文件
- eg: import(/* webpackChunkName:"xxx" */'xxx.js').then(...)

### lazy需要和suspense一起使用
- suspense是加载空隙显示，fallback需要显示jsx
- suspense无法加载错误文件，需要使用ErrorBoundary，捕获错误，需要在componentDidCatch生命钩子中使用

### 子组件渲染优化
- shouldComponentUpdate 可以优化子组件多次渲染
- PureComponent 也可以优化子组件的多次渲染，但是只有传入的props第一级发生变化才会渲染变化，注意使用场景
- 函数式组件可以使用memo包裹
- PureComponent和memo都只能做浅层对比，使用的是shallowEqual算法