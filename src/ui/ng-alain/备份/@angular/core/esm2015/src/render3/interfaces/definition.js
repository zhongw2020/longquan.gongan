/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const RenderFlags = {
    /* Whether to run the creation block (e.g. create elements and directives) */
    Create: 1,
    /* Whether to run the update block (e.g. refresh bindings) */
    Update: 2,
};
export { RenderFlags };
/**
 * A subclass of `Type` which has a static `ngComponentDef`:`ComponentDef` field making it
 * consumable for rendering.
 * @record
 * @template T
 */
export function ComponentType() { }
if (false) {
    /** @type {?} */
    ComponentType.prototype.ngComponentDef;
}
/**
 * A subclass of `Type` which has a static `ngDirectiveDef`:`DirectiveDef` field making it
 * consumable for rendering.
 * @record
 * @template T
 */
export function DirectiveType() { }
if (false) {
    /** @type {?} */
    DirectiveType.prototype.ngDirectiveDef;
}
/** @enum {number} */
const DirectiveDefFlags = {
    ContentQuery: 2,
};
export { DirectiveDefFlags };
/**
 * A subclass of `Type` which has a static `ngPipeDef`:`PipeDef` field making it
 * consumable for rendering.
 * @record
 * @template T
 */
export function PipeType() { }
if (false) {
    /** @type {?} */
    PipeType.prototype.ngPipeDef;
}
/**
 * Runtime information for classes that are inherited by components or directives
 * that aren't defined as components or directives.
 *
 * This is an internal data structure used by the renderer to determine what inputs
 * and outputs should be inherited.
 *
 * See: {\@link defineBase}
 *
 * \@codeGenApi
 * @record
 * @template T
 */
export function ɵɵBaseDef() { }
if (false) {
    /**
     * A dictionary mapping the inputs' minified property names to their public API names, which
     * are their aliases if any, or their original unminified property names
     * (as in `\@Input('alias') propertyName: any;`).
     * @type {?}
     */
    ɵɵBaseDef.prototype.inputs;
    /**
     * @deprecated This is only here because `NgOnChanges` incorrectly uses declared name instead of
     * public or minified name.
     * @type {?}
     */
    ɵɵBaseDef.prototype.declaredInputs;
    /**
     * A dictionary mapping the outputs' minified property names to their public API names, which
     * are their aliases if any, or their original unminified property names
     * (as in `\@Output('alias') propertyName: any;`).
     * @type {?}
     */
    ɵɵBaseDef.prototype.outputs;
    /**
     * Function to create and refresh content queries associated with a given directive.
     * @type {?}
     */
    ɵɵBaseDef.prototype.contentQueries;
    /**
     * Query-related instructions for a directive. Note that while directives don't have a
     * view and as such view queries won't necessarily do anything, there might be
     * components that extend the directive.
     * @type {?}
     */
    ɵɵBaseDef.prototype.viewQuery;
    /**
     * Refreshes host bindings on the associated directive.
     * @type {?}
     */
    ɵɵBaseDef.prototype.hostBindings;
}
/**
 * Runtime link information for Directives.
 *
 * This is internal data structure used by the render to link
 * directives into templates.
 *
 * NOTE: Always use `defineDirective` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * @param Selector type metadata specifying the selector of the directive or component
 *
 * See: {\@link defineDirective}
 * @record
 * @template T
 */
export function DirectiveDef() { }
if (false) {
    /**
     * Token representing the directive. Used by DI.
     * @type {?}
     */
    DirectiveDef.prototype.type;
    /**
     * Function that resolves providers and publishes them into the DI system.
     * @type {?}
     */
    DirectiveDef.prototype.providersResolver;
    /**
     * The selectors that will be used to match nodes to this directive.
     * @type {?}
     */
    DirectiveDef.prototype.selectors;
    /**
     * Name under which the directive is exported (for use with local references in template)
     * @type {?}
     */
    DirectiveDef.prototype.exportAs;
    /**
     * Factory function used to create a new directive instance.
     * @type {?}
     */
    DirectiveDef.prototype.factory;
    /** @type {?} */
    DirectiveDef.prototype.onChanges;
    /** @type {?} */
    DirectiveDef.prototype.onInit;
    /** @type {?} */
    DirectiveDef.prototype.doCheck;
    /** @type {?} */
    DirectiveDef.prototype.afterContentInit;
    /** @type {?} */
    DirectiveDef.prototype.afterContentChecked;
    /** @type {?} */
    DirectiveDef.prototype.afterViewInit;
    /** @type {?} */
    DirectiveDef.prototype.afterViewChecked;
    /** @type {?} */
    DirectiveDef.prototype.onDestroy;
    /**
     * The features applied to this directive
     * @type {?}
     */
    DirectiveDef.prototype.features;
    /** @type {?} */
    DirectiveDef.prototype.setInput;
}
/**
 * Runtime link information for Components.
 *
 * This is internal data structure used by the render to link
 * components into templates.
 *
 * NOTE: Always use `defineComponent` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * See: {\@link defineComponent}
 * @record
 * @template T
 */
export function ComponentDef() { }
if (false) {
    /**
     * Runtime unique component ID.
     * @type {?}
     */
    ComponentDef.prototype.id;
    /**
     * The View template of the component.
     * @type {?}
     */
    ComponentDef.prototype.template;
    /**
     * An array of `ngContent[selector]` values that were found in the template.
     * @type {?|undefined}
     */
    ComponentDef.prototype.ngContentSelectors;
    /**
     * A set of styles that the component needs to be present for component to render correctly.
     * @type {?}
     */
    ComponentDef.prototype.styles;
    /**
     * The number of nodes, local refs, and pipes in this component template.
     *
     * Used to calculate the length of the component's LView array, so we
     * can pre-fill the array and set the binding start index.
     * @type {?}
     */
    ComponentDef.prototype.consts;
    /**
     * The number of bindings in this component template (including pure fn bindings).
     *
     * Used to calculate the length of the component's LView array, so we
     * can pre-fill the array and set the host binding start index.
     * @type {?}
     */
    ComponentDef.prototype.vars;
    /**
     * Query-related instructions for a component.
     * @type {?}
     */
    ComponentDef.prototype.viewQuery;
    /**
     * The view encapsulation type, which determines how styles are applied to
     * DOM elements. One of
     * - `Emulated` (default): Emulate native scoping of styles.
     * - `Native`: Use the native encapsulation mechanism of the renderer.
     * - `ShadowDom`: Use modern [ShadowDOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     *   create a ShadowRoot for component's host element.
     * - `None`: Do not provide any template or style encapsulation.
     * @type {?}
     */
    ComponentDef.prototype.encapsulation;
    /**
     * Defines arbitrary developer-defined data to be stored on a renderer instance.
     * This is useful for renderers that delegate to other renderers.
     * @type {?}
     */
    ComponentDef.prototype.data;
    /**
     * Whether or not this component's ChangeDetectionStrategy is OnPush
     * @type {?}
     */
    ComponentDef.prototype.onPush;
    /**
     * Registry of directives and components that may be found in this view.
     *
     * The property is either an array of `DirectiveDef`s or a function which returns the array of
     * `DirectiveDef`s. The function is necessary to be able to support forward declarations.
     * @type {?}
     */
    ComponentDef.prototype.directiveDefs;
    /**
     * Registry of pipes that may be found in this view.
     *
     * The property is either an array of `PipeDefs`s or a function which returns the array of
     * `PipeDefs`s. The function is necessary to be able to support forward declarations.
     * @type {?}
     */
    ComponentDef.prototype.pipeDefs;
    /**
     * The set of schemas that declare elements to be allowed in the component's template.
     * @type {?}
     */
    ComponentDef.prototype.schemas;
    /**
     * Ivy runtime uses this place to store the computed tView for the component. This gets filled on
     * the first run of component.
     * @type {?}
     */
    ComponentDef.prototype.tView;
    /**
     * Used to store the result of `noSideEffects` function so that it is not removed by closure
     * compiler. The property should never be read.
     * @type {?|undefined}
     */
    ComponentDef.prototype._;
}
/**
 * Runtime link information for Pipes.
 *
 * This is internal data structure used by the renderer to link
 * pipes into templates.
 *
 * NOTE: Always use `definePipe` function to create this object,
 * never create the object directly since the shape of this object
 * can change between versions.
 *
 * See: {\@link definePipe}
 * @record
 * @template T
 */
export function PipeDef() { }
if (false) {
    /**
     * Pipe name.
     *
     * Used to resolve pipe in templates.
     * @type {?}
     */
    PipeDef.prototype.name;
    /**
     * Factory function used to create a new pipe instance.
     * @type {?}
     */
    PipeDef.prototype.factory;
    /**
     * Whether or not the pipe is pure.
     *
     * Pure pipes result only depends on the pipe input and not on internal
     * state of the pipe.
     * @type {?}
     */
    PipeDef.prototype.pure;
    /** @type {?} */
    PipeDef.prototype.onDestroy;
}
/**
 * @record
 */
export function DirectiveDefFeature() { }
if (false) {
    /**
     * Marks a feature as something that {\@link InheritDefinitionFeature} will execute
     * during inheritance.
     *
     * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
     * identifying the change as a side effect, and the feature will be included in
     * every bundle.
     * @type {?|undefined}
     */
    DirectiveDefFeature.prototype.ngInherit;
    /* Skipping unhandled member: <T>(directiveDef: DirectiveDef<T>): void;*/
}
/**
 * @record
 */
export function ComponentDefFeature() { }
if (false) {
    /**
     * Marks a feature as something that {\@link InheritDefinitionFeature} will execute
     * during inheritance.
     *
     * NOTE: DO NOT SET IN ROOT OF MODULE! Doing so will result in tree-shakers/bundlers
     * identifying the change as a side effect, and the feature will be included in
     * every bundle.
     * @type {?|undefined}
     */
    ComponentDefFeature.prototype.ngInherit;
    /* Skipping unhandled member: <T>(componentDef: ComponentDef<T>): void;*/
}
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
/** @type {?} */
export const unusedValueExportToPlacateAjd = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy9kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUE2REUsNkVBQTZFO0lBQzdFLFNBQWE7SUFFYiw2REFBNkQ7SUFDN0QsU0FBYTs7Ozs7Ozs7O0FBT2YsbUNBQTRFOzs7SUFBeEIsdUNBQXNCOzs7Ozs7OztBQU0xRSxtQ0FBNEU7OztJQUF4Qix1Q0FBc0I7Ozs7SUFFckMsZUFBbUI7Ozs7Ozs7OztBQU14RCw4QkFBa0U7OztJQUFuQiw2QkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQW9CaEUsK0JBcUNDOzs7Ozs7OztJQS9CQywyQkFBMEM7Ozs7OztJQU0xQyxtQ0FBa0Q7Ozs7Ozs7SUFPbEQsNEJBQTJDOzs7OztJQUszQyxtQ0FBK0M7Ozs7Ozs7SUFPL0MsOEJBQXVDOzs7OztJQUt2QyxpQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCN0Msa0NBeUNDOzs7Ozs7SUF2Q0MsNEJBQWM7Ozs7O0lBR2QseUNBRW9COzs7OztJQUdwQixpQ0FBb0M7Ozs7O0lBS3BDLGdDQUFpQzs7Ozs7SUFLakMsK0JBQXNCOztJQUd0QixpQ0FBNkI7O0lBQzdCLDhCQUEwQjs7SUFDMUIsK0JBQTJCOztJQUMzQix3Q0FBb0M7O0lBQ3BDLDJDQUF1Qzs7SUFDdkMscUNBQWlDOztJQUNqQyx3Q0FBb0M7O0lBQ3BDLGlDQUE2Qjs7Ozs7SUFLN0IsZ0NBQThDOztJQUU5QyxnQ0FHNEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQjlDLGtDQStGQzs7Ozs7O0lBM0ZDLDBCQUFvQjs7Ozs7SUFLcEIsZ0NBQXdDOzs7OztJQUt4QywwQ0FBdUM7Ozs7O0lBS3ZDLDhCQUEwQjs7Ozs7Ozs7SUFTMUIsOEJBQXdCOzs7Ozs7OztJQVF4Qiw0QkFBc0I7Ozs7O0lBS3RCLGlDQUF1Qzs7Ozs7Ozs7Ozs7SUFXdkMscUNBQTBDOzs7Ozs7SUFNMUMsNEJBQXFDOzs7OztJQUdyQyw4QkFBeUI7Ozs7Ozs7O0lBUXpCLHFDQUE4Qzs7Ozs7Ozs7SUFROUMsZ0NBQW9DOzs7OztJQUtwQywrQkFBK0I7Ozs7OztJQU0vQiw2QkFBa0I7Ozs7OztJQU1sQix5QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlckIsNkJBdUJDOzs7Ozs7OztJQWpCQyx1QkFBc0I7Ozs7O0lBS3RCLDBCQUFzQjs7Ozs7Ozs7SUFRdEIsdUJBQXVCOztJQUd2Qiw0QkFBNkI7Ozs7O0FBUS9CLHlDQVdDOzs7Ozs7Ozs7OztJQURDLHdDQUFpQjs7Ozs7O0FBR25CLHlDQVdDOzs7Ozs7Ozs7OztJQURDLHdDQUFpQjs7Ozs7O0FBdUNuQixNQUFNLE9BQU8sNkJBQTZCLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTY2hlbWFNZXRhZGF0YSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHtQcm9jZXNzUHJvdmlkZXJzRnVuY3Rpb259IGZyb20gJy4uLy4uL2RpL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Q3NzU2VsZWN0b3JMaXN0fSBmcm9tICcuL3Byb2plY3Rpb24nO1xuaW1wb3J0IHtUVmlld30gZnJvbSAnLi92aWV3JztcblxuXG4vKipcbiAqIERlZmluaXRpb24gb2Ygd2hhdCBhIHRlbXBsYXRlIHJlbmRlcmluZyBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlIGZvciBhIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50VGVtcGxhdGU8VD4gPSB7XG4gIC8vIE5vdGU6IHRoZSBjdHggcGFyYW1ldGVyIGlzIHR5cGVkIGFzIFR8VSwgYXMgdXNpbmcgb25seSBVIHdvdWxkIHByZXZlbnQgYSB0ZW1wbGF0ZSB3aXRoXG4gIC8vIGUuZy4gY3R4OiB7fSBmcm9tIGJlaW5nIGFzc2lnbmVkIHRvIENvbXBvbmVudFRlbXBsYXRlPGFueT4gYXMgVHlwZVNjcmlwdCB3b24ndCBpbmZlciBVID0gYW55XG4gIC8vIGluIHRoYXQgc2NlbmFyaW8uIEJ5IGluY2x1ZGluZyBUIHRoaXMgaW5jb21wYXRpYmlsaXR5IGlzIHJlc29sdmVkLlxuICA8VSBleHRlbmRzIFQ+KHJmOiBSZW5kZXJGbGFncywgY3R4OiBUIHwgVSk6IHZvaWQ7XG59O1xuXG4vKipcbiAqIERlZmluaXRpb24gb2Ygd2hhdCBhIHZpZXcgcXVlcmllcyBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlLlxuICovXG5leHBvcnQgdHlwZSBWaWV3UXVlcmllc0Z1bmN0aW9uPFQ+ID0gPFUgZXh0ZW5kcyBUPihyZjogUmVuZGVyRmxhZ3MsIGN0eDogVSkgPT4gdm9pZDtcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIHdoYXQgYSBjb250ZW50IHF1ZXJpZXMgZnVuY3Rpb24gc2hvdWxkIGxvb2sgbGlrZS5cbiAqL1xuZXhwb3J0IHR5cGUgQ29udGVudFF1ZXJpZXNGdW5jdGlvbjxUPiA9XG4gICAgPFUgZXh0ZW5kcyBUPihyZjogUmVuZGVyRmxhZ3MsIGN0eDogVSwgZGlyZWN0aXZlSW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIHdoYXQgYSBmYWN0b3J5IGZ1bmN0aW9uIHNob3VsZCBsb29rIGxpa2UuXG4gKi9cbmV4cG9ydCB0eXBlIEZhY3RvcnlGbjxUPiA9IHtcbiAgLyoqXG4gICAqIFN1YmNsYXNzZXMgd2l0aG91dCBhbiBleHBsaWNpdCBjb25zdHJ1Y3RvciBjYWxsIHRocm91Z2ggdG8gdGhlIGZhY3Rvcnkgb2YgdGhlaXIgYmFzZVxuICAgKiBkZWZpbml0aW9uLCBwcm92aWRpbmcgaXQgd2l0aCB0aGVpciBvd24gY29uc3RydWN0b3IgdG8gaW5zdGFudGlhdGUuXG4gICAqL1xuICA8VSBleHRlbmRzIFQ+KHQ6IFR5cGU8VT4pOiBVO1xuXG4gIC8qKlxuICAgKiBJZiBubyBjb25zdHJ1Y3RvciB0byBpbnN0YW50aWF0ZSBpcyBwcm92aWRlZCwgYW4gaW5zdGFuY2Ugb2YgdHlwZSBUIGl0c2VsZiBpcyBjcmVhdGVkLlxuICAgKi9cbiAgKHQ/OiB1bmRlZmluZWQpOiBUO1xufTtcblxuLyoqXG4gKiBGbGFncyBwYXNzZWQgaW50byB0ZW1wbGF0ZSBmdW5jdGlvbnMgdG8gZGV0ZXJtaW5lIHdoaWNoIGJsb2NrcyAoaS5lLiBjcmVhdGlvbiwgdXBkYXRlKVxuICogc2hvdWxkIGJlIGV4ZWN1dGVkLlxuICpcbiAqIFR5cGljYWxseSwgYSB0ZW1wbGF0ZSBydW5zIGJvdGggdGhlIGNyZWF0aW9uIGJsb2NrIGFuZCB0aGUgdXBkYXRlIGJsb2NrIG9uIGluaXRpYWxpemF0aW9uIGFuZFxuICogc3Vic2VxdWVudCBydW5zIG9ubHkgZXhlY3V0ZSB0aGUgdXBkYXRlIGJsb2NrLiBIb3dldmVyLCBkeW5hbWljYWxseSBjcmVhdGVkIHZpZXdzIHJlcXVpcmUgdGhhdFxuICogdGhlIGNyZWF0aW9uIGJsb2NrIGJlIGV4ZWN1dGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgdXBkYXRlIGJsb2NrIChmb3IgYmFja3dhcmRzIGNvbXBhdCkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIFJlbmRlckZsYWdzIHtcbiAgLyogV2hldGhlciB0byBydW4gdGhlIGNyZWF0aW9uIGJsb2NrIChlLmcuIGNyZWF0ZSBlbGVtZW50cyBhbmQgZGlyZWN0aXZlcykgKi9cbiAgQ3JlYXRlID0gMGIwMSxcblxuICAvKiBXaGV0aGVyIHRvIHJ1biB0aGUgdXBkYXRlIGJsb2NrIChlLmcuIHJlZnJlc2ggYmluZGluZ3MpICovXG4gIFVwZGF0ZSA9IDBiMTBcbn1cblxuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIGBUeXBlYCB3aGljaCBoYXMgYSBzdGF0aWMgYG5nQ29tcG9uZW50RGVmYDpgQ29tcG9uZW50RGVmYCBmaWVsZCBtYWtpbmcgaXRcbiAqIGNvbnN1bWFibGUgZm9yIHJlbmRlcmluZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRUeXBlPFQ+IGV4dGVuZHMgVHlwZTxUPiB7IG5nQ29tcG9uZW50RGVmOiBuZXZlcjsgfVxuXG4vKipcbiAqIEEgc3ViY2xhc3Mgb2YgYFR5cGVgIHdoaWNoIGhhcyBhIHN0YXRpYyBgbmdEaXJlY3RpdmVEZWZgOmBEaXJlY3RpdmVEZWZgIGZpZWxkIG1ha2luZyBpdFxuICogY29uc3VtYWJsZSBmb3IgcmVuZGVyaW5nLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZVR5cGU8VD4gZXh0ZW5kcyBUeXBlPFQ+IHsgbmdEaXJlY3RpdmVEZWY6IG5ldmVyOyB9XG5cbmV4cG9ydCBjb25zdCBlbnVtIERpcmVjdGl2ZURlZkZsYWdzIHtDb250ZW50UXVlcnkgPSAwYjEwfVxuXG4vKipcbiAqIEEgc3ViY2xhc3Mgb2YgYFR5cGVgIHdoaWNoIGhhcyBhIHN0YXRpYyBgbmdQaXBlRGVmYDpgUGlwZURlZmAgZmllbGQgbWFraW5nIGl0XG4gKiBjb25zdW1hYmxlIGZvciByZW5kZXJpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZVR5cGU8VD4gZXh0ZW5kcyBUeXBlPFQ+IHsgbmdQaXBlRGVmOiBuZXZlcjsgfVxuXG4vKipcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCB0eXBlIMm1ybVEaXJlY3RpdmVEZWZXaXRoTWV0YTxcbiAgICBULCBTZWxlY3RvciBleHRlbmRzIHN0cmluZywgRXhwb3J0QXMgZXh0ZW5kcyBzdHJpbmdbXSwgSW5wdXRNYXAgZXh0ZW5kc3tba2V5OiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIE91dHB1dE1hcCBleHRlbmRze1trZXk6IHN0cmluZ106IHN0cmluZ30sIFF1ZXJ5RmllbGRzIGV4dGVuZHMgc3RyaW5nW10+ID0gRGlyZWN0aXZlRGVmPFQ+O1xuXG4vKipcbiAqIFJ1bnRpbWUgaW5mb3JtYXRpb24gZm9yIGNsYXNzZXMgdGhhdCBhcmUgaW5oZXJpdGVkIGJ5IGNvbXBvbmVudHMgb3IgZGlyZWN0aXZlc1xuICogdGhhdCBhcmVuJ3QgZGVmaW5lZCBhcyBjb21wb25lbnRzIG9yIGRpcmVjdGl2ZXMuXG4gKlxuICogVGhpcyBpcyBhbiBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSB1c2VkIGJ5IHRoZSByZW5kZXJlciB0byBkZXRlcm1pbmUgd2hhdCBpbnB1dHNcbiAqIGFuZCBvdXRwdXRzIHNob3VsZCBiZSBpbmhlcml0ZWQuXG4gKlxuICogU2VlOiB7QGxpbmsgZGVmaW5lQmFzZX1cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIMm1ybVCYXNlRGVmPFQ+IHtcbiAgLyoqXG4gICAqIEEgZGljdGlvbmFyeSBtYXBwaW5nIHRoZSBpbnB1dHMnIG1pbmlmaWVkIHByb3BlcnR5IG5hbWVzIHRvIHRoZWlyIHB1YmxpYyBBUEkgbmFtZXMsIHdoaWNoXG4gICAqIGFyZSB0aGVpciBhbGlhc2VzIGlmIGFueSwgb3IgdGhlaXIgb3JpZ2luYWwgdW5taW5pZmllZCBwcm9wZXJ0eSBuYW1lc1xuICAgKiAoYXMgaW4gYEBJbnB1dCgnYWxpYXMnKSBwcm9wZXJ0eU5hbWU6IGFueTtgKS5cbiAgICovXG4gIHJlYWRvbmx5IGlucHV0czoge1tQIGluIGtleW9mIFRdOiBzdHJpbmd9O1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBUaGlzIGlzIG9ubHkgaGVyZSBiZWNhdXNlIGBOZ09uQ2hhbmdlc2AgaW5jb3JyZWN0bHkgdXNlcyBkZWNsYXJlZCBuYW1lIGluc3RlYWQgb2ZcbiAgICogcHVibGljIG9yIG1pbmlmaWVkIG5hbWUuXG4gICAqL1xuICByZWFkb25seSBkZWNsYXJlZElucHV0czoge1tQIGluIGtleW9mIFRdOiBzdHJpbmd9O1xuXG4gIC8qKlxuICAgKiBBIGRpY3Rpb25hcnkgbWFwcGluZyB0aGUgb3V0cHV0cycgbWluaWZpZWQgcHJvcGVydHkgbmFtZXMgdG8gdGhlaXIgcHVibGljIEFQSSBuYW1lcywgd2hpY2hcbiAgICogYXJlIHRoZWlyIGFsaWFzZXMgaWYgYW55LCBvciB0aGVpciBvcmlnaW5hbCB1bm1pbmlmaWVkIHByb3BlcnR5IG5hbWVzXG4gICAqIChhcyBpbiBgQE91dHB1dCgnYWxpYXMnKSBwcm9wZXJ0eU5hbWU6IGFueTtgKS5cbiAgICovXG4gIHJlYWRvbmx5IG91dHB1dHM6IHtbUCBpbiBrZXlvZiBUXTogc3RyaW5nfTtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZWZyZXNoIGNvbnRlbnQgcXVlcmllcyBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBkaXJlY3RpdmUuXG4gICAqL1xuICBjb250ZW50UXVlcmllczogQ29udGVudFF1ZXJpZXNGdW5jdGlvbjxUPnxudWxsO1xuXG4gIC8qKlxuICAgKiBRdWVyeS1yZWxhdGVkIGluc3RydWN0aW9ucyBmb3IgYSBkaXJlY3RpdmUuIE5vdGUgdGhhdCB3aGlsZSBkaXJlY3RpdmVzIGRvbid0IGhhdmUgYVxuICAgKiB2aWV3IGFuZCBhcyBzdWNoIHZpZXcgcXVlcmllcyB3b24ndCBuZWNlc3NhcmlseSBkbyBhbnl0aGluZywgdGhlcmUgbWlnaHQgYmVcbiAgICogY29tcG9uZW50cyB0aGF0IGV4dGVuZCB0aGUgZGlyZWN0aXZlLlxuICAgKi9cbiAgdmlld1F1ZXJ5OiBWaWV3UXVlcmllc0Z1bmN0aW9uPFQ+fG51bGw7XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyBob3N0IGJpbmRpbmdzIG9uIHRoZSBhc3NvY2lhdGVkIGRpcmVjdGl2ZS5cbiAgICovXG4gIGhvc3RCaW5kaW5nczogSG9zdEJpbmRpbmdzRnVuY3Rpb248VD58bnVsbDtcbn1cblxuLyoqXG4gKiBSdW50aW1lIGxpbmsgaW5mb3JtYXRpb24gZm9yIERpcmVjdGl2ZXMuXG4gKlxuICogVGhpcyBpcyBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSB1c2VkIGJ5IHRoZSByZW5kZXIgdG8gbGlua1xuICogZGlyZWN0aXZlcyBpbnRvIHRlbXBsYXRlcy5cbiAqXG4gKiBOT1RFOiBBbHdheXMgdXNlIGBkZWZpbmVEaXJlY3RpdmVgIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGlzIG9iamVjdCxcbiAqIG5ldmVyIGNyZWF0ZSB0aGUgb2JqZWN0IGRpcmVjdGx5IHNpbmNlIHRoZSBzaGFwZSBvZiB0aGlzIG9iamVjdFxuICogY2FuIGNoYW5nZSBiZXR3ZWVuIHZlcnNpb25zLlxuICpcbiAqIEBwYXJhbSBTZWxlY3RvciB0eXBlIG1ldGFkYXRhIHNwZWNpZnlpbmcgdGhlIHNlbGVjdG9yIG9mIHRoZSBkaXJlY3RpdmUgb3IgY29tcG9uZW50XG4gKlxuICogU2VlOiB7QGxpbmsgZGVmaW5lRGlyZWN0aXZlfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZURlZjxUPiBleHRlbmRzIMm1ybVCYXNlRGVmPFQ+IHtcbiAgLyoqIFRva2VuIHJlcHJlc2VudGluZyB0aGUgZGlyZWN0aXZlLiBVc2VkIGJ5IERJLiAqL1xuICB0eXBlOiBUeXBlPFQ+O1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IHJlc29sdmVzIHByb3ZpZGVycyBhbmQgcHVibGlzaGVzIHRoZW0gaW50byB0aGUgREkgc3lzdGVtLiAqL1xuICBwcm92aWRlcnNSZXNvbHZlcjpcbiAgICAgICg8VSBleHRlbmRzIFQ+KGRlZjogRGlyZWN0aXZlRGVmPFU+LCBwcm9jZXNzUHJvdmlkZXJzRm4/OiBQcm9jZXNzUHJvdmlkZXJzRnVuY3Rpb24pID0+XG4gICAgICAgICAgIHZvaWQpfG51bGw7XG5cbiAgLyoqIFRoZSBzZWxlY3RvcnMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWF0Y2ggbm9kZXMgdG8gdGhpcyBkaXJlY3RpdmUuICovXG4gIHJlYWRvbmx5IHNlbGVjdG9yczogQ3NzU2VsZWN0b3JMaXN0O1xuXG4gIC8qKlxuICAgKiBOYW1lIHVuZGVyIHdoaWNoIHRoZSBkaXJlY3RpdmUgaXMgZXhwb3J0ZWQgKGZvciB1c2Ugd2l0aCBsb2NhbCByZWZlcmVuY2VzIGluIHRlbXBsYXRlKVxuICAgKi9cbiAgcmVhZG9ubHkgZXhwb3J0QXM6IHN0cmluZ1tdfG51bGw7XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYSBuZXcgZGlyZWN0aXZlIGluc3RhbmNlLlxuICAgKi9cbiAgZmFjdG9yeTogRmFjdG9yeUZuPFQ+O1xuXG4gIC8qIFRoZSBmb2xsb3dpbmcgYXJlIGxpZmVjeWNsZSBob29rcyBmb3IgdGhpcyBjb21wb25lbnQgKi9cbiAgb25DaGFuZ2VzOiAoKCkgPT4gdm9pZCl8bnVsbDtcbiAgb25Jbml0OiAoKCkgPT4gdm9pZCl8bnVsbDtcbiAgZG9DaGVjazogKCgpID0+IHZvaWQpfG51bGw7XG4gIGFmdGVyQ29udGVudEluaXQ6ICgoKSA9PiB2b2lkKXxudWxsO1xuICBhZnRlckNvbnRlbnRDaGVja2VkOiAoKCkgPT4gdm9pZCl8bnVsbDtcbiAgYWZ0ZXJWaWV3SW5pdDogKCgpID0+IHZvaWQpfG51bGw7XG4gIGFmdGVyVmlld0NoZWNrZWQ6ICgoKSA9PiB2b2lkKXxudWxsO1xuICBvbkRlc3Ryb3k6ICgoKSA9PiB2b2lkKXxudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgZmVhdHVyZXMgYXBwbGllZCB0byB0aGlzIGRpcmVjdGl2ZVxuICAgKi9cbiAgcmVhZG9ubHkgZmVhdHVyZXM6IERpcmVjdGl2ZURlZkZlYXR1cmVbXXxudWxsO1xuXG4gIHNldElucHV0OlxuICAgICAgKDxVIGV4dGVuZHMgVD4oXG4gICAgICAgICAgIHRoaXM6IERpcmVjdGl2ZURlZjxVPiwgaW5zdGFuY2U6IFUsIHZhbHVlOiBhbnksIHB1YmxpY05hbWU6IHN0cmluZyxcbiAgICAgICAgICAgcHJpdmF0ZU5hbWU6IHN0cmluZykgPT4gdm9pZCl8bnVsbDtcbn1cblxuLyoqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgdHlwZSDJtcm1Q29tcG9uZW50RGVmV2l0aE1ldGE8XG4gICAgVCwgU2VsZWN0b3IgZXh0ZW5kcyBTdHJpbmcsIEV4cG9ydEFzIGV4dGVuZHMgc3RyaW5nW10sIElucHV0TWFwIGV4dGVuZHN7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICBPdXRwdXRNYXAgZXh0ZW5kc3tba2V5OiBzdHJpbmddOiBzdHJpbmd9LCBRdWVyeUZpZWxkcyBleHRlbmRzIHN0cmluZ1tdPiA9IENvbXBvbmVudERlZjxUPjtcblxuLyoqXG4gKiBSdW50aW1lIGxpbmsgaW5mb3JtYXRpb24gZm9yIENvbXBvbmVudHMuXG4gKlxuICogVGhpcyBpcyBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSB1c2VkIGJ5IHRoZSByZW5kZXIgdG8gbGlua1xuICogY29tcG9uZW50cyBpbnRvIHRlbXBsYXRlcy5cbiAqXG4gKiBOT1RFOiBBbHdheXMgdXNlIGBkZWZpbmVDb21wb25lbnRgIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGlzIG9iamVjdCxcbiAqIG5ldmVyIGNyZWF0ZSB0aGUgb2JqZWN0IGRpcmVjdGx5IHNpbmNlIHRoZSBzaGFwZSBvZiB0aGlzIG9iamVjdFxuICogY2FuIGNoYW5nZSBiZXR3ZWVuIHZlcnNpb25zLlxuICpcbiAqIFNlZToge0BsaW5rIGRlZmluZUNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnREZWY8VD4gZXh0ZW5kcyBEaXJlY3RpdmVEZWY8VD4ge1xuICAvKipcbiAgICogUnVudGltZSB1bmlxdWUgY29tcG9uZW50IElELlxuICAgKi9cbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIFZpZXcgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIHJlYWRvbmx5IHRlbXBsYXRlOiBDb21wb25lbnRUZW1wbGF0ZTxUPjtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgYG5nQ29udGVudFtzZWxlY3Rvcl1gIHZhbHVlcyB0aGF0IHdlcmUgZm91bmQgaW4gdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcmVhZG9ubHkgbmdDb250ZW50U2VsZWN0b3JzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIHN0eWxlcyB0aGF0IHRoZSBjb21wb25lbnQgbmVlZHMgdG8gYmUgcHJlc2VudCBmb3IgY29tcG9uZW50IHRvIHJlbmRlciBjb3JyZWN0bHkuXG4gICAqL1xuICByZWFkb25seSBzdHlsZXM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG5vZGVzLCBsb2NhbCByZWZzLCBhbmQgcGlwZXMgaW4gdGhpcyBjb21wb25lbnQgdGVtcGxhdGUuXG4gICAqXG4gICAqIFVzZWQgdG8gY2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhlIGNvbXBvbmVudCdzIExWaWV3IGFycmF5LCBzbyB3ZVxuICAgKiBjYW4gcHJlLWZpbGwgdGhlIGFycmF5IGFuZCBzZXQgdGhlIGJpbmRpbmcgc3RhcnQgaW5kZXguXG4gICAqL1xuICAvLyBUT0RPKGthcmEpOiByZW1vdmUgcXVlcmllcyBmcm9tIHRoaXMgY291bnRcbiAgcmVhZG9ubHkgY29uc3RzOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgYmluZGluZ3MgaW4gdGhpcyBjb21wb25lbnQgdGVtcGxhdGUgKGluY2x1ZGluZyBwdXJlIGZuIGJpbmRpbmdzKS5cbiAgICpcbiAgICogVXNlZCB0byBjYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGUgY29tcG9uZW50J3MgTFZpZXcgYXJyYXksIHNvIHdlXG4gICAqIGNhbiBwcmUtZmlsbCB0aGUgYXJyYXkgYW5kIHNldCB0aGUgaG9zdCBiaW5kaW5nIHN0YXJ0IGluZGV4LlxuICAgKi9cbiAgcmVhZG9ubHkgdmFyczogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBRdWVyeS1yZWxhdGVkIGluc3RydWN0aW9ucyBmb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICB2aWV3UXVlcnk6IFZpZXdRdWVyaWVzRnVuY3Rpb248VD58bnVsbDtcblxuICAvKipcbiAgICogVGhlIHZpZXcgZW5jYXBzdWxhdGlvbiB0eXBlLCB3aGljaCBkZXRlcm1pbmVzIGhvdyBzdHlsZXMgYXJlIGFwcGxpZWQgdG9cbiAgICogRE9NIGVsZW1lbnRzLiBPbmUgb2ZcbiAgICogLSBgRW11bGF0ZWRgIChkZWZhdWx0KTogRW11bGF0ZSBuYXRpdmUgc2NvcGluZyBvZiBzdHlsZXMuXG4gICAqIC0gYE5hdGl2ZWA6IFVzZSB0aGUgbmF0aXZlIGVuY2Fwc3VsYXRpb24gbWVjaGFuaXNtIG9mIHRoZSByZW5kZXJlci5cbiAgICogLSBgU2hhZG93RG9tYDogVXNlIG1vZGVybiBbU2hhZG93RE9NXShodHRwczovL3czYy5naXRodWIuaW8vd2ViY29tcG9uZW50cy9zcGVjL3NoYWRvdy8pIGFuZFxuICAgKiAgIGNyZWF0ZSBhIFNoYWRvd1Jvb3QgZm9yIGNvbXBvbmVudCdzIGhvc3QgZWxlbWVudC5cbiAgICogLSBgTm9uZWA6IERvIG5vdCBwcm92aWRlIGFueSB0ZW1wbGF0ZSBvciBzdHlsZSBlbmNhcHN1bGF0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb247XG5cbiAgLyoqXG4gICAqIERlZmluZXMgYXJiaXRyYXJ5IGRldmVsb3Blci1kZWZpbmVkIGRhdGEgdG8gYmUgc3RvcmVkIG9uIGEgcmVuZGVyZXIgaW5zdGFuY2UuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciByZW5kZXJlcnMgdGhhdCBkZWxlZ2F0ZSB0byBvdGhlciByZW5kZXJlcnMuXG4gICAqL1xuICByZWFkb25seSBkYXRhOiB7W2tpbmQ6IHN0cmluZ106IGFueX07XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9uZW50J3MgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgaXMgT25QdXNoICovXG4gIHJlYWRvbmx5IG9uUHVzaDogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVnaXN0cnkgb2YgZGlyZWN0aXZlcyBhbmQgY29tcG9uZW50cyB0aGF0IG1heSBiZSBmb3VuZCBpbiB0aGlzIHZpZXcuXG4gICAqXG4gICAqIFRoZSBwcm9wZXJ0eSBpcyBlaXRoZXIgYW4gYXJyYXkgb2YgYERpcmVjdGl2ZURlZmBzIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0aGUgYXJyYXkgb2ZcbiAgICogYERpcmVjdGl2ZURlZmBzLiBUaGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gc3VwcG9ydCBmb3J3YXJkIGRlY2xhcmF0aW9ucy5cbiAgICovXG4gIGRpcmVjdGl2ZURlZnM6IERpcmVjdGl2ZURlZkxpc3RPckZhY3Rvcnl8bnVsbDtcblxuICAvKipcbiAgICogUmVnaXN0cnkgb2YgcGlwZXMgdGhhdCBtYXkgYmUgZm91bmQgaW4gdGhpcyB2aWV3LlxuICAgKlxuICAgKiBUaGUgcHJvcGVydHkgaXMgZWl0aGVyIGFuIGFycmF5IG9mIGBQaXBlRGVmc2BzIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0aGUgYXJyYXkgb2ZcbiAgICogYFBpcGVEZWZzYHMuIFRoZSBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gYmUgYWJsZSB0byBzdXBwb3J0IGZvcndhcmQgZGVjbGFyYXRpb25zLlxuICAgKi9cbiAgcGlwZURlZnM6IFBpcGVEZWZMaXN0T3JGYWN0b3J5fG51bGw7XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2Ygc2NoZW1hcyB0aGF0IGRlY2xhcmUgZWxlbWVudHMgdG8gYmUgYWxsb3dlZCBpbiB0aGUgY29tcG9uZW50J3MgdGVtcGxhdGUuXG4gICAqL1xuICBzY2hlbWFzOiBTY2hlbWFNZXRhZGF0YVtdfG51bGw7XG5cbiAgLyoqXG4gICAqIEl2eSBydW50aW1lIHVzZXMgdGhpcyBwbGFjZSB0byBzdG9yZSB0aGUgY29tcHV0ZWQgdFZpZXcgZm9yIHRoZSBjb21wb25lbnQuIFRoaXMgZ2V0cyBmaWxsZWQgb25cbiAgICogdGhlIGZpcnN0IHJ1biBvZiBjb21wb25lbnQuXG4gICAqL1xuICB0VmlldzogVFZpZXd8bnVsbDtcblxuICAvKipcbiAgICogVXNlZCB0byBzdG9yZSB0aGUgcmVzdWx0IG9mIGBub1NpZGVFZmZlY3RzYCBmdW5jdGlvbiBzbyB0aGF0IGl0IGlzIG5vdCByZW1vdmVkIGJ5IGNsb3N1cmVcbiAgICogY29tcGlsZXIuIFRoZSBwcm9wZXJ0eSBzaG91bGQgbmV2ZXIgYmUgcmVhZC5cbiAgICovXG4gIHJlYWRvbmx5IF8/OiBuZXZlcjtcbn1cblxuLyoqXG4gKiBSdW50aW1lIGxpbmsgaW5mb3JtYXRpb24gZm9yIFBpcGVzLlxuICpcbiAqIFRoaXMgaXMgaW50ZXJuYWwgZGF0YSBzdHJ1Y3R1cmUgdXNlZCBieSB0aGUgcmVuZGVyZXIgdG8gbGlua1xuICogcGlwZXMgaW50byB0ZW1wbGF0ZXMuXG4gKlxuICogTk9URTogQWx3YXlzIHVzZSBgZGVmaW5lUGlwZWAgZnVuY3Rpb24gdG8gY3JlYXRlIHRoaXMgb2JqZWN0LFxuICogbmV2ZXIgY3JlYXRlIHRoZSBvYmplY3QgZGlyZWN0bHkgc2luY2UgdGhlIHNoYXBlIG9mIHRoaXMgb2JqZWN0XG4gKiBjYW4gY2hhbmdlIGJldHdlZW4gdmVyc2lvbnMuXG4gKlxuICogU2VlOiB7QGxpbmsgZGVmaW5lUGlwZX1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaXBlRGVmPFQ+IHtcbiAgLyoqXG4gICAqIFBpcGUgbmFtZS5cbiAgICpcbiAgICogVXNlZCB0byByZXNvbHZlIHBpcGUgaW4gdGVtcGxhdGVzLlxuICAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBGYWN0b3J5IGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHBpcGUgaW5zdGFuY2UuXG4gICAqL1xuICBmYWN0b3J5OiBGYWN0b3J5Rm48VD47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBwaXBlIGlzIHB1cmUuXG4gICAqXG4gICAqIFB1cmUgcGlwZXMgcmVzdWx0IG9ubHkgZGVwZW5kcyBvbiB0aGUgcGlwZSBpbnB1dCBhbmQgbm90IG9uIGludGVybmFsXG4gICAqIHN0YXRlIG9mIHRoZSBwaXBlLlxuICAgKi9cbiAgcmVhZG9ubHkgcHVyZTogYm9vbGVhbjtcblxuICAvKiBUaGUgZm9sbG93aW5nIGFyZSBsaWZlY3ljbGUgaG9va3MgZm9yIHRoaXMgcGlwZSAqL1xuICBvbkRlc3Ryb3k6ICgoKSA9PiB2b2lkKXxudWxsO1xufVxuXG4vKipcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCB0eXBlIMm1ybVQaXBlRGVmV2l0aE1ldGE8VCwgTmFtZSBleHRlbmRzIHN0cmluZz4gPSBQaXBlRGVmPFQ+O1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZURlZkZlYXR1cmUge1xuICA8VD4oZGlyZWN0aXZlRGVmOiBEaXJlY3RpdmVEZWY8VD4pOiB2b2lkO1xuICAvKipcbiAgICogTWFya3MgYSBmZWF0dXJlIGFzIHNvbWV0aGluZyB0aGF0IHtAbGluayBJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmV9IHdpbGwgZXhlY3V0ZVxuICAgKiBkdXJpbmcgaW5oZXJpdGFuY2UuXG4gICAqXG4gICAqIE5PVEU6IERPIE5PVCBTRVQgSU4gUk9PVCBPRiBNT0RVTEUhIERvaW5nIHNvIHdpbGwgcmVzdWx0IGluIHRyZWUtc2hha2Vycy9idW5kbGVyc1xuICAgKiBpZGVudGlmeWluZyB0aGUgY2hhbmdlIGFzIGEgc2lkZSBlZmZlY3QsIGFuZCB0aGUgZmVhdHVyZSB3aWxsIGJlIGluY2x1ZGVkIGluXG4gICAqIGV2ZXJ5IGJ1bmRsZS5cbiAgICovXG4gIG5nSW5oZXJpdD86IHRydWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50RGVmRmVhdHVyZSB7XG4gIDxUPihjb21wb25lbnREZWY6IENvbXBvbmVudERlZjxUPik6IHZvaWQ7XG4gIC8qKlxuICAgKiBNYXJrcyBhIGZlYXR1cmUgYXMgc29tZXRoaW5nIHRoYXQge0BsaW5rIEluaGVyaXREZWZpbml0aW9uRmVhdHVyZX0gd2lsbCBleGVjdXRlXG4gICAqIGR1cmluZyBpbmhlcml0YW5jZS5cbiAgICpcbiAgICogTk9URTogRE8gTk9UIFNFVCBJTiBST09UIE9GIE1PRFVMRSEgRG9pbmcgc28gd2lsbCByZXN1bHQgaW4gdHJlZS1zaGFrZXJzL2J1bmRsZXJzXG4gICAqIGlkZW50aWZ5aW5nIHRoZSBjaGFuZ2UgYXMgYSBzaWRlIGVmZmVjdCwgYW5kIHRoZSBmZWF0dXJlIHdpbGwgYmUgaW5jbHVkZWQgaW5cbiAgICogZXZlcnkgYnVuZGxlLlxuICAgKi9cbiAgbmdJbmhlcml0PzogdHJ1ZTtcbn1cblxuXG4vKipcbiAqIFR5cGUgdXNlZCBmb3IgZGlyZWN0aXZlRGVmcyBvbiBjb21wb25lbnQgZGVmaW5pdGlvbi5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gaXMgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gc3VwcG9ydCBmb3J3YXJkIGRlY2xhcmF0aW9ucy5cbiAqL1xuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRGVmTGlzdE9yRmFjdG9yeSA9ICgoKSA9PiBEaXJlY3RpdmVEZWZMaXN0KSB8IERpcmVjdGl2ZURlZkxpc3Q7XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZURlZkxpc3QgPSAoRGlyZWN0aXZlRGVmPGFueT58IENvbXBvbmVudERlZjxhbnk+KVtdO1xuXG5leHBvcnQgdHlwZSBEaXJlY3RpdmVUeXBlc09yRmFjdG9yeSA9ICgoKSA9PiBEaXJlY3RpdmVUeXBlTGlzdCkgfCBEaXJlY3RpdmVUeXBlTGlzdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlVHlwZUxpc3QgPVxuICAgIChEaXJlY3RpdmVUeXBlPGFueT58IENvbXBvbmVudFR5cGU8YW55PnxcbiAgICAgVHlwZTxhbnk+LyogVHlwZSBhcyB3b3JrYXJvdW5kIGZvcjogTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzQ4ODEgKi8pW107XG5cbmV4cG9ydCB0eXBlIEhvc3RCaW5kaW5nc0Z1bmN0aW9uPFQ+ID1cbiAgICA8VSBleHRlbmRzIFQ+KHJmOiBSZW5kZXJGbGFncywgY3R4OiBVLCBlbGVtZW50SW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblxuLyoqXG4gKiBUeXBlIHVzZWQgZm9yIFBpcGVEZWZzIG9uIGNvbXBvbmVudCBkZWZpbml0aW9uLlxuICpcbiAqIFRoZSBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gYmUgYWJsZSB0byBzdXBwb3J0IGZvcndhcmQgZGVjbGFyYXRpb25zLlxuICovXG5leHBvcnQgdHlwZSBQaXBlRGVmTGlzdE9yRmFjdG9yeSA9ICgoKSA9PiBQaXBlRGVmTGlzdCkgfCBQaXBlRGVmTGlzdDtcblxuZXhwb3J0IHR5cGUgUGlwZURlZkxpc3QgPSBQaXBlRGVmPGFueT5bXTtcblxuZXhwb3J0IHR5cGUgUGlwZVR5cGVzT3JGYWN0b3J5ID0gKCgpID0+IFBpcGVUeXBlTGlzdCkgfCBQaXBlVHlwZUxpc3Q7XG5cbmV4cG9ydCB0eXBlIFBpcGVUeXBlTGlzdCA9XG4gICAgKFBpcGVUeXBlPGFueT58IFR5cGU8YW55Pi8qIFR5cGUgYXMgd29ya2Fyb3VuZCBmb3I6IE1pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy80ODgxICovKVtdO1xuXG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG4iXX0=