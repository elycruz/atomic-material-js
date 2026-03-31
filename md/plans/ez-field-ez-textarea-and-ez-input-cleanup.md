# CSS Component Updates Plan

## Ez-Textfield updates

### General Todos

- Add "outlined", "underlined", and "filled", variants of the component.
- Additionally, this class should also be affected by the code in `focus-ring.scss`.
- Update, and/or re-write, the "M3 Input" stories to depict the new implementation and list them under the "CSS Components/Textfield", and dually, "Custom Element/Textfield" for the custom element version.

### New structure

```pseudo-css
   .ez-textfield[.ez-filled|.ez-outlined]...
     .ez-textfield-leading (optional)
     .ez-textfield-center
       :where(input:not([type="hidden"]), select, textarea)
       label
     .ez-textfield-trailing (optional)
```

### Custom Element

Minimal implementation that just makes using the declared css easier.

`.*(leading|trailing)` should be exposed via `part="(leading|trailing)"` and should expose `slot` with matching name where the following will hold `.*(leading|trailing) > slot[name="..."]`. 

```html
<ez-textfield variety="outlined">
  <div slot="leading" class="md-icon">dollar</div>
  <label for="...">...</label>  <!-- Placed in unnamed slot -->
  <input id="..." /> <!-- Placed in unnamed slot -->
  <div slot="trailing" class="md-icon">error</div>
</ez-textfield>

<!-- etc. -->
```

`.ez-textfield-center` in this case will hold the unnamed slot.

Additionally, this implementation should import the 'input' and 'textfield' *.scss files to use for it's styling and should additionally have it's own file for targeting it's contain `part`s and itself (`:host`, etc.).

Help, messages, supported text, etc., will be handled by `.ez-field`/`ez-field` from now on.

## Ez-Field updates

### New CSS structure

 ```pseudo-css
   .ez-field
     .ez-field-leading   (optional)
     .ez-field-center
       .ez-input, .ez-textfield, etc.
       .ez-field-help    (optional)
       .ez-field-error   (optional)
       .ez-field-content (optional)
     .ez-field-trailing  (optional)
 ```

### Custom Element updates

This element should import the `field.scss` file as well, for it's stylesheets (it's own internal stylesheet `ez-field..scss` should still also be imported (it will serve as it's base for targeting `:host`, elements with `part` attribs., and it's own contained slots, etc.)).

Additionally, for the `error` slot, let's render the error message within it, instead of directly in it's wrapping div.

## Other

Ensure all affected stories, along with their tests, are updated to use the new structures and to take them into account.
