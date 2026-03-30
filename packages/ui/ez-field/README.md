# Ez-Field

## Usage

```html
<!-- Basic Use case -->
<ez-field>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
</ez-field>

<!-- With trailing and leading content -->
<ez-field>
  <span class="md-icon" slot="leading">dollar</span>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <span class="md-icon" slot="trailing">clear</span>
</ez-field>

<!-- With help content -->
<ez-field>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <div slot="help">Enter your name</div>
</ez-field>

<!-- Radio set -->
<ez-field>
  <label for="radio-1">Radios</label>
  <ez-field>
    <label for="radio-1">Radio 1</label>
    <input type="radio" id="radio-1" name="radios" />
  </ez-field>
  <ez-field>
    <label for="radio-2">Radio 2</label>
    <input type="radio" id="radio-2" name="radios" />
  </ez-field>
</ez-field>

<!-- With error message via `error` attribute (which just 
  internally sets `validationMessage` property). 
  Enters message into `error` slot.
-->
<ez-field error="Rule violation.">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
</ez-field>

<!-- With error message via `validationMessage` attribute. 
  Enters message into `error` slot.
-->
<ez-field validationMessage="Rule violation.">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
</ez-field>

<!-- With error messages HTML. 
     Gets cleared out when `input` control becomes
     "valid"
 -->
<ez-field> 
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <ul slot="error">
    <li>Rule violation 1.</li>
    <li>Rule violation 2.</li>
  </ul>
</ez-field>

<!-- With `selectors` -->
<ez-field selectors="input"> 
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />
  <!-- validation ignored -->
  <textarea required></textarea>
</ez-field>
```
