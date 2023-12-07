import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

createCustomElement('x-827743-clickable-wrapper', {
    initialState: {},
    view: (state, { dispatch }) => {

        return (
            <div className="clickableWrapper" onclick={() => dispatch("CLICKABLE_WRAPPER#CLICKED")}>
                <slot name="content" />
            </div>
        );
    },
    renderer: { type: snabbdom }
});
