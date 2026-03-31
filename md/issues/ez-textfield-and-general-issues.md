# Ez-TextField, and General, issues

1. Ez-TextField `input, select, textarea` are still receiving a focus-ring (on focus-within) - These elements should not receive a focus-ring at all (whether when `:focus-visible` is active, and/or `:focus` is active).
2. Ez-Textfield border width change causes outlined variant to move elements on the screen;  Looks like the [Ez-Textfield] control will need a `.ez-textfield-border-container` where the initial border is applied and then the active state border could be applied to `.ez-textfield` where the border's initial color is `transparent` (this should allow the element to not trigger visible layout shift) - If there is a different "better" approach - Please ask me about it and we will take it from there.
3. "Input Controls" stories should be removed in favor of a per [supported] form control [CSS] class stories approach;  E.g., "Checkbox", "Radio", "Textfield" (already exists), etc. instead of "Input Controls" stories.
