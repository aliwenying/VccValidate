# 指南

## 入门

### 安装

您可以通过`npm`或`CDN`安装此插件。

```bash
npm install vcc-validate --save
```

### 用法

?>示例使用`ES2015`语法，如果您还没有，请确保在`ES2015`上使用。

```js
import Vue from 'vue';
import VccValidate from 'vcc-validate';
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
<el-input v-vcc-field="'modelForm[@userItem.lspuLoginName@]'" :value.sync="modelForm['userItem.lspuLoginName']">
<el-checkbox v-model="testSelect" v-vcc-field="'testSelect|for'" :label="key" class="check-item"
        v-for="(value,key) of carrierOptions" :key="key">{{value.label}}</el-checkbox>

<span class="validate-message"> {{vccTest.api().getMessages('modelForm[@userItem.lspuLoginName@]')}}</span>

<span class="validate-message"> {{vccTest.api().getMessages('testSelect')}}</span>
```

```js
export default {
      name: "userControlList",
      data() {
              return {
                    vccTest: new this.vccValidator(),
                    message: 'Hello VccValidate!'
              }
      },
      methods: {
            initVcc: () {
                         this.vccTest.init(this, {
                               openWarningLine: true,
                               fields: {
                                     'modelForm[@userItem.lspuLoginName@]': {
                                           validators: {
                                                 notEmpty: {
                                                       message: "请填写必填信息"
                                                 },
                                                 length: {
                                                       max: 10,
                                                       min: 2,
                                                       message: "min:2 max:10"
                                                 }

                                           }
                                     },
                                     'testSelect': {
                                           validators: {
                                                 notEmpty: {
                                                       message: "请选择必填信息"
                                                 },
                                                 length: {
                                                       max: 3,
                                                       min: 2,
                                                       message: "min:2 max:3"
                                                 }
                                           }
                                     },
                               }
                         });
            }
      }
}
```

## 显示错误

### 显示单个错误消息

```html
<input type="text"    v-vcc-field="'lspuEmail'" :value.sync="lspuEmail']">
<span>{{ vccTest.api().getMessagesOne('lspuEmail')}}</span>
```

### 显示多条错误消息

```html
<ul>
  <li  :key="error._uuid" v-for="error in vccTest.api().getMessagesList('modelForm[@userItem.lspuEmail@]')">{{ error.message }}</li>
</ul>
```

```js
//显示多条错误消息-数据格式:
[ { "validatorRuleName": "notEmpty", "message": "请填写邮箱地址" }, { "validatorRuleName": "isEmail", "message": "请输入正确的邮箱格式" } ]
```

### 显示所有错误

```html
    <ul>
      <li :key="error._uuid" v-for="error in vccTest.api().getMessagesList()">{{ error.message }}</li>
    </ul>
```

```js
//显示所有错误-数据格式:
 [{
             validatorRuleName: "notEmpty",
             message: "请填写必填信息",
             field: "modelForm['userItem.lspuLoginName']"
       },
       {
             validatorRuleName: "length",
             message: "min:2 max:10",
             field: "modelForm['userItem.lspuLoginName']"
       }
 ]
```

## 验证规则

VccValidate提供了一系列开箱即用的验证规则，它们都是本地化的，涵盖了大多数验证需求：

### isEmail

```js
/**
 * isEmail
 * zh-cn:检查字符串是否是电子邮件.
 * en-us:check if the string is an email.
 *
 */
```

### contains

```js
/**
 * contains
 * zh-cn:检查字符串是否包含种子.
 * en-us:check if the string contains the seed.
 *
 */
```

### equals

```js
/**
 * equals
 * zh-cn:检查字符串是否与比较匹配.
 * en-us:check if the string matches the comparison.
 *
 */
```

### isAfter

```js
/**
 * isAfter
 * zh-cn:检查字符串是否是指定日期之后的日期（默认为现在）.
 * en-us:check if the string is a date that's after the specified date (defaults to now).
 *
 */
```

### isAlpha

```js
/**
 * isAlpha
 * zh-cn:检查字符串是否只包含字母(a-zA-Z)
 * en-us:check if the string contains only letters (a-zA-Z).
 *
 */
```

### isAlphanumeric

```js
/**
 * isAlphanumeric
 * zh-cn:检查字符串是否只包含字母和数字
 * en-us:check if the string contains only letters and numbers.
 *
 */
 ```

### isAscii

```js
/**
 * isAscii
 * zh-cn:检查字符串是否仅包含ASCII字符.
 * en-us:check if the string contains ASCII chars only.
 */
 ```

### isBase64

```js
/**
 * isBase64
 * zh-cn:检查字符串是否为base64编码.
 * en-us:check if a string is base64 encoded.
 *
 */
 ```

### isBefore

```js
/**
 * isBefore
 * zh-cn:检查字符串是否是指定日期之前的日期
 * en-us:check if the string is a date that's before the specified date.
 *
 */
 ```

### isBoolean

```js
/**
 * isBoolean
 * zh-cn:检查字符串是否是布尔值.
 * en-us:check if a string is a boolean.
 *
 */
 ```

### isFloat

```js
/**
 * isFloat
 * zh-cn:检查字符串是否为浮点数.
 * en-us:check if the string is a float.
 *
 */
 ```

### isInt

```js
/**
 * isInt
 * zh-cn:检查字符串是否为整数.
 * en-us:check if the string is an integer.
 */
 ```

### length

```js
/**
 *
 * length
 * zh-cn:至少需要一个min和max选项.
 * en-us:min and max options is required.
 */
 ```

### notEmpty

```js
/**
* notEmpty
* zh-cn:检查输入值是否为空
* en-us:Check if input value is empty or not
*/
 ```

### regexp

```js
/**
* regexp
* zh-cn:检查值是否与给定的Javascript正则表达式匹配
* en-us:Check if the value matches given Javascript regular expression
*/
 ```

### isURL

```js
/**
 * isURL
 * zh-cn:检查字符串是否为URL.
 * en-us:check if the string is an URL.
*/
 ```

### isUppercase

```js
/**
 * isUppercase
 * zh-cn:检查字符串是否为大写.
 * en-us:check if the string is uppercase.
*/
 ```

### isNumeric

```js
/**
 * isNumeric
 * zh-cn:检查字符串是否只包含数字.
 * en-us:check if the string contains only numbers.
*/
 ```

## 自定义规则

### 创建自定义规则

```js
  this.VccValidate.Rules.extend('test', {
        /**
         * @param {Object} value value
         * @param {fieldName:'当前验证字段名称',oldVal:'上一次输入的数据'} $field 验证字段的一些信息
         * @param {随意定义这个对象的属性} validateRule 规则对象
         * 例如:
         * length: {
         *       max: 6,
         *       min: 2,
         *       message: "用户名长度最大6,不能低于2位"
         * }
         * length就是 validateRule 规则对象
         * 你可以随意定义 validateRule里的属性
         * @returns {Boolean} true:不通过 false:通过
         */
        validate: function (value, $field, validateRule) {
              //todo 你的逻辑
              return false;
        }
  });
```

### 使用规则

!>注意 message 是必须填写的

``` js
   'modelForm[@userItem.lspuPassword@]': {
         validators: {
               test: {
                     message: "请输入密码"
               },
         }
   }
```

## 全局 Find BorderColor 指令

全局指令是为了快速的找到  HTML输入或Vue组件  BorderColor.

采用了配置的方式例如:

```js
findBorderColorCmd={
'input':['=','[1]','-','>'],
'el-input':['=','-','<']
}
```

* `<`:上一个同胞元素
* `>`:下一个同胞元素
* `=`:当前元素
* `+`:父元素
* `-`:子元素
* `[x]` x 如节点有多个 x 代表第几个
* todo:此功能 在 1.6.0 版本完成

### 为什么有了 autoFindBorder 自动查找边框 还需要 Find BorderColor 指令？

```text
autoFindBorder:
是根据从上往下的方式 (当前没有子节点就返回当前节点) 对节点判断是否存在边框颜色,如存在则搜索终止返回当前找到的,
绝大部分ui框架的  HTML输入或Form表单里的Vue组件 都会有默认的边框颜色
所以我们几乎很少用到 Find BorderColor 指令,autoFindBorder 足够了
```

## 配置项

### openWarningLine

是否打开警告线  默认 false

### warningLineColor

警告线颜色 默认 red

```js

    /**
     * 自动 （禁用|启用） 提交按钮  默认 false
     * 如果验证不通过将会 禁用提交按钮 通过则启用
     * ps:请使用 v-vcc-submit-button 标注你的 提交按钮
     */
    autoDisableEnableSubmitButton: false,
    /**
     * v-vcc-submit-button 对应的 value  
     */
    submitButtonName: '',
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
参数 @param {Boolean} isDestroy 验证通过就销毁插件执行 `destroy` true 销毁  false 不销毁 默认false

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
      /**
       * 获取现场选项
       * @param {String} fieldStr
       * @param {String} validatorRuleName
       * @param {String} option
       */
      getOptions: function (fieldStr, validatorRuleName, option)
```

### updateOption

更新特定验证器的选项

```js
   /**
    * 更新特定验证器的选项
    * @param {String} fieldStr
    * @param {String} validatorRuleName
    * @param {String|Object} option
    * @param {String|Object} value
    */
   updateOption: function (fieldStr, validatorRuleName, option, value)
```

## DEMO