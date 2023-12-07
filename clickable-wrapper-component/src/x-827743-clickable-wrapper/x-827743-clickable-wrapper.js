import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

createCustomElement('x-827743-clickable-wrapper', {
    initialState: {},
    view: (state, { dispatch }) => {
        const { properties } = state;

        if (properties.disabled) {
            return (
                <div className="clickableWrapper disabled">
                    <slot name="content" />
                </div>
            )
        }

        return (
            <div className="clickableWrapper" onclick={() => dispatch("CLICKABLE_WRAPPER#CLICKED")}>
                <slot name="content" />
            </div>
        );
    },
    properties: {
        disabled: {
            default: false
        }
    },
    styles,
    renderer: { type: snabbdom }
});
