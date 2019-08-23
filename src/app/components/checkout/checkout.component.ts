import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";
import { forbiddenNamesValidator } from "../../validators/forbiddenNamesValidor";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  checkoutForm = this.fb.group({
    fullName: [
      "",
      [Validators.required, forbiddenNamesValidator(["bob", "carlos"])]
    ],
    contactNumbers: this.fb.array([this.fb.control("")]) //By default will have one
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submitCheckoutForm() {
    this.checkoutForm.patchValue({
      fullName: "Carlos",
      test: "This should not appear"
    });
    console.log(this.checkoutForm.value);
  }

  get contactNumbers() {
    return this.checkoutForm.get("contactNumbers") as FormArray;
  }

  addContactNumber() {
    this.contactNumbers.push(this.fb.control(""));
  }
}
