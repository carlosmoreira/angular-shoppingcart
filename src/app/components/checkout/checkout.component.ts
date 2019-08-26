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
    notes: this.fb.control(""),
    deliveryType: this.fb.control(""),
    wrapped: this.fb.control(false),
    randomQuestion: this.fb.control(""),
    contactNumbers: this.fb.array([this.fb.control("")]) //By default will have one
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submitCheckoutForm() {
    console.log(this.checkoutForm.value);
  }

  get contactNumbers() {
    return this.checkoutForm.get("contactNumbers") as FormArray;
  }

  addContactNumber() {
    this.contactNumbers.push(this.fb.control(""));
  }
}
