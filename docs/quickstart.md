# 指南

## 快速开始

您可以通过`npm`或`CDN`安装此插件。

```bash
npm install vcc-validate --save
```

## 用法

?>示例使用`ES2015`语法，如果您还没有，请确保在`ES2015`上使用。

```js
import Vue from 'vue';
import VccValidate from 'vcc-validate';
Vue.use(VccValidate);
or
import VccValidate from '@/utils/vcc-validate';
Vue.use(VccValidate);
```

### 基本示例

您只需将 `v-vcc-field` 指令添加到要验证的HTML输入或Vue组件
然后，向指令传递一个 你想校验的字段名称。

```html
<input v-vcc-field="'userItem.lspuLoginName'" :value.sync="userItem.lspuLoginName"/>
```

要显示错误消息，我们只需使用该`api().getMessages(fieldStr)`方法获取该字段错误:

```html
{{vccTest.api().getMessages('userItem.lspuLoginName')}}
```

```js

var app = new Vue({
  el: '#app',
  data: {
    vccTest:new this.vccValidator(),
    message: 'Hello VccValidate!'
  }
})
```

## 显示错误

### 显示单个错误消息

### 显示多条错误消息

### 显示指定的错误

## 验证规则

VccValidate提供了一系列开箱即用的验证规则，它们都是本地化的，涵盖了大多数验证需求：

### email

## 自定义规则

//todo

### 创建自定义规则

### 使用自定义规则

## 全局 Find BorderColor 指令

* `<`:上一个同胞元素
* `>`:下一个同胞元素
* `=`:当前元素
* `+`:父元素
* `-`:子元素

## 配置项

### openWarningLine

是否打开警告线  默认 false

### warningLineColor

警告线颜色 默认 red

### openDebugLog

是否 打开调试日志 默认 false

```js

    /**
     * 自动 （禁用|启用） 提交按钮  默认 false
     * 如果验证不通过将会 禁用提交按钮 通过则启用
     * ps:请使用 v-vcc-submit-button 标注你的 提交按钮
     */
    autoDisableEnableSubmitButton: false,
    fields: {}
```

## API

以下是插件提供的公共方法列表。

### addField

```js
      /**
       * 添加新字段
       * @param {String} fieldStr
       * @param {Object} options
       * @param {Boolean} immediate 是否立刻验证 默认 false
       */
      addField: function (fieldStr, options, immediate = false)
```

### removeField

删除给定的字段

```js
      /**
       * 添加新字段
       * @param {String} fieldStr
       */
      removeField: function (fieldStr)
```

### resetField

重置给定字段

```js
      /**
       * 重置给定字段
       */
      resetField: function (fieldStr)
```

### destroy

销毁插件
当验证完成后自动调用

### validate

手动验证表单。当您想要通过单击按钮或链接而不是提交按钮来验证表单时，它非常有用.

### isValid

如果所有表单字段都有效，则返回 true。否则，返回false.

### disableEnableSubmitButton

禁用或启用提交按钮

```js
//todo
```

### updateStatus

更新给定字段的验证器结果

```js
      /**
      * 更新状态
      * @param fieldStr
      * @param status
      * @param validatorRuleName
      * */
      updateStatus: function (fieldStr, status, validatorRuleName)
```

### revalidateField

重新验证给定字段

```js
  /**
  * 重新验证给定字段
  * @param fieldStr
  */
  revalidateField: function (fieldStr)
```

### resetForm

 重置表格
 它隐藏所有错误元素和反馈图标,所有字段都标记为尚未验证

```js
      /**
      * 重置表格
      *
      */
      resetForm: function ()
```

### getMessages

获取错误消息

```js
      /**
      * 获取错误消息
      * @param fieldStr
      * @param validatorRuleName 验证规则名称
      */
      getMessages: function (fieldStr, validatorRuleName = null)
```

### updateMessage

更新错误信息

```js
      /**
       * 更新错误信息
       * @param fieldStr
       * @param validatorRuleName 验证规则名称
       * @param message 更新的信息
       */
      updateMessage: function (fieldStr, validatorRuleName, message)
```

### getOptions

获取现场选项

```js
//todo
```

### updateOption

更新特定验证器的选项

```js
//todo
```

## DEMO