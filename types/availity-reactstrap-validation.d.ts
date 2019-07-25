export class AvBaseInput {
  static defaultProps: {
    falseValue: boolean;
    trueValue: boolean;
    validate: {};
    validationEvent: string;
  };
  constructor(props: any);
  componentDidUpdate(prevProps: any): void;
  componentWillMount(): void;
  componentWillReceiveProps(nextProps: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  getDefaultValue(): any;
  getFieldValue(event: any): any;
  getValidationEvent(): any;
  getValidatorProps(): any;
  getValue(): any;
  onBlurHandler(_value: any): void;
  onChangeHandler(_value: any): void;
  onFocusHandler(_value: any): void;
  onInputHandler(_value: any): void;
  onKeyUpHandler(event: any): void;
  reset(): void;
  setState(partialState: any, callback: any): void;
  updateValidations(...args: any[]): void;
  validate(): void;
  validateEvent(eventName: any, _event: any): void;
}
export namespace AvBaseInput {
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function checked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace checked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultChecked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultChecked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function falseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace falseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function multiple(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace multiple {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onBlur(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBlur {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onFocus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onFocus {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onKeyUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onKeyUp {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onReset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onReset {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function state(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace state {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function trueValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace trueValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace type {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validate {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validationEvent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validationEvent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace value {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvCheckbox {
  constructor(...args: any[]);
  componentDidMount(): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  isDefaultChecked(valueArr: any): any;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace AvCheckbox {
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function Group(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function checked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace checked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function customInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace customInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultChecked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultChecked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function falseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace falseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function multiple(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace multiple {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onBlur(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBlur {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onFocus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onFocus {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onKeyUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onKeyUp {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onReset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onReset {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function state(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace state {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function trueValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace trueValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace type {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validate {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validationEvent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validationEvent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace value {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvCheckboxGroup {
  constructor(...args: any[]);
  componentWillMount(): void;
  componentWillReceiveProps(nextProps: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  getChildContext(): any;
  getDefaultValue(): any;
  getInputState(): any;
  getValue(): any;
  registerInput(input: any): void;
  render(): any;
  reset(): void;
  setState(partialState: any, callback: any): void;
  unregisterInput(input: any): void;
  update(): void;
  updateInputs(): void;
  updateValidations(...args: any[]): void;
  validate(...args: any[]): any;
}
export namespace AvCheckboxGroup {
  namespace childContextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function Group(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function check(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace check {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace children {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function cssModule(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace cssModule {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function inline(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace inline {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function row(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace row {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tag {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvFeedback {
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace AvFeedback {
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function Group(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace children {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function cssModule(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace cssModule {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tag {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tooltip(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tooltip {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function valid(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace valid {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvField {
  constructor(...args: any[]);
  forceUpdate(callback: any): void;
  getChildContext(): any;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace AvField {
  namespace childContextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function checked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace checked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultChecked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultChecked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function errorMessage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace errorMessage {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function falseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace falseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function grid(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace grid {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function groupAttrs(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace groupAttrs {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function helpMessage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace helpMessage {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function id(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace id {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function inputClass(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace inputClass {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function label(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace label {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function labelAttrs(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelAttrs {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function labelClass(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelClass {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function labelHidden(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace labelHidden {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function multiple(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace multiple {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onBlur(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBlur {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onFocus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onFocus {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onKeyUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onKeyUp {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onReset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onReset {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function state(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace state {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function trueValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace trueValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace type {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validate {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validationEvent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validationEvent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace value {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvForm {
  constructor(...args: any[]);
  compileValidationRules(input: any, ruleProp: any): any;
  componentWillMount(): void;
  forceUpdate(callback: any): void;
  getChildContext(): any;
  getDefaultValue(inputName: any): any;
  getInputState(inputName: any): any;
  getOldInputName(input: any): any;
  getValue(inputName: any): any;
  getValues(): any;
  hasError(inputName: any): any;
  isBad(inputName: any): any;
  isDirty(inputName: any): any;
  isTouched(inputName: any): any;
  registerInput(input: any, updater: any): void;
  render(): any;
  reset(): void;
  setBad(inputs: any, ...args: any[]): void;
  setDirty(inputs: any, ...args: any[]): void;
  setError(inputName: any, ...args: any[]): void;
  setState(partialState: any, callback: any): void;
  setTouched(inputs: any, ...args: any[]): void;
  submit(...args: any[]): void;
  unregisterInput(input: any): void;
  updateInputs(): void;
  validateAll(_x15: any, ...args: any[]): any;
  validateInput(_x2: any, ...args: any[]): any;
  validateOne(_x12: any, _x13: any, ...args: any[]): any;
}
export namespace AvForm {
  namespace childContextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace FormCtrl {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
  namespace defaultProps {
    const method: string;
    const model: {};
    function onInvalidSubmit(): void;
    function onKeyDown(): void;
    function onSubmit(): void;
    function onValidSubmit(): void;
    class tag {
      static defaultProps: {
        tag: any;
      };
      static propTypes: {
        children: any;
        className: any;
        cssModule: any;
        inline: any;
        innerRef: any;
        tag: any;
      };
      constructor(props: any);
      forceUpdate(callback: any): void;
      getRef(ref: any): void;
      render(): any;
      setState(partialState: any, callback: any): void;
      submit(): void;
    }
    const validationEvent: string[];
  }
  namespace propTypes {
    function beforeSubmitValidation(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace beforeSubmitValidation {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function errorMessage(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace errorMessage {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function method(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace method {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function model(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace model {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onInvalidSubmit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onInvalidSubmit {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onSubmit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onSubmit {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onValidSubmit(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onValidSubmit {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tag {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validate {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validationEvent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validationEvent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvGroup {
  constructor(props: any);
  forceUpdate(callback: any): void;
  getChildContext(): any;
  getInputState(): any;
  render(): any;
  setState(partialState: any, callback: any): void;
  update(input: any): void;
}
export namespace AvGroup {
  namespace childContextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function Group(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function check(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace check {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace children {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function cssModule(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace cssModule {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function inline(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace inline {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function row(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace row {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tag {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvInput {
  constructor(...args: any[]);
  componentDidUpdate(prevProps: any): void;
  componentWillMount(): void;
  componentWillReceiveProps(nextProps: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  getDefaultValue(): any;
  getFieldValue(event: any): any;
  getValidationEvent(): any;
  getValidatorProps(): any;
  getValue(): any;
  getViewValue(): any;
  onBlurHandler(_value: any): void;
  onChangeHandler(_value: any): void;
  onFocusHandler(_value: any): void;
  onInputHandler(_value: any): void;
  onKeyUpHandler(event: any): void;
  render(): any;
  reset(): void;
  setState(partialState: any, callback: any): void;
  updateValidations(...args: any[]): void;
  validate(): void;
  validateEvent(eventName: any, _event: any): void;
}
export namespace AvInput {
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace defaultProps {
    const falseValue: boolean;
    class tag {
      static defaultProps: {
        type: any;
      };
      static propTypes: {
        addon: any;
        bsSize: any;
        children: any;
        className: any;
        cssModule: any;
        innerRef: any;
        invalid: any;
        plaintext: any;
        size: any;
        state: any;
        static: any;
        tag: any;
        type: any;
        valid: any;
      };
      constructor(props: any);
      focus(): void;
      forceUpdate(callback: any): void;
      getRef(ref: any): void;
      render(): any;
      setState(partialState: any, callback: any): void;
    }
    const trueValue: boolean;
    const validate: {};
    const validationEvent: string;
  }
  namespace propTypes {
    function checked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace checked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultChecked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultChecked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function falseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace falseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function multiple(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace multiple {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function onBlur(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBlur {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onFocus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onFocus {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onKeyUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onKeyUp {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onReset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onReset {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function state(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace state {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function trueValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace trueValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace type {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validate {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validationEvent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validationEvent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace value {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvInputContainer {
  constructor(...args: any[]);
  componentWillMount(): void;
  forceUpdate(callback: any): void;
  getOldInputName(input: any): any;
  registerInput(input: any, ...args: any[]): void;
  setState(partialState: any, callback: any): void;
  unregisterInput(input: any): void;
}
export class AvRadio {
  constructor(...args: any[]);
  componentDidMount(): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace AvRadio {
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function Group(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function checked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace checked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function customInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace customInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultChecked(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultChecked {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function defaultValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace defaultValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function falseValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace falseValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function multiple(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace multiple {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onBlur(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onBlur {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onChange(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onChange {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onFocus(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onFocus {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onInput(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onInput {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onKeyUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onKeyUp {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onReset(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onReset {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function readOnly(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace readOnly {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function state(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace state {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function trueValue(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace trueValue {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function type(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace type {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validate(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validate {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function validationEvent(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace validationEvent {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function value(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace value {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class AvRadioGroup {
  constructor(...args: any[]);
  componentWillMount(): void;
  componentWillReceiveProps(nextProps: any): void;
  componentWillUnmount(): void;
  forceUpdate(callback: any): void;
  getChildContext(): any;
  getDefaultValue(): any;
  getInputState(): any;
  getValue(): any;
  registerInput(input: any): void;
  render(): any;
  reset(): void;
  setState(partialState: any, callback: any): void;
  unregisterInput(input: any): void;
  update(): void;
  updateInputs(): void;
  updateValidations(...args: any[]): void;
  validate(...args: any[]): any;
}
export namespace AvRadioGroup {
  namespace childContextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function Group(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace contextTypes {
    function FormCtrl(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
  }
  namespace propTypes {
    function check(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace check {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace children {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function className(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace className {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function cssModule(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace cssModule {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace disabled {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function inline(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace inline {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function name(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function row(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace row {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function tag(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace tag {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export namespace AvValidator {
  function date(value: any, context: any, ...args: any[]): any;
  function dateRange(value: any, context: any, ...args: any[]): any;
  function datetime(value: any, context: any, ...args: any[]): any;
  function email(value: any, context: any, ...args: any[]): any;
  function match(value: any, context: any, ...args: any[]): any;
  function max(value: any, context: any, ...args: any[]): any;
  function maxChecked(value: any, context: any, ...args: any[]): any;
  function maxLength(value: any, context: any, ...args: any[]): any;
  function maxlength(value: any, context: any, ...args: any[]): any;
  function min(value: any, context: any, ...args: any[]): any;
  function minChecked(value: any, context: any, ...args: any[]): any;
  function minLength(value: any, context: any, ...args: any[]): any;
  function minlength(value: any, context: any, ...args: any[]): any;
  function npi(value: any, context: any, ...args: any[]): any;
  function number(value: any, context: any, ...args: any[]): any;
  function pattern(value: any, context: any, ...args: any[]): any;
  function phone(value: any, context: any, ...args: any[]): any;
  function required(value: any, context: any, ...args: any[]): any;
  function step(value: any, context: any, ...args: any[]): any;
  function tel(value: any, context: any, ...args: any[]): any;
  function url(value: any, context: any, ...args: any[]): any;
}
