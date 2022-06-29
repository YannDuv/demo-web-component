import { LitElement } from "lit";
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private increment;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
