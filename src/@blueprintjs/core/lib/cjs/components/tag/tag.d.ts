/// <reference types="react" />
import * as React from "react";
import { IIntentProps, IProps } from "../../common";
import { IconName } from "../icon/icon";
export interface ITagProps extends IProps, IIntentProps, React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Whether the tag should appear in an active state.
     * @default false
     */
    active?: boolean;
    /** Name of a Blueprint UI icon (or an icon element) to render before the children. */
    icon?: IconName | JSX.Element;
    /**
     * Whether the tag should visually respond to user interactions. If set
     * to `true`, hovering over the tag will change its color and mouse cursor.
     *
     * Recommended when `onClick` is also defined.
     *
     * @default false
     */
    interactive?: boolean;
    /**
     * Whether this tag should use large styles.
     * @default false
     */
    large?: boolean;
    /**
     * Whether this tag should use minimal styles.
     * @default false
     */
    minimal?: boolean;
    /**
     * Whether tag content should be allowed to occupy multiple lines.
     * If false, a single line of text will be truncated with an ellipsis if
     * it overflows. Note that icons will be vertically centered relative to
     * multiline text.
     * @default false
     */
    multiline?: boolean;
    /**
     * Callback invoked when the tag is clicked.
     * Recommended when `interactive` is `true`.
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Click handler for remove button.
     * The remove button will only be rendered if this prop is defined.
     */
    onRemove?: (e: React.MouseEvent<HTMLButtonElement>, tagProps: ITagProps) => void;
    /** Name of a Blueprint UI icon (or an icon element) to render after the children. */
    rightIcon?: IconName | JSX.Element;
    /**
     * Whether this tag should have rounded ends.
     * @default false
     */
    round?: boolean;
}
export declare class Tag extends React.PureComponent<ITagProps, {}> {
    static displayName: string;
    render(): JSX.Element;
    private onRemoveClick;
}
