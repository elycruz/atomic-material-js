# ez-btn-surface

Idea: A custom element that allows it's center part (`::part(center)`) to have `transform: scaleX(...)` to be applied while preserving the aspect ratio of any applied border-radius (applied to `::part(tail), ::part(head)`).  The element should additionally apply any width/resizes changes applied to it back to it's parent element. 

## Expected usage:

```html
<button class="ez-btn ez-theme-info _ez-with-btn-surface"> <!-- css `position: relative` -->
  <ez-ripple></ez-ripple>
  <ez-btn-surface></ez-btn-surface> <!-- css `position: absolute` -->
  <span>Info</span>
</button>
```

## Element's Shadow DOM:

```html
  <div class="surface">
    <div class="head end-part" part="head"></div>
    <div class="center" part="center"></div> <!-- Will scale (on hover, etc.), using css `transform` -->
    <div class="tail end-part" part="tail"></div>
  </div>
```
