/// <reference types="react" />
import * as React from "react";
import { AbstractPureComponent } from "../../common/abstractPureComponent";
import { HTMLInputProps, IProps } from "../../common/props";
import { IconName } from "../icon/icon";
import { ITagProps } from "../tag/tag";
export interface ITagInputProps extends IProps {
    /**
     * If true, `onAdd` will be invoked when the input loses focus.
     * Otherwise, `onAdd` is only invoked when `enter` is pressed.
     * @default false
     */
    addOnBlur?: boolean;
    /**
     * If true, `onAdd` will be invoked when the user pastes text containing the `separator`
     * into the input. Otherwise, pasted text will remain in the input.
     *
     * __Note:__ For example, if `addOnPaste=true` and `separator="\n"` (new line), then:
     * - Pasting `"hello"` will _not_ invoke `onAdd`
     * - Pasting `"hello\n"` will invoke `onAdd` with `["hello"]`
     * - Pasting `"hello\nworld"` will invoke `onAdd` with `["hello", "world"]`
     *
     * @default true
     */
    addOnPaste?: boolean;
    /**
     * Whether the component is non-interactive.
     * Note that you'll also need to disable the component's `rightElement`,
     * if appropriate.
     * @default false
     */
    disabled?: boolean;
    /** Whether the tag input should take up the full width of its container. */
    fill?: boolean;
    /**
     * React props to pass to the `<input>` element.
     * Note that `ref` and `key` are not supported here; use `inputRef` below.
     */
    inputProps?: HTMLInputProps;
    /** Ref handler for the `<input>` element. */
    inputRef?: (input: HTMLInputElement | null) => void;
    /** Controlled value of the `<input>` element. This is shorthand for `inputProps={{ value }}`. */
    inputValue?: string;
    /** Whether the tag input should use a large size. */
    large?: boolean;
    /** Name of a Blueprint UI icon (or an icon element) to render on the left side of the input. */
    leftIcon?: IconName | JSX.Element;
    /**
     * Callback invoked when new tags are added by the user pressing `enter` on the input.
     * Receives the current value of the input field split by `separator` into an array.
     * New tags are expected to be appended to the list.
     *
     * The input will be cleared after `onAdd` is invoked _unless_ the callback explicitly
     * returns `false`. This is useful if the provided `value` is somehow invalid and should
     * not be added as a tag.
     */
    onAdd?: (values: string[]) => boolean | void;
    /**
     * Callback invoked when new tags are added or removed. Receives the updated list of `values`:
     * new tags are appended to the end of the list, removed tags are removed at their index.
     *
     * Like `onAdd`, the input will be cleared after this handler is invoked _unless_ the callback
     * explicitly returns `false`.
     *
     * This callback essentially implements basic `onAdd` and `onRemove` functionality and merges
     * the two handlers into one to simplify controlled usage.
     *
     * **Note about typed usage:** Your handler can declare a subset type of `React.ReactNode[]`,
     * such as `string[]` or `Array<string | JSX.Element>`, to match the type of your `values` array:
     * ```tsx
     * <TagInput
     *     onChange={(values: string[]) => this.setState({ values })}
     *     values={["apple", "banana", "cherry"]}
     * />
     * ```
     */
    onChange?: (values: React.ReactNode[]) => boolean | void;
    /**
     * Callback invoked when the value of `<input>` element is changed.
     * This is shorthand for `inputProps={{ onChange }}`.
     */
    onInputChange?: React.FormEventHandler<HTMLInputElement>;
    /**
     * Callback invoked when the user depresses a keyboard key.
     * Receives the event and the index of the active tag (or `undefined` if
     * focused in the input).
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>, index?: number) => void;
    /**
     * Callback invoked when the user releases a keyboard key.
     * Receives the event and the index of the active tag (or `undefined` if
     * focused in the input).
     */
    onKeyUp?: (event: React.KeyboardEvent<HTMLElement>, index?: number) => void;
    /**
     * Callback invoked when the user clicks the X button on a tag.
     * Receives value and index of removed tag.
     */
    onRemove?: (value: string, index: number) => void;
    /**
     * Input placeholder text which will not appear if `values` contains any items
     * (consistent with default HTML input behavior).
     * Use `inputProps.placeholder` if you want the placeholder text to _always_ appear.
     *
     * If you define both `placeholder` and `inputProps.placeholder`, then the former will appear
     * when `values` is empty and the latter at all other times.
     */
    placeholder?: string;
    /**
     * Element to render on right side of input.
     * For best results, use a small spinner or minimal button (button height will adjust if `TagInput` uses large styles).
     * Other elements will likely require custom styles for correct positioning.
     */
    rightElement?: JSX.Element;
    /**
     * Separator pattern used to split input text into multiple values. Default value splits on commas and newlines.
     * Explicit `false` value disables splitting (note that `onAdd` will still receive an array of length 1).
     * @default /[,\n\r]/
     */
    separator?: string | RegExp | false;
    /**
     * React props to pass to each `Tag`. Provide an object to pass the same props to every tag,
     * or a function to customize props per tag.
     *
     * If you define `onRemove` here then you will have to implement your own tag removal
     * handling as `TagInput`'s own `onRemove` handler will never be invoked.
     */
    tagProps?: ITagProps | ((value: React.ReactNode, index: number) => ITagProps);
    /**
     * Controlled tag values. Each value will be rendered inside a `Tag`, which can be customized
     * using `tagProps`. Therefore, any valid React node can be used as a `TagInput` value; falsy
     * values will not be rendered.
     *
     * __Note about typed usage:__ If you know your `values` will always be of a certain `ReactNode`
     * subtype, such as `string` or `ReactChild`, you can use that type on all your handlers
     * to simplify type logic.
     */
    values: React.ReactNode[];
}
export interface ITagInputState {
    activeIndex?: number;
    inputValue?: string;
    isInputFocused?: boolean;
}
export declare class TagInput extends AbstractPureComponent<ITagInputProps, ITagInputState> {
    static displayName: string;
    static defaultProps: Partial<ITagInputProps> & object;
    state: ITagInputState;
    private inputElement;
    private refHandlers;
    componentWillReceiveProps(nextProps: HTMLInputProps & ITagInputProps): void;
    render(): JSX.Element;
    private addTags;
    private maybeRenderTag;
    private getNextActiveIndex(direction);
    private findNextIndex(startIndex, direction);
    /**
     * Splits inputValue on separator prop,
     * trims whitespace from each new value,
     * and ignores empty values.
     */
    private getValues(inputValue);
    private handleContainerClick;
    private handleContainerBlur;
    private handleInputFocus;
    private handleInputChange;
    private handleInputKeyDown;
    private handleInputKeyUp;
    private handleInputPaste;
    private handleRemoveTag;
    private handleBackspaceToRemove(event);
    /** Remove the item at the given index by invoking `onRemove` and `onChange` accordingly. */
    private removeIndexFromValues(index);
    private invokeKeyPressCallback(propCallbackName, event, activeIndex);
    /** Returns whether the given index represents a valid item in `this.props.values`. */
    private isValidIndex(index);
}
