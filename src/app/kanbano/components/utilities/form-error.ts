import { Component, computed, input } from "@angular/core";
import { FieldTree } from "@angular/forms/signals";

@Component({
    selector: "kanbano-lp-form-error",
    templateUrl: "./form-error.html",
    styleUrl: "./form-error.css",
})
export class FormError {
    readonly field = input.required<FieldTree<string>>();
    readonly errorId = input.required<string>();

    protected readonly state = computed(() => this.field()());
    protected readonly visible = computed(() => this.state().invalid() && this.state().touched());
}
