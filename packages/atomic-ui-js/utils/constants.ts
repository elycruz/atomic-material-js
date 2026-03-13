export const EzThemeVariants = {
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Success: 'success',
    Info: 'info',
    Warning: 'warning',
    Error: 'error',
  } as const,
  EzSizeVariants = {
    XSmall: 'xsmall',
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    XLarge: 'xlarge',
  } as const,
  EzStyleVariants = {
    Default: '',
    Outlined: 'outlined',
    Filled: 'filled',
    Elevated: 'elevated',
    Square: 'square',
    Util: 'util',
  } as const,
  AUTO_COMPLETE_NAME = 'autocomplete',
  AUTO_FOCUS_NAME = 'autofocus',
  CHECKED_NAME = 'checked',
  CLASSNAME_TO_TOGGLE_NAME = 'classNameToToggle',
  CLASSNAME_TO_TOGGLE_TARGET_NAME = 'classNameToToggleTarget',
  CLASSNAME_TO_TOGGLE_TARGET_SELECTOR_NAME = `${CLASSNAME_TO_TOGGLE_TARGET_NAME}Selector`,
  DEFAULT_CHECKED_NAME = 'defaultChecked',
  DEFAULT_VALUE_NAME = 'defaultValue',
  DISABLED_NAME = 'disabled',
  FORM_NAME = 'form',
  INTERSECTING_TARGET_NAME = 'intersectingTarget',
  INTERSECTING_TARGET_SELECTOR_NAME = `${INTERSECTING_TARGET_NAME}Selector`,
  MULTIPLE_NAME = 'multiple',
  NAME_NAME = 'name',
  OBSERVER_CALLBACK = 'observerCallback',
  READONLY_NAME = 'readonly',
  REQUIRED_NAME = 'required',
  REVERSE_NAME = 'reverse',
  ROOT_MARGIN_NAME = 'rootMargin',
  ROOT_NAME = 'root',
  ROOT_SELECTOR_NAME = 'rootSelector',
  SIZE_NAME = 'size',
  TABINDEX_NAME = 'tabindex',
  THEME_NAME = 'theme',
  THRESHOLD_NAME = 'threshold',
  TOGGLE_TARGET_NAME = 'toggleTarget',
  TRIGGER_NAME = 'trigger',
  TRIGGER_SELECTOR_NAME = 'triggerSelector',
  VARIETY_NAME = 'variety',
  VALUE_NAME = 'value';

export type SizeVariant = (typeof EzSizeVariants)[keyof typeof EzSizeVariants];

export type ThemeVariant =
  (typeof EzThemeVariants)[keyof typeof EzThemeVariants];

export type StyleVariant =
  (typeof EzStyleVariants)[keyof typeof EzStyleVariants];
