import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

createCustomElement('x-827743-clickable-wrapper', {
    initialState: {},
    view: (state, { dispatch }) => {
        const { properties } = state;

        return (
            <div className="clickableWrapper">
                <button
                    className="clickableButton"
                    type="button"
                    aria-label={properties.ariaLabel}
                    disabled={properties.disabled}
                    onclick={() => {
                        if (!properties.disabled) dispatch("CLICKABLE_WRAPPER#CLICKED");
                    }}
                >
                    <slot name="content" />
                </button>
            </div>
        );
    },
    properties: {
        disabled: {
            default: false
        },
        ariaLabel: {
            default: ""
        },
    },
    styles,
    renderer: { type: snabbdom }
});
