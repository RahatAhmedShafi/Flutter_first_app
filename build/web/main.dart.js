// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const form = flutter_sdk.src__widgets__form;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const scaffold = flutter_sdk.src__material__scaffold;
  const snack_bar = flutter_sdk.src__material__snack_bar;
  const dismissible = flutter_sdk.src__widgets__dismissible;
  const text = flutter_sdk.src__widgets__text;
  const app_bar = flutter_sdk.src__material__app_bar;
  const basic = flutter_sdk.src__widgets__basic;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const flex = flutter_sdk.src__rendering__flex;
  const text_form_field = flutter_sdk.src__material__text_form_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const input_border = flutter_sdk.src__material__input_border;
  const borders = flutter_sdk.src__painting__borders;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const text_input = flutter_sdk.src__services__text_input;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: main.SignUpScreen.prototype,
        [Widget_key]: null
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "hardEdge",
        [_Enum_index]: 1
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: dismissible.DismissDirection.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 5
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Sign Up Successful!"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: snack_bar.SnackBar.prototype,
        [Widget_key]: null,
        [SnackBar_clipBehavior]: C[3] || CT.C3,
        [SnackBar_dismissDirection]: C[4] || CT.C4,
        [SnackBar_onVisible]: null,
        [SnackBar_animation]: null,
        [SnackBar_duration]: C[5] || CT.C5,
        [SnackBar_closeIconColor]: null,
        [SnackBar_showCloseIcon]: null,
        [SnackBar_action]: null,
        [SnackBar_behavior]: null,
        [SnackBar_shape]: null,
        [SnackBar_width]: null,
        [SnackBar_padding]: null,
        [SnackBar_margin]: null,
        [SnackBar_elevation]: null,
        [SnackBar_backgroundColor]: null,
        [SnackBar_content]: C[6] || CT.C6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Sign Up"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_Enum__name]: "solid",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_strokeAlign]: -1,
        [BorderSide_style]: C[12] || CT.C12,
        [BorderSide_width]: 1,
        [BorderSide_color]: C[13] || CT.C13
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 4,
        [Radius_x]: 4
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C[15] || CT.C15,
        [BorderRadius_bottomLeft]: C[15] || CT.C15,
        [BorderRadius_topRight]: C[15] || CT.C15,
        [BorderRadius_topLeft]: C[15] || CT.C15
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C[11] || CT.C11,
        [OutlineInputBorder_borderRadius]: C[14] || CT.C14,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_constraints]: null,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C[10] || CT.C10,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixIconConstraints]: null,
        [InputDecoration_suffixIconColor]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixIconColor]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIconConstraints]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelAlignment]: null,
        [InputDecoration_floatingLabelBehavior]: null,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintTextDirection]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_floatingLabelStyle]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Name",
        [InputDecoration_label]: null,
        [InputDecoration_iconColor]: null,
        [InputDecoration_icon]: null
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 16,
        [SizedBox_width]: null
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_constraints]: null,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C[10] || CT.C10,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixIconConstraints]: null,
        [InputDecoration_suffixIconColor]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixIconColor]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIconConstraints]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelAlignment]: null,
        [InputDecoration_floatingLabelBehavior]: null,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintTextDirection]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_floatingLabelStyle]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Email",
        [InputDecoration_label]: null,
        [InputDecoration_iconColor]: null,
        [InputDecoration_icon]: null
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_constraints]: null,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C[10] || CT.C10,
        [InputDecoration_enabledBorder]: null,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: null,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: null,
        [InputDecoration_filled]: null,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixIconConstraints]: null,
        [InputDecoration_suffixIconColor]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixIconColor]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIconConstraints]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: null,
        [InputDecoration_isDense]: null,
        [InputDecoration_floatingLabelAlignment]: null,
        [InputDecoration_floatingLabelBehavior]: null,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintTextDirection]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: null,
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_floatingLabelStyle]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: "Password",
        [InputDecoration_label]: null,
        [InputDecoration_iconColor]: null,
        [InputDecoration_icon]: null
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: 32,
        [SizedBox_width]: null
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: main.MyApp.prototype,
        [Widget_key]: null
      });
    }
  }, false);
  var C = Array(21).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  main.MyApp = class MyApp extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.MyApp.new({key: key});
    }
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Sign Up Form", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: C[1] || CT.C1});
    }
  };
  (main.MyApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.MyApp.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.SignUpScreen = class SignUpScreen extends framework.StatefulWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      return new main.SignUpScreen.new({key: key});
    }
    createState() {
      return new main._SignUpScreenState.new();
    }
  };
  (main.SignUpScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    main.SignUpScreen.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.SignUpScreen.prototype;
  dart.addTypeTests(main.SignUpScreen);
  dart.addTypeCaches(main.SignUpScreen);
  dart.setMethodSignature(main.SignUpScreen, () => ({
    __proto__: dart.getMethods(main.SignUpScreen.__proto__),
    createState: dart.fnType(framework.State$(main.SignUpScreen), [])
  }));
  dart.setLibraryUri(main.SignUpScreen, I[0]);
  var _formKey = dart.privateName(main, "_formKey");
  var _nameController = dart.privateName(main, "_nameController");
  var _emailController = dart.privateName(main, "_emailController");
  var _passwordController = dart.privateName(main, "_passwordController");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var SnackBar_clipBehavior = dart.privateName(snack_bar, "SnackBar.clipBehavior");
  var SnackBar_dismissDirection = dart.privateName(snack_bar, "SnackBar.dismissDirection");
  var SnackBar_onVisible = dart.privateName(snack_bar, "SnackBar.onVisible");
  var SnackBar_animation = dart.privateName(snack_bar, "SnackBar.animation");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var SnackBar_duration = dart.privateName(snack_bar, "SnackBar.duration");
  var SnackBar_closeIconColor = dart.privateName(snack_bar, "SnackBar.closeIconColor");
  var SnackBar_showCloseIcon = dart.privateName(snack_bar, "SnackBar.showCloseIcon");
  var SnackBar_action = dart.privateName(snack_bar, "SnackBar.action");
  var SnackBar_behavior = dart.privateName(snack_bar, "SnackBar.behavior");
  var SnackBar_shape = dart.privateName(snack_bar, "SnackBar.shape");
  var SnackBar_width = dart.privateName(snack_bar, "SnackBar.width");
  var SnackBar_padding = dart.privateName(snack_bar, "SnackBar.padding");
  var SnackBar_margin = dart.privateName(snack_bar, "SnackBar.margin");
  var SnackBar_elevation = dart.privateName(snack_bar, "SnackBar.elevation");
  var SnackBar_backgroundColor = dart.privateName(snack_bar, "SnackBar.backgroundColor");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var SnackBar_content = dart.privateName(snack_bar, "SnackBar.content");
  var _submitForm = dart.privateName(main, "_submitForm");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var InputDecoration_constraints = dart.privateName(input_decorator, "InputDecoration.constraints");
  var InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  var InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  var InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  var BorderSide_strokeAlign = dart.privateName(borders, "BorderSide.strokeAlign");
  var BorderSide_style = dart.privateName(borders, "BorderSide.style");
  var BorderSide_width = dart.privateName(borders, "BorderSide.width");
  var Color_value = dart.privateName(ui, "Color.value");
  var BorderSide_color = dart.privateName(borders, "BorderSide.color");
  var InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  var Radius_y = dart.privateName(ui, "Radius.y");
  var Radius_x = dart.privateName(ui, "Radius.x");
  var BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  var BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  var BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  var BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  var OutlineInputBorder_borderRadius = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  var OutlineInputBorder_gapPadding = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  var InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  var InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  var InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  var InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  var InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  var InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  var InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  var InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  var InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  var InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  var InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  var InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  var InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  var InputDecoration_suffixIconConstraints = dart.privateName(input_decorator, "InputDecoration.suffixIconConstraints");
  var InputDecoration_suffixIconColor = dart.privateName(input_decorator, "InputDecoration.suffixIconColor");
  var InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  var InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  var InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  var InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  var InputDecoration_prefixIconColor = dart.privateName(input_decorator, "InputDecoration.prefixIconColor");
  var InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  var InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  var InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  var InputDecoration_prefixIconConstraints = dart.privateName(input_decorator, "InputDecoration.prefixIconConstraints");
  var InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  var InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  var InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  var InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  var InputDecoration_floatingLabelAlignment = dart.privateName(input_decorator, "InputDecoration.floatingLabelAlignment");
  var InputDecoration_floatingLabelBehavior = dart.privateName(input_decorator, "InputDecoration.floatingLabelBehavior");
  var InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  var InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  var InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  var InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  var InputDecoration_hintTextDirection = dart.privateName(input_decorator, "InputDecoration.hintTextDirection");
  var InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  var InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  var InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  var InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  var InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  var InputDecoration_floatingLabelStyle = dart.privateName(input_decorator, "InputDecoration.floatingLabelStyle");
  var InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  var InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  var InputDecoration_label = dart.privateName(input_decorator, "InputDecoration.label");
  var InputDecoration_iconColor = dart.privateName(input_decorator, "InputDecoration.iconColor");
  var InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  main._SignUpScreenState = class _SignUpScreenState extends framework.State$(main.SignUpScreen) {
    dispose() {
      this[_nameController].dispose();
      this[_emailController].dispose();
      this[_passwordController].dispose();
      super.dispose();
    }
    [_submitForm]() {
      if (dart.nullCheck(this[_formKey].currentState).validate()) {
        scaffold.ScaffoldMessenger.of(this.context).showSnackBar(C[2] || CT.C2);
      }
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[7] || CT.C7}), body: new basic.Padding.new({padding: C[8] || CT.C8, child: new form.Form.new({key: this[_formKey], child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text_form_field.TextFormField.new({controller: this[_nameController], decoration: C[9] || CT.C9, validator: dart.fn(value => {
                    if (value == null || value[$isEmpty]) {
                      return "Please enter your name";
                    }
                    return null;
                  }, T.StringNToStringN())}), C[16] || CT.C16, new text_form_field.TextFormField.new({controller: this[_emailController], decoration: C[17] || CT.C17, keyboardType: text_input.TextInputType.emailAddress, validator: dart.fn(value => {
                    if (value == null || value[$isEmpty]) {
                      return "Please enter your email";
                    } else if (!core.RegExp.new("^[^@]+@[^@]+\\.[^@]+").hasMatch(value)) {
                      return "Please enter a valid email";
                    }
                    return null;
                  }, T.StringNToStringN())}), C[16] || CT.C16, new text_form_field.TextFormField.new({controller: this[_passwordController], decoration: C[18] || CT.C18, obscureText: true, validator: dart.fn(value => {
                    if (value == null || value[$isEmpty]) {
                      return "Please enter a password";
                    } else if (value.length < 6) {
                      return "Password must be at least 6 characters";
                    }
                    return null;
                  }, T.StringNToStringN())}), C[19] || CT.C19, new basic.Center.new({child: new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _submitForm), child: C[7] || CT.C7})})])})})})});
    }
    static ['_#new#tearOff']() {
      return new main._SignUpScreenState.new();
    }
  };
  (main._SignUpScreenState.new = function() {
    this[_formKey] = T.GlobalKeyOfFormState().new();
    this[_nameController] = new editable_text.TextEditingController.new();
    this[_emailController] = new editable_text.TextEditingController.new();
    this[_passwordController] = new editable_text.TextEditingController.new();
    main._SignUpScreenState.__proto__.new.call(this);
    ;
  }).prototype = main._SignUpScreenState.prototype;
  dart.addTypeTests(main._SignUpScreenState);
  dart.addTypeCaches(main._SignUpScreenState);
  dart.setMethodSignature(main._SignUpScreenState, () => ({
    __proto__: dart.getMethods(main._SignUpScreenState.__proto__),
    [_submitForm]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._SignUpScreenState, I[0]);
  dart.setFieldSignature(main._SignUpScreenState, () => ({
    __proto__: dart.getFields(main._SignUpScreenState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_nameController]: dart.finalFieldType(editable_text.TextEditingController),
    [_emailController]: dart.finalFieldType(editable_text.TextEditingController),
    [_passwordController]: dart.finalFieldType(editable_text.TextEditingController)
  }));
  main.main = function main$0() {
    binding.runApp(C[20] || CT.C20);
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;UC7C4B;AACxB,YAAO,sDACuB,cACrB,uBACA,yCACiB;IAI5B;;;QAZmB;AAAb,8CAAa,GAAG;;EAAE;;;;;;;;;;;;;;AAmBa;IAAoB;;;QAH/B;AAApB,qDAAoB,GAAG;;EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAcJ,MAAzB,AAAgB;AACU,MAA1B,AAAiB;AACY,MAA7B,AAAoB;AACL,MAAT;IACR;;AAGE,UAAyB,AAAE,eAAvB,AAAS;AAGV,QAFiB,AAAY,8BAAT;;IAIzB;UAG0B;AACxB,YAAO,oCACG,sDAGF,sDAEG,wBACA,uBACE,0CACkC,yCAC7B,wBACR,mDACc,6DAKD,QAAC;AACV,wBAAI,AAAM,KAAD,YAAY,AAAM,KAAD;AACxB,4BAAO;;AAET,0BAAO;+DAIX,mDACc,mEAKgB,kDACjB,QAAC;AACV,wBAAI,AAAM,KAAD,YAAY,AAAM,KAAD;AACxB,4BAAO;0BACF,MAAK,AAA+B,gBAAxB,iCAAiC,KAAK;AACvD,4BAAO;;AAET,0BAAO;+DAIX,mDACc,qEAKC,iBACF,QAAC;AACV,wBAAI,AAAM,KAAD,YAAY,AAAM,KAAD;AACxB,4BAAO;0BACF,KAAI,AAAM,AAAO,KAAR,UAAU;AACxB,4BAAO;;AAET,0BAAO;+DAIX,6BACS,6DACM;IAS3B;;;;;;IA7FM,iBAAW;IACW,wBAAkB;IAClB,yBAAmB;IACnB,4BAAsB;;;EA2FpD;;;;;;;;;;;;;;;;;AAzHuB,IAArB;EACF;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
